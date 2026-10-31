import { createRoute, z } from '@hono/zod-openapi'

const AuthFailedSchema = z
  .object({
    errors: z
      .array(
        z
          .object({
            title: z
              .string()
              .exactOptional()
              .openapi({ description: 'Error message', example: 'Missing API Key' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AuthFailed')

const ImprovementProgramJsonSchema = z
  .object({
    image_file_b64: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Source image file (base64-encoded string). (If this parameter is present, the other image source parameters must be empty.)',
        example: '',
      }),
    image_filename: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Filename of the image, if not provided it will be autodetected form the submitted data.',
        example: 'car.jpg',
      }),
    image_url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Source image URL. (If this parameter is present, the other image source parameters must be empty.)',
        example: 'https://www.remove.bg/example-hd.jpg',
      }),
    tag: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Images with the same tag are grouped together.',
        example: 'batch_1_2020',
      }),
  })
  .openapi({ required: [] })
  .openapi('ImprovementProgramJson')

const ImprovementProgramJsonResponseSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ID of the submitted image',
        example: 'fe09820b-be79-4511-8836-679583529882',
      }),
  })
  .openapi({ required: [] })
  .openapi('ImprovementProgramJsonResponse')

const ImprovementProgramMultipartSchema = z
  .object({
    image_file: z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description:
          'Source image file (binary). (If this parameter is present, the other image source parameters must be empty.)',
      }),
    image_file_b64: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Source image file (base64-encoded string). (If this parameter is present, the other image source parameters must be empty.)',
        example: '',
      }),
    image_filename: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Filename of the image, if not provided it will be autodetected form the submitted data.',
      }),
    image_url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Source image URL. (If this parameter is present, the other image source parameters must be empty.)',
        example: 'https://www.remove.bg/example-hd.jpg',
      }),
    tag: z
      .string()
      .exactOptional()
      .openapi({ description: 'Images with the same tag are grouped together.' }),
  })
  .openapi({ required: [] })
  .openapi('ImprovementProgramMultipart')

const RateLimitSchema = z
  .object({
    errors: z
      .array(
        z
          .object({
            title: z
              .string()
              .exactOptional()
              .openapi({ description: 'Error message', example: 'Rate limit exceeded' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RateLimit')

const RemoveBgJsonSchema = z
  .object({
    add_shadow: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Whether to add an artificial shadow to the result (default: false). NOTE: Adding shadows is currently only supported for car photos. Other subjects are returned without shadow, even if set to true (this might change in the future).\n',
      }),
    bg_color: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Adds a solid color background. Can be a hex color code (e.g. 81d4fa, fff) or a color name (e.g. green). For semi-transparency, 4-/8-digit hex codes are also supported (e.g. 81d4fa77). (If this parameter is present, the other bg_ parameters must be empty.)\n',
        example: '',
      }),
    bg_image_url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Adds a background image from a URL. The image is centered and resized to fill the canvas while preserving the aspect ratio, unless it already has the exact same dimensions as the foreground image. (If this parameter is present, the other bg_ parameters must be empty.)',
        example: '',
      }),
    channels: z
      .enum(['rgba', 'alpha'])
      .default('rgba')
      .exactOptional()
      .openapi({
        description:
          'Request either the finalized image ("rgba", default) or an alpha mask ("alpha"). Note: Since remove.bg also applies RGB color corrections on edges, using only the alpha mask often leads to a lower final image quality. Therefore "rgba" is recommended.\n',
      }),
    crop: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Whether to crop off all empty regions (default: false). Note that cropping has no effect on the amount of charged credits.\n',
      }),
    crop_margin: z
      .string()
      .default('0')
      .exactOptional()
      .openapi({
        description:
          'Adds a margin around the cropped subject (default: 0). Can be an absolute value (e.g. "30px") or relative to the subject size (e.g. "10%"). Can be a single value (all sides), two values (top/bottom and left/right) or four values (top, right, bottom, left). This parameter only has an effect when "crop=true". The maximum margin that can be added on each side is 50% of the subject dimensions or 500 pixels.\n',
      }),
    format: z
      .enum(['auto', 'png', 'jpg', 'zip'])
      .default('auto')
      .exactOptional()
      .openapi({
        description:
          'Result image format:\n"auto" = Use PNG format if transparent regions exist, otherwise use JPG format (default),\n"png" = PNG format with alpha transparency,\n"jpg" = JPG format, no transparency,\n"zip" = ZIP format, contains color image and alpha matte image, supports transparency (recommended).\n',
      }),
    image_file_b64: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Source image file (base64-encoded string). (If this parameter is present, the other image source parameters must be empty.)',
        example: '',
      }),
    image_url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Source image URL. (If this parameter is present, the other image source parameters must be empty.)',
        example: 'https://www.remove.bg/example-hd.jpg',
      }),
    position: z
      .string()
      .default('original')
      .exactOptional()
      .openapi({
        description:
          'Positions the subject within the image canvas. Can be "original" (default unless "scale" is given), "center" (default when "scale" is given) or a value from "0%" to "100%" (both horizontal and vertical) or two values (horizontal, vertical).\n',
      }),
    roi: z
      .string()
      .default('0% 0% 100% 100%')
      .exactOptional()
      .openapi({
        description:
          'Region of interest: Only contents of this rectangular region can be detected as foreground. Everything outside is considered background and will be removed. The rectangle is defined as two x/y coordinates in the format "x1 y1 x2 y2". The coordinates can be in absolute pixels (suffix \'px\') or relative to the width/height of the image (suffix \'%\'). By default, the whole image is the region of interest ("0% 0% 100% 100%").\n',
      }),
    scale: z
      .string()
      .default('original')
      .exactOptional()
      .openapi({
        description:
          'Scales the subject relative to the total image size. Can be any value from "10%" to "100%", or "original" (default). Scaling the subject implies "position=center" (unless specified otherwise).\n',
      }),
    semitransparency: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Whether to have semi-transparent regions in the result (default: true). NOTE: Semitransparency is currently only supported for car windows (this might change in the future). Other objects are returned without semitransparency, even if set to true.\n',
      }),
    size: z
      .enum(['preview', 'full', 'auto'])
      .default('preview')
      .exactOptional()
      .openapi({
        description:
          'Maximum output image resolution:\n"preview" (default) = Resize image to 0.25 megapixels (e.g. 625×400 pixels) – 0.25 credits per image,\n"full" = Use original image resolution, up to 25 megapixels (e.g. 6250x4000) with formats ZIP or JPG, or up to 10 megapixels (e.g. 4000x2500) with PNG – 1 credit per image),\n"auto" = Use highest available resolution (based on image size and available credits).\n\nFor backwards-compatibility this parameter also accepts the values "medium" (up to 1.5 megapixels) and "hd" (up to 4 megapixels) for 1 credit per image. The value "full" is also available under the name "4k" and the value "preview" is aliased as "small" and "regular".\n',
      }),
    type: z
      .enum(['auto', 'person', 'product', 'car'])
      .default('auto')
      .exactOptional()
      .openapi({
        description:
          'Foreground type:\n"auto" = Automatically detect kind of foreground,\n"person" = Use person(s) as foreground,\n"product" = Use product(s) as foreground.\n"car" = Use car as foreground,\n',
      }),
    type_level: z
      .union([z.literal('none'), z.literal(1), z.literal(2), z.literal('latest')])
      .default(1)
      .exactOptional()
      .openapi({
        description:
          'Classification level of the detected foreground type:\n"none" = No classification (X-Type Header won\'t bet set on the response)\n"1" = Use coarse classification classes: [person, product, animal, car, other]\n"2" = Use more specific classification classes: [person, product, animal, car, car_interior, car_part, transportation, graphics, other]\n"latest" = Always use the latest classification classes available\n',
      }),
  })
  .openapi({ required: [] })
  .openapi('RemoveBgJson')

