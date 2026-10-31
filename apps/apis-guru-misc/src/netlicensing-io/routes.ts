import { createRoute, z } from '@hono/zod-openapi'

const LicenseSchema = z
  .object({
    active: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "If set to 'false', the License is disabled. License can be re-enabled, but as long as it is disabled, the License is excluded from the validation process.",
      }),
    currency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies currency for the License price. Check data types to discover which currencies are supported. Read-only, set from License Template on creation.',
      }),
    hidden: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "If set to 'true', this License is not shown in NetLicensing Shop as purchased License. Set from License Template on creation, if not specified explicitly.",
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name for the Licensed item. Set from License Template on creation, if not specified explicitly.',
      }),
    number: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique number (across all Products/Licensees of a Vendor) that identifies the License. Vendor can assign this number when creating a License or let NetLicensing generate one. Read-only after corresponding creation Transaction status is set to closed.',
      }),
    price: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          "'price' for the License. If >0, it must always be accompanied by the currency specification. Read-only, set from License Template on creation.",
      }),
  })
  .openapi({ xml: { name: 'license' }, required: [] })
  .openapi('License')

const LicenseTemplateSchema = z
  .object({
    active: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "If set to 'false', the License Template is disabled. Licensee can not obtain any new Licenses off this License Template.",
      }),
    automatic: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "If set to 'true', every new Licensee automatically gets one License out of this License Template on creation. Automatic Licenses must have their price set to 0.",
      }),
    currency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies currency for the License price. Check data types to discover which currencies are supported.',
      }),
    hidden: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "If set to 'true', this License Template is not shown in NetLicensing Shop as offered for purchase.",
      }),
    hiddenLicenses: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "If set to 'true', Licenses from this License Template are not visible to the end customer, but participate in validation.",
      }),
    licenseType: z
      .enum(['FEATURE', 'TIMEVOLUME'])
      .exactOptional()
      .openapi({ description: 'Type of Licenses created from this License Template' }),
    name: z.string().exactOptional().openapi({ description: 'Name for the Licensed item.' }),
    number: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique number (across all Product of a Vendor) that identifies the License Template. Vendor can assign this number when creating a License Template or let NetLicensing generate one. Read-only after creation of the first License from this License Template.',
      }),
    price: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          "'price' for the License. If >0, it must always be accompanied by the currency specification.",
      }),
  })
  .openapi({ xml: { name: 'licensetemplate' }, required: [] })
  .openapi('LicenseTemplate')

const LicenseeSchema = z
  .object({
    active: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "If set to 'false', the Licensee is disabled. Licensee can not obtain new Licenses, and validation is disabled.",
      }),
    number: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique number (across all Products of a Vendor) that identifies the Licensee. Vendor can assign this number when creating a Licensee or let NetLicensing generate one. Read-only after creation of the first License for the Licensee.',
      }),
  })
  .openapi({ xml: { name: 'licensee' }, required: [] })
  .openapi('Licensee')

const PaymentMethodSchema = z
  .object({ active: z.boolean().exactOptional(), number: z.string().exactOptional() })
  .openapi({ xml: { name: 'paymentmethod' }, required: [] })
  .openapi('PaymentMethod')

const ProductSchema = z
  .object({
    active: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "If set to 'false', the Product is disabled. No new Licensees can be registered for the Product, existing Licensees can not obtain new Licenses",
      }),
    licenseeAutoCreate: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "If set to 'true', non-existing Licensees will be created at first validation attempt.",
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Product name. Together with the version identifies the Product for the end customer',
      }),
    number: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique number that identifies the Product. Vendor can assign this number when creating a Product or let NetLicensing generate one. Read-only after creation of the first Licensee for the Product.',
      }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Product version. Convenience parameter, additional to the Product name.',
      }),
  })
  .openapi({ xml: { name: 'product' }, required: [] })
  .openapi('Product')

const ProductModuleSchema = z
  .object({
    active: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "If set to 'false', the Product Module is disabled. Licensees can not obtain any new Licenses for this Product Module.",
      }),
    licensingInfo: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Licensing model applied to this Product Module. Defines what License Templates can be configured for the Product Module and how Licenses for this Product Module are processed during validation.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Product Module name that is visible to the end customers in NetLicensing Shop.',
      }),
    number: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique number (across all Product of a Vendor) that identifies the Product Module. Vendor can assign this number when creating a Product Module or let NetLicensing generate one. Read-only after creation of the first Licensee for the Product.',
      }),
  })
  .openapi({ xml: { name: 'productmodule' }, required: [] })
  .openapi('ProductModule')

const TokenSchema = z
  .object({
    active: z.boolean().exactOptional(),
    expirationTime: z.iso.datetime({ offset: true }).exactOptional(),
    licenseNumber: z.string().exactOptional(),
    number: z.string().exactOptional(),
    shopURL: z.string().exactOptional(),
    tokenType: z.string().exactOptional(),
    vendorNumber: z.string().exactOptional(),
  })
  .openapi({ xml: { name: 'token' }, required: [] })
  .openapi('Token')

const TransactionSchema = z
  .object({
    active: z.string().exactOptional().openapi({ description: 'Always true for the Transactions' }),
    number: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique number (across all Products of a Vendor) that identifies the Transaction. This number is always generated by NetLicensing.',
      }),
    source: z.literal('SHOP').exactOptional(),
    status: z.enum(['CANCELLED', 'CLOSED', 'PENDING']).exactOptional(),
  })
  .openapi({ xml: { name: 'transaction' }, required: [] })
  .openapi('Transaction')

const DiscountSchema = z
  .object({
    amountPercent: z.string().exactOptional(),
    currency: z.string().exactOptional(),
    totalPrice: z.float64().exactOptional(),
  })
  .openapi({ xml: { name: 'discount' }, required: [] })
  .openapi('Discount')

const InfosSchema = z
  .object({})
  .openapi({ xml: { name: 'infos' } })
  .openapi('Infos')

const ItemsSchema = z
  .object({})
  .openapi({ xml: { name: 'items' } })
  .openapi('Items')

const LicensingModelSchema = z
  .object({ name: z.string().exactOptional() })
  .openapi({ xml: { name: 'licensingModel' }, required: [] })
  .openapi('LicensingModel')

const NetlicensingSchema = z
  .object({ infos: InfosSchema.exactOptional(), items: ItemsSchema.exactOptional() })
  .openapi({ xml: { name: 'netlicensing' }, required: [] })
  .openapi('Netlicensing')

const BasicAuthSecurityScheme = {
  description:
    'HTTP Basic Authentication. Use either `username:password` or `apiKey:token` to authenticate.',
  scheme: 'basic',
  type: 'http',
}

export const getLicenseRoute = createRoute({
  method: 'get',
  path: '/license',
  tags: ['License'],
  summary: 'List Licenses',
  description: 'Return a list of all Licenses for the current Vendor',
  operationId: 'listLicenses',
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': { schema: z.array(NetlicensingSchema) },
        'application/xml': { schema: z.array(NetlicensingSchema) },
      },
    },
    400: { description: 'Malformed or illegal request' },
    403: { description: 'Access is denied' },
    404: { description: 'Resource not found' },
    500: { description: 'Internal service error' },
  },
  security: [{ basicAuth: [] }],
})

