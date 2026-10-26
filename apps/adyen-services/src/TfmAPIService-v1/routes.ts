import { createRoute, z } from '@hono/zod-openapi'

const AddressSchema = z
  .strictObject({
    city: z.string().exactOptional(),
    countryCode: z.string().exactOptional(),
    postalCode: z.string().exactOptional(),
    stateOrProvince: z.string().exactOptional(),
    streetAddress: z.string().exactOptional(),
    streetAddress2: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Address')

const AssignTerminalsRequestSchema = z
  .strictObject({
    companyAccount: z
      .string()
      .openapi({
        description:
          'Your company account. To return terminals to the company inventory, specify only this parameter and the `terminals`.',
      }),
    merchantAccount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the merchant account. Specify this parameter to assign terminals to this merchant account or to a store under this merchant account.',
      }),
    merchantInventory: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean that indicates if you are assigning the terminals to the merchant inventory. Do not use when assigning terminals to a store. Required when assigning the terminal to a merchant account.\n\n- Set this to **true** to assign the terminals to the merchant inventory. This also means that the terminals cannot be boarded.\n\n- Set this to **false** to assign the terminals to the merchant account as in-store terminals. This makes the terminals ready to be boarded and to process payments through the specified merchant account.',
      }),
    store: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The store code of the store that you want to assign the terminals to.',
      }),
    terminals: z
      .array(z.string())
      .openapi({
        description:
          'Array containing a list of terminal IDs that you want to assign or reassign to the merchant account or store, or that you want to return to the company inventory.\n\nFor example, `["V400m-324689776","P400Plus-329127412"]`.',
      }),
  })
  .openapi({ required: ['companyAccount', 'terminals'] })
  .openapi('AssignTerminalsRequest')

const AssignTerminalsResponseSchema = z
  .strictObject({
    results: z
      .record(z.string(), z.string())
      .openapi({
        description:
          'Array that returns a list of the terminals, and for each terminal the result of assigning it to an account or store.\n\nThe results can be: \n\n - `Done`: The terminal has been assigned.\n\n - `AssignmentScheduled`: The terminal will be assigned asynschronously.\n\n - `RemoveConfigScheduled`: The terminal was previously assigned and boarded. Wait for the terminal to synchronize with the Adyen platform. For more information, refer to [Reassigning boarded terminals](https://docs.adyen.com/point-of-sale/managing-terminals/assign-terminals#reassign-boarded-terminals).\n\n - `Error`: There was an error when assigning the terminal. ',
      }),
  })
  .openapi({ required: ['results'] })
  .openapi('AssignTerminalsResponse')

const FindTerminalRequestSchema = z
  .strictObject({
    terminal: z
      .string()
      .openapi({
        description:
          'The unique terminal ID in the format `[Device model]-[Serial number]`. \n\nFor example, **V400m-324689776**.',
      }),
  })
  .openapi({ required: ['terminal'] })
  .openapi('FindTerminalRequest')

const FindTerminalResponseSchema = z
  .strictObject({
    companyAccount: z
      .string()
      .openapi({
        description:
          'The company account that the terminal is associated with. If this is the only account level shown in the response, the terminal is assigned to the inventory of the company account.',
      }),
    merchantAccount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The merchant account that the terminal is associated with. If the response doesn't contain a `store` the terminal is assigned to this merchant account.",
      }),
    merchantInventory: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean that indicates if the terminal is assigned to the merchant inventory. This is returned when the terminal is assigned to a merchant account.\n\n- If **true**, this indicates that the terminal is in the merchant inventory. This also means that the terminal cannot be boarded.\n\n- If **false**, this indicates that the terminal is assigned to the merchant account as an in-store terminal. This means that the terminal is ready to be boarded, or is already boarded.',
      }),
    store: z
      .string()
      .exactOptional()
      .openapi({ description: 'The store code of the store that the terminal is assigned to.' }),
    terminal: z.string().openapi({ description: 'The unique terminal ID.' }),
  })
  .openapi({ required: ['companyAccount', 'terminal'] })
  .openapi('FindTerminalResponse')

const GetStoresUnderAccountRequestSchema = z
  .strictObject({
    companyAccount: z
      .string()
      .openapi({
        description:
          'The company account. If you only specify this parameter, the response includes the stores of all merchant accounts that are associated with the company account.',
      }),
    merchantAccount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The merchant account. With this parameter, the response only includes the stores of the specified merchant account.',
      }),
  })
  .openapi({ required: ['companyAccount'] })
  .openapi('GetStoresUnderAccountRequest')