const RemoveBgJsonResponseSchema = z
  .object({
    data: z
      .object({
        foreground_height: z
          .int()
          .exactOptional()
          .openapi({
            description:
              'Height of the foreground image. In case the input image resolution is higher than the limit (> 25 megapixels) this value is expressed with respect to the input image resolution.',
            example: 100,
          }),
        foreground_left: z
          .int()
          .exactOptional()
          .openapi({
            description:
              'Left position of the foreground image along the horizontal axis. In case the input image resolution is higher than the limit (> 25 megapixels) this value is expressed with respect to the input image resolution.',
            example: 0,
          }),
        foreground_top: z
          .int()
          .exactOptional()
          .openapi({
            description:
              'Top position of the foreground image along the vertical axis. In case the input image resolution is higher than the limit (> 25 megapixels) this value is expressed with respect to the input image resolution.',
            example: 0,
          }),
        foreground_width: z
          .int()
          .exactOptional()
          .openapi({
            description:
              'Width of the foreground image. In case the input image resolution is higher than the limit (> 25 megapixels) this value is expressed with respect to the input image resolution.',
            example: 100,
          }),
        result_b64: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Base64 encoded string of result image',
            example: 'iVBORw0KGgoAAAANSUhEUgAAAIsAAACFC...',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('RemoveBgJsonResponse')

const RemoveBgMultipartSchema = z
  .object({
    add_shadow: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Whether to add an artificial shadow to the result (default: false). NOTE: Adding shadows is currently only supported for car photos. Other subjects are returned without shadow, even if set to true (this might change in the future).\n',
      }),
    bg_color: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Adds a solid color background. Can be a hex color code (e.g. 81d4fa, fff) or a color name (e.g. green). For semi-transparency, 4-/8-digit hex codes are also supported (e.g. 81d4fa77). (If this parameter is present, the other bg_ parameters must be empty.)\n',
        example: '',
      }),
    bg_image_file: z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description:
          'Adds a background image from a file (binary). The image is centered and resized to fill the canvas while preserving the aspect ratio, unless it already has the exact same dimensions as the foreground image. (If this parameter is present, the other bg_ parameters must be empty.)',
      }),
    bg_image_url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Adds a background image from a URL. The image is centered and resized to fill the canvas while preserving the aspect ratio, unless it already has the exact same dimensions as the foreground image. (If this parameter is present, the other bg_ parameters must be empty.)',
        example: '',
      }),
    channels: z
      .enum(['rgba', 'alpha'])
      .default('rgba')
      .exactOptional()
      .openapi({
        description:
          'Request either the finalized image ("rgba", default) or an alpha mask ("alpha"). Note: Since remove.bg also applies RGB color corrections on edges, using only the alpha mask often leads to a lower final image quality. Therefore "rgba" is recommended.\n',
      }),
    crop: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Whether to crop off all empty regions (default: false). Note that cropping has no effect on the amount of charged credits.\n',
      }),
    crop_margin: z
      .string()
      .default('0')
      .exactOptional()
      .openapi({
        description:
          'Adds a margin around the cropped subject (default: 0). Can be an absolute value (e.g. "30px") or relative to the subject size (e.g. "10%"). Can be a single value (all sides), two values (top/bottom and left/right) or four values (top, right, bottom, left). This parameter only has an effect when "crop=true". The maximum margin that can be added on each side is 50% of the subject dimensions or 500 pixels.\n',
      }),
    format: z
      .enum(['auto', 'png', 'jpg', 'zip'])
      .default('auto')
      .exactOptional()
      .openapi({
        description:
          'Result image format:\n"auto" = Use PNG format if transparent regions exist, otherwise use JPG format (default),\n"png" = PNG format with alpha transparency,\n"jpg" = JPG format, no transparency,\n"zip" = ZIP format, contains color image and alpha matte image, supports transparency (recommended).\n',
      }),
    image_file: z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description:
          'Source image file (binary). (If this parameter is present, the other image source parameters must be empty.)',
      }),
    image_file_b64: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Source image file (base64-encoded string). (If this parameter is present, the other image source parameters must be empty.)',
        example: '',
      }),
    image_url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Source image URL. (If this parameter is present, the other image source parameters must be empty.)',
        example: 'https://www.remove.bg/example-hd.jpg',
      }),
    position: z
      .string()
      .default('original')
      .exactOptional()
      .openapi({
        description:
          'Positions the subject within the image canvas. Can be "original" (default unless "scale" is given), "center" (default when "scale" is given) or a value from "0%" to "100%" (both horizontal and vertical) or two values (horizontal, vertical).\n',
      }),
    roi: z
      .string()
      .default('0% 0% 100% 100%')
      .exactOptional()
      .openapi({
        description:
          'Region of interest: Only contents of this rectangular region can be detected as foreground. Everything outside is considered background and will be removed. The rectangle is defined as two x/y coordinates in the format "x1 y1 x2 y2". The coordinates can be in absolute pixels (suffix \'px\') or relative to the width/height of the image (suffix \'%\'). By default, the whole image is the region of interest ("0% 0% 100% 100%").\n',
      }),
    scale: z
      .string()
      .default('original')
      .exactOptional()
      .openapi({
        description:
          'Scales the subject relative to the total image size. Can be any value from "10%" to "100%", or "original" (default). Scaling the subject implies "position=center" (unless specified otherwise).\n',
      }),
    semitransparency: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Whether to have semi-transparent regions in the result (default: true). NOTE: Semitransparency is currently only supported for car windows (this might change in the future). Other objects are returned without semitransparency, even if set to true.\n',
      }),
    size: z
      .enum(['preview', 'full', 'auto'])
      .default('preview')
      .exactOptional()
      .openapi({
        description:
          'Maximum output image resolution:\n"preview" (default) = Resize image to 0.25 megapixels (e.g. 625×400 pixels) – 0.25 credits per image,\n"full" = Use original image resolution, up to 25 megapixels (e.g. 6250x4000) with formats ZIP or JPG, or up to 10 megapixels (e.g. 4000x2500) with PNG – 1 credit per image),\n"auto" = Use highest available resolution (based on image size and available credits).\n\nFor backwards-compatibility this parameter also accepts the values "medium" (up to 1.5 megapixels) and "hd" (up to 4 megapixels) for 1 credit per image. The value "full" is also available under the name "4k" and the value "preview" is aliased as "small" and "regular".\n',
      }),
    type: z
      .enum(['auto', 'person', 'product', 'car'])
      .default('auto')
      .exactOptional()
      .openapi({
        description:
          'Foreground type:\n"auto" = Automatically detect kind of foreground,\n"person" = Use person(s) as foreground,\n"product" = Use product(s) as foreground.\n"car" = Use car as foreground,\n',
      }),
    type_level: z
      .union([z.literal('none'), z.literal(1), z.literal(2), z.literal('latest')])
      .default(1)
      .exactOptional()
      .openapi({
        description:
          'Classification level of the detected foreground type:\n"none" = No classification (X-Type Header won\'t bet set on the response)\n"1" = Use coarse classification classes: [person, product, animal, car, other]\n"2" = Use more specific classification classes: [person, product, animal, car, car_interior, car_part, transportation, graphics, other]\n"latest" = Always use the latest classification classes available\n',
      }),
  })
  .openapi({ required: [] })
  .openapi('RemoveBgMultipart')

