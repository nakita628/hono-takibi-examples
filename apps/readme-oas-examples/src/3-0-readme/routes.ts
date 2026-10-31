import { createRoute, z } from '@hono/zod-openapi'

const BaseErrorSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'An error code unique to the error received.' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reason why the error occured.' }),
    suggestion: z
      .string()
      .exactOptional()
      .openapi({ description: 'A helpful suggestion for how to alleviate the error.' }),
    docs: z
      .url()
      .exactOptional()
      .openapi({
        description:
          'A [ReadMe Metrics](https://readme.com/metrics/) log URL where you can see more information the request that you made. If we have metrics URLs unavailable for your request, this URL will be a URL to our API Reference.',
        example: 'https://docs.readme.com/logs/6883d0ee-cf79-447a-826f-a48f7d5bdf5f',
      }),
    help: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Information on where you can receive additional assistance from our wonderful support team.',
        example: 'If you need help, email support@readme.io',
      }),
    poem: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A short poem we wrote you about your error.',
        example: [
          "If you're seeing this error,",
          "Things didn't quite go the way we hoped.",
          'When we tried to process your request,',
          "Maybe trying again it'll work—who knows!",
        ],
      }),
  })
  .openapi({ required: [] })
  .openapi('BaseError')

const ApplySchema = z
  .object({
    name: z.string().min(1).default('Your Name').openapi({ description: 'Your full name' }),
    email: z
      .email()
      .default('you@example.com')
      .openapi({ description: 'A valid email we can reach you at.' }),
    job: z
      .enum([
        'Front End Engineer',
        'Full Stack Engineer',
        'Head of Product',
        'Head of Solutions Engineering',
        'Product Designer',
      ])
      .default('Front End Engineer')
      .openapi({
        description: "The job you're looking to apply for (https://readme.com/careers).",
      }),
    pronouns: z
      .string()
      .exactOptional()
      .openapi({ description: 'Learn more at https://lgbtlifecenter.org/pronouns/' }),
    linkedin: z
      .url()
      .exactOptional()
      .openapi({ description: 'What have you been up to the past few years?' }),
    github: z
      .url()
      .exactOptional()
      .openapi({ description: 'Or Bitbucket, Gitlab or anywhere else your code is hosted!' }),
    coverLetter: z
      .string()
      .exactOptional()
      .openapi({ description: 'What should we know about you?' }),
    dontReallyApply: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'Want to play with the API but not actually apply? Set this to true.',
      }),
  })
  .openapi({ required: ['name', 'email', 'job'] })
  .openapi('Apply')

const CategorySchema = z
  .object({
    title: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A short title for the category. This is what will show in the sidebar.',
      }),
    type: z
      .enum(['reference', 'guide'])
      .default('guide')
      .exactOptional()
      .openapi({
        description:
          'A category can be part of your reference or guide documentation, which is determined by this field.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Category')

const ChangelogSchema = z
  .object({
    title: z.string().openapi({ description: 'Title of the changelog.' }),
    type: z
      .enum(['', 'added', 'fixed', 'improved', 'deprecated', 'removed'])
      .default('')
      .exactOptional(),
    body: z.string().openapi({ description: 'Body content of the changelog.' }),
    hidden: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Visibility of the changelog.' }),
  })
  .openapi({ required: ['title', 'body'] })
  .openapi('Changelog')

const CondensedProjectDataSchema = z
  .object({
    name: z.string().exactOptional(),
    subdomain: z.string().exactOptional(),
    jwtSecret: z.string().exactOptional(),
    baseUrl: z
      .url()
      .exactOptional()
      .openapi({
        description:
          'The base URL for the project. If the project is not running under a custom domain, it will be `https://projectSubdomain.readme.io`, otherwise it can either be or `https://example.com` or, in the case of an enterprise child project `https://example.com/projectSubdomain`.',
      }),
    plan: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CondensedProjectData')

const CustomPageSchema = z
  .object({
    title: z.string().openapi({ description: 'Title of the custom page.' }),
    body: z
      .string()
      .exactOptional()
      .openapi({ description: 'Body formatted in Markdown (displayed by default).' }),
    html: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Body formatted in HTML (sanitized, only displayed if `htmlmode` is **true**).',
      }),
    htmlmode: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          '**true** if `html` should be displayed, **false** if `body` should be displayed.',
      }),
    hidden: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Visibility of the custom page.' }),
  })
  .openapi({ required: ['title'] })
  .openapi('CustomPage')

const DocSchemaPostSchema = z
  .xor([
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'title')) {
            ctx.addIssue({ code: 'custom' })
          }
          if (!Object.hasOwn(val, 'category')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['title', 'category'], title: '`category` Parameter' }),
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'title')) {
            ctx.addIssue({ code: 'custom' })
          }
          if (!Object.hasOwn(val, 'categorySlug')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['title', 'categorySlug'], title: '`categorySlug` Parameter' }),
  ])
  .openapi('DocSchemaPost')

const DocSchemaPutSchema = z
  .looseObject({
    title: z.string().exactOptional().openapi({ description: 'Title of the page.' }),
    type: z
      .enum(['basic', 'error', 'link'])
      .exactOptional()
      .openapi({
        description:
          'Type of the page. The available types all show up under the /docs/ URL path of your docs project (also known as the "guides" section). Can be "basic" (most common), "error" (page desribing an API error), or "link" (page that redirects to an external link).',
      }),
    body: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Body content of the page, formatted in [ReadMe-flavored Markdown](https://docs.readme.com/rdmd/docs).',
      }),
    category: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Category ID of the page, which you can get through [the **Get all categories** endpoint](https://docs.readme.com/main/reference/getcategories).',
      }),
    hidden: z.boolean().exactOptional().openapi({ description: 'Visibility of the page.' }),
    order: z
      .int()
      .exactOptional()
      .openapi({ description: 'The position of the page in your project sidebar.', example: 999 }),
    parentDoc: z
      .string()
      .exactOptional()
      .openapi({ description: "The parent doc's ID, if the page is a subpage." }),
    error: z
      .object({
        code: z
          .string()
          .exactOptional()
          .openapi({ description: 'The error code for docs with the "error" type.' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    categorySlug: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The slug of the category this page is associated with. You can get this through [the **Get all categories** endpoint](https://docs.readme.com/main/reference/getcategories). This field is an alternative to the `category` field.',
      }),
    parentDocSlug: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If this page is a subpage, this field will be the slug of the parent document. You can get this through https://docs.readme.com/main/reference/docs#getdoc. This field is an alternative to the `parentDoc` field.',
      }),
  })
  .openapi({ required: [] })
  .openapi('DocSchemaPut')