export const postLicenseRoute = createRoute({
  method: 'post',
  path: '/license',
  tags: ['License'],
  summary: 'Create License',
  description: 'Creates a new License',
  operationId: 'createLicense',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              active: z.preprocess(
                ((read) => (val: unknown) => {
                  const result = read.safeParse(val)
                  return result.success ? result.data : val
                })(z.stringbool()),
                z.boolean(),
              ),
              currency: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Specifies currency for the License price. Check data types to discover which currencies are supported. Read-only, set from License Template on creation',
                }),
              hidden: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    "If set to 'true', this License is not shown in NetLicensing Shop as purchased License. Set from License Template on creation, if not specified explicitly",
                }),
              licenseTemplateNumber: z.string(),
              licenseeNumber: z.string(),
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Name for the Licensed item. Set from License Template on creation, if not specified explicitly.',
                }),
              number: z.string().exactOptional(),
              parentfeature: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Mandatory for 'TIMEVOLUME' License Type and 'RENTAL' licensing model",
                }),
              price: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Price for the License. If >0, it must always be accompanied by the currency specification. Read-only, set from License Template on creation',
                }),
              quantity: z
                .string()
                .exactOptional()
                .openapi({ description: "Mandatory for 'Pay-per-Use' License Model." }),
              startDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: "Mandatory for 'TIMEVOLUME' License Type." }),
              timeVolume: z
                .string()
                .exactOptional()
                .openapi({ description: "Mandatory for 'TIMEVOLUME' License Type." }),
              timeVolumePeriod: z
                .string()
                .exactOptional()
                .openapi({ description: "For 'TIMEVOLUME' License Type." }),
              usedQuantity: z
                .string()
                .exactOptional()
                .openapi({ description: "Mandatory for 'Pay-per-Use' License Model." }),
            })
            .openapi({ required: ['licenseeNumber', 'licenseTemplateNumber', 'active'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': { schema: NetlicensingSchema },
        'application/xml': { schema: NetlicensingSchema },
      },
    },
    400: { description: 'Malformed or illegal request' },
    403: { description: 'Access is denied' },
    404: { description: 'Resource not found' },
    500: { description: 'Internal service error' },
  },
  security: [{ basicAuth: [] }],
})

export const getLicenseLicenseNumberRoute = createRoute({
  method: 'get',
  path: '/license/{licenseNumber}',
  tags: ['License'],
  summary: 'Get License',
  description: "Get License by a 'licenseNumber'",
  operationId: 'getLicense',
  request: {
    params: z.object({
      licenseNumber: z
        .string()
        .openapi({
          param: {
            description:
              'Unique number (across all Products/Licensees of a Vendor) that identifies the License. Vendor can assign this number when creating a License or let NetLicensing generate one. Read-only after corresponding creation Transaction status is set to closed.',
            in: 'path',
            name: 'licenseNumber',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': { schema: NetlicensingSchema },
        'application/xml': { schema: NetlicensingSchema },
      },
    },
    400: { description: 'Malformed or illegal request' },
    403: { description: 'Access is denied' },
    404: { description: 'Resource not found' },
    500: { description: 'Internal service error' },
  },
  security: [{ basicAuth: [] }],
})

export const postLicenseLicenseNumberRoute = createRoute({
  method: 'post',
  path: '/license/{licenseNumber}',
  tags: ['License'],
  summary: 'Update License',
  description: "Update License by a 'licenseNumber'",
  operationId: 'updateLicense',
  request: {
    params: z.object({
      licenseNumber: z
        .string()
        .openapi({
          param: {
            description:
              'Unique number (across all Products/Licensees of a Vendor) that identifies the License. Vendor can assign this number when creating a License or let NetLicensing generate one. Read-only after corresponding creation Transaction status is set to closed.',
            in: 'path',
            name: 'licenseNumber',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              active: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional(),
              currency: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Specifies currency for the License price. Check data types to discover which currencies are supported. Read-only, set from License Template on creation',
                }),
              hidden: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    "If set to 'true', this License is not shown in NetLicensing Shop as purchased License. Set from License Template on creation, if not specified explicitly",
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Name for the Licensed item. Set from License Template on creation, if not specified explicitly.',
                }),
              number: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unique number (across all Products/Licensees of a Vendor) that identifies the License. Vendor can assign this number when creating a License or let NetLicensing generate one. Read-only after corresponding creation Transaction status is set to closed.',
                }),
              parentfeature: z.string().exactOptional(),
              price: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Price for the License. If > 0, it must always be accompanied by the currency specification. Read-only, set from License Template on creation',
                }),
              quantity: z
                .string()
                .exactOptional()
                .openapi({ description: "Mandatory for 'Pay-per-Use' License Model." }),
              startDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: "For 'TIMEVOLUME' License type" }),
              timeVolume: z
                .string()
                .exactOptional()
                .openapi({ description: "Mandatory for 'TIMEVOLUME' License Type." }),
              timeVolumePeriod: z
                .string()
                .exactOptional()
                .openapi({ description: "For 'TIMEVOLUME' License Type." }),
              usedQuantity: z
                .string()
                .exactOptional()
                .openapi({ description: "Mandatory for 'Pay-per-Use' License Model." }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': { schema: NetlicensingSchema },
        'application/xml': { schema: NetlicensingSchema },
      },
    },
    400: { description: 'Malformed or illegal request' },
    403: { description: 'Access is denied' },
    404: { description: 'Resource not found' },
    500: { description: 'Internal service error' },
  },
  security: [{ basicAuth: [] }],
})

export const deleteLicenseLicenseNumberRoute = createRoute({
  method: 'delete',
  path: '/license/{licenseNumber}',
  tags: ['License'],
  summary: 'Delete License',
  description: "Delete License by a 'licenseNumber'",
  operationId: 'deleteLicense',
  request: {
    params: z.object({
      licenseNumber: z
        .string()
        .openapi({
          param: {
            description:
              'Unique number (across all Products/Licensees of a Vendor) that identifies the License. Vendor can assign this number when creating a License or let NetLicensing generate one. Read-only after corresponding creation Transaction status is set to closed.',
            in: 'path',
            name: 'licenseNumber',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': { schema: NetlicensingSchema },
        'application/xml': { schema: NetlicensingSchema },
      },
    },
    400: { description: 'Malformed or illegal request' },
    403: { description: 'Access is denied' },
    404: { description: 'Resource not found' },
    500: { description: 'Internal service error' },
  },
  security: [{ basicAuth: [] }],
})

export const getLicenseeRoute = createRoute({
  method: 'get',
  path: '/licensee',
  tags: ['Licensee'],
  summary: 'List Licensees',
  description: 'Return a list of all Licensees for the current Vendor',
  operationId: 'listLicensees',
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': { schema: z.array(NetlicensingSchema) },
        'application/xml': { schema: z.array(NetlicensingSchema) },
      },
    },
    400: { description: 'Malformed or illegal request' },
    403: { description: 'Access is denied' },
    404: { description: 'Resource not found' },
    500: { description: 'Internal service error' },
  },
  security: [{ basicAuth: [] }],
})

