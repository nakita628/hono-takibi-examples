import { createRoute, z } from '@hono/zod-openapi'

const AddressSchema = z
  .string()
  .min(1)
  .max(16)
  .openapi({ description: 'Slave address (primary or secondary)', example: '48' })
  .openapi('Address')

const BaudrateSchema = z
  .union([
    z.literal(300),
    z.literal(600),
    z.literal(1200),
    z.literal(2400),
    z.literal(4800),
    z.literal(9600),
  ])
  .openapi({
    description:
      'Baudrate to use for the communication - valid values 300, 600, 1200, 2400, 4800, 9600',
    example: 2400,
  })
  .openapi('Baudrate')

const DeviceSchema = z
  .string()
  .openapi({
    description:
      'The device the M-Bus is connected to - /dev/ is prepended to {device} by M-Bus HTTPD',
    example: 'ttyAMA0',
  })
  .openapi('Device')

const HatSchema = z
  .object({
    product: z
      .string()
      .exactOptional()
      .openapi({ description: 'Product', example: 'M-Bus Master' }),
    productId: z.string().exactOptional().openapi({ description: 'Product ID', example: 1 }),
    productVer: z.string().exactOptional().openapi({ description: 'Product Version', example: 2 }),
    uuid: z
      .string()
      .exactOptional()
      .openapi({ description: 'Hat UUID', example: '148fa981-a33b-a07a-a13f-a2405d08e0fe' }),
    vendor: z
      .string()
      .exactOptional()
      .openapi({ description: 'Hat Vendor', example: 'packom.net' }),
  })
  .openapi({
    description: 'Raspberry Pi Hat Information',
    example: { addr: 30, enabled: true, index: 1 },
    required: [],
  })
  .openapi('Hat')

const MaxframesSchema = z
  .int32()
  .min(1)
  .max(250)
  .openapi({ description: 'Max frames to listen for', example: 16 })
  .openapi('Maxframes')

const MbusDataSchema = z
  .string()
  .openapi({
    description: 'M-Bus device data as an XML document',
    example: '<?xml version="1.0" encoding="UTF-8"?>...',
  })
  .openapi('MbusData')

const SlavesSchema = z
  .string()
  .openapi({
    description: 'Output of libmbus scan command',
    example: 'Found a M-Bus device at address 1',
  })
  .openapi('Slaves')

const TextErrorSchema = z
  .string()
  .openapi({ description: 'Some error text', example: 'Device /dev/{device} does not exist' })
  .openapi('TextError')

const YamlSchema = z
  .string()
  .openapi({ description: 'A YAML file', example: 'A YAML file' })
  .openapi('Yaml')

export const getMbusApiRoute = createRoute({
  method: 'get',
  path: '/mbus/api',
  description: 'Returns this API specification',
  operationId: 'mbus_api',
  responses: {
    200: { description: 'OK', content: { 'text/x-yaml': { schema: YamlSchema } } },
    404: {
      description: 'Not found',
      content: { 'text/plain': { schema: TextErrorSchema, example: 'File not found' } },
    },
  },
})

