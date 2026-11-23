type ApiResponse = { page?: string | undefined; status?: string | undefined }
type Findings = {
  confidence?: string | undefined
  description?: string | undefined
  issue_id?: number | undefined
  meta_links?: string[] | undefined
  meta_risk?:
    | {
        cvss_base_score?: string[] | undefined
        cvss_vector?: string[] | undefined
        exploit_available?: string[] | undefined
        exploitability_ease?: string[] | undefined
        patch_publication_date?: string[] | undefined
      }
    | undefined
  meta_tags?: string[] | undefined
  meta_vuln_refs?:
    | {
        bid?: string[] | undefined
        cpe?: string[] | undefined
        cve?: string[] | undefined
        cwe?: string[] | undefined
      }
    | undefined
  raw?: string | undefined
  severity?: 'info' | 'low' | 'medium' | 'high' | undefined
  solution?: string | undefined
  target_addrs?: string[] | undefined
  target_proto?: string[] | undefined
  timestamp?: string | undefined
  title?: string | undefined
  type?: string | undefined
}[]
type ScanDefinition = {
  assets?:
    | {
        criticity?: 'low' | 'medium' | 'high' | undefined
        datatype?:
          | 'ip'
          | 'ip-range'
          | 'ip-subnet'
          | 'fqdn'
          | 'domain'
          | 'url'
          | 'keyword'
          | 'person'
          | 'organisation'
          | 'path'
          | 'application'
          | undefined
        id?: string | undefined
        value?: string | undefined
      }[]
    | undefined
  options?: { [x: string]: unknown } | undefined
  scan_id?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  { '/': { $get: { input: {}; output: ApiResponse; outputFormat: 'json'; status: 200 } } } & {
    '/clean': { $get: { input: {}; output: ApiResponse; outputFormat: 'json'; status: 200 } }
  } & {
    '/clean/:scanId': {
      $get: {
        input: { param: { scanId: number } }
        output: ApiResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/getfindings/:scanId': {
      $get: {
        input: { param: { scanId: number } }
        output: Findings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/info': { $get: { input: {}; output: ApiResponse; outputFormat: 'json'; status: 200 } }
  } & { '/liveness': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/readiness': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/reloadconfig': { $get: { input: {}; output: ApiResponse; outputFormat: 'json'; status: 200 } }
  } & {
    '/startscan': {
      $post: {
        input: { json: ScanDefinition }
        output: ApiResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/status': { $get: { input: {}; output: ApiResponse; outputFormat: 'json'; status: 200 } }
  } & {
    '/status/:scanId': {
      $get: {
        input: { param: { scanId: number } }
        output: ApiResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/stop/:scanId': {
      $get: {
        input: { param: { scanId: number } }
        output: ApiResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/stopscans': { $get: { input: {}; output: ApiResponse; outputFormat: 'json'; status: 200 } }
  } & { '/test': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } },
  '/'
>
export default routes