export const postLicenseeRoute = createRoute({
  method: 'post',
  path: '/licensee',
  tags: ['Licensee'],
  summary: 'Create Licensee',
  description: 'Creates a new Licensee',
  operationId: 'createLicensee',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              active: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .openapi({
                  description:
                    "If set to 'false', the Licensee is disabled. Licensee can not obtain new Licenses, and validation is disabled",
                }),
              markedForTransfer: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Mark Licensee for transfer.' }),
              name: z.string().exactOptional(),
              number: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unique number (across all Products of a Vendor) that identifies the Licensee. Vendor can assign this number when creating a Licensee or let NetLicensing generate one. Read-only after creation of the first License for the Licensee',
                }),
              productNumber: z
                .string()
                .openapi({ description: "'productNumber' to assign new Licensee object" }),
            })
            .openapi({ required: ['productNumber', 'active'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': { schema: NetlicensingSchema },
        'application/xml': { schema: NetlicensingSchema },
      },
    },
    400: { description: 'Malformed or illegal request' },
    402: { description: 'Quota exceeded' },
    403: { description: 'Access is denied' },
    404: { description: 'Resource not found' },
    500: { description: 'Internal service error' },
  },
  security: [{ basicAuth: [] }],
})

export const getLicenseeLicenseeNumberRoute = createRoute({
  method: 'get',
  path: '/licensee/{licenseeNumber}',
  tags: ['Licensee'],
  summary: 'Get Licensee',
  description: "Return a Licensee by 'licenseeNumber'",
  operationId: 'getLicensee',
  request: {
    params: z.object({
      licenseeNumber: z
        .string()
        .openapi({
          param: {
            description:
              'Unique number (across all Products of a Vendor) that identifies the Licensee. Vendor can assign this number when creating a Licensee or let NetLicensing generate one. Read-only after creation of the first License for the Licensee.',
            in: 'path',
            name: 'licenseeNumber',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': { schema: NetlicensingSchema },
        'application/xml': { schema: NetlicensingSchema },
      },
    },
    400: { description: 'Malformed or illegal request' },
    403: { description: 'Access is denied' },
    404: { description: 'Resource not found' },
    500: { description: 'Internal service error' },
  },
  security: [{ basicAuth: [] }],
})

export const postLicenseeLicenseeNumberRoute = createRoute({
  method: 'post',
  path: '/licensee/{licenseeNumber}',
  tags: ['Licensee'],
  summary: 'Update Licensee',
  description: 'Sets the provided properties to a Licensee. Return an updated Licensee',
  operationId: 'updateLicensee',
  request: {
    params: z.object({
      licenseeNumber: z
        .string()
        .openapi({
          param: {
            description:
              'Unique number (across all Products of a Vendor) that identifies the Licensee. Vendor can assign this number when creating a Licensee or let NetLicensing generate one. Read-only after creation of the first License for the Licensee.',
            in: 'path',
            name: 'licenseeNumber',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              active: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    "If set to 'false', the Licensee is disabled. Licensee can not obtain new Licenses, and validation is disabled",
                }),
              markedForTransfer: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Mark Licensee for transfer.' }),
              name: z.string().exactOptional(),
              number: z
                .string()
                .exactOptional()
                .openapi({ description: 'New Licensee number (update).' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': { schema: NetlicensingSchema },
        'application/xml': { schema: NetlicensingSchema },
      },
    },
    400: { description: 'Malformed or illegal request' },
    402: { description: 'Quota exceeded' },
    403: { description: 'Access is denied' },
    404: { description: 'Resource not found' },
    500: { description: 'Internal service error' },
  },
  security: [{ basicAuth: [] }],
})

export const deleteLicenseeLicenseeNumberRoute = createRoute({
  method: 'delete',
  path: '/licensee/{licenseeNumber}',
  tags: ['Licensee'],
  summary: 'Delete Licensee',
  description: "Delete a Licensee by 'number'",
  operationId: 'deleteLicensee',
  request: {
    params: z.object({
      licenseeNumber: z
        .string()
        .openapi({
          param: {
            description:
              'Unique number (across all Products of a Vendor) that identifies the Licensee.',
            in: 'path',
            name: 'licenseeNumber',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      forceCascade: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Force object deletion and all descendants.',
            in: 'query',
            name: 'forceCascade',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': { schema: NetlicensingSchema },
        'application/xml': { schema: NetlicensingSchema },
      },
    },
    400: { description: 'Malformed or illegal request' },
    403: { description: 'Access is denied' },
    404: { description: 'Resource not found' },
    500: { description: 'Internal service error' },
  },
  security: [{ basicAuth: [] }],
})

export const postLicenseeLicenseeNumberTransferRoute = createRoute({
  method: 'post',
  path: '/licensee/{licenseeNumber}/transfer',
  tags: ['Licensee'],
  summary: 'Transfer Licenses',
  description: 'Licenses transfer between Licensees',
  operationId: 'transferLicenses',
  request: {
    params: z.object({
      licenseeNumber: z
        .string()
        .openapi({
          param: {
            description: 'Licensee number with a maximum length of 1000 characters',
            in: 'path',
            name: 'licenseeNumber',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              sourceLicenseeNumber: z
                .string()
                .openapi({ description: 'Licensee number which Licenses to be transferred' }),
            })
            .openapi({ required: ['sourceLicenseeNumber'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': { schema: NetlicensingSchema },
        'application/xml': { schema: NetlicensingSchema },
      },
    },
    400: { description: 'Malformed or illegal request' },
    403: { description: 'Access is denied' },
    404: { description: 'Resource not found' },
    500: { description: 'Internal service error' },
  },
  security: [{ basicAuth: [] }],
})

export const postLicenseeLicenseeNumberValidateRoute = createRoute({
  method: 'post',
  path: '/licensee/{licenseeNumber}/validate',
  tags: ['Licensee'],
  summary: 'Validate Licensee',
  description: 'Validates active Licenses of the Licensee',
  operationId: 'validateLicensee',
  request: {
    params: z.object({
      licenseeNumber: z
        .string()
        .openapi({
          param: {
            description: 'Licensee number with a maximum length of 1000 characters',
            in: 'path',
            name: 'licenseeNumber',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              action: z
                .enum(['checkOut', 'checkIn'])
                .exactOptional()
                .openapi({
                  description:
                    "'Floating' licensing model: check-out or check-in session action, to allocate or return it from/to the pool of available sessions",
                }),
              licenseeName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Human-readable name for the auto-created Licensee (will be set as custom Licensee property)',
                }),
              nodeSecret: z
                .string()
                .exactOptional()
                .openapi({ description: "'Node-Locked' licensing model: specifies unique secret" }),
              productModuleNumber: z
                .string()
                .exactOptional()
                .openapi({ description: "'Node-Locked' licensing model: product module number" }),
              productNumber: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Product number, must be provided when 'Licensee auto-create' is enabled (see also Product JavaDoc). Identifies the Product to which new Licensee should be added",
                }),
              sessionId: z
                .string()
                .exactOptional()
                .openapi({
                  description: "'Floating' licensing model: specifies unique session identifier",
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': { schema: NetlicensingSchema },
        'application/xml': { schema: NetlicensingSchema },
      },
    },
    400: { description: 'Malformed or illegal request' },
    403: { description: 'Access is denied' },
    404: { description: 'Resource not found' },
    500: { description: 'Internal service error' },
  },
  security: [{ basicAuth: [] }],
})

export const getLicensetemplateRoute = createRoute({
  method: 'get',
  path: '/licensetemplate',
  tags: ['License Template'],
  summary: 'List License Templates',
  description: 'Return a list of all License Templates for the current Vendor',
  operationId: 'listLicenseTemplates',
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': { schema: z.array(NetlicensingSchema) },
        'application/xml': { schema: z.array(NetlicensingSchema) },
      },
    },
    400: { description: 'Malformed or illegal request' },
    403: { description: 'Access is denied' },
    404: { description: 'Resource not found' },
    500: { description: 'Internal service error' },
  },
  security: [{ basicAuth: [] }],
})

export const postLicensetemplateRoute = createRoute({
  method: 'post',
  path: '/licensetemplate',
  tags: ['License Template'],
  summary: 'Create License Template',
  description: 'Creates a new License Template',
  operationId: 'createLicenseTemplate',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              active: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .openapi({
                  description:
                    "If set to 'false', the License Template is disabled. Licensee can not obtain any new Licenses off this License Template.",
                }),
              automatic: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    "If set to 'true', every new Licensee automatically gets one License out of this License Template on creation. Automatic Licenses must have their price set to 0.",
                }),
              currency: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Specifies currency for the License price. Check data types to discover which currencies are supported.',
                }),
              hidden: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    "If set to 'true', this License Template is not shown in NetLicensing Shop as offered for purchase.",
                }),
              hideLicenses: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    "If set to 'true', Licenses from this License Template are not visible to the end customer, but participate in validation.",
                }),
              licenseType: z
                .string()
                .openapi({
                  description:
                    'Type of Licenses created from this License Template. Supported types: FEATURE, TIMEVOLUME, FLOATING, QUANTITY',
                }),
              maxSessions: z
                .string()
                .exactOptional()
                .openapi({ description: "Mandatory for 'FLOATING' License Type." }),
              name: z
                .string()
                .openapi({
                  description: 'License Template name to create License Template object',
                }),
              number: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unique number (across all Products of a Vendor) that identifies the License Template. Vendor can assign this number when creating a License Template or let NetLicensing generate one. Read-only after creation of the first License from this License Template.',
                }),
              price: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Price for the License. If >0, it must always be accompanied by the currency specification.',
                }),
              productModuleNumber: z
                .string()
                .openapi({
                  description: 'Number of Product Module to create License Template object',
                }),
              quantity: z
                .string()
                .exactOptional()
                .openapi({
                  description: "Mandatory for 'Pay-per-Use' and 'Node-Locked' License Model.",
                }),
              quota: z
                .string()
                .exactOptional()
                .openapi({ description: "Mandatory for 'Quota' License Model." }),
              timeVolume: z
                .string()
                .exactOptional()
                .openapi({ description: "Mandatory for 'TIMEVOLUME' License Type." }),
              timeVolumePeriod: z
                .string()
                .exactOptional()
                .openapi({ description: "For 'TIMEVOLUME' License Type." }),
            })
            .openapi({ required: ['productModuleNumber', 'name', 'active', 'licenseType'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': { schema: NetlicensingSchema },
        'application/xml': { schema: NetlicensingSchema },
      },
    },
    400: { description: 'Malformed or illegal request' },
    403: { description: 'Access is denied' },
    404: { description: 'Resource not found' },
    500: { description: 'Internal service error' },
  },
  security: [{ basicAuth: [] }],
})

