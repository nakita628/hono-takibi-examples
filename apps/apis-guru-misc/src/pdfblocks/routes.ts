import { createRoute, z } from '@hono/zod-openapi'

const ErrorResponse = {
  description: 'Error',
  content: {
    'application/problem+json': {
      schema: z
        .object({
          errors: z.object({}).exactOptional(),
          status: z.int().exactOptional(),
          title: z.string().exactOptional(),
          type: z.url().exactOptional(),
        })
        .openapi({ required: [] }),
      example: {
        errors: { file: ['Could not parse the PDF document. The file may be invalid or corrupt.'] },
        status: 400,
        title: 'One or more validation errors occurred.',
        type: 'https://www.pdfblocks.com/docs/api/v1/error/400',
      },
    },
  },
}

const SuccessResponse = {
  description: 'The document was processed succesfully.',
  content: {
    'application/pdf': {
      schema: z
        .file()
        .openapi({ type: 'string', format: 'binary', description: 'The output PDF document' }),
    },
  },
}

const ApiKeySecurityScheme = {
  description:
    'Find your API key in [your dashboard](https://dashboard.pdfblocks.com/users/sign_in), or [get a free API key](https://www.pdfblocks.com/try-free).',
  in: 'header',
  name: 'X-Api-Key',
  type: 'apiKey',
}

export const postV1AddPasswordRoute = createRoute({
  method: 'post',
  path: '/v1/add_password',
  summary: 'Add a password to a PDF',
  description:
    'Protect a PDF document with a password. Encrypt the PDF document to prevent unauthorized access.',
  externalDocs: {
    description: 'Documentation and examples',
    url: 'https://www.pdfblocks.com/docs/api/v1/add-password',
  },
  operationId: 'addPasswordV1',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              encryption_algorithm: z
                .enum(['AES-128', 'AES-256'])
                .default('AES-128')
                .exactOptional()
                .openapi({
                  description: 'The algorithm used to encrypt the PDF document.',
                  example: 'AES-128',
                }),
              file: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'The input PDF document',
                }),
              password: z
                .string()
                .regex(/^[\x20-\x7e]{4,32}$/)
                .min(4)
                .max(32)
                .openapi({
                  description: 'The password required to open the file.',
                  example: 'pa$$word',
                }),
            })
            .openapi({ required: ['file', 'password'] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: SuccessResponse, '4XX': ErrorResponse },
})

export const postV1AddRestrictionsRoute = createRoute({
  method: 'post',
  path: '/v1/add_restrictions',
  summary: 'Add restrictions to a PDF',
  description: 'Add restrictions to prevent copying, printing, and modifying a PDF document.',
  externalDocs: {
    description: 'Documentation and examples',
    url: 'https://www.pdfblocks.com/docs/api/v1/add-restrictions',
  },
  operationId: 'addRestrictionsV1',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              allow_accessibility: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(true)
                .exactOptional()
                .openapi({
                  description:
                    "If false, accessibility programs can't read the text or images of the document.",
                }),
              allow_assemble_document: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(true)
                .exactOptional()
                .openapi({
                  description: "If false, the user can't assemble or manipulate the document.",
                }),
              allow_change_content: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(true)
                .exactOptional()
                .openapi({
                  description: "If false, the user can't change the content of the document.",
                }),
              allow_comment_and_fill_form: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(true)
                .exactOptional()
                .openapi({
                  description:
                    "If false, the user can't add, edit or modify annotations or fill form fields.",
                }),
              allow_copy_content: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(true)
                .exactOptional()
                .openapi({
                  description: "If false, the user can't copy text and images to the clipboard.",
                }),
              allow_fill_form: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(true)
                .exactOptional()
                .openapi({ description: "If false, the user can't fill forms fields." }),
              allow_print: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(true)
                .exactOptional()
                .openapi({ description: "If false, the user can't print the document." }),
              allow_print_high_resolution: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(true)
                .exactOptional()
                .openapi({
                  description: "If false, the user can't print the document in high resolution.",
                }),
              encryption_algorithm: z
                .enum(['AES-128', 'AES-256'])
                .default('AES-128')
                .exactOptional()
                .openapi({
                  description: 'The algorithm used to encrypt the PDF document.',
                  example: 'AES-128',
                }),
              file: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'The input PDF document',
                }),
              owner_password: z
                .string()
                .regex(/^[\x20-\x7e]{4,32}$/)
                .min(4)
                .max(32)
                .openapi({
                  description:
                    'The password required to open and change permissions of the PDF document.',
                  example: 'pa$$word',
                }),
              user_password: z
                .string()
                .regex(/^[\x20-\x7e]{4,32}$/)
                .min(4)
                .max(32)
                .exactOptional()
                .openapi({
                  description:
                    'The password required to open the PDF document. If the `user_password` is not set, the user will be able to open the document without a password.',
                  example: 'pa$$word',
                }),
            })
            .openapi({ required: ['file', 'owner_password'] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: SuccessResponse, '4XX': ErrorResponse },
})

