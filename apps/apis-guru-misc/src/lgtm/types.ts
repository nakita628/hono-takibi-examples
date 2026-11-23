type Version = { apiVersion?: string | undefined }
type LanguageStats = {
  alerts?: number | undefined
  'analysis-date'?: string | undefined
  'commit-date'?: string | undefined
  'commit-id'?: string | undefined
  language?: string | undefined
  lines?: number | undefined
  status?: 'success' | 'failure' | 'pending' | undefined
}
type Project = {
  id?: bigint | undefined
  name?: string | undefined
  url?: string | undefined
  'url-identifier'?: string | undefined
}
type Analysis = {
  'commit-id'?: string | undefined
  id?: string | undefined
  languages?: LanguageStats[] | undefined
  'log-url'?: string | undefined
  project?: Project | undefined
  'results-url'?: string | undefined
}
type QueryProperties = {
  id?: string | undefined
  name?: string | undefined
  severity?: string | undefined
  tags?: string[] | undefined
}
type Query = {
  id?: bigint | undefined
  language?: string | undefined
  name?: string | undefined
  pack?: string | undefined
  properties?: QueryProperties | undefined
  url?: string | undefined
}
type CodereviewAlerts = {
  fixed?: number | undefined
  new?: number | undefined
  query?: Query | undefined
}
type CodereviewLanguages = {
  alerts?: CodereviewAlerts[] | undefined
  fixed?: number | undefined
  language?: string | undefined
  new?: number | undefined
  status?: 'pending' | 'failure' | 'success' | undefined
  'status-message'?: string | undefined
}
type CodeReview = {
  id?: string | undefined
  languages?: CodereviewLanguages[] | undefined
  'results-url'?: string | undefined
  status?: 'pending' | 'failure' | 'success' | undefined
  'status-message'?: string | undefined
}
type QueryjobStats = {
  failed?: number | undefined
  pending?: number | undefined
  'success-with-result'?: number | undefined
  'success-without-result'?: number | undefined
  successful?: number | undefined
}
type Queryjob = {
  id?: string | undefined
  'result-url'?: string | undefined
  stats?: QueryjobStats | undefined
}
type UploadSession = { id?: string | undefined; url?: string | undefined }
type Operation = {
  id?: bigint | undefined
  status?: 'pending' | 'done' | undefined
  'task-result'?: Analysis | CodeReview | Queryjob | undefined
  'task-result-url'?: string | undefined
  'task-type': 'analysis' | 'codereview' | 'queryjob'
  uploads?: { [x: string]: UploadSession } | undefined
}
type ProjectList = { data?: Project[] | undefined; nextPageUrl?: string | undefined }
type ProjectLanguageStats = {
  alerts?: number | undefined
  'analysis-date'?: string | undefined
  'commit-date'?: string | undefined
  'commit-id'?: string | undefined
  language?: string | undefined
  lines?: number | undefined
  status?: 'success' | 'failure' | 'pending' | undefined
  grade?: 'A+' | 'A' | 'B' | 'C' | 'D' | 'E' | undefined
}
type ProjectDetails = {
  id?: bigint | undefined
  name?: string | undefined
  url?: string | undefined
  'url-identifier'?: string | undefined
  languages?: ProjectLanguageStats[] | undefined
}
type QueryjobResultsOverviewEntry = {
  error?: string | undefined
  external?: number | undefined
  internal?: number | undefined
  project?: Project | undefined
  status?: 'success' | 'error' | undefined
  total?: number | undefined
}
type QueryjobResultsOverview = {
  data?: QueryjobResultsOverviewEntry[] | undefined
  next?: string | undefined
}
type QueryResultEntry = {
  file?: string | undefined
  line?: number | undefined
  url?: string | undefined
  value?: string | undefined
}
type QueryjobProjectResults = {
  columns?: string[] | undefined
  data?: QueryResultEntry[][] | undefined
  next?: string | undefined
  project?: Project | undefined
}
type Health = {
  description?: string | undefined
  details?: { [x: string]: Health } | undefined
  status?: 'UNKNOWN' | 'UP' | 'DOWN' | undefined
}
type MetricName = { description?: string | undefined; 'metric-id'?: string | undefined }
type MetricsList = { data?: MetricName[] | undefined }
type Measurement = { timestamp?: string | undefined; value?: number | undefined }
type Metric = { measurements?: Measurement[] | undefined; 'metric-id'?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  { '/': { $get: { input: {}; output: Version; outputFormat: 'json'; status: 200 } } } & {
    '/analyses/:analysis-id': {
      $get: {
        input: { param: { 'analysis-id': string } }
        output: Analysis
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/analyses/:analysis-id/alerts': {
      $get:
        | {
            input: { param: { 'analysis-id': string } } & {
              query: {
                'sarif-version'?: string | undefined
                'excluded-files'?: boolean | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'analysis-id': string } } & {
              query: {
                'sarif-version'?: string | undefined
                'excluded-files'?: boolean | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'analysis-id': string } } & {
              query: {
                'sarif-version'?: string | undefined
                'excluded-files'?: boolean | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/analyses/:project-id': {
      $post: {
        input: { param: { 'project-id': bigint } } & {
          query: { commit: string; language?: string[] | undefined }
        }
        output: Operation
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/analyses/:project-id/commits/:commit-id': {
      $get: {
        input: { param: { 'project-id': bigint; 'commit-id': string } }
        output: Analysis
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/codereviews/:project-id': {
      $post: {
        input: { param: { 'project-id': bigint } } & {
          query: {
            base: string
            'external-id': number
            'review-url'?: string | undefined
            'callback-url'?: string | undefined
            'callback-secret'?: string | undefined
          }
        } & { json: File }
        output: Operation
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/codereviews/:review-id': {
      $get: {
        input: { param: { 'review-id': string } }
        output: CodeReview[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/issues/:project-id/:alert-key': {
      $get: {
        input: { param: { 'project-id': bigint; 'alert-key': string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/openapi': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/operations/:operation-id': {
      $get: {
        input: { param: { 'operation-id': bigint } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/projects': {
      $get: {
        input: { query: { limit?: number | undefined; start?: string | undefined } }
        output: ProjectList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            repository: string
            language?: string[] | undefined
            mode?: 'full' | 'sparse' | 'upload' | undefined
            commit?: string | undefined
            date?: string | undefined
            'worker-label'?: string[] | undefined
          }
        } & { json: string }
        output: Operation
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/projects/:project-id': {
      $delete: {
        input: { param: { 'project-id': bigint } }
        output: ProjectDetails
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { 'project-id': bigint } }
        output: ProjectDetails
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/projects/:project-id/settings/analysis-configuration': {
      $get:
        | {
            input: { param: { 'project-id': bigint } } & {
              query: { source?: 'repository' | 'administrator' | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { 'project-id': bigint } } & {
              query: { source?: 'repository' | 'administrator' | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
      $put: {
        input: { param: { 'project-id': bigint } } & { json: string }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/projects/:provider/:org/:name': {
      $get:
        | {
            input: { param: { provider: string; org: string; name: string } }
            output: ProjectDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { provider: string; org: string; name: string } }
            output: {}
            outputFormat: string
            status: 307
          }
    }
  } & {
    '/queryjobs': {
      $post: {
        input: {
          query: {
            language: string
            'project-id'?: bigint[] | undefined
            'projects-list'?: string | undefined
          }
        } & { json: string }
        output: Operation
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/queryjobs/:queryjob-id': {
      $get: {
        input: { param: { 'queryjob-id': string } }
        output: Queryjob
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/queryjobs/:queryjob-id/results': {
      $get: {
        input: { param: { 'queryjob-id': string } } & {
          query: {
            start?: string | undefined
            limit?: number | undefined
            filter?: string | undefined
          }
        }
        output: QueryjobResultsOverview
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/queryjobs/:queryjob-id/results/:project-id': {
      $get: {
        input: { param: { 'queryjob-id': string; 'project-id': string } } & {
          query: {
            start?: number | undefined
            limit?: number | undefined
            nofilter?: boolean | undefined
          }
        }
        output: QueryjobProjectResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/snapshots/uploads/:session-id': {
      $delete: {
        input: { param: { 'session-id': string } }
        output: Operation
        outputFormat: 'json'
        status: 202
      }
      $post: {
        input: { param: { 'session-id': string } }
        output: Operation
        outputFormat: 'json'
        status: 202
      }
      $put: {
        input: { param: { 'session-id': string } } & { json: File }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/snapshots/:project-id/:language': {
      $get: {
        input: { param: { 'project-id': bigint; language: string } }
        output: {}
        outputFormat: string
        status: 303
      }
      $post: {
        input: { param: { 'project-id': bigint; language: string } } & {
          query: { commit: string; date?: string | undefined }
        }
        output: UploadSession
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/system/health': {
      $get:
        | { input: {}; output: Health; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Health; outputFormat: 'json'; status: 503 }
    }
  } & {
    '/system/metrics': {
      $get: { input: {}; output: MetricsList; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/system/metrics/:metric-id': {
      $get: {
        input: { param: { 'metric-id': string } }
        output: Metric
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
