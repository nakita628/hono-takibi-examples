type Empty = { [x: string]: unknown }
type Metadata = { services?: string[] | undefined }
type File2 = {
  content?: string | undefined
  fingerprint?: string | undefined
  name?: string | undefined
}
type Source = { files?: File2[] | undefined }
type Ruleset = {
  createTime?: string | undefined
  metadata?: Metadata | undefined
  name?: string | undefined
  source?: Source | undefined
}
type Release = {
  createTime?: string | undefined
  name?: string | undefined
  rulesetName?: string | undefined
  updateTime?: string | undefined
}
type UpdateReleaseRequest = { release?: Release | undefined; updateMask?: string | undefined }
type ListReleasesResponse = { nextPageToken?: string | undefined; releases?: Release[] | undefined }
type ListRulesetsResponse = { nextPageToken?: string | undefined; rulesets?: Ruleset[] | undefined }
type GetReleaseExecutableResponse = {
  executable?: string | undefined
  executableVersion?:
    | 'RELEASE_EXECUTABLE_VERSION_UNSPECIFIED'
    | 'FIREBASE_RULES_EXECUTABLE_V1'
    | 'FIREBASE_RULES_EXECUTABLE_V2'
    | undefined
  language?: 'LANGUAGE_UNSPECIFIED' | 'FIREBASE_RULES' | 'EVENT_FLOW_TRIGGERS' | undefined
  rulesetName?: string | undefined
  syncTime?: string | undefined
  updateTime?: string | undefined
}
type Arg = { anyValue?: Empty | undefined; exactValue?: { [x: string]: unknown } | undefined }
type Result = { undefined?: Empty | undefined; value?: { [x: string]: unknown } | undefined }
type FunctionMock = {
  args?: Arg[] | undefined
  function?: string | undefined
  result?: Result | undefined
}
type TestCase = {
  expectation?: 'EXPECTATION_UNSPECIFIED' | 'ALLOW' | 'DENY' | undefined
  expressionReportLevel?: 'LEVEL_UNSPECIFIED' | 'NONE' | 'FULL' | 'VISITED' | undefined
  functionMocks?: FunctionMock[] | undefined
  pathEncoding?: 'ENCODING_UNSPECIFIED' | 'URL_ENCODED' | 'PLAIN' | undefined
  request?: { [x: string]: unknown } | undefined
  resource?: { [x: string]: unknown } | undefined
}
type TestSuite = { testCases?: TestCase[] | undefined }
type TestRulesetRequest = { source?: Source | undefined; testSuite?: TestSuite | undefined }
type SourcePosition = {
  column?: number | undefined
  currentOffset?: number | undefined
  endOffset?: number | undefined
  fileName?: string | undefined
  line?: number | undefined
}
type Issue = {
  description?: string | undefined
  severity?: 'SEVERITY_UNSPECIFIED' | 'DEPRECATION' | 'WARNING' | 'ERROR' | undefined
  sourcePosition?: SourcePosition | undefined
}
type ValueCount = { count?: number | undefined; value?: { [x: string]: unknown } | undefined }
type ExpressionReport = {
  children?: ExpressionReport[] | undefined
  sourcePosition?: SourcePosition | undefined
  values?: ValueCount[] | undefined
}
type FunctionCall = { args?: { [x: string]: unknown }[] | undefined; function?: string | undefined }
type VisitedExpression = {
  sourcePosition?: SourcePosition | undefined
  value?: { [x: string]: unknown } | undefined
}
type TestResult = {
  debugMessages?: string[] | undefined
  errorPosition?: SourcePosition | undefined
  expressionReports?: ExpressionReport[] | undefined
  functionCalls?: FunctionCall[] | undefined
  state?: 'STATE_UNSPECIFIED' | 'SUCCESS' | 'FAILURE' | undefined
  visitedExpressions?: VisitedExpression[] | undefined
}
type TestRulesetResponse = { issues?: Issue[] | undefined; testResults?: TestResult[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Ruleset
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: UpdateReleaseRequest }
        output: Release
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name/releases': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListReleasesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Release }
        output: Release
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name/rulesets': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListRulesetsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Ruleset }
        output: Ruleset
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:getExecutable': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            executableVersion?:
              | 'RELEASE_EXECUTABLE_VERSION_UNSPECIFIED'
              | 'FIREBASE_RULES_EXECUTABLE_V1'
              | 'FIREBASE_RULES_EXECUTABLE_V2'
              | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GetReleaseExecutableResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:test': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: TestRulesetRequest }
        output: TestRulesetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
