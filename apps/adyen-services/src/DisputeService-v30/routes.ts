import { createRoute, z } from '@hono/zod-openapi'

const AcceptDisputeRequestSchema = z
  .object({
    disputePspReference: z
      .string()
      .openapi({ description: 'The PSP reference assigned to the dispute.' }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier, for which you want to process the dispute transaction.',
      }),
  })
  .openapi({ required: ['merchantAccountCode', 'disputePspReference'] })
  .openapi('AcceptDisputeRequest')

const DisputeServiceResultSchema = z
  .object({
    errorMessage: z.string().exactOptional().openapi({ description: 'The general error message.' }),
    success: z.boolean().openapi({ description: 'Indicates whether the request succeeded.' }),
  })
  .openapi({ required: ['success'] })
  .openapi('DisputeServiceResult')

const AcceptDisputeResponseSchema = z
  .object({
    disputeServiceResult: DisputeServiceResultSchema.openapi({
      description: 'The result of the dispute service.',
    }),
  })
  .openapi({ required: ['disputeServiceResult'] })
  .openapi('AcceptDisputeResponse')

const DefendDisputeRequestSchema = z
  .object({
    defenseReasonCode: z
      .string()
      .openapi({
        description: 'The defense reason code that was selected to defend this dispute.',
      }),
    disputePspReference: z
      .string()
      .openapi({ description: 'The PSP reference assigned to the dispute.' }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier, for which you want to process the dispute transaction.',
      }),
  })
  .openapi({ required: ['merchantAccountCode', 'disputePspReference', 'defenseReasonCode'] })
  .openapi('DefendDisputeRequest')

const DefendDisputeResponseSchema = z
  .object({
    disputeServiceResult: DisputeServiceResultSchema.openapi({
      description: 'The result of the dispute service.',
    }),
  })
  .openapi({ required: ['disputeServiceResult'] })
  .openapi('DefendDisputeResponse')

const DefenseDocumentSchema = z
  .object({
    content: z.string().openapi({ description: 'The content of the defense document.' }),
    contentType: z.string().openapi({ description: 'The content type of the defense document.' }),
    defenseDocumentTypeCode: z
      .string()
      .openapi({ description: 'The document type code of the defense document.' }),
  })
  .openapi({ required: ['defenseDocumentTypeCode', 'contentType', 'content'] })
  .openapi('DefenseDocument')

const DefenseDocumentTypeSchema = z
  .object({
    available: z
      .boolean()
      .openapi({
        description:
          "When **true**, you've successfully uploaded this type of defense document. When **false**, you haven't uploaded this defense document type.",
      }),
    defenseDocumentTypeCode: z
      .string()
      .openapi({ description: 'The document type code of the defense document.' }),
    requirementLevel: z
      .string()
      .openapi({
        description:
          'Indicates to what extent the defense document is required in the defense process.\n\nPossible values: \n\n* **Required**: You must supply the document.\n\n * **OneOrMore**: You must supply at least one of the documents with this label.\n\n* **Optional**: You can choose to supply the document.\n\n* **AlternativeRequired**: You must supply a generic defense document. To enable this functionality, contact our Support Team. When enabled, you can supply a generic defense document for all schemes.',
      }),
  })
  .openapi({ required: ['defenseDocumentTypeCode', 'requirementLevel', 'available'] })
  .openapi('DefenseDocumentType')

const DefenseReasonSchema = z
  .object({
    defenseDocumentTypes: z
      .array(DefenseDocumentTypeSchema)
      .exactOptional()
      .openapi({
        description:
          'Array of defense document types for a specific defense reason. Indicates the document types that you can submit to the schemes to defend this dispute, and whether they are required.',
      }),
    defenseReasonCode: z
      .string()
      .openapi({
        description: 'The defense reason code that was selected to defend this dispute.',
      }),
    satisfied: z
      .boolean()
      .openapi({ description: 'Indicates if sufficient defense material has been supplied.' }),
  })
  .openapi({ required: ['defenseReasonCode', 'satisfied'] })
  .openapi('DefenseReason')

const DefenseReasonsRequestSchema = z
  .object({
    disputePspReference: z
      .string()
      .openapi({ description: 'The PSP reference assigned to the dispute.' }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier, for which you want to process the dispute transaction.',
      }),
  })
  .openapi({ required: ['merchantAccountCode', 'disputePspReference'] })
  .openapi('DefenseReasonsRequest')

const DefenseReasonsResponseSchema = z
  .object({
    defenseReasons: z
      .array(DefenseReasonSchema)
      .exactOptional()
      .openapi({ description: 'The defense reasons that can be used to defend the dispute.' }),
    disputeServiceResult: DisputeServiceResultSchema.openapi({
      description: 'The result of the dispute service.',
    }),
  })
  .openapi({ required: ['disputeServiceResult'] })
  .openapi('DefenseReasonsResponse')