const StoreSchema = z
  .strictObject({
    address: AddressSchema.exactOptional().openapi({ description: 'The address of the store.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the store.' }),
    inStoreTerminals: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The list of terminals assigned to the store.' }),
    merchantAccountCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The code of the merchant account.' }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The status of the store:\n\n- `PreActive`: the store has been created, but not yet activated. \n\n- `Active`: the store has been activated. This means you can process payments for this store. \n\n- `Inactive`: the store is currently not active. \n\n- `InactiveWithModifications`: the store is currently not active, but payment modifications such as refunds are possible. \n\n- `Closed`: the store has been closed. ',
      }),
    store: z.string().openapi({ description: 'The code of the store.' }),
  })
  .openapi({ required: ['store'] })
  .openapi('Store')

const GetStoresUnderAccountResponseSchema = z
  .strictObject({
    stores: z
      .array(StoreSchema)
      .exactOptional()
      .openapi({
        description:
          'Array that returns a list of all stores for the specified merchant account, or for all merchant accounts under the company account.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GetStoresUnderAccountResponse')

const GetTerminalDetailsRequestSchema = z
  .strictObject({
    terminal: z
      .string()
      .openapi({
        description:
          'The unique terminal ID in the format `[Device model]-[Serial number]`. \n\nFor example, **V400m-324689776**.',
      }),
  })
  .openapi({ required: ['terminal'] })
  .openapi('GetTerminalDetailsRequest')

const GetTerminalDetailsResponseSchema = z
  .strictObject({
    bluetoothIp: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Bluetooth IP address of the terminal.' }),
    bluetoothMac: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Bluetooth MAC address of the terminal.' }),
    companyAccount: z
      .string()
      .openapi({
        description:
          'The company account that the terminal is associated with. If this is the only account level shown in the response, the terminal is assigned to the inventory of the company account.',
      }),
    country: z
      .string()
      .exactOptional()
      .openapi({ description: 'The country where the terminal is used.' }),
    deviceModel: z
      .string()
      .exactOptional()
      .openapi({ description: 'The model name of the terminal.' }),
    dhcpEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether assigning IP addresses through a DHCP server is enabled on the terminal.',
      }),
    displayLabel: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The label shown on the status bar of the display. This label (if any) is specified in your Customer Area.',
      }),
    ethernetIp: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: "The terminal's IP address in your Ethernet network." }),
    ethernetMac: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: "The terminal's MAC address in your Ethernet network." }),
    firmwareVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'The software release currently in use on the terminal.' }),
    iccid: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The integrated circuit card identifier (ICCID) of the SIM card in the terminal.',
      }),
    lastActivityDateTime: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Date and time of the last activity on the terminal. Not included when the last activity was more than 14 days ago.',
      }),
    lastTransactionDateTime: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Date and time of the last transaction on the terminal. Not included when the last transaction was more than 14 days ago.',
      }),
    linkNegotiation: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The Ethernet link negotiation that the terminal uses: \n\n- `auto`: Auto-negotiation\n\n- `100full`: 100 Mbps full duplex',
      }),
    merchantAccount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The merchant account that the terminal is associated with. If the response doesn't contain a `store` the terminal is assigned to this merchant account.",
      }),
    merchantInventory: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean that indicates if the terminal is assigned to the merchant inventory. This is returned when the terminal is assigned to a merchant account.\n\n- If **true**, this indicates that the terminal is in the merchant inventory. This also means that the terminal cannot be boarded.\n\n- If **false**, this indicates that the terminal is assigned to the merchant account as an in-store terminal. This means that the terminal is ready to be boarded, or is already boarded.',
      }),
    permanentTerminalId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The permanent terminal ID.' }),
    serialNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The serial number of the terminal.' }),
    simStatus: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'On a terminal that supports 3G or 4G connectivity, indicates the status of the SIM card in the terminal: ACTIVE or INVENTORY.',
      }),
    store: z
      .string()
      .exactOptional()
      .openapi({ description: 'The store code of the store that the terminal is assigned to.' }),
    storeDetails: StoreSchema.exactOptional().openapi({
      description: 'The store that the terminal is assigned to.',
    }),
    terminal: z.string().openapi({ description: 'The unique terminal ID.' }),
    terminalStatus: z
      .enum([
        'OnlineLast1Day',
        'OnlineLast2Days',
        'OnlineLast3Days',
        'OnlineLast4Days',
        'OnlineLast5Days',
        'OnlineLast6Days',
        'OnlineLast7Days',
        'OnlineToday',
        'ReAssignToInventoryPending',
        'ReAssignToMerchantInventoryPending',
        'ReAssignToStorePending',
        'SwitchedOff',
      ])
      .exactOptional()
      .openapi({
        description:
          'The status of the terminal: \n\n- `OnlineToday`, `OnlineLast1Day`, `OnlineLast2Days` etcetera to `OnlineLast7Days`: Indicates when in the past week the terminal was last online. \n\n- `SwitchedOff`: Indicates it was more than a week ago that the terminal was last online. \n\n- `ReAssignToInventoryPending`, `ReAssignToStorePending`, `ReAssignToMerchantInventoryPending`: Indicates the terminal is scheduled to be reassigned.',
      }),
    wifiIp: z
      .string()
      .exactOptional()
      .openapi({ description: "The terminal's IP address in your Wi-Fi network." }),
    wifiMac: z
      .string()
      .exactOptional()
      .openapi({ description: "The terminal's MAC address in your Wi-Fi network." }),
  })
  .openapi({ required: ['companyAccount', 'terminal'] })
  .openapi('GetTerminalDetailsResponse')

