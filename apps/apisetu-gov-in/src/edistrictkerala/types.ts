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
    '/cmcer/certificate': {
      $post:
        | {
            input: {
              json: {
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
  } & {
    '/cncer/certificate': {
      $post:
        | {
            input: {
              json: {
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
  } & {
    '/ctcer/certificate': {
      $post:
        | {
            input: {
              json: {
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
  } & {
    '/dmcer/certificate': {
      $post:
        | {
            input: {
              json: {
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
  } & {
    '/dpcer/certificate': {
      $post:
        | {
            input: {
              json: {
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
  } & {
    '/dscer/certificate': {
      $post:
        | {
            input: {
              json: {
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
  } & {
    '/fmcer/certificate': {
      $post:
        | {
            input: {
              json: {
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
  } & {
    '/idcer/certificate': {
      $post:
        | {
            input: {
              json: {
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
  } & {
    '/imcer/certificate': {
      $post:
        | {
            input: {
              json: {
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
  } & {
    '/incer/certificate': {
      $post:
        | {
            input: {
              json: {
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
  } & {
    '/lfcer/certificate': {
      $post:
        | {
            input: {
              json: {
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
  } & {
    '/lhcer/certificate': {
      $post:
        | {
            input: {
              json: {
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
  } & {
    '/locer/certificate': {
      $post:
        | {
            input: {
              json: {
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
  } & {
    '/mncer/certificate': {
      $post:
        | {
            input: {
              json: {
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
  } & {
    '/nrcer/certificate': {
      $post:
        | {
            input: {
              json: {
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
  } & {
    '/ntcer/certificate': {
      $post:
        | {
            input: {
              json: {
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
  } & {
    '/oscer/certificate': {
      $post:
        | {
            input: {
              json: {
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
  } & {
    '/pncer/certificate': {
      $post:
        | {
            input: {
              json: {
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
  } & {
    '/pscer/certificate': {
      $post:
        | {
            input: {
              json: {
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
  } & {
    '/rlcer/certificate': {
      $post:
        | {
            input: {
              json: {
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
  } & {
    '/rscer/certificate': {
      $post:
        | {
            input: {
              json: {
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
  } & {
    '/slcer/certificate': {
      $post:
        | {
            input: {
              json: {
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
  } & {
    '/vlcer/certificate': {
      $post:
        | {
            input: {
              json: {
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
  } & {
    '/wwcer/certificate': {
      $post:
        | {
            input: {
              json: {
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
                certificateParameters?: { aplno: string; certno: string; sccd: string } | undefined
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