const DocSchemaResponseSchema = z
  .looseObject({
    title: z.string().exactOptional().openapi({ description: 'Title of the page.' }),
    type: z
      .enum(['basic', 'error', 'link'])
      .exactOptional()
      .openapi({
        description:
          'Type of the page. The available types all show up under the /docs/ URL path of your docs project (also known as the "guides" section). Can be "basic" (most common), "error" (page desribing an API error), or "link" (page that redirects to an external link).',
      }),
    body: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Body content of the page, formatted in [ReadMe-flavored Markdown](https://docs.readme.com/rdmd/docs).',
      }),
    category: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Category ID of the page, which you can get through [the **Get all categories** endpoint](https://docs.readme.com/main/reference/getcategories).',
      }),
    hidden: z.boolean().exactOptional().openapi({ description: 'Visibility of the page.' }),
    order: z
      .int()
      .exactOptional()
      .openapi({ description: 'The position of the page in your project sidebar.', example: 999 }),
    parentDoc: z
      .string()
      .exactOptional()
      .openapi({ description: "The parent doc's ID, if the page is a subpage." }),
    error: z
      .object({
        code: z
          .string()
          .exactOptional()
          .openapi({ description: 'The error code for docs with the "error" type.' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('DocSchemaResponse')

const VersionSchema = z
  .object({
    version: z.string().openapi({ description: 'Semantic Version' }),
    codename: z.string().exactOptional().openapi({ description: 'Dubbed name of version.' }),
    from: z.string().openapi({ description: 'Semantic Version to use as the base fork.' }),
    is_stable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Should this be the **main** version?' }),
    is_beta: z.boolean().default(true).exactOptional(),
    is_hidden: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Should this be publically accessible?' }),
    is_deprecated: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Should this be deprecated? Only allowed in PUT operations.' }),
  })
  .openapi({ required: ['version', 'from'] })
  .openapi('Version')

const JobOpeningSchema = z
  .object({
    slug: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A slugified version of the job opening title.',
        example: 'api-engineer',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'The job opening position.', example: 'API Engineer' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The description for this open position. This content is formatted as HTML.',
      }),
    pullquote: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A short pullquote for the open position.',
        example: 'Deeply knowledgeable of the web, HTTP, and the API space.',
      }),
    location: z
      .string()
      .exactOptional()
      .openapi({ description: 'Where this position is located at.', example: 'Remote' }),
    department: z
      .string()
      .exactOptional()
      .openapi({
        description: "The internal organization you'll be working in.",
        example: 'Engineering',
      }),
    url: z
      .url()
      .exactOptional()
      .openapi({ description: 'The place where you can apply for the position!' }),
  })
  .openapi({ required: [] })
  .openapi('JobOpening')

const ErrorAPIKEYEMPTYSchema = BaseErrorSchema.and(
  z.object({ error: z.string().default('APIKEY_EMPTY').exactOptional() }).openapi({ required: [] }),
).openapi('ErrorAPIKEYEMPTY')

const ErrorAPIKEYMISMATCHSchema = BaseErrorSchema.and(
  z
    .object({ error: z.string().default('APIKEY_MISMATCH').exactOptional() })
    .openapi({ required: [] }),
).openapi('ErrorAPIKEYMISMATCH')

const ErrorAPIKEYNOTFOUNDSchema = BaseErrorSchema.and(
  z
    .object({ error: z.string().default('APIKEY_NOTFOUND').exactOptional() })
    .openapi({ required: [] }),
).openapi('ErrorAPIKEYNOTFOUND')

const ErrorAPPLYINVALIDEMAILSchema = BaseErrorSchema.and(
  z
    .object({ error: z.string().default('APPLY_INVALID_EMAIL').exactOptional() })
    .openapi({ required: [] }),
).openapi('ErrorAPPLYINVALIDEMAIL')

const ErrorAPPLYINVALIDJOBSchema = BaseErrorSchema.and(
  z
    .object({ error: z.string().default('APPLY_INVALID_JOB').exactOptional() })
    .openapi({ required: [] }),
).openapi('ErrorAPPLYINVALIDJOB')

const ErrorAPPLYINVALIDNAMESchema = BaseErrorSchema.and(
  z
    .object({ error: z.string().default('APPLY_INVALID_NAME').exactOptional() })
    .openapi({ required: [] }),
).openapi('ErrorAPPLYINVALIDNAME')

const ErrorCATEGORYINVALIDSchema = BaseErrorSchema.and(
  z
    .object({ error: z.string().default('CATEGORY_INVALID').exactOptional() })
    .openapi({ required: [] }),
).openapi('ErrorCATEGORYINVALID')

const ErrorCATEGORYNOTFOUNDSchema = BaseErrorSchema.and(
  z
    .object({ error: z.string().default('CATEGORY_NOTFOUND').exactOptional() })
    .openapi({ required: [] }),
).openapi('ErrorCATEGORYNOTFOUND')

const ErrorCHANGELOGINVALIDSchema = BaseErrorSchema.and(
  z
    .object({ error: z.string().default('CHANGELOG_INVALID').exactOptional() })
    .openapi({ required: [] }),
).openapi('ErrorCHANGELOGINVALID')

const ErrorCHANGELOGNOTFOUNDSchema = BaseErrorSchema.and(
  z
    .object({ error: z.string().default('CHANGELOG_NOTFOUND').exactOptional() })
    .openapi({ required: [] }),
).openapi('ErrorCHANGELOGNOTFOUND')

const ErrorCUSTOMPAGEINVALIDSchema = BaseErrorSchema.and(
  z
    .object({ error: z.string().default('CUSTOMPAGE_INVALID').exactOptional() })
    .openapi({ required: [] }),
).openapi('ErrorCUSTOMPAGEINVALID')

const ErrorCUSTOMPAGENOTFOUNDSchema = BaseErrorSchema.and(
  z
    .object({ error: z.string().default('CUSTOMPAGE_NOTFOUND').exactOptional() })
    .openapi({ required: [] }),
).openapi('ErrorCUSTOMPAGENOTFOUND')

const ErrorDOCINVALIDSchema = BaseErrorSchema.and(
  z.object({ error: z.string().default('DOC_INVALID').exactOptional() }).openapi({ required: [] }),
).openapi('ErrorDOCINVALID')

const ErrorDOCNOTFOUNDSchema = BaseErrorSchema.and(
  z.object({ error: z.string().default('DOC_NOTFOUND').exactOptional() }).openapi({ required: [] }),
).openapi('ErrorDOCNOTFOUND')

const ErrorENDPOINTNOTFOUNDSchema = BaseErrorSchema.and(
  z
    .object({ error: z.string().default('ENDPOINT_NOTFOUND').exactOptional() })
    .openapi({ required: [] }),
).openapi('ErrorENDPOINTNOTFOUND')

const ErrorINTERNALERRORSchema = BaseErrorSchema.and(
  z
    .object({ error: z.string().default('INTERNAL_ERROR').exactOptional() })
    .openapi({ required: [] }),
).openapi('ErrorINTERNALERROR')

