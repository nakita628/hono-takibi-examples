type JobSubmitRequest = {
  entrypoint: string
  submission_id?: string | undefined
  job_id?: string | undefined
  runtime_env?: { [x: string]: unknown } | undefined
  metadata?: { [x: string]: string } | undefined
  entrypoint_num_cpus?: number | undefined
  entrypoint_num_gpus?: number | undefined
  entrypoint_memory?: number | undefined
  entrypoint_resources?: { [x: string]: number } | undefined
}
type JobSubmitResponse = { job_id?: string | undefined; submission_id?: string | undefined }
type JobDetails = {
  type: {}
  entrypoint: string
  job_id?: (string | null) | undefined
  submission_id?: (string | null) | undefined
  driver_info?: { id: string; node_ip_address: string; pid: string } | undefined
  status: {}
  message?: (string | null) | undefined
  error_type?: (string | null) | undefined
  start_time?: (number | null) | undefined
  end_time?: (number | null) | undefined
  metadata?: ({ [x: string]: string } | null) | undefined
  runtime_env?: ({ [x: string]: unknown } | null) | undefined
  driver_agent_http_address?: (string | null) | undefined
  driver_node_id?: (string | null) | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/version': {
      $get: {
        input: {}
        output: {
          version?: string | undefined
          ray_version?: string | undefined
          ray_commit?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/jobs': {
      $post:
        | {
            input: { json: JobSubmitRequest }
            output: JobSubmitResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: JobSubmitRequest }; output: string; outputFormat: 'text'; status: 400 }
        | { input: { json: JobSubmitRequest }; output: string; outputFormat: 'text'; status: 500 }
      $get: { input: {}; output: JobDetails[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/jobs/:submission_id': {
      $get:
        | {
            input: { param: { submission_id: string } }
            output: JobDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { submission_id: string } }
            output: string
            outputFormat: 'text'
            status: 404
          }
      $delete:
        | {
            input: { param: { submission_id: string } }
            output: { deleted?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { submission_id: string } }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { submission_id: string } }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { submission_id: string } }
            output: string
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/jobs/:submission_id/stop': {
      $post:
        | {
            input: { param: { submission_id: string } }
            output: { stopped?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { submission_id: string } }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { submission_id: string } }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { submission_id: string } }
            output: string
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/jobs/:submission_id/logs': {
      $get:
        | {
            input: { param: { submission_id: string } }
            output: { logs?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { submission_id: string } }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { submission_id: string } }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { submission_id: string } }
            output: string
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/jobs/:submission_id/logs/tail': {
      $get:
        | {
            input: { param: { submission_id: string } }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { submission_id: string } }
            output: string
            outputFormat: 'text'
            status: 404
          }
    }
  },
  '/'
>
export default routes
