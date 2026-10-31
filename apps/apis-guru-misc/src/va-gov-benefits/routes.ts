import { createRoute, z } from '@hono/zod-openapi'

const DocumentUploadAttributesSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unambiguous status code. Only present if status = "error"\n\n* `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.\n* `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.\n* `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.\n* `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.\n* `DOC105` - Invalid or unknown id\n* `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.\n* `DOC107` - Empty payload.\n* `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.\n* `DOC201` - Upload server error.\n* `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.\n',
      }),
    detail: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human readable error detail. Only present if status = "error"' }),
    guid: z
      .uuid()
      .openapi({
        description: 'The document upload identifier',
        example: '6d8433c1-cd55-4c24-affd-f592287a7572',
      }),
    location: z
      .url()
      .exactOptional()
      .openapi({
        description: 'Location to which to PUT document Payload',
        example: 'https://sandbox-api.va.gov/services_user_content/vba_documents/{idpath}',
      }),
    status: z
      .enum(['pending', 'uploaded', 'received', 'processing', 'success', 'vbms', 'error'])
      .openapi({ description: 'Document upload status.\n', example: 'pending' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The last time the submission was updated',
        example: '2018-07-30T17:31:15.958Z',
      }),
    uploaded_pdf: z
      .any()
      .exactOptional()
      .openapi({
        description: 'Only populated after submission starts processing',
        example: 'null',
      }),
  })
  .openapi({ required: ['guid', 'status'] })
  .openapi('DocumentUploadAttributes')

const DocumentUploadFailureSchema = z
  .object({
    Code: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error code', example: 'SignatureDoesNotMatch' }),
    Message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Error detail',
        example:
          'The request signature we calculated does not match the signature you provided. Check your key and signing method.',
      }),
  })
  .openapi({ description: 'Document upload failed', xml: { name: 'Error' }, required: [] })
  .openapi('DocumentUploadFailure')

const DocumentUploadMetadataSchema = z
  .object({
    businessLine: z
      .enum(['CMP', 'PMC', 'INS', 'EDU', 'VRE', 'BVA', 'FID', 'OTH'])
      .exactOptional()
      .openapi({
        description:
          'Optional parameter (can be missing or empty). The values are:<br><br>\nCMP - Compensation requests such as those related to disability, unemployment, and pandemic claims<br><br>\nPMC - Pension requests including survivor’s pension<br><br>\nINS - Insurance such as life insurance, disability insurance, and other health insurance<br><br>\nEDU - Education benefits, programs, and affiliations<br><br>\nVRE - Veteran Readiness & Employment such as employment questionnaires, employment discrimination, employment verification<br><br>\nBVA - Board of Veteran Appeals<br><br>\nFID - Fiduciary / financial appointee, including family member benefits<br><br>\nOTH - Other (this value if used, will be treated as CMP)<br>\n',
        example: 'CMP',
      }),
    docType: z
      .string()
      .exactOptional()
      .openapi({ description: 'VBA form number of the document', example: '21-22' }),
    fileNumber: z
      .string()
      .regex(/^\d{8,9}$/)
      .openapi({
        description:
          "The Veteran's file number is exactly 9 digits with no alpha characters, hyphens, spaces or punctuation. In most cases, this is the Veteran's SSN but may also be an 8 digit BIRL number. If no file number has been established or if it is unknown, the application should use the Veteran's SSN and the file number will be associated with the submission later in the process. Incorrect file numbers can cause delays.",
        example: '999887777',
      }),
    source: z
      .string()
      .openapi({
        description: 'System, installation, or entity submitting the document',
        example: 'MyVSO',
      }),
    veteranFirstName: z
      .string()
      .regex(/^[a-zA-Z\-\/\s]{1,50}$/)
      .openapi({
        description:
          'Veteran first name. Cannot be missing or empty or longer than 50 characters. Only upper/lower case letters, hyphens(-), spaces and forward-slash(/) allowed.',
        example: 'Jane',
      }),
    veteranLastName: z
      .string()
      .regex(/^[a-zA-Z\-\/\s]{1,50}$/)
      .openapi({
        description:
          'Veteran last name. Cannot be missing or empty or longer than 50 characters. Only upper/lower case letters, hyphens(-), spaces and forward-slash(/) allowed.',
        example: 'Doe-Smith',
      }),
    zipCode: z
      .string()
      .openapi({
        description:
          "Veteran zip code. Either five digits (XXXXX) or five digits then four digits separated by a hyphen (XXXXX-XXXX). Use '00000' for Veterans with non-US addresses.",
        example: '20571',
      }),
  })
  .openapi({
    description: 'Identifying properties about the document payload being submitted',
    required: ['veteranFirstName', 'veteranLastName', 'fileNumber', 'zipCode', 'source'],
  })
  .openapi('DocumentUploadMetadata')

const DocumentUploadPathSchema = z
  .object({
    attributes: DocumentUploadAttributesSchema,
    id: z
      .uuid()
      .openapi({
        description: 'JSON API identifier',
        example: '6d8433c1-cd55-4c24-affd-f592287a7572',
      }),
    type: z
      .string()
      .openapi({ description: 'JSON API type specification', example: 'document_upload' }),
  })
  .openapi({
    description: 'Status record for a previously initiated document submission.',
    required: ['id', 'type', 'attributes'],
  })
  .openapi('DocumentUploadPath')

const PdfDimensionAttributesSchema = z
  .object({
    height: z.int().openapi({ description: 'The document height', example: '11.0' }),
    oversized_pdf: z
      .boolean()
      .openapi({
        description: 'Indicates if this is an oversized PDF (greater than 21x21)',
        example: 'false',
      }),
    width: z.int().openapi({ description: 'The document width', example: '8.5' }),
  })
  .openapi({ required: ['height', 'width', 'oversized_pdf'] })
  .openapi('PdfDimensionAttributes')

const PdfUploadAttributesSchema = z
  .object({
    content: z
      .object({
        attachments: z
          .array(
            z
              .object({
                dimensions: PdfDimensionAttributesSchema.exactOptional(),
                page_count: z
                  .int()
                  .exactOptional()
                  .openapi({ description: 'The number of pages in this attachment', example: '2' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        dimensions: PdfDimensionAttributesSchema.exactOptional(),
        page_count: z
          .int()
          .exactOptional()
          .openapi({
            description: 'The total number of pages solely in this PDF document',
            example: '1',
          }),
      })
      .openapi({ required: [] }),
    total_documents: z
      .int()
      .openapi({
        description: 'The total number of documents contained in this upload',
        example: '2',
      }),
    total_pages: z
      .int()
      .openapi({ description: 'The total number of pages contained in this upload', example: '3' }),
  })
  .openapi({ required: ['total_documents', 'total_pages', 'content', 'dimensions', 'attachments'] })
  .openapi('PdfUploadAttributes')

const DocumentUploadStatusAttributesSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unambiguous status code. Only present if status = "error"\n\n* `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.\n* `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.\n* `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.\n* `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.\n* `DOC105` - Invalid or unknown id\n* `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.\n* `DOC107` - Empty payload.\n* `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.\n* `DOC201` - Upload server error.\n* `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.\n',
      }),
    detail: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human readable error detail. Only present if status = "error"' }),
    guid: z
      .uuid()
      .openapi({
        description: 'The document upload identifier',
        example: '6d8433c1-cd55-4c24-affd-f592287a7572',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Human readable error description. Only present if status = "error"',
      }),
    status: z
      .enum(['pending', 'uploaded', 'received', 'processing', 'success', 'vbms', 'error'])
      .openapi({ description: 'Document upload status.\n', example: 'received' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The last time the submission was updated',
        example: '2018-07-30T17:31:15.958Z',
      }),
    uploaded_pdf: PdfUploadAttributesSchema.exactOptional(),
  })
  .openapi({ required: ['guid', 'status'] })
  .openapi('DocumentUploadStatusAttributes')