const ErrorPROJECTNEEDSSTAGINGSchema = BaseErrorSchema.and(
  z
    .object({ error: z.string().default('PROJECT_NEEDSSTAGING').exactOptional() })
    .openapi({ required: [] }),
).openapi('ErrorPROJECTNEEDSSTAGING')

const ErrorPROJECTNOTFOUNDSchema = BaseErrorSchema.and(
  z
    .object({ error: z.string().default('PROJECT_NOTFOUND').exactOptional() })
    .openapi({ required: [] }),
).openapi('ErrorPROJECTNOTFOUND')

const ErrorRATELIMITEDSchema = BaseErrorSchema.and(
  z.object({ error: z.string().default('RATE_LIMITED').exactOptional() }).openapi({ required: [] }),
).openapi('ErrorRATELIMITED')

const ErrorREGISTRYINVALIDSchema = BaseErrorSchema.and(
  z
    .object({ error: z.string().default('REGISTRY_INVALID').exactOptional() })
    .openapi({ required: [] }),
).openapi('ErrorREGISTRYINVALID')

const ErrorREGISTRYNOTFOUNDSchema = BaseErrorSchema.and(
  z
    .object({ error: z.string().default('REGISTRY_NOTFOUND').exactOptional() })
    .openapi({ required: [] }),
).openapi('ErrorREGISTRYNOTFOUND')

const ErrorSPECFILEEMPTYSchema = BaseErrorSchema.and(
  z
    .object({ error: z.string().default('SPEC_FILE_EMPTY').exactOptional() })
    .openapi({ required: [] }),
).openapi('ErrorSPECFILEEMPTY')

const ErrorSPECIDDUPLICATESchema = BaseErrorSchema.and(
  z
    .object({ error: z.string().default('SPEC_ID_DUPLICATE').exactOptional() })
    .openapi({ required: [] }),
).openapi('ErrorSPECIDDUPLICATE')

const ErrorSPECIDINVALIDSchema = BaseErrorSchema.and(
  z
    .object({ error: z.string().default('SPEC_ID_INVALID').exactOptional() })
    .openapi({ required: [] }),
).openapi('ErrorSPECIDINVALID')

const ErrorSPECINVALIDSchema = BaseErrorSchema.and(
  z.object({ error: z.string().default('SPEC_INVALID').exactOptional() }).openapi({ required: [] }),
).openapi('ErrorSPECINVALID')

const ErrorSPECINVALIDSCHEMASchema = BaseErrorSchema.and(
  z
    .object({ error: z.string().default('SPEC_INVALID_SCHEMA').exactOptional() })
    .openapi({ required: [] }),
).openapi('ErrorSPECINVALIDSCHEMA')

const ErrorSPECNOTFOUNDSchema = BaseErrorSchema.and(
  z
    .object({ error: z.string().default('SPEC_NOTFOUND').exactOptional() })
    .openapi({ required: [] }),
).openapi('ErrorSPECNOTFOUND')

const ErrorSPECTIMEOUTSchema = BaseErrorSchema.and(
  z.object({ error: z.string().default('SPEC_TIMEOUT').exactOptional() }).openapi({ required: [] }),
).openapi('ErrorSPECTIMEOUT')

const ErrorSPECVERSIONNOTFOUNDSchema = BaseErrorSchema.and(
  z
    .object({ error: z.string().default('SPEC_VERSION_NOTFOUND').exactOptional() })
    .openapi({ required: [] }),
).openapi('ErrorSPECVERSIONNOTFOUND')

const ErrorUNEXPECTEDERRORSchema = BaseErrorSchema.and(
  z
    .object({ error: z.string().default('UNEXPECTED_ERROR').exactOptional() })
    .openapi({ required: [] }),
).openapi('ErrorUNEXPECTEDERROR')

const ErrorVERSIONCANTDEMOTESTABLESchema = BaseErrorSchema.and(
  z
    .object({ error: z.string().default('VERSION_CANT_DEMOTE_STABLE').exactOptional() })
    .openapi({ required: [] }),
).openapi('ErrorVERSIONCANTDEMOTESTABLE')

const ErrorVERSIONCANTREMOVESTABLESchema = BaseErrorSchema.and(
  z
    .object({ error: z.string().default('VERSION_CANT_REMOVE_STABLE').exactOptional() })
    .openapi({ required: [] }),
).openapi('ErrorVERSIONCANTREMOVESTABLE')

const ErrorVERSIONDUPLICATESchema = BaseErrorSchema.and(
  z
    .object({ error: z.string().default('VERSION_DUPLICATE').exactOptional() })
    .openapi({ required: [] }),
).openapi('ErrorVERSIONDUPLICATE')

const ErrorVERSIONEMPTYSchema = BaseErrorSchema.and(
  z
    .object({ error: z.string().default('VERSION_EMPTY').exactOptional() })
    .openapi({ required: [] }),
).openapi('ErrorVERSIONEMPTY')

const ErrorVERSIONFORKEMPTYSchema = BaseErrorSchema.and(
  z
    .object({ error: z.string().default('VERSION_FORK_EMPTY').exactOptional() })
    .openapi({ required: [] }),
).openapi('ErrorVERSIONFORKEMPTY')

const ErrorVERSIONFORKNOTFOUNDSchema = BaseErrorSchema.and(
  z
    .object({ error: z.string().default('VERSION_FORK_NOTFOUND').exactOptional() })
    .openapi({ required: [] }),
).openapi('ErrorVERSIONFORKNOTFOUND')

const ErrorVERSIONINVALIDSchema = BaseErrorSchema.and(
  z
    .object({ error: z.string().default('VERSION_INVALID').exactOptional() })
    .openapi({ required: [] }),
).openapi('ErrorVERSIONINVALID')

const ErrorVERSIONNOTFOUNDSchema = BaseErrorSchema.and(
  z
    .object({ error: z.string().default('VERSION_NOTFOUND').exactOptional() })
    .openapi({ required: [] }),
).openapi('ErrorVERSIONNOTFOUND')

const AuthForbiddenResponse = {
  description: 'Unauthorized',
  content: { 'application/json': { schema: z.xor([ErrorAPIKEYMISMATCHSchema]) } },
}

const AuthUnauthorizedResponse = {
  description: 'Unauthorized',
  content: {
    'application/json': { schema: z.xor([ErrorAPIKEYEMPTYSchema, ErrorAPIKEYNOTFOUNDSchema]) },
  },
}

const ErrorAPIKEYEMPTYResponse = {
  description: 'An API key was not supplied.',
  content: { 'application/json': { schema: ErrorAPIKEYEMPTYSchema } },
}

const ErrorAPIKEYMISMATCHResponse = {
  description: "The API key doesn't match the project.",
  content: { 'application/json': { schema: ErrorAPIKEYMISMATCHSchema } },
}

