type ContactIdResponse = { contactId?: {} | undefined }
type InvalidParameterException = { [x: string]: unknown }
type DependencyException = { [x: string]: unknown }
type ResourceNotFoundException = { [x: string]: unknown }
type DescribeContactResponse = {
  contactId?: {} | undefined
  contactStatus?: {} | undefined
  dataflowList?: {} | undefined
  endTime?: {} | undefined
  errorMessage?: {} | undefined
  groundStation?: {} | undefined
  maximumElevation?: { unit: {}; value: {} } | undefined
  missionProfileArn?: {} | undefined
  postPassEndTime?: {} | undefined
  prePassStartTime?: {} | undefined
  region?: {} | undefined
  satelliteArn?: {} | undefined
  startTime?: {} | undefined
  tags?: {} | undefined
}
type String = string
type ConfigIdResponse = {
  configArn?: {} | undefined
  configId?: {} | undefined
  configType?: {} | undefined
}
type ResourceLimitExceededException = { [x: string]: unknown }
type ListConfigsResponse = { configList?: {} | undefined; nextToken?: {} | undefined }
type EndpointDetails = {
  awsGroundStationAgentEndpoint?:
    | {
        agentStatus?: {} | undefined
        auditResults?: {} | undefined
        egressAddress: { mtu?: {} | undefined; socketAddress: { name: {}; port: {} } }
        ingressAddress: {
          mtu?: {} | undefined
          socketAddress: { name: {}; portRange: { maximum: {}; minimum: {} } }
        }
        name: {}
      }
    | undefined
  endpoint?:
    | {
        address?: { name: {}; port: {} } | undefined
        mtu?: {} | undefined
        name?: {} | undefined
        status?: {} | undefined
      }
    | undefined
  healthReasons?: {} | undefined
  healthStatus?: {} | undefined
  securityDetails?: { roleArn: {}; securityGroupIds: {}; subnetIds: {} } | undefined
}
type DataflowEndpointGroupIdResponse = { dataflowEndpointGroupId?: {} | undefined }
type ListDataflowEndpointGroupsResponse = {
  dataflowEndpointGroupList?: {} | undefined
  nextToken?: {} | undefined
}
type OEMEphemeris = {
  oemData?: {} | undefined
  s3Object?: { bucket?: {} | undefined; key?: {} | undefined; version?: {} | undefined } | undefined
}
type TLEEphemeris = {
  s3Object?: { bucket?: {} | undefined; key?: {} | undefined; version?: {} | undefined } | undefined
  tleData?: {} | undefined
}
type EphemerisIdResponse = { ephemerisId?: {} | undefined }
type ConfigArn = string
type DataflowEdge = ConfigArn[]
type MissionProfileIdResponse = { missionProfileId?: {} | undefined }
type ListMissionProfilesResponse = {
  missionProfileList?: {} | undefined
  nextToken?: {} | undefined
}
type GetConfigResponse = {
  configArn: {}
  configData: {
    antennaDownlinkConfig?:
      | {
          spectrumConfig: {
            bandwidth: { units: {}; value: {} }
            centerFrequency: { units: {}; value: {} }
            polarization?: {} | undefined
          }
        }
      | undefined
    antennaDownlinkDemodDecodeConfig?:
      | {
          decodeConfig: { unvalidatedJSON: {} }
          demodulationConfig: { unvalidatedJSON: {} }
          spectrumConfig: {
            bandwidth: { units: {}; value: {} }
            centerFrequency: { units: {}; value: {} }
            polarization?: {} | undefined
          }
        }
      | undefined
    antennaUplinkConfig?:
      | {
          spectrumConfig: {
            centerFrequency: { units: {}; value: {} }
            polarization?: {} | undefined
          }
          targetEirp: { units: {}; value: {} }
          transmitDisabled?: {} | undefined
        }
      | undefined
    dataflowEndpointConfig?:
      | { dataflowEndpointName: {}; dataflowEndpointRegion?: {} | undefined }
      | undefined
    s3RecordingConfig?: { bucketArn: {}; prefix?: {} | undefined; roleArn: {} } | undefined
    trackingConfig?: { autotrack: {} } | undefined
    uplinkEchoConfig?: { antennaUplinkConfigArn: {}; enabled: {} } | undefined
  }
  configId: {}
  configType?: {} | undefined
  name: {}
  tags?: {} | undefined
}
type GetDataflowEndpointGroupResponse = {
  contactPostPassDurationSeconds?: {} | undefined
  contactPrePassDurationSeconds?: {} | undefined
  dataflowEndpointGroupArn?: {} | undefined
  dataflowEndpointGroupId?: {} | undefined
  endpointsDetails?: {} | undefined
  tags?: {} | undefined
}
type EphemerisDescription = {
  ephemerisData?: {} | undefined
  sourceS3Object?:
    | { bucket?: {} | undefined; key?: {} | undefined; version?: {} | undefined }
    | undefined
}
type DescribeEphemerisResponse = {
  creationTime?: {} | undefined
  enabled?: {} | undefined
  ephemerisId?: {} | undefined
  invalidReason?: {} | undefined
  name?: {} | undefined
  priority?: {} | undefined
  satelliteId?: {} | undefined
  status?: {} | undefined
  suppliedData?:
    | { oem?: EphemerisDescription | undefined; tle?: EphemerisDescription | undefined }
    | undefined
  tags?: {} | undefined
}
type GetMissionProfileResponse = {
  contactPostPassDurationSeconds?: {} | undefined
  contactPrePassDurationSeconds?: {} | undefined
  dataflowEdges?: {} | undefined
  minimumViableContactDurationSeconds?: {} | undefined
  missionProfileArn?: {} | undefined
  missionProfileId?: {} | undefined
  name?: {} | undefined
  region?: {} | undefined
  streamsKmsKey?: { kmsAliasArn?: {} | undefined; kmsKeyArn?: {} | undefined } | undefined
  streamsKmsRole?: {} | undefined
  tags?: {} | undefined
  trackingConfigArn?: {} | undefined
}
type GetAgentConfigurationResponse = { agentId?: {} | undefined; taskingDocument?: {} | undefined }
type GetMinuteUsageResponse = {
  estimatedMinutesRemaining?: {} | undefined
  isReservedMinutesCustomer?: {} | undefined
  totalReservedMinuteAllocation?: {} | undefined
  totalScheduledMinutes?: {} | undefined
  upcomingMinutesScheduled?: {} | undefined
}
type GetSatelliteResponse = {
  currentEphemeris?:
    | { ephemerisId?: {} | undefined; epoch?: {} | undefined; name?: {} | undefined; source: {} }
    | undefined
  groundStations?: {} | undefined
  noradSatelliteID?: {} | undefined
  satelliteArn?: {} | undefined
  satelliteId?: {} | undefined
}
type ContactStatus =
  | 'AVAILABLE'
  | 'AWS_CANCELLED'
  | 'AWS_FAILED'
  | 'CANCELLED'
  | 'CANCELLING'
  | 'COMPLETED'
  | 'FAILED'
  | 'FAILED_TO_SCHEDULE'
  | 'PASS'
  | 'POSTPASS'
  | 'PREPASS'
  | 'SCHEDULED'
  | 'SCHEDULING'