const GetTerminalsUnderAccountRequestSchema = z
  .strictObject({
    companyAccount: z
      .string()
      .openapi({
        description:
          'Your company account. If you only specify this parameter, the response includes all terminals at all account levels.',
      }),
    merchantAccount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The merchant account. This is required if you are retrieving the terminals assigned to a store.If you don't specify a `store` the response includes the terminals assigned to the specified merchant account and the terminals assigned to the stores under this merchant account.",
      }),
    store: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The store code of the store. With this parameter, the response only includes the terminals assigned to the specified store.',
      }),
  })
  .openapi({ required: ['companyAccount'] })
  .openapi('GetTerminalsUnderAccountRequest')

const MerchantAccountSchema = z
  .strictObject({
    inStoreTerminals: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of terminals assigned to this merchant account as in-store terminals. This means that the terminal is ready to be boarded, or is already boarded.',
      }),
    inventoryTerminals: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'List of terminals assigned to the inventory of this merchant account.',
      }),
    merchantAccount: z.string().openapi({ description: 'The merchant account.' }),
    stores: z
      .array(StoreSchema)
      .exactOptional()
      .openapi({ description: 'Array of stores under this merchant account.' }),
  })
  .openapi({ required: ['merchantAccount'] })
  .openapi('MerchantAccount')

const GetTerminalsUnderAccountResponseSchema = z
  .strictObject({
    companyAccount: z.string().openapi({ description: 'Your company account.' }),
    inventoryTerminals: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Array that returns a list of all terminals that are in the inventory of the company account.',
      }),
    merchantAccounts: z
      .array(MerchantAccountSchema)
      .exactOptional()
      .openapi({
        description:
          'Array that returns a list of all merchant accounts belonging to the company account.',
      }),
  })
  .openapi({ required: ['companyAccount'] })
  .openapi('GetTerminalsUnderAccountResponse')

const ServiceErrorSchema = z
  .strictObject({
    errorCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The error code mapped to the error message.' }),
    errorType: z.string().exactOptional().openapi({ description: 'The category of the error.' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'A short explanation of the issue.' }),
    pspReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PSP reference of the payment.' }),
    status: z.int32().exactOptional().openapi({ description: 'The HTTP response status.' }),
  })
  .openapi({ required: [] })
  .openapi('ServiceError')

const Generic_400Example = {
  summary: 'Response code 400. Bad request.',
  value: {
    status: 400,
    errorCode: '702',
    message: 'Problem reading or understanding the request.',
    errorType: 'validation',
  },
}

const Generic_403Example = {
  summary: 'Response code 403. Forbidden.',
  value: {
    status: 403,
    errorCode: '010',
    message: 'Insufficient permissions to process the request.',
    errorType: 'security',
  },
}

const Generic_422Example = {
  summary: 'Response code 422. Unprocessable entity.',
  value: {
    status: 422,
    errorCode: '901',
    message: 'Request validation error.',
    errorType: 'validation',
  },
}

const Generic_500Example = {
  summary: 'Response code 500. Internal server error.',
  value: {
    status: 500,
    errorCode: '000',
    message: 'The server could not process the request.',
    errorType: 'internal',
  },
}