const ErrorAPIKEYNOTFOUNDResponse = {
  description: "The API key couldn't be located.",
  content: { 'application/json': { schema: ErrorAPIKEYNOTFOUNDSchema } },
}

const ErrorAPPLYINVALIDEMAILResponse = {
  description: 'You need to provide a valid email.',
  content: { 'application/json': { schema: ErrorAPPLYINVALIDEMAILSchema } },
}

const ErrorAPPLYINVALIDJOBResponse = {
  description: 'You need to provide a job.',
  content: { 'application/json': { schema: ErrorAPPLYINVALIDJOBSchema } },
}

const ErrorAPPLYINVALIDNAMEResponse = {
  description: 'You need to provide a name.',
  content: { 'application/json': { schema: ErrorAPPLYINVALIDNAMESchema } },
}

const ErrorCATEGORYINVALIDResponse = {
  description: "The category couldn't be saved.",
  content: { 'application/json': { schema: ErrorCATEGORYINVALIDSchema } },
}

const ErrorCATEGORYNOTFOUNDResponse = {
  description: "The category couldn't be found.",
  content: { 'application/json': { schema: ErrorCATEGORYNOTFOUNDSchema } },
}

const ErrorCHANGELOGINVALIDResponse = {
  description: "The changelog couldn't be saved.",
  content: { 'application/json': { schema: ErrorCHANGELOGINVALIDSchema } },
}

const ErrorCHANGELOGNOTFOUNDResponse = {
  description: "The changelog couldn't be found.",
  content: { 'application/json': { schema: ErrorCHANGELOGNOTFOUNDSchema } },
}

const ErrorCUSTOMPAGEINVALIDResponse = {
  description: "The page couldn't be saved.",
  content: { 'application/json': { schema: ErrorCUSTOMPAGEINVALIDSchema } },
}

const ErrorCUSTOMPAGENOTFOUNDResponse = {
  description: "The custom page couldn't be found.",
  content: { 'application/json': { schema: ErrorCUSTOMPAGENOTFOUNDSchema } },
}

const ErrorDOCINVALIDResponse = {
  description: "The doc couldn't be saved.",
  content: { 'application/json': { schema: ErrorDOCINVALIDSchema } },
}

const ErrorDOCNOTFOUNDResponse = {
  description: "The doc couldn't be found.",
  content: { 'application/json': { schema: ErrorDOCNOTFOUNDSchema } },
}

const ErrorENDPOINTNOTFOUNDResponse = {
  description: "The endpoint doesn't exist.",
  content: { 'application/json': { schema: ErrorENDPOINTNOTFOUNDSchema } },
}

const ErrorINTERNALERRORResponse = {
  description: 'An unknown error has occurred.',
  content: { 'application/json': { schema: ErrorINTERNALERRORSchema } },
}

const ErrorPROJECTNEEDSSTAGINGResponse = {
  description: 'The project does not have staging enabled.',
  content: { 'application/json': { schema: ErrorPROJECTNEEDSSTAGINGSchema } },
}

const ErrorPROJECTNOTFOUNDResponse = {
  description: "The project couldn't be found.",
  content: { 'application/json': { schema: ErrorPROJECTNOTFOUNDSchema } },
}

const ErrorRATELIMITEDResponse = {
  description: 'The request has been rate limited.',
  content: { 'application/json': { schema: ErrorRATELIMITEDSchema } },
}

const ErrorREGISTRYINVALIDResponse = {
  description: "The registry entry couldn't be found.",
  content: { 'application/json': { schema: ErrorREGISTRYINVALIDSchema } },
}

const ErrorREGISTRYNOTFOUNDResponse = {
  description: "The registry entry couldn't be found.",
  content: { 'application/json': { schema: ErrorREGISTRYNOTFOUNDSchema } },
}

const ErrorSPECFILEEMPTYResponse = {
  description: "A spec file wasn't included.",
  content: { 'application/json': { schema: ErrorSPECFILEEMPTYSchema } },
}

const ErrorSPECIDDUPLICATEResponse = {
  description: 'The spec ID already tied to another version.',
  content: { 'application/json': { schema: ErrorSPECIDDUPLICATESchema } },
}

const ErrorSPECIDINVALIDResponse = {
  description: "The spec ID isn't valid.",
  content: { 'application/json': { schema: ErrorSPECIDINVALIDSchema } },
}

const ErrorSPECINVALIDResponse = {
  description: "The uploaded spec isn't valid JSON or YAML.",
  content: { 'application/json': { schema: ErrorSPECINVALIDSchema } },
}

const ErrorSPECINVALIDSCHEMAResponse = {
  description: 'The uploaded spec has OpenAPI validation errors.',
  content: { 'application/json': { schema: ErrorSPECINVALIDSCHEMASchema } },
}

const ErrorSPECNOTFOUNDResponse = {
  description: "The spec couldn't be found.",
  content: { 'application/json': { schema: ErrorSPECNOTFOUNDSchema } },
}

const ErrorSPECTIMEOUTResponse = {
  description: 'The spec upload timed out.',
  content: { 'application/json': { schema: ErrorSPECTIMEOUTSchema } },
}

const ErrorSPECVERSIONNOTFOUNDResponse = {
  description: "The spec version couldn't be found.",
  content: { 'application/json': { schema: ErrorSPECVERSIONNOTFOUNDSchema } },
}

const ErrorUNEXPECTEDERRORResponse = {
  description: 'An unknown error has occurred.',
  content: { 'application/json': { schema: ErrorUNEXPECTEDERRORSchema } },
}

const ErrorVERSIONCANTDEMOTESTABLEResponse = {
  description: "A stable version can't be demoted.",
  content: { 'application/json': { schema: ErrorVERSIONCANTDEMOTESTABLESchema } },
}

const ErrorVERSIONCANTREMOVESTABLEResponse = {
  description: "A stable version can't be removed.",
  content: { 'application/json': { schema: ErrorVERSIONCANTREMOVESTABLESchema } },
}

const ErrorVERSIONDUPLICATEResponse = {
  description: 'The version already exists.',
  content: { 'application/json': { schema: ErrorVERSIONDUPLICATESchema } },
}

const ErrorVERSIONEMPTYResponse = {
  description: 'No version was supplied.',
  content: { 'application/json': { schema: ErrorVERSIONEMPTYSchema } },
}

const ErrorVERSIONFORKEMPTYResponse = {
  description: 'New versions need to be forked from an existing version.',
  content: { 'application/json': { schema: ErrorVERSIONFORKEMPTYSchema } },
}

const ErrorVERSIONFORKNOTFOUNDResponse = {
  description: "The version couldn't be found.",
  content: { 'application/json': { schema: ErrorVERSIONFORKNOTFOUNDSchema } },
}