const DocumentUploadStatusSchema = z
  .object({
    attributes: DocumentUploadStatusAttributesSchema,
    id: z
      .uuid()
      .openapi({
        description: 'JSON API identifier',
        example: '6d8433c1-cd55-4c24-affd-f592287a7572',
      }),
    type: z
      .string()
      .openapi({ description: 'JSON API type specification', example: 'document_upload' }),
  })
  .openapi({
    description: 'Status record for a previously initiated document submission.',
    required: ['id', 'type', 'attributes'],
  })
  .openapi('DocumentUploadStatus')

const DocumentUploadStatusGuidListSchema = z
  .object({
    ids: z
      .array(z.uuid().openapi({ example: '6d8433c1-cd55-4c24-affd-f592287a7572' }))
      .min(1)
      .max(1000)
      .openapi({ description: 'List of IDs for previous document upload submissions' }),
  })
  .openapi({ required: ['ids'] })
  .openapi('DocumentUploadStatusGuidList')

const DocumentUploadStatusReportSchema = z
  .array(DocumentUploadStatusSchema)
  .openapi('DocumentUploadStatusReport')

const DocumentUploadSubmissionAttributesSchema = z
  .object({})
  .openapi({ required: ['location'] })
  .and(DocumentUploadStatusAttributesSchema)
  .openapi('DocumentUploadSubmissionAttributes')

