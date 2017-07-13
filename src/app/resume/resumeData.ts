



export class ResumeData {
  name: string;
  phone: string;
  email: string;
  objective: string;
  education: [
    [
      {institution: string },
      {dates: string },
      {program: string },
      {designation: string },
      {credential: string }
    ]
  ];
}