const ErrorVERSIONINVALIDResponse = {
  description: 'The version is invalid.',
  content: { 'application/json': { schema: ErrorVERSIONINVALIDSchema } },
}

const ErrorVERSIONNOTFOUNDResponse = {
  description: "The version couldn't be found.",
  content: { 'application/json': { schema: ErrorVERSIONNOTFOUNDSchema } },
}

const SlugParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'slug',
      in: 'path',
      description:
        'A URL-safe representation of the page title. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the title "Getting Started", enter the slug "getting-started".',
      required: true,
      schema: { type: 'string' },
    },
  })

const PageParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1),
  )
  .default(1)
  .exactOptional()
  .openapi({
    param: {
      name: 'page',
      in: 'query',
      description: 'Used to specify further pages (starts at 1).',
      schema: { type: 'integer', default: 1, minimum: 1 },
      required: false,
    },
  })

const PerPageParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1).max(100),
  )
  .default(10)
  .exactOptional()
  .openapi({
    param: {
      name: 'perPage',
      in: 'query',
      description: 'Number of items to include in pagination (up to 100, defaults to 10).',
      schema: { type: 'integer', default: 10, minimum: 1, maximum: 100 },
      required: false,
    },
  })

const XReadmeVersionParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      in: 'header',
      name: 'x-readme-version',
      description:
        'Version number of your docs project, for example, v3.0. By default the main project version is used. To see all valid versions for your docs project call https://docs.readme.com/main/reference/version#getversions.',
      example: 'v3.0',
      required: false,
      schema: { type: 'string' },
    },
  })

const VersionIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'versionId',
      in: 'path',
      description:
        'Semver identifier for the project version. For best results, use the formatted `version_clean` value listed in the response from the [Get Versions endpoint](/reference/getversions).',
      example: 'v1.0.0',
      required: true,
      schema: { type: 'string' },
    },
  })

const LinkHeaderSchema = z
  .string()
  .exactOptional()
  .openapi({
    description:
      'Pagination information. See https://docs.readme.com/main/reference/pagination for more information.',
    param: { required: false },
  })

const XTotalCountHeaderSchema = z
  .string()
  .exactOptional()
  .openapi({
    description:
      'The total amount of results, ignoring pagination. See https://docs.readme.com/main/reference/pagination for more information about pagination.',
    param: { required: false },
  })

const ApiKeySecurityScheme = { type: 'http', scheme: 'basic' }