export const getLicensetemplateLicenseTemplateNumberRoute = createRoute({
  method: 'get',
  path: '/licensetemplate/{licenseTemplateNumber}',
  tags: ['License Template'],
  summary: 'Get License Template',
  description: "Return a License Template by 'licenseTemplateNumber'",
  operationId: 'getLicenseTemplate',
  request: {
    params: z.object({
      licenseTemplateNumber: z
        .string()
        .openapi({
          param: {
            description:
              'Unique number (across all Products of a Vendor) that identifies the License Template. Vendor can assign this number when creating a License Template or let NetLicensing generate one. Read-only after creation of the first License from this License Template.',
            in: 'path',
            name: 'licenseTemplateNumber',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': { schema: NetlicensingSchema },
        'application/xml': { schema: NetlicensingSchema },
      },
    },
    400: { description: 'Malformed or illegal request' },
    403: { description: 'Access is denied' },
    404: { description: 'Resource not found' },
    500: { description: 'Internal service error' },
  },
  security: [{ basicAuth: [] }],
})

export const postLicensetemplateLicenseTemplateNumberRoute = createRoute({
  method: 'post',
  path: '/licensetemplate/{licenseTemplateNumber}',
  tags: ['License Template'],
  summary: 'Update License Template',
  description:
    'Sets the provided properties to a License Template. Return an updated License Template',
  operationId: 'updateLicenseTemplate',
  request: {
    params: z.object({
      licenseTemplateNumber: z
        .string()
        .openapi({
          param: {
            description:
              'Unique number (across all Products of a Vendor) that identifies the License Template. Vendor can assign this number when creating a License Template or let NetLicensing generate one. Read-only after creation of the first License from this License Template.',
            in: 'path',
            name: 'licenseTemplateNumber',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              active: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    "If set to 'false', the License Template is disabled. Licensee can not obtain any new Licenses off this License Template.",
                }),
              automatic: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    "If set to 'true', every new Licensee automatically gets one License out of this License Template on creation. Automatic Licenses must have their price set to 0.",
                }),
              currency: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Specifies currency for the License price. Check data types to discover which currencies are supported.',
                }),
              hidden: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    "If set to 'true', this License Template is not shown in NetLicensing Shop as offered for purchase.",
                }),
              hideLicenses: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    "If set to 'true', Licenses from this License Template are not visible to the end customer, but participate in validation.",
                }),
              licenseType: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Type of Licenses created from this License Template. Supported types: FEATURE, TIMEVOLUME, FLOATING, QUANTITY',
                }),
              maxSessions: z
                .string()
                .exactOptional()
                .openapi({ description: "Mandatory for 'FLOATING' License Type." }),
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Name for the Licensed item' }),
              number: z
                .string()
                .exactOptional()
                .openapi({ description: 'New License Template number (update).' }),
              price: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Price for the License. If >0, it must always be accompanied by the currency specification.',
                }),
              quantity: z
                .string()
                .exactOptional()
                .openapi({
                  description: "Mandatory for 'Pay-per-Use' and 'Node-Locked' License Model.",
                }),
              quota: z
                .string()
                .exactOptional()
                .openapi({ description: "Mandatory for 'Quota' License Model." }),
              timeVolume: z
                .string()
                .exactOptional()
                .openapi({ description: "Mandatory for 'TIMEVOLUME' License Type." }),
              timeVolumePeriod: z
                .string()
                .exactOptional()
                .openapi({ description: "For 'TIMEVOLUME' License Type." }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': { schema: NetlicensingSchema },
        'application/xml': { schema: NetlicensingSchema },
      },
    },
    400: { description: 'Malformed or illegal request' },
    403: { description: 'Access is denied' },
    404: { description: 'Resource not found' },
    500: { description: 'Internal service error' },
  },
  security: [{ basicAuth: [] }],
})