const APIKeyHeaderSecurityScheme = { in: 'header', name: 'X-API-Key', type: 'apiKey' }

export const getAccountRoute = createRoute({
  method: 'get',
  path: '/account',
  tags: ['Fetch account info'],
  summary: 'Fetch credit balance and free API calls.',
  description:
    'Get the current credit balance and number of free API calls.\n\nNotes:\n\n* Balance changes may be delayed by several seconds. To locally keep track of your credit balance, you should therefore only call this endpoint initially (or e.g. when the user manually triggers a refresh), then use the `X-Credits-Charged` response header returned with each image processing response to adjust the local balance.\n\n* The "*sizes*" field is always "all", is deprecated and will soon be removed.\n',
  responses: {
    200: {
      description: '',
      content: {
        '*/*': {
          schema: z
            .object({
              data: z
                .object({
                  attributes: z
                    .object({
                      api: z
                        .object({
                          free_calls: z.int().exactOptional().openapi({ example: 50 }),
                          sizes: z.string().exactOptional().openapi({ example: 'all' }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      credits: z
                        .object({
                          enterprise: z.float32().exactOptional().openapi({ example: 0 }),
                          payg: z.float32().exactOptional().openapi({ example: 50 }),
                          subscription: z.float32().exactOptional().openapi({ example: 150 }),
                          total: z.float32().exactOptional().openapi({ example: 200 }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    403: {
      description: 'Error: Authentication failed',
      content: { '*/*': { schema: AuthFailedSchema } },
    },
    429: {
      description: 'Error: Rate limit exceeded',
      content: { '*/*': { schema: RateLimitSchema } },
    },
  },
})

export const postImproveRoute = createRoute({
  method: 'post',
  path: '/improve',
  tags: ['Improvement Program'],
  description:
    'Submit an image to the remove.bg Improvement program\n* Contribute an image that remove.bg is currently not able to remove the background from properly\n* Help us make remove.bg better\n* Get better results for similiar images in the future\n\nNotes:\n  * By submitting images through the API you agree to the <a target="_blank" rel="noopener" href="/ipc">Improvement Program Conditions</a>\n  * File size: up to 12MB\n  * up to 100 files per day. <br> Higher Rate Limits are available for Enterprise customers <a href="/support/contact?subject=Improvement+Program+Rate+Limit">upon request</a>.\n\nRequires either an API Key to be provided in the `X-API-Key` request header or an OAuth 2.0 access token to be provided in the `Authorization` request header.\n\nPlease note that submissions are used on a best-effort basis and the extent of expected improvement varies depending on many factors, including the number of provided images, their complexity and visual similarity. Improvements usually take several weeks to become effective.\n',
  request: {
    body: {
      content: {
        'application/json': { schema: ImprovementProgramJsonSchema },
        'application/x-www-form-urlencoded': { schema: ImprovementProgramJsonSchema },
        'multipart/form-data': { schema: ImprovementProgramMultipartSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Image submitted',
      content: { '*/*': { schema: ImprovementProgramJsonResponseSchema } },
    },
    400: {
      description: 'Error: Invalid parameters or input file unprocessable',
      content: {
        '*/*': {
          schema: z
            .object({
              errors: z
                .array(
                  z
                    .object({
                      title: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Error message', example: 'File too large' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    403: {
      description: 'Error: Authentication failed',
      content: { '*/*': { schema: AuthFailedSchema } },
    },
    429: {
      description: 'Error: Rate limit exceeded',
      content: { '*/*': { schema: RateLimitSchema } },
    },
  },
})

export const postRemovebgRoute = createRoute({
  method: 'post',
  path: '/removebg',
  tags: ['Background Removal'],
  summary: 'Remove the background of an image',
  description:
    'Removes the background of a JPG/PNG image.\n\n* File size: up to 12 MB\n* Image source: File upload (binary or as base64 encoded string) or download from URL\n* Image Content: Any photo with a foreground [(e.g. people, products, animals, cars, etc.)](/supported-images)\n* Output resolutions available: Preview (up to 0.25 megapixels), Full (up to 25 megapixels)\n\nRequires either an API Key to be provided in the `X-API-Key` request header or an OAuth 2.0 access token to be provided in the `Authorization` request header.\n',
  request: {
    body: {
      content: {
        'application/json': { schema: RemoveBgJsonSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              add_shadow: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'Whether to add an artificial shadow to the result (default: false). NOTE: Adding shadows is currently only supported for car photos. Other subjects are returned without shadow, even if set to true (this might change in the future).\n',
                }),
              bg_color: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Adds a solid color background. Can be a hex color code (e.g. 81d4fa, fff) or a color name (e.g. green). For semi-transparency, 4-/8-digit hex codes are also supported (e.g. 81d4fa77). (If this parameter is present, the other bg_ parameters must be empty.)\n',
                  example: '',
                }),
              bg_image_url: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Adds a background image from a URL. The image is centered and resized to fill the canvas while preserving the aspect ratio, unless it already has the exact same dimensions as the foreground image. (If this parameter is present, the other bg_ parameters must be empty.)',
                  example: '',
                }),
              channels: z
                .enum(['rgba', 'alpha'])
                .default('rgba')
                .exactOptional()
                .openapi({
                  description:
                    'Request either the finalized image ("rgba", default) or an alpha mask ("alpha"). Note: Since remove.bg also applies RGB color corrections on edges, using only the alpha mask often leads to a lower final image quality. Therefore "rgba" is recommended.\n',
                }),
              crop: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'Whether to crop off all empty regions (default: false). Note that cropping has no effect on the amount of charged credits.\n',
                }),
              crop_margin: z
                .string()
                .default('0')
                .exactOptional()
                .openapi({
                  description:
                    'Adds a margin around the cropped subject (default: 0). Can be an absolute value (e.g. "30px") or relative to the subject size (e.g. "10%"). Can be a single value (all sides), two values (top/bottom and left/right) or four values (top, right, bottom, left). This parameter only has an effect when "crop=true". The maximum margin that can be added on each side is 50% of the subject dimensions or 500 pixels.\n',
                }),
              format: z
                .enum(['auto', 'png', 'jpg', 'zip'])
                .default('auto')
                .exactOptional()
                .openapi({
                  description:
                    'Result image format:\n"auto" = Use PNG format if transparent regions exist, otherwise use JPG format (default),\n"png" = PNG format with alpha transparency,\n"jpg" = JPG format, no transparency,\n"zip" = ZIP format, contains color image and alpha matte image, supports transparency (recommended).\n',
                }),
              image_file_b64: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Source image file (base64-encoded string). (If this parameter is present, the other image source parameters must be empty.)',
                  example: '',
                }),
              image_url: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Source image URL. (If this parameter is present, the other image source parameters must be empty.)',
                  example: 'https://www.remove.bg/example-hd.jpg',
                }),
              position: z
                .string()
                .default('original')
                .exactOptional()
                .openapi({
                  description:
                    'Positions the subject within the image canvas. Can be "original" (default unless "scale" is given), "center" (default when "scale" is given) or a value from "0%" to "100%" (both horizontal and vertical) or two values (horizontal, vertical).\n',
                }),
              roi: z
                .string()
                .default('0% 0% 100% 100%')
                .exactOptional()
                .openapi({
                  description:
                    'Region of interest: Only contents of this rectangular region can be detected as foreground. Everything outside is considered background and will be removed. The rectangle is defined as two x/y coordinates in the format "x1 y1 x2 y2". The coordinates can be in absolute pixels (suffix \'px\') or relative to the width/height of the image (suffix \'%\'). By default, the whole image is the region of interest ("0% 0% 100% 100%").\n',
                }),
              scale: z
                .string()
                .default('original')
                .exactOptional()
                .openapi({
                  description:
                    'Scales the subject relative to the total image size. Can be any value from "10%" to "100%", or "original" (default). Scaling the subject implies "position=center" (unless specified otherwise).\n',
                }),
              semitransparency: z
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
                    'Whether to have semi-transparent regions in the result (default: true). NOTE: Semitransparency is currently only supported for car windows (this might change in the future). Other objects are returned without semitransparency, even if set to true.\n',
                }),
              size: z
                .enum(['preview', 'full', 'auto'])
                .default('preview')
                .exactOptional()
                .openapi({
                  description:
                    'Maximum output image resolution:\n"preview" (default) = Resize image to 0.25 megapixels (e.g. 625×400 pixels) – 0.25 credits per image,\n"full" = Use original image resolution, up to 25 megapixels (e.g. 6250x4000) with formats ZIP or JPG, or up to 10 megapixels (e.g. 4000x2500) with PNG – 1 credit per image),\n"auto" = Use highest available resolution (based on image size and available credits).\n\nFor backwards-compatibility this parameter also accepts the values "medium" (up to 1.5 megapixels) and "hd" (up to 4 megapixels) for 1 credit per image. The value "full" is also available under the name "4k" and the value "preview" is aliased as "small" and "regular".\n',
                }),
              type: z
                .enum(['auto', 'person', 'product', 'car'])
                .default('auto')
                .exactOptional()
                .openapi({
                  description:
                    'Foreground type:\n"auto" = Automatically detect kind of foreground,\n"person" = Use person(s) as foreground,\n"product" = Use product(s) as foreground.\n"car" = Use car as foreground,\n',
                }),
              type_level: ((schema) =>
                z.union([
                  z.preprocess(
                    (val) =>
                      typeof val === 'string' &&
                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                        ? Number(val)
                        : val,
                    schema,
                  ),
                  schema,
                ]))(z.union([z.literal('none'), z.literal(1), z.literal(2), z.literal('latest')]))
                .default(1)
                .exactOptional()
                .openapi({
                  description:
                    'Classification level of the detected foreground type:\n"none" = No classification (X-Type Header won\'t bet set on the response)\n"1" = Use coarse classification classes: [person, product, animal, car, other]\n"2" = Use more specific classification classes: [person, product, animal, car, car_interior, car_part, transportation, graphics, other]\n"latest" = Always use the latest classification classes available\n',
                }),
            })
            .openapi({ required: [] }),
        },
        'multipart/form-data': {
          schema: z
            .object({
              add_shadow: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'Whether to add an artificial shadow to the result (default: false). NOTE: Adding shadows is currently only supported for car photos. Other subjects are returned without shadow, even if set to true (this might change in the future).\n',
                }),
              bg_color: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Adds a solid color background. Can be a hex color code (e.g. 81d4fa, fff) or a color name (e.g. green). For semi-transparency, 4-/8-digit hex codes are also supported (e.g. 81d4fa77). (If this parameter is present, the other bg_ parameters must be empty.)\n',
                  example: '',
                }),
              bg_image_file: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description:
                    'Adds a background image from a file (binary). The image is centered and resized to fill the canvas while preserving the aspect ratio, unless it already has the exact same dimensions as the foreground image. (If this parameter is present, the other bg_ parameters must be empty.)',
                }),
              bg_image_url: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Adds a background image from a URL. The image is centered and resized to fill the canvas while preserving the aspect ratio, unless it already has the exact same dimensions as the foreground image. (If this parameter is present, the other bg_ parameters must be empty.)',
                  example: '',
                }),
              channels: z
                .enum(['rgba', 'alpha'])
                .default('rgba')
                .exactOptional()
                .openapi({
                  description:
                    'Request either the finalized image ("rgba", default) or an alpha mask ("alpha"). Note: Since remove.bg also applies RGB color corrections on edges, using only the alpha mask often leads to a lower final image quality. Therefore "rgba" is recommended.\n',
                }),
              crop: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'Whether to crop off all empty regions (default: false). Note that cropping has no effect on the amount of charged credits.\n',
                }),
              crop_margin: z
                .string()
                .default('0')
                .exactOptional()
                .openapi({
                  description:
                    'Adds a margin around the cropped subject (default: 0). Can be an absolute value (e.g. "30px") or relative to the subject size (e.g. "10%"). Can be a single value (all sides), two values (top/bottom and left/right) or four values (top, right, bottom, left). This parameter only has an effect when "crop=true". The maximum margin that can be added on each side is 50% of the subject dimensions or 500 pixels.\n',
                }),
              format: z
                .enum(['auto', 'png', 'jpg', 'zip'])
                .default('auto')
                .exactOptional()
                .openapi({
                  description:
                    'Result image format:\n"auto" = Use PNG format if transparent regions exist, otherwise use JPG format (default),\n"png" = PNG format with alpha transparency,\n"jpg" = JPG format, no transparency,\n"zip" = ZIP format, contains color image and alpha matte image, supports transparency (recommended).\n',
                }),
              image_file: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description:
                    'Source image file (binary). (If this parameter is present, the other image source parameters must be empty.)',
                }),
              image_file_b64: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Source image file (base64-encoded string). (If this parameter is present, the other image source parameters must be empty.)',
                  example: '',
                }),
              image_url: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Source image URL. (If this parameter is present, the other image source parameters must be empty.)',
                  example: 'https://www.remove.bg/example-hd.jpg',
                }),
              position: z
                .string()
                .default('original')
                .exactOptional()
                .openapi({
                  description:
                    'Positions the subject within the image canvas. Can be "original" (default unless "scale" is given), "center" (default when "scale" is given) or a value from "0%" to "100%" (both horizontal and vertical) or two values (horizontal, vertical).\n',
                }),
              roi: z
                .string()
                .default('0% 0% 100% 100%')
                .exactOptional()
                .openapi({
                  description:
                    'Region of interest: Only contents of this rectangular region can be detected as foreground. Everything outside is considered background and will be removed. The rectangle is defined as two x/y coordinates in the format "x1 y1 x2 y2". The coordinates can be in absolute pixels (suffix \'px\') or relative to the width/height of the image (suffix \'%\'). By default, the whole image is the region of interest ("0% 0% 100% 100%").\n',
                }),
              scale: z
                .string()
                .default('original')
                .exactOptional()
                .openapi({
                  description:
                    'Scales the subject relative to the total image size. Can be any value from "10%" to "100%", or "original" (default). Scaling the subject implies "position=center" (unless specified otherwise).\n',
                }),
              semitransparency: z
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
                    'Whether to have semi-transparent regions in the result (default: true). NOTE: Semitransparency is currently only supported for car windows (this might change in the future). Other objects are returned without semitransparency, even if set to true.\n',
                }),
              size: z
                .enum(['preview', 'full', 'auto'])
                .default('preview')
                .exactOptional()
                .openapi({
                  description:
                    'Maximum output image resolution:\n"preview" (default) = Resize image to 0.25 megapixels (e.g. 625×400 pixels) – 0.25 credits per image,\n"full" = Use original image resolution, up to 25 megapixels (e.g. 6250x4000) with formats ZIP or JPG, or up to 10 megapixels (e.g. 4000x2500) with PNG – 1 credit per image),\n"auto" = Use highest available resolution (based on image size and available credits).\n\nFor backwards-compatibility this parameter also accepts the values "medium" (up to 1.5 megapixels) and "hd" (up to 4 megapixels) for 1 credit per image. The value "full" is also available under the name "4k" and the value "preview" is aliased as "small" and "regular".\n',
                }),
              type: z
                .enum(['auto', 'person', 'product', 'car'])
                .default('auto')
                .exactOptional()
                .openapi({
                  description:
                    'Foreground type:\n"auto" = Automatically detect kind of foreground,\n"person" = Use person(s) as foreground,\n"product" = Use product(s) as foreground.\n"car" = Use car as foreground,\n',
                }),
              type_level: ((schema) =>
                z.union([
                  z.preprocess(
                    (val) =>
                      typeof val === 'string' &&
                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                        ? Number(val)
                        : val,
                    schema,
                  ),
                  schema,
                ]))(z.union([z.literal('none'), z.literal(1), z.literal(2), z.literal('latest')]))
                .default(1)
                .exactOptional()
                .openapi({
                  description:
                    'Classification level of the detected foreground type:\n"none" = No classification (X-Type Header won\'t bet set on the response)\n"1" = Use coarse classification classes: [person, product, animal, car, other]\n"2" = Use more specific classification classes: [person, product, animal, car, car_interior, car_part, transportation, graphics, other]\n"latest" = Always use the latest classification classes available\n',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Image background removed',
      content: {
        'application/json': { schema: RemoveBgJsonResponseSchema },
        'image/*': {
          schema: z
            .file()
            .openapi({ type: 'string', format: 'binary', example: '(binary image data)' }),
        },
      },
      headers: z.object({
        'X-Credits-Charged': {
          description: 'Amount of credits charged for this call',
          schema: z
            .float32()
            .exactOptional()
            .openapi({
              description: 'Amount of credits charged for this call',
              param: { required: false },
            }),
        },
        'X-Foreground-Height': {
          description:
            'Height of the foreground image. In case the input image resolution is higher than the limit (> 25 megapixels) this value is expressed with respect to the input image resolution.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'Height of the foreground image. In case the input image resolution is higher than the limit (> 25 megapixels) this value is expressed with respect to the input image resolution.',
              param: { required: false },
            }),
        },
        'X-Foreground-Left': {
          description:
            'Left position of the foreground image along the horizontal axis. In case the input image resolution is higher than the limit (> 25 megapixels) this value is expressed with respect to the input image resolution.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'Left position of the foreground image along the horizontal axis. In case the input image resolution is higher than the limit (> 25 megapixels) this value is expressed with respect to the input image resolution.',
              param: { required: false },
            }),
        },
        'X-Foreground-Top': {
          description:
            'Top position of the foreground image along the vertical axis. In case the input image resolution is higher than the limit (> 25 megapixels) this value is expressed with respect to the input image resolution.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'Top position of the foreground image along the vertical axis. In case the input image resolution is higher than the limit (> 25 megapixels) this value is expressed with respect to the input image resolution.',
              param: { required: false },
            }),
        },
        'X-Foreground-Width': {
          description:
            'Width of the foreground image. In case the input image resolution is higher than the limit (> 25 megapixels) this value is expressed with respect to the input image resolution.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'Width of the foreground image. In case the input image resolution is higher than the limit (> 25 megapixels) this value is expressed with respect to the input image resolution.',
              param: { required: false },
            }),
        },
        'X-Height': {
          description: 'Height of the result image',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Height of the result image', param: { required: false } }),
        },
        'X-Type': {
          description:
            'Detected foreground type (How specific this classification is depends on the type_level parameter sent in the request)',
          schema: z
            .enum([
              'person',
              'product',
              'animal',
              'car',
              'car_interior',
              'car_part',
              'transportation',
              'graphics',
              'other',
            ])
            .exactOptional()
            .openapi({
              description:
                'Detected foreground type (How specific this classification is depends on the type_level parameter sent in the request)',
              param: { required: false },
            }),
        },
        'X-Width': {
          description: 'Width of the result image',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Width of the result image', param: { required: false } }),
        },
      }),
    },
    400: {
      description: 'Error: Invalid parameters or input file unprocessable (no credits charged)',
      content: {
        '*/*': {
          schema: z
            .object({
              errors: z
                .array(
                  z
                    .object({
                      code: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Error code', example: 'file_too_large' }),
                      detail: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Detailed description of the error',
                          example: 'File exceeds limit of 12MB',
                        }),
                      title: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Error message', example: 'File too large' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            failed_bg_download: {
              value: {
                errors: [
                  {
                    code: 'failed_bg_download',
                    title:
                      'Failed to download background image from given image_url: https://unsplash.com/',
                  },
                ],
              },
            },
            failed_image_download: {
              value: {
                errors: [
                  {
                    code: 'failed_image_download',
                    title: 'Failed to download image from given image_url: https://unsplash.com/',
                  },
                ],
              },
            },
            failed_to_read_image: {
              value: {
                errors: [
                  { code: 'failed_to_read_image', title: 'There was an error reading the image.' },
                ],
              },
            },
            file_too_large: {
              value: {
                errors: [
                  {
                    code: 'file_too_large',
                    detail: 'File exceeds limit of 12MB',
                    title: 'File too large',
                  },
                ],
              },
            },
            invalid_bg_color: {
              value: {
                errors: [{ code: 'invalid_bg_color', title: 'Invalid bg_color parameter given' }],
              },
            },
            invalid_bg_image_url: {
              value: {
                errors: [
                  {
                    code: 'invalid_bg_image_url',
                    title: 'Invalid bg_image_url: Please provide a valid URL.',
                  },
                ],
              },
            },
            invalid_channels: {
              value: {
                errors: [
                  { code: 'invalid_channels', title: "Invalid value for parameter 'channels'" },
                ],
              },
            },
            invalid_crop_margin: {
              value: {
                errors: [
                  { code: 'invalid_crop_margin', title: 'Invalid crop_margin parameter given' },
                ],
              },
            },
            invalid_dimensions: {
              value: {
                errors: [
                  {
                    code: 'invalid_dimensions',
                    detail: 'The dimensions of the given image could not be read.',
                    title: 'Failed to read image dimensions',
                  },
                ],
              },
            },
            invalid_file_type: {
              value: {
                errors: [
                  {
                    code: 'invalid_file_type',
                    detail: 'Expected jpg/png, received mp4',
                    title: 'Invalid file type',
                  },
                ],
              },
            },
            invalid_format: {
              value: {
                errors: [{ code: 'invalid_format', title: 'Invalid format parameter given' }],
              },
            },
            invalid_image_url: {
              value: {
                errors: [
                  {
                    code: 'invalid_image_url',
                    title: 'Invalid image_url: Please provide a valid URL.',
                  },
                ],
              },
            },
            invalid_position: {
              value: {
                errors: [{ code: 'invalid_position', title: 'Invalid position parameter given' }],
              },
            },
            invalid_roi: {
              value: { errors: [{ code: 'invalid_roi', title: 'Invalid roi parameter given' }] },
            },
            invalid_scale: {
              value: {
                errors: [{ code: 'invalid_scale', title: 'Invalid scale parameter given' }],
              },
            },
            invalid_semitransparency: {
              value: {
                errors: [
                  {
                    code: 'invalid_semitransparency',
                    title: 'Invalid semitransparency parameter given',
                  },
                ],
              },
            },
            invalid_size: {
              value: {
                errors: [{ code: 'invalid_size', title: "Invalid value for parameter 'size'" }],
              },
            },
            missing_source: {
              value: {
                errors: [
                  {
                    code: 'missing_source',
                    detail:
                      'Please provide the source image in the image_url, image_file or image_file_b64 parameter.',
                    title: 'No image given',
                  },
                ],
              },
            },
            multiple_bg_sources: {
              value: {
                errors: [
                  {
                    code: 'multiple_bg_sources',
                    title:
                      'Multiple background sources given: Please provide either the bg_color, the bg_image_url or the bg_image_file parameter.',
                  },
                ],
              },
            },
            multiple_sources: {
              value: {
                errors: [
                  {
                    code: 'multiple_sources',
                    title:
                      'Multiple image sources given: Please provide either the image_url, image_file or image_file_b64 parameter.',
                  },
                ],
              },
            },
            resolution_too_high: {
              value: {
                errors: [
                  {
                    code: 'resolution_too_high',
                    detail:
                      'Input image has 60 megapixels, maximum supported input resolution is 50 megapixels',
                    title: 'Image resolution too high',
                  },
                ],
              },
            },
            roi_exceeds_bounds: {
              value: {
                errors: [
                  {
                    code: 'roi_exceeds_bounds',
                    detail:
                      'The given roi parameter defines a region that exceeds the image bounds',
                    title: 'ROI exceeds image bounds',
                  },
                ],
              },
            },
            roi_region_empty: {
              value: {
                errors: [
                  {
                    code: 'roi_region_empty',
                    detail: 'The given roi parameter defines an empty region',
                    title: 'ROI region is empty',
                  },
                ],
              },
            },
            unknown_foreground: {
              value: {
                errors: [
                  {
                    code: 'unknown_foreground',
                    title:
                      'Could not identify foreground in image. For details and recommendations see https://www.remove.bg/supported-images.',
                  },
                ],
              },
            },
          },
        },
      },
    },
    402: {
      description: 'Error: Insufficient credits (no credits charged)',
      content: {
        '*/*': {
          schema: z
            .object({
              errors: z
                .array(
                  z
                    .object({
                      title: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Error message', example: 'Insufficient credits' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    403: {
      description: 'Error: Authentication failed (no credits charged)',
      content: { '*/*': { schema: AuthFailedSchema } },
    },
    429: {
      description: 'Error: Rate limit exceeded (no credits charged)',
      content: { '*/*': { schema: RateLimitSchema } },
    },
  },
})