export const getApiRegistryUuidRoute = createRoute({
  method: 'get',
  path: '/api-registry/{uuid}',
  tags: ['API Registry'],
  summary: 'Retrieve an entry from the API Registry',
  description: "Get an API definition file that's been uploaded to ReadMe.",
  operationId: 'getAPIRegistry',
  request: {
    params: z.object({
      uuid: z
        .string()
        .openapi({
          param: {
            name: 'uuid',
            in: 'path',
            description:
              'An API Registry UUID. This can be found by navigating to your API Reference page and viewing code snippets for Node with the `api` library.',
            schema: { type: 'string' },
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved API registry entry.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    404: ErrorREGISTRYNOTFOUNDResponse,
  },
})

export const getApiSpecificationRoute = createRoute({
  method: 'get',
  path: '/api-specification',
  tags: ['API Specification'],
  summary: 'Get metadata',
  description: 'Get API specification metadata.',
  operationId: 'getAPISpecification',
  request: {
    query: z.object({ perPage: PerPageParamsSchema, page: PageParamsSchema }),
    headers: z.object({ 'x-readme-version': XReadmeVersionParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved API specification metadata.',
      headers: z.object({ Link: LinkHeaderSchema, 'x-total-count': XTotalCountHeaderSchema }),
    },
    400: ErrorVERSIONEMPTYResponse,
    401: AuthUnauthorizedResponse,
    403: AuthForbiddenResponse,
    404: ErrorVERSIONNOTFOUNDResponse,
  },
  security: [{ apiKey: [] }],
})

export const postApiSpecificationRoute = createRoute({
  method: 'post',
  path: '/api-specification',
  tags: ['API Specification'],
  summary: 'Upload specification',
  description:
    'Upload an API specification to ReadMe. Or, to use a newer solution see https://docs.readme.com/main/docs/rdme.',
  operationId: 'uploadAPISpecification',
  request: {
    headers: z.object({ 'x-readme-version': XReadmeVersionParamsSchema }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              spec: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'OpenAPI/Swagger file. We accept JSON or YAML.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: { description: 'The API specification was successfully uploaded.' },
    400: {
      description: 'There was a validation error during upload.',
      content: {
        'application/json': {
          schema: z.xor([
            ErrorSPECFILEEMPTYSchema,
            ErrorSPECINVALIDSchema,
            ErrorSPECINVALIDSCHEMASchema,
            ErrorSPECVERSIONNOTFOUNDSchema,
          ]),
        },
      },
    },
    401: AuthUnauthorizedResponse,
    403: AuthForbiddenResponse,
    408: ErrorSPECTIMEOUTResponse,
  },
  security: [{ apiKey: [] }],
})

export const putApiSpecificationIdRoute = createRoute({
  method: 'put',
  path: '/api-specification/{id}',
  tags: ['API Specification'],
  summary: 'Update specification',
  description: 'Update an API specification in ReadMe.',
  operationId: 'updateAPISpecification',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description:
              'ID of the API specification. The unique ID for each API can be found by navigating to your **API Definitions** page.',
            schema: { type: 'string' },
            required: true,
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              spec: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'OpenAPI/Swagger file. We accept JSON or YAML.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'The API specification was updated.' },
    400: {
      description: 'There was a validation error during upload.',
      content: {
        'application/json': {
          schema: z.xor([
            ErrorSPECFILEEMPTYSchema,
            ErrorSPECIDDUPLICATESchema,
            ErrorSPECIDINVALIDSchema,
            ErrorSPECINVALIDSchema,
            ErrorSPECINVALIDSCHEMASchema,
            ErrorSPECVERSIONNOTFOUNDSchema,
          ]),
        },
      },
    },
    401: AuthUnauthorizedResponse,
    403: AuthForbiddenResponse,
    404: { description: 'There is no API specification with that ID.' },
    408: ErrorSPECTIMEOUTResponse,
  },
  security: [{ apiKey: [] }],
})

export const deleteApiSpecificationIdRoute = createRoute({
  method: 'delete',
  path: '/api-specification/{id}',
  tags: ['API Specification'],
  summary: 'Delete specification',
  description: 'Delete an API specification in ReadMe.',
  operationId: 'deleteAPISpecification',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description:
              'ID of the API specification. The unique ID for each API can be found by navigating to your **API Definitions** page.',
            schema: { type: 'string' },
            required: true,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'The API specification was deleted.' },
    400: ErrorSPECIDINVALIDResponse,
    401: AuthUnauthorizedResponse,
    403: AuthForbiddenResponse,
    404: ErrorSPECNOTFOUNDResponse,
  },
  security: [{ apiKey: [] }],
})

export const getApplyRoute = createRoute({
  method: 'get',
  path: '/apply',
  tags: ['Apply to ReadMe'],
  summary: 'Get open roles',
  description: "Returns all the roles we're hiring for at ReadMe!",
  operationId: 'getOpenRoles',
  responses: {
    200: {
      description: "All the roles that we're hiring for.",
      content: { 'application/json': { schema: z.array(JobOpeningSchema) } },
    },
  },
})

export const postApplyRoute = createRoute({
  method: 'post',
  path: '/apply',
  tags: ['Apply to ReadMe'],
  summary: 'Submit your application!',
  description:
    'This endpoint will let you apply to a job at ReadMe programatically, without having to go through our UI!',
  operationId: 'applyToReadMe',
  request: { body: { content: { 'application/json': { schema: ApplySchema } }, required: true } },
  responses: { 200: { description: 'You did it!' } },
})

export const getCategoriesRoute = createRoute({
  method: 'get',
  path: '/categories',
  tags: ['Categories'],
  summary: 'Get all categories',
  description: 'Returns all the categories for a specified version.',
  operationId: 'getCategories',
  request: {
    headers: z.object({ 'x-readme-version': XReadmeVersionParamsSchema }),
    query: z.object({ perPage: PerPageParamsSchema, page: PageParamsSchema }),
  },
  responses: {
    200: {
      description: 'The list of categories.',
      headers: z.object({ Link: LinkHeaderSchema, 'x-total-count': XTotalCountHeaderSchema }),
    },
  },
  security: [{ apiKey: [] }],
})

export const postCategoriesRoute = createRoute({
  method: 'post',
  path: '/categories',
  tags: ['Categories'],
  summary: 'Create category',
  description: 'Create a new category inside of this project.',
  operationId: 'createCategory',
  request: {
    headers: z.object({ 'x-readme-version': XReadmeVersionParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: CategorySchema.and(
            z
              .unknown()
              .superRefine((val, ctx) => {
                if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                  if (!Object.hasOwn(val, 'title')) {
                    ctx.addIssue({ code: 'custom' })
                  }
                }
              })
              .openapi({ required: ['title'] }),
          ),
        },
      },
      required: true,
    },
  },
  responses: {
    201: { description: 'The category has successfully been created.' },
    400: ErrorCATEGORYINVALIDResponse,
  },
  security: [{ apiKey: [] }],
})

export const getCategoriesSlugRoute = createRoute({
  method: 'get',
  path: '/categories/{slug}',
  tags: ['Categories'],
  summary: 'Get category',
  description: 'Returns the category with this slug.',
  operationId: 'getCategory',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: {
            name: 'slug',
            in: 'path',
            description:
              'A URL-safe representation of the category title. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the category "Getting Started", enter the slug "getting-started".',
            example: 'getting-started',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({ 'x-readme-version': XReadmeVersionParamsSchema }),
  },
  responses: {
    200: { description: 'The category exists and has been returned.' },
    404: ErrorCATEGORYNOTFOUNDResponse,
  },
  security: [{ apiKey: [] }],
})

export const putCategoriesSlugRoute = createRoute({
  method: 'put',
  path: '/categories/{slug}',
  tags: ['Categories'],
  summary: 'Update category',
  description: 'Change the properties of a category.',
  operationId: 'updateCategory',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: {
            name: 'slug',
            in: 'path',
            description:
              'A URL-safe representation of the category title. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the category "Getting Started", enter the slug "getting-started".',
            example: 'getting-started',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({ 'x-readme-version': XReadmeVersionParamsSchema }),
    body: { content: { 'application/json': { schema: CategorySchema } }, required: true },
  },
  responses: {
    200: { description: 'The category was successfully updated.' },
    400: ErrorCATEGORYINVALIDResponse,
    404: ErrorCATEGORYNOTFOUNDResponse,
  },
  security: [{ apiKey: [] }],
})

export const deleteCategoriesSlugRoute = createRoute({
  method: 'delete',
  path: '/categories/{slug}',
  tags: ['Categories'],
  summary: 'Delete category',
  description:
    'Delete the category with this slug.\n>⚠️Heads Up!\n> This will also delete all of the docs within this category.',
  operationId: 'deleteCategory',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: {
            name: 'slug',
            in: 'path',
            description:
              'A URL-safe representation of the category title. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the category "Getting Started", enter the slug "getting-started".',
            example: 'getting-started',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({ 'x-readme-version': XReadmeVersionParamsSchema }),
  },
  responses: {
    204: { description: 'The category was deleted.' },
    404: ErrorCATEGORYNOTFOUNDResponse,
  },
  security: [{ apiKey: [] }],
})

export const getCategoriesSlugDocsRoute = createRoute({
  method: 'get',
  path: '/categories/{slug}/docs',
  tags: ['Categories'],
  summary: 'Get docs for category',
  description: 'Returns the docs and children docs within this category.',
  operationId: 'getCategoryDocs',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: {
            name: 'slug',
            in: 'path',
            description:
              'A URL-safe representation of the category title. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the category "Getting Started", enter the slug "getting-started".',
            example: 'getting-started',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({ 'x-readme-version': XReadmeVersionParamsSchema }),
  },
  responses: {
    200: { description: 'The category exists and all of the docs have been returned.' },
    404: ErrorCATEGORYNOTFOUNDResponse,
  },
  security: [{ apiKey: [] }],
})

export const getChangelogsRoute = createRoute({
  method: 'get',
  path: '/changelogs',
  tags: ['Changelog'],
  summary: 'Get changelogs',
  description: 'Returns a list of changelogs.',
  operationId: 'getChangelogs',
  request: { query: z.object({ perPage: PerPageParamsSchema, page: PageParamsSchema }) },
  responses: {
    200: {
      description: 'The list of changelogs.',
      headers: z.object({ Link: LinkHeaderSchema, 'x-total-count': XTotalCountHeaderSchema }),
    },
  },
  security: [{ apiKey: [] }],
})

export const postChangelogsRoute = createRoute({
  method: 'post',
  path: '/changelogs',
  tags: ['Changelog'],
  summary: 'Create changelog',
  description: 'Create a new changelog entry.',
  operationId: 'createChangelog',
  request: {
    body: { content: { 'application/json': { schema: ChangelogSchema } }, required: true },
  },
  responses: {
    201: { description: 'The changelog was successfully created.' },
    400: { description: 'There was a validation error during creation.' },
  },
  security: [{ apiKey: [] }],
})

export const getChangelogsSlugRoute = createRoute({
  method: 'get',
  path: '/changelogs/{slug}',
  tags: ['Changelog'],
  summary: 'Get changelog',
  description: 'Returns the changelog with this slug.',
  operationId: 'getChangelog',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: {
            name: 'slug',
            in: 'path',
            description:
              'A URL-safe representation of the changelog title. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the changelog "Owlet Update", enter the slug "owlet-update".',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'The changelog exists and has been returned.' },
    404: { description: 'There is no changelog with that slug.' },
  },
  security: [{ apiKey: [] }],
})

export const putChangelogsSlugRoute = createRoute({
  method: 'put',
  path: '/changelogs/{slug}',
  tags: ['Changelog'],
  summary: 'Update changelog',
  description: 'Update a changelog with this slug.',
  operationId: 'updateChangelog',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: {
            name: 'slug',
            in: 'path',
            description:
              'A URL-safe representation of the changelog title. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the changelog "Owlet Weekly Update", enter the slug "owlet-weekly-update".',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ChangelogSchema } }, required: true },
  },
  responses: {
    200: { description: 'The changelog was successfully updated.' },
    400: { description: 'There was a validation error during update.' },
    404: { description: 'There is no changelog with that slug.' },
  },
  security: [{ apiKey: [] }],
})

