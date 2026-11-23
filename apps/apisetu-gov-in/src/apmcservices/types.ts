type ConsentArtifactSchema = {
  consent: {
    consentId: string
    data: { id: string }
    dataConsumer: { id: string }
    dataProvider: { id: string }
    permission: {
      access: string
      dateRange: { from: string; to: string }
      frequency: { repeats: number; unit: string; value: number }
    }
    purpose: { description: string }
    timestamp: string
    user: { email: string; idNumber: string; idType: string; mobile: string }
  }
  signature: { signature: string }
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/apmcl/certificate': {
      $post:
        | {
            input: {
              json: {
                certificateParameters?: { DocumentNumber: string } | undefined
                consentArtifact?: ConsentArtifactSchema | undefined
                format: 'pdf'
                txnId: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              json: {
                certificateParameters?: { DocumentNumber: string } | undefined
                consentArtifact?: ConsentArtifactSchema | undefined
                format: 'pdf'
                txnId: string
              }
            }
            output: {
              error?:
                | 'missing_parameter'
                | 'invalid_parameter'
                | 'invalid_format'
                | 'invalid_txnid'
                | 'invalid_consentid'
                | undefined
              errorDescription?:
                | 'Please provide all mandatory parameters'
                | 'Bad request'
                | 'The format parameter is invalid'
                | 'The txnId parameter must be in UUID format'
                | 'The consentId parameter must be in UUID format'
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                certificateParameters?: { DocumentNumber: string } | undefined
                consentArtifact?: ConsentArtifactSchema | undefined
                format: 'pdf'
                txnId: string
              }
            }
            output: {
              error?: 'invalid_authentication' | 'invalid_authorization' | undefined
              errorDescription?:
                | 'Authentication failed'
                | 'You are not authorized to use this API'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                certificateParameters?: { DocumentNumber: string } | undefined
                consentArtifact?: ConsentArtifactSchema | undefined
                format: 'pdf'
                txnId: string
              }
            }
            output: {
              error?: 'record_not_found' | 'url_not_found' | undefined
              errorDescription?: 'No record found' | 'Your API url or path is incorrect' | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                certificateParameters?: { DocumentNumber: string } | undefined
                consentArtifact?: ConsentArtifactSchema | undefined
                format: 'pdf'
                txnId: string
              }
            }
            output: {
              error?: 'internal_server_error' | undefined
              errorDescription?: 'Internal server error' | undefined
            }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                certificateParameters?: { DocumentNumber: string } | undefined
                consentArtifact?: ConsentArtifactSchema | undefined
                format: 'pdf'
                txnId: string
              }
            }
            output: {
              error?: 'bad_gatewy' | undefined
              errorDescription?: 'Publisher service returned an invalid response' | undefined
            }
            outputFormat: 'json'
            status: 502
          }
        | {
            input: {
              json: {
                certificateParameters?: { DocumentNumber: string } | undefined
                consentArtifact?: ConsentArtifactSchema | undefined
                format: 'pdf'
                txnId: string
              }
            }
            output: {
              error?: 'service_unavailable' | undefined
              errorDescription?: 'Publisher service is temporarily unavailable' | undefined
            }
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              json: {
                certificateParameters?: { DocumentNumber: string } | undefined
                consentArtifact?: ConsentArtifactSchema | undefined
                format: 'pdf'
                txnId: string
              }
            }
            output: {
              error?: 'gateway_timeout' | undefined
              errorDescription?: 'Publisher service did not respond in time' | undefined
            }
            outputFormat: 'json'
            status: 504
          }
    }
  },
  '/'
>
export default routes