const PostAssignTerminalsAssignTerminalCompanyExample = {
  summary: 'Assign a terminal to the company inventory',
  description: 'Assign one or more terminals to the inventory of the company account.',
  value: { companyAccount: 'YOUR_COMPANY_ACCOUNT', terminals: ['P400Plus-275479597'] },
}

const PostAssignTerminalsAssignTerminalCompany_200Example = {
  summary: "Example response for request 'assignTerminalCompany'",
  value: { results: { 'P400Plus-275479597': 'RemoveConfigScheduled' } },
}

const PostAssignTerminalsAssignTerminalMerchantExample = {
  summary: 'Assign a terminal to the inventory of a merchant account',
  description: 'Assign one or more terminals to the inventory of the merchant account.',
  value: {
    companyAccount: 'YOUR_COMPANY_ACCOUNT',
    merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
    merchantInventory: true,
    terminals: ['P400Plus-275479597'],
  },
}

const PostAssignTerminalsAssignTerminalMerchant_200Example = {
  summary: "Example response for request 'assignTerminalMerchant'",
  value: { results: { 'P400Plus-275479597': 'RemoveConfigScheduled' } },
}

const PostAssignTerminalsAssignTerminalStoreExample = {
  summary: 'Assign a terminal to a store',
  description: 'Assign one or more terminals to the specified store.',
  value: {
    companyAccount: 'YOUR_COMPANY_ACCOUNT',
    merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
    store: 'YOUR_STORE',
    terminals: ['P400Plus-275479597'],
  },
}

const PostAssignTerminalsAssignTerminalStore_200Example = {
  summary: "Example response for request 'assignTerminalStore'",
  value: { results: { 'P400Plus-275479597': 'RemoveConfigScheduled' } },
}

const PostFindTerminalFindTerminalExample = {
  summary: 'Find where a terminal is assigned to',
  description:
    'Returns the company account, merchant account, or store that the payment terminal is assigned to.',
  value: { terminal: 'M400-401972715' },
}

const PostFindTerminalFindTerminal_200Example = {
  summary: "Example response for request 'findTerminal'",
  value: {
    companyAccount: 'YOUR_COMPANY_ACCOUNT',
    merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
    merchantInventory: false,
    store: 'YOUR_STORE',
    terminal: 'M400-401972715',
  },
}

const PostGetStoresUnderAccountGetStoresCompanyExample = {
  summary: 'Get all the stores under a company',
  description: 'Returns a list of all stores associated with the specified company account.',
  value: { companyAccount: 'YOUR_COMPANY_ACCOUNT' },
}

const PostGetStoresUnderAccountGetStoresCompany_200Example = {
  summary: "Example response for request 'getStoresCompany'",
  value: {
    stores: [
      {
        store: 'YOUR_STORE',
        description: 'YOUR_STORE',
        address: {
          city: 'The City',
          countryCode: 'NL',
          postalCode: '1234',
          streetAddress: 'The Street',
        },
        status: 'Active',
        merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
      },
    ],
  },
}

const PostGetStoresUnderAccountGetStoresMerchantExample = {
  summary: 'Get all the stores under a merchant account',
  description: 'Returns a list of all stores associated with the specified merchant account.',
  value: { companyAccount: 'YOUR_COMPANY_ACCOUNT', merchantAccount: 'YOUR_MERCHANT_ACCOUNT' },
}

const PostGetStoresUnderAccountGetStoresMerchant_200Example = {
  summary: "Example response for request 'getStoresMerchant'",
  value: {
    stores: [
      {
        store: 'YOUR_STORE',
        description: 'YOUR_STORE',
        address: {
          city: 'The City',
          countryCode: 'NL',
          postalCode: '1234',
          streetAddress: 'The Street',
        },
        status: 'Active',
        merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
      },
    ],
  },
}

const PostGetTerminalDetailsGetTerminalDetailsExample = {
  summary: 'Get information about a specific terminal',
  description:
    'Returns the details of a payment terminal, including where the terminal is assigned to.',
  value: { terminal: 'M400-401972715' },
}

const PostGetTerminalDetailsGetTerminalDetails_200Example = {
  summary: "Example response for request 'getTerminalDetails'",
  value: {
    companyAccount: 'YOUR_COMPANY_ACCOUNT',
    merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
    merchantInventory: false,
    store: 'YOUR_STORE',
    terminal: 'M400-401972715',
    deviceModel: 'M400',
    serialNumber: '401-972-715',
    permanentTerminalId: '88912016',
    terminalStatus: 'SwitchedOff',
    firmwareVersion: 'Verifone_VOS 1.57.6',
    country: 'NETHERLANDS',
    storeDetails: {
      store: 'YOUR_STORE',
      description: 'TestStore',
      address: {
        city: 'The City',
        countryCode: 'NL',
        postalCode: '1234',
        streetAddress: 'The Street',
      },
    },
    ethernetMac: '60:c7:98:5a:69:cd',
    ethernetIp: '192.168.2.11',
    wifiMac: 'c4:ac:59:47:f3:71',
    wifiIp: '192.168.2.12',
    dhcpEnabled: false,
  },
}