export const deleteChangelogsSlugRoute = createRoute({
  method: 'delete',
  path: '/changelogs/{slug}',
  tags: ['Changelog'],
  summary: 'Delete changelog',
  description: 'Delete the changelog with this slug.',
  operationId: 'deleteChangelog',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: {
            name: 'slug',
            in: 'path',
            description:
              'A URL-safe representation of the changelog title. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the changelog "Owlet Weekly Update", enter the slug "owlet-weekly-update".',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'The changelog was successfully updated.' },
    404: { description: 'There is no changelog with that slug.' },
  },
  security: [{ apiKey: [] }],
})

export const getCustompagesRoute = createRoute({
  method: 'get',
  path: '/custompages',
  tags: ['Custom Pages'],
  summary: 'Get custom pages',
  description: 'Returns a list of custom pages.',
  operationId: 'getCustomPages',
  request: { query: z.object({ perPage: PerPageParamsSchema, page: PageParamsSchema }) },
  responses: {
    200: {
      description: 'The list of custom pages.',
      headers: z.object({ Link: LinkHeaderSchema, 'x-total-count': XTotalCountHeaderSchema }),
    },
    401: AuthUnauthorizedResponse,
    403: AuthForbiddenResponse,
  },
  security: [{ apiKey: [] }],
})

export const postCustompagesRoute = createRoute({
  method: 'post',
  path: '/custompages',
  tags: ['Custom Pages'],
  summary: 'Create custom page',
  description: 'Create a new custom page inside of this project.',
  operationId: 'createCustomPage',
  request: {
    body: { content: { 'application/json': { schema: CustomPageSchema } }, required: true },
  },
  responses: {
    201: { description: 'The custom page was successfully created.' },
    400: ErrorCUSTOMPAGEINVALIDResponse,
    401: AuthUnauthorizedResponse,
    403: AuthForbiddenResponse,
  },
  security: [{ apiKey: [] }],
})

export const getCustompagesSlugRoute = createRoute({
  method: 'get',
  path: '/custompages/{slug}',
  tags: ['Custom Pages'],
  summary: 'Get custom page',
  description: 'Returns the custom page with this slug.',
  operationId: 'getCustomPage',
  request: { params: z.object({ slug: SlugParamsSchema }) },
  responses: {
    200: { description: 'The custom page exists and has been returned.' },
    401: AuthUnauthorizedResponse,
    403: AuthForbiddenResponse,
    404: ErrorCUSTOMPAGENOTFOUNDResponse,
  },
  security: [{ apiKey: [] }],
})

export const putCustompagesSlugRoute = createRoute({
  method: 'put',
  path: '/custompages/{slug}',
  tags: ['Custom Pages'],
  summary: 'Update custom page',
  description: 'Update a custom page with this slug.',
  operationId: 'updateCustomPage',
  request: {
    params: z.object({ slug: SlugParamsSchema }),
    body: { content: { 'application/json': { schema: CustomPageSchema } }, required: true },
  },
  responses: {
    200: { description: 'The custom page was successfully updated.' },
    400: ErrorCUSTOMPAGEINVALIDResponse,
    401: AuthUnauthorizedResponse,
    403: AuthForbiddenResponse,
    404: ErrorCUSTOMPAGENOTFOUNDResponse,
  },
  security: [{ apiKey: [] }],
})

export const deleteCustompagesSlugRoute = createRoute({
  method: 'delete',
  path: '/custompages/{slug}',
  tags: ['Custom Pages'],
  summary: 'Delete custom page',
  description: 'Delete the custom page with this slug.',
  operationId: 'deleteCustomPage',
  request: { params: z.object({ slug: SlugParamsSchema }) },
  responses: {
    204: { description: 'The custom page was successfully updated.' },
    401: AuthUnauthorizedResponse,
    403: AuthForbiddenResponse,
    404: ErrorCUSTOMPAGENOTFOUNDResponse,
  },
  security: [{ apiKey: [] }],
})

export const getDocsSlugRoute = createRoute({
  method: 'get',
  path: '/docs/{slug}',
  tags: ['Docs'],
  summary: 'Get doc',
  description: 'Returns the doc with this slug.',
  operationId: 'getDoc',
  request: {
    params: z.object({ slug: SlugParamsSchema }),
    headers: z.object({ 'x-readme-version': XReadmeVersionParamsSchema }),
  },
  responses: {
    200: {
      description: 'The doc exists and has been returned.',
      content: { 'application/json': { schema: DocSchemaResponseSchema } },
    },
    401: AuthUnauthorizedResponse,
    403: AuthForbiddenResponse,
    404: ErrorDOCNOTFOUNDResponse,
  },
  security: [{ apiKey: [] }],
})