const DeleteDefenseDocumentRequestSchema = z
  .object({
    defenseDocumentType: z
      .string()
      .openapi({ description: 'The document type code of the defense document.' }),
    disputePspReference: z
      .string()
      .openapi({ description: 'The PSP reference assigned to the dispute.' }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier, for which you want to process the dispute transaction.',
      }),
  })
  .openapi({ required: ['merchantAccountCode', 'disputePspReference', 'defenseDocumentType'] })
  .openapi('DeleteDefenseDocumentRequest')

const DeleteDefenseDocumentResponseSchema = z
  .object({
    disputeServiceResult: DisputeServiceResultSchema.openapi({
      description: 'The result of the dispute service.',
    }),
  })
  .openapi({ required: ['disputeServiceResult'] })
  .openapi('DeleteDefenseDocumentResponse')

const ServiceErrorSchema = z
  .object({
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

const SupplyDefenseDocumentRequestSchema = z
  .object({
    defenseDocuments: z
      .array(DefenseDocumentSchema)
      .openapi({ description: 'An array containing a list of the defense documents.' }),
    disputePspReference: z
      .string()
      .openapi({ description: 'The PSP reference assigned to the dispute.' }),
    merchantAccountCode: z
      .string()
      .openapi({
        description:
          'The merchant account identifier, for which you want to process the dispute transaction.',
      }),
  })
  .openapi({ required: ['merchantAccountCode', 'disputePspReference', 'defenseDocuments'] })
  .openapi('SupplyDefenseDocumentRequest')

const SupplyDefenseDocumentResponseSchema = z
  .object({
    disputeServiceResult: DisputeServiceResultSchema.openapi({
      description: 'The result of the dispute service.',
    }),
  })
  .openapi({ required: ['disputeServiceResult'] })
  .openapi('SupplyDefenseDocumentResponse')

const PostAcceptDisputeAcceptDisputeExample = {
  summary: 'Accept a dispute',
  value: { disputePspReference: 'DZ4DPSHB4WD2WN82', merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT' },
}

const PostAcceptDisputeAcceptDispute_200Example = {
  summary: 'Dispute accepted',
  value: { disputeServiceResult: { success: true } },
}

const PostDefendDisputeDefendDisputeExample = {
  summary: 'Defend a dispute',
  value: {
    defenseReasonCode: 'SupplyDefenseMaterial',
    disputePspReference: 'DZ4DPSHB4WD2WN82',
    merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
  },
}

const PostDefendDisputeDefendDispute_200Example = {
  summary: 'Dispute defended',
  value: { disputeServiceResult: { success: true } },
}

const PostDeleteDisputeDefenseDocumentDeleteDisputeDefenseDocumentExample = {
  summary: 'Delete a dispute defense document',
  value: {
    defenseDocumentType: 'DefenseMaterial',
    disputePspReference: 'DZ4DPSHB4WD2WN82',
    merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
  },
}

const PostDeleteDisputeDefenseDocumentDeleteDisputeDefenseDocument_200Example = {
  summary: 'Dispute defense document deleted',
  value: { disputeServiceResult: { success: true } },
}

const PostRetrieveApplicableDefenseReasonsRetrieveDefenseReasonsExample = {
  summary: 'Retrieve applicable defense reasons',
  value: { disputePspReference: 'DZ4DPSHB4WD2WN82', merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT' },
}

const PostRetrieveApplicableDefenseReasonsRetrieveDefenseReasons_200Example = {
  summary: 'Applicable dispute defense reasons retrieved',
  value: {
    defenseReasons: [
      {
        defenseDocumentTypes: [
          {
            available: false,
            defenseDocumentTypeCode: 'TIDorInvoice',
            requirementLevel: 'Optional',
          },
          {
            available: false,
            defenseDocumentTypeCode: 'GoodsNotReturned',
            requirementLevel: 'Required',
          },
        ],
        defenseReasonCode: 'GoodsNotReturned',
        satisfied: false,
      },
      {
        defenseDocumentTypes: [
          {
            available: false,
            defenseDocumentTypeCode: 'TIDorInvoice',
            requirementLevel: 'Optional',
          },
          {
            available: false,
            defenseDocumentTypeCode: 'GoodsRepairedOrReplaced',
            requirementLevel: 'Required',
          },
        ],
        defenseReasonCode: 'GoodsRepairedOrReplaced',
        satisfied: false,
      },
      {
        defenseDocumentTypes: [
          {
            available: false,
            defenseDocumentTypeCode: 'GoodsWereAsDescribed',
            requirementLevel: 'Required',
          },
          {
            available: false,
            defenseDocumentTypeCode: 'TIDorInvoice',
            requirementLevel: 'Required',
          },
        ],
        defenseReasonCode: 'GoodsWereAsDescribed',
        satisfied: false,
      },
      {
        defenseDocumentTypes: [
          {
            available: false,
            defenseDocumentTypeCode: 'TIDorInvoice',
            requirementLevel: 'Optional',
          },
          {
            available: false,
            defenseDocumentTypeCode: 'DefenseMaterial',
            requirementLevel: 'Required',
          },
        ],
        defenseReasonCode: 'SupplyDefenseMaterial',
        satisfied: false,
      },
    ],
    disputeServiceResult: { success: true },
  },
}

const PostSupplyDefenseDocumentSupplyDefenseDocumentExample = {
  summary: 'Supply dispute defense documents',
  value: {
    defenseDocuments: [
      {
        content: 'JVBERi0xLjQKJcOkw7zDtsOfCjIgMCBv+f/ub0j6JPRX+E3EmC==',
        contentType: 'application/pdf',
        defenseDocumentTypeCode: 'DefenseMaterial',
      },
    ],
    disputePspReference: 'DZ4DPSHB4WD2WN82',
    merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
  },
}

const PostSupplyDefenseDocumentSupplyDefenseDocument_200Example = {
  summary: 'Dispute defense documents supplied',
  value: { disputeServiceResult: { success: true } },
}

const ApiKeyAuthSecurityScheme = { in: 'header', name: 'X-API-Key', type: 'apiKey' }

const BasicAuthSecurityScheme = { scheme: 'basic', type: 'http' }

export const postAcceptDisputeRoute = createRoute({
  method: 'post',
  path: '/acceptDispute',
  tags: ['General'],
  summary: 'Accept a dispute',
  description: 'Accepts a specific dispute.',
  operationId: 'post-acceptDispute',
  request: {
    body: {
      content: {
        'application/json': {
          schema: AcceptDisputeRequestSchema,
          examples: { 'accept-dispute': PostAcceptDisputeAcceptDisputeExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: AcceptDisputeResponseSchema,
          examples: { 'accept-dispute': PostAcceptDisputeAcceptDispute_200Example },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postDefendDisputeRoute = createRoute({
  method: 'post',
  path: '/defendDispute',
  tags: ['General'],
  summary: 'Defend a dispute',
  description: 'Defends a specific dispute.',
  operationId: 'post-defendDispute',
  request: {
    body: {
      content: {
        'application/json': {
          schema: DefendDisputeRequestSchema,
          examples: { 'defend-dispute': PostDefendDisputeDefendDisputeExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: DefendDisputeResponseSchema,
          examples: { 'defend-dispute': PostDefendDisputeDefendDispute_200Example },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postDeleteDisputeDefenseDocumentRoute = createRoute({
  method: 'post',
  path: '/deleteDisputeDefenseDocument',
  tags: ['General'],
  summary: 'Delete a defense document',
  description: 'Deletes a specific dispute defense document that was supplied earlier.',
  operationId: 'post-deleteDisputeDefenseDocument',
  request: {
    body: {
      content: {
        'application/json': {
          schema: DeleteDefenseDocumentRequestSchema,
          examples: {
            'delete-dispute-defense-document':
              PostDeleteDisputeDefenseDocumentDeleteDisputeDefenseDocumentExample,
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
          schema: DeleteDefenseDocumentResponseSchema,
          examples: {
            'delete-dispute-defense-document':
              PostDeleteDisputeDefenseDocumentDeleteDisputeDefenseDocument_200Example,
          },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postRetrieveApplicableDefenseReasonsRoute = createRoute({
  method: 'post',
  path: '/retrieveApplicableDefenseReasons',
  tags: ['General'],
  summary: 'Get applicable defense reasons',
  description: 'Returns a list of all applicable defense reasons to defend a specific dispute.',
  operationId: 'post-retrieveApplicableDefenseReasons',
  request: {
    body: {
      content: {
        'application/json': {
          schema: DefenseReasonsRequestSchema,
          examples: {
            'retrieve-defense-reasons':
              PostRetrieveApplicableDefenseReasonsRetrieveDefenseReasonsExample,
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
          schema: DefenseReasonsResponseSchema,
          examples: {
            'retrieve-defense-reasons':
              PostRetrieveApplicableDefenseReasonsRetrieveDefenseReasons_200Example,
          },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postSupplyDefenseDocumentRoute = createRoute({
  method: 'post',
  path: '/supplyDefenseDocument',
  tags: ['General'],
  summary: 'Supply a defense document',
  description: 'Supplies a specific dispute defense document.',
  operationId: 'post-supplyDefenseDocument',
  request: {
    body: {
      content: {
        'application/json': {
          schema: SupplyDefenseDocumentRequestSchema,
          examples: {
            'supply-defense-document': PostSupplyDefenseDocumentSupplyDefenseDocumentExample,
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
          schema: SupplyDefenseDocumentResponseSchema,
          examples: {
            'supply-defense-document': PostSupplyDefenseDocumentSupplyDefenseDocument_200Example,
          },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})