export const deleteLicensetemplateLicenseTemplateNumberRoute = createRoute({
  method: 'delete',
  path: '/licensetemplate/{licenseTemplateNumber}',
  tags: ['License Template'],
  summary: 'Delete License Template',
  description: "Delete a License Template by 'number'.",
  operationId: 'deleteLicenseTemplate',
  request: {
    params: z.object({
      licenseTemplateNumber: z
        .string()
        .openapi({
          param: {
            description:
              'Unique number (across all Products of a Vendor) that identifies the License Template.',
            in: 'path',
            name: 'licenseTemplateNumber',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      forceCascade: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Force object deletion and all descendants.',
            in: 'query',
            name: 'forceCascade',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': { schema: NetlicensingSchema },
        'application/xml': { schema: NetlicensingSchema },
      },
    },
    400: { description: 'Malformed or illegal request' },
    403: { description: 'Access is denied' },
    404: { description: 'Resource not found' },
    500: { description: 'Internal service error' },
  },
  security: [{ basicAuth: [] }],
})

export const getPaymentmethodRoute = createRoute({
  method: 'get',
  path: '/paymentmethod',
  tags: ['Payment Method'],
  summary: 'List Payment Methods',
  description: 'Return a list of all Payment Methods for the current Vendor',
  operationId: 'listPaymentMethods',
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': { schema: z.array(NetlicensingSchema) },
        'application/xml': { schema: z.array(NetlicensingSchema) },
      },
    },
    400: { description: 'Malformed or illegal request' },
    403: { description: 'Access is denied' },
    404: { description: 'Resource not found' },
    500: { description: 'Internal service error' },
  },
  security: [{ basicAuth: [] }],
})

export const getPaymentmethodPaymentMethodNumberRoute = createRoute({
  method: 'get',
  path: '/paymentmethod/{paymentMethodNumber}',
  tags: ['Payment Method'],
  summary: 'Get Payment Method',
  description: "Return a Payment Method info by 'paymentMethodNumber'",
  operationId: 'getPaymentMethod',
  request: {
    params: z.object({
      paymentMethodNumber: z
        .string()
        .openapi({
          param: {
            description: 'Payment method number',
            in: 'path',
            name: 'paymentMethodNumber',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': { schema: NetlicensingSchema },
        'application/xml': { schema: NetlicensingSchema },
      },
    },
    400: { description: 'Malformed or illegal request' },
    403: { description: 'Access is denied' },
    404: { description: 'Resource not found' },
    500: { description: 'Internal service error' },
  },
  security: [{ basicAuth: [] }],
})

export const postPaymentmethodPaymentMethodNumberRoute = createRoute({
  method: 'post',
  path: '/paymentmethod/{paymentMethodNumber}',
  tags: ['Payment Method'],
  summary: 'Update Payment Method',
  description: 'Sets the provided properties to a Payment Method. Return an updated Payment Method',
  operationId: 'updatePaymentMethod',
  request: {
    params: z.object({
      paymentMethodNumber: z
        .string()
        .openapi({
          param: {
            description: 'Payment method number',
            in: 'path',
            name: 'paymentMethodNumber',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              active: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: "If set to 'false', the Payment Method is disabled." }),
              'paypal.subject': z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The e-mail address of the PayPal account for which you are making the API calls.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': { schema: NetlicensingSchema },
        'application/xml': { schema: NetlicensingSchema },
      },
    },
    400: { description: 'Malformed or illegal request' },
    403: { description: 'Access is denied' },
    404: { description: 'Resource not found' },
    500: { description: 'Internal service error' },
  },
  security: [{ basicAuth: [] }],
})

export const getProductRoute = createRoute({
  method: 'get',
  path: '/product',
  tags: ['Product'],
  summary: 'List Products',
  description: 'Return a list of all configured Products for the current Vendor',
  operationId: 'listProducts',
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': { schema: z.array(NetlicensingSchema) },
        'application/xml': { schema: z.array(NetlicensingSchema) },
      },
    },
    400: { description: 'Malformed or illegal request' },
    403: { description: 'Access is denied' },
    404: { description: 'Resource not found' },
    500: { description: 'Internal service error' },
  },
  security: [{ basicAuth: [] }],
})

export const postProductRoute = createRoute({
  method: 'post',
  path: '/product',
  tags: ['Product'],
  summary: 'Create Product',
  description: 'Creates a new Product',
  operationId: 'createProduct',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              active: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .openapi({
                  description:
                    "If set to 'false', the Product is disabled. No new Licensees can be registered for the Product, existing Licensees can not obtain new Licenses.",
                }),
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'Product description.' }),
              licenseeAutoCreate: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    "If set to 'true', non-existing Licensees will be created at first validation attempt.",
                }),
              licensingInfo: z
                .string()
                .exactOptional()
                .openapi({ description: 'Licensing information.' }),
              name: z
                .string()
                .openapi({
                  description:
                    'Product name. Together with the version identifies the Product for the end customer.',
                }),
              number: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unique number that identifies the Product. Vendor can assign this number when creating a Product or let NetLicensing generate one.',
                }),
              vatMode: z
                .enum(['GROSS', 'NET'])
                .exactOptional()
                .openapi({ description: 'Vat mode for Product. Supported types: GROSS, NET' }),
              version: z
                .string()
                .openapi({
                  description:
                    'Product version. Convenience parameter, additional to the Product name.',
                }),
            })
            .openapi({ required: ['active', 'name', 'version'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': { schema: NetlicensingSchema },
        'application/xml': { schema: NetlicensingSchema },
      },
    },
    400: { description: 'Malformed or illegal request' },
    402: { description: 'Quota exceeded' },
    403: { description: 'Access is denied' },
    404: { description: 'Resource not found' },
    500: { description: 'Internal service error' },
  },
  security: [{ basicAuth: [] }],
})