const PostGetTerminalsUnderAccountGetTerminalsCompanyExample = {
  summary: 'Get all the terminals under a company account',
  description:
    'Returns a list of terminals associated with the company, indicating where each terminal is assigned to.',
  value: { companyAccount: 'YOUR_COMPANY_ACCOUNT' },
}

const PostGetTerminalsUnderAccountGetTerminalsCompany_200Example = {
  summary: "Example response for request 'getTerminalsCompany'",
  value: {
    companyAccount: 'YOUR_COMPANY_ACCOUNT',
    merchantAccounts: [
      {
        merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
        inStoreTerminals: ['P400Plus-275479597'],
        stores: [{ store: 'YOUR_STORE', inStoreTerminals: ['M400-401972715'] }],
      },
    ],
  },
}

const PostGetTerminalsUnderAccountGetTerminalsMerchantExample = {
  summary: 'Get all the terminals under a merchant account',
  description:
    'Returns a list of terminals associated with the merchant account, indicating where each terminal is assigned to.',
  value: { companyAccount: 'YOUR_COMPANY_ACCOUNT', merchantAccount: 'YOUR_MERCHANT_ACCOUNT' },
}

const PostGetTerminalsUnderAccountGetTerminalsMerchant_200Example = {
  summary: "Example response for request 'getTerminalsMerchant'",
  value: {
    companyAccount: 'YOUR_COMPANY_ACCOUNT',
    merchantAccounts: [
      {
        merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
        inStoreTerminals: ['P400Plus-275479597'],
        stores: [{ store: 'YOUR_STORE', inStoreTerminals: ['M400-401972715'] }],
      },
    ],
  },
}

const PostGetTerminalsUnderAccountGetTerminalsStoreExample = {
  summary: 'Get all the terminals assigned to a store',
  description: 'Returns a list of terminals assigned to the specified store.',
  value: {
    companyAccount: 'YOUR_COMPANY_ACCOUNT',
    merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
    store: 'YOUR_STORE',
  },
}

const PostGetTerminalsUnderAccountGetTerminalsStore_200Example = {
  summary: "Example response for request 'getTerminalsStore'",
  value: {
    companyAccount: 'YOUR_COMPANY_ACCOUNT',
    merchantAccounts: [
      {
        merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
        stores: [{ store: 'YOUR_STORE', inStoreTerminals: ['M400-401972715'] }],
      },
    ],
  },
}

const ApiKeyAuthSecurityScheme = { in: 'header', name: 'X-API-Key', type: 'apiKey' }

const BasicAuthSecurityScheme = { scheme: 'basic', type: 'http' }

