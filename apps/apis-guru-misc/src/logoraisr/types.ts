type PreviewResponse = { preview_img_url?: string | undefined }
type Process = {
  crop?: string | undefined
  flip?: boolean | undefined
  mirror?: boolean | undefined
  processing_algorithm: string
  resize?: string | undefined
  rotate?: number | undefined
}
type Project = {
  created?: string | undefined
  file_id?: string | undefined
  id?: number | undefined
  paypal_payment_id?: string | undefined
  process?: Process | undefined
  process_id: string
  project_number?: number | undefined
  project_title?: string | undefined
  result_file_id?: string | undefined
}
type ProjectRequest = { file_id: string; process?: Process | undefined; project_title: string }
type ProjectResponse = {
  project_id?: number | undefined
  project_number?: number | undefined
  result_file_id?: string | undefined
}
type Color = {
  blue?: number | undefined
  green?: number | undefined
  hex?: string | undefined
  number_of_pixel?: number | undefined
  percentage?: string | undefined
  red?: number | undefined
}
type Result = {
  colors?: Color[] | undefined
  height?: number | undefined
  number_of_pixel_in_image?: number | undefined
  width?: number | undefined
}
type Report = {
  created?: string | undefined
  file_id: string
  process_id: number
  report_number: number
  result?: Result | undefined
  result_id: number
}
type ReportRequest = { file_id: string; process: string }
type ReportResponse = {
  created?: string | undefined
  file_id?: string | undefined
  processing_algorithm?: string | undefined
  report_number?: number | undefined
  result?: Result | undefined
}
type ResultResponse = { result_file_url?: string | undefined }
type FileResponse = { file_id?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/previews/:file_id/': {
      $get:
        | {
            input: { param: { file_id: string } }
            output: PreviewResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { file_id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { file_id: string } }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/processes/': { $get: { input: {}; output: Process; outputFormat: 'json'; status: 200 } }
  } & {
    '/projects/': {
      $get:
        | { input: {}; output: Project; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
      $post:
        | {
            input: { json: ProjectRequest }
            output: ProjectResponse
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: ProjectRequest }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: ProjectRequest }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: ProjectRequest }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/projects/:project_number/': {
      $get:
        | {
            input: { param: { project_number: string } }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_number: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { project_number: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/reports/': {
      $get:
        | { input: {}; output: Report; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
      $post:
        | {
            input: { json: ReportRequest }
            output: ReportResponse
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: ReportRequest }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: ReportRequest }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: ReportRequest }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/reports/:report_number/': {
      $get:
        | {
            input: { param: { report_number: string } }
            output: Report
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { report_number: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { report_number: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/results/:result_file_id/': {
      $get:
        | {
            input: { param: { result_file_id: string } }
            output: ResultResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { result_file_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { result_file_id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/uploads/': {
      $post:
        | {
            input: { form: { file: File } }
            output: FileResponse
            outputFormat: 'json'
            status: 201
          }
        | { input: { form: { file: File } }; output: {}; outputFormat: string; status: 400 }
    }
  },
  '/'
>
export default routes