const DocumentUploadSubmissionSchema = z
  .object({
    attributes: DocumentUploadSubmissionAttributesSchema,
    id: z
      .uuid()
      .openapi({
        description: 'JSON API Identifier',
        example: '6d8433c1-cd55-4c24-affd-f592287a7572',
      }),
    type: z
      .string()
      .openapi({ description: 'JSON API type specification', example: 'document_upload' }),
  })
  .openapi({
    description:
      'Record of requested document submission. Includes the location to which the document payload is to be uploaded',
    required: ['id', 'type', 'attributes'],
  })
  .openapi('DocumentUploadSubmission')

const DocumentValidationErrorModelSchema = z
  .object({
    detail: z
      .string()
      .openapi({
        description:
          'Error detail\n\nPossible values:\n* Document was not provided\n* Document is not a PDF\n* Document exceeds the file size limit of 100 MB\n* Document exceeds the page size limit of 21 in. x 21 in.\n* Document is locked with a user password\n* Document is not a valid PDF\n',
        example: 'Document is locked with a user password',
      }),
    status: z.string().openapi({ description: 'HTTP error code', example: '422' }),
    title: z
      .string()
      .openapi({ description: 'Error title', example: 'Document failed validation' }),
  })
  .openapi({
    description: 'Error returned from the document validation endpoint.',
    required: ['title', 'detail', 'status'],
  })
  .openapi('DocumentValidationErrorModel')

const ErrorModelSchema = z
  .object({
    detail: z
      .string()
      .openapi({
        description: 'A more detailed message about why an error occurred',
        example:
          'DOC104 - Upload rejected by upstream system. Processing failed and upload must be resubmitted',
      }),
    status: z
      .int32()
      .openapi({ description: 'Standard HTTP Status returned with Error', example: '422' }),
  })
  .openapi({
    description: 'Errors with some details for the given request',
    required: ['status', 'detail'],
  })
  .openapi('ErrorModel')

const ApikeySecurityScheme = { in: 'header', name: 'apikey', type: 'apiKey' }

