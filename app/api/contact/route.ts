import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, city, message } = body;

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: 'درخواست جدید از صفحه ثبت نام مسابقات آنلاین',
      html:`
    <div dir="rtl" style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 8px; border: 1px solid #ddd; max-width: 600px; margin: 0 auto;">
      
      <!-- Header with large title -->
      <div style="background-color: #4CAF50; padding: 15px; border-radius: 8px 8px 0 0; text-align: center;">
        <h1 style="color: white; font-size: 36px; margin: 0;">کودکان هوشمند کردستان</h1>
      </div>

      <!-- Content Section -->
      <div style="background-color: #ffffff; padding: 20px; border-radius: 0 0 8px 8px;">
        <h2 style="color: #333; font-size: 24px; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">درخواست جدید</h2>
        
        <p style="font-size: 16px; color: #333;"><strong>نام و نام خانوادگی:</strong> ${name}</p>
        <p style="font-size: 16px; color: #333;"><strong>شماره موبایل:</strong> ${phone}</p>
        <p style="font-size: 16px; color: #333;"><strong>شهرستان:</strong> ${city}</p>
        
        <p style="font-size: 16px; color: #333;"><strong>پیام:</strong></p>
        <p style="font-size: 16px; color: #555; white-space: pre-wrap;">${message}</p>
        
        <p style="font-size: 14px; color: #777; text-align: center; margin-top: 20px;">با احترام،<br> تیم کودکان هوشمند کردستان</p>
      </div>
      
    </div>
  `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'خطا در ارسال ایمیل' },
      { status: 500 }
    );
  }
}