export const postMbusGetDeviceBaudrateAddressRoute = createRoute({
  method: 'post',
  path: '/mbus/get/{device}/{baudrate}/{address}',
  description: 'Gets data from the slave identified by {address}',
  operationId: 'get',
  request: {
    params: z.object({
      device: DeviceSchema.openapi({
        param: {
          description:
            'The serial device to scan - /dev/ is pre-pended to {device} by M-Bus HTTPD before scanning',
          example: 'ttyAMA0',
          explode: false,
          in: 'path',
          name: 'device',
          required: true,
          schema: { $ref: '#/components/schemas/device' },
          style: 'simple',
        },
      }),
      baudrate: z.preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        BaudrateSchema.openapi({
          param: {
            description: 'Baudrate to communicate with M-Bus devices',
            example: 2400,
            explode: false,
            in: 'path',
            name: 'baudrate',
            required: true,
            schema: { $ref: '#/components/schemas/baudrate' },
            style: 'simple',
          },
        }),
      ),
      address: AddressSchema.openapi({
        param: {
          description: 'The slave device to get data from',
          example: 48,
          explode: false,
          in: 'path',
          name: 'address',
          required: true,
          schema: { $ref: '#/components/schemas/address' },
          style: 'simple',
        },
      }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/xml': { schema: MbusDataSchema } } },
    400: {
      description: 'Bad request',
      content: {
        'text/plain': { schema: TextErrorSchema, example: 'Baudrate {baudrate} is invalid' },
      },
    },
    404: {
      description:
        'Not found (or M-Bus HTTPD is unauthorized to access it, or to change baud rate to that specified, etc)',
      content: {
        'text/plain': { schema: TextErrorSchema, example: 'Slave {address} not responding' },
      },
    },
  },
})

export const postMbusGetMultiDeviceBaudrateAddressMaxframesRoute = createRoute({
  method: 'post',
  path: '/mbus/getMulti/{device}/{baudrate}/{address}/{maxframes}',
  description:
    'Gets data from the slave identified by {address}, and supports multiple responses from the slave',
  operationId: 'getMulti',
  request: {
    params: z.object({
      device: DeviceSchema.openapi({
        param: {
          description:
            'The serial device to scan - /dev/ is pre-pended to {device} by M-Bus HTTPD before scanning',
          example: 'ttyAMA0',
          explode: false,
          in: 'path',
          name: 'device',
          required: true,
          schema: { $ref: '#/components/schemas/device' },
          style: 'simple',
        },
      }),
      baudrate: z.preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        BaudrateSchema.openapi({
          param: {
            description: 'Baudrate to communicate with M-Bus devices',
            example: 2400,
            explode: false,
            in: 'path',
            name: 'baudrate',
            required: true,
            schema: { $ref: '#/components/schemas/baudrate' },
            style: 'simple',
          },
        }),
      ),
      address: AddressSchema.openapi({
        param: {
          description: 'The slave device to get data from',
          example: 48,
          explode: false,
          in: 'path',
          name: 'address',
          required: true,
          schema: { $ref: '#/components/schemas/address' },
          style: 'simple',
        },
      }),
      maxframes: z.preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        MaxframesSchema.openapi({
          param: {
            description: 'The slave device to get data from',
            example: 16,
            explode: false,
            in: 'path',
            name: 'maxframes',
            required: true,
            schema: { $ref: '#/components/schemas/maxframes' },
            style: 'simple',
          },
        }),
      ),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/xml': { schema: MbusDataSchema } } },
    400: {
      description: 'Bad request',
      content: {
        'text/plain': { schema: TextErrorSchema, example: 'Baudrate {baudrate} is invalid' },
      },
    },
    404: {
      description:
        'Not found (or M-Bus HTTPD is unauthorized to access it, or to change baud rate to that specified, etc)',
      content: {
        'text/plain': { schema: TextErrorSchema, example: 'Slave {address} not responding' },
      },
    },
  },
})

export const getMbusHatRoute = createRoute({
  method: 'get',
  path: '/mbus/hat',
  description: 'Gets Raspberry Pi Hat information',
  operationId: 'hat',
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: HatSchema } } },
    404: {
      description: 'Not found',
      content: { 'text/plain': { schema: TextErrorSchema, example: 'Hat information not found' } },
    },
  },
})

export const postMbusHatOffRoute = createRoute({
  method: 'post',
  path: '/mbus/hat/off',
  description: 'Turns off power to the M-Bus',
  operationId: 'hatOff',
  responses: {
    200: { description: 'OK' },
    404: {
      description: 'Not found',
      content: {
        'text/plain': { schema: TextErrorSchema, example: 'M-Bus Master Hat not installed' },
      },
    },
  },
})

export const postMbusHatOnRoute = createRoute({
  method: 'post',
  path: '/mbus/hat/on',
  description: 'Turns on power to the M-Bus',
  operationId: 'hatOn',
  responses: {
    200: { description: 'OK' },
    404: {
      description: 'Not found',
      content: {
        'text/plain': { schema: TextErrorSchema, example: 'M-Bus Master Hat not installed' },
      },
    },
  },
})

export const postMbusScanDeviceBaudrateRoute = createRoute({
  method: 'post',
  path: '/mbus/scan/{device}/{baudrate}',
  description: 'Scan the specified device for slaves',
  operationId: 'scan',
  request: {
    params: z.object({
      device: DeviceSchema.openapi({
        param: {
          description:
            'The serial device to scan - /dev/ is pre-pended to {device} by M-Bus HTTPD before scanning',
          example: 'ttyAMA0',
          explode: false,
          in: 'path',
          name: 'device',
          required: true,
          schema: { $ref: '#/components/schemas/device' },
          style: 'simple',
        },
      }),
      baudrate: z.preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        BaudrateSchema.openapi({
          param: {
            description: 'Baudrate to communicate with M-Bus devices',
            example: 2400,
            explode: false,
            in: 'path',
            name: 'baudrate',
            required: true,
            schema: { $ref: '#/components/schemas/baudrate' },
            style: 'simple',
          },
        }),
      ),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: SlavesSchema, example: 'Found a M-Bus device at address 1' },
      },
    },
    400: {
      description: 'Bad request',
      content: {
        'text/plain': { schema: TextErrorSchema, example: 'Baudrate {baudrate} is invalid' },
      },
    },
    404: {
      description:
        'Not found (e.g. device not found, or M-Bus HTTPD is unauthorized to access it, or to change baud rate to that specified, device not responding etc)',
      content: {
        'text/plain': { schema: TextErrorSchema, example: 'Device /dev/{device} does not exist' },
      },
    },
  },
})
