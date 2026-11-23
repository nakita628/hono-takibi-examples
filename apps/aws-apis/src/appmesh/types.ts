type TagRef = { key: {}; value: {} }
type ResourceMetadata = {
  arn: {}
  createdAt: {}
  lastUpdatedAt: {}
  meshOwner: {}
  resourceOwner: {}
  uid: {}
  version: {}
}
type CreateGatewayRouteOutput = {
  gatewayRoute: {
    gatewayRouteName: {}
    meshName: {}
    metadata: ResourceMetadata
    spec: {
      grpcRoute?:
        | {
            action: {
              rewrite?:
                | { hostname?: { defaultTargetHostname?: {} | undefined } | undefined }
                | undefined
              target: { port?: {} | undefined; virtualService: { virtualServiceName: {} } }
            }
            match: {
              hostname?: { exact?: {} | undefined; suffix?: {} | undefined } | undefined
              metadata?: {} | undefined
              port?: {} | undefined
              serviceName?: {} | undefined
            }
          }
        | undefined
      http2Route?:
        | {
            action: {
              rewrite?:
                | {
                    hostname?: { defaultTargetHostname?: {} | undefined } | undefined
                    path?: { exact?: {} | undefined } | undefined
                    prefix?: { defaultPrefix?: {} | undefined; value?: {} | undefined } | undefined
                  }
                | undefined
              target: { port?: {} | undefined; virtualService: { virtualServiceName: {} } }
            }
            match: {
              headers?: {} | undefined
              hostname?: { exact?: {} | undefined; suffix?: {} | undefined } | undefined
              method?: {} | undefined
              path?: { exact?: {} | undefined; regex?: {} | undefined } | undefined
              port?: {} | undefined
              prefix?: {} | undefined
              queryParameters?: {} | undefined
            }
          }
        | undefined
      httpRoute?:
        | {
            action: {
              rewrite?:
                | {
                    hostname?: { defaultTargetHostname?: {} | undefined } | undefined
                    path?: { exact?: {} | undefined } | undefined
                    prefix?: { defaultPrefix?: {} | undefined; value?: {} | undefined } | undefined
                  }
                | undefined
              target: { port?: {} | undefined; virtualService: { virtualServiceName: {} } }
            }
            match: {
              headers?: {} | undefined
              hostname?: { exact?: {} | undefined; suffix?: {} | undefined } | undefined
              method?: {} | undefined
              path?: { exact?: {} | undefined; regex?: {} | undefined } | undefined
              port?: {} | undefined
              prefix?: {} | undefined
              queryParameters?: {} | undefined
            }
          }
        | undefined
      priority?: {} | undefined
    }
    status: { status: {} }
    virtualGatewayName: {}
  }
}
type ListGatewayRoutesOutput = { gatewayRoutes: {}; nextToken?: {} | undefined }
type MeshServiceDiscovery = { ipPreference?: {} | undefined }
type CreateMeshOutput = {
  mesh: {
    meshName: {}
    metadata: {
      arn: {}
      createdAt: {}
      lastUpdatedAt: {}
      meshOwner: {}
      resourceOwner: {}
      uid: {}
      version: {}
    }
    spec: {
      egressFilter?: { type: {} } | undefined
      serviceDiscovery?: MeshServiceDiscovery | undefined
    }
    status: { status?: {} | undefined }
  }
}
type ListMeshesOutput = { meshes: {}; nextToken?: {} | undefined }
type CreateRouteOutput = {
  route: {
    meshName: {}
    metadata: {
      arn: {}
      createdAt: {}
      lastUpdatedAt: {}
      meshOwner: {}
      resourceOwner: {}
      uid: {}
      version: {}
    }
    routeName: {}
    spec: {
      grpcRoute?:
        | {
            action: { weightedTargets: {} }
            match: {
              metadata?: {} | undefined
              methodName?: {} | undefined
              port?: {} | undefined
              serviceName?: {} | undefined
            }
            retryPolicy?:
              | {
                  grpcRetryEvents?: {} | undefined
                  httpRetryEvents?: {} | undefined
                  maxRetries: {}
                  perRetryTimeout: { unit?: {} | undefined; value?: {} | undefined }
                  tcpRetryEvents?: {} | undefined
                }
              | undefined
            timeout?:
              | {
                  idle?: { unit?: {} | undefined; value?: {} | undefined } | undefined
                  perRequest?: { unit?: {} | undefined; value?: {} | undefined } | undefined
                }
              | undefined
          }
        | undefined
      http2Route?:
        | {
            action: { weightedTargets: {} }
            match: {
              headers?: {} | undefined
              method?: {} | undefined
              path?: { exact?: {} | undefined; regex?: {} | undefined } | undefined
              port?: {} | undefined
              prefix?: {} | undefined
              queryParameters?: {} | undefined
              scheme?: {} | undefined
            }
            retryPolicy?:
              | {
                  httpRetryEvents?: {} | undefined
                  maxRetries: {}
                  perRetryTimeout: { unit?: {} | undefined; value?: {} | undefined }
                  tcpRetryEvents?: {} | undefined
                }
              | undefined
            timeout?:
              | {
                  idle?: { unit?: {} | undefined; value?: {} | undefined } | undefined
                  perRequest?: { unit?: {} | undefined; value?: {} | undefined } | undefined
                }
              | undefined
          }
        | undefined
      httpRoute?:
        | {
            action: { weightedTargets: {} }
            match: {
              headers?: {} | undefined
              method?: {} | undefined
              path?: { exact?: {} | undefined; regex?: {} | undefined } | undefined
              port?: {} | undefined
              prefix?: {} | undefined
              queryParameters?: {} | undefined
              scheme?: {} | undefined
            }
            retryPolicy?:
              | {
                  httpRetryEvents?: {} | undefined
                  maxRetries: {}
                  perRetryTimeout: { unit?: {} | undefined; value?: {} | undefined }
                  tcpRetryEvents?: {} | undefined
                }
              | undefined
            timeout?:
              | {
                  idle?: { unit?: {} | undefined; value?: {} | undefined } | undefined
                  perRequest?: { unit?: {} | undefined; value?: {} | undefined } | undefined
                }
              | undefined
          }
        | undefined
      priority?: {} | undefined
      tcpRoute?:
        | {
            action: { weightedTargets: {} }
            match?: { port?: {} | undefined } | undefined
            timeout?:
              | { idle?: { unit?: {} | undefined; value?: {} | undefined } | undefined }
              | undefined
          }
        | undefined
    }
    status: { status: {} }
    virtualRouterName: {}
  }
}
type ListRoutesOutput = { nextToken?: {} | undefined; routes: {} }
type VirtualGatewayLogging = {
  accessLog?:
    | {
        file?:
          | { format?: { json?: {} | undefined; text?: {} | undefined } | undefined; path: {} }
          | undefined
      }
    | undefined
}
type CreateVirtualGatewayOutput = {
  virtualGateway: {
    meshName: {}
    metadata: ResourceMetadata
    spec: {
      backendDefaults?:
        | {
            clientPolicy?:
              | {
                  tls?:
                    | {
                        certificate?:
                          | {
                              file?: { certificateChain: {}; privateKey: {} } | undefined
                              sds?: { secretName: {} } | undefined
                            }
                          | undefined
                        enforce?: {} | undefined
                        ports?: {} | undefined
                        validation: {
                          subjectAlternativeNames?: { match: { exact: {} } } | undefined
                          trust: {
                            acm?: { certificateAuthorityArns: {} } | undefined
                            file?: { certificateChain: {} } | undefined
                            sds?: { secretName: {} } | undefined
                          }
                        }
                      }
                    | undefined
                }
              | undefined
          }
        | undefined
      listeners: {}
      logging?: VirtualGatewayLogging | undefined
    }
    status: { status: {} }
    virtualGatewayName: {}
  }
}
type ListVirtualGatewaysOutput = { nextToken?: {} | undefined; virtualGateways: {} }
type CreateVirtualNodeOutput = {
  virtualNode: {
    meshName: {}
    metadata: {
      arn: {}
      createdAt: {}
      lastUpdatedAt: {}
      meshOwner: {}
      resourceOwner: {}
      uid: {}
      version: {}
    }
    spec: {
      backendDefaults?:
        | {
            clientPolicy?:
              | {
                  tls?:
                    | {
                        certificate?:
                          | {
                              file?: { certificateChain: {}; privateKey: {} } | undefined
                              sds?: { secretName: {} } | undefined
                            }
                          | undefined
                        enforce?: {} | undefined
                        ports?: {} | undefined
                        validation: {
                          subjectAlternativeNames?: { match: { exact: {} } } | undefined
                          trust: {
                            acm?: { certificateAuthorityArns: {} } | undefined
                            file?: { certificateChain: {} } | undefined
                            sds?: { secretName: {} } | undefined
                          }
                        }
                      }
                    | undefined
                }
              | undefined
          }
        | undefined
      backends?: {} | undefined
      listeners?: {} | undefined
      logging?:
        | {
            accessLog?:
              | {
                  file?:
                    | {
                        format?: { json?: {} | undefined; text?: {} | undefined } | undefined
                        path: {}
                      }
                    | undefined
                }
              | undefined
          }
        | undefined
      serviceDiscovery?:
        | {
            awsCloudMap?:
              | {
                  attributes?: {} | undefined
                  ipPreference?: {} | undefined
                  namespaceName: {}
                  serviceName: {}
                }
              | undefined
            dns?:
              | { hostname: {}; ipPreference?: {} | undefined; responseType?: {} | undefined }
              | undefined
          }
        | undefined
    }
    status: { status: {} }
    virtualNodeName: {}
  }
}
type ListVirtualNodesOutput = { nextToken?: {} | undefined; virtualNodes: {} }
type CreateVirtualRouterOutput = {
  virtualRouter: {
    meshName: {}
    metadata: {
      arn: {}
      createdAt: {}
      lastUpdatedAt: {}
      meshOwner: {}
      resourceOwner: {}
      uid: {}
      version: {}
    }
    spec: { listeners?: {} | undefined }
    status: { status: {} }
    virtualRouterName: {}
  }
}
type ListVirtualRoutersOutput = { nextToken?: {} | undefined; virtualRouters: {} }
type CreateVirtualServiceOutput = {
  virtualService: {
    meshName: {}
    metadata: ResourceMetadata
    spec: {
      provider?:
        | {
            virtualNode?: { virtualNodeName: {} } | undefined
            virtualRouter?: { virtualRouterName: {} } | undefined
          }
        | undefined
    }
    status: { status: {} }
    virtualServiceName: {}
  }
}
type ListVirtualServicesOutput = { nextToken?: {} | undefined; virtualServices: {} }
type DeleteGatewayRouteOutput = {
  gatewayRoute: {
    gatewayRouteName: {}
    meshName: {}
    metadata: ResourceMetadata
    spec: {
      grpcRoute?:
        | {
            action: {
              rewrite?:
                | { hostname?: { defaultTargetHostname?: {} | undefined } | undefined }
                | undefined
              target: { port?: {} | undefined; virtualService: { virtualServiceName: {} } }
            }
            match: {
              hostname?: { exact?: {} | undefined; suffix?: {} | undefined } | undefined
              metadata?: {} | undefined
              port?: {} | undefined
              serviceName?: {} | undefined
            }
          }
        | undefined
      http2Route?:
        | {
            action: {
              rewrite?:
                | {
                    hostname?: { defaultTargetHostname?: {} | undefined } | undefined
                    path?: { exact?: {} | undefined } | undefined
                    prefix?: { defaultPrefix?: {} | undefined; value?: {} | undefined } | undefined
                  }
                | undefined
              target: { port?: {} | undefined; virtualService: { virtualServiceName: {} } }
            }
            match: {
              headers?: {} | undefined
              hostname?: { exact?: {} | undefined; suffix?: {} | undefined } | undefined
              method?: {} | undefined
              path?: { exact?: {} | undefined; regex?: {} | undefined } | undefined
              port?: {} | undefined
              prefix?: {} | undefined
              queryParameters?: {} | undefined
            }
          }
        | undefined
      httpRoute?:
        | {
            action: {
              rewrite?:
                | {
                    hostname?: { defaultTargetHostname?: {} | undefined } | undefined
                    path?: { exact?: {} | undefined } | undefined
                    prefix?: { defaultPrefix?: {} | undefined; value?: {} | undefined } | undefined
                  }
                | undefined
              target: { port?: {} | undefined; virtualService: { virtualServiceName: {} } }
            }
            match: {
              headers?: {} | undefined
              hostname?: { exact?: {} | undefined; suffix?: {} | undefined } | undefined
              method?: {} | undefined
              path?: { exact?: {} | undefined; regex?: {} | undefined } | undefined
              port?: {} | undefined
              prefix?: {} | undefined
              queryParameters?: {} | undefined
            }
          }
        | undefined
      priority?: {} | undefined
    }
    status: { status: {} }
    virtualGatewayName: {}
  }
}
type DescribeGatewayRouteOutput = {
  gatewayRoute: {
    gatewayRouteName: {}
    meshName: {}
    metadata: ResourceMetadata
    spec: {
      grpcRoute?:
        | {
            action: {
              rewrite?:
                | { hostname?: { defaultTargetHostname?: {} | undefined } | undefined }
                | undefined
              target: { port?: {} | undefined; virtualService: { virtualServiceName: {} } }
            }
            match: {
              hostname?: { exact?: {} | undefined; suffix?: {} | undefined } | undefined
              metadata?: {} | undefined
              port?: {} | undefined
              serviceName?: {} | undefined
            }
          }
        | undefined
      http2Route?:
        | {
            action: {
              rewrite?:
                | {
                    hostname?: { defaultTargetHostname?: {} | undefined } | undefined
                    path?: { exact?: {} | undefined } | undefined
                    prefix?: { defaultPrefix?: {} | undefined; value?: {} | undefined } | undefined
                  }
                | undefined
              target: { port?: {} | undefined; virtualService: { virtualServiceName: {} } }
            }
            match: {
              headers?: {} | undefined
              hostname?: { exact?: {} | undefined; suffix?: {} | undefined } | undefined
              method?: {} | undefined
              path?: { exact?: {} | undefined; regex?: {} | undefined } | undefined
              port?: {} | undefined
              prefix?: {} | undefined
              queryParameters?: {} | undefined
            }
          }
        | undefined
      httpRoute?:
        | {
            action: {
              rewrite?:
                | {
                    hostname?: { defaultTargetHostname?: {} | undefined } | undefined
                    path?: { exact?: {} | undefined } | undefined
                    prefix?: { defaultPrefix?: {} | undefined; value?: {} | undefined } | undefined
                  }
                | undefined
              target: { port?: {} | undefined; virtualService: { virtualServiceName: {} } }
            }
            match: {
              headers?: {} | undefined
              hostname?: { exact?: {} | undefined; suffix?: {} | undefined } | undefined
              method?: {} | undefined
              path?: { exact?: {} | undefined; regex?: {} | undefined } | undefined
              port?: {} | undefined
              prefix?: {} | undefined
              queryParameters?: {} | undefined
            }
          }
        | undefined
      priority?: {} | undefined
    }
    status: { status: {} }
    virtualGatewayName: {}
  }
}
type UpdateGatewayRouteOutput = {
  gatewayRoute: {
    gatewayRouteName: {}
    meshName: {}
    metadata: ResourceMetadata
    spec: {
      grpcRoute?:
        | {
            action: {
              rewrite?:
                | { hostname?: { defaultTargetHostname?: {} | undefined } | undefined }
                | undefined
              target: { port?: {} | undefined; virtualService: { virtualServiceName: {} } }
            }
            match: {
              hostname?: { exact?: {} | undefined; suffix?: {} | undefined } | undefined
              metadata?: {} | undefined
              port?: {} | undefined
              serviceName?: {} | undefined
            }
          }
        | undefined
      http2Route?:
        | {
            action: {
              rewrite?:
                | {
                    hostname?: { defaultTargetHostname?: {} | undefined } | undefined
                    path?: { exact?: {} | undefined } | undefined
                    prefix?: { defaultPrefix?: {} | undefined; value?: {} | undefined } | undefined
                  }
                | undefined
              target: { port?: {} | undefined; virtualService: { virtualServiceName: {} } }
            }
            match: {
              headers?: {} | undefined
              hostname?: { exact?: {} | undefined; suffix?: {} | undefined } | undefined
              method?: {} | undefined
              path?: { exact?: {} | undefined; regex?: {} | undefined } | undefined
              port?: {} | undefined
              prefix?: {} | undefined
              queryParameters?: {} | undefined
            }
          }
        | undefined
      httpRoute?:
        | {
            action: {
              rewrite?:
                | {
                    hostname?: { defaultTargetHostname?: {} | undefined } | undefined
                    path?: { exact?: {} | undefined } | undefined
                    prefix?: { defaultPrefix?: {} | undefined; value?: {} | undefined } | undefined
                  }
                | undefined
              target: { port?: {} | undefined; virtualService: { virtualServiceName: {} } }
            }
            match: {
              headers?: {} | undefined
              hostname?: { exact?: {} | undefined; suffix?: {} | undefined } | undefined
              method?: {} | undefined
              path?: { exact?: {} | undefined; regex?: {} | undefined } | undefined
              port?: {} | undefined
              prefix?: {} | undefined
              queryParameters?: {} | undefined
            }
          }
        | undefined
      priority?: {} | undefined
    }
    status: { status: {} }
    virtualGatewayName: {}
  }
}
type DeleteMeshOutput = {
  mesh: {
    meshName: {}
    metadata: {
      arn: {}
      createdAt: {}
      lastUpdatedAt: {}
      meshOwner: {}
      resourceOwner: {}
      uid: {}
      version: {}
    }
    spec: {
      egressFilter?: { type: {} } | undefined
      serviceDiscovery?: MeshServiceDiscovery | undefined
    }
    status: { status?: {} | undefined }
  }
}
type DescribeMeshOutput = {
  mesh: {
    meshName: {}
    metadata: {
      arn: {}
      createdAt: {}
      lastUpdatedAt: {}
      meshOwner: {}
      resourceOwner: {}
      uid: {}
      version: {}
    }
    spec: {
      egressFilter?: { type: {} } | undefined
      serviceDiscovery?: MeshServiceDiscovery | undefined
    }
    status: { status?: {} | undefined }
  }
}
type MeshData = {
  meshName: {}
  metadata: {
    arn: {}
    createdAt: {}
    lastUpdatedAt: {}
    meshOwner: {}
    resourceOwner: {}
    uid: {}
    version: {}
  }
  spec: {
    egressFilter?: { type: {} } | undefined
    serviceDiscovery?: MeshServiceDiscovery | undefined
  }
  status: { status?: {} | undefined }
}
type UpdateMeshOutput = { mesh: MeshData }
type DeleteRouteOutput = {
  route: {
    meshName: {}
    metadata: {
      arn: {}
      createdAt: {}
      lastUpdatedAt: {}
      meshOwner: {}
      resourceOwner: {}
      uid: {}
      version: {}
    }
    routeName: {}
    spec: {
      grpcRoute?:
        | {
            action: { weightedTargets: {} }
            match: {
              metadata?: {} | undefined
              methodName?: {} | undefined
              port?: {} | undefined
              serviceName?: {} | undefined
            }
            retryPolicy?:
              | {
                  grpcRetryEvents?: {} | undefined
                  httpRetryEvents?: {} | undefined
                  maxRetries: {}
                  perRetryTimeout: { unit?: {} | undefined; value?: {} | undefined }
                  tcpRetryEvents?: {} | undefined
                }
              | undefined
            timeout?:
              | {
                  idle?: { unit?: {} | undefined; value?: {} | undefined } | undefined
                  perRequest?: { unit?: {} | undefined; value?: {} | undefined } | undefined
                }
              | undefined
          }
        | undefined
      http2Route?:
        | {
            action: { weightedTargets: {} }
            match: {
              headers?: {} | undefined
              method?: {} | undefined
              path?: { exact?: {} | undefined; regex?: {} | undefined } | undefined
              port?: {} | undefined
              prefix?: {} | undefined
              queryParameters?: {} | undefined
              scheme?: {} | undefined
            }
            retryPolicy?:
              | {
                  httpRetryEvents?: {} | undefined
                  maxRetries: {}
                  perRetryTimeout: { unit?: {} | undefined; value?: {} | undefined }
                  tcpRetryEvents?: {} | undefined
                }
              | undefined
            timeout?:
              | {
                  idle?: { unit?: {} | undefined; value?: {} | undefined } | undefined
                  perRequest?: { unit?: {} | undefined; value?: {} | undefined } | undefined
                }
              | undefined
          }
        | undefined
      httpRoute?:
        | {
            action: { weightedTargets: {} }
            match: {
              headers?: {} | undefined
              method?: {} | undefined
              path?: { exact?: {} | undefined; regex?: {} | undefined } | undefined
              port?: {} | undefined
              prefix?: {} | undefined
              queryParameters?: {} | undefined
              scheme?: {} | undefined
            }
            retryPolicy?:
              | {
                  httpRetryEvents?: {} | undefined
                  maxRetries: {}
                  perRetryTimeout: { unit?: {} | undefined; value?: {} | undefined }
                  tcpRetryEvents?: {} | undefined
                }
              | undefined
            timeout?:
              | {
                  idle?: { unit?: {} | undefined; value?: {} | undefined } | undefined
                  perRequest?: { unit?: {} | undefined; value?: {} | undefined } | undefined
                }
              | undefined
          }
        | undefined
      priority?: {} | undefined
      tcpRoute?:
        | {
            action: { weightedTargets: {} }
            match?: { port?: {} | undefined } | undefined
            timeout?:
              | { idle?: { unit?: {} | undefined; value?: {} | undefined } | undefined }
              | undefined
          }
        | undefined
    }
    status: { status: {} }
    virtualRouterName: {}
  }
}
type DescribeRouteOutput = {
  route: {
    meshName: {}
    metadata: {
      arn: {}
      createdAt: {}
      lastUpdatedAt: {}
      meshOwner: {}
      resourceOwner: {}
      uid: {}
      version: {}
    }
    routeName: {}
    spec: {
      grpcRoute?:
        | {
            action: { weightedTargets: {} }
            match: {
              metadata?: {} | undefined
              methodName?: {} | undefined
              port?: {} | undefined
              serviceName?: {} | undefined
            }
            retryPolicy?:
              | {
                  grpcRetryEvents?: {} | undefined
                  httpRetryEvents?: {} | undefined
                  maxRetries: {}
                  perRetryTimeout: { unit?: {} | undefined; value?: {} | undefined }
                  tcpRetryEvents?: {} | undefined
                }
              | undefined
            timeout?:
              | {
                  idle?: { unit?: {} | undefined; value?: {} | undefined } | undefined
                  perRequest?: { unit?: {} | undefined; value?: {} | undefined } | undefined
                }
              | undefined
          }
        | undefined
      http2Route?:
        | {
            action: { weightedTargets: {} }
            match: {
              headers?: {} | undefined
              method?: {} | undefined
              path?: { exact?: {} | undefined; regex?: {} | undefined } | undefined
              port?: {} | undefined
              prefix?: {} | undefined
              queryParameters?: {} | undefined
              scheme?: {} | undefined
            }
            retryPolicy?:
              | {
                  httpRetryEvents?: {} | undefined
                  maxRetries: {}
                  perRetryTimeout: { unit?: {} | undefined; value?: {} | undefined }
                  tcpRetryEvents?: {} | undefined
                }
              | undefined
            timeout?:
              | {
                  idle?: { unit?: {} | undefined; value?: {} | undefined } | undefined
                  perRequest?: { unit?: {} | undefined; value?: {} | undefined } | undefined
                }
              | undefined
          }
        | undefined
      httpRoute?:
        | {
            action: { weightedTargets: {} }
            match: {
              headers?: {} | undefined
              method?: {} | undefined
              path?: { exact?: {} | undefined; regex?: {} | undefined } | undefined
              port?: {} | undefined
              prefix?: {} | undefined
              queryParameters?: {} | undefined
              scheme?: {} | undefined
            }
            retryPolicy?:
              | {
                  httpRetryEvents?: {} | undefined
                  maxRetries: {}
                  perRetryTimeout: { unit?: {} | undefined; value?: {} | undefined }
                  tcpRetryEvents?: {} | undefined
                }
              | undefined
            timeout?:
              | {
                  idle?: { unit?: {} | undefined; value?: {} | undefined } | undefined
                  perRequest?: { unit?: {} | undefined; value?: {} | undefined } | undefined
                }
              | undefined
          }
        | undefined
      priority?: {} | undefined
      tcpRoute?:
        | {
            action: { weightedTargets: {} }
            match?: { port?: {} | undefined } | undefined
            timeout?:
              | { idle?: { unit?: {} | undefined; value?: {} | undefined } | undefined }
              | undefined
          }
        | undefined
    }
    status: { status: {} }
    virtualRouterName: {}
  }
}
type UpdateRouteOutput = {
  route: {
    meshName: {}
    metadata: {
      arn: {}
      createdAt: {}
      lastUpdatedAt: {}
      meshOwner: {}
      resourceOwner: {}
      uid: {}
      version: {}
    }
    routeName: {}
    spec: {
      grpcRoute?:
        | {
            action: { weightedTargets: {} }
            match: {
              metadata?: {} | undefined
              methodName?: {} | undefined
              port?: {} | undefined
              serviceName?: {} | undefined
            }
            retryPolicy?:
              | {
                  grpcRetryEvents?: {} | undefined
                  httpRetryEvents?: {} | undefined
                  maxRetries: {}
                  perRetryTimeout: { unit?: {} | undefined; value?: {} | undefined }
                  tcpRetryEvents?: {} | undefined
                }
              | undefined
            timeout?:
              | {
                  idle?: { unit?: {} | undefined; value?: {} | undefined } | undefined
                  perRequest?: { unit?: {} | undefined; value?: {} | undefined } | undefined
                }
              | undefined
          }
        | undefined
      http2Route?:
        | {
            action: { weightedTargets: {} }
            match: {
              headers?: {} | undefined
              method?: {} | undefined
              path?: { exact?: {} | undefined; regex?: {} | undefined } | undefined
              port?: {} | undefined
              prefix?: {} | undefined
              queryParameters?: {} | undefined
              scheme?: {} | undefined
            }
            retryPolicy?:
              | {
                  httpRetryEvents?: {} | undefined
                  maxRetries: {}
                  perRetryTimeout: { unit?: {} | undefined; value?: {} | undefined }
                  tcpRetryEvents?: {} | undefined
                }
              | undefined
            timeout?:
              | {
                  idle?: { unit?: {} | undefined; value?: {} | undefined } | undefined
                  perRequest?: { unit?: {} | undefined; value?: {} | undefined } | undefined
                }
              | undefined
          }
        | undefined
      httpRoute?:
        | {
            action: { weightedTargets: {} }
            match: {
              headers?: {} | undefined
              method?: {} | undefined
              path?: { exact?: {} | undefined; regex?: {} | undefined } | undefined
              port?: {} | undefined
              prefix?: {} | undefined
              queryParameters?: {} | undefined
              scheme?: {} | undefined
            }
            retryPolicy?:
              | {
                  httpRetryEvents?: {} | undefined
                  maxRetries: {}
                  perRetryTimeout: { unit?: {} | undefined; value?: {} | undefined }
                  tcpRetryEvents?: {} | undefined
                }
              | undefined
            timeout?:
              | {
                  idle?: { unit?: {} | undefined; value?: {} | undefined } | undefined
                  perRequest?: { unit?: {} | undefined; value?: {} | undefined } | undefined
                }
              | undefined
          }
        | undefined
      priority?: {} | undefined
      tcpRoute?:
        | {
            action: { weightedTargets: {} }
            match?: { port?: {} | undefined } | undefined
            timeout?:
              | { idle?: { unit?: {} | undefined; value?: {} | undefined } | undefined }
              | undefined
          }
        | undefined
    }
    status: { status: {} }
    virtualRouterName: {}
  }
}
type DeleteVirtualGatewayOutput = {
  virtualGateway: {
    meshName: {}
    metadata: ResourceMetadata
    spec: {
      backendDefaults?:
        | {
            clientPolicy?:
              | {
                  tls?:
                    | {
                        certificate?:
                          | {
                              file?: { certificateChain: {}; privateKey: {} } | undefined
                              sds?: { secretName: {} } | undefined
                            }
                          | undefined
                        enforce?: {} | undefined
                        ports?: {} | undefined
                        validation: {
                          subjectAlternativeNames?: { match: { exact: {} } } | undefined
                          trust: {
                            acm?: { certificateAuthorityArns: {} } | undefined
                            file?: { certificateChain: {} } | undefined
                            sds?: { secretName: {} } | undefined
                          }
                        }
                      }
                    | undefined
                }
              | undefined
          }
        | undefined
      listeners: {}
      logging?: VirtualGatewayLogging | undefined
    }
    status: { status: {} }
    virtualGatewayName: {}
  }
}
type DescribeVirtualGatewayOutput = {
  virtualGateway: {
    meshName: {}
    metadata: ResourceMetadata
    spec: {
      backendDefaults?:
        | {
            clientPolicy?:
              | {
                  tls?:
                    | {
                        certificate?:
                          | {
                              file?: { certificateChain: {}; privateKey: {} } | undefined
                              sds?: { secretName: {} } | undefined
                            }
                          | undefined
                        enforce?: {} | undefined
                        ports?: {} | undefined
                        validation: {
                          subjectAlternativeNames?: { match: { exact: {} } } | undefined
                          trust: {
                            acm?: { certificateAuthorityArns: {} } | undefined
                            file?: { certificateChain: {} } | undefined
                            sds?: { secretName: {} } | undefined
                          }
                        }
                      }
                    | undefined
                }
              | undefined
          }
        | undefined
      listeners: {}
      logging?: VirtualGatewayLogging | undefined
    }
    status: { status: {} }
    virtualGatewayName: {}
  }
}
type UpdateVirtualGatewayOutput = {
  virtualGateway: {
    meshName: {}
    metadata: ResourceMetadata
    spec: {
      backendDefaults?:
        | {
            clientPolicy?:
              | {
                  tls?:
                    | {
                        certificate?:
                          | {
                              file?: { certificateChain: {}; privateKey: {} } | undefined
                              sds?: { secretName: {} } | undefined
                            }
                          | undefined
                        enforce?: {} | undefined
                        ports?: {} | undefined
                        validation: {
                          subjectAlternativeNames?: { match: { exact: {} } } | undefined
                          trust: {
                            acm?: { certificateAuthorityArns: {} } | undefined
                            file?: { certificateChain: {} } | undefined
                            sds?: { secretName: {} } | undefined
                          }
                        }
                      }
                    | undefined
                }
              | undefined
          }
        | undefined
      listeners: {}
      logging?: VirtualGatewayLogging | undefined
    }
    status: { status: {} }
    virtualGatewayName: {}
  }
}
type DeleteVirtualNodeOutput = {
  virtualNode: {
    meshName: {}
    metadata: {
      arn: {}
      createdAt: {}
      lastUpdatedAt: {}
      meshOwner: {}
      resourceOwner: {}
      uid: {}
      version: {}
    }
    spec: {
      backendDefaults?:
        | {
            clientPolicy?:
              | {
                  tls?:
                    | {
                        certificate?:
                          | {
                              file?: { certificateChain: {}; privateKey: {} } | undefined
                              sds?: { secretName: {} } | undefined
                            }
                          | undefined
                        enforce?: {} | undefined
                        ports?: {} | undefined
                        validation: {
                          subjectAlternativeNames?: { match: { exact: {} } } | undefined
                          trust: {
                            acm?: { certificateAuthorityArns: {} } | undefined
                            file?: { certificateChain: {} } | undefined
                            sds?: { secretName: {} } | undefined
                          }
                        }
                      }
                    | undefined
                }
              | undefined
          }
        | undefined
      backends?: {} | undefined
      listeners?: {} | undefined
      logging?:
        | {
            accessLog?:
              | {
                  file?:
                    | {
                        format?: { json?: {} | undefined; text?: {} | undefined } | undefined
                        path: {}
                      }
                    | undefined
                }
              | undefined
          }
        | undefined
      serviceDiscovery?:
        | {
            awsCloudMap?:
              | {
                  attributes?: {} | undefined
                  ipPreference?: {} | undefined
                  namespaceName: {}
                  serviceName: {}
                }
              | undefined
            dns?:
              | { hostname: {}; ipPreference?: {} | undefined; responseType?: {} | undefined }
              | undefined
          }
        | undefined
    }
    status: { status: {} }
    virtualNodeName: {}
  }
}
type DescribeVirtualNodeOutput = {
  virtualNode: {
    meshName: {}
    metadata: {
      arn: {}
      createdAt: {}
      lastUpdatedAt: {}
      meshOwner: {}
      resourceOwner: {}
      uid: {}
      version: {}
    }
    spec: {
      backendDefaults?:
        | {
            clientPolicy?:
              | {
                  tls?:
                    | {
                        certificate?:
                          | {
                              file?: { certificateChain: {}; privateKey: {} } | undefined
                              sds?: { secretName: {} } | undefined
                            }
                          | undefined
                        enforce?: {} | undefined
                        ports?: {} | undefined
                        validation: {
                          subjectAlternativeNames?: { match: { exact: {} } } | undefined
                          trust: {
                            acm?: { certificateAuthorityArns: {} } | undefined
                            file?: { certificateChain: {} } | undefined
                            sds?: { secretName: {} } | undefined
                          }
                        }
                      }
                    | undefined
                }
              | undefined
          }
        | undefined
      backends?: {} | undefined
      listeners?: {} | undefined
      logging?:
        | {
            accessLog?:
              | {
                  file?:
                    | {
                        format?: { json?: {} | undefined; text?: {} | undefined } | undefined
                        path: {}
                      }
                    | undefined
                }
              | undefined
          }
        | undefined
      serviceDiscovery?:
        | {
            awsCloudMap?:
              | {
                  attributes?: {} | undefined
                  ipPreference?: {} | undefined
                  namespaceName: {}
                  serviceName: {}
                }
              | undefined
            dns?:
              | { hostname: {}; ipPreference?: {} | undefined; responseType?: {} | undefined }
              | undefined
          }
        | undefined
    }
    status: { status: {} }
    virtualNodeName: {}
  }
}
type UpdateVirtualNodeOutput = {
  virtualNode: {
    meshName: {}
    metadata: {
      arn: {}
      createdAt: {}
      lastUpdatedAt: {}
      meshOwner: {}
      resourceOwner: {}
      uid: {}
      version: {}
    }
    spec: {
      backendDefaults?:
        | {
            clientPolicy?:
              | {
                  tls?:
                    | {
                        certificate?:
                          | {
                              file?: { certificateChain: {}; privateKey: {} } | undefined
                              sds?: { secretName: {} } | undefined
                            }
                          | undefined
                        enforce?: {} | undefined
                        ports?: {} | undefined
                        validation: {
                          subjectAlternativeNames?: { match: { exact: {} } } | undefined
                          trust: {
                            acm?: { certificateAuthorityArns: {} } | undefined
                            file?: { certificateChain: {} } | undefined
                            sds?: { secretName: {} } | undefined
                          }
                        }
                      }
                    | undefined
                }
              | undefined
          }
        | undefined
      backends?: {} | undefined
      listeners?: {} | undefined
      logging?:
        | {
            accessLog?:
              | {
                  file?:
                    | {
                        format?: { json?: {} | undefined; text?: {} | undefined } | undefined
                        path: {}
                      }
                    | undefined
                }
              | undefined
          }
        | undefined
      serviceDiscovery?:
        | {
            awsCloudMap?:
              | {
                  attributes?: {} | undefined
                  ipPreference?: {} | undefined
                  namespaceName: {}
                  serviceName: {}
                }
              | undefined
            dns?:
              | { hostname: {}; ipPreference?: {} | undefined; responseType?: {} | undefined }
              | undefined
          }
        | undefined
    }
    status: { status: {} }
    virtualNodeName: {}
  }
}
type DeleteVirtualRouterOutput = {
  virtualRouter: {
    meshName: {}
    metadata: {
      arn: {}
      createdAt: {}
      lastUpdatedAt: {}
      meshOwner: {}
      resourceOwner: {}
      uid: {}
      version: {}
    }
    spec: { listeners?: {} | undefined }
    status: { status: {} }
    virtualRouterName: {}
  }
}
type DescribeVirtualRouterOutput = {
  virtualRouter: {
    meshName: {}
    metadata: {
      arn: {}
      createdAt: {}
      lastUpdatedAt: {}
      meshOwner: {}
      resourceOwner: {}
      uid: {}
      version: {}
    }
    spec: { listeners?: {} | undefined }
    status: { status: {} }
    virtualRouterName: {}
  }
}
type UpdateVirtualRouterOutput = {
  virtualRouter: {
    meshName: {}
    metadata: {
      arn: {}
      createdAt: {}
      lastUpdatedAt: {}
      meshOwner: {}
      resourceOwner: {}
      uid: {}
      version: {}
    }
    spec: { listeners?: {} | undefined }
    status: { status: {} }
    virtualRouterName: {}
  }
}
type DeleteVirtualServiceOutput = {
  virtualService: {
    meshName: {}
    metadata: ResourceMetadata
    spec: {
      provider?:
        | {
            virtualNode?: { virtualNodeName: {} } | undefined
            virtualRouter?: { virtualRouterName: {} } | undefined
          }
        | undefined
    }
    status: { status: {} }
    virtualServiceName: {}
  }
}
type DescribeVirtualServiceOutput = {
  virtualService: {
    meshName: {}
    metadata: ResourceMetadata
    spec: {
      provider?:
        | {
            virtualNode?: { virtualNodeName: {} } | undefined
            virtualRouter?: { virtualRouterName: {} } | undefined
          }
        | undefined
    }
    status: { status: {} }
    virtualServiceName: {}
  }
}
type UpdateVirtualServiceOutput = {
  virtualService: {
    meshName: {}
    metadata: ResourceMetadata
    spec: {
      provider?:
        | {
            virtualNode?: { virtualNodeName: {} } | undefined
            virtualRouter?: { virtualRouterName: {} } | undefined
          }
        | undefined
    }
    status: { status: {} }
    virtualServiceName: {}
  }
}
type ListTagsForResourceOutput = { nextToken?: {} | undefined; tags: {} }
type TagResourceOutput = { [x: string]: unknown }
type TagKey = string
type UntagResourceOutput = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v20190125/meshes/:meshName/virtualGateway/:virtualGatewayName/gatewayRoutes': {
      $put: {
        input: { param: { meshName: string; virtualGatewayName: string } } & {
          query: { meshOwner?: string | undefined }
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
            clientToken?: string | undefined
            gatewayRouteName: string
            spec: {
              grpcRoute?:
                | {
                    action: {
                      rewrite?:
                        | { hostname?: { defaultTargetHostname?: {} | undefined } | undefined }
                        | undefined
                      target: { port?: {} | undefined; virtualService: { virtualServiceName: {} } }
                    }
                    match: {
                      hostname?: { exact?: {} | undefined; suffix?: {} | undefined } | undefined
                      metadata?: {} | undefined
                      port?: {} | undefined
                      serviceName?: {} | undefined
                    }
                  }
                | undefined
              http2Route?:
                | {
                    action: {
                      rewrite?:
                        | {
                            hostname?: { defaultTargetHostname?: {} | undefined } | undefined
                            path?: { exact?: {} | undefined } | undefined
                            prefix?:
                              | { defaultPrefix?: {} | undefined; value?: {} | undefined }
                              | undefined
                          }
                        | undefined
                      target: { port?: {} | undefined; virtualService: { virtualServiceName: {} } }
                    }
                    match: {
                      headers?: {} | undefined
                      hostname?: { exact?: {} | undefined; suffix?: {} | undefined } | undefined
                      method?: {} | undefined
                      path?: { exact?: {} | undefined; regex?: {} | undefined } | undefined
                      port?: {} | undefined
                      prefix?: {} | undefined
                      queryParameters?: {} | undefined
                    }
                  }
                | undefined
              httpRoute?:
                | {
                    action: {
                      rewrite?:
                        | {
                            hostname?: { defaultTargetHostname?: {} | undefined } | undefined
                            path?: { exact?: {} | undefined } | undefined
                            prefix?:
                              | { defaultPrefix?: {} | undefined; value?: {} | undefined }
                              | undefined
                          }
                        | undefined
                      target: { port?: {} | undefined; virtualService: { virtualServiceName: {} } }
                    }
                    match: {
                      headers?: {} | undefined
                      hostname?: { exact?: {} | undefined; suffix?: {} | undefined } | undefined
                      method?: {} | undefined
                      path?: { exact?: {} | undefined; regex?: {} | undefined } | undefined
                      port?: {} | undefined
                      prefix?: {} | undefined
                      queryParameters?: {} | undefined
                    }
                  }
                | undefined
              priority?: {} | undefined
            }
            tags?: TagRef[] | undefined
          }
        }
        output: CreateGatewayRouteOutput
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { meshName: string; virtualGatewayName: string } } & {
          query: {
            limit?: number | undefined
            meshOwner?: string | undefined
            nextToken?: string | undefined
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
        output: ListGatewayRoutesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v20190125/meshes': {
      $put: {
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
            clientToken?: string | undefined
            meshName: string
            spec?:
              | {
                  egressFilter?: { type: {} } | undefined
                  serviceDiscovery?: MeshServiceDiscovery | undefined
                }
              | undefined
            tags?: TagRef[] | undefined
          }
        }
        output: CreateMeshOutput
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { query: { limit?: number | undefined; nextToken?: string | undefined } } & {
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
        output: ListMeshesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v20190125/meshes/:meshName/virtualRouter/:virtualRouterName/routes': {
      $put: {
        input: { param: { meshName: string; virtualRouterName: string } } & {
          query: { meshOwner?: string | undefined }
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
            clientToken?: string | undefined
            routeName: string
            spec: {
              grpcRoute?:
                | {
                    action: { weightedTargets: {} }
                    match: {
                      metadata?: {} | undefined
                      methodName?: {} | undefined
                      port?: {} | undefined
                      serviceName?: {} | undefined
                    }
                    retryPolicy?:
                      | {
                          grpcRetryEvents?: {} | undefined
                          httpRetryEvents?: {} | undefined
                          maxRetries: {}
                          perRetryTimeout: { unit?: {} | undefined; value?: {} | undefined }
                          tcpRetryEvents?: {} | undefined
                        }
                      | undefined
                    timeout?:
                      | {
                          idle?: { unit?: {} | undefined; value?: {} | undefined } | undefined
                          perRequest?: { unit?: {} | undefined; value?: {} | undefined } | undefined
                        }
                      | undefined
                  }
                | undefined
              http2Route?:
                | {
                    action: { weightedTargets: {} }
                    match: {
                      headers?: {} | undefined
                      method?: {} | undefined
                      path?: { exact?: {} | undefined; regex?: {} | undefined } | undefined
                      port?: {} | undefined
                      prefix?: {} | undefined
                      queryParameters?: {} | undefined
                      scheme?: {} | undefined
                    }
                    retryPolicy?:
                      | {
                          httpRetryEvents?: {} | undefined
                          maxRetries: {}
                          perRetryTimeout: { unit?: {} | undefined; value?: {} | undefined }
                          tcpRetryEvents?: {} | undefined
                        }
                      | undefined
                    timeout?:
                      | {
                          idle?: { unit?: {} | undefined; value?: {} | undefined } | undefined
                          perRequest?: { unit?: {} | undefined; value?: {} | undefined } | undefined
                        }
                      | undefined
                  }
                | undefined
              httpRoute?:
                | {
                    action: { weightedTargets: {} }
                    match: {
                      headers?: {} | undefined
                      method?: {} | undefined
                      path?: { exact?: {} | undefined; regex?: {} | undefined } | undefined
                      port?: {} | undefined
                      prefix?: {} | undefined
                      queryParameters?: {} | undefined
                      scheme?: {} | undefined
                    }
                    retryPolicy?:
                      | {
                          httpRetryEvents?: {} | undefined
                          maxRetries: {}
                          perRetryTimeout: { unit?: {} | undefined; value?: {} | undefined }
                          tcpRetryEvents?: {} | undefined
                        }
                      | undefined
                    timeout?:
                      | {
                          idle?: { unit?: {} | undefined; value?: {} | undefined } | undefined
                          perRequest?: { unit?: {} | undefined; value?: {} | undefined } | undefined
                        }
                      | undefined
                  }
                | undefined
              priority?: {} | undefined
              tcpRoute?:
                | {
                    action: { weightedTargets: {} }
                    match?: { port?: {} | undefined } | undefined
                    timeout?:
                      | { idle?: { unit?: {} | undefined; value?: {} | undefined } | undefined }
                      | undefined
                  }
                | undefined
            }
            tags?: TagRef[] | undefined
          }
        }
        output: CreateRouteOutput
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { meshName: string; virtualRouterName: string } } & {
          query: {
            limit?: number | undefined
            meshOwner?: string | undefined
            nextToken?: string | undefined
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
        output: ListRoutesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v20190125/meshes/:meshName/virtualGateways': {
      $put: {
        input: { param: { meshName: string } } & { query: { meshOwner?: string | undefined } } & {
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
            clientToken?: string | undefined
            spec: {
              backendDefaults?:
                | {
                    clientPolicy?:
                      | {
                          tls?:
                            | {
                                certificate?:
                                  | {
                                      file?: { certificateChain: {}; privateKey: {} } | undefined
                                      sds?: { secretName: {} } | undefined
                                    }
                                  | undefined
                                enforce?: {} | undefined
                                ports?: {} | undefined
                                validation: {
                                  subjectAlternativeNames?: { match: { exact: {} } } | undefined
                                  trust: {
                                    acm?: { certificateAuthorityArns: {} } | undefined
                                    file?: { certificateChain: {} } | undefined
                                    sds?: { secretName: {} } | undefined
                                  }
                                }
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              listeners?: {} | undefined
              logging?: VirtualGatewayLogging | undefined
            }
            tags?: TagRef[] | undefined
            virtualGatewayName: string
          }
        }
        output: CreateVirtualGatewayOutput
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { meshName: string } } & {
          query: {
            limit?: number | undefined
            meshOwner?: string | undefined
            nextToken?: string | undefined
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
        output: ListVirtualGatewaysOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v20190125/meshes/:meshName/virtualNodes': {
      $put: {
        input: { param: { meshName: string } } & { query: { meshOwner?: string | undefined } } & {
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
            clientToken?: string | undefined
            spec: {
              backendDefaults?:
                | {
                    clientPolicy?:
                      | {
                          tls?:
                            | {
                                certificate?:
                                  | {
                                      file?: { certificateChain: {}; privateKey: {} } | undefined
                                      sds?: { secretName: {} } | undefined
                                    }
                                  | undefined
                                enforce?: {} | undefined
                                ports?: {} | undefined
                                validation: {
                                  subjectAlternativeNames?: { match: { exact: {} } } | undefined
                                  trust: {
                                    acm?: { certificateAuthorityArns: {} } | undefined
                                    file?: { certificateChain: {} } | undefined
                                    sds?: { secretName: {} } | undefined
                                  }
                                }
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              backends?: {} | undefined
              listeners?: {} | undefined
              logging?:
                | {
                    accessLog?:
                      | {
                          file?:
                            | {
                                format?:
                                  | { json?: {} | undefined; text?: {} | undefined }
                                  | undefined
                                path: {}
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              serviceDiscovery?:
                | {
                    awsCloudMap?:
                      | {
                          attributes?: {} | undefined
                          ipPreference?: {} | undefined
                          namespaceName: {}
                          serviceName: {}
                        }
                      | undefined
                    dns?:
                      | {
                          hostname: {}
                          ipPreference?: {} | undefined
                          responseType?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
            }
            tags?: TagRef[] | undefined
            virtualNodeName: string
          }
        }
        output: CreateVirtualNodeOutput
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { meshName: string } } & {
          query: {
            limit?: number | undefined
            meshOwner?: string | undefined
            nextToken?: string | undefined
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
        output: ListVirtualNodesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v20190125/meshes/:meshName/virtualRouters': {
      $put: {
        input: { param: { meshName: string } } & { query: { meshOwner?: string | undefined } } & {
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
            clientToken?: string | undefined
            spec: { listeners?: {} | undefined }
            tags?: TagRef[] | undefined
            virtualRouterName: string
          }
        }
        output: CreateVirtualRouterOutput
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { meshName: string } } & {
          query: {
            limit?: number | undefined
            meshOwner?: string | undefined
            nextToken?: string | undefined
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
        output: ListVirtualRoutersOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v20190125/meshes/:meshName/virtualServices': {
      $put: {
        input: { param: { meshName: string } } & { query: { meshOwner?: string | undefined } } & {
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
            clientToken?: string | undefined
            spec: {
              provider?:
                | {
                    virtualNode?: { virtualNodeName: {} } | undefined
                    virtualRouter?: { virtualRouterName: {} } | undefined
                  }
                | undefined
            }
            tags?: TagRef[] | undefined
            virtualServiceName: string
          }
        }
        output: CreateVirtualServiceOutput
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { meshName: string } } & {
          query: {
            limit?: number | undefined
            meshOwner?: string | undefined
            nextToken?: string | undefined
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
        output: ListVirtualServicesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v20190125/meshes/:meshName/virtualGateway/:virtualGatewayName/gatewayRoutes/:gatewayRouteName': {
      $delete: {
        input: {
          param: { gatewayRouteName: string; meshName: string; virtualGatewayName: string }
        } & { query: { meshOwner?: string | undefined } } & {
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
        output: DeleteGatewayRouteOutput
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          param: { gatewayRouteName: string; meshName: string; virtualGatewayName: string }
        } & { query: { meshOwner?: string | undefined } } & {
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
        output: DescribeGatewayRouteOutput
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          param: { gatewayRouteName: string; meshName: string; virtualGatewayName: string }
        } & { query: { meshOwner?: string | undefined } } & {
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
            clientToken?: string | undefined
            spec: {
              grpcRoute?:
                | {
                    action: {
                      rewrite?:
                        | { hostname?: { defaultTargetHostname?: {} | undefined } | undefined }
                        | undefined
                      target: { port?: {} | undefined; virtualService: { virtualServiceName: {} } }
                    }
                    match: {
                      hostname?: { exact?: {} | undefined; suffix?: {} | undefined } | undefined
                      metadata?: {} | undefined
                      port?: {} | undefined
                      serviceName?: {} | undefined
                    }
                  }
                | undefined
              http2Route?:
                | {
                    action: {
                      rewrite?:
                        | {
                            hostname?: { defaultTargetHostname?: {} | undefined } | undefined
                            path?: { exact?: {} | undefined } | undefined
                            prefix?:
                              | { defaultPrefix?: {} | undefined; value?: {} | undefined }
                              | undefined
                          }
                        | undefined
                      target: { port?: {} | undefined; virtualService: { virtualServiceName: {} } }
                    }
                    match: {
                      headers?: {} | undefined
                      hostname?: { exact?: {} | undefined; suffix?: {} | undefined } | undefined
                      method?: {} | undefined
                      path?: { exact?: {} | undefined; regex?: {} | undefined } | undefined
                      port?: {} | undefined
                      prefix?: {} | undefined
                      queryParameters?: {} | undefined
                    }
                  }
                | undefined
              httpRoute?:
                | {
                    action: {
                      rewrite?:
                        | {
                            hostname?: { defaultTargetHostname?: {} | undefined } | undefined
                            path?: { exact?: {} | undefined } | undefined
                            prefix?:
                              | { defaultPrefix?: {} | undefined; value?: {} | undefined }
                              | undefined
                          }
                        | undefined
                      target: { port?: {} | undefined; virtualService: { virtualServiceName: {} } }
                    }
                    match: {
                      headers?: {} | undefined
                      hostname?: { exact?: {} | undefined; suffix?: {} | undefined } | undefined
                      method?: {} | undefined
                      path?: { exact?: {} | undefined; regex?: {} | undefined } | undefined
                      port?: {} | undefined
                      prefix?: {} | undefined
                      queryParameters?: {} | undefined
                    }
                  }
                | undefined
              priority?: {} | undefined
            }
          }
        }
        output: UpdateGatewayRouteOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v20190125/meshes/:meshName': {
      $delete: {
        input: { param: { meshName: string } } & {
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
        output: DeleteMeshOutput
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { meshName: string } } & { query: { meshOwner?: string | undefined } } & {
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
        output: DescribeMeshOutput
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { meshName: string } } & {
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
            clientToken?: string | undefined
            spec?:
              | {
                  egressFilter?: { type: {} } | undefined
                  serviceDiscovery?: MeshServiceDiscovery | undefined
                }
              | undefined
          }
        }
        output: UpdateMeshOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v20190125/meshes/:meshName/virtualRouter/:virtualRouterName/routes/:routeName': {
      $delete: {
        input: { param: { meshName: string; routeName: string; virtualRouterName: string } } & {
          query: { meshOwner?: string | undefined }
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
        output: DeleteRouteOutput
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { meshName: string; routeName: string; virtualRouterName: string } } & {
          query: { meshOwner?: string | undefined }
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
        output: DescribeRouteOutput
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { meshName: string; routeName: string; virtualRouterName: string } } & {
          query: { meshOwner?: string | undefined }
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
            clientToken?: string | undefined
            spec: {
              grpcRoute?:
                | {
                    action: { weightedTargets: {} }
                    match: {
                      metadata?: {} | undefined
                      methodName?: {} | undefined
                      port?: {} | undefined
                      serviceName?: {} | undefined
                    }
                    retryPolicy?:
                      | {
                          grpcRetryEvents?: {} | undefined
                          httpRetryEvents?: {} | undefined
                          maxRetries: {}
                          perRetryTimeout: { unit?: {} | undefined; value?: {} | undefined }
                          tcpRetryEvents?: {} | undefined
                        }
                      | undefined
                    timeout?:
                      | {
                          idle?: { unit?: {} | undefined; value?: {} | undefined } | undefined
                          perRequest?: { unit?: {} | undefined; value?: {} | undefined } | undefined
                        }
                      | undefined
                  }
                | undefined
              http2Route?:
                | {
                    action: { weightedTargets: {} }
                    match: {
                      headers?: {} | undefined
                      method?: {} | undefined
                      path?: { exact?: {} | undefined; regex?: {} | undefined } | undefined
                      port?: {} | undefined
                      prefix?: {} | undefined
                      queryParameters?: {} | undefined
                      scheme?: {} | undefined
                    }
                    retryPolicy?:
                      | {
                          httpRetryEvents?: {} | undefined
                          maxRetries: {}
                          perRetryTimeout: { unit?: {} | undefined; value?: {} | undefined }
                          tcpRetryEvents?: {} | undefined
                        }
                      | undefined
                    timeout?:
                      | {
                          idle?: { unit?: {} | undefined; value?: {} | undefined } | undefined
                          perRequest?: { unit?: {} | undefined; value?: {} | undefined } | undefined
                        }
                      | undefined
                  }
                | undefined
              httpRoute?:
                | {
                    action: { weightedTargets: {} }
                    match: {
                      headers?: {} | undefined
                      method?: {} | undefined
                      path?: { exact?: {} | undefined; regex?: {} | undefined } | undefined
                      port?: {} | undefined
                      prefix?: {} | undefined
                      queryParameters?: {} | undefined
                      scheme?: {} | undefined
                    }
                    retryPolicy?:
                      | {
                          httpRetryEvents?: {} | undefined
                          maxRetries: {}
                          perRetryTimeout: { unit?: {} | undefined; value?: {} | undefined }
                          tcpRetryEvents?: {} | undefined
                        }
                      | undefined
                    timeout?:
                      | {
                          idle?: { unit?: {} | undefined; value?: {} | undefined } | undefined
                          perRequest?: { unit?: {} | undefined; value?: {} | undefined } | undefined
                        }
                      | undefined
                  }
                | undefined
              priority?: {} | undefined
              tcpRoute?:
                | {
                    action: { weightedTargets: {} }
                    match?: { port?: {} | undefined } | undefined
                    timeout?:
                      | { idle?: { unit?: {} | undefined; value?: {} | undefined } | undefined }
                      | undefined
                  }
                | undefined
            }
          }
        }
        output: UpdateRouteOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v20190125/meshes/:meshName/virtualGateways/:virtualGatewayName': {
      $delete: {
        input: { param: { meshName: string; virtualGatewayName: string } } & {
          query: { meshOwner?: string | undefined }
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
        output: DeleteVirtualGatewayOutput
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { meshName: string; virtualGatewayName: string } } & {
          query: { meshOwner?: string | undefined }
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
        output: DescribeVirtualGatewayOutput
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { meshName: string; virtualGatewayName: string } } & {
          query: { meshOwner?: string | undefined }
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
            clientToken?: string | undefined
            spec: {
              backendDefaults?:
                | {
                    clientPolicy?:
                      | {
                          tls?:
                            | {
                                certificate?:
                                  | {
                                      file?: { certificateChain: {}; privateKey: {} } | undefined
                                      sds?: { secretName: {} } | undefined
                                    }
                                  | undefined
                                enforce?: {} | undefined
                                ports?: {} | undefined
                                validation: {
                                  subjectAlternativeNames?: { match: { exact: {} } } | undefined
                                  trust: {
                                    acm?: { certificateAuthorityArns: {} } | undefined
                                    file?: { certificateChain: {} } | undefined
                                    sds?: { secretName: {} } | undefined
                                  }
                                }
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              listeners?: {} | undefined
              logging?: VirtualGatewayLogging | undefined
            }
          }
        }
        output: UpdateVirtualGatewayOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v20190125/meshes/:meshName/virtualNodes/:virtualNodeName': {
      $delete: {
        input: { param: { meshName: string; virtualNodeName: string } } & {
          query: { meshOwner?: string | undefined }
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
        output: DeleteVirtualNodeOutput
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { meshName: string; virtualNodeName: string } } & {
          query: { meshOwner?: string | undefined }
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
        output: DescribeVirtualNodeOutput
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { meshName: string; virtualNodeName: string } } & {
          query: { meshOwner?: string | undefined }
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
            clientToken?: string | undefined
            spec: {
              backendDefaults?:
                | {
                    clientPolicy?:
                      | {
                          tls?:
                            | {
                                certificate?:
                                  | {
                                      file?: { certificateChain: {}; privateKey: {} } | undefined
                                      sds?: { secretName: {} } | undefined
                                    }
                                  | undefined
                                enforce?: {} | undefined
                                ports?: {} | undefined
                                validation: {
                                  subjectAlternativeNames?: { match: { exact: {} } } | undefined
                                  trust: {
                                    acm?: { certificateAuthorityArns: {} } | undefined
                                    file?: { certificateChain: {} } | undefined
                                    sds?: { secretName: {} } | undefined
                                  }
                                }
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              backends?: {} | undefined
              listeners?: {} | undefined
              logging?:
                | {
                    accessLog?:
                      | {
                          file?:
                            | {
                                format?:
                                  | { json?: {} | undefined; text?: {} | undefined }
                                  | undefined
                                path: {}
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              serviceDiscovery?:
                | {
                    awsCloudMap?:
                      | {
                          attributes?: {} | undefined
                          ipPreference?: {} | undefined
                          namespaceName: {}
                          serviceName: {}
                        }
                      | undefined
                    dns?:
                      | {
                          hostname: {}
                          ipPreference?: {} | undefined
                          responseType?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          }
        }
        output: UpdateVirtualNodeOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v20190125/meshes/:meshName/virtualRouters/:virtualRouterName': {
      $delete: {
        input: { param: { meshName: string; virtualRouterName: string } } & {
          query: { meshOwner?: string | undefined }
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
        output: DeleteVirtualRouterOutput
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { meshName: string; virtualRouterName: string } } & {
          query: { meshOwner?: string | undefined }
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
        output: DescribeVirtualRouterOutput
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { meshName: string; virtualRouterName: string } } & {
          query: { meshOwner?: string | undefined }
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
        } & { json: { clientToken?: string | undefined; spec: { listeners?: {} | undefined } } }
        output: UpdateVirtualRouterOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v20190125/meshes/:meshName/virtualServices/:virtualServiceName': {
      $delete: {
        input: { param: { meshName: string; virtualServiceName: string } } & {
          query: { meshOwner?: string | undefined }
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
        output: DeleteVirtualServiceOutput
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { meshName: string; virtualServiceName: string } } & {
          query: { meshOwner?: string | undefined }
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
        output: DescribeVirtualServiceOutput
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { meshName: string; virtualServiceName: string } } & {
          query: { meshOwner?: string | undefined }
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
            clientToken?: string | undefined
            spec: {
              provider?:
                | {
                    virtualNode?: { virtualNodeName: {} } | undefined
                    virtualRouter?: { virtualRouterName: {} } | undefined
                  }
                | undefined
            }
          }
        }
        output: UpdateVirtualServiceOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v20190125/tags#resourceArn': {
      $get: {
        input: {
          query: { limit?: number | undefined; nextToken?: string | undefined; resourceArn: string }
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
        output: ListTagsForResourceOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v20190125/tag#resourceArn': {
      $put: {
        input: { query: { resourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { tags: TagRef[] } }
        output: TagResourceOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v20190125/untag#resourceArn': {
      $put: {
        input: { query: { resourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { tagKeys: TagKey[] } }
        output: UntagResourceOutput
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
