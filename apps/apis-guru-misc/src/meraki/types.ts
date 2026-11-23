declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/devices/:serial/camera/analytics/live': {
      $get: {
        input: { param: { serial: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/devices/:serial/camera/analytics/overview': {
      $get: {
        input: { param: { serial: string } } & {
          query: {
            t0?: string | undefined
            t1?: string | undefined
            timespan?: number | undefined
            objectType?: 'person' | 'vehicle' | undefined
          }
        }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/devices/:serial/camera/analytics/recent': {
      $get: {
        input: { param: { serial: string } } & {
          query: { objectType?: 'person' | 'vehicle' | undefined }
        }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/devices/:serial/camera/analytics/zones': {
      $get: {
        input: { param: { serial: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/devices/:serial/camera/analytics/zones/:zoneId/history': {
      $get: {
        input: { param: { serial: string; zoneId: string } } & {
          query: {
            t0?: string | undefined
            t1?: string | undefined
            timespan?: number | undefined
            resolution?: number | undefined
            objectType?: 'person' | 'vehicle' | undefined
          }
        }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/devices/:serial/camera/qualityAndRetentionSettings': {
      $get: {
        input: { param: { serial: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { serial: string } } & {
          json: {
            audioRecordingEnabled?: boolean | undefined
            motionBasedRetentionEnabled?: boolean | undefined
            motionDetectorVersion?: 1 | 2 | undefined
            profileId?: string | undefined
            quality?: 'Enhanced' | 'High' | 'Standard' | undefined
            resolution?: '1080x1080' | '1280x720' | '1920x1080' | '2058x2058' | undefined
            restrictedBandwidthModeEnabled?: boolean | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/devices/:serial/camera/video/settings': {
      $get: {
        input: { param: { serial: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { serial: string } } & {
          json: { externalRtspEnabled?: boolean | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/devices/:serial/cellularGateway/settings': {
      $get: {
        input: { param: { serial: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { serial: string } } & {
          json: {
            fixedIpAssignments?:
              | { ip: string; mac: string; name?: string | undefined }[]
              | undefined
            reservedIpRanges?: { comment: string; end: string; start: string }[] | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/devices/:serial/cellularGateway/settings/portForwardingRules': {
      $get: {
        input: { param: { serial: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { serial: string } } & {
          json: {
            rules?:
              | {
                  access: string
                  allowedIps?: string[] | undefined
                  lanIp: string
                  localPort: string
                  name?: string | undefined
                  protocol: string
                  publicPort: string
                }[]
              | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/devices/:serial/clients': {
      $get: {
        input: { param: { serial: string } } & {
          query: { t0?: string | undefined; timespan?: number | undefined }
        }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/devices/:serial/switch/ports/cycle': {
      $post: {
        input: { param: { serial: string } } & { json: { ports: string[] } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/devices/:serial/switchPortStatuses': {
      $get: {
        input: { param: { serial: string } } & {
          query: { t0?: string | undefined; timespan?: number | undefined }
        }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/devices/:serial/switchPortStatuses/packets': {
      $get: {
        input: { param: { serial: string } } & {
          query: { t0?: string | undefined; timespan?: number | undefined }
        }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/devices/:serial/wireless/bluetooth/settings': {
      $put: {
        input: { param: { serial: string } } & {
          json: {
            major?: number | undefined
            minor?: number | undefined
            uuid?: string | undefined
          }
        }
        output: {
          major?: number | undefined
          minor?: number | undefined
          uuid?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId': {
      $delete: {
        input: { param: { networkId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { networkId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { networkId: string } } & {
          json: {
            disableMyMerakiCom?: boolean | undefined
            disableRemoteStatusPage?: boolean | undefined
            enrollmentString?: string | undefined
            name?: string | undefined
            tags?: string | undefined
            timeZone?: string | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/accessPolicies': {
      $get: {
        input: { param: { networkId: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/airMarshal': {
      $get: {
        input: { param: { networkId: string } } & {
          query: { t0?: string | undefined; timespan?: number | undefined }
        }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/alertSettings': {
      $get: {
        input: { param: { networkId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { networkId: string } } & {
          json: {
            alerts?:
              | {
                  alertDestinations?:
                    | {
                        allAdmins?: boolean | undefined
                        emails?: string[] | undefined
                        httpServerIds?: string[] | undefined
                        snmp?: boolean | undefined
                      }
                    | undefined
                  enabled?: boolean | undefined
                  filters?: { [x: string]: unknown } | undefined
                  type: string
                }[]
              | undefined
            defaultDestinations?:
              | {
                  allAdmins?: boolean | undefined
                  emails?: string[] | undefined
                  httpServerIds?: string[] | undefined
                  snmp?: boolean | undefined
                }
              | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/appliance/firewall/inboundFirewallRules': {
      $get: {
        input: { param: { networkId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { networkId: string } } & {
          json: {
            rules?:
              | {
                  comment?: string | undefined
                  destCidr: string
                  destPort?: string | undefined
                  policy: 'allow' | 'deny'
                  protocol: 'any' | 'icmp' | 'icmp6' | 'tcp' | 'udp'
                  srcCidr: string
                  srcPort?: string | undefined
                  syslogEnabled?: boolean | undefined
                }[]
              | undefined
            syslogDefaultRule?: boolean | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/appliancePorts': {
      $get: {
        input: { param: { networkId: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/appliancePorts/:appliancePortId': {
      $get: {
        input: { param: { networkId: string; appliancePortId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { networkId: string; appliancePortId: string } } & {
          json: {
            accessPolicy?: string | undefined
            allowedVlans?: string | undefined
            dropUntaggedTraffic?: boolean | undefined
            enabled?: boolean | undefined
            type?: string | undefined
            vlan?: number | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/bind': {
      $post: {
        input: { param: { networkId: string } } & {
          json: { autoBind?: boolean | undefined; configTemplateId: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/networks/:networkId/bluetoothClients': {
      $get: {
        input: { param: { networkId: string } } & {
          query: {
            t0?: string | undefined
            timespan?: number | undefined
            perPage?: number | undefined
            startingAfter?: string | undefined
            endingBefore?: string | undefined
            includeConnectivityHistory?: boolean | undefined
          }
        }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/bluetoothClients/:bluetoothClientId': {
      $get: {
        input: { param: { networkId: string; bluetoothClientId: string } } & {
          query: {
            includeConnectivityHistory?: boolean | undefined
            connectivityHistoryTimespan?: number | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/bluetoothSettings': {
      $get: {
        input: { param: { networkId: string } }
        output: {
          advertisingEnabled?: boolean | undefined
          major?: number | undefined
          majorMinorAssignmentMode?: string | undefined
          minor?: number | undefined
          scanningEnabled?: boolean | undefined
          uuid?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { networkId: string } } & {
          json: {
            advertisingEnabled?: boolean | undefined
            major?: number | undefined
            majorMinorAssignmentMode?: 'Non-unique' | 'Unique' | undefined
            minor?: number | undefined
            scanningEnabled?: boolean | undefined
            uuid?: string | undefined
          }
        }
        output: {
          advertisingEnabled?: boolean | undefined
          major?: number | undefined
          majorMinorAssignmentMode?: string | undefined
          minor?: number | undefined
          scanningEnabled?: boolean | undefined
          uuid?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/camera/qualityRetentionProfiles': {
      $get: {
        input: { param: { networkId: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { networkId: string } } & {
          json: {
            audioRecordingEnabled?: boolean | undefined
            cloudArchiveEnabled?: boolean | undefined
            maxRetentionDays?: number | undefined
            motionBasedRetentionEnabled?: boolean | undefined
            motionDetectorVersion?: number | undefined
            name: string
            restrictedBandwidthModeEnabled?: boolean | undefined
            scheduleId?: string | undefined
            videoSettings?:
              | {
                  'MV12/MV22/MV72'?:
                    | {
                        quality: 'Enhanced' | 'High' | 'Standard'
                        resolution: '1280x720' | '1920x1080'
                      }
                    | undefined
                  MV12WE?:
                    | {
                        quality: 'Enhanced' | 'High' | 'Standard'
                        resolution: '1280x720' | '1920x1080'
                      }
                    | undefined
                  MV13?:
                    | {
                        quality: 'Enhanced' | 'High' | 'Standard'
                        resolution: '1080x1080' | '2688x1512'
                      }
                    | undefined
                  'MV21/MV71'?:
                    | { quality: 'Enhanced' | 'High' | 'Standard'; resolution: '1280x720' }
                    | undefined
                  'MV22X/MV72X'?:
                    | {
                        quality: 'Enhanced' | 'High' | 'Standard'
                        resolution: '1280x720' | '1920x1080' | '2688x1512'
                      }
                    | undefined
                  MV32?:
                    | {
                        quality: 'Enhanced' | 'High' | 'Standard'
                        resolution: '1080x1080' | '2058x2058'
                      }
                    | undefined
                  MV33?:
                    | {
                        quality: 'Enhanced' | 'High' | 'Standard'
                        resolution: '1080x1080' | '2112x2112'
                      }
                    | undefined
                  MV52?:
                    | {
                        quality: 'Enhanced' | 'High' | 'Standard'
                        resolution: '1280x720' | '1920x1080' | '2688x1512' | '3840x2160'
                      }
                    | undefined
                  MV63?:
                    | {
                        quality: 'Enhanced' | 'High' | 'Standard'
                        resolution: '1920x1080' | '2688x1512'
                      }
                    | undefined
                  MV63X?:
                    | {
                        quality: 'Enhanced' | 'High' | 'Standard'
                        resolution: '1920x1080' | '2688x1512' | '3840x2160'
                      }
                    | undefined
                  MV93?:
                    | {
                        quality: 'Enhanced' | 'High' | 'Standard'
                        resolution: '1080x1080' | '2112x2112'
                      }
                    | undefined
                  MV93X?:
                    | {
                        quality: 'Enhanced' | 'High' | 'Standard'
                        resolution: '1080x1080' | '2112x2112' | '2880x2880'
                      }
                    | undefined
                }
              | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/camera/qualityRetentionProfiles/:qualityRetentionProfileId': {
      $delete: {
        input: { param: { networkId: string; qualityRetentionProfileId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { networkId: string; qualityRetentionProfileId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { networkId: string; qualityRetentionProfileId: string } } & {
          json: {
            audioRecordingEnabled?: boolean | undefined
            cloudArchiveEnabled?: boolean | undefined
            maxRetentionDays?: number | undefined
            motionBasedRetentionEnabled?: boolean | undefined
            motionDetectorVersion?: number | undefined
            name?: string | undefined
            restrictedBandwidthModeEnabled?: boolean | undefined
            scheduleId?: string | undefined
            videoSettings?:
              | {
                  'MV12/MV22/MV72'?:
                    | {
                        quality: 'Enhanced' | 'High' | 'Standard'
                        resolution: '1280x720' | '1920x1080'
                      }
                    | undefined
                  MV12WE?:
                    | {
                        quality: 'Enhanced' | 'High' | 'Standard'
                        resolution: '1280x720' | '1920x1080'
                      }
                    | undefined
                  MV13?:
                    | {
                        quality: 'Enhanced' | 'High' | 'Standard'
                        resolution: '1080x1080' | '2688x1512'
                      }
                    | undefined
                  'MV21/MV71'?:
                    | { quality: 'Enhanced' | 'High' | 'Standard'; resolution: '1280x720' }
                    | undefined
                  'MV22X/MV72X'?:
                    | {
                        quality: 'Enhanced' | 'High' | 'Standard'
                        resolution: '1280x720' | '1920x1080' | '2688x1512'
                      }
                    | undefined
                  MV32?:
                    | {
                        quality: 'Enhanced' | 'High' | 'Standard'
                        resolution: '1080x1080' | '2058x2058'
                      }
                    | undefined
                  MV33?:
                    | {
                        quality: 'Enhanced' | 'High' | 'Standard'
                        resolution: '1080x1080' | '2112x2112'
                      }
                    | undefined
                  MV52?:
                    | {
                        quality: 'Enhanced' | 'High' | 'Standard'
                        resolution: '1280x720' | '1920x1080' | '2688x1512' | '3840x2160'
                      }
                    | undefined
                  MV63?:
                    | {
                        quality: 'Enhanced' | 'High' | 'Standard'
                        resolution: '1920x1080' | '2688x1512'
                      }
                    | undefined
                  MV63X?:
                    | {
                        quality: 'Enhanced' | 'High' | 'Standard'
                        resolution: '1920x1080' | '2688x1512' | '3840x2160'
                      }
                    | undefined
                  MV93?:
                    | {
                        quality: 'Enhanced' | 'High' | 'Standard'
                        resolution: '1080x1080' | '2112x2112'
                      }
                    | undefined
                  MV93X?:
                    | {
                        quality: 'Enhanced' | 'High' | 'Standard'
                        resolution: '1080x1080' | '2112x2112' | '2880x2880'
                      }
                    | undefined
                }
              | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/camera/schedules': {
      $get: {
        input: { param: { networkId: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/cameras/:serial/snapshot': {
      $post: {
        input: { param: { networkId: string; serial: string } } & {
          json: { fullframe?: boolean | undefined; timestamp?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/networks/:networkId/cameras/:serial/videoLink': {
      $get: {
        input: { param: { networkId: string; serial: string } } & {
          query: { timestamp?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/cellularFirewallRules': {
      $get: {
        input: { param: { networkId: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { networkId: string } } & {
          json: {
            rules?:
              | {
                  comment?: string | undefined
                  destCidr: string
                  destPort?: string | undefined
                  policy: 'allow' | 'deny'
                  protocol: 'any' | 'icmp' | 'icmp6' | 'tcp' | 'udp'
                  srcCidr: string
                  srcPort?: string | undefined
                  syslogEnabled?: boolean | undefined
                }[]
              | undefined
          }
        }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/clients': {
      $get: {
        input: { param: { networkId: string } } & {
          query: {
            t0?: string | undefined
            timespan?: number | undefined
            perPage?: number | undefined
            startingAfter?: string | undefined
            endingBefore?: string | undefined
          }
        }
        output: {
          description?: string | undefined
          firstSeen?: number | undefined
          groupPolicy8021x?: string | undefined
          id?: string | undefined
          ip?: string | undefined
          ip6?: string | undefined
          ip6Local?: string | undefined
          lastSeen?: number | undefined
          mac?: string | undefined
          manufacturer?: string | undefined
          notes?: string | undefined
          os?: string | undefined
          recentDeviceMac?: string | undefined
          recentDeviceName?: string | undefined
          recentDeviceSerial?: string | undefined
          smInstalled?: boolean | undefined
          ssid?: string | undefined
          status?: 'Offline' | 'Online' | undefined
          switchport?: string | undefined
          usage?: { recv?: number | undefined; sent?: number | undefined } | undefined
          user?: string | undefined
          vlan?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/clients/connectionStats': {
      $get: {
        input: { param: { networkId: string } } & {
          query: {
            t0?: string | undefined
            t1?: string | undefined
            timespan?: number | undefined
            band?: '2.4' | '5' | undefined
            ssid?: number | undefined
            vlan?: number | undefined
            apTag?: string | undefined
          }
        }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/clients/latencyStats': {
      $get: {
        input: { param: { networkId: string } } & {
          query: {
            t0?: string | undefined
            t1?: string | undefined
            timespan?: number | undefined
            band?: '2.4' | '5' | undefined
            ssid?: number | undefined
            vlan?: number | undefined
            apTag?: string | undefined
            fields?: string | undefined
          }
        }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/clients/provision': {
      $post: {
        input: { param: { networkId: string } } & {
          json: {
            devicePolicy:
              | 'Allowed'
              | 'Blocked'
              | 'Group policy'
              | 'Normal'
              | 'Per connection'
              | 'Whitelisted'
            groupPolicyId?: string | undefined
            mac: string
            name?: string | undefined
            policiesBySecurityAppliance?:
              | { devicePolicy?: 'Blocked' | 'Normal' | 'Whitelisted' | undefined }
              | undefined
            policiesBySsid?:
              | {
                  '0'?:
                    | {
                        devicePolicy: 'Blocked' | 'Group policy' | 'Normal' | 'Whitelisted'
                        groupPolicyId?: string | undefined
                      }
                    | undefined
                  '1'?:
                    | {
                        devicePolicy: 'Blocked' | 'Group policy' | 'Normal' | 'Whitelisted'
                        groupPolicyId?: string | undefined
                      }
                    | undefined
                  '2'?:
                    | {
                        devicePolicy: 'Blocked' | 'Group policy' | 'Normal' | 'Whitelisted'
                        groupPolicyId?: string | undefined
                      }
                    | undefined
                  '3'?:
                    | {
                        devicePolicy: 'Blocked' | 'Group policy' | 'Normal' | 'Whitelisted'
                        groupPolicyId?: string | undefined
                      }
                    | undefined
                  '4'?:
                    | {
                        devicePolicy: 'Blocked' | 'Group policy' | 'Normal' | 'Whitelisted'
                        groupPolicyId?: string | undefined
                      }
                    | undefined
                  '5'?:
                    | {
                        devicePolicy: 'Blocked' | 'Group policy' | 'Normal' | 'Whitelisted'
                        groupPolicyId?: string | undefined
                      }
                    | undefined
                  '6'?:
                    | {
                        devicePolicy: 'Blocked' | 'Group policy' | 'Normal' | 'Whitelisted'
                        groupPolicyId?: string | undefined
                      }
                    | undefined
                  '7'?:
                    | {
                        devicePolicy: 'Blocked' | 'Group policy' | 'Normal' | 'Whitelisted'
                        groupPolicyId?: string | undefined
                      }
                    | undefined
                  '8'?:
                    | {
                        devicePolicy: 'Blocked' | 'Group policy' | 'Normal' | 'Whitelisted'
                        groupPolicyId?: string | undefined
                      }
                    | undefined
                  '9'?:
                    | {
                        devicePolicy: 'Blocked' | 'Group policy' | 'Normal' | 'Whitelisted'
                        groupPolicyId?: string | undefined
                      }
                    | undefined
                  '10'?:
                    | {
                        devicePolicy: 'Blocked' | 'Group policy' | 'Normal' | 'Whitelisted'
                        groupPolicyId?: string | undefined
                      }
                    | undefined
                  '11'?:
                    | {
                        devicePolicy: 'Blocked' | 'Group policy' | 'Normal' | 'Whitelisted'
                        groupPolicyId?: string | undefined
                      }
                    | undefined
                  '12'?:
                    | {
                        devicePolicy: 'Blocked' | 'Group policy' | 'Normal' | 'Whitelisted'
                        groupPolicyId?: string | undefined
                      }
                    | undefined
                  '13'?:
                    | {
                        devicePolicy: 'Blocked' | 'Group policy' | 'Normal' | 'Whitelisted'
                        groupPolicyId?: string | undefined
                      }
                    | undefined
                  '14'?:
                    | {
                        devicePolicy: 'Blocked' | 'Group policy' | 'Normal' | 'Whitelisted'
                        groupPolicyId?: string | undefined
                      }
                    | undefined
                }
              | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/networks/:networkId/clients/:clientId': {
      $get: {
        input: { param: { networkId: string; clientId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/clients/:clientId/connectionStats': {
      $get: {
        input: { param: { networkId: string; clientId: string } } & {
          query: {
            t0?: string | undefined
            t1?: string | undefined
            timespan?: number | undefined
            band?: '2.4' | '5' | undefined
            ssid?: number | undefined
            vlan?: number | undefined
            apTag?: string | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/clients/:clientId/events': {
      $get: {
        input: { param: { networkId: string; clientId: string } } & {
          query: {
            perPage?: number | undefined
            startingAfter?: string | undefined
            endingBefore?: string | undefined
          }
        }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/clients/:clientId/latencyHistory': {
      $get: {
        input: { param: { networkId: string; clientId: string } } & {
          query: {
            t0?: string | undefined
            t1?: string | undefined
            timespan?: number | undefined
            resolution?: number | undefined
          }
        }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/clients/:clientId/latencyStats': {
      $get: {
        input: { param: { networkId: string; clientId: string } } & {
          query: {
            t0?: string | undefined
            t1?: string | undefined
            timespan?: number | undefined
            band?: '2.4' | '5' | undefined
            ssid?: number | undefined
            vlan?: number | undefined
            apTag?: string | undefined
            fields?: string | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/clients/:clientId/policy': {
      $get: {
        input: { param: { networkId: string; clientId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { networkId: string; clientId: string } } & {
          json: { devicePolicy: string; groupPolicyId?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/clients/:clientId/splashAuthorizationStatus': {
      $get: {
        input: { param: { networkId: string; clientId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { networkId: string; clientId: string } } & {
          json: {
            ssids: {
              '0'?: { isAuthorized?: boolean | undefined } | undefined
              '1'?: { isAuthorized?: boolean | undefined } | undefined
              '2'?: { isAuthorized?: boolean | undefined } | undefined
              '3'?: { isAuthorized?: boolean | undefined } | undefined
              '4'?: { isAuthorized?: boolean | undefined } | undefined
              '5'?: { isAuthorized?: boolean | undefined } | undefined
              '6'?: { isAuthorized?: boolean | undefined } | undefined
              '7'?: { isAuthorized?: boolean | undefined } | undefined
              '8'?: { isAuthorized?: boolean | undefined } | undefined
              '9'?: { isAuthorized?: boolean | undefined } | undefined
              '10'?: { isAuthorized?: boolean | undefined } | undefined
              '11'?: { isAuthorized?: boolean | undefined } | undefined
              '12'?: { isAuthorized?: boolean | undefined } | undefined
              '13'?: { isAuthorized?: boolean | undefined } | undefined
              '14'?: { isAuthorized?: boolean | undefined } | undefined
            }
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/clients/:clientId/usageHistory': {
      $get: {
        input: { param: { networkId: string; clientId: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/connectionStats': {
      $get: {
        input: { param: { networkId: string } } & {
          query: {
            t0?: string | undefined
            t1?: string | undefined
            timespan?: number | undefined
            band?: '2.4' | '5' | undefined
            ssid?: number | undefined
            vlan?: number | undefined
            apTag?: string | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/contentFiltering': {
      $get: {
        input: { param: { networkId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { networkId: string } } & {
          json: {
            allowedUrlPatterns?: string[] | undefined
            blockedUrlCategories?: string[] | undefined
            blockedUrlPatterns?: string[] | undefined
            urlCategoryListSize?: 'fullList' | 'topSites' | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/contentFiltering/categories': {
      $get: {
        input: { param: { networkId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/devices': {
      $get: {
        input: { param: { networkId: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/devices/claim': {
      $post: {
        input: { param: { networkId: string } } & {
          json: { serial?: string | undefined; serials?: string[] | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/networks/:networkId/devices/connectionStats': {
      $get: {
        input: { param: { networkId: string } } & {
          query: {
            t0?: string | undefined
            t1?: string | undefined
            timespan?: number | undefined
            band?: '2.4' | '5' | undefined
            ssid?: number | undefined
            vlan?: number | undefined
            apTag?: string | undefined
          }
        }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/devices/latencyStats': {
      $get: {
        input: { param: { networkId: string } } & {
          query: {
            t0?: string | undefined
            t1?: string | undefined
            timespan?: number | undefined
            band?: '2.4' | '5' | undefined
            ssid?: number | undefined
            vlan?: number | undefined
            apTag?: string | undefined
            fields?: string | undefined
          }
        }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/devices/:serial': {
      $get: {
        input: { param: { networkId: string; serial: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { networkId: string; serial: string } } & {
          json: {
            address?: string | undefined
            floorPlanId?: string | undefined
            lat?: number | undefined
            lng?: number | undefined
            moveMapMarker?: boolean | undefined
            name?: string | undefined
            notes?: string | undefined
            switchProfileId?: string | undefined
            tags?: string | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/devices/:serial/connectionStats': {
      $get: {
        input: { param: { networkId: string; serial: string } } & {
          query: {
            t0?: string | undefined
            t1?: string | undefined
            timespan?: number | undefined
            band?: '2.4' | '5' | undefined
            ssid?: number | undefined
            vlan?: number | undefined
            apTag?: string | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/devices/:serial/latencyStats': {
      $get: {
        input: { param: { networkId: string; serial: string } } & {
          query: {
            t0?: string | undefined
            t1?: string | undefined
            timespan?: number | undefined
            band?: '2.4' | '5' | undefined
            ssid?: number | undefined
            vlan?: number | undefined
            apTag?: string | undefined
            fields?: string | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/devices/:serial/lossAndLatencyHistory': {
      $get: {
        input: { param: { networkId: string; serial: string } } & {
          query: {
            t0?: string | undefined
            t1?: string | undefined
            timespan?: number | undefined
            resolution?: number | undefined
            uplink?: 'cellular' | 'wan1' | 'wan2' | undefined
            ip: string
          }
        }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/devices/:serial/performance': {
      $get: {
        input: { param: { networkId: string; serial: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/devices/:serial/reboot': {
      $post: {
        input: { param: { networkId: string; serial: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/devices/:serial/remove': {
      $post: {
        input: { param: { networkId: string; serial: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/networks/:networkId/devices/:serial/uplink': {
      $get: {
        input: { param: { networkId: string; serial: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/devices/:serial/wireless/status': {
      $get: {
        input: { param: { networkId: string; serial: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/events': {
      $get: {
        input: { param: { networkId: string } } & {
          query: {
            productType?: string | undefined
            includedEventTypes?: string[] | undefined
            excludedEventTypes?: string[] | undefined
            deviceMac?: string | undefined
            deviceSerial?: string | undefined
            deviceName?: string | undefined
            clientIp?: string | undefined
            clientMac?: string | undefined
            clientName?: string | undefined
            smDeviceMac?: string | undefined
            smDeviceName?: string | undefined
            perPage?: number | undefined
            startingAfter?: string | undefined
            endingBefore?: string | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/events/eventTypes': {
      $get: {
        input: { param: { networkId: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/failedConnections': {
      $get: {
        input: { param: { networkId: string } } & {
          query: {
            t0?: string | undefined
            t1?: string | undefined
            timespan?: number | undefined
            band?: '2.4' | '5' | undefined
            ssid?: number | undefined
            vlan?: number | undefined
            apTag?: string | undefined
            serial?: string | undefined
            clientId?: string | undefined
          }
        }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/firewalledServices': {
      $get: {
        input: { param: { networkId: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/firewalledServices/:service': {
      $get: {
        input: { param: { networkId: string; service: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { networkId: string; service: string } } & {
          json: {
            access: 'blocked' | 'restricted' | 'unrestricted'
            allowedIps?: string[] | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/floorPlans': {
      $get: {
        input: { param: { networkId: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { networkId: string } } & {
          json: {
            bottomLeftCorner?: { lat?: number | undefined; lng?: number | undefined } | undefined
            bottomRightCorner?: { lat?: number | undefined; lng?: number | undefined } | undefined
            center?: { lat?: number | undefined; lng?: number | undefined } | undefined
            imageContents: string
            name: string
            topLeftCorner?: { lat?: number | undefined; lng?: number | undefined } | undefined
            topRightCorner?: { lat?: number | undefined; lng?: number | undefined } | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/networks/:networkId/floorPlans/:floorPlanId': {
      $delete: {
        input: { param: { networkId: string; floorPlanId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { networkId: string; floorPlanId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { networkId: string; floorPlanId: string } } & {
          json: {
            bottomLeftCorner?: { lat?: number | undefined; lng?: number | undefined } | undefined
            bottomRightCorner?: { lat?: number | undefined; lng?: number | undefined } | undefined
            center?: { lat?: number | undefined; lng?: number | undefined } | undefined
            imageContents?: string | undefined
            name?: string | undefined
            topLeftCorner?: { lat?: number | undefined; lng?: number | undefined } | undefined
            topRightCorner?: { lat?: number | undefined; lng?: number | undefined } | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/l3FirewallRules': {
      $get: {
        input: { param: { networkId: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { networkId: string } } & {
          json: {
            rules?:
              | {
                  comment?: string | undefined
                  destCidr: string
                  destPort?: string | undefined
                  policy: 'allow' | 'deny'
                  protocol: 'any' | 'icmp' | 'icmp6' | 'tcp' | 'udp'
                  srcCidr: string
                  srcPort?: string | undefined
                  syslogEnabled?: boolean | undefined
                }[]
              | undefined
            syslogDefaultRule?: boolean | undefined
          }
        }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/l7FirewallRules': {
      $get: {
        input: { param: { networkId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { networkId: string } } & {
          json: {
            rules?:
              | {
                  policy?: 'deny' | undefined
                  type?:
                    | 'application'
                    | 'applicationCategory'
                    | 'host'
                    | 'ipRange'
                    | 'port'
                    | undefined
                  value?: string | undefined
                }[]
              | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/l7FirewallRules/applicationCategories': {
      $get: {
        input: { param: { networkId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/latencyStats': {
      $get: {
        input: { param: { networkId: string } } & {
          query: {
            t0?: string | undefined
            t1?: string | undefined
            timespan?: number | undefined
            band?: '2.4' | '5' | undefined
            ssid?: number | undefined
            vlan?: number | undefined
            apTag?: string | undefined
            fields?: string | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/merakiAuthUsers': {
      $get: {
        input: { param: { networkId: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/merakiAuthUsers/:merakiAuthUserId': {
      $get: {
        input: { param: { networkId: string; merakiAuthUserId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/oneToManyNatRules': {
      $get: {
        input: { param: { networkId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { networkId: string } } & {
          json: {
            rules: {
              portRules: {
                allowedIps?: string[] | undefined
                localIp?: string | undefined
                localPort?: string | undefined
                name?: string | undefined
                protocol?: 'tcp' | 'udp' | undefined
                publicPort?: string | undefined
              }[]
              publicIp: string
              uplink: 'internet1' | 'internet2'
            }[]
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/oneToOneNatRules': {
      $get: {
        input: { param: { networkId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { networkId: string } } & {
          json: {
            rules: {
              allowedInbound?:
                | {
                    allowedIps?: string[] | undefined
                    destinationPorts?: string[] | undefined
                    protocol?: 'any' | 'icmp-ping' | 'tcp' | 'udp' | undefined
                  }[]
                | undefined
              lanIp: string
              name?: string | undefined
              publicIp?: string | undefined
              uplink?: 'internet1' | 'internet2' | undefined
            }[]
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/pii/piiKeys': {
      $get: {
        input: { param: { networkId: string } } & {
          query: {
            username?: string | undefined
            email?: string | undefined
            mac?: string | undefined
            serial?: string | undefined
            imei?: string | undefined
            bluetoothMac?: string | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/pii/requests': {
      $get: {
        input: { param: { networkId: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { networkId: string } } & {
          json: {
            datasets?: string[] | undefined
            email?: string | undefined
            mac?: string | undefined
            smDeviceId?: string | undefined
            smUserId?: string | undefined
            type?: 'delete' | 'restrict processing' | undefined
            username?: string | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/networks/:networkId/pii/requests/:requestId': {
      $delete: {
        input: { param: { networkId: string; requestId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { networkId: string; requestId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/pii/smDevicesForKey': {
      $get: {
        input: { param: { networkId: string } } & {
          query: {
            username?: string | undefined
            email?: string | undefined
            mac?: string | undefined
            serial?: string | undefined
            imei?: string | undefined
            bluetoothMac?: string | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/pii/smOwnersForKey': {
      $get: {
        input: { param: { networkId: string } } & {
          query: {
            username?: string | undefined
            email?: string | undefined
            mac?: string | undefined
            serial?: string | undefined
            imei?: string | undefined
            bluetoothMac?: string | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/portForwardingRules': {
      $get: {
        input: { param: { networkId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { networkId: string } } & {
          json: {
            rules: {
              allowedIps: string[]
              lanIp: string
              localPort: string
              name?: string | undefined
              protocol: 'tcp' | 'udp'
              publicPort: string
              uplink?: 'both' | 'internet1' | 'internet2' | undefined
            }[]
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/security/intrusionSettings': {
      $get: {
        input: { param: { networkId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { networkId: string } } & {
          json: {
            idsRulesets?: 'balanced' | 'connectivity' | 'security' | undefined
            mode?: 'detection' | 'disabled' | 'prevention' | undefined
            protectedNetworks?:
              | {
                  excludedCidr?: string[] | undefined
                  includedCidr?: string[] | undefined
                  useDefault?: boolean | undefined
                }
              | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/security/malwareSettings': {
      $get: {
        input: { param: { networkId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { networkId: string } } & {
          json: {
            allowedFiles?: { comment: string; sha256: string }[] | undefined
            allowedUrls?: { comment: string; url: string }[] | undefined
            mode: 'disabled' | 'enabled'
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/securityEvents': {
      $get: {
        input: { param: { networkId: string } } & {
          query: {
            t0?: string | undefined
            t1?: string | undefined
            timespan?: number | undefined
            perPage?: number | undefined
            startingAfter?: string | undefined
            endingBefore?: string | undefined
          }
        }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/siteToSiteVpn': {
      $get: {
        input: { param: { networkId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { networkId: string } } & {
          json: {
            hubs?: { hubId: string; useDefaultRoute?: boolean | undefined }[] | undefined
            mode: 'hub' | 'none' | 'spoke'
            subnets?: { localSubnet: string; useVpn?: boolean | undefined }[] | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/sm/bypassActivationLockAttempts': {
      $post: {
        input: { param: { networkId: string } } & { json: { ids: string[] } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/networks/:networkId/sm/bypassActivationLockAttempts/:attemptId': {
      $get: {
        input: { param: { networkId: string; attemptId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/sm/device/fields': {
      $put: {
        input: { param: { networkId: string } } & {
          json: {
            deviceFields: { name?: string | undefined; notes?: string | undefined }
            id?: string | undefined
            serial?: string | undefined
            wifiMac?: string | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/sm/device/wipe': {
      $put: {
        input: { param: { networkId: string } } & {
          json: {
            id?: string | undefined
            pin?: number | undefined
            serial?: string | undefined
            wifiMac?: string | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/sm/device/:deviceId/refreshDetails': {
      $post: {
        input: { param: { networkId: string; deviceId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/networks/:networkId/sm/devices': {
      $get: {
        input: { param: { networkId: string } } & {
          query: {
            fields?: string | undefined
            wifiMacs?: string | undefined
            serials?: string | undefined
            ids?: string | undefined
            scope?: string | undefined
            batchSize?: number | undefined
            batchToken?: string | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/sm/devices/checkin': {
      $put: {
        input: { param: { networkId: string } } & {
          json: {
            ids?: string | undefined
            scope?: string | undefined
            serials?: string | undefined
            wifiMacs?: string | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/sm/devices/tags': {
      $put: {
        input: { param: { networkId: string } } & {
          json: {
            ids?: string | undefined
            scope?: string | undefined
            serials?: string | undefined
            tags: string
            updateAction: string
            wifiMacs?: string | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/sm/devices/:deviceId/unenroll': {
      $post: {
        input: { param: { networkId: string; deviceId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/sm/profiles': {
      $get: {
        input: { param: { networkId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/sm/targetGroups': {
      $get: {
        input: { param: { networkId: string } } & { query: { withDetails?: boolean | undefined } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { networkId: string } } & {
          json: { name?: string | undefined; scope?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/networks/:networkId/sm/targetGroups/:targetGroupId': {
      $delete: {
        input: { param: { networkId: string; targetGroupId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { networkId: string; targetGroupId: string } } & {
          query: { withDetails?: boolean | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { networkId: string; targetGroupId: string } } & {
          json: { name?: string | undefined; scope?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/sm/user/:userId/deviceProfiles': {
      $get: {
        input: { param: { networkId: string; userId: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/sm/user/:userId/softwares': {
      $get: {
        input: { param: { networkId: string; userId: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/sm/users': {
      $get: {
        input: { param: { networkId: string } } & {
          query: {
            ids?: string | undefined
            usernames?: string | undefined
            emails?: string | undefined
            scope?: string | undefined
          }
        }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/sm/:deviceId/cellularUsageHistory': {
      $get: {
        input: { param: { networkId: string; deviceId: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/sm/:deviceId/certs': {
      $get: {
        input: { param: { networkId: string; deviceId: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/sm/:deviceId/deviceProfiles': {
      $get: {
        input: { param: { networkId: string; deviceId: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/sm/:deviceId/networkAdapters': {
      $get: {
        input: { param: { networkId: string; deviceId: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/sm/:deviceId/restrictions': {
      $get: {
        input: { param: { networkId: string; deviceId: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/sm/:deviceId/securityCenters': {
      $get: {
        input: { param: { networkId: string; deviceId: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/sm/:deviceId/softwares': {
      $get: {
        input: { param: { networkId: string; deviceId: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/sm/:deviceId/wlanLists': {
      $get: {
        input: { param: { networkId: string; deviceId: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/snmpSettings': {
      $get: {
        input: { param: { networkId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/splashLoginAttempts': {
      $get: {
        input: { param: { networkId: string } } & {
          query: {
            ssidNumber?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | undefined
            loginIdentifier?: string | undefined
            timespan?: number | undefined
          }
        }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/split': {
      $post: {
        input: { param: { networkId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/ssids': {
      $get: {
        input: { param: { networkId: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/ssids/:number': {
      $get: {
        input: { param: { networkId: string; number: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { networkId: string; number: string } } & {
          json: {
            apTagsAndVlanIds?:
              | { tags?: string | undefined; vlanId?: number | undefined }[]
              | undefined
            authMode?:
              | '8021x-google'
              | '8021x-localradius'
              | '8021x-meraki'
              | '8021x-nac'
              | '8021x-radius'
              | 'ipsk-with-radius'
              | 'ipsk-without-radius'
              | 'open'
              | 'open-enhanced'
              | 'open-with-nac'
              | 'open-with-radius'
              | 'psk'
              | undefined
            availabilityTags?: string[] | undefined
            availableOnAllAps?: boolean | undefined
            bandSelection?: string | undefined
            concentratorNetworkId?: string | undefined
            defaultVlanId?: number | undefined
            disassociateClientsOnVpnFailover?: boolean | undefined
            enabled?: boolean | undefined
            encryptionMode?: 'wep' | 'wpa' | undefined
            enterpriseAdminAccess?: 'access disabled' | 'access enabled' | undefined
            ipAssignmentMode?: string | undefined
            lanIsolationEnabled?: boolean | undefined
            minBitrate?: number | undefined
            name?: string | undefined
            perClientBandwidthLimitDown?: number | undefined
            perClientBandwidthLimitUp?: number | undefined
            psk?: string | undefined
            radiusAccountingEnabled?: boolean | undefined
            radiusAccountingServers?:
              | { host: string; port?: number | undefined; secret?: string | undefined }[]
              | undefined
            radiusAttributeForGroupPolicies?: string | undefined
            radiusCoaEnabled?: boolean | undefined
            radiusFailoverPolicy?: 'Allow access' | 'Deny access' | undefined
            radiusLoadBalancingPolicy?: 'Round robin' | 'Strict priority order' | undefined
            radiusOverride?: boolean | undefined
            radiusServers?:
              | { host: string; port?: number | undefined; secret?: string | undefined }[]
              | undefined
            secondaryConcentratorNetworkId?: string | undefined
            splashPage?:
              | 'Billing'
              | 'Cisco ISE'
              | 'Click-through splash page'
              | 'Facebook Wi-Fi'
              | 'Google Apps domain'
              | 'Google OAuth'
              | 'None'
              | 'Password-protected with Active Directory'
              | 'Password-protected with LDAP'
              | 'Password-protected with Meraki RADIUS'
              | 'Password-protected with custom RADIUS'
              | 'SMS authentication'
              | 'Sponsored guest'
              | 'Systems Manager Sentry'
              | undefined
            useVlanTagging?: boolean | undefined
            visible?: boolean | undefined
            vlanId?: number | undefined
            walledGardenEnabled?: boolean | undefined
            walledGardenRanges?: string | undefined
            wpaEncryptionMode?:
              | 'WPA1 and WPA2'
              | 'WPA1 only'
              | 'WPA2 only'
              | 'WPA3 Transition Mode'
              | 'WPA3 only'
              | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/ssids/:number/l3FirewallRules': {
      $get: {
        input: { param: { networkId: string; number: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { networkId: string; number: string } } & {
          json: {
            allowLanAccess?: boolean | undefined
            rules?:
              | {
                  comment?: string | undefined
                  destCidr: string
                  destPort?: string | undefined
                  policy: 'allow' | 'deny'
                  protocol: 'any' | 'icmp' | 'icmp6' | 'tcp' | 'udp'
                }[]
              | undefined
          }
        }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/ssids/:number/splashSettings': {
      $get: {
        input: { param: { networkId: string; number: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { networkId: string; number: string } } & {
          json: { splashUrl?: string | undefined; useSplashUrl?: boolean | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/staticRoutes': {
      $get: {
        input: { param: { networkId: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { networkId: string } } & {
          json: { gatewayIp: string; name: string; subnet: string }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/networks/:networkId/staticRoutes/:staticRouteId': {
      $delete: {
        input: { param: { networkId: string; staticRouteId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { networkId: string; staticRouteId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { networkId: string; staticRouteId: string } } & {
          json: {
            enabled?: boolean | undefined
            fixedIpAssignments?: { [x: string]: unknown } | undefined
            gatewayIp?: string | undefined
            name?: string | undefined
            reservedIpRanges?: { comment: string; end: string; start: string }[] | undefined
            subnet?: string | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/swapWarmSpare': {
      $post: {
        input: { param: { networkId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/switch/linkAggregations': {
      $get: {
        input: { param: { networkId: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { networkId: string } } & {
          json: {
            switchPorts?: { portId: string; serial: string }[] | undefined
            switchProfilePorts?: { portId: string; profile: string }[] | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/networks/:networkId/switch/linkAggregations/:linkAggregationId': {
      $delete: {
        input: { param: { networkId: string; linkAggregationId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $put: {
        input: { param: { networkId: string; linkAggregationId: string } } & {
          json: {
            switchPorts?: { portId: string; serial: string }[] | undefined
            switchProfilePorts?: { portId: string; profile: string }[] | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/switch/portSchedules': {
      $get: {
        input: { param: { networkId: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { networkId: string } } & {
          json: {
            name: string
            portSchedule?:
              | {
                  friday?:
                    | {
                        active?: boolean | undefined
                        from?: string | undefined
                        to?: string | undefined
                      }
                    | undefined
                  monday?:
                    | {
                        active?: boolean | undefined
                        from?: string | undefined
                        to?: string | undefined
                      }
                    | undefined
                  saturday?:
                    | {
                        active?: boolean | undefined
                        from?: string | undefined
                        to?: string | undefined
                      }
                    | undefined
                  sunday?:
                    | {
                        active?: boolean | undefined
                        from?: string | undefined
                        to?: string | undefined
                      }
                    | undefined
                  thursday?:
                    | {
                        active?: boolean | undefined
                        from?: string | undefined
                        to?: string | undefined
                      }
                    | undefined
                  tuesday?:
                    | {
                        active?: boolean | undefined
                        from?: string | undefined
                        to?: string | undefined
                      }
                    | undefined
                  wednesday?:
                    | {
                        active?: boolean | undefined
                        from?: string | undefined
                        to?: string | undefined
                      }
                    | undefined
                }
              | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/networks/:networkId/switch/portSchedules/:portScheduleId': {
      $delete: {
        input: { param: { networkId: string; portScheduleId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $put: {
        input: { param: { networkId: string; portScheduleId: string } } & {
          json: {
            name?: string | undefined
            portSchedule?:
              | {
                  friday?:
                    | {
                        active?: boolean | undefined
                        from?: string | undefined
                        to?: string | undefined
                      }
                    | undefined
                  monday?:
                    | {
                        active?: boolean | undefined
                        from?: string | undefined
                        to?: string | undefined
                      }
                    | undefined
                  saturday?:
                    | {
                        active?: boolean | undefined
                        from?: string | undefined
                        to?: string | undefined
                      }
                    | undefined
                  sunday?:
                    | {
                        active?: boolean | undefined
                        from?: string | undefined
                        to?: string | undefined
                      }
                    | undefined
                  thursday?:
                    | {
                        active?: boolean | undefined
                        from?: string | undefined
                        to?: string | undefined
                      }
                    | undefined
                  tuesday?:
                    | {
                        active?: boolean | undefined
                        from?: string | undefined
                        to?: string | undefined
                      }
                    | undefined
                  wednesday?:
                    | {
                        active?: boolean | undefined
                        from?: string | undefined
                        to?: string | undefined
                      }
                    | undefined
                }
              | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/switch/settings': {
      $get: {
        input: { param: { networkId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { networkId: string } } & {
          json: {
            powerExceptions?:
              | { powerType: 'combined' | 'redundant' | 'useNetworkSetting'; serial: string }[]
              | undefined
            useCombinedPower?: boolean | undefined
            vlan?: number | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/switch/settings/mtu': {
      $get: {
        input: { param: { networkId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { networkId: string } } & {
          json: {
            defaultMtuSize?: number | undefined
            overrides?:
              | {
                  mtuSize: number
                  switchProfiles?: string[] | undefined
                  switches?: string[] | undefined
                }[]
              | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/switch/settings/multicast': {
      $get: {
        input: { param: { networkId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { networkId: string } } & {
          json: {
            defaultSettings?:
              | {
                  floodUnknownMulticastTrafficEnabled?: boolean | undefined
                  igmpSnoopingEnabled?: boolean | undefined
                }
              | undefined
            overrides?:
              | {
                  floodUnknownMulticastTrafficEnabled: boolean
                  igmpSnoopingEnabled: boolean
                  stacks?: string[] | undefined
                  switchProfiles?: string[] | undefined
                  switches?: string[] | undefined
                }[]
              | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/switch/settings/qosRules': {
      $get: {
        input: { param: { networkId: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { networkId: string } } & {
          json: {
            dscp?: number | undefined
            dstPort?: number | undefined
            dstPortRange?: string | undefined
            protocol?: 'ANY' | 'TCP' | 'UDP' | undefined
            srcPort?: number | undefined
            srcPortRange?: string | undefined
            vlan: number
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/networks/:networkId/switch/settings/qosRules/order': {
      $get: {
        input: { param: { networkId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { networkId: string } } & { json: { ruleIds: string[] } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/switch/settings/qosRules/:qosRuleId': {
      $delete: {
        input: { param: { networkId: string; qosRuleId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { networkId: string; qosRuleId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { networkId: string; qosRuleId: string } } & {
          json: {
            dscp?: number | undefined
            dstPort?: number | undefined
            dstPortRange?: string | undefined
            protocol?: 'ANY' | 'TCP' | 'UDP' | undefined
            srcPort?: number | undefined
            srcPortRange?: string | undefined
            vlan?: number | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/switch/settings/stormControl': {
      $get: {
        input: { param: { networkId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { networkId: string } } & {
          json: {
            broadcastThreshold?: number | undefined
            multicastThreshold?: number | undefined
            unknownUnicastThreshold?: number | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/switchStacks': {
      $get: {
        input: { param: { networkId: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { networkId: string } } & { json: { name: string; serials: string[] } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/networks/:networkId/switchStacks/:switchStackId': {
      $delete: {
        input: { param: { networkId: string; switchStackId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { networkId: string; switchStackId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/switchStacks/:switchStackId/add': {
      $post: {
        input: { param: { networkId: string; switchStackId: string } } & {
          json: { serial: string }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/switchStacks/:switchStackId/remove': {
      $post: {
        input: { param: { networkId: string; switchStackId: string } } & {
          json: { serial: string }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/syslogServers': {
      $get: {
        input: { param: { networkId: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { networkId: string } } & {
          json: { servers: { host: string; port: number; roles: string[] }[] }
        }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/traffic': {
      $get: {
        input: { param: { networkId: string } } & {
          query: {
            t0?: string | undefined
            timespan?: number | undefined
            deviceType?: 'appliance' | 'combined' | 'switch' | 'wireless' | undefined
          }
        }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/unbind': {
      $post: {
        input: { param: { networkId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/networks/:networkId/uplinkSettings': {
      $get: {
        input: { param: { networkId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { networkId: string } } & {
          json: {
            bandwidthLimits?:
              | {
                  cellular?:
                    | { limitDown?: number | undefined; limitUp?: number | undefined }
                    | undefined
                  wan1?:
                    | { limitDown?: number | undefined; limitUp?: number | undefined }
                    | undefined
                  wan2?:
                    | { limitDown?: number | undefined; limitUp?: number | undefined }
                    | undefined
                }
              | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/vlans': {
      $get: {
        input: { param: { networkId: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { networkId: string } } & {
          json: {
            applianceIp: string
            groupPolicyId?: string | undefined
            id: string
            name: string
            subnet: string
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/networks/:networkId/vlans/:vlanId': {
      $delete: {
        input: { param: { networkId: string; vlanId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { networkId: string; vlanId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { networkId: string; vlanId: string } } & {
          json: {
            applianceIp?: string | undefined
            dhcpBootFilename?: string | undefined
            dhcpBootNextServer?: string | undefined
            dhcpBootOptionsEnabled?: boolean | undefined
            dhcpHandling?:
              | 'Do not respond to DHCP requests'
              | 'Relay DHCP to another server'
              | 'Run a DHCP server'
              | undefined
            dhcpLeaseTime?:
              | '1 day'
              | '1 hour'
              | '1 week'
              | '12 hours'
              | '30 minutes'
              | '4 hours'
              | undefined
            dhcpOptions?:
              | { code: string; type: 'hex' | 'integer' | 'ip' | 'text'; value: string }[]
              | undefined
            dhcpRelayServerIps?: string[] | undefined
            dnsNameservers?: string | undefined
            fixedIpAssignments?: { [x: string]: unknown } | undefined
            groupPolicyId?: string | undefined
            name?: string | undefined
            reservedIpRanges?: { comment: string; end: string; start: string }[] | undefined
            subnet?: string | undefined
            vpnNatSubnet?: string | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/vlansEnabledState': {
      $get: {
        input: { param: { networkId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { networkId: string } } & { json: { enabled: boolean } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/warmSpareSettings': {
      $get: {
        input: { param: { networkId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { networkId: string } } & {
          json: {
            enabled: boolean
            spareSerial?: string | undefined
            uplinkMode?: string | undefined
            virtualIp1?: string | undefined
            virtualIp2?: string | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/wireless/rfProfiles': {
      $get: {
        input: { param: { networkId: string } } & {
          query: { includeTemplateProfiles?: boolean | undefined }
        }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { networkId: string } } & {
          json: {
            apBandSettings?:
              | {
                  bandOperationMode?: '2.4ghz' | '5ghz' | 'dual' | undefined
                  bandSteeringEnabled?: boolean | undefined
                }
              | undefined
            bandSelectionType: 'ap' | 'ssid'
            clientBalancingEnabled?: boolean | undefined
            fiveGhzSettings?:
              | {
                  channelWidth?: string | undefined
                  maxPower?: number | undefined
                  minBitrate?: number | undefined
                  minPower?: number | undefined
                  rxsop?: number | undefined
                  validAutoChannels?: number[] | undefined
                }
              | undefined
            minBitrateType?: 'band' | 'ssid' | undefined
            name: string
            twoFourGhzSettings?:
              | {
                  axEnabled?: boolean | undefined
                  maxPower?: number | undefined
                  minBitrate?: number | undefined
                  minPower?: number | undefined
                  rxsop?: number | undefined
                  validAutoChannels?: number[] | undefined
                }
              | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/networks/:networkId/wireless/rfProfiles/:rfProfileId': {
      $delete: {
        input: { param: { networkId: string; rfProfileId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { networkId: string; rfProfileId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { networkId: string; rfProfileId: string } } & {
          json: {
            apBandSettings?:
              | {
                  bandOperationMode?: '2.4ghz' | '5ghz' | 'dual' | undefined
                  bandSteeringEnabled?: boolean | undefined
                }
              | undefined
            bandSelectionType?: 'ap' | 'ssid' | undefined
            clientBalancingEnabled?: boolean | undefined
            fiveGhzSettings?:
              | {
                  channelWidth?: string | undefined
                  maxPower?: number | undefined
                  minBitrate?: number | undefined
                  minPower?: number | undefined
                  rxsop?: number | undefined
                  validAutoChannels?: number[] | undefined
                }
              | undefined
            minBitrateType?: 'band' | 'ssid' | undefined
            name?: string | undefined
            twoFourGhzSettings?:
              | {
                  axEnabled?: boolean | undefined
                  maxPower?: number | undefined
                  minBitrate?: number | undefined
                  minPower?: number | undefined
                  rxsop?: number | undefined
                  validAutoChannels?: number[] | undefined
                }
              | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:networkId/wireless/settings': {
      $get: {
        input: { param: { networkId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { networkId: string } } & {
          json: {
            ipv6BridgeEnabled?: boolean | undefined
            ledLightsOn?: boolean | undefined
            locationAnalyticsEnabled?: boolean | undefined
            meshingEnabled?: boolean | undefined
            upgradeStrategy?: 'minimizeClientDowntime' | 'minimizeUpgradeTime' | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:network_id/sm/devices/lock': {
      $put: {
        input: { param: { network_id: string } } & {
          json: {
            ids?: string | undefined
            pin?: number | undefined
            scope?: string | undefined
            serials?: string | undefined
            wifiMacs?: string | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:network_id/sm/:id/connectivity': {
      $get: {
        input: { param: { network_id: string; id: string } } & {
          query: {
            perPage?: number | undefined
            startingAfter?: string | undefined
            endingBefore?: string | undefined
          }
        }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:network_id/sm/:id/desktopLogs': {
      $get: {
        input: { param: { network_id: string; id: string } } & {
          query: {
            perPage?: number | undefined
            startingAfter?: string | undefined
            endingBefore?: string | undefined
          }
        }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:network_id/sm/:id/deviceCommandLogs': {
      $get: {
        input: { param: { network_id: string; id: string } } & {
          query: {
            perPage?: number | undefined
            startingAfter?: string | undefined
            endingBefore?: string | undefined
          }
        }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/networks/:network_id/sm/:id/performanceHistory': {
      $get: {
        input: { param: { network_id: string; id: string } } & {
          query: {
            perPage?: number | undefined
            startingAfter?: string | undefined
            endingBefore?: string | undefined
          }
        }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations': {
      $get: { input: {}; output: { [x: string]: unknown }[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/organizations/:organizationId': {
      $get: {
        input: { param: { organizationId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:organizationId/actionBatches': {
      $get: {
        input: { param: { organizationId: string } } & {
          query: { status?: 'completed' | 'failed' | 'pending' | undefined }
        }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { organizationId: string } } & {
          json: {
            actions: {
              body?: { [x: string]: unknown } | undefined
              operation: string
              resource: string
            }[]
            confirmed?: boolean | undefined
            synchronous?: boolean | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/organizations/:organizationId/actionBatches/:actionBatchId': {
      $delete: {
        input: { param: { organizationId: string; actionBatchId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $put: {
        input: { param: { organizationId: string; actionBatchId: string } } & {
          json: { confirmed?: boolean | undefined; synchronous?: boolean | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:organizationId/admins': {
      $get: {
        input: { param: { organizationId: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { organizationId: string } } & {
          json: {
            authenticationMethod?: 'Cisco SecureX Sign-On' | 'Email' | undefined
            email: string
            name: string
            networks?: { access: string; id: string }[] | undefined
            orgAccess: 'enterprise' | 'full' | 'none' | 'read-only'
            tags?: { access: string; tag: string }[] | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/organizations/:organizationId/admins/:adminId': {
      $delete: {
        input: { param: { organizationId: string; adminId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $put: {
        input: { param: { organizationId: string; adminId: string } } & {
          json: {
            name?: string | undefined
            networks?: { access: string; id: string }[] | undefined
            orgAccess?: 'enterprise' | 'full' | 'none' | 'read-only' | undefined
            tags?: { access: string; tag: string }[] | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:organizationId/apiRequests': {
      $get: {
        input: { param: { organizationId: string } } & {
          query: {
            t0?: string | undefined
            t1?: string | undefined
            timespan?: number | undefined
            perPage?: number | undefined
            startingAfter?: string | undefined
            endingBefore?: string | undefined
            adminId?: string | undefined
            path?: string | undefined
            method?: string | undefined
            responseCode?: number | undefined
            sourceIp?: string | undefined
          }
        }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:organizationId/apiRequests/overview': {
      $get: {
        input: { param: { organizationId: string } } & {
          query: { t0?: string | undefined; t1?: string | undefined; timespan?: number | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:organizationId/claim': {
      $post: {
        input: { param: { organizationId: string } } & {
          json: {
            licenses?: { key: string; mode?: 'addDevices' | 'renew' | undefined }[] | undefined
            orders?: string[] | undefined
            serials?: string[] | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:organizationId/clone': {
      $post: {
        input: { param: { organizationId: string } } & { json: { name: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/organizations/:organizationId/configTemplates': {
      $get: {
        input: { param: { organizationId: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:organizationId/configTemplates/:configTemplateId': {
      $delete: {
        input: { param: { organizationId: string; configTemplateId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/organizations/:organizationId/configTemplates/:configTemplateId/switchProfiles': {
      $get: {
        input: { param: { organizationId: string; configTemplateId: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:organizationId/configurationChanges': {
      $get: {
        input: { param: { organizationId: string } } & {
          query: {
            t0?: string | undefined
            t1?: string | undefined
            timespan?: number | undefined
            perPage?: number | undefined
            startingAfter?: string | undefined
            endingBefore?: string | undefined
            networkId?: string | undefined
            adminId?: string | undefined
          }
        }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:organizationId/deviceStatuses': {
      $get: {
        input: { param: { organizationId: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:organizationId/devices': {
      $get: {
        input: { param: { organizationId: string } } & {
          query: {
            perPage?: number | undefined
            startingAfter?: string | undefined
            endingBefore?: string | undefined
            configurationUpdatedAfter?: string | undefined
          }
        }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:organizationId/insight/monitoredMediaServers': {
      $get: {
        input: { param: { organizationId: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { organizationId: string } } & { json: { address: string; name: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/organizations/:organizationId/insight/monitoredMediaServers/:monitoredMediaServerId': {
      $delete: {
        input: { param: { organizationId: string; monitoredMediaServerId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { organizationId: string; monitoredMediaServerId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { organizationId: string; monitoredMediaServerId: string } } & {
          json: { address?: string | undefined; name?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:organizationId/inventory': {
      $get: {
        input: { param: { organizationId: string } } & {
          query: { includeLicenseInfo?: boolean | undefined }
        }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:organizationId/licenseState': {
      $get: {
        input: { param: { organizationId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:organizationId/licenses': {
      $get: {
        input: { param: { organizationId: string } } & {
          query: {
            perPage?: number | undefined
            startingAfter?: string | undefined
            endingBefore?: string | undefined
            deviceSerial?: string | undefined
            networkId?: string | undefined
            state?:
              | 'active'
              | 'expired'
              | 'expiring'
              | 'recentlyQueued'
              | 'unused'
              | 'unusedActive'
              | undefined
          }
        }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:organizationId/licenses/assignSeats': {
      $post: {
        input: { param: { organizationId: string } } & {
          json: { licenseId: string; networkId: string; seatCount: number }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:organizationId/licenses/moveSeats': {
      $post: {
        input: { param: { organizationId: string } } & {
          json: { destOrganizationId: string; licenseId: string; seatCount: number }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:organizationId/licenses/renewSeats': {
      $post: {
        input: { param: { organizationId: string } } & {
          json: { licenseIdToRenew: string; unusedLicenseId: string }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:organizationId/licenses/:licenseId': {
      $get: {
        input: { param: { organizationId: string; licenseId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:organizationId/networks': {
      $get: {
        input: { param: { organizationId: string } } & {
          query: { configTemplateId?: string | undefined }
        }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { organizationId: string } } & {
          json: {
            copyFromNetworkId?: string | undefined
            disableMyMerakiCom?: boolean | undefined
            disableRemoteStatusPage?: boolean | undefined
            name: string
            tags?: string | undefined
            timeZone?: string | undefined
            type: string
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/organizations/:organizationId/networks/combine': {
      $post: {
        input: { param: { organizationId: string } } & {
          json: { enrollmentString?: string | undefined; name: string; networkIds: string[] }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:organizationId/openapiSpec': {
      $get: {
        input: { param: { organizationId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:organizationId/samlRoles': {
      $get: {
        input: { param: { organizationId: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { organizationId: string } } & {
          json: {
            networks?: { access: string; id: string }[] | undefined
            orgAccess: string
            role: string
            tags?: { access: string; tag: string }[] | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/organizations/:organizationId/samlRoles/:samlRoleId': {
      $get: {
        input: { param: { organizationId: string; samlRoleId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { organizationId: string; samlRoleId: string } } & {
          json: {
            networks?: { access: string; id: string }[] | undefined
            orgAccess?: string | undefined
            role?: string | undefined
            tags?: { access: string; tag: string }[] | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:organizationId/security/intrusionSettings': {
      $get: {
        input: { param: { organizationId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { organizationId: string } } & {
          json: { whitelistedRules: { message?: string | undefined; ruleId: string }[] }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:organizationId/securityEvents': {
      $get: {
        input: { param: { organizationId: string } } & {
          query: {
            t0?: string | undefined
            t1?: string | undefined
            timespan?: number | undefined
            perPage?: number | undefined
            startingAfter?: string | undefined
            endingBefore?: string | undefined
          }
        }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:organizationId/snmp': {
      $get: {
        input: { param: { organizationId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:organizationId/thirdPartyVPNPeers': {
      $get: {
        input: { param: { organizationId: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { organizationId: string } } & {
          json: {
            peers: {
              ikeVersion?: '1' | '2' | undefined
              ipsecPolicies?:
                | {
                    childAuthAlgo?: string[] | undefined
                    childCipherAlgo?: string[] | undefined
                    childLifetime?: number | undefined
                    childPfsGroup?: string[] | undefined
                    ikeAuthAlgo?: string[] | undefined
                    ikeCipherAlgo?: string[] | undefined
                    ikeDiffieHellmanGroup?: string[] | undefined
                    ikeLifetime?: number | undefined
                    ikePrfAlgo?: ('default' | 'prfmd5' | 'prfsha1' | 'prfsha256')[] | undefined
                  }
                | undefined
              ipsecPoliciesPreset?: string | undefined
              name: string
              networkTags?: string[] | undefined
              privateSubnets: string[]
              publicIp: string
              remoteId?: string | undefined
              secret: string
            }[]
          }
        }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:organizationId/uplinksLossAndLatency': {
      $get: {
        input: { param: { organizationId: string } } & {
          query: {
            t0?: string | undefined
            t1?: string | undefined
            timespan?: number | undefined
            uplink?: 'cellular' | 'wan1' | 'wan2' | undefined
            ip?: string | undefined
          }
        }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:organizationId/vpnFirewallRules': {
      $get: {
        input: { param: { organizationId: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { organizationId: string } } & {
          json: {
            rules?:
              | {
                  comment?: string | undefined
                  destCidr: string
                  destPort?: string | undefined
                  policy: 'allow' | 'deny'
                  protocol: 'any' | 'icmp' | 'icmp6' | 'tcp' | 'udp'
                  srcCidr: string
                  srcPort?: string | undefined
                  syslogEnabled?: boolean | undefined
                }[]
              | undefined
            syslogDefaultRule?: boolean | undefined
          }
        }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