export const putPathRoute = createRoute({
  method: 'put',
  path: '/path',
  tags: ['VBA Documents'],
  summary: 'Accepts document upload.',
  description:
    'Accepts document metadata, document binary, and attachment binaries. Full URL, including\nquery parameters, provided from POST `/document_uploads`.\n\n## Example Payload\n\nThe following demonstrates a (redacted) multipart payload suitable for submitting to the PUT\nendpoint. Most programming languages should have provisions for assembling a multipart\npayload like this without having to do so manually.\n\n```\n--17de1ed8f01442b2a2d7a93506314b76\nContent-Disposition: form-data; name="metadata"\nContent-Type: application/json\n\n{"veteranFirstName": "Jane",\n"veteranLastName": "Doe",\n"fileNumber": "012345678",\n"zipCode": "97202",\n"source": "MyVSO",\n"docType": "21-22"\n"businessLine": "CMP"}\n--17de1ed8f01442b2a2d7a93506314b76\nContent-Disposition: form-data; name="content"\nContent-Type: application/pdf\n\n<Binary PDF contents>\n--17de1ed8f01442b2a2d7a93506314b76\nContent-Disposition: form-data; name="attachment1"\nContent-Type: application/pdf\n\n<Binary PDF attachment contents>\n--17de1ed8f01442b2a2d7a93506314b76--\n```\n\nThis PUT request would have an overall HTTP Content-Type header:\n\n```\nContent-Type: multipart/form-data; boundary=17de1ed8f01442b2a2d7a93506314b76\n```\n\nNote that the Content-Disposition parameter "name" in each part must be the expected values\n"metadata", "content", "attachment1"..."attachmentN". The attachment attributes must be named \nexactly as they are listed here (case sensitive), for example: "attachment_1" or "Attachment2"\nare invalid.\n\nThis is an example curl command:\n\n```\ncurl -v -L -X PUT \'<Location from \\uploads>\' -F \'metadata="{\\"veteranFirstName\\": \\"Jane\\",\\"veteranLastName\\": \\"Doe\\",\\"fileNumber\\": \\"012345678\\",\\"zipCode\\": \\"97202\\",\\"source\\": \\"MyVSO\\",\\"docType\\": \\"21-22\\",\\"businessLine\\": \\"CMP\\"}";type=application/json\' -F \'content=@"content.pdf"\' -F \'attachment1=@"file1.pdf"\' -F \'attachment2=@"another_file.pdf"\'\n```\n',
  operationId: 'putBenefitsDocumentUpload',
  request: {
    headers: z.object({
      'Content-MD5': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Base64-encoded 128-bit MD5 digest of the message. Use for integrity control',
            in: 'header',
            name: 'Content-MD5',
            required: false,
            schema: { format: 'md5', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Document upload staged' },
    401: {
      description: 'Unauthorized request',
      content: {
        'application/json': {
          schema: z
            .object({
              Message: z
                .string()
                .exactOptional()
                .openapi({ description: 'Error detail', example: 'Unauthorized Request' }),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
    403: {
      description: 'Document upload failed',
      content: { 'application/xml': { schema: DocumentUploadFailureSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: {
        'application/json': {
          schema: z.object({ errors: z.array(ErrorModelSchema) }).openapi({ required: ['errors'] }),
        },
      },
    },
    429: {
      description: 'Too many requests',
      content: {
        'application/json': {
          schema: z
            .object({
              Message: z
                .string()
                .exactOptional()
                .openapi({ description: 'message', example: 'API rate limit exceeded' }),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unambiguous status code. Only present if status = "error"\n\n* `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.\n* `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.\n* `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.\n* `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.\n* `DOC105` - Invalid or unknown id\n* `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.\n* `DOC107` - Empty payload.\n* `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.\n* `DOC201` - Upload server error.\n* `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.\n',
                  example: 500,
                }),
              detail: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Human readable error detail. Only present if status = "error"',
                  example: 'Internal server error',
                }),
              status: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unambiguous status code. Only present if status = "error"\n\n* `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.\n* `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.\n* `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.\n* `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.\n* `DOC105` - Invalid or unknown id\n* `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.\n* `DOC107` - Empty payload.\n* `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.\n* `DOC201` - Upload server error.\n* `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.\n',
                  example: 500,
                }),
              title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Human readable title description.',
                  example: 'Internal server error',
                }),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
  },
})

export const postUploadsRoute = createRoute({
  method: 'post',
  path: '/uploads',
  tags: ['VBA Documents'],
  summary: 'Get a location for subsequent document upload PUT request',
  operationId: 'postBenefitsDocumentUpload',
  responses: {
    202: {
      description: 'Accepted. Location generated',
      content: {
        'application/json': {
          schema: z.object({ data: DocumentUploadPathSchema }).openapi({ required: ['data'] }),
        },
      },
    },
    401: {
      description: 'Unauthorized request',
      content: {
        'application/json': {
          schema: z
            .object({
              Message: z
                .string()
                .exactOptional()
                .openapi({ description: 'Error detail', example: 'Unauthorized Request' }),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({
              Message: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Error detail',
                  example: 'Invalid authentication credentials',
                }),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
    422: {
      description: 'Unprocessable Entity',
      content: {
        'application/json': {
          schema: z.object({ errors: z.array(ErrorModelSchema) }).openapi({ required: ['errors'] }),
        },
      },
    },
    429: {
      description: 'Too many requests',
      content: {
        'application/json': {
          schema: z
            .object({
              Message: z
                .string()
                .exactOptional()
                .openapi({ description: 'message', example: 'API rate limit exceeded' }),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unambiguous status code. Only present if status = "error"\n\n* `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.\n* `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.\n* `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.\n* `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.\n* `DOC105` - Invalid or unknown id\n* `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.\n* `DOC107` - Empty payload.\n* `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.\n* `DOC201` - Upload server error.\n* `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.\n',
                  example: 500,
                }),
              detail: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Human readable error detail. Only present if status = "error"',
                  example: 'Internal server error',
                }),
              status: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unambiguous status code. Only present if status = "error"\n\n* `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.\n* `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.\n* `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.\n* `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.\n* `DOC105` - Invalid or unknown id\n* `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.\n* `DOC107` - Empty payload.\n* `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.\n* `DOC201` - Upload server error.\n* `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.\n',
                  example: 500,
                }),
              title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Human readable title description.',
                  example: 'Internal server error',
                }),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
  },
  security: [{ apikey: [] }],
})

export const postUploadsReportRoute = createRoute({
  method: 'post',
  path: '/uploads/report',
  tags: ['VBA Documents'],
  summary: 'Get a bulk status report for a list of previous uploads',
  operationId: 'getBenefitsDocumentUploadStatusReport',
  request: {
    body: {
      description: 'List of GUIDs for which to retrieve current status',
      content: { 'application/json': { schema: DocumentUploadStatusGuidListSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Upload status report retrieved successfully',
      content: {
        'application/json': {
          schema: z
            .object({ data: DocumentUploadStatusReportSchema })
            .openapi({ required: ['data'] }),
        },
      },
    },
    400: { description: 'Bad Request - invalid or missing list of guids' },
    401: {
      description: 'Unauthorized request',
      content: {
        'application/json': {
          schema: z
            .object({
              Message: z
                .string()
                .exactOptional()
                .openapi({ description: 'Error detail', example: 'Unauthorized Request' }),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({
              Message: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Error detail',
                  example: 'Invalid authentication credentials',
                }),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
    422: {
      description: 'Unprocessable Entity',
      content: {
        'application/json': {
          schema: z.object({ errors: z.array(ErrorModelSchema) }).openapi({ required: ['errors'] }),
        },
      },
    },
    429: {
      description: 'Too many requests',
      content: {
        'application/json': {
          schema: z
            .object({
              Message: z
                .string()
                .exactOptional()
                .openapi({ description: 'message', example: 'API rate limit exceeded' }),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unambiguous status code. Only present if status = "error"\n\n* `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.\n* `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.\n* `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.\n* `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.\n* `DOC105` - Invalid or unknown id\n* `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.\n* `DOC107` - Empty payload.\n* `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.\n* `DOC201` - Upload server error.\n* `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.\n',
                  example: 500,
                }),
              detail: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Human readable error detail. Only present if status = "error"',
                  example: 'Internal server error',
                }),
              status: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unambiguous status code. Only present if status = "error"\n\n* `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.\n* `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.\n* `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.\n* `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.\n* `DOC105` - Invalid or unknown id\n* `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.\n* `DOC107` - Empty payload.\n* `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.\n* `DOC201` - Upload server error.\n* `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.\n',
                  example: 500,
                }),
              title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Human readable title description.',
                  example: 'Internal server error',
                }),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
  },
  security: [{ apikey: [] }],
})

export const postUploadsValidateDocumentRoute = createRoute({
  method: 'post',
  path: '/uploads/validate_document',
  tags: ['VBA Documents'],
  summary: 'Validate an individual document against system file requirements',
  description:
    'Using this endpoint will decrease the likelihood of errors associated with individual documents during\nthe submission process. Validations performed:\n* Document is a valid PDF (Note: `Content-Type` header value must be "application/pdf")\n* Document does not have a user password (an owner password is acceptable)\n* File size does not exceed 100 MB\n* Page size does not exceed 21" x 21"\n\nEach PDF document is sent as a direct file upload. The request body should contain nothing other than the document in\nbinary format. Binary multipart/form-data encoding is not supported. This endpoint does NOT validate metadata in JSON\nformat.\n\nThis endpoint does NOT initiate the claims intake process or submit data to that process. After using this endpoint,\nindividual PDF documents can be combined and submitted as a payload using PUT `/path`.\n\nA `200` response confirms that the individual document provided passes the system requirements.\n\nA `422` response indicates one or more problems with the document that should be resolved before submitting it in the\nfull document submission payload.\n',
  operationId: 'postBenefitsDocumentUploadValidateDocument',
  responses: {
    200: {
      description: 'Document passed system requirements',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  attributes: z
                    .object({ status: z.string().exactOptional().openapi({ example: 'valid' }) })
                    .exactOptional()
                    .openapi({ required: [] }),
                  type: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'schema type', example: 'documentValidation' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'Unauthorized request',
      content: {
        'application/json': {
          schema: z
            .object({
              Message: z
                .string()
                .exactOptional()
                .openapi({ description: 'Error detail', example: 'Unauthorized Request' }),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({
              Message: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Error detail',
                  example: 'Invalid authentication credentials',
                }),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
    422: {
      description: 'Document did NOT pass system requirements',
      content: {
        'application/json': {
          schema: z
            .object({ errors: z.array(DocumentValidationErrorModelSchema) })
            .openapi({ required: ['errors'] }),
        },
      },
    },
    429: {
      description: 'Too many requests',
      content: {
        'application/json': {
          schema: z
            .object({
              Message: z
                .string()
                .exactOptional()
                .openapi({ description: 'message', example: 'API rate limit exceeded' }),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unambiguous status code. Only present if status = "error"\n\n* `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.\n* `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.\n* `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.\n* `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.\n* `DOC105` - Invalid or unknown id\n* `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.\n* `DOC107` - Empty payload.\n* `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.\n* `DOC201` - Upload server error.\n* `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.\n',
                  example: 500,
                }),
              detail: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Human readable error detail. Only present if status = "error"',
                  example: 'Internal server error',
                }),
              status: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unambiguous status code. Only present if status = "error"\n\n* `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.\n* `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.\n* `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.\n* `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.\n* `DOC105` - Invalid or unknown id\n* `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.\n* `DOC107` - Empty payload.\n* `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.\n* `DOC201` - Upload server error.\n* `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.\n',
                  example: 500,
                }),
              title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Human readable title description.',
                  example: 'Internal server error',
                }),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
  },
})

export const getUploadsIdRoute = createRoute({
  method: 'get',
  path: '/uploads/{id}',
  tags: ['VBA Documents'],
  summary: 'Get status for a previous benefits document upload',
  operationId: 'getBenefitsDocumentUploadStatus',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'ID as returned by a previous create upload request',
            example: '6d8433c1-cd55-4c24-affd-f592287a7572',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Upload status retrieved successfully',
      content: {
        'application/json': {
          schema: z.object({ data: DocumentUploadStatusSchema }).openapi({ required: ['data'] }),
        },
      },
    },
    401: {
      description: 'Unauthorized request',
      content: {
        'application/json': {
          schema: z
            .object({
              Message: z
                .string()
                .exactOptional()
                .openapi({ description: 'Error detail', example: 'Unauthorized Request' }),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({
              Message: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Error detail',
                  example: 'Invalid authentication credentials',
                }),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
    404: {
      description: 'Not found',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unambiguous status code. Only present if status = "error"\n\n* `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.\n* `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.\n* `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.\n* `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.\n* `DOC105` - Invalid or unknown id\n* `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.\n* `DOC107` - Empty payload.\n* `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.\n* `DOC201` - Upload server error.\n* `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.\n',
                  example: 404,
                }),
              detail: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Human readable error detail. Only present if status = "error"',
                  example: 'The record identified by {{id}} could not be found',
                }),
              status: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unambiguous status code. Only present if status = "error"\n\n* `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.\n* `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.\n* `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.\n* `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.\n* `DOC105` - Invalid or unknown id\n* `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.\n* `DOC107` - Empty payload.\n* `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.\n* `DOC201` - Upload server error.\n* `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.\n',
                  example: 404,
                }),
              title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Human readable title description.',
                  example: 'Record not found',
                }),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
    429: {
      description: 'Too many requests',
      content: {
        'application/json': {
          schema: z
            .object({
              Message: z
                .string()
                .exactOptional()
                .openapi({ description: 'message', example: 'API rate limit exceeded' }),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unambiguous status code. Only present if status = "error"\n\n* `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.\n* `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.\n* `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.\n* `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.\n* `DOC105` - Invalid or unknown id\n* `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.\n* `DOC107` - Empty payload.\n* `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.\n* `DOC201` - Upload server error.\n* `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.\n',
                  example: 500,
                }),
              detail: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Human readable error detail. Only present if status = "error"',
                  example: 'Internal server error',
                }),
              status: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unambiguous status code. Only present if status = "error"\n\n* `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.\n* `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.\n* `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.\n* `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.\n* `DOC105` - Invalid or unknown id\n* `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.\n* `DOC107` - Empty payload.\n* `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.\n* `DOC201` - Upload server error.\n* `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.\n',
                  example: 500,
                }),
              title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Human readable title description.',
                  example: 'Internal server error',
                }),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
  },
  security: [{ apikey: [] }],
})

export const getUploadsIdDownloadRoute = createRoute({
  method: 'get',
  path: '/uploads/{id}/download',
  tags: ['VBA Documents'],
  summary: 'Download zip of "what the server sees"',
  description:
    'An endpoint that will allow you to see exactly what the server sees. We split apart all submitted docs and metadata and zip the file to make it available to you to help with debugging purposes. Files are deleted after 10 days. Only available in testing environments, not production.',
  operationId: 'getBenefitsDocumentUploadDownload',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'ID as returned by a previous create upload request',
            example: '6d8433c1-cd55-4c24-affd-f592287a7572',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Zip file with the contents of your payload as parsed by our server',
      content: {
        'application/zip': {
          schema: z.file().openapi({ type: 'string', format: 'binary', example: 'Binary File' }),
        },
      },
    },
    401: {
      description: 'Unauthorized request',
      content: {
        'application/json': {
          schema: z
            .object({
              Message: z
                .string()
                .exactOptional()
                .openapi({ description: 'Error detail', example: 'Unauthorized Request' }),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({
              Message: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Error detail',
                  example: 'Invalid authentication credentials',
                }),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
    404: {
      description: 'Not found',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unambiguous status code. Only present if status = "error"\n\n* `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.\n* `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.\n* `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.\n* `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.\n* `DOC105` - Invalid or unknown id\n* `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.\n* `DOC107` - Empty payload.\n* `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.\n* `DOC201` - Upload server error.\n* `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.\n',
                  example: 404,
                }),
              detail: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Human readable error detail. Only present if status = "error"',
                  example: 'The record identified by {{id}} could not be found',
                }),
              status: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unambiguous status code. Only present if status = "error"\n\n* `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.\n* `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.\n* `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.\n* `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.\n* `DOC105` - Invalid or unknown id\n* `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.\n* `DOC107` - Empty payload.\n* `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.\n* `DOC201` - Upload server error.\n* `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.\n',
                  example: 404,
                }),
              title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Human readable title description.',
                  example: 'Record not found',
                }),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
    429: {
      description: 'Too many requests',
      content: {
        'application/json': {
          schema: z
            .object({
              Message: z
                .string()
                .exactOptional()
                .openapi({ description: 'message', example: 'API rate limit exceeded' }),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unambiguous status code. Only present if status = "error"\n\n* `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.\n* `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.\n* `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.\n* `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.\n* `DOC105` - Invalid or unknown id\n* `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.\n* `DOC107` - Empty payload.\n* `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.\n* `DOC201` - Upload server error.\n* `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.\n',
                  example: 500,
                }),
              detail: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Human readable error detail. Only present if status = "error"',
                  example: 'Internal server error',
                }),
              status: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unambiguous status code. Only present if status = "error"\n\n* `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.\n* `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.\n* `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.\n* `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.\n* `DOC105` - Invalid or unknown id\n* `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.\n* `DOC107` - Empty payload.\n* `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.\n* `DOC201` - Upload server error.\n* `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.\n',
                  example: 500,
                }),
              title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Human readable title description.',
                  example: 'Internal server error',
                }),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
  },
  security: [{ apikey: [] }],
})