export const getProductProductNumberRoute = createRoute({
  method: 'get',
  path: '/product/{productNumber}',
  tags: ['Product'],
  summary: 'Get Product',
  description: "Return a Product by 'productNumber'",
  operationId: 'productNumber',
  request: {
    params: z.object({
      productNumber: z
        .string()
        .openapi({
          param: {
            description: 'Unique number that identifies the Product.',
            in: 'path',
            name: 'productNumber',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': { schema: NetlicensingSchema },
        'application/xml': { schema: NetlicensingSchema },
      },
    },
    400: { description: 'Malformed or illegal request' },
    403: { description: 'Access is denied' },
    404: { description: 'Resource not found' },
    500: { description: 'Internal service error' },
  },
  security: [{ basicAuth: [] }],
})

export const postProductProductNumberRoute = createRoute({
  method: 'post',
  path: '/product/{productNumber}',
  tags: ['Product'],
  summary: 'Update Product',
  description: 'Sets the provided properties to a Product. Return an updated Product',
  operationId: 'updateProduct',
  request: {
    params: z.object({
      productNumber: z
        .string()
        .openapi({
          param: {
            description: 'Unique number that identifies the Product.',
            in: 'path',
            name: 'productNumber',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              active: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    "If set to 'false', the Product is disabled. No new Licensees can be registered for the Product, existing Licensees can not obtain new Licenses.",
                }),
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'Product description.' }),
              licenseeAutoCreate: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    "If set to 'true', non-existing Licensees will be created at first validation attempt.",
                }),
              licensingInfo: z
                .string()
                .exactOptional()
                .openapi({ description: 'Licensing information.' }),
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Product name. Together with the version identifies the Product for the end customer.',
                }),
              number: z
                .string()
                .exactOptional()
                .openapi({ description: 'New Product number (update)' }),
              vatMode: z
                .enum(['GROSS', 'NET'])
                .exactOptional()
                .openapi({ description: 'Vat mode for Product. Supported types: GROSS, NET' }),
              version: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Product version. Convenience parameter, additional to the Product name.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': { schema: NetlicensingSchema },
        'application/xml': { schema: NetlicensingSchema },
      },
    },
    400: { description: 'Malformed or illegal request' },
    402: { description: 'Quota exceeded' },
    403: { description: 'Access is denied' },
    404: { description: 'Resource not found' },
    500: { description: 'Internal service error' },
  },
  security: [{ basicAuth: [] }],
})

export const deleteProductProductNumberRoute = createRoute({
  method: 'delete',
  path: '/product/{productNumber}',
  tags: ['Product'],
  summary: 'Delete Product',
  description: "Delete a Product by 'number'",
  operationId: 'deleteProduct',
  request: {
    params: z.object({
      productNumber: z
        .string()
        .openapi({
          param: {
            description: 'Unique number that identifies the Product.',
            in: 'path',
            name: 'productNumber',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      forceCascade: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Force object deletion and all descendants.',
            in: 'query',
            name: 'forceCascade',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': { schema: NetlicensingSchema },
        'application/xml': { schema: NetlicensingSchema },
      },
    },
    400: { description: 'Malformed or illegal request' },
    403: { description: 'Access is denied' },
    404: { description: 'Resource not found' },
    500: { description: 'Internal service error' },
  },
  security: [{ basicAuth: [] }],
})

export const getProductmoduleRoute = createRoute({
  method: 'get',
  path: '/productmodule',
  tags: ['Product Module'],
  summary: 'List Product Modules',
  description: 'Return a list of all Product Modules for the current Vendor',
  operationId: 'listProductModules',
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': { schema: z.array(NetlicensingSchema) },
        'application/xml': { schema: z.array(NetlicensingSchema) },
      },
    },
    400: { description: 'Malformed or illegal request' },
    403: { description: 'Access is denied' },
    404: { description: 'Resource not found' },
    500: { description: 'Internal service error' },
  },
  security: [{ basicAuth: [] }],
})

export const postProductmoduleRoute = createRoute({
  method: 'post',
  path: '/productmodule',
  tags: ['Product Module'],
  summary: 'Create Product Module',
  description: 'Creates a new Product Module',
  operationId: 'createProductModule',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              active: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .openapi({
                  description:
                    "If set to 'false', the Product Module is disabled. Licensees can not obtain any new Licenses for this Product Module.",
                }),
              licenseTemplate: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.enum(['TIMEVOLUME', 'FEATURE']).default('TIMEVOLUME')),
                )
                .exactOptional()
                .openapi({
                  description: "License Template. Mandatory for 'Try &amp; Buy' licensing model.",
                }),
              licensingModel: z
                .string()
                .openapi({
                  description:
                    'Licensing model applied to this Product Module. Defines what License Templates can be configured for the Product Module and how Licenses for this Product Module are processed during validation.',
                }),
              maxCheckoutValidity: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description:
                    "Maximum checkout validity (days). Mandatory for 'Floating' licensing model.",
                }),
              name: z
                .string()
                .openapi({
                  description:
                    'Product Module name that is visible to the end customers in NetLicensing Shop.',
                }),
              nodeSecretMode: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.enum(['PREDEFINED', 'CLIENT']).default('PREDEFINED')),
                )
                .exactOptional()
                .openapi({
                  description: "Secret Mode. Mandatory for 'Node-Locked' licensing model.",
                }),
              number: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unique number (across all Products of a Vendor) that identifies the Product Module. Vendor can assign this number when creating a Product Module or let NetLicensing generate one. Read-only after creation of the first Licensee for the Product.',
                }),
              productNumber: z
                .string()
                .openapi({
                  description:
                    'Unique number (across all Products of a Vendor) that identifies the Product Module. Vendor can assign this number when creating a Product Module or let NetLicensing generate one. Read-only after creation of the first Licensee for the Product.',
                }),
              redThreshold: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description:
                    "Remaining time volume for red level. Mandatory for 'Rental' licensing model.",
                }),
              yellowThreshold: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description:
                    "Remaining time volume for yellow level. Mandatory for 'Rental' licensing model.",
                }),
            })
            .openapi({ required: ['productNumber', 'active', 'name', 'licensingModel'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': { schema: NetlicensingSchema },
        'application/xml': { schema: NetlicensingSchema },
      },
    },
    400: { description: 'Malformed or illegal request' },
    402: { description: 'Quota exceeded' },
    403: { description: 'Access is denied' },
    404: { description: 'Resource not found' },
    500: { description: 'Internal service error' },
  },
  security: [{ basicAuth: [] }],
})