export const postV1AddWatermarkImageRoute = createRoute({
  method: 'post',
  path: '/v1/add_watermark/image',
  summary: 'Add an image watermark to a PDF',
  description: 'Add an image watermark to each page of a PDF document.',
  externalDocs: {
    description: 'Documentation and examples',
    url: 'https://www.pdfblocks.com/docs/api/v1/add-watermark-image',
  },
  operationId: 'addImageWatermarkV1',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'The input PDF document',
                }),
              image: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description:
                    'The image to add as a watermark. The format of the image can be either PNG or JPEG.',
                }),
              margin: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float32().min(0),
                )
                .default(1)
                .exactOptional()
                .openapi({
                  description:
                    'The distance in inches from the border of the page to the image watermark.',
                  example: 1,
                }),
              transparency: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32().min(0).max(100),
                )
                .default(50)
                .exactOptional()
                .openapi({
                  description:
                    'The transparency level for the image watermark from 0 (opaque) to 100 (transparent).',
                  example: 50,
                }),
            })
            .openapi({ required: ['file', 'image'] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: SuccessResponse, '4XX': ErrorResponse },
})

export const postV1AddWatermarkTextRoute = createRoute({
  method: 'post',
  path: '/v1/add_watermark/text',
  summary: 'Add a text watermark to a PDF',
  description:
    'Add a text watermark to each page of a PDF document. Choose from several watermark templates.',
  externalDocs: {
    description: 'Documentation and examples',
    url: 'https://www.pdfblocks.com/docs/api/v1/add-watermark-text',
  },
  operationId: 'addTextWatermarkV1',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              color: z
                .enum(['Red', 'Blue', 'Gray', 'Black'])
                .default('Gray')
                .exactOptional()
                .openapi({ description: 'The color of the text watermark.', example: 'Gray' }),
              file: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'The input PDF document',
                }),
              line_1: z
                .string()
                .max(32)
                .openapi({
                  description: 'The first line of text of the watermark.',
                  example: 'Jane Doe',
                }),
              line_2: z
                .string()
                .max(32)
                .exactOptional()
                .openapi({
                  description: 'The second line of text of the watermark.',
                  example: 'ACME, Inc',
                }),
              line_3: z
                .string()
                .max(32)
                .exactOptional()
                .openapi({
                  description: 'The third line of text of the watermark.',
                  example: 'Confidential',
                }),
              margin: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float32().min(0),
                )
                .default(1)
                .exactOptional()
                .openapi({
                  description:
                    'The distance in inches from the border of the page to the text watermark.',
                  example: 1,
                }),
              template: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32().min(1001).max(66537),
                )
                .default(1001)
                .exactOptional()
                .openapi({
                  description:
                    'The [id of the text watermark template](https://www.pdfblocks.com/docs/api/v1/text-watermark-templates.pdf).',
                  example: 1001,
                }),
              transparency: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32().min(0).max(100),
                )
                .default(75)
                .exactOptional()
                .openapi({
                  description:
                    'The transparency level for the text watermark from 0 (opaque) to 100 (transparent).',
                  example: 75,
                }),
            })
            .openapi({ required: ['file', 'line_1'] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: SuccessResponse, '4XX': ErrorResponse },
})

export const postV1ExtractPagesRoute = createRoute({
  method: 'post',
  path: '/v1/extract_pages',
  summary: 'Extract pages from a PDF',
  description: 'Extract one or more pages from a PDF document.',
  externalDocs: {
    description: 'Documentation and examples',
    url: 'https://www.pdfblocks.com/docs/api/v1/extract-pages',
  },
  operationId: 'extractPagesV1',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'The input PDF document',
                }),
              first_page: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32().min(1),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The first page of the range to extract. If empty, it defaults to the first page of the PDF document.',
                }),
              last_page: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32().min(1),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The last page of the range to extract. If empty, it defaults to the last page of the PDF document.',
                }),
            })
            .openapi({ required: ['file'] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: SuccessResponse, '4XX': ErrorResponse },
})

export const postV1MergeDocumentsRoute = createRoute({
  method: 'post',
  path: '/v1/merge_documents',
  summary: 'Merge PDF documents',
  description: 'Combine multiple PDF documents into a single PDF document.',
  externalDocs: {
    description: 'Documentation and examples',
    url: 'https://www.pdfblocks.com/docs/api/v1/merge-documents',
  },
  operationId: 'mergeDocumentsV1',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .file()
                      .openapi({
                        type: 'string',
                        format: 'binary',
                        description: 'An input PDF document.',
                      }),
                  ),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The array of PDF documents. PDF documents will be merged in the same order they are inserted into this array.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: SuccessResponse, '4XX': ErrorResponse },
})

