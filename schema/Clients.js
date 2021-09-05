cube(`Clients`, {
  sql: `SELECT * FROM demodatabase.clients`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, name, guardianName, createdAt, updatedAt]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    name: {
      sql: `${CUBE}.\`Name\``,
      type: `string`
    },
    
    guardianName: {
      sql: `guardian_name`,
      type: `string`
    },
    
    preferedAddress: {
      sql: `prefered_address`,
      type: `string`
    },
    
    occupation: {
      sql: `occupation`,
      type: `string`
    },
    
    designation: {
      sql: `designation`,
      type: `string`
    },
    
    permanentAddress: {
      sql: `permanent_address`,
      type: `string`
    },
    
    workPlace: {
      sql: `work_place`,
      type: `string`
    },
    
    monthlyIncome: {
      sql: `monthly_income`,
      type: `string`
    },
    
    houseOccupation: {
      sql: `house_occupation`,
      type: `string`
    },
    
    cnic: {
      sql: `cnic`,
      type: `string`
    },
    
    officePhone: {
      sql: `office_phone`,
      type: `string`
    },
    
    mobileNo: {
      sql: `mobile_no`,
      type: `string`
    },
    
    createdAt: {
      sql: `created_at`,
      type: `time`
    },
    
    updatedAt: {
      sql: `updated_at`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