export const getProductmoduleProductModuleNumberRoute = createRoute({
  method: 'get',
  path: '/productmodule/{productModuleNumber}',
  tags: ['Product Module'],
  summary: 'Get Product Module',
  description: "Return a Product Module by 'productModuleNumber'",
  operationId: 'getProductModule',
  request: {
    params: z.object({
      productModuleNumber: z
        .string()
        .openapi({
          param: {
            description:
              'Unique number (across all Products of a Vendor) that identifies the Product Module. Vendor can assign this number when creating a Product Module or let NetLicensing generate one. Read-only after creation of the first Licensee for the Product.',
            in: 'path',
            name: 'productModuleNumber',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': { schema: NetlicensingSchema },
        'application/xml': { schema: NetlicensingSchema },
      },
    },
    400: { description: 'Malformed or illegal request' },
    403: { description: 'Access is denied' },
    404: { description: 'Resource not found' },
    500: { description: 'Internal service error' },
  },
  security: [{ basicAuth: [] }],
})

export const postProductmoduleProductModuleNumberRoute = createRoute({
  method: 'post',
  path: '/productmodule/{productModuleNumber}',
  tags: ['Product Module'],
  summary: 'Update Product Module',
  description: 'Sets the provided properties to a Product Module. Return an updated Product Module',
  operationId: 'updateProductModule',
  request: {
    params: z.object({
      productModuleNumber: z
        .string()
        .openapi({
          param: {
            description:
              'Unique number (across all Products of a Vendor) that identifies the Product Module. Vendor can assign this number when creating a Product Module or let NetLicensing generate one. Read-only after creation of the first Licensee for the Product.',
            in: 'path',
            name: 'productModuleNumber',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              active: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    "If set to 'false', the Product Module is disabled. Licensees can not obtain any new Licenses for this Product Module.",
                }),
              licenseTemplate: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.enum(['TIMEVOLUME', 'FEATURE']).default('TIMEVOLUME')),
                )
                .exactOptional()
                .openapi({
                  description: "License Template. Mandatory for 'Try &amp; Buy' licensing model.",
                }),
              licensingModel: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Licensing model applied to this Product Module. Defines what License Templates can be configured for the Product Module and how Licenses for this Product Module are processed during validation.',
                }),
              maxCheckoutValidity: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description:
                    "Maximum checkout validity (days). Mandatory for 'Floating' licensing model.",
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Product Module name that is visible to the end customers in NetLicensing Shop.',
                }),
              nodeSecretMode: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.enum(['PREDEFINED', 'CLIENT']).default('PREDEFINED')),
                )
                .exactOptional()
                .openapi({
                  description: "Secret Mode. Mandatory for 'Node-Locked' licensing model.",
                }),
              number: z
                .string()
                .exactOptional()
                .openapi({ description: 'New Product Module number (update).' }),
              redThreshold: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description:
                    "Remaining time volume for red level. Mandatory for 'Rental' licensing model.",
                }),
              yellowThreshold: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({
                  description:
                    "Remaining time volume for yellow level. Mandatory for 'Rental' licensing model.",
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': { schema: NetlicensingSchema },
        'application/xml': { schema: NetlicensingSchema },
      },
    },
    400: { description: 'Malformed or illegal request' },
    402: { description: 'Quota exceeded' },
    403: { description: 'Access is denied' },
    404: { description: 'Resource not found' },
    500: { description: 'Internal service error' },
  },
  security: [{ basicAuth: [] }],
})

export const deleteProductmoduleProductModuleNumberRoute = createRoute({
  method: 'delete',
  path: '/productmodule/{productModuleNumber}',
  tags: ['Product Module'],
  summary: 'Delete Product Module',
  description: "Delete a Product Module by 'number'",
  operationId: 'deleteProductModule',
  request: {
    params: z.object({
      productModuleNumber: z
        .string()
        .openapi({
          param: {
            description:
              'Unique number (across all Products of a Vendor) that identifies the Product Module.',
            in: 'path',
            name: 'productModuleNumber',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      forceCascade: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Force object deletion and all descendants.',
            in: 'query',
            name: 'forceCascade',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': { schema: NetlicensingSchema },
        'application/xml': { schema: NetlicensingSchema },
      },
    },
    400: { description: 'Malformed or illegal request' },
    403: { description: 'Access is denied' },
    404: { description: 'Resource not found' },
    500: { description: 'Internal service error' },
  },
  security: [{ basicAuth: [] }],
})

export const getTokenRoute = createRoute({
  method: 'get',
  path: '/token',
  tags: ['Token'],
  summary: 'List Tokens',
  description: 'Return a list of all tokens for the current Vendor',
  operationId: 'listTokens',
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': { schema: z.array(NetlicensingSchema) },
        'application/xml': { schema: z.array(NetlicensingSchema) },
      },
    },
    400: { description: 'Malformed or illegal request' },
    403: { description: 'Access is denied' },
    404: { description: 'Resource not found' },
    500: { description: 'Internal service error' },
  },
  security: [{ basicAuth: [] }],
})

export const postTokenRoute = createRoute({
  method: 'post',
  path: '/token',
  tags: ['Token'],
  summary: 'Create token',
  description: "Create token by 'tokenType' and additional token parameters",
  operationId: 'createToken',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              action: z
                .literal('licenseeLogin')
                .exactOptional()
                .openapi({
                  description: 'For <i>type=ACTION</i> only; defines token action to be perfromed',
                }),
              apiKeyRole: z
                .enum([
                  'ROLE_APIKEY_LICENSEE',
                  'ROLE_APIKEY_ANALYTICS',
                  'ROLE_APIKEY_OPERATION',
                  'ROLE_APIKEY_MAINTENANCE',
                  'ROLE_APIKEY_ADMIN',
                ])
                .exactOptional()
                .openapi({
                  description:
                    'For <i>tokenType=APIKEY</i> only (default: ROLE_APIKEY_LICENSEE); defines token RoleID',
                }),
              cancelURL: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'For <i>tokenType=SHOP</i> only; take customers to this URL when they cancel their checkout',
                }),
              cancelURLTitle: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'For <i>tokenType=SHOP</i> only; shop link title for cancel checkout process',
                }),
              licenseTemplateNumber: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'For <i>tokenType=SHOP</i> only; identifies LicenseTemplate that will be assigned to the shop token',
                }),
              licenseeNumber: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'For <i>tokenType=SHOP</i> or <i>type=ACTION</i> only (mandatory); identifies Licensee that will be assigned to the shop token',
                }),
              predefinedShoppingItem: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'For <i>tokenType=SHOP</i> only; identifies Shopping Item name that will be shown to the customer',
                }),
              privateKey: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'For <i>tokenType=APIKEY</i> only (optional); defines PrivateKey to be used with the validate method<br/><strong>Please Note:</strong> PrivateKey need to be provided as one line without spaces',
                }),
              productNumber: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'For <i>tokenType=SHOP</i> only (mandatory); identifies Product that will be assigned to the shop token',
                }),
              successURL: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'For <i>tokenType=SHOP</i> only; take customers to this URL when they finish checkout',
                }),
              successURLTitle: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'For <i>tokenType=SHOP</i> only; shop link title for successful checkout process',
                }),
              tokenType: z
                .enum(['DEFAULT', 'SHOP', 'APIKEY'])
                .openapi({ description: 'Token type to be generated' }),
              type: z
                .literal('ACTION')
                .exactOptional()
                .openapi({
                  description: 'For <i>tokenType=DEFAULT</i> only; action type to be set',
                }),
            })
            .openapi({ required: ['tokenType'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': { schema: NetlicensingSchema },
        'application/xml': { schema: NetlicensingSchema },
      },
    },
    400: { description: 'Malformed or illegal request' },
    403: { description: 'Access is denied' },
    404: { description: 'Resource not found' },
    500: { description: 'Internal service error' },
  },
  security: [{ basicAuth: [] }],
})

