const companyData = [
  {
    c_id: 1,
    c_name: "Nurturelabs",
    c_head: "Yash Agarwal",
    c_head_username: "yash@chead",
    c_head_password: "yash123",
    departments: [
      {
        d_id: 1,
        d_name: "UI-UX",
        d_head: "Jayesh Singh",
        d_head_username: "jayesh@dhead",
        d_head_password: "jayesh123",
        d_head_leaveBalance: 3,
        d_head_leaveHistory: [
          {
            leave_id: 1,
            leave_reason: "Sickness",
            leave_days: 2,
            leave_applied: "02-12-2021",
            leave_status: "Approved",
          },
          {
            leave_id: 2,
            leave_reason: "Marriage",
            leave_days: 3,
            leave_applied: "10-12-2021",
            leave_status: "Approved",
          },
          {
            leave_id: 3,
            leave_reason: "Home Function",
            leave_days: 1,
            leave_applied: "21-12-2021",
            leave_status: "Approved",
          },
        ],
        d_employees: [
          {
            e_id: 1,
            e_name: "Rahul Dua",
            e_username: "rahul@emp",
            e_password: "rahul123",
            e_leaveBalance: 3,
            e_leaveHistory: [
              {
                leave_id: 1,
                leave_reason: "Home Function",
                leave_days: 2,
                leave_applied: "15-12-2021",
                leave_status: "Pending",
              },
            ],
          },
          {
            e_id: 2,
            e_name: "Ayush Sharma",
            e_username: "ayush@emp",
            e_password: "ayush123",
            e_leaveBalance: 2,
            e_leaveHistory: [
              {
                leave_id: 1,
                leave_reason: "Sickness",
                leave_days: 1,
                leave_applied: "12-12-2021",
                leave_status: "Approved",
              },
              {
                leave_id: 2,
                leave_reason: "Other reason",
                leave_days: 2,
                leave_applied: "17-12-2021",
                leave_status: "Rejected",
              },
            ],
          },
        ],
      },
      {
        d_id: 2,
        d_name: "Backend Management",
        d_head: "Kshitij Mittal",
        d_head_username: "kshitij@dhead",
        d_head_password: "kshitij123",
        d_head_leaveBalance: 4,
        d_head_leaveHistory: [
          {
            leave_id: 1,
            leave_reason: "Sickness",
            leave_days: 1,
            leave_applied: "02-12-2021",
            leave_status: "Approved",
          },
          {
            leave_id: 2,
            leave_reason: "Marriage",
            leave_days: 3,
            leave_applied: "10-12-2021",
            leave_status: "Approved",
          },
          {
            leave_id: 3,
            leave_reason: "Home Function",
            leave_days: 1,
            leave_applied: "21-12-2021",
            leave_status: "Approved",
          },
        ],
        d_employees: [
          {
            e_id: 1,
            e_name: "Shoaib Akhtar",
            e_leaveBalance: 3,
            e_username: "shoaib@emp",
            e_password: "shoaib123",
            e_leaveHistory: [
              {
                leave_id: 1,
                leave_reason: "Home Function",
                leave_days: 2,
                leave_applied: "15-12-2021",
                leave_status: "Pending",
              },
            ],
          },
          {
            e_id: 2,
            e_name: "Ayush Sharma",
            e_leaveBalance: 2,
            e_username: "ayush@emp",
            e_password: "ayush123",
            e_leaveHistory: [
              {
                leave_id: 1,
                leave_reason: "Sickness",
                leave_days: 1,
                leave_applied: "12-12-2021",
                leave_status: "Approved",
              },
              {
                leave_id: 2,
                leave_reason: "Other reason",
                leave_days: 2,
                leave_applied: "17-12-2021",
                leave_status: "Rejected",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default companyData;
