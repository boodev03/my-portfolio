interface IProps {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  role: string;
  message: string;
}

export const EmailTemplate = ({
  firstname,
  lastname,
  email,
  phone,
  role,
  message,
}: IProps) => {
  return `
    <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; color: #333;">
  <header style="background-color: #4a90e2; padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Thank You for Your Interest!</h1>
  </header>
  
  <main style="padding: 20px; background-color: #f9f9f9;">
    <p style="font-size: 16px; line-height: 1.5;">Dear ${firstname} ${lastname},</p>
    
    <p style="font-size: 16px; line-height: 1.5;">We've received your inquiry about our ${role} services. Here's a summary of the information you provided:</p>
    
    <table style="width: 100%; border-collapse: collapse; margin-top: 20px; margin-bottom: 20px;">
      <tr style="background-color: #e6e6e6;">
        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Field</th>
        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Information</th>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd;">Name</td>
        <td style="padding: 10px; border: 1px solid #ddd;">${firstname} ${lastname}</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd;">Email</td>
        <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd;">Phone</td>
        <td style="padding: 10px; border: 1px solid #ddd;">${phone}</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd;">Service</td>
        <td style="padding: 10px; border: 1px solid #ddd;">${role}</td>
      </tr>
    </table>
    
    <p style="font-size: 16px; line-height: 1.5;">Your message:</p>
    <blockquote style="background-color: #e6e6e6; padding: 15px; border-left: 5px solid #4a90e2; margin: 0;">
      <p style="font-size: 14px; line-height: 1.5; margin: 0;">${message}</p>
    </blockquote>
    
    <p style="font-size: 16px; line-height: 1.5; margin-top: 20px;">We appreciate your interest in our services. Our team will review your inquiry and get back to you shortly.</p>
    
    <a href="#" style="display: inline-block; background-color: #4a90e2; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 20px;">View Our Portfolio</a>
  </main>
  
  <footer style="background-color: #333; color: white; text-align: center; padding: 20px; font-size: 14px;">
    <p>&copy; 2024 Your Company Name. All rights reserved.</p>
    <p>
      <a href="#" style="color: white; text-decoration: none; margin: 0 10px;">Privacy Policy</a> |
      <a href="#" style="color: white; text-decoration: none; margin: 0 10px;">Terms of Service</a>
    </p>
  </footer>
</div>
    `;
};