export const putDocsSlugRoute = createRoute({
  method: 'put',
  path: '/docs/{slug}',
  tags: ['Docs'],
  summary: 'Update doc',
  description: 'Update a doc with this slug.',
  operationId: 'updateDoc',
  request: {
    params: z.object({ slug: SlugParamsSchema }),
    headers: z.object({ 'x-readme-version': XReadmeVersionParamsSchema }),
    body: { content: { 'application/json': { schema: DocSchemaPutSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'The doc was successfully updated.',
      content: { 'application/json': { schema: DocSchemaResponseSchema } },
    },
    400: ErrorDOCINVALIDResponse,
    401: AuthUnauthorizedResponse,
    403: AuthForbiddenResponse,
    404: ErrorDOCNOTFOUNDResponse,
  },
  security: [{ apiKey: [] }],
})

export const deleteDocsSlugRoute = createRoute({
  method: 'delete',
  path: '/docs/{slug}',
  tags: ['Docs'],
  summary: 'Delete doc',
  description: 'Delete the doc with this slug.',
  operationId: 'deleteDoc',
  request: {
    params: z.object({ slug: SlugParamsSchema }),
    headers: z.object({ 'x-readme-version': XReadmeVersionParamsSchema }),
  },
  responses: {
    204: { description: 'The doc was successfully updated.' },
    401: AuthUnauthorizedResponse,
    403: AuthForbiddenResponse,
    404: ErrorDOCNOTFOUNDResponse,
  },
  security: [{ apiKey: [] }],
})

export const getDocsSlugProductionRoute = createRoute({
  method: 'get',
  path: '/docs/{slug}/production',
  tags: ['Docs'],
  summary: 'Get production doc',
  description:
    'This is intended for use by enterprise users with staging enabled. This endpoint will return the live version of your document, whereas the standard endpoint will always return staging.',
  operationId: 'getProductionDoc',
  request: {
    params: z.object({ slug: SlugParamsSchema }),
    headers: z.object({ 'x-readme-version': XReadmeVersionParamsSchema }),
  },
  responses: {
    200: {
      description: 'The doc exists and has been returned.',
      content: { 'application/json': { schema: DocSchemaResponseSchema } },
    },
    401: AuthUnauthorizedResponse,
    403: AuthForbiddenResponse,
    404: ErrorDOCNOTFOUNDResponse,
  },
  security: [{ apiKey: [] }],
})

export const postDocsRoute = createRoute({
  method: 'post',
  path: '/docs',
  tags: ['Docs'],
  summary: 'Create doc',
  description: 'Create a new doc inside of this project.',
  operationId: 'createDoc',
  request: {
    headers: z.object({ 'x-readme-version': XReadmeVersionParamsSchema }),
    body: { content: { 'application/json': { schema: DocSchemaPostSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'The doc was successfully created.',
      content: { 'application/json': { schema: DocSchemaResponseSchema } },
    },
    400: ErrorDOCINVALIDResponse,
    401: AuthUnauthorizedResponse,
    403: AuthForbiddenResponse,
  },
  security: [{ apiKey: [] }],
})

export const postDocsSearchRoute = createRoute({
  method: 'post',
  path: '/docs/search',
  tags: ['Docs'],
  summary: 'Search docs',
  description: 'Returns all docs that match the search.',
  operationId: 'searchDocs',
  request: {
    query: z.object({
      search: z
        .string()
        .openapi({
          param: {
            name: 'search',
            in: 'query',
            description: 'Search string to look for.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({ 'x-readme-version': XReadmeVersionParamsSchema }),
  },
  responses: {
    200: { description: 'The search was successful and results were returned.' },
    401: AuthUnauthorizedResponse,
    403: AuthForbiddenResponse,
  },
  security: [{ apiKey: [] }],
})

export const getRoute = createRoute({
  method: 'get',
  path: '/',
  tags: ['Projects'],
  summary: 'Get metadata about the current project',
  description: 'Returns project data for the API key.',
  operationId: 'getProject',
  responses: {
    200: {
      description: 'Project data',
      content: { 'application/json': { schema: CondensedProjectDataSchema } },
    },
    401: AuthUnauthorizedResponse,
    403: AuthForbiddenResponse,
  },
  security: [{ apiKey: [] }],
})

export const getSchemaRoute = createRoute({
  method: 'get',
  path: '/schema',
  tags: ['API Specification'],
  summary: 'Get our OpenAPI Definition',
  description: 'Returns a copy of our OpenAPI Definition.',
  operationId: 'getAPISchema',
  responses: {
    200: {
      description: 'OpenAPI Definition data',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
  },
})

export const getVersionRoute = createRoute({
  method: 'get',
  path: '/version',
  tags: ['Version'],
  summary: 'Get versions',
  description: 'Retrieve a list of versions associated with a project API key.',
  operationId: 'getVersions',
  responses: {
    200: { description: 'A list of versions.' },
    401: AuthUnauthorizedResponse,
    403: AuthForbiddenResponse,
  },
  security: [{ apiKey: [] }],
})

export const postVersionRoute = createRoute({
  method: 'post',
  path: '/version',
  tags: ['Version'],
  summary: 'Create version',
  description: 'Create a new version.',
  operationId: 'createVersion',
  request: { body: { content: { 'application/json': { schema: VersionSchema } }, required: true } },
  responses: {
    200: { description: 'The version was successfully created.' },
    400: {
      description: 'There was a validation error during creation.',
      content: {
        'application/json': {
          schema: z.xor([
            ErrorVERSIONEMPTYSchema,
            ErrorVERSIONDUPLICATESchema,
            ErrorVERSIONFORKEMPTYSchema,
          ]),
        },
      },
    },
    401: AuthUnauthorizedResponse,
    403: AuthForbiddenResponse,
    404: ErrorVERSIONFORKNOTFOUNDResponse,
  },
  security: [{ apiKey: [] }],
})

export const getVersionVersionIdRoute = createRoute({
  method: 'get',
  path: '/version/{versionId}',
  tags: ['Version'],
  summary: 'Get version',
  description: 'Returns the version with this version ID.',
  operationId: 'getVersion',
  request: { params: z.object({ versionId: VersionIdParamsSchema }) },
  responses: {
    200: { description: 'The version exists and has been returned.' },
    401: AuthUnauthorizedResponse,
    403: AuthForbiddenResponse,
    404: ErrorVERSIONNOTFOUNDResponse,
  },
  security: [{ apiKey: [] }],
})

export const putVersionVersionIdRoute = createRoute({
  method: 'put',
  path: '/version/{versionId}',
  tags: ['Version'],
  summary: 'Update version',
  description: 'Update an existing version.',
  operationId: 'updateVersion',
  request: {
    params: z.object({ versionId: VersionIdParamsSchema }),
    body: { content: { 'application/json': { schema: VersionSchema } }, required: true },
  },
  responses: {
    200: { description: 'The version was successfully updated.' },
    400: ErrorVERSIONCANTDEMOTESTABLEResponse,
    401: AuthUnauthorizedResponse,
    403: AuthForbiddenResponse,
    404: ErrorVERSIONNOTFOUNDResponse,
  },
  security: [{ apiKey: [] }],
})

export const deleteVersionVersionIdRoute = createRoute({
  method: 'delete',
  path: '/version/{versionId}',
  tags: ['Version'],
  summary: 'Delete version',
  description: 'Delete a version',
  operationId: 'deleteVersion',
  request: { params: z.object({ versionId: VersionIdParamsSchema }) },
  responses: {
    200: { description: 'The version was successfully deleted.' },
    400: ErrorVERSIONCANTREMOVESTABLEResponse,
    401: AuthUnauthorizedResponse,
    403: AuthForbiddenResponse,
    404: ErrorVERSIONNOTFOUNDResponse,
  },
  security: [{ apiKey: [] }],
})