export const postAssignTerminalsRoute = createRoute({
  method: 'post',
  path: '/assignTerminals',
  tags: ['General'],
  summary: 'Assign terminals',
  description:
    'Assigns one or more payment terminals to a merchant account or a store. You can also use this endpoint to reassign terminals between merchant accounts or stores, and to unassign a terminal and return it to company inventory.\n\n>From January 1, 2025 POS Terminal Management API is deprecated and support stops on April 1, 2025. To automate the management of your terminal fleet, use our [Management API](https://docs.adyen.com/api-explorer/Management/latest/overview).',
  operationId: 'post-assignTerminals',
  request: {
    body: {
      content: {
        'application/json': {
          schema: AssignTerminalsRequestSchema,
          examples: {
            assignTerminalCompany: PostAssignTerminalsAssignTerminalCompanyExample,
            assignTerminalMerchant: PostAssignTerminalsAssignTerminalMerchantExample,
            assignTerminalStore: PostAssignTerminalsAssignTerminalStoreExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: AssignTerminalsResponseSchema,
          examples: {
            assignTerminalCompany: PostAssignTerminalsAssignTerminalCompany_200Example,
            assignTerminalMerchant: PostAssignTerminalsAssignTerminalMerchant_200Example,
            assignTerminalStore: PostAssignTerminalsAssignTerminalStore_200Example,
          },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  deprecated: true,
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postFindTerminalRoute = createRoute({
  method: 'post',
  path: '/findTerminal',
  tags: ['General'],
  summary: 'Get the account or store of a terminal',
  description:
    'Returns the company account, merchant account, or store that a payment terminal is assigned to.\n\n>From January 1, 2025 POS Terminal Management API is deprecated and support stops on April 1, 2025. To automate the management of your terminal fleet, use our [Management API](https://docs.adyen.com/api-explorer/Management/latest/overview).',
  operationId: 'post-findTerminal',
  request: {
    body: {
      content: {
        'application/json': {
          schema: FindTerminalRequestSchema,
          examples: { findTerminal: PostFindTerminalFindTerminalExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: FindTerminalResponseSchema,
          examples: { findTerminal: PostFindTerminalFindTerminal_200Example },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  deprecated: true,
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postGetStoresUnderAccountRoute = createRoute({
  method: 'post',
  path: '/getStoresUnderAccount',
  tags: ['General'],
  summary: 'Get the stores of an account',
  description:
    'Returns a list of stores associated with a company account or a merchant account, including the status of each store.\n\n>From January 1, 2025 POS Terminal Management API is deprecated and support stops on April 1, 2025. To automate the management of your terminal fleet, use our [Management API](https://docs.adyen.com/api-explorer/Management/latest/overview).',
  operationId: 'post-getStoresUnderAccount',
  request: {
    body: {
      content: {
        'application/json': {
          schema: GetStoresUnderAccountRequestSchema,
          examples: {
            getStoresCompany: PostGetStoresUnderAccountGetStoresCompanyExample,
            getStoresMerchant: PostGetStoresUnderAccountGetStoresMerchantExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: GetStoresUnderAccountResponseSchema,
          examples: {
            getStoresCompany: PostGetStoresUnderAccountGetStoresCompany_200Example,
            getStoresMerchant: PostGetStoresUnderAccountGetStoresMerchant_200Example,
          },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  deprecated: true,
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postGetTerminalDetailsRoute = createRoute({
  method: 'post',
  path: '/getTerminalDetails',
  tags: ['General'],
  summary: 'Get the details of a terminal',
  description:
    'Returns the details of a payment terminal, including where the terminal is assigned to. The response returns the same details that are provided in the terminal list in your Customer Area and in the Terminal Fleet report.\n\n>From January 1, 2025 POS Terminal Management API is deprecated and support stops on April 1, 2025. To automate the management of your terminal fleet, use our [Management API](https://docs.adyen.com/api-explorer/Management/latest/overview).',
  operationId: 'post-getTerminalDetails',
  request: {
    body: {
      content: {
        'application/json': {
          schema: GetTerminalDetailsRequestSchema,
          examples: { getTerminalDetails: PostGetTerminalDetailsGetTerminalDetailsExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: GetTerminalDetailsResponseSchema,
          examples: { getTerminalDetails: PostGetTerminalDetailsGetTerminalDetails_200Example },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  deprecated: true,
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postGetTerminalsUnderAccountRoute = createRoute({
  method: 'post',
  path: '/getTerminalsUnderAccount',
  tags: ['General'],
  summary: 'Get the list of terminals',
  description:
    'Returns a list of payment terminals associated with a company account, merchant account, or store. The response shows whether the terminals are in the inventory, or in-store (ready for boarding or already boarded).\n\n>From January 1, 2025 POS Terminal Management API is deprecated and support stops on April 1, 2025. To automate the management of your terminal fleet, use our [Management API](https://docs.adyen.com/api-explorer/Management/latest/overview).',
  operationId: 'post-getTerminalsUnderAccount',
  request: {
    body: {
      content: {
        'application/json': {
          schema: GetTerminalsUnderAccountRequestSchema,
          examples: {
            getTerminalsCompany: PostGetTerminalsUnderAccountGetTerminalsCompanyExample,
            getTerminalsMerchant: PostGetTerminalsUnderAccountGetTerminalsMerchantExample,
            getTerminalsStore: PostGetTerminalsUnderAccountGetTerminalsStoreExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: GetTerminalsUnderAccountResponseSchema,
          examples: {
            getTerminalsCompany: PostGetTerminalsUnderAccountGetTerminalsCompany_200Example,
            getTerminalsMerchant: PostGetTerminalsUnderAccountGetTerminalsMerchant_200Example,
            getTerminalsStore: PostGetTerminalsUnderAccountGetTerminalsStore_200Example,
          },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  deprecated: true,
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})
