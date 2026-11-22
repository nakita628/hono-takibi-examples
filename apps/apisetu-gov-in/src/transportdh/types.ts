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
type DrivingLicenseSchema = {
  CertificateData: {
    DrivingLicense?:
      | {
          abbreviation: string
          code: string
          description: string
          endorseDate: string
          issueDate: string
        }
      | undefined
  }
  IssuedBy: {
    Organization: {
      Address: {
        country: string
        district: string
        house: string
        landmark: string
        line1: string
        line2: string
        locality: string
        pin: string
        state: string
        type: string
        vtc: string
      }
      code: string
      name: string
      tin: string
      type: string
      uid: string
    }
  }
  IssuedTo: {
    Person: {
      Address: {
        country: string
        district: string
        house: string
        landmark: string
        line1: string
        line2: string
        locality: string
        pin: string
        state: string
        type: string
        vtc: string
      }
      Photo: { format: string }
      dob: string
      email: string
      gender: string
      maritalStatus: string
      name: string
      phone: string
      religion: string
      swd: string
      swdIndicator: string
      title: string
      uid: string
    }
  }
  expiryDate?: string | undefined
  issueDate: string
  issuedAt: string
  language: string
  name: string
  number: number
  prevNumber?: number | undefined
  status: string
  type: string
  validFromDate: string
}
type VehicleRegistrationSchema = {
  CertificateData: {
    VehicleRegistration?:
      | {
          Insurance?:
            | {
                companyName?: string | undefined
                policyNo?: string | undefined
                validTill?: string | undefined
              }
            | undefined
          Vehicle?:
            | {
                chasisNo?: string | undefined
                class?: { [x: string]: unknown } | undefined
                color?: string | undefined
                cubicCapacity?: { [x: string]: unknown } | undefined
                cylinder?: { [x: string]: unknown } | undefined
                engineNo?: string | undefined
                fitTill?: { [x: string]: unknown } | undefined
                fuelDesc?: { [x: string]: unknown } | undefined
                make?: { [x: string]: unknown } | undefined
                mfgDate?: { [x: string]: unknown } | undefined
                model?: string | undefined
                seatCapacity?: string | undefined
                sleeperCapacity?: string | undefined
                standingCapacity?: { [x: string]: unknown } | undefined
                unladenWeight?: string | undefined
                wheelbase?: { [x: string]: unknown } | undefined
              }
            | undefined
          financer: string
          normsDesc: string
          statusDate: string
        }
      | undefined
  }
  IssuedBy: {
    Organization: {
      Address: {
        country: string
        district: string
        house: string
        landmark: string
        line1: string
        line2: string
        locality: string
        pin: string
        state: string
        type: string
        vtc: string
      }
      code: string
      name: string
      tin: string
      type: string
      uid: string
    }
  }
  IssuedTo: {
    Person: {
      Address: {
        country: string
        district: string
        house: string
        landmark: string
        line1: string
        line2: string
        locality: string
        pin: string
        state: string
        type: string
        vtc: string
      }
      Photo: { format: string }
      dob: string
      email: string
      gender: string
      maritalStatus: string
      name: string
      phone: string
      religion: string
      swd: string
      swdIndicator: string
      title: string
      uid: string
    }
  }
  expiryDate?: string | undefined
  issueDate: string
  issuedAt: string
  language: string
  name: string
  number: number
  status: string
  type: string
  validFromDate: string
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/drvlc/certificate': {
      $post:
        | {
            input: {
              json: {
                certificateParameters?:
                  | { DOB: string; FullName: string; UID: string; dlno: string }
                  | undefined
                consentArtifact?: ConsentArtifactSchema | undefined
                format: 'xml' | 'pdf'
                txnId: string
              }
            }
            output: DrivingLicenseSchema
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: {
                certificateParameters?:
                  | { DOB: string; FullName: string; UID: string; dlno: string }
                  | undefined
                consentArtifact?: ConsentArtifactSchema | undefined
                format: 'xml' | 'pdf'
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
                certificateParameters?:
                  | { DOB: string; FullName: string; UID: string; dlno: string }
                  | undefined
                consentArtifact?: ConsentArtifactSchema | undefined
                format: 'xml' | 'pdf'
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
                certificateParameters?:
                  | { DOB: string; FullName: string; UID: string; dlno: string }
                  | undefined
                consentArtifact?: ConsentArtifactSchema | undefined
                format: 'xml' | 'pdf'
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
                certificateParameters?:
                  | { DOB: string; FullName: string; UID: string; dlno: string }
                  | undefined
                consentArtifact?: ConsentArtifactSchema | undefined
                format: 'xml' | 'pdf'
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
                certificateParameters?:
                  | { DOB: string; FullName: string; UID: string; dlno: string }
                  | undefined
                consentArtifact?: ConsentArtifactSchema | undefined
                format: 'xml' | 'pdf'
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
                certificateParameters?:
                  | { DOB: string; FullName: string; UID: string; dlno: string }
                  | undefined
                consentArtifact?: ConsentArtifactSchema | undefined
                format: 'xml' | 'pdf'
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
                certificateParameters?:
                  | { DOB: string; FullName: string; UID: string; dlno: string }
                  | undefined
                consentArtifact?: ConsentArtifactSchema | undefined
                format: 'xml' | 'pdf'
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
    '/rvcer/certificate': {
      $post:
        | {
            input: {
              json: {
                certificateParameters?:
                  | { FullName: string; UID: string; chasis_no: string; reg_no: string }
                  | undefined
                consentArtifact?: ConsentArtifactSchema | undefined
                format: 'xml' | 'pdf'
                txnId: string
              }
            }
            output: VehicleRegistrationSchema
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: {
                certificateParameters?:
                  | { FullName: string; UID: string; chasis_no: string; reg_no: string }
                  | undefined
                consentArtifact?: ConsentArtifactSchema | undefined
                format: 'xml' | 'pdf'
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
                certificateParameters?:
                  | { FullName: string; UID: string; chasis_no: string; reg_no: string }
                  | undefined
                consentArtifact?: ConsentArtifactSchema | undefined
                format: 'xml' | 'pdf'
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
                certificateParameters?:
                  | { FullName: string; UID: string; chasis_no: string; reg_no: string }
                  | undefined
                consentArtifact?: ConsentArtifactSchema | undefined
                format: 'xml' | 'pdf'
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
                certificateParameters?:
                  | { FullName: string; UID: string; chasis_no: string; reg_no: string }
                  | undefined
                consentArtifact?: ConsentArtifactSchema | undefined
                format: 'xml' | 'pdf'
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
                certificateParameters?:
                  | { FullName: string; UID: string; chasis_no: string; reg_no: string }
                  | undefined
                consentArtifact?: ConsentArtifactSchema | undefined
                format: 'xml' | 'pdf'
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
                certificateParameters?:
                  | { FullName: string; UID: string; chasis_no: string; reg_no: string }
                  | undefined
                consentArtifact?: ConsentArtifactSchema | undefined
                format: 'xml' | 'pdf'
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
                certificateParameters?:
                  | { FullName: string; UID: string; chasis_no: string; reg_no: string }
                  | undefined
                consentArtifact?: ConsentArtifactSchema | undefined
                format: 'xml' | 'pdf'
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