export const getTokenTokenNumberRoute = createRoute({
  method: 'get',
  path: '/token/{tokenNumber}',
  tags: ['Token'],
  summary: 'Get token',
  description: "Return a token by 'tokenNumber'",
  operationId: 'getToken',
  request: {
    params: z.object({
      tokenNumber: z
        .string()
        .openapi({
          param: {
            description: 'Token number',
            in: 'path',
            name: 'tokenNumber',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': { schema: NetlicensingSchema },
        'application/xml': { schema: NetlicensingSchema },
      },
    },
    400: { description: 'Malformed or illegal request' },
    403: { description: 'Access is denied' },
    404: { description: 'Resource not found' },
    500: { description: 'Internal service error' },
  },
  security: [{ basicAuth: [] }],
})

export const deleteTokenTokenNumberRoute = createRoute({
  method: 'delete',
  path: '/token/{tokenNumber}',
  tags: ['Token'],
  summary: 'Delete token',
  description: "Delete a token by 'number'",
  operationId: 'deleteToken',
  request: {
    params: z.object({
      tokenNumber: z
        .string()
        .openapi({
          param: {
            description: 'Token number',
            in: 'path',
            name: 'tokenNumber',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': { schema: NetlicensingSchema },
        'application/xml': { schema: NetlicensingSchema },
      },
    },
    400: { description: 'Malformed or illegal request' },
    403: { description: 'Access is denied' },
    404: { description: 'Resource not found' },
    500: { description: 'Internal service error' },
  },
  security: [{ basicAuth: [] }],
})

export const getTransactionRoute = createRoute({
  method: 'get',
  path: '/transaction',
  tags: ['Transaction'],
  summary: 'List Transactions',
  description: 'Return a list of all Transactions for the current Vendor',
  operationId: 'listTransactions',
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': { schema: z.array(NetlicensingSchema) },
        'application/xml': { schema: z.array(NetlicensingSchema) },
      },
    },
    400: { description: 'Malformed or illegal request' },
    403: { description: 'Access is denied' },
    404: { description: 'Resource not found' },
    500: { description: 'Internal service error' },
  },
  security: [{ basicAuth: [] }],
})

export const postTransactionRoute = createRoute({
  method: 'post',
  path: '/transaction',
  tags: ['Transaction'],
  summary: 'Create Transaction',
  description: 'Creates a new Transaction',
  operationId: 'createTransaction',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              active: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .openapi({ description: "Always 'true' for Transactions" }),
              dateClosed: z.iso.datetime({ offset: true }).exactOptional(),
              dateCreated: z.iso.datetime({ offset: true }).exactOptional(),
              licenseeNumber: z.string().exactOptional(),
              number: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unique number (across all Products of a Vendor) that identifies the Transaction',
                }),
              paymentMethod: z.string().exactOptional(),
              source: z
                .literal('SHOP')
                .openapi({ description: 'AUTO Transaction for internal use only' }),
              status: z.enum(['CANCELLED', 'CLOSED', 'PENDING']),
            })
            .openapi({ required: ['active', 'status', 'source'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': { schema: NetlicensingSchema },
        'application/xml': { schema: NetlicensingSchema },
      },
    },
    400: { description: 'Malformed or illegal request' },
    403: { description: 'Access is denied' },
    404: { description: 'Resource not found' },
    500: { description: 'Internal service error' },
  },
  security: [{ basicAuth: [] }],
})

export const getTransactionTransactionNumberRoute = createRoute({
  method: 'get',
  path: '/transaction/{transactionNumber}',
  tags: ['Transaction'],
  summary: 'Get Transaction ',
  description: "Return a Transaction by 'transactionNumber'",
  operationId: 'getTransaction',
  request: {
    params: z.object({
      transactionNumber: z
        .string()
        .openapi({
          param: {
            description:
              'Unique number (across all Products of a Vendor) that identifies the Transaction',
            in: 'path',
            name: 'transactionNumber',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': { schema: NetlicensingSchema },
        'application/xml': { schema: NetlicensingSchema },
      },
    },
    400: { description: 'Malformed or illegal request' },
    403: { description: 'Access is denied' },
    404: { description: 'Resource not found' },
    500: { description: 'Internal service error' },
  },
  security: [{ basicAuth: [] }],
})

export const postTransactionTransactionNumberRoute = createRoute({
  method: 'post',
  path: '/transaction/{transactionNumber}',
  tags: ['Transaction'],
  summary: 'Update Transaction',
  description: 'Sets the provided properties to a Transaction. Return an updated Transaction',
  operationId: 'updateTransaction',
  request: {
    params: z.object({
      transactionNumber: z
        .string()
        .openapi({
          param: {
            description:
              'Unique number (across all Products of a Vendor) that identifies the Transaction',
            in: 'path',
            name: 'transactionNumber',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              active: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: "Always 'true' for Transactions" }),
              dateClosed: z.iso.datetime({ offset: true }).exactOptional(),
              dateCreated: z.iso.datetime({ offset: true }).exactOptional(),
              number: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unique number (across all Products of a Vendor) that identifies the Transaction',
                }),
              paymentMethod: z.string().exactOptional(),
              source: z
                .literal('SHOP')
                .exactOptional()
                .openapi({ description: 'AUTO Transaction for internal use only' }),
              status: z.enum(['CANCELLED', 'CLOSED', 'PENDING']).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': { schema: NetlicensingSchema },
        'application/xml': { schema: NetlicensingSchema },
      },
    },
    400: { description: 'Malformed or illegal request' },
    403: { description: 'Access is denied' },
    404: { description: 'Resource not found' },
    500: { description: 'Internal service error' },
  },
  security: [{ basicAuth: [] }],
})

export const getUtilityLicenseTypesRoute = createRoute({
  method: 'get',
  path: '/utility/licenseTypes',
  tags: ['Utility'],
  summary: 'List License Types',
  description: 'Return a list of all License Types supported by the service',
  operationId: 'licenseTypes',
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': { schema: NetlicensingSchema },
        'application/xml': { schema: NetlicensingSchema },
      },
    },
    400: { description: 'Malformed or illegal request' },
    403: { description: 'Access is denied' },
    404: { description: 'Resource not found' },
    500: { description: 'Internal service error' },
  },
  security: [{ basicAuth: [] }],
})

export const getUtilityLicensingModelsRoute = createRoute({
  method: 'get',
  path: '/utility/licensingModels',
  tags: ['Utility'],
  summary: 'List Licensing Models',
  description: 'Return a list of all licensing models supported by the service',
  operationId: 'licensingModels',
  responses: {
    200: {
      description: 'Successful request',
      content: {
        'application/json': { schema: NetlicensingSchema },
        'application/xml': { schema: NetlicensingSchema },
      },
    },
    400: { description: 'Malformed or illegal request' },
    403: { description: 'Access is denied' },
    404: { description: 'Resource not found' },
    500: { description: 'Internal service error' },
  },
  security: [{ basicAuth: [] }],
})
