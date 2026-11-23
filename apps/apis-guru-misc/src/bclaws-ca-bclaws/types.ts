declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/content/:aspectId': {
      $get: {
        input: {
          param: {
            aspectId:
              | 'complete'
              | 'corpreg'
              | 'bcgaz1'
              | 'bcgaz2'
              | 'oic'
              | 'psl'
              | 'ecb'
              | 'hscr'
              | 'arch_oic'
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/content/:aspectId/:civixDocumentId': {
      $get: {
        input: {
          param: {
            aspectId:
              | 'complete'
              | 'corpreg'
              | 'bcgaz1'
              | 'bcgaz2'
              | 'oic'
              | 'psl'
              | 'ecb'
              | 'hscr'
              | 'arch_oic'
            civixDocumentId: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/document/id/:aspectId/:civixIndexId/:civixDocumentId': {
      $get: {
        input: {
          param: {
            aspectId:
              | 'complete'
              | 'corpreg'
              | 'bcgaz1'
              | 'bcgaz2'
              | 'oic'
              | 'psl'
              | 'ecb'
              | 'hscr'
              | 'arch_oic'
            civixIndexId: string
            civixDocumentId: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/document/id/:aspectId/:civixIndexId/:civixDocumentId/search/:searchString': {
      $get: {
        input: {
          param: {
            aspectId:
              | 'complete'
              | 'corpreg'
              | 'bcgaz1'
              | 'bcgaz2'
              | 'oic'
              | 'psl'
              | 'ecb'
              | 'hscr'
              | 'arch_oic'
            civixIndexId: string
            civixDocumentId: string
            searchString: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/document/id/:aspectId/:civixIndexId/:civixDocumentId/xml': {
      $get: {
        input: {
          param: {
            aspectId:
              | 'complete'
              | 'corpreg'
              | 'bcgaz1'
              | 'bcgaz2'
              | 'oic'
              | 'psl'
              | 'ecb'
              | 'hscr'
              | 'arch_oic'
            civixIndexId: string
            civixDocumentId: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/document/id/:aspectId/:civixIndexId/:civixDocumentId/xml/search/:searchString': {
      $get: {
        input: {
          param: {
            aspectId:
              | 'complete'
              | 'corpreg'
              | 'bcgaz1'
              | 'bcgaz2'
              | 'oic'
              | 'psl'
              | 'ecb'
              | 'hscr'
              | 'arch_oic'
            civixIndexId: string
            civixDocumentId: string
            searchString: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/search/:aspectId/fullsearch': {
      $get: {
        input: {
          param: {
            aspectId:
              | 'complete'
              | 'corpreg'
              | 'bcgaz1'
              | 'bcgaz2'
              | 'oic'
              | 'psl'
              | 'ecb'
              | 'hscr'
              | 'arch_oic'
          }
        } & { query: { q: string; s: string; e: number; nFrag: number; lFrag: number } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
