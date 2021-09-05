cube(`Products`, {
  sql: `SELECT * FROM demodatabase.products`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, title, brandName, productName, printName, createdAt, updatedAt]
    },
    
    price: {
      sql: `price`,
      type: `sum`
    },
    
    purchasePrice: {
      sql: `purchase_price`,
      type: `sum`
    },
    
    salePrice: {
      sql: `sale_price`,
      type: `sum`
    },
    
    minSalePrice: {
      sql: `min_sale_price`,
      type: `sum`
    },
    
    stockValue: {
      sql: `stock_value`,
      type: `sum`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    title: {
      sql: `title`,
      type: `string`
    },
    
    brandName: {
      sql: `brand_name`,
      type: `string`
    },
    
    itemCode: {
      sql: `item_code`,
      type: `string`
    },
    
    productName: {
      sql: `product_name`,
      type: `string`
    },
    
    printName: {
      sql: `print_name`,
      type: `string`
    },
    
    modelNo: {
      sql: `model_no`,
      type: `string`
    },
    
    unit: {
      sql: `unit`,
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
