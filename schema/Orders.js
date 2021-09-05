cube(`Orders`, {
  sql: `SELECT * FROM demodatabase.orders`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, name, createdAt, updatedAt, invoiceDate]
    },
    
    discount: {
      sql: `discount`,
      type: `sum`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    contactNo: {
      sql: `contact_no`,
      type: `string`
    },
    
    address: {
      sql: `address`,
      type: `string`
    },
    
    billTo: {
      sql: `bill_to`,
      type: `string`
    },
    
    createdAt: {
      sql: `created_at`,
      type: `time`
    },
    
    updatedAt: {
      sql: `updated_at`,
      type: `time`
    },
    
    invoiceDate: {
      sql: `invoice_date`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
