type ErrorREGISTRYNOTFOUND = {
  error?: string | undefined
  message?: string | undefined
  suggestion?: string | undefined
  docs?: string | undefined
  help?: string | undefined
  poem?: string[] | undefined
}
type ErrorVERSIONEMPTY = {
  error?: string | undefined
  message?: string | undefined
  suggestion?: string | undefined
  docs?: string | undefined
  help?: string | undefined
  poem?: string[] | undefined
}
type ErrorAPIKEYEMPTY = {
  error?: string | undefined
  message?: string | undefined
  suggestion?: string | undefined
  docs?: string | undefined
  help?: string | undefined
  poem?: string[] | undefined
}
type ErrorAPIKEYNOTFOUND = {
  error?: string | undefined
  message?: string | undefined
  suggestion?: string | undefined
  docs?: string | undefined
  help?: string | undefined
  poem?: string[] | undefined
}
type ErrorAPIKEYMISMATCH = {
  error?: string | undefined
  message?: string | undefined
  suggestion?: string | undefined
  docs?: string | undefined
  help?: string | undefined
  poem?: string[] | undefined
}
type ErrorVERSIONNOTFOUND = {
  error?: string | undefined
  message?: string | undefined
  suggestion?: string | undefined
  docs?: string | undefined
  help?: string | undefined
  poem?: string[] | undefined
}
type ErrorSPECFILEEMPTY = {
  error?: string | undefined
  message?: string | undefined
  suggestion?: string | undefined
  docs?: string | undefined
  help?: string | undefined
  poem?: string[] | undefined
}
type ErrorSPECINVALID = {
  error?: string | undefined
  message?: string | undefined
  suggestion?: string | undefined
  docs?: string | undefined
  help?: string | undefined
  poem?: string[] | undefined
}
type ErrorSPECINVALIDSCHEMA = {
  error?: string | undefined
  message?: string | undefined
  suggestion?: string | undefined
  docs?: string | undefined
  help?: string | undefined
  poem?: string[] | undefined
}
type ErrorSPECVERSIONNOTFOUND = {
  error?: string | undefined
  message?: string | undefined
  suggestion?: string | undefined
  docs?: string | undefined
  help?: string | undefined
  poem?: string[] | undefined
}
type ErrorSPECTIMEOUT = {
  error?: string | undefined
  message?: string | undefined
  suggestion?: string | undefined
  docs?: string | undefined
  help?: string | undefined
  poem?: string[] | undefined
}
type ErrorSPECIDDUPLICATE = {
  error?: string | undefined
  message?: string | undefined
  suggestion?: string | undefined
  docs?: string | undefined
  help?: string | undefined
  poem?: string[] | undefined
}
type ErrorSPECIDINVALID = {
  error?: string | undefined
  message?: string | undefined
  suggestion?: string | undefined
  docs?: string | undefined
  help?: string | undefined
  poem?: string[] | undefined
}
type ErrorSPECNOTFOUND = {
  error?: string | undefined
  message?: string | undefined
  suggestion?: string | undefined
  docs?: string | undefined
  help?: string | undefined
  poem?: string[] | undefined
}
type JobOpening = {
  slug?: string | undefined
  title?: string | undefined
  description?: string | undefined
  pullquote?: string | undefined
  location?: string | undefined
  department?: string | undefined
  url?: string | undefined
}
type Apply = {
  name: string
  email: string
  job:
    | 'Front End Engineer'
    | 'Full Stack Engineer'
    | 'Head of Product'
    | 'Head of Solutions Engineering'
    | 'Product Designer'
  pronouns?: string | undefined
  linkedin?: string | undefined
  github?: string | undefined
  coverLetter?: string | undefined
  dontReallyApply?: boolean | undefined
}
type ErrorCATEGORYINVALID = {
  error?: string | undefined
  message?: string | undefined
  suggestion?: string | undefined
  docs?: string | undefined
  help?: string | undefined
  poem?: string[] | undefined
}
type ErrorCATEGORYNOTFOUND = {
  error?: string | undefined
  message?: string | undefined
  suggestion?: string | undefined
  docs?: string | undefined
  help?: string | undefined
  poem?: string[] | undefined
}
type Category = { title?: string | undefined; type?: 'reference' | 'guide' | undefined }
type Changelog = {
  title: string
  type?: '' | 'added' | 'fixed' | 'improved' | 'deprecated' | 'removed' | undefined
  body: string
  hidden?: boolean | undefined
}
type CustomPage = {
  title: string
  body?: string | undefined
  html?: string | undefined
  htmlmode?: boolean | undefined
  hidden?: boolean | undefined
}
type ErrorCUSTOMPAGEINVALID = {
  error?: string | undefined
  message?: string | undefined
  suggestion?: string | undefined
  docs?: string | undefined
  help?: string | undefined
  poem?: string[] | undefined
}
type ErrorCUSTOMPAGENOTFOUND = {
  error?: string | undefined
  message?: string | undefined
  suggestion?: string | undefined
  docs?: string | undefined
  help?: string | undefined
  poem?: string[] | undefined
}
type DocSchemaResponse = {
  title?: string | undefined
  type?: 'basic' | 'error' | 'link' | undefined
  body?: string | undefined
  category?: string | undefined
  hidden?: boolean | undefined
  order?: number | undefined
  parentDoc?: string | undefined
  error?: { code?: string | undefined } | undefined
}
type ErrorDOCNOTFOUND = {
  error?: string | undefined
  message?: string | undefined
  suggestion?: string | undefined
  docs?: string | undefined
  help?: string | undefined
  poem?: string[] | undefined
}
type DocSchemaPut = {
  title?: string | undefined
  type?: 'basic' | 'error' | 'link' | undefined
  body?: string | undefined
  category?: string | undefined
  hidden?: boolean | undefined
  order?: number | undefined
  parentDoc?: string | undefined
  error?: { code?: string | undefined } | undefined
  categorySlug?: string | undefined
  parentDocSlug?: string | undefined
}
type ErrorDOCINVALID = {
  error?: string | undefined
  message?: string | undefined
  suggestion?: string | undefined
  docs?: string | undefined
  help?: string | undefined
  poem?: string[] | undefined
}
type DocSchemaPost = { [x: string]: unknown } | { [x: string]: unknown }
type CondensedProjectData = {
  name?: string | undefined
  subdomain?: string | undefined
  jwtSecret?: string | undefined
  baseUrl?: string | undefined
  plan?: string | undefined
}
type Version = {
  version: string
  codename?: string | undefined
  from: string
  is_stable?: boolean | undefined
  is_beta?: boolean | undefined
  is_hidden?: boolean | undefined
  is_deprecated?: boolean | undefined
}
type ErrorVERSIONDUPLICATE = {
  error?: string | undefined
  message?: string | undefined
  suggestion?: string | undefined
  docs?: string | undefined
  help?: string | undefined
  poem?: string[] | undefined
}
type ErrorVERSIONFORKEMPTY = {
  error?: string | undefined
  message?: string | undefined
  suggestion?: string | undefined
  docs?: string | undefined
  help?: string | undefined
  poem?: string[] | undefined
}
type ErrorVERSIONFORKNOTFOUND = {
  error?: string | undefined
  message?: string | undefined
  suggestion?: string | undefined
  docs?: string | undefined
  help?: string | undefined
  poem?: string[] | undefined
}
type ErrorVERSIONCANTDEMOTESTABLE = {
  error?: string | undefined
  message?: string | undefined
  suggestion?: string | undefined
  docs?: string | undefined
  help?: string | undefined
  poem?: string[] | undefined
}
type ErrorVERSIONCANTREMOVESTABLE = {
  error?: string | undefined
  message?: string | undefined
  suggestion?: string | undefined
  docs?: string | undefined
  help?: string | undefined
  poem?: string[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api-registry/:uuid': {
      $get:
        | {
            input: { param: { uuid: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uuid: string } }
            output: ErrorREGISTRYNOTFOUND
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api-specification': {
      $get:
        | {
            input: { query: { perPage?: number | undefined; page?: number | undefined } } & {
              header: { 'x-readme-version'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { perPage?: number | undefined; page?: number | undefined } } & {
              header: { 'x-readme-version'?: string | undefined }
            }
            output: ErrorVERSIONEMPTY
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { perPage?: number | undefined; page?: number | undefined } } & {
              header: { 'x-readme-version'?: string | undefined }
            }
            output: ErrorAPIKEYEMPTY | ErrorAPIKEYNOTFOUND
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { perPage?: number | undefined; page?: number | undefined } } & {
              header: { 'x-readme-version'?: string | undefined }
            }
            output: ErrorAPIKEYMISMATCH
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { perPage?: number | undefined; page?: number | undefined } } & {
              header: { 'x-readme-version'?: string | undefined }
            }
            output: ErrorVERSIONNOTFOUND
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { header: { 'x-readme-version'?: string | undefined } } & {
              form: { spec?: File | undefined }
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'x-readme-version'?: string | undefined } } & {
              form: { spec?: File | undefined }
            }
            output:
              | ErrorSPECFILEEMPTY
              | ErrorSPECINVALID
              | ErrorSPECINVALIDSCHEMA
              | ErrorSPECVERSIONNOTFOUND
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'x-readme-version'?: string | undefined } } & {
              form: { spec?: File | undefined }
            }
            output: ErrorAPIKEYEMPTY | ErrorAPIKEYNOTFOUND
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'x-readme-version'?: string | undefined } } & {
              form: { spec?: File | undefined }
            }
            output: ErrorAPIKEYMISMATCH
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'x-readme-version'?: string | undefined } } & {
              form: { spec?: File | undefined }
            }
            output: ErrorSPECTIMEOUT
            outputFormat: 'json'
            status: 408
          }
    }
  } & {
    '/api-specification/:id': {
      $put:
        | {
            input: { param: { id: string } } & { form: { spec?: File | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { form: { spec?: File | undefined } }
            output:
              | ErrorSPECFILEEMPTY
              | ErrorSPECIDDUPLICATE
              | ErrorSPECIDINVALID
              | ErrorSPECINVALID
              | ErrorSPECINVALIDSCHEMA
              | ErrorSPECVERSIONNOTFOUND
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { form: { spec?: File | undefined } }
            output: ErrorAPIKEYEMPTY | ErrorAPIKEYNOTFOUND
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { form: { spec?: File | undefined } }
            output: ErrorAPIKEYMISMATCH
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { form: { spec?: File | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { form: { spec?: File | undefined } }
            output: ErrorSPECTIMEOUT
            outputFormat: 'json'
            status: 408
          }
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ErrorSPECIDINVALID
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorAPIKEYEMPTY | ErrorAPIKEYNOTFOUND
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorAPIKEYMISMATCH
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorSPECNOTFOUND
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/apply': {
      $get: { input: {}; output: JobOpening[]; outputFormat: 'json'; status: 200 }
      $post: { input: { json: Apply }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/categories': {
      $get: {
        input: { query: { perPage?: number | undefined; page?: number | undefined } } & {
          header: { 'x-readme-version'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post:
        | {
            input: { header: { 'x-readme-version'?: string | undefined } } & {
              json: { title?: string | undefined; type?: 'reference' | 'guide' | undefined }
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'x-readme-version'?: string | undefined } } & {
              json: { title?: string | undefined; type?: 'reference' | 'guide' | undefined }
            }
            output: ErrorCATEGORYINVALID
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/categories/:slug': {
      $get:
        | {
            input: { param: { slug: string } } & {
              header: { 'x-readme-version'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { slug: string } } & {
              header: { 'x-readme-version'?: string | undefined }
            }
            output: ErrorCATEGORYNOTFOUND
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { slug: string } } & {
              header: { 'x-readme-version'?: string | undefined }
            } & { json: Category }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { slug: string } } & {
              header: { 'x-readme-version'?: string | undefined }
            } & { json: Category }
            output: ErrorCATEGORYINVALID
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { slug: string } } & {
              header: { 'x-readme-version'?: string | undefined }
            } & { json: Category }
            output: ErrorCATEGORYNOTFOUND
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { slug: string } } & {
              header: { 'x-readme-version'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { slug: string } } & {
              header: { 'x-readme-version'?: string | undefined }
            }
            output: ErrorCATEGORYNOTFOUND
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/categories/:slug/docs': {
      $get:
        | {
            input: { param: { slug: string } } & {
              header: { 'x-readme-version'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { slug: string } } & {
              header: { 'x-readme-version'?: string | undefined }
            }
            output: ErrorCATEGORYNOTFOUND
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/changelogs': {
      $get: {
        input: { query: { perPage?: number | undefined; page?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post:
        | { input: { json: Changelog }; output: {}; outputFormat: string; status: 201 }
        | { input: { json: Changelog }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/changelogs/:slug': {
      $get:
        | { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 404 }
      $put:
        | {
            input: { param: { slug: string } } & { json: Changelog }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { slug: string } } & { json: Changelog }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { slug: string } } & { json: Changelog }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/custompages': {
      $get:
        | {
            input: { query: { perPage?: number | undefined; page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { perPage?: number | undefined; page?: number | undefined } }
            output: ErrorAPIKEYEMPTY | ErrorAPIKEYNOTFOUND
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { perPage?: number | undefined; page?: number | undefined } }
            output: ErrorAPIKEYMISMATCH
            outputFormat: 'json'
            status: 403
          }
      $post:
        | { input: { json: CustomPage }; output: {}; outputFormat: string; status: 201 }
        | {
            input: { json: CustomPage }
            output: ErrorCUSTOMPAGEINVALID
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CustomPage }
            output: ErrorAPIKEYEMPTY | ErrorAPIKEYNOTFOUND
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CustomPage }
            output: ErrorAPIKEYMISMATCH
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/custompages/:slug': {
      $get:
        | { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { slug: string } }
            output: ErrorAPIKEYEMPTY | ErrorAPIKEYNOTFOUND
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { slug: string } }
            output: ErrorAPIKEYMISMATCH
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { slug: string } }
            output: ErrorCUSTOMPAGENOTFOUND
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { slug: string } } & { json: CustomPage }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { slug: string } } & { json: CustomPage }
            output: ErrorCUSTOMPAGEINVALID
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { slug: string } } & { json: CustomPage }
            output: ErrorAPIKEYEMPTY | ErrorAPIKEYNOTFOUND
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { slug: string } } & { json: CustomPage }
            output: ErrorAPIKEYMISMATCH
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { slug: string } } & { json: CustomPage }
            output: ErrorCUSTOMPAGENOTFOUND
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { slug: string } }
            output: ErrorAPIKEYEMPTY | ErrorAPIKEYNOTFOUND
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { slug: string } }
            output: ErrorAPIKEYMISMATCH
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { slug: string } }
            output: ErrorCUSTOMPAGENOTFOUND
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/docs/:slug': {
      $get:
        | {
            input: { param: { slug: string } } & {
              header: { 'x-readme-version'?: string | undefined }
            }
            output: DocSchemaResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { slug: string } } & {
              header: { 'x-readme-version'?: string | undefined }
            }
            output: ErrorAPIKEYEMPTY | ErrorAPIKEYNOTFOUND
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { slug: string } } & {
              header: { 'x-readme-version'?: string | undefined }
            }
            output: ErrorAPIKEYMISMATCH
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { slug: string } } & {
              header: { 'x-readme-version'?: string | undefined }
            }
            output: ErrorDOCNOTFOUND
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { slug: string } } & {
              header: { 'x-readme-version'?: string | undefined }
            } & { json: DocSchemaPut }
            output: DocSchemaResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { slug: string } } & {
              header: { 'x-readme-version'?: string | undefined }
            } & { json: DocSchemaPut }
            output: ErrorDOCINVALID
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { slug: string } } & {
              header: { 'x-readme-version'?: string | undefined }
            } & { json: DocSchemaPut }
            output: ErrorAPIKEYEMPTY | ErrorAPIKEYNOTFOUND
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { slug: string } } & {
              header: { 'x-readme-version'?: string | undefined }
            } & { json: DocSchemaPut }
            output: ErrorAPIKEYMISMATCH
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { slug: string } } & {
              header: { 'x-readme-version'?: string | undefined }
            } & { json: DocSchemaPut }
            output: ErrorDOCNOTFOUND
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { slug: string } } & {
              header: { 'x-readme-version'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { slug: string } } & {
              header: { 'x-readme-version'?: string | undefined }
            }
            output: ErrorAPIKEYEMPTY | ErrorAPIKEYNOTFOUND
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { slug: string } } & {
              header: { 'x-readme-version'?: string | undefined }
            }
            output: ErrorAPIKEYMISMATCH
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { slug: string } } & {
              header: { 'x-readme-version'?: string | undefined }
            }
            output: ErrorDOCNOTFOUND
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/docs/:slug/production': {
      $get:
        | {
            input: { param: { slug: string } } & {
              header: { 'x-readme-version'?: string | undefined }
            }
            output: DocSchemaResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { slug: string } } & {
              header: { 'x-readme-version'?: string | undefined }
            }
            output: ErrorAPIKEYEMPTY | ErrorAPIKEYNOTFOUND
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { slug: string } } & {
              header: { 'x-readme-version'?: string | undefined }
            }
            output: ErrorAPIKEYMISMATCH
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { slug: string } } & {
              header: { 'x-readme-version'?: string | undefined }
            }
            output: ErrorDOCNOTFOUND
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/docs': {
      $post:
        | {
            input: { header: { 'x-readme-version'?: string | undefined } } & { json: DocSchemaPost }
            output: DocSchemaResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'x-readme-version'?: string | undefined } } & { json: DocSchemaPost }
            output: ErrorDOCINVALID
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'x-readme-version'?: string | undefined } } & { json: DocSchemaPost }
            output: ErrorAPIKEYEMPTY | ErrorAPIKEYNOTFOUND
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'x-readme-version'?: string | undefined } } & { json: DocSchemaPost }
            output: ErrorAPIKEYMISMATCH
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/docs/search': {
      $post:
        | {
            input: { query: { search: string } } & {
              header: { 'x-readme-version'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { search: string } } & {
              header: { 'x-readme-version'?: string | undefined }
            }
            output: ErrorAPIKEYEMPTY | ErrorAPIKEYNOTFOUND
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { search: string } } & {
              header: { 'x-readme-version'?: string | undefined }
            }
            output: ErrorAPIKEYMISMATCH
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/': {
      $get:
        | { input: {}; output: CondensedProjectData; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: ErrorAPIKEYEMPTY | ErrorAPIKEYNOTFOUND
            outputFormat: 'json'
            status: 401
          }
        | { input: {}; output: ErrorAPIKEYMISMATCH; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/schema': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/version': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | {
            input: {}
            output: ErrorAPIKEYEMPTY | ErrorAPIKEYNOTFOUND
            outputFormat: 'json'
            status: 401
          }
        | { input: {}; output: ErrorAPIKEYMISMATCH; outputFormat: 'json'; status: 403 }
      $post:
        | { input: { json: Version }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { json: Version }
            output: ErrorVERSIONEMPTY | ErrorVERSIONDUPLICATE | ErrorVERSIONFORKEMPTY
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: Version }
            output: ErrorAPIKEYEMPTY | ErrorAPIKEYNOTFOUND
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: Version }
            output: ErrorAPIKEYMISMATCH
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: Version }
            output: ErrorVERSIONFORKNOTFOUND
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/version/:versionId': {
      $get:
        | { input: { param: { versionId: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { versionId: string } }
            output: ErrorAPIKEYEMPTY | ErrorAPIKEYNOTFOUND
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { versionId: string } }
            output: ErrorAPIKEYMISMATCH
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { versionId: string } }
            output: ErrorVERSIONNOTFOUND
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { versionId: string } } & { json: Version }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { versionId: string } } & { json: Version }
            output: ErrorVERSIONCANTDEMOTESTABLE
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { versionId: string } } & { json: Version }
            output: ErrorAPIKEYEMPTY | ErrorAPIKEYNOTFOUND
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { versionId: string } } & { json: Version }
            output: ErrorAPIKEYMISMATCH
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { versionId: string } } & { json: Version }
            output: ErrorVERSIONNOTFOUND
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | { input: { param: { versionId: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { versionId: string } }
            output: ErrorVERSIONCANTREMOVESTABLE
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { versionId: string } }
            output: ErrorAPIKEYEMPTY | ErrorAPIKEYNOTFOUND
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { versionId: string } }
            output: ErrorAPIKEYMISMATCH
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { versionId: string } }
            output: ErrorVERSIONNOTFOUND
            outputFormat: 'json'
            status: 404
          }
    }
  },
  '/'
>
export default routes