type ListContactsResponse = { contactList?: {} | undefined; nextToken?: {} | undefined }
type EphemerisStatus = 'VALIDATING' | 'INVALID' | 'ERROR' | 'ENABLED' | 'DISABLED' | 'EXPIRED'
type ListEphemeridesResponse = { ephemerides?: {} | undefined; nextToken?: {} | undefined }
type ListGroundStationsResponse = { groundStationList?: {} | undefined; nextToken?: {} | undefined }
type ListSatellitesResponse = { nextToken?: {} | undefined; satellites?: {} | undefined }
type ListTagsForResourceResponse = { tags?: {} | undefined }
type TagResourceResponse = { [x: string]: unknown }
type RegisterAgentResponse = { agentId?: {} | undefined }
type UnboundedString = string
type UntagResourceResponse = { [x: string]: unknown }
type ComponentStatusData = {
  bytesReceived?: {} | undefined
  bytesSent?: {} | undefined
  capabilityArn: {}
  componentType: {}
  dataflowId: {}
  packetsDropped?: {} | undefined
  status: {}
}
type UpdateAgentStatusResponse = { agentId: {} }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/contact/:contactId': {
      $delete:
        | {
            input: { param: { contactId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ContactIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contactId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { contactId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DependencyException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { contactId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
      $get:
        | {
            input: { param: { contactId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DescribeContactResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contactId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { contactId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DependencyException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { contactId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/config': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                configData: {
                  antennaDownlinkConfig?:
                    | {
                        spectrumConfig: {
                          bandwidth: { units: {}; value: {} }
                          centerFrequency: { units: {}; value: {} }
                          polarization?: {} | undefined
                        }
                      }
                    | undefined
                  antennaDownlinkDemodDecodeConfig?:
                    | {
                        decodeConfig: { unvalidatedJSON: {} }
                        demodulationConfig: { unvalidatedJSON: {} }
                        spectrumConfig: {
                          bandwidth: { units: {}; value: {} }
                          centerFrequency: { units: {}; value: {} }
                          polarization?: {} | undefined
                        }
                      }
                    | undefined
                  antennaUplinkConfig?:
                    | {
                        spectrumConfig: {
                          centerFrequency: { units: {}; value: {} }
                          polarization?: {} | undefined
                        }
                        targetEirp: { units: {}; value: {} }
                        transmitDisabled?: {} | undefined
                      }
                    | undefined
                  dataflowEndpointConfig?:
                    | { dataflowEndpointName: {}; dataflowEndpointRegion?: {} | undefined }
                    | undefined
                  s3RecordingConfig?:
                    | { bucketArn: {}; prefix?: {} | undefined; roleArn: {} }
                    | undefined
                  trackingConfig?: { autotrack: {} } | undefined
                  uplinkEchoConfig?: { antennaUplinkConfigArn: {}; enabled: {} } | undefined
                }
                name: string
                tags?: { [x: string]: String } | undefined
              }
            }
            output: ConfigIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                configData: {
                  antennaDownlinkConfig?:
                    | {
                        spectrumConfig: {
                          bandwidth: { units: {}; value: {} }
                          centerFrequency: { units: {}; value: {} }
                          polarization?: {} | undefined
                        }
                      }
                    | undefined
                  antennaDownlinkDemodDecodeConfig?:
                    | {
                        decodeConfig: { unvalidatedJSON: {} }
                        demodulationConfig: { unvalidatedJSON: {} }
                        spectrumConfig: {
                          bandwidth: { units: {}; value: {} }
                          centerFrequency: { units: {}; value: {} }
                          polarization?: {} | undefined
                        }
                      }
                    | undefined
                  antennaUplinkConfig?:
                    | {
                        spectrumConfig: {
                          centerFrequency: { units: {}; value: {} }
                          polarization?: {} | undefined
                        }
                        targetEirp: { units: {}; value: {} }
                        transmitDisabled?: {} | undefined
                      }
                    | undefined
                  dataflowEndpointConfig?:
                    | { dataflowEndpointName: {}; dataflowEndpointRegion?: {} | undefined }
                    | undefined
                  s3RecordingConfig?:
                    | { bucketArn: {}; prefix?: {} | undefined; roleArn: {} }
                    | undefined
                  trackingConfig?: { autotrack: {} } | undefined
                  uplinkEchoConfig?: { antennaUplinkConfigArn: {}; enabled: {} } | undefined
                }
                name: string
                tags?: { [x: string]: String } | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                configData: {
                  antennaDownlinkConfig?:
                    | {
                        spectrumConfig: {
                          bandwidth: { units: {}; value: {} }
                          centerFrequency: { units: {}; value: {} }
                          polarization?: {} | undefined
                        }
                      }
                    | undefined
                  antennaDownlinkDemodDecodeConfig?:
                    | {
                        decodeConfig: { unvalidatedJSON: {} }
                        demodulationConfig: { unvalidatedJSON: {} }
                        spectrumConfig: {
                          bandwidth: { units: {}; value: {} }
                          centerFrequency: { units: {}; value: {} }
                          polarization?: {} | undefined
                        }
                      }
                    | undefined
                  antennaUplinkConfig?:
                    | {
                        spectrumConfig: {
                          centerFrequency: { units: {}; value: {} }
                          polarization?: {} | undefined
                        }
                        targetEirp: { units: {}; value: {} }
                        transmitDisabled?: {} | undefined
                      }
                    | undefined
                  dataflowEndpointConfig?:
                    | { dataflowEndpointName: {}; dataflowEndpointRegion?: {} | undefined }
                    | undefined
                  s3RecordingConfig?:
                    | { bucketArn: {}; prefix?: {} | undefined; roleArn: {} }
                    | undefined
                  trackingConfig?: { autotrack: {} } | undefined
                  uplinkEchoConfig?: { antennaUplinkConfigArn: {}; enabled: {} } | undefined
                }
                name: string
                tags?: { [x: string]: String } | undefined
              }
            }
            output: DependencyException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                configData: {
                  antennaDownlinkConfig?:
                    | {
                        spectrumConfig: {
                          bandwidth: { units: {}; value: {} }
                          centerFrequency: { units: {}; value: {} }
                          polarization?: {} | undefined
                        }
                      }
                    | undefined
                  antennaDownlinkDemodDecodeConfig?:
                    | {
                        decodeConfig: { unvalidatedJSON: {} }
                        demodulationConfig: { unvalidatedJSON: {} }
                        spectrumConfig: {
                          bandwidth: { units: {}; value: {} }
                          centerFrequency: { units: {}; value: {} }
                          polarization?: {} | undefined
                        }
                      }
                    | undefined
                  antennaUplinkConfig?:
                    | {
                        spectrumConfig: {
                          centerFrequency: { units: {}; value: {} }
                          polarization?: {} | undefined
                        }
                        targetEirp: { units: {}; value: {} }
                        transmitDisabled?: {} | undefined
                      }
                    | undefined
                  dataflowEndpointConfig?:
                    | { dataflowEndpointName: {}; dataflowEndpointRegion?: {} | undefined }
                    | undefined
                  s3RecordingConfig?:
                    | { bucketArn: {}; prefix?: {} | undefined; roleArn: {} }
                    | undefined
                  trackingConfig?: { autotrack: {} } | undefined
                  uplinkEchoConfig?: { antennaUplinkConfigArn: {}; enabled: {} } | undefined
                }
                name: string
                tags?: { [x: string]: String } | undefined
              }
            }
            output: ResourceLimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                configData: {
                  antennaDownlinkConfig?:
                    | {
                        spectrumConfig: {
                          bandwidth: { units: {}; value: {} }
                          centerFrequency: { units: {}; value: {} }
                          polarization?: {} | undefined
                        }
                      }
                    | undefined
                  antennaDownlinkDemodDecodeConfig?:
                    | {
                        decodeConfig: { unvalidatedJSON: {} }
                        demodulationConfig: { unvalidatedJSON: {} }
                        spectrumConfig: {
                          bandwidth: { units: {}; value: {} }
                          centerFrequency: { units: {}; value: {} }
                          polarization?: {} | undefined
                        }
                      }
                    | undefined
                  antennaUplinkConfig?:
                    | {
                        spectrumConfig: {
                          centerFrequency: { units: {}; value: {} }
                          polarization?: {} | undefined
                        }
                        targetEirp: { units: {}; value: {} }
                        transmitDisabled?: {} | undefined
                      }
                    | undefined
                  dataflowEndpointConfig?:
                    | { dataflowEndpointName: {}; dataflowEndpointRegion?: {} | undefined }
                    | undefined
                  s3RecordingConfig?:
                    | { bucketArn: {}; prefix?: {} | undefined; roleArn: {} }
                    | undefined
                  trackingConfig?: { autotrack: {} } | undefined
                  uplinkEchoConfig?: { antennaUplinkConfigArn: {}; enabled: {} } | undefined
                }
                name: string
                tags?: { [x: string]: String } | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 483
          }
      $get:
        | {
            input: {
              query: { maxResults?: number | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ListConfigsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { maxResults?: number | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { maxResults?: number | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DependencyException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { maxResults?: number | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/dataflowEndpointGroup': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                contactPostPassDurationSeconds?: number | undefined
                contactPrePassDurationSeconds?: number | undefined
                endpointDetails: EndpointDetails[]
                tags?: { [x: string]: String } | undefined
              }
            }
            output: DataflowEndpointGroupIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                contactPostPassDurationSeconds?: number | undefined
                contactPrePassDurationSeconds?: number | undefined
                endpointDetails: EndpointDetails[]
                tags?: { [x: string]: String } | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                contactPostPassDurationSeconds?: number | undefined
                contactPrePassDurationSeconds?: number | undefined
                endpointDetails: EndpointDetails[]
                tags?: { [x: string]: String } | undefined
              }
            }
            output: DependencyException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                contactPostPassDurationSeconds?: number | undefined
                contactPrePassDurationSeconds?: number | undefined
                endpointDetails: EndpointDetails[]
                tags?: { [x: string]: String } | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
      $get:
        | {
            input: {
              query: { maxResults?: number | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ListDataflowEndpointGroupsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { maxResults?: number | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { maxResults?: number | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DependencyException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { maxResults?: number | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/ephemeris': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                enabled?: boolean | undefined
                ephemeris?:
                  | { oem?: OEMEphemeris | undefined; tle?: TLEEphemeris | undefined }
                  | undefined
                expirationTime?: string | undefined
                kmsKeyArn?: string | undefined
                name: string
                priority?: number | undefined
                satelliteId: string
                tags?: { [x: string]: String } | undefined
              }
            }
            output: EphemerisIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                enabled?: boolean | undefined
                ephemeris?:
                  | { oem?: OEMEphemeris | undefined; tle?: TLEEphemeris | undefined }
                  | undefined
                expirationTime?: string | undefined
                kmsKeyArn?: string | undefined
                name: string
                priority?: number | undefined
                satelliteId: string
                tags?: { [x: string]: String } | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                enabled?: boolean | undefined
                ephemeris?:
                  | { oem?: OEMEphemeris | undefined; tle?: TLEEphemeris | undefined }
                  | undefined
                expirationTime?: string | undefined
                kmsKeyArn?: string | undefined
                name: string
                priority?: number | undefined
                satelliteId: string
                tags?: { [x: string]: String } | undefined
              }
            }
            output: DependencyException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                enabled?: boolean | undefined
                ephemeris?:
                  | { oem?: OEMEphemeris | undefined; tle?: TLEEphemeris | undefined }
                  | undefined
                expirationTime?: string | undefined
                kmsKeyArn?: string | undefined
                name: string
                priority?: number | undefined
                satelliteId: string
                tags?: { [x: string]: String } | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/missionprofile': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                contactPostPassDurationSeconds?: number | undefined
                contactPrePassDurationSeconds?: number | undefined
                dataflowEdges: DataflowEdge[]
                minimumViableContactDurationSeconds: number
                name: string
                streamsKmsKey?:
                  | { kmsAliasArn?: {} | undefined; kmsKeyArn?: {} | undefined }
                  | undefined
                streamsKmsRole?: string | undefined
                tags?: { [x: string]: String } | undefined
                trackingConfigArn: string
              }
            }
            output: MissionProfileIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                contactPostPassDurationSeconds?: number | undefined
                contactPrePassDurationSeconds?: number | undefined
                dataflowEdges: DataflowEdge[]
                minimumViableContactDurationSeconds: number
                name: string
                streamsKmsKey?:
                  | { kmsAliasArn?: {} | undefined; kmsKeyArn?: {} | undefined }
                  | undefined
                streamsKmsRole?: string | undefined
                tags?: { [x: string]: String } | undefined
                trackingConfigArn: string
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                contactPostPassDurationSeconds?: number | undefined
                contactPrePassDurationSeconds?: number | undefined
                dataflowEdges: DataflowEdge[]
                minimumViableContactDurationSeconds: number
                name: string
                streamsKmsKey?:
                  | { kmsAliasArn?: {} | undefined; kmsKeyArn?: {} | undefined }
                  | undefined
                streamsKmsRole?: string | undefined
                tags?: { [x: string]: String } | undefined
                trackingConfigArn: string
              }
            }
            output: DependencyException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                contactPostPassDurationSeconds?: number | undefined
                contactPrePassDurationSeconds?: number | undefined
                dataflowEdges: DataflowEdge[]
                minimumViableContactDurationSeconds: number
                name: string
                streamsKmsKey?:
                  | { kmsAliasArn?: {} | undefined; kmsKeyArn?: {} | undefined }
                  | undefined
                streamsKmsRole?: string | undefined
                tags?: { [x: string]: String } | undefined
                trackingConfigArn: string
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
      $get:
        | {
            input: {
              query: { maxResults?: number | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ListMissionProfilesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { maxResults?: number | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { maxResults?: number | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DependencyException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { maxResults?: number | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/config/:configType/:configId': {
      $delete:
        | {
            input: {
              param: {
                configId: string
                configType:
                  | 'antenna-downlink'
                  | 'antenna-downlink-demod-decode'
                  | 'antenna-uplink'
                  | 'dataflow-endpoint'
                  | 'tracking'
                  | 'uplink-echo'
                  | 's3-recording'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConfigIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                configId: string
                configType:
                  | 'antenna-downlink'
                  | 'antenna-downlink-demod-decode'
                  | 'antenna-uplink'
                  | 'dataflow-endpoint'
                  | 'tracking'
                  | 'uplink-echo'
                  | 's3-recording'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              param: {
                configId: string
                configType:
                  | 'antenna-downlink'
                  | 'antenna-downlink-demod-decode'
                  | 'antenna-uplink'
                  | 'dataflow-endpoint'
                  | 'tracking'
                  | 'uplink-echo'
                  | 's3-recording'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DependencyException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              param: {
                configId: string
                configType:
                  | 'antenna-downlink'
                  | 'antenna-downlink-demod-decode'
                  | 'antenna-uplink'
                  | 'dataflow-endpoint'
                  | 'tracking'
                  | 'uplink-echo'
                  | 's3-recording'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
      $get:
        | {
            input: {
              param: {
                configId: string
                configType:
                  | 'antenna-downlink'
                  | 'antenna-downlink-demod-decode'
                  | 'antenna-uplink'
                  | 'dataflow-endpoint'
                  | 'tracking'
                  | 'uplink-echo'
                  | 's3-recording'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                configId: string
                configType:
                  | 'antenna-downlink'
                  | 'antenna-downlink-demod-decode'
                  | 'antenna-uplink'
                  | 'dataflow-endpoint'
                  | 'tracking'
                  | 'uplink-echo'
                  | 's3-recording'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              param: {
                configId: string
                configType:
                  | 'antenna-downlink'
                  | 'antenna-downlink-demod-decode'
                  | 'antenna-uplink'
                  | 'dataflow-endpoint'
                  | 'tracking'
                  | 'uplink-echo'
                  | 's3-recording'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DependencyException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              param: {
                configId: string
                configType:
                  | 'antenna-downlink'
                  | 'antenna-downlink-demod-decode'
                  | 'antenna-uplink'
                  | 'dataflow-endpoint'
                  | 'tracking'
                  | 'uplink-echo'
                  | 's3-recording'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
      $put:
        | {
            input: {
              param: {
                configId: string
                configType:
                  | 'antenna-downlink'
                  | 'antenna-downlink-demod-decode'
                  | 'antenna-uplink'
                  | 'dataflow-endpoint'
                  | 'tracking'
                  | 'uplink-echo'
                  | 's3-recording'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                configData: {
                  antennaDownlinkConfig?:
                    | {
                        spectrumConfig: {
                          bandwidth: { units: {}; value: {} }
                          centerFrequency: { units: {}; value: {} }
                          polarization?: {} | undefined
                        }
                      }
                    | undefined
                  antennaDownlinkDemodDecodeConfig?:
                    | {
                        decodeConfig: { unvalidatedJSON: {} }
                        demodulationConfig: { unvalidatedJSON: {} }
                        spectrumConfig: {
                          bandwidth: { units: {}; value: {} }
                          centerFrequency: { units: {}; value: {} }
                          polarization?: {} | undefined
                        }
                      }
                    | undefined
                  antennaUplinkConfig?:
                    | {
                        spectrumConfig: {
                          centerFrequency: { units: {}; value: {} }
                          polarization?: {} | undefined
                        }
                        targetEirp: { units: {}; value: {} }
                        transmitDisabled?: {} | undefined
                      }
                    | undefined
                  dataflowEndpointConfig?:
                    | { dataflowEndpointName: {}; dataflowEndpointRegion?: {} | undefined }
                    | undefined
                  s3RecordingConfig?:
                    | { bucketArn: {}; prefix?: {} | undefined; roleArn: {} }
                    | undefined
                  trackingConfig?: { autotrack: {} } | undefined
                  uplinkEchoConfig?: { antennaUplinkConfigArn: {}; enabled: {} } | undefined
                }
                name: string
              }
            }
            output: ConfigIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                configId: string
                configType:
                  | 'antenna-downlink'
                  | 'antenna-downlink-demod-decode'
                  | 'antenna-uplink'
                  | 'dataflow-endpoint'
                  | 'tracking'
                  | 'uplink-echo'
                  | 's3-recording'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                configData: {
                  antennaDownlinkConfig?:
                    | {
                        spectrumConfig: {
                          bandwidth: { units: {}; value: {} }
                          centerFrequency: { units: {}; value: {} }
                          polarization?: {} | undefined
                        }
                      }
                    | undefined
                  antennaDownlinkDemodDecodeConfig?:
                    | {
                        decodeConfig: { unvalidatedJSON: {} }
                        demodulationConfig: { unvalidatedJSON: {} }
                        spectrumConfig: {
                          bandwidth: { units: {}; value: {} }
                          centerFrequency: { units: {}; value: {} }
                          polarization?: {} | undefined
                        }
                      }
                    | undefined
                  antennaUplinkConfig?:
                    | {
                        spectrumConfig: {
                          centerFrequency: { units: {}; value: {} }
                          polarization?: {} | undefined
                        }
                        targetEirp: { units: {}; value: {} }
                        transmitDisabled?: {} | undefined
                      }
                    | undefined
                  dataflowEndpointConfig?:
                    | { dataflowEndpointName: {}; dataflowEndpointRegion?: {} | undefined }
                    | undefined
                  s3RecordingConfig?:
                    | { bucketArn: {}; prefix?: {} | undefined; roleArn: {} }
                    | undefined
                  trackingConfig?: { autotrack: {} } | undefined
                  uplinkEchoConfig?: { antennaUplinkConfigArn: {}; enabled: {} } | undefined
                }
                name: string
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              param: {
                configId: string
                configType:
                  | 'antenna-downlink'
                  | 'antenna-downlink-demod-decode'
                  | 'antenna-uplink'
                  | 'dataflow-endpoint'
                  | 'tracking'
                  | 'uplink-echo'
                  | 's3-recording'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                configData: {
                  antennaDownlinkConfig?:
                    | {
                        spectrumConfig: {
                          bandwidth: { units: {}; value: {} }
                          centerFrequency: { units: {}; value: {} }
                          polarization?: {} | undefined
                        }
                      }
                    | undefined
                  antennaDownlinkDemodDecodeConfig?:
                    | {
                        decodeConfig: { unvalidatedJSON: {} }
                        demodulationConfig: { unvalidatedJSON: {} }
                        spectrumConfig: {
                          bandwidth: { units: {}; value: {} }
                          centerFrequency: { units: {}; value: {} }
                          polarization?: {} | undefined
                        }
                      }
                    | undefined
                  antennaUplinkConfig?:
                    | {
                        spectrumConfig: {
                          centerFrequency: { units: {}; value: {} }
                          polarization?: {} | undefined
                        }
                        targetEirp: { units: {}; value: {} }
                        transmitDisabled?: {} | undefined
                      }
                    | undefined
                  dataflowEndpointConfig?:
                    | { dataflowEndpointName: {}; dataflowEndpointRegion?: {} | undefined }
                    | undefined
                  s3RecordingConfig?:
                    | { bucketArn: {}; prefix?: {} | undefined; roleArn: {} }
                    | undefined
                  trackingConfig?: { autotrack: {} } | undefined
                  uplinkEchoConfig?: { antennaUplinkConfigArn: {}; enabled: {} } | undefined
                }
                name: string
              }
            }
            output: DependencyException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              param: {
                configId: string
                configType:
                  | 'antenna-downlink'
                  | 'antenna-downlink-demod-decode'
                  | 'antenna-uplink'
                  | 'dataflow-endpoint'
                  | 'tracking'
                  | 'uplink-echo'
                  | 's3-recording'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                configData: {
                  antennaDownlinkConfig?:
                    | {
                        spectrumConfig: {
                          bandwidth: { units: {}; value: {} }
                          centerFrequency: { units: {}; value: {} }
                          polarization?: {} | undefined
                        }
                      }
                    | undefined
                  antennaDownlinkDemodDecodeConfig?:
                    | {
                        decodeConfig: { unvalidatedJSON: {} }
                        demodulationConfig: { unvalidatedJSON: {} }
                        spectrumConfig: {
                          bandwidth: { units: {}; value: {} }
                          centerFrequency: { units: {}; value: {} }
                          polarization?: {} | undefined
                        }
                      }
                    | undefined
                  antennaUplinkConfig?:
                    | {
                        spectrumConfig: {
                          centerFrequency: { units: {}; value: {} }
                          polarization?: {} | undefined
                        }
                        targetEirp: { units: {}; value: {} }
                        transmitDisabled?: {} | undefined
                      }
                    | undefined
                  dataflowEndpointConfig?:
                    | { dataflowEndpointName: {}; dataflowEndpointRegion?: {} | undefined }
                    | undefined
                  s3RecordingConfig?:
                    | { bucketArn: {}; prefix?: {} | undefined; roleArn: {} }
                    | undefined
                  trackingConfig?: { autotrack: {} } | undefined
                  uplinkEchoConfig?: { antennaUplinkConfigArn: {}; enabled: {} } | undefined
                }
                name: string
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/dataflowEndpointGroup/:dataflowEndpointGroupId': {
      $delete:
        | {
            input: { param: { dataflowEndpointGroupId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DataflowEndpointGroupIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dataflowEndpointGroupId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { dataflowEndpointGroupId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DependencyException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { dataflowEndpointGroupId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
      $get:
        | {
            input: { param: { dataflowEndpointGroupId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetDataflowEndpointGroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dataflowEndpointGroupId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { dataflowEndpointGroupId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DependencyException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { dataflowEndpointGroupId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/ephemeris/:ephemerisId': {
      $delete:
        | {
            input: { param: { ephemerisId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: EphemerisIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ephemerisId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ephemerisId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DependencyException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ephemerisId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
      $get:
        | {
            input: { param: { ephemerisId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DescribeEphemerisResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ephemerisId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ephemerisId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DependencyException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ephemerisId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
      $put:
        | {
            input: { param: { ephemerisId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: { enabled: boolean; name?: string | undefined; priority?: number | undefined }
            }
            output: EphemerisIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ephemerisId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: { enabled: boolean; name?: string | undefined; priority?: number | undefined }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ephemerisId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: { enabled: boolean; name?: string | undefined; priority?: number | undefined }
            }
            output: DependencyException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ephemerisId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: { enabled: boolean; name?: string | undefined; priority?: number | undefined }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/missionprofile/:missionProfileId': {
      $delete:
        | {
            input: { param: { missionProfileId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: MissionProfileIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { missionProfileId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { missionProfileId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DependencyException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { missionProfileId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
      $get:
        | {
            input: { param: { missionProfileId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetMissionProfileResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { missionProfileId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { missionProfileId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DependencyException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { missionProfileId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
      $put:
        | {
            input: { param: { missionProfileId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                contactPostPassDurationSeconds?: number | undefined
                contactPrePassDurationSeconds?: number | undefined
                dataflowEdges?: DataflowEdge[] | undefined
                minimumViableContactDurationSeconds?: number | undefined
                name?: string | undefined
                streamsKmsKey?:
                  | { kmsAliasArn?: {} | undefined; kmsKeyArn?: {} | undefined }
                  | undefined
                streamsKmsRole?: string | undefined
                trackingConfigArn?: string | undefined
              }
            }
            output: MissionProfileIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { missionProfileId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                contactPostPassDurationSeconds?: number | undefined
                contactPrePassDurationSeconds?: number | undefined
                dataflowEdges?: DataflowEdge[] | undefined
                minimumViableContactDurationSeconds?: number | undefined
                name?: string | undefined
                streamsKmsKey?:
                  | { kmsAliasArn?: {} | undefined; kmsKeyArn?: {} | undefined }
                  | undefined
                streamsKmsRole?: string | undefined
                trackingConfigArn?: string | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { missionProfileId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                contactPostPassDurationSeconds?: number | undefined
                contactPrePassDurationSeconds?: number | undefined
                dataflowEdges?: DataflowEdge[] | undefined
                minimumViableContactDurationSeconds?: number | undefined
                name?: string | undefined
                streamsKmsKey?:
                  | { kmsAliasArn?: {} | undefined; kmsKeyArn?: {} | undefined }
                  | undefined
                streamsKmsRole?: string | undefined
                trackingConfigArn?: string | undefined
              }
            }
            output: DependencyException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { missionProfileId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                contactPostPassDurationSeconds?: number | undefined
                contactPrePassDurationSeconds?: number | undefined
                dataflowEdges?: DataflowEdge[] | undefined
                minimumViableContactDurationSeconds?: number | undefined
                name?: string | undefined
                streamsKmsKey?:
                  | { kmsAliasArn?: {} | undefined; kmsKeyArn?: {} | undefined }
                  | undefined
                streamsKmsRole?: string | undefined
                trackingConfigArn?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/agent/:agentId/configuration': {
      $get:
        | {
            input: { param: { agentId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetAgentConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { agentId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DependencyException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { agentId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/minute-usage': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { month: number; year: number } }
            output: GetMinuteUsageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { month: number; year: number } }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { month: number; year: number } }
            output: DependencyException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { month: number; year: number } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/satellite/:satelliteId': {
      $get:
        | {
            input: { param: { satelliteId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetSatelliteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { satelliteId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { satelliteId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DependencyException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { satelliteId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/contacts': {
      $post:
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                endTime: string
                groundStation?: string | undefined
                maxResults?: number | undefined
                missionProfileArn?: string | undefined
                nextToken?: string | undefined
                satelliteArn?: string | undefined
                startTime: string
                statusList: ContactStatus[]
              }
            }
            output: ListContactsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                endTime: string
                groundStation?: string | undefined
                maxResults?: number | undefined
                missionProfileArn?: string | undefined
                nextToken?: string | undefined
                satelliteArn?: string | undefined
                startTime: string
                statusList: ContactStatus[]
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                endTime: string
                groundStation?: string | undefined
                maxResults?: number | undefined
                missionProfileArn?: string | undefined
                nextToken?: string | undefined
                satelliteArn?: string | undefined
                startTime: string
                statusList: ContactStatus[]
              }
            }
            output: DependencyException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                endTime: string
                groundStation?: string | undefined
                maxResults?: number | undefined
                missionProfileArn?: string | undefined
                nextToken?: string | undefined
                satelliteArn?: string | undefined
                startTime: string
                statusList: ContactStatus[]
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/ephemerides': {
      $post:
        | {
            input: {
              query: { maxResults?: number | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                endTime: string
                satelliteId: string
                startTime: string
                statusList?: EphemerisStatus[] | undefined
              }
            }
            output: ListEphemeridesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { maxResults?: number | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                endTime: string
                satelliteId: string
                startTime: string
                statusList?: EphemerisStatus[] | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { maxResults?: number | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                endTime: string
                satelliteId: string
                startTime: string
                statusList?: EphemerisStatus[] | undefined
              }
            }
            output: DependencyException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { maxResults?: number | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                endTime: string
                satelliteId: string
                startTime: string
                statusList?: EphemerisStatus[] | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/groundstation': {
      $get:
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                satelliteId?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ListGroundStationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                satelliteId?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                satelliteId?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DependencyException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                satelliteId?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/satellite': {
      $get:
        | {
            input: {
              query: { maxResults?: number | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ListSatellitesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { maxResults?: number | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { maxResults?: number | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DependencyException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { maxResults?: number | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/tags/:resourceArn': {
      $get:
        | {
            input: { param: { resourceArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ListTagsForResourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { resourceArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { resourceArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DependencyException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { resourceArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
      $post:
        | {
            input: { param: { resourceArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { tags: { [x: string]: String } } }
            output: TagResourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { resourceArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { tags: { [x: string]: String } } }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { resourceArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { tags: { [x: string]: String } } }
            output: DependencyException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { resourceArn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { tags: { [x: string]: String } } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/agent': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                agentDetails: {
                  agentCpuCores?: {} | undefined
                  agentVersion?: {} | undefined
                  componentVersions?: {} | undefined
                  instanceId?: {} | undefined
                  instanceType?: {} | undefined
                  reservedCpuCores?: {} | undefined
                }
                discoveryData: {
                  capabilityArns?: {} | undefined
                  privateIpAddresses?: {} | undefined
                  publicIpAddresses?: {} | undefined
                }
              }
            }
            output: RegisterAgentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                agentDetails: {
                  agentCpuCores?: {} | undefined
                  agentVersion?: {} | undefined
                  componentVersions?: {} | undefined
                  instanceId?: {} | undefined
                  instanceType?: {} | undefined
                  reservedCpuCores?: {} | undefined
                }
                discoveryData: {
                  capabilityArns?: {} | undefined
                  privateIpAddresses?: {} | undefined
                  publicIpAddresses?: {} | undefined
                }
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                agentDetails: {
                  agentCpuCores?: {} | undefined
                  agentVersion?: {} | undefined
                  componentVersions?: {} | undefined
                  instanceId?: {} | undefined
                  instanceType?: {} | undefined
                  reservedCpuCores?: {} | undefined
                }
                discoveryData: {
                  capabilityArns?: {} | undefined
                  privateIpAddresses?: {} | undefined
                  publicIpAddresses?: {} | undefined
                }
              }
            }
            output: DependencyException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                agentDetails: {
                  agentCpuCores?: {} | undefined
                  agentVersion?: {} | undefined
                  componentVersions?: {} | undefined
                  instanceId?: {} | undefined
                  instanceType?: {} | undefined
                  reservedCpuCores?: {} | undefined
                }
                discoveryData: {
                  capabilityArns?: {} | undefined
                  privateIpAddresses?: {} | undefined
                  publicIpAddresses?: {} | undefined
                }
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/contact': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                endTime: string
                groundStation: string
                missionProfileArn: string
                satelliteArn: string
                startTime: string
                tags?: { [x: string]: String } | undefined
              }
            }
            output: ContactIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                endTime: string
                groundStation: string
                missionProfileArn: string
                satelliteArn: string
                startTime: string
                tags?: { [x: string]: String } | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                endTime: string
                groundStation: string
                missionProfileArn: string
                satelliteArn: string
                startTime: string
                tags?: { [x: string]: String } | undefined
              }
            }
            output: DependencyException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                endTime: string
                groundStation: string
                missionProfileArn: string
                satelliteArn: string
                startTime: string
                tags?: { [x: string]: String } | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/tags/:resourceArn#tagKeys': {
      $delete:
        | {
            input: { param: { resourceArn: string } } & {
              query: { tagKeys: UnboundedString[] }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UntagResourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { resourceArn: string } } & {
              query: { tagKeys: UnboundedString[] }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { resourceArn: string } } & {
              query: { tagKeys: UnboundedString[] }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DependencyException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { resourceArn: string } } & {
              query: { tagKeys: UnboundedString[] }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/agent/:agentId': {
      $put:
        | {
            input: { param: { agentId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                aggregateStatus: { signatureMap?: {} | undefined; status?: {} | undefined }
                componentStatuses: ComponentStatusData[]
                taskId: string
              }
            }
            output: UpdateAgentStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                aggregateStatus: { signatureMap?: {} | undefined; status?: {} | undefined }
                componentStatuses: ComponentStatusData[]
                taskId: string
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { agentId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                aggregateStatus: { signatureMap?: {} | undefined; status?: {} | undefined }
                componentStatuses: ComponentStatusData[]
                taskId: string
              }
            }
            output: DependencyException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { agentId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                aggregateStatus: { signatureMap?: {} | undefined; status?: {} | undefined }
                componentStatuses: ComponentStatusData[]
                taskId: string
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
    }
  },
  '/'
>
export default routes
