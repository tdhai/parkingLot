export const wrongInputCommand = []

export const wrongCarIdPark = ['park']

export const wrongCarIdLeave = ['leave']

export const wrongSizeCreate = ['create_parking_lot']

export const niceInputs = [
    'create_parking_lot 6',
    'park KA-01-HH-1234',
    'park KA-01-HH-9999',
    'park KA-01-BB-0001',
    'park KA-01-HH-7777',
    'park KA-01-HH-2701',
    'park KA-01-HH-3141',
    'leave KA-01-HH-3141 4',
    'status',
    'park KA-01-P-333',
    'park DL-12-AA-9999',
    'leave KA-01-HH-1234 4',
    'leave KA-01-BB-0001 6',
    'leave DL-12-AA-9999 2',
    'park KA-09-HH-0987',
    'park CA-09-IO-1111',
    'park KA-09-HH-0123',
    'status'
  ]

  export const expectResult = [
    'KA-09-HH-0987',
    'KA-01-HH-9999',
    'CA-09-IO-1111',
    'KA-01-HH-7777',
    'KA-01-HH-2701',
    'KA-01-P-333'
  ]