export const postV1RemovePagesRoute = createRoute({
  method: 'post',
  path: '/v1/remove_pages',
  summary: 'Remove pages from a PDF',
  description: 'Remove one or more pages from a PDF document.',
  externalDocs: {
    description: 'Documentation and examples',
    url: 'https://www.pdfblocks.com/docs/api/v1/remove-pages',
  },
  operationId: 'removePagesV1',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'The input PDF document',
                }),
              first_page: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32().min(1),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The first page of the range to remove from the PDF document. If empty, it defaults to the first page of the document.',
                }),
              last_page: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32().min(1),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The last page of the range to remove from the PDF document. If empty, it defaults to the last page of the document.',
                }),
            })
            .openapi({ required: ['file'] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: SuccessResponse, '4XX': ErrorResponse },
})

export const postV1RemovePasswordRoute = createRoute({
  method: 'post',
  path: '/v1/remove_password',
  summary: 'Remove the password from a PDF',
  description:
    'Remove the password from an encrypted PDF document. The PDF document will no longer require a password to open.',
  externalDocs: {
    description: 'Documentation and examples',
    url: 'https://www.pdfblocks.com/docs/api/v1/remove-password',
  },
  operationId: 'removePasswordV1',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'The input PDF document',
                }),
              password: z
                .string()
                .max(256)
                .openapi({
                  description: 'The password required to open the file.',
                  example: 'pa$$word',
                }),
            })
            .openapi({ required: ['file', 'password'] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: SuccessResponse, '4XX': ErrorResponse },
})

export const postV1RemoveRestrictionsRoute = createRoute({
  method: 'post',
  path: '/v1/remove_restrictions',
  summary: 'Remove the restrictions from a PDF',
  description: 'Remove all the restrictions from a PDF document.',
  externalDocs: {
    description: 'Documentation and examples',
    url: 'https://www.pdfblocks.com/docs/api/v1/remove-restrictions',
  },
  operationId: 'removeRestrictionsV1',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'The input PDF document',
                }),
            })
            .openapi({ required: ['file'] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: SuccessResponse, '4XX': ErrorResponse },
})

export const postV1RemoveSignaturesRoute = createRoute({
  method: 'post',
  path: '/v1/remove_signatures',
  summary: 'Remove the signatures from a PDF',
  description: 'Remove the cryptographic signatures and timestamps from a PDF document.',
  externalDocs: {
    description: 'Documentation and examples',
    url: 'https://www.pdfblocks.com/docs/api/v1/remove-signatures',
  },
  operationId: 'removeSignaturesV1',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'The input PDF document',
                }),
            })
            .openapi({ required: ['file'] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: SuccessResponse, '4XX': ErrorResponse },
})

export const postV1ReversePagesRoute = createRoute({
  method: 'post',
  path: '/v1/reverse_pages',
  summary: 'Reverse the pages of a PDF',
  description: 'Reverse the order of the pages of a PDF document.',
  externalDocs: {
    description: 'Documentation and examples',
    url: 'https://www.pdfblocks.com/docs/api/v1/reverse-pages',
  },
  operationId: 'reversePagesV1',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'The input PDF document',
                }),
            })
            .openapi({ required: ['file'] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: SuccessResponse, '4XX': ErrorResponse },
})

export const postV1RotatePagesRoute = createRoute({
  method: 'post',
  path: '/v1/rotate_pages',
  summary: 'Rotate pages in a PDF',
  description: 'Rotate one or more pages in a PDF document.',
  externalDocs: {
    description: 'Documentation and examples',
    url: 'https://www.pdfblocks.com/docs/api/v1/rotate-pages',
  },
  operationId: 'rotatePagesV1',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              angle: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.union([
                    z.literal(0),
                    z.literal(90),
                    z.literal(180),
                    z.literal(270),
                    z.literal(-90),
                    z.literal(-180),
                    z.literal(-270),
                  ]),
                )
                .openapi({
                  description:
                    'The angle of rotation of the pages. Positive angles rotate the pages clockwise. Negative angles rotate the pages counter-clockwise.',
                  example: 90,
                }),
              file: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'The input PDF document',
                }),
              first_page: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32().min(1),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The first page of the range to rotate in the PDF document. If empty, it defaults to the first page of the document.',
                }),
              last_page: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32().min(1),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The last page of the range to rotate in the PDF document. If empty, it defaults to the last page of the document.',
                }),
            })
            .openapi({ required: ['file', 'angle'] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: SuccessResponse, '4XX': ErrorResponse },
})
