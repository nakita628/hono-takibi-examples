type IoK8sApimachineryPkgApisMetaV1APIResource = {
  categories?: string[] | undefined
  group?: string | undefined
  kind: string
  name: string
  namespaced: boolean
  shortNames?: string[] | undefined
  singularName: string
  storageVersionHash?: string | undefined
  verbs: string[]
  version?: string | undefined
}
type IoK8sApimachineryPkgApisMetaV1APIResourceList = {
  apiVersion?: string | undefined
  groupVersion: string
  kind?: string | undefined
  resources: IoK8sApimachineryPkgApisMetaV1APIResource[]
}
type IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry = {
  apiVersion?: string | undefined
  fieldsType?: string | undefined
  fieldsV1?: {} | undefined
  manager?: string | undefined
  operation?: string | undefined
  subresource?: string | undefined
  time?: {} | undefined
}
type IoK8sApimachineryPkgApisMetaV1OwnerReference = {
  apiVersion: string
  blockOwnerDeletion?: boolean | undefined
  controller?: boolean | undefined
  kind: string
  name: string
  uid: string
}
type IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPattern = {
  status?: string | undefined
  type: string
}
type IoK8sApiBatchV1PodFailurePolicyRule = {
  action: string
  name?: string | undefined
  onExitCodes?:
    | { containerName?: string | undefined; operator: string; values: number[] }
    | undefined
  onPodConditions?: IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPattern[] | undefined
}
type IoK8sApiSchedulingV1WorkloadPodGroupResourceClaim = {
  name: string
  resourceClaimName?: string | undefined
  resourceClaimTemplateName?: string | undefined
}
type IoK8sApiSchedulingV1WorkloadTopologyConstraint = { key: string }
type IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement = {
  key: string
  operator: string
  values?: string[] | undefined
}
type IoK8sApiBatchV1SuccessPolicyRule = {
  succeededCount?: number | undefined
  succeededIndexes?: string | undefined
}
type IoK8sApiCoreV1NodeSelectorRequirement = {
  key: string
  operator: string
  values?: string[] | undefined
}
type IoK8sApiCoreV1PreferredSchedulingTerm = {
  preference: {
    matchExpressions?: IoK8sApiCoreV1NodeSelectorRequirement[] | undefined
    matchFields?: IoK8sApiCoreV1NodeSelectorRequirement[] | undefined
  }
  weight: number
}
type IoK8sApiCoreV1NodeSelectorTerm = {
  matchExpressions?: IoK8sApiCoreV1NodeSelectorRequirement[] | undefined
  matchFields?: IoK8sApiCoreV1NodeSelectorRequirement[] | undefined
}
type IoK8sApiCoreV1WeightedPodAffinityTerm = {
  podAffinityTerm: {
    labelSelector?:
      | {
          matchExpressions?: IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement[] | undefined
          matchLabels?: { [x: string]: string } | undefined
        }
      | undefined
    matchLabelKeys?: string[] | undefined
    mismatchLabelKeys?: string[] | undefined
    namespaceSelector?:
      | {
          matchExpressions?: IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement[] | undefined
          matchLabels?: { [x: string]: string } | undefined
        }
      | undefined
    namespaces?: string[] | undefined
    topologyKey: string
  }
  weight: number
}
type IoK8sApiCoreV1PodAffinityTerm = {
  labelSelector?:
    | {
        matchExpressions?: IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement[] | undefined
        matchLabels?: { [x: string]: string } | undefined
      }
    | undefined
  matchLabelKeys?: string[] | undefined
  mismatchLabelKeys?: string[] | undefined
  namespaceSelector?:
    | {
        matchExpressions?: IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement[] | undefined
        matchLabels?: { [x: string]: string } | undefined
      }
    | undefined
  namespaces?: string[] | undefined
  topologyKey: string
}
type IoK8sApiCoreV1EnvVar = {
  name: string
  value?: string | undefined
  valueFrom?:
    | {
        configMapKeyRef?:
          | { key: string; name?: string | undefined; optional?: boolean | undefined }
          | undefined
        fieldRef?: { apiVersion?: string | undefined; fieldPath: string } | undefined
        fileKeyRef?:
          | { key: string; optional?: boolean | undefined; path: string; volumeName: string }
          | undefined
        resourceFieldRef?:
          | { containerName?: string | undefined; divisor?: {} | undefined; resource: string }
          | undefined
        secretKeyRef?:
          | { key: string; name?: string | undefined; optional?: boolean | undefined }
          | undefined
      }
    | undefined
}
type IoK8sApiCoreV1EnvFromSource = {
  configMapRef?: { name?: string | undefined; optional?: boolean | undefined } | undefined
  prefix?: string | undefined
  secretRef?: { name?: string | undefined; optional?: boolean | undefined } | undefined
}
type IoK8sApiCoreV1HTTPHeader = { name: string; value: string }
type IoK8sApiCoreV1ContainerPort = {
  containerPort: number
  hostIP?: string | undefined
  hostPort?: number | undefined
  name?: string | undefined
  protocol?: string | undefined
}
type IoK8sApiCoreV1ContainerResizePolicy = { resourceName: string; restartPolicy: string }
type IoK8sApiCoreV1ResourceClaim = { name: string; request?: string | undefined }
type IoK8sApimachineryPkgApiResourceQuantity = string | number
type IoK8sApiCoreV1ContainerRestartRule = {
  action: string
  exitCodes?: { operator: string; values?: number[] | undefined } | undefined
}
type IoK8sApiCoreV1VolumeDevice = { devicePath: string; name: string }
type IoK8sApiCoreV1VolumeMount = {
  bindMountOptions?: string[] | undefined
  mountPath: string
  mountPropagation?: string | undefined
  name: string
  readOnly?: boolean | undefined
  recursiveReadOnly?: string | undefined
  subPath?: string | undefined
  subPathExpr?: string | undefined
}
type IoK8sApiCoreV1Container = {
  args?: string[] | undefined
  command?: string[] | undefined
  env?: IoK8sApiCoreV1EnvVar[] | undefined
  envFrom?: IoK8sApiCoreV1EnvFromSource[] | undefined
  hostCgroupNamespace?: boolean | undefined
  image?: string | undefined
  imagePullPolicy?: string | undefined
  lifecycle?:
    | {
        postStart?:
          | {
              exec?: { command?: string[] | undefined } | undefined
              httpGet?:
                | {
                    host?: string | undefined
                    httpHeaders?: IoK8sApiCoreV1HTTPHeader[] | undefined
                    path?: string | undefined
                    port: {}
                    protocol?: string | undefined
                    scheme?: string | undefined
                  }
                | undefined
              sleep?: { seconds: bigint } | undefined
              tcpSocket?: { host?: string | undefined; port: {} } | undefined
            }
          | undefined
        preStop?:
          | {
              exec?: { command?: string[] | undefined } | undefined
              httpGet?:
                | {
                    host?: string | undefined
                    httpHeaders?: IoK8sApiCoreV1HTTPHeader[] | undefined
                    path?: string | undefined
                    port: {}
                    protocol?: string | undefined
                    scheme?: string | undefined
                  }
                | undefined
              sleep?: { seconds: bigint } | undefined
              tcpSocket?: { host?: string | undefined; port: {} } | undefined
            }
          | undefined
        stopSignal?: string | undefined
      }
    | undefined
  livenessProbe?:
    | {
        exec?: { command?: string[] | undefined } | undefined
        failureThreshold?: number | undefined
        grpc?: { mode?: string | undefined; port: number; service?: string | undefined } | undefined
        httpGet?:
          | {
              host?: string | undefined
              httpHeaders?: IoK8sApiCoreV1HTTPHeader[] | undefined
              path?: string | undefined
              port: {}
              protocol?: string | undefined
              scheme?: string | undefined
            }
          | undefined
        initialDelaySeconds?: number | undefined
        periodSeconds?: number | undefined
        successThreshold?: number | undefined
        tcpSocket?: { host?: string | undefined; port: {} } | undefined
        terminationGracePeriodSeconds?: bigint | undefined
        timeoutSeconds?: number | undefined
      }
    | undefined
  name: string
  ports?: IoK8sApiCoreV1ContainerPort[] | undefined
  readinessProbe?:
    | {
        exec?: { command?: string[] | undefined } | undefined
        failureThreshold?: number | undefined
        grpc?: { mode?: string | undefined; port: number; service?: string | undefined } | undefined
        httpGet?:
          | {
              host?: string | undefined
              httpHeaders?: IoK8sApiCoreV1HTTPHeader[] | undefined
              path?: string | undefined
              port: {}
              protocol?: string | undefined
              scheme?: string | undefined
            }
          | undefined
        initialDelaySeconds?: number | undefined
        periodSeconds?: number | undefined
        successThreshold?: number | undefined
        tcpSocket?: { host?: string | undefined; port: {} } | undefined
        terminationGracePeriodSeconds?: bigint | undefined
        timeoutSeconds?: number | undefined
      }
    | undefined
  resizePolicy?: IoK8sApiCoreV1ContainerResizePolicy[] | undefined
  resources?:
    | {
        claims?: IoK8sApiCoreV1ResourceClaim[] | undefined
        limits?: { [x: string]: IoK8sApimachineryPkgApiResourceQuantity } | undefined
        requests?: { [x: string]: IoK8sApimachineryPkgApiResourceQuantity } | undefined
      }
    | undefined
  restartPolicy?: string | undefined
  restartPolicyRules?: IoK8sApiCoreV1ContainerRestartRule[] | undefined
  securityContext?:
    | {
        allowPrivilegeEscalation?: boolean | undefined
        appArmorProfile?: { localhostProfile?: string | undefined; type: string } | undefined
        capabilities?: { add?: string[] | undefined; drop?: string[] | undefined } | undefined
        cgroupOptions?: { mountMode?: string | undefined } | undefined
        privileged?: boolean | undefined
        procMount?: string | undefined
        readOnlyRootFilesystem?: boolean | undefined
        runAsGroup?: bigint | undefined
        runAsNonRoot?: boolean | undefined
        runAsUser?: bigint | undefined
        seLinuxOptions?:
          | {
              level?: string | undefined
              role?: string | undefined
              type?: string | undefined
              user?: string | undefined
            }
          | undefined
        seccompProfile?:
          | {
              localhostProfile?: string | undefined
              oci?:
                | {
                    baseProfile?:
                      | { localhostProfile?: string | undefined; type: string }
                      | undefined
                    ref: string
                  }
                | undefined
              type: string
            }
          | undefined
        windowsOptions?:
          | {
              gmsaCredentialSpec?: string | undefined
              gmsaCredentialSpecName?: string | undefined
              hostProcess?: boolean | undefined
              runAsUserName?: string | undefined
            }
          | undefined
      }
    | undefined
  startupProbe?:
    | {
        exec?: { command?: string[] | undefined } | undefined
        failureThreshold?: number | undefined
        grpc?: { mode?: string | undefined; port: number; service?: string | undefined } | undefined
        httpGet?:
          | {
              host?: string | undefined
              httpHeaders?: IoK8sApiCoreV1HTTPHeader[] | undefined
              path?: string | undefined
              port: {}
              protocol?: string | undefined
              scheme?: string | undefined
            }
          | undefined
        initialDelaySeconds?: number | undefined
        periodSeconds?: number | undefined
        successThreshold?: number | undefined
        tcpSocket?: { host?: string | undefined; port: {} } | undefined
        terminationGracePeriodSeconds?: bigint | undefined
        timeoutSeconds?: number | undefined
      }
    | undefined
  stdin?: boolean | undefined
  stdinOnce?: boolean | undefined
  terminationMessagePath?: string | undefined
  terminationMessagePolicy?: string | undefined
  tty?: boolean | undefined
  volumeDevices?: IoK8sApiCoreV1VolumeDevice[] | undefined
  volumeMounts?: IoK8sApiCoreV1VolumeMount[] | undefined
  workingDir?: string | undefined
}
type IoK8sApiCoreV1PodDNSConfigOption = { name?: string | undefined; value?: string | undefined }
type IoK8sApiCoreV1EphemeralContainer = {
  args?: string[] | undefined
  command?: string[] | undefined
  env?: IoK8sApiCoreV1EnvVar[] | undefined
  envFrom?: IoK8sApiCoreV1EnvFromSource[] | undefined
  hostCgroupNamespace?: boolean | undefined
  image?: string | undefined
  imagePullPolicy?: string | undefined
  lifecycle?:
    | {
        postStart?:
          | {
              exec?: { command?: string[] | undefined } | undefined
              httpGet?:
                | {
                    host?: string | undefined
                    httpHeaders?: IoK8sApiCoreV1HTTPHeader[] | undefined
                    path?: string | undefined
                    port: {}
                    protocol?: string | undefined
                    scheme?: string | undefined
                  }
                | undefined
              sleep?: { seconds: bigint } | undefined
              tcpSocket?: { host?: string | undefined; port: {} } | undefined
            }
          | undefined
        preStop?:
          | {
              exec?: { command?: string[] | undefined } | undefined
              httpGet?:
                | {
                    host?: string | undefined
                    httpHeaders?: IoK8sApiCoreV1HTTPHeader[] | undefined
                    path?: string | undefined
                    port: {}
                    protocol?: string | undefined
                    scheme?: string | undefined
                  }
                | undefined
              sleep?: { seconds: bigint } | undefined
              tcpSocket?: { host?: string | undefined; port: {} } | undefined
            }
          | undefined
        stopSignal?: string | undefined
      }
    | undefined
  livenessProbe?:
    | {
        exec?: { command?: string[] | undefined } | undefined
        failureThreshold?: number | undefined
        grpc?: { mode?: string | undefined; port: number; service?: string | undefined } | undefined
        httpGet?:
          | {
              host?: string | undefined
              httpHeaders?: IoK8sApiCoreV1HTTPHeader[] | undefined
              path?: string | undefined
              port: {}
              protocol?: string | undefined
              scheme?: string | undefined
            }
          | undefined
        initialDelaySeconds?: number | undefined
        periodSeconds?: number | undefined
        successThreshold?: number | undefined
        tcpSocket?: { host?: string | undefined; port: {} } | undefined
        terminationGracePeriodSeconds?: bigint | undefined
        timeoutSeconds?: number | undefined
      }
    | undefined
  name: string
  ports?: IoK8sApiCoreV1ContainerPort[] | undefined
  readinessProbe?:
    | {
        exec?: { command?: string[] | undefined } | undefined
        failureThreshold?: number | undefined
        grpc?: { mode?: string | undefined; port: number; service?: string | undefined } | undefined
        httpGet?:
          | {
              host?: string | undefined
              httpHeaders?: IoK8sApiCoreV1HTTPHeader[] | undefined
              path?: string | undefined
              port: {}
              protocol?: string | undefined
              scheme?: string | undefined
            }
          | undefined
        initialDelaySeconds?: number | undefined
        periodSeconds?: number | undefined
        successThreshold?: number | undefined
        tcpSocket?: { host?: string | undefined; port: {} } | undefined
        terminationGracePeriodSeconds?: bigint | undefined
        timeoutSeconds?: number | undefined
      }
    | undefined
  resizePolicy?: IoK8sApiCoreV1ContainerResizePolicy[] | undefined
  resources?:
    | {
        claims?: IoK8sApiCoreV1ResourceClaim[] | undefined
        limits?: { [x: string]: IoK8sApimachineryPkgApiResourceQuantity } | undefined
        requests?: { [x: string]: IoK8sApimachineryPkgApiResourceQuantity } | undefined
      }
    | undefined
  restartPolicy?: string | undefined
  restartPolicyRules?: IoK8sApiCoreV1ContainerRestartRule[] | undefined
  securityContext?:
    | {
        allowPrivilegeEscalation?: boolean | undefined
        appArmorProfile?: { localhostProfile?: string | undefined; type: string } | undefined
        capabilities?: { add?: string[] | undefined; drop?: string[] | undefined } | undefined
        cgroupOptions?: { mountMode?: string | undefined } | undefined
        privileged?: boolean | undefined
        procMount?: string | undefined
        readOnlyRootFilesystem?: boolean | undefined
        runAsGroup?: bigint | undefined
        runAsNonRoot?: boolean | undefined
        runAsUser?: bigint | undefined
        seLinuxOptions?:
          | {
              level?: string | undefined
              role?: string | undefined
              type?: string | undefined
              user?: string | undefined
            }
          | undefined
        seccompProfile?:
          | {
              localhostProfile?: string | undefined
              oci?:
                | {
                    baseProfile?:
                      | { localhostProfile?: string | undefined; type: string }
                      | undefined
                    ref: string
                  }
                | undefined
              type: string
            }
          | undefined
        windowsOptions?:
          | {
              gmsaCredentialSpec?: string | undefined
              gmsaCredentialSpecName?: string | undefined
              hostProcess?: boolean | undefined
              runAsUserName?: string | undefined
            }
          | undefined
      }
    | undefined
  startupProbe?:
    | {
        exec?: { command?: string[] | undefined } | undefined
        failureThreshold?: number | undefined
        grpc?: { mode?: string | undefined; port: number; service?: string | undefined } | undefined
        httpGet?:
          | {
              host?: string | undefined
              httpHeaders?: IoK8sApiCoreV1HTTPHeader[] | undefined
              path?: string | undefined
              port: {}
              protocol?: string | undefined
              scheme?: string | undefined
            }
          | undefined
        initialDelaySeconds?: number | undefined
        periodSeconds?: number | undefined
        successThreshold?: number | undefined
        tcpSocket?: { host?: string | undefined; port: {} } | undefined
        terminationGracePeriodSeconds?: bigint | undefined
        timeoutSeconds?: number | undefined
      }
    | undefined
  stdin?: boolean | undefined
  stdinOnce?: boolean | undefined
  targetContainerName?: string | undefined
  terminationMessagePath?: string | undefined
  terminationMessagePolicy?: string | undefined
  tty?: boolean | undefined
  volumeDevices?: IoK8sApiCoreV1VolumeDevice[] | undefined
  volumeMounts?: IoK8sApiCoreV1VolumeMount[] | undefined
  workingDir?: string | undefined
}
type IoK8sApiCoreV1EvictionResponder = { name: string; priority: number }
type IoK8sApiCoreV1HostAlias = { hostnames?: string[] | undefined; ip: string }
type IoK8sApiCoreV1LocalObjectReference = { name?: string | undefined }
type IoK8sApiCoreV1PodReadinessGate = { conditionType: string }
type IoK8sApiCoreV1PodResourceClaim = {
  name: string
  resourceClaimName?: string | undefined
  resourceClaimTemplateName?: string | undefined
}
type IoK8sApiCoreV1PodSchedulingGate = { name: string }
type IoK8sApiCoreV1Sysctl = { name: string; value: string }
type IoK8sApiCoreV1Toleration = {
  effect?: string | undefined
  key?: string | undefined
  operator?: string | undefined
  tolerationSeconds?: bigint | undefined
  value?: string | undefined
}
type IoK8sApiCoreV1TopologySpreadConstraint = {
  labelSelector?:
    | {
        matchExpressions?: IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement[] | undefined
        matchLabels?: { [x: string]: string } | undefined
      }
    | undefined
  matchLabelKeys?: string[] | undefined
  maxSkew: number
  minDomains?: number | undefined
  nodeAffinityPolicy?: string | undefined
  nodeTaintsPolicy?: string | undefined
  topologyKey: string
  whenUnsatisfiable: string
}
type IoK8sApiCoreV1KeyToPath = {
  key: string
  mode?: number | undefined
  path: string
  user?: bigint | undefined
}
type IoK8sApiCoreV1DownwardAPIVolumeFile = {
  fieldRef?: { apiVersion?: string | undefined; fieldPath: string } | undefined
  mode?: number | undefined
  path: string
  resourceFieldRef?:
    | { containerName?: string | undefined; divisor?: {} | undefined; resource: string }
    | undefined
  user?: bigint | undefined
}
type IoK8sApiCoreV1VolumeProjection = {
  clusterTrustBundle?:
    | {
        labelSelector?:
          | {
              matchExpressions?:
                | IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement[]
                | undefined
              matchLabels?: { [x: string]: string } | undefined
            }
          | undefined
        name?: string | undefined
        optional?: boolean | undefined
        path: string
        signerName?: string | undefined
        user?: bigint | undefined
      }
    | undefined
  configMap?:
    | {
        items?: IoK8sApiCoreV1KeyToPath[] | undefined
        name?: string | undefined
        optional?: boolean | undefined
      }
    | undefined
  downwardAPI?: { items?: IoK8sApiCoreV1DownwardAPIVolumeFile[] | undefined } | undefined
  podCertificate?:
    | {
        certificateChainPath?: string | undefined
        credentialBundlePath?: string | undefined
        keyPath?: string | undefined
        keyType: string
        maxExpirationSeconds?: number | undefined
        signerName: string
        user?: bigint | undefined
        userAnnotations?: { [x: string]: string } | undefined
      }
    | undefined
  secret?:
    | {
        items?: IoK8sApiCoreV1KeyToPath[] | undefined
        name?: string | undefined
        optional?: boolean | undefined
      }
    | undefined
  serviceAccountToken?:
    | {
        audience?: string | undefined
        expirationSeconds?: bigint | undefined
        path: string
        user?: bigint | undefined
      }
    | undefined
}
type IoK8sApiCoreV1Volume = {
  awsElasticBlockStore?:
    | {
        fsType?: string | undefined
        partition?: number | undefined
        readOnly?: boolean | undefined
        volumeID: string
      }
    | undefined
  azureDisk?:
    | {
        cachingMode?: string | undefined
        diskName: string
        diskURI: string
        fsType?: string | undefined
        kind?: string | undefined
        readOnly?: boolean | undefined
      }
    | undefined
  azureFile?: { readOnly?: boolean | undefined; secretName: string; shareName: string } | undefined
  cephfs?:
    | {
        monitors: string[]
        path?: string | undefined
        readOnly?: boolean | undefined
        secretFile?: string | undefined
        secretRef?: { name?: string | undefined } | undefined
        user?: string | undefined
      }
    | undefined
  cinder?:
    | {
        fsType?: string | undefined
        readOnly?: boolean | undefined
        secretRef?: { name?: string | undefined } | undefined
        volumeID: string
      }
    | undefined
  configMap?:
    | {
        defaultMode?: number | undefined
        defaultUser?: bigint | undefined
        items?: IoK8sApiCoreV1KeyToPath[] | undefined
        name?: string | undefined
        optional?: boolean | undefined
      }
    | undefined
  csi?:
    | {
        driver: string
        fsType?: string | undefined
        nodePublishSecretRef?: { name?: string | undefined } | undefined
        readOnly?: boolean | undefined
        volumeAttributes?: { [x: string]: string } | undefined
      }
    | undefined
  downwardAPI?:
    | {
        defaultMode?: number | undefined
        defaultUser?: bigint | undefined
        items?: IoK8sApiCoreV1DownwardAPIVolumeFile[] | undefined
      }
    | undefined
  emptyDir?:
    | { medium?: string | undefined; mode?: number | undefined; sizeLimit?: {} | undefined }
    | undefined
  ephemeral?:
    | {
        volumeClaimTemplate: {
          metadata?:
            | {
                annotations?: { [x: string]: string } | undefined
                creationTimestamp?: {} | undefined
                deletionGracePeriodSeconds?: bigint | undefined
                deletionTimestamp?: {} | undefined
                finalizers?: string[] | undefined
                generateName?: string | undefined
                generation?: bigint | undefined
                labels?: { [x: string]: string } | undefined
                managedFields?: IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry[] | undefined
                name?: string | undefined
                namespace?: string | undefined
                ownerReferences?: IoK8sApimachineryPkgApisMetaV1OwnerReference[] | undefined
                resourceVersion?: string | undefined
                selfLink?: string | undefined
                uid?: string | undefined
              }
            | undefined
          spec: {
            accessModes?: string[] | undefined
            dataSource?: { apiGroup?: string | undefined; kind: string; name: string } | undefined
            dataSourceRef?:
              | {
                  apiGroup?: string | undefined
                  kind: string
                  name: string
                  namespace?: string | undefined
                }
              | undefined
            resources?:
              | {
                  limits?: { [x: string]: IoK8sApimachineryPkgApiResourceQuantity } | undefined
                  requests?: { [x: string]: IoK8sApimachineryPkgApiResourceQuantity } | undefined
                }
              | undefined
            selector?:
              | {
                  matchExpressions?:
                    | IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement[]
                    | undefined
                  matchLabels?: { [x: string]: string } | undefined
                }
              | undefined
            storageClassName?: string | undefined
            volumeAttributesClassName?: string | undefined
            volumeMode?: string | undefined
            volumeName?: string | undefined
          }
        }
      }
    | undefined
  fc?:
    | {
        fsType?: string | undefined
        lun?: number | undefined
        readOnly?: boolean | undefined
        targetWWNs?: string[] | undefined
        wwids?: string[] | undefined
      }
    | undefined
  flexVolume?:
    | {
        driver: string
        fsType?: string | undefined
        options?: { [x: string]: string } | undefined
        readOnly?: boolean | undefined
        secretRef?: { name?: string | undefined } | undefined
      }
    | undefined
  flocker?: { datasetName?: string | undefined; datasetUUID?: string | undefined } | undefined
  gcePersistentDisk?:
    | {
        fsType?: string | undefined
        partition?: number | undefined
        pdName: string
        readOnly?: boolean | undefined
      }
    | undefined
  gitRepo?:
    | { directory?: string | undefined; repository: string; revision?: string | undefined }
    | undefined
  glusterfs?: { endpoints: string; path: string; readOnly?: boolean | undefined } | undefined
  hostPath?: { path: string; type?: string | undefined } | undefined
  image?: { pullPolicy?: string | undefined; reference?: string | undefined } | undefined
  iscsi?:
    | {
        chapAuthDiscovery?: boolean | undefined
        chapAuthSession?: boolean | undefined
        fsType?: string | undefined
        initiatorName?: string | undefined
        iqn: string
        iscsiInterface?: string | undefined
        lun?: number | undefined
        portals?: string[] | undefined
        readOnly?: boolean | undefined
        secretRef?: { name?: string | undefined } | undefined
        targetPortal: string
      }
    | undefined
  name: string
  nfs?: { path: string; readOnly?: boolean | undefined; server: string } | undefined
  persistentVolumeClaim?: { claimName: string; readOnly?: boolean | undefined } | undefined
  photonPersistentDisk?: { fsType?: string | undefined; pdID: string } | undefined
  portworxVolume?:
    | { fsType?: string | undefined; readOnly?: boolean | undefined; volumeID: string }
    | undefined
  projected?:
    | {
        defaultMode?: number | undefined
        defaultUser?: bigint | undefined
        sources?: IoK8sApiCoreV1VolumeProjection[] | undefined
      }
    | undefined
  quobyte?:
    | {
        group?: string | undefined
        readOnly?: boolean | undefined
        registry: string
        tenant?: string | undefined
        user?: string | undefined
        volume: string
      }
    | undefined
  rbd?:
    | {
        fsType?: string | undefined
        image: string
        keyring?: string | undefined
        monitors: string[]
        pool?: string | undefined
        readOnly?: boolean | undefined
        secretRef?: { name?: string | undefined } | undefined
        user?: string | undefined
      }
    | undefined
  scaleIO?:
    | {
        fsType?: string | undefined
        gateway: string
        protectionDomain?: string | undefined
        readOnly?: boolean | undefined
        secretRef?: { name?: string | undefined } | undefined
        sslEnabled?: boolean | undefined
        storageMode?: string | undefined
        storagePool?: string | undefined
        system: string
        volumeName: string
      }
    | undefined
  secret?:
    | {
        defaultMode?: number | undefined
        defaultUser?: bigint | undefined
        items?: IoK8sApiCoreV1KeyToPath[] | undefined
        optional?: boolean | undefined
        secretName?: string | undefined
      }
    | undefined
  storageos?:
    | {
        fsType?: string | undefined
        readOnly?: boolean | undefined
        secretRef?: { name?: string | undefined } | undefined
        volumeName: string
        volumeNamespace?: string | undefined
      }
    | undefined
  vsphereVolume?:
    | {
        fsType?: string | undefined
        storagePolicyID?: string | undefined
        storagePolicyName?: string | undefined
        volumePath: string
      }
    | undefined
}
type IoK8sApiCoreV1ObjectReference = {
  apiVersion?: string | undefined
  fieldPath?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  namespace?: string | undefined
  resourceVersion?: string | undefined
  uid?: string | undefined
}
type IoK8sApiBatchV1CronJob = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?:
    | {
        annotations?: { [x: string]: string } | undefined
        creationTimestamp?: {} | undefined
        deletionGracePeriodSeconds?: bigint | undefined
        deletionTimestamp?: {} | undefined
        finalizers?: string[] | undefined
        generateName?: string | undefined
        generation?: bigint | undefined
        labels?: { [x: string]: string } | undefined
        managedFields?: IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry[] | undefined
        name?: string | undefined
        namespace?: string | undefined
        ownerReferences?: IoK8sApimachineryPkgApisMetaV1OwnerReference[] | undefined
        resourceVersion?: string | undefined
        selfLink?: string | undefined
        uid?: string | undefined
      }
    | undefined
  spec: {
    concurrencyPolicy?: string | undefined
    failedJobsHistoryLimit?: number | undefined
    jobTemplate: {
      metadata?:
        | {
            annotations?: { [x: string]: string } | undefined
            creationTimestamp?: {} | undefined
            deletionGracePeriodSeconds?: bigint | undefined
            deletionTimestamp?: {} | undefined
            finalizers?: string[] | undefined
            generateName?: string | undefined
            generation?: bigint | undefined
            labels?: { [x: string]: string } | undefined
            managedFields?: IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry[] | undefined
            name?: string | undefined
            namespace?: string | undefined
            ownerReferences?: IoK8sApimachineryPkgApisMetaV1OwnerReference[] | undefined
            resourceVersion?: string | undefined
            selfLink?: string | undefined
            uid?: string | undefined
          }
        | undefined
      spec: {
        activeDeadlineSeconds?: bigint | undefined
        backoffLimit?: number | undefined
        backoffLimitPerIndex?: number | undefined
        completionMode?: string | undefined
        completions?: number | undefined
        managedBy?: string | undefined
        manualSelector?: boolean | undefined
        maxFailedIndexes?: number | undefined
        parallelism?: number | undefined
        podFailurePolicy?: { rules?: IoK8sApiBatchV1PodFailurePolicyRule[] | undefined } | undefined
        podReplacementPolicy?: string | undefined
        scheduling?:
          | {
              disruptionMode?: { all?: {} | undefined; single?: {} | undefined } | undefined
              resourceClaims?: IoK8sApiSchedulingV1WorkloadPodGroupResourceClaim[] | undefined
              schedulingConstraints?:
                | { topology?: IoK8sApiSchedulingV1WorkloadTopologyConstraint[] | undefined }
                | undefined
              schedulingPolicy?:
                | { basic?: {} | undefined; gang?: { minCount?: number | undefined } | undefined }
                | undefined
            }
          | undefined
        selector?:
          | {
              matchExpressions?:
                | IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement[]
                | undefined
              matchLabels?: { [x: string]: string } | undefined
            }
          | undefined
        successPolicy?: { rules: IoK8sApiBatchV1SuccessPolicyRule[] } | undefined
        suspend?: boolean | undefined
        template: {
          metadata?:
            | {
                annotations?: { [x: string]: string } | undefined
                creationTimestamp?: {} | undefined
                deletionGracePeriodSeconds?: bigint | undefined
                deletionTimestamp?: {} | undefined
                finalizers?: string[] | undefined
                generateName?: string | undefined
                generation?: bigint | undefined
                labels?: { [x: string]: string } | undefined
                managedFields?: IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry[] | undefined
                name?: string | undefined
                namespace?: string | undefined
                ownerReferences?: IoK8sApimachineryPkgApisMetaV1OwnerReference[] | undefined
                resourceVersion?: string | undefined
                selfLink?: string | undefined
                uid?: string | undefined
              }
            | undefined
          spec?:
            | {
                activeDeadlineSeconds?: bigint | undefined
                affinity?:
                  | {
                      nodeAffinity?:
                        | {
                            preferredDuringSchedulingIgnoredDuringExecution?:
                              | IoK8sApiCoreV1PreferredSchedulingTerm[]
                              | undefined
                            requiredDuringSchedulingIgnoredDuringExecution?:
                              | { nodeSelectorTerms: IoK8sApiCoreV1NodeSelectorTerm[] }
                              | undefined
                          }
                        | undefined
                      podAffinity?:
                        | {
                            preferredDuringSchedulingIgnoredDuringExecution?:
                              | IoK8sApiCoreV1WeightedPodAffinityTerm[]
                              | undefined
                            requiredDuringSchedulingIgnoredDuringExecution?:
                              | IoK8sApiCoreV1PodAffinityTerm[]
                              | undefined
                          }
                        | undefined
                      podAntiAffinity?:
                        | {
                            preferredDuringSchedulingIgnoredDuringExecution?:
                              | IoK8sApiCoreV1WeightedPodAffinityTerm[]
                              | undefined
                            requiredDuringSchedulingIgnoredDuringExecution?:
                              | IoK8sApiCoreV1PodAffinityTerm[]
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                automountServiceAccountToken?: boolean | undefined
                containers: IoK8sApiCoreV1Container[]
                dnsConfig?:
                  | {
                      nameservers?: string[] | undefined
                      options?: IoK8sApiCoreV1PodDNSConfigOption[] | undefined
                      searches?: string[] | undefined
                    }
                  | undefined
                dnsPolicy?: string | undefined
                enableServiceLinks?: boolean | undefined
                ephemeralContainers?: IoK8sApiCoreV1EphemeralContainer[] | undefined
                evictionResponders?: IoK8sApiCoreV1EvictionResponder[] | undefined
                hostAliases?: IoK8sApiCoreV1HostAlias[] | undefined
                hostIPC?: boolean | undefined
                hostNetwork?: boolean | undefined
                hostPID?: boolean | undefined
                hostUsers?: boolean | undefined
                hostname?: string | undefined
                hostnameOverride?: string | undefined
                imagePullSecrets?: IoK8sApiCoreV1LocalObjectReference[] | undefined
                initContainers?: IoK8sApiCoreV1Container[] | undefined
                nodeName?: string | undefined
                nodeSelector?: { [x: string]: string } | undefined
                os?: { name: string } | undefined
                overhead?: { [x: string]: IoK8sApimachineryPkgApiResourceQuantity } | undefined
                podNetwork?: string | undefined
                preemptionPolicy?: string | undefined
                priority?: number | undefined
                priorityClassName?: string | undefined
                readinessGates?: IoK8sApiCoreV1PodReadinessGate[] | undefined
                resourceClaims?: IoK8sApiCoreV1PodResourceClaim[] | undefined
                resources?:
                  | {
                      claims?: IoK8sApiCoreV1ResourceClaim[] | undefined
                      limits?: { [x: string]: IoK8sApimachineryPkgApiResourceQuantity } | undefined
                      requests?:
                        | { [x: string]: IoK8sApimachineryPkgApiResourceQuantity }
                        | undefined
                    }
                  | undefined
                restartPolicy?: string | undefined
                runtimeClassName?: string | undefined
                schedulerName?: string | undefined
                schedulingGates?: IoK8sApiCoreV1PodSchedulingGate[] | undefined
                schedulingGroup?: { podGroupName?: string | undefined } | undefined
                securityContext?:
                  | {
                      appArmorProfile?:
                        | { localhostProfile?: string | undefined; type: string }
                        | undefined
                      fsGroup?: bigint | undefined
                      fsGroupChangePolicy?: string | undefined
                      runAsGroup?: bigint | undefined
                      runAsNonRoot?: boolean | undefined
                      runAsUser?: bigint | undefined
                      seLinuxChangePolicy?: string | undefined
                      seLinuxOptions?:
                        | {
                            level?: string | undefined
                            role?: string | undefined
                            type?: string | undefined
                            user?: string | undefined
                          }
                        | undefined
                      seccompProfile?:
                        | {
                            localhostProfile?: string | undefined
                            oci?:
                              | {
                                  baseProfile?:
                                    | { localhostProfile?: string | undefined; type: string }
                                    | undefined
                                  ref: string
                                }
                              | undefined
                            type: string
                          }
                        | undefined
                      supplementalGroups?: bigint[] | undefined
                      supplementalGroupsPolicy?: string | undefined
                      sysctls?: IoK8sApiCoreV1Sysctl[] | undefined
                      windowsOptions?:
                        | {
                            gmsaCredentialSpec?: string | undefined
                            gmsaCredentialSpecName?: string | undefined
                            hostProcess?: boolean | undefined
                            runAsUserName?: string | undefined
                          }
                        | undefined
                    }
                  | undefined
                serviceAccount?: string | undefined
                serviceAccountName?: string | undefined
                setHostnameAsFQDN?: boolean | undefined
                shareProcessNamespace?: boolean | undefined
                subdomain?: string | undefined
                terminationGracePeriodSeconds?: bigint | undefined
                tolerations?: IoK8sApiCoreV1Toleration[] | undefined
                topologySpreadConstraints?: IoK8sApiCoreV1TopologySpreadConstraint[] | undefined
                volumes?: IoK8sApiCoreV1Volume[] | undefined
              }
            | undefined
        }
        ttlSecondsAfterFinished?: number | undefined
      }
    }
    schedule: string
    startingDeadlineSeconds?: bigint | undefined
    successfulJobsHistoryLimit?: number | undefined
    suspend?: boolean | undefined
    timeZone?: string | undefined
  }
  status?:
    | {
        active?: IoK8sApiCoreV1ObjectReference[] | undefined
        lastScheduleTime?: {} | undefined
        lastSuccessfulTime?: {} | undefined
      }
    | undefined
}
type IoK8sApiBatchV1CronJobList = {
  apiVersion?: string | undefined
  items: IoK8sApiBatchV1CronJob[]
  kind?: string | undefined
  metadata?:
    | {
        continue?: string | undefined
        remainingItemCount?: bigint | undefined
        resourceVersion?: string | undefined
        selfLink?: string | undefined
        shardInfo?: { selector: string } | undefined
      }
    | undefined
}
type IoK8sApiBatchV1JobCondition = {
  lastProbeTime?: {} | undefined
  lastTransitionTime?: {} | undefined
  message?: string | undefined
  reason?: string | undefined
  status?: string | undefined
  type?: string | undefined
}
type IoK8sApiBatchV1Job = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?:
    | {
        annotations?: { [x: string]: string } | undefined
        creationTimestamp?: {} | undefined
        deletionGracePeriodSeconds?: bigint | undefined
        deletionTimestamp?: {} | undefined
        finalizers?: string[] | undefined
        generateName?: string | undefined
        generation?: bigint | undefined
        labels?: { [x: string]: string } | undefined
        managedFields?: IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry[] | undefined
        name?: string | undefined
        namespace?: string | undefined
        ownerReferences?: IoK8sApimachineryPkgApisMetaV1OwnerReference[] | undefined
        resourceVersion?: string | undefined
        selfLink?: string | undefined
        uid?: string | undefined
      }
    | undefined
  spec: {
    activeDeadlineSeconds?: bigint | undefined
    backoffLimit?: number | undefined
    backoffLimitPerIndex?: number | undefined
    completionMode?: string | undefined
    completions?: number | undefined
    managedBy?: string | undefined
    manualSelector?: boolean | undefined
    maxFailedIndexes?: number | undefined
    parallelism?: number | undefined
    podFailurePolicy?: { rules?: IoK8sApiBatchV1PodFailurePolicyRule[] | undefined } | undefined
    podReplacementPolicy?: string | undefined
    scheduling?:
      | {
          disruptionMode?: { all?: {} | undefined; single?: {} | undefined } | undefined
          resourceClaims?: IoK8sApiSchedulingV1WorkloadPodGroupResourceClaim[] | undefined
          schedulingConstraints?:
            | { topology?: IoK8sApiSchedulingV1WorkloadTopologyConstraint[] | undefined }
            | undefined
          schedulingPolicy?:
            | { basic?: {} | undefined; gang?: { minCount?: number | undefined } | undefined }
            | undefined
        }
      | undefined
    selector?:
      | {
          matchExpressions?: IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement[] | undefined
          matchLabels?: { [x: string]: string } | undefined
        }
      | undefined
    successPolicy?: { rules: IoK8sApiBatchV1SuccessPolicyRule[] } | undefined
    suspend?: boolean | undefined
    template: {
      metadata?:
        | {
            annotations?: { [x: string]: string } | undefined
            creationTimestamp?: {} | undefined
            deletionGracePeriodSeconds?: bigint | undefined
            deletionTimestamp?: {} | undefined
            finalizers?: string[] | undefined
            generateName?: string | undefined
            generation?: bigint | undefined
            labels?: { [x: string]: string } | undefined
            managedFields?: IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry[] | undefined
            name?: string | undefined
            namespace?: string | undefined
            ownerReferences?: IoK8sApimachineryPkgApisMetaV1OwnerReference[] | undefined
            resourceVersion?: string | undefined
            selfLink?: string | undefined
            uid?: string | undefined
          }
        | undefined
      spec?:
        | {
            activeDeadlineSeconds?: bigint | undefined
            affinity?:
              | {
                  nodeAffinity?:
                    | {
                        preferredDuringSchedulingIgnoredDuringExecution?:
                          | IoK8sApiCoreV1PreferredSchedulingTerm[]
                          | undefined
                        requiredDuringSchedulingIgnoredDuringExecution?:
                          | { nodeSelectorTerms: IoK8sApiCoreV1NodeSelectorTerm[] }
                          | undefined
                      }
                    | undefined
                  podAffinity?:
                    | {
                        preferredDuringSchedulingIgnoredDuringExecution?:
                          | IoK8sApiCoreV1WeightedPodAffinityTerm[]
                          | undefined
                        requiredDuringSchedulingIgnoredDuringExecution?:
                          | IoK8sApiCoreV1PodAffinityTerm[]
                          | undefined
                      }
                    | undefined
                  podAntiAffinity?:
                    | {
                        preferredDuringSchedulingIgnoredDuringExecution?:
                          | IoK8sApiCoreV1WeightedPodAffinityTerm[]
                          | undefined
                        requiredDuringSchedulingIgnoredDuringExecution?:
                          | IoK8sApiCoreV1PodAffinityTerm[]
                          | undefined
                      }
                    | undefined
                }
              | undefined
            automountServiceAccountToken?: boolean | undefined
            containers: IoK8sApiCoreV1Container[]
            dnsConfig?:
              | {
                  nameservers?: string[] | undefined
                  options?: IoK8sApiCoreV1PodDNSConfigOption[] | undefined
                  searches?: string[] | undefined
                }
              | undefined
            dnsPolicy?: string | undefined
            enableServiceLinks?: boolean | undefined
            ephemeralContainers?: IoK8sApiCoreV1EphemeralContainer[] | undefined
            evictionResponders?: IoK8sApiCoreV1EvictionResponder[] | undefined
            hostAliases?: IoK8sApiCoreV1HostAlias[] | undefined
            hostIPC?: boolean | undefined
            hostNetwork?: boolean | undefined
            hostPID?: boolean | undefined
            hostUsers?: boolean | undefined
            hostname?: string | undefined
            hostnameOverride?: string | undefined
            imagePullSecrets?: IoK8sApiCoreV1LocalObjectReference[] | undefined
            initContainers?: IoK8sApiCoreV1Container[] | undefined
            nodeName?: string | undefined
            nodeSelector?: { [x: string]: string } | undefined
            os?: { name: string } | undefined
            overhead?: { [x: string]: IoK8sApimachineryPkgApiResourceQuantity } | undefined
            podNetwork?: string | undefined
            preemptionPolicy?: string | undefined
            priority?: number | undefined
            priorityClassName?: string | undefined
            readinessGates?: IoK8sApiCoreV1PodReadinessGate[] | undefined
            resourceClaims?: IoK8sApiCoreV1PodResourceClaim[] | undefined
            resources?:
              | {
                  claims?: IoK8sApiCoreV1ResourceClaim[] | undefined
                  limits?: { [x: string]: IoK8sApimachineryPkgApiResourceQuantity } | undefined
                  requests?: { [x: string]: IoK8sApimachineryPkgApiResourceQuantity } | undefined
                }
              | undefined
            restartPolicy?: string | undefined
            runtimeClassName?: string | undefined
            schedulerName?: string | undefined
            schedulingGates?: IoK8sApiCoreV1PodSchedulingGate[] | undefined
            schedulingGroup?: { podGroupName?: string | undefined } | undefined
            securityContext?:
              | {
                  appArmorProfile?:
                    | { localhostProfile?: string | undefined; type: string }
                    | undefined
                  fsGroup?: bigint | undefined
                  fsGroupChangePolicy?: string | undefined
                  runAsGroup?: bigint | undefined
                  runAsNonRoot?: boolean | undefined
                  runAsUser?: bigint | undefined
                  seLinuxChangePolicy?: string | undefined
                  seLinuxOptions?:
                    | {
                        level?: string | undefined
                        role?: string | undefined
                        type?: string | undefined
                        user?: string | undefined
                      }
                    | undefined
                  seccompProfile?:
                    | {
                        localhostProfile?: string | undefined
                        oci?:
                          | {
                              baseProfile?:
                                | { localhostProfile?: string | undefined; type: string }
                                | undefined
                              ref: string
                            }
                          | undefined
                        type: string
                      }
                    | undefined
                  supplementalGroups?: bigint[] | undefined
                  supplementalGroupsPolicy?: string | undefined
                  sysctls?: IoK8sApiCoreV1Sysctl[] | undefined
                  windowsOptions?:
                    | {
                        gmsaCredentialSpec?: string | undefined
                        gmsaCredentialSpecName?: string | undefined
                        hostProcess?: boolean | undefined
                        runAsUserName?: string | undefined
                      }
                    | undefined
                }
              | undefined
            serviceAccount?: string | undefined
            serviceAccountName?: string | undefined
            setHostnameAsFQDN?: boolean | undefined
            shareProcessNamespace?: boolean | undefined
            subdomain?: string | undefined
            terminationGracePeriodSeconds?: bigint | undefined
            tolerations?: IoK8sApiCoreV1Toleration[] | undefined
            topologySpreadConstraints?: IoK8sApiCoreV1TopologySpreadConstraint[] | undefined
            volumes?: IoK8sApiCoreV1Volume[] | undefined
          }
        | undefined
    }
    ttlSecondsAfterFinished?: number | undefined
  }
  status?:
    | {
        active?: number | undefined
        completedIndexes?: string | undefined
        completionTime?: {} | undefined
        conditions?: IoK8sApiBatchV1JobCondition[] | undefined
        failed?: number | undefined
        failedIndexes?: string | undefined
        ready?: number | undefined
        startTime?: {} | undefined
        succeeded?: number | undefined
        terminating?: number | undefined
        uncountedTerminatedPods?:
          | { failed?: string[] | undefined; succeeded?: string[] | undefined }
          | undefined
      }
    | undefined
}
type IoK8sApiBatchV1JobList = {
  apiVersion?: string | undefined
  items: IoK8sApiBatchV1Job[]
  kind?: string | undefined
  metadata?:
    | {
        continue?: string | undefined
        remainingItemCount?: bigint | undefined
        resourceVersion?: string | undefined
        selfLink?: string | undefined
        shardInfo?: { selector: string } | undefined
      }
    | undefined
}
type IoK8sApimachineryPkgApisMetaV1StatusCause = {
  field?: string | undefined
  message?: string | undefined
  reason?: string | undefined
}
type IoK8sApimachineryPkgApisMetaV1Status = {
  apiVersion?: string | undefined
  code?: number | undefined
  details?:
    | {
        causes?: IoK8sApimachineryPkgApisMetaV1StatusCause[] | undefined
        group?: string | undefined
        kind?: string | undefined
        name?: string | undefined
        retryAfterSeconds?: number | undefined
        uid?: string | undefined
      }
    | undefined
  kind?: string | undefined
  message?: string | undefined
  metadata?:
    | {
        continue?: string | undefined
        remainingItemCount?: bigint | undefined
        resourceVersion?: string | undefined
        selfLink?: string | undefined
        shardInfo?: { selector: string } | undefined
      }
    | undefined
  reason?: string | undefined
  status?: string | undefined
}
type IoK8sApimachineryPkgApisMetaV1Patch = { [x: string]: unknown }
type IoK8sApimachineryPkgApisMetaV1WatchEvent = { object: {}; type: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/apis/batch/v1/': {
      $get:
        | {
            input: {}
            output: IoK8sApimachineryPkgApisMetaV1APIResourceList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {}
            output: IoK8sApimachineryPkgApisMetaV1APIResourceList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: IoK8sApimachineryPkgApisMetaV1APIResourceList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {}
            output: IoK8sApimachineryPkgApisMetaV1APIResourceList
            outputFormat: 'text'
            status: 200
          }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/apis/batch/v1/cronjobs': {
      $get:
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApiBatchV1CronJobList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApiBatchV1CronJobList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApiBatchV1CronJobList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApiBatchV1CronJobList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApiBatchV1CronJobList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApiBatchV1CronJobList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApiBatchV1CronJobList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/apis/batch/v1/jobs': {
      $get:
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApiBatchV1JobList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApiBatchV1JobList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApiBatchV1JobList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApiBatchV1JobList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApiBatchV1JobList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApiBatchV1JobList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApiBatchV1JobList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/apis/batch/v1/namespaces/:namespace/cronjobs': {
      $delete:
        | {
            input: { param: { namespace: string } } & {
              query: {
                continue?: string | undefined
                dryRun?: string | undefined
                fieldSelector?: string | undefined
                gracePeriodSeconds?: number | undefined
                ignoreStoreReadErrorWithClusterBreakingPotential?: boolean | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                orphanDependents?: boolean | undefined
                propagationPolicy?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1Status
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                continue?: string | undefined
                dryRun?: string | undefined
                fieldSelector?: string | undefined
                gracePeriodSeconds?: number | undefined
                ignoreStoreReadErrorWithClusterBreakingPotential?: boolean | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                orphanDependents?: boolean | undefined
                propagationPolicy?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1Status
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                continue?: string | undefined
                dryRun?: string | undefined
                fieldSelector?: string | undefined
                gracePeriodSeconds?: number | undefined
                ignoreStoreReadErrorWithClusterBreakingPotential?: boolean | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                orphanDependents?: boolean | undefined
                propagationPolicy?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1Status
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                continue?: string | undefined
                dryRun?: string | undefined
                fieldSelector?: string | undefined
                gracePeriodSeconds?: number | undefined
                ignoreStoreReadErrorWithClusterBreakingPotential?: boolean | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                orphanDependents?: boolean | undefined
                propagationPolicy?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1Status
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                continue?: string | undefined
                dryRun?: string | undefined
                fieldSelector?: string | undefined
                gracePeriodSeconds?: number | undefined
                ignoreStoreReadErrorWithClusterBreakingPotential?: boolean | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                orphanDependents?: boolean | undefined
                propagationPolicy?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                pretty?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
      $get:
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1CronJobList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1CronJobList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1CronJobList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1CronJobList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1CronJobList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1CronJobList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1CronJobList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
                pretty?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
      $post:
        | {
            input: { param: { namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'text'
            status: 202
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'text'
            status: 202
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'text'
            status: 202
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/apis/batch/v1/namespaces/:namespace/cronjobs/:name': {
      $delete:
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                gracePeriodSeconds?: number | undefined
                ignoreStoreReadErrorWithClusterBreakingPotential?: boolean | undefined
                orphanDependents?: boolean | undefined
                propagationPolicy?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1Status
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                gracePeriodSeconds?: number | undefined
                ignoreStoreReadErrorWithClusterBreakingPotential?: boolean | undefined
                orphanDependents?: boolean | undefined
                propagationPolicy?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1Status
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                gracePeriodSeconds?: number | undefined
                ignoreStoreReadErrorWithClusterBreakingPotential?: boolean | undefined
                orphanDependents?: boolean | undefined
                propagationPolicy?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1Status
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                gracePeriodSeconds?: number | undefined
                ignoreStoreReadErrorWithClusterBreakingPotential?: boolean | undefined
                orphanDependents?: boolean | undefined
                propagationPolicy?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1Status
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                gracePeriodSeconds?: number | undefined
                ignoreStoreReadErrorWithClusterBreakingPotential?: boolean | undefined
                orphanDependents?: boolean | undefined
                propagationPolicy?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1Status
            outputFormat: 'text'
            status: 202
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                gracePeriodSeconds?: number | undefined
                ignoreStoreReadErrorWithClusterBreakingPotential?: boolean | undefined
                orphanDependents?: boolean | undefined
                propagationPolicy?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1Status
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                gracePeriodSeconds?: number | undefined
                ignoreStoreReadErrorWithClusterBreakingPotential?: boolean | undefined
                orphanDependents?: boolean | undefined
                propagationPolicy?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1Status
            outputFormat: 'text'
            status: 202
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                gracePeriodSeconds?: number | undefined
                ignoreStoreReadErrorWithClusterBreakingPotential?: boolean | undefined
                orphanDependents?: boolean | undefined
                propagationPolicy?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1Status
            outputFormat: 'text'
            status: 202
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                gracePeriodSeconds?: number | undefined
                ignoreStoreReadErrorWithClusterBreakingPotential?: boolean | undefined
                orphanDependents?: boolean | undefined
                propagationPolicy?: string | undefined
                pretty?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
      $get:
        | {
            input: { param: { name: string; namespace: string } } & {
              query: { pretty?: string | undefined }
            }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: { pretty?: string | undefined }
            }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: { pretty?: string | undefined }
            }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: { pretty?: string | undefined }
            }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: { pretty?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
      $patch:
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: {}
            outputFormat: string
            status: 401
          }
      $put:
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/apis/batch/v1/namespaces/:namespace/cronjobs/:name/status': {
      $get:
        | {
            input: { param: { name: string; namespace: string } } & {
              query: { pretty?: string | undefined }
            }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: { pretty?: string | undefined }
            }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: { pretty?: string | undefined }
            }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: { pretty?: string | undefined }
            }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: { pretty?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
      $patch:
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: {}
            outputFormat: string
            status: 401
          }
      $put:
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1CronJob
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/apis/batch/v1/namespaces/:namespace/jobs': {
      $delete:
        | {
            input: { param: { namespace: string } } & {
              query: {
                continue?: string | undefined
                dryRun?: string | undefined
                fieldSelector?: string | undefined
                gracePeriodSeconds?: number | undefined
                ignoreStoreReadErrorWithClusterBreakingPotential?: boolean | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                orphanDependents?: boolean | undefined
                propagationPolicy?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1Status
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                continue?: string | undefined
                dryRun?: string | undefined
                fieldSelector?: string | undefined
                gracePeriodSeconds?: number | undefined
                ignoreStoreReadErrorWithClusterBreakingPotential?: boolean | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                orphanDependents?: boolean | undefined
                propagationPolicy?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1Status
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                continue?: string | undefined
                dryRun?: string | undefined
                fieldSelector?: string | undefined
                gracePeriodSeconds?: number | undefined
                ignoreStoreReadErrorWithClusterBreakingPotential?: boolean | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                orphanDependents?: boolean | undefined
                propagationPolicy?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1Status
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                continue?: string | undefined
                dryRun?: string | undefined
                fieldSelector?: string | undefined
                gracePeriodSeconds?: number | undefined
                ignoreStoreReadErrorWithClusterBreakingPotential?: boolean | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                orphanDependents?: boolean | undefined
                propagationPolicy?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1Status
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                continue?: string | undefined
                dryRun?: string | undefined
                fieldSelector?: string | undefined
                gracePeriodSeconds?: number | undefined
                ignoreStoreReadErrorWithClusterBreakingPotential?: boolean | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                orphanDependents?: boolean | undefined
                propagationPolicy?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                pretty?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
      $get:
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1JobList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1JobList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1JobList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1JobList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1JobList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1JobList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1JobList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
                pretty?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
      $post:
        | {
            input: { param: { namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1Job
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1Job
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1Job
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1Job
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1Job
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1Job
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1Job
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1Job
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1Job
            outputFormat: 'text'
            status: 202
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1Job
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1Job
            outputFormat: 'text'
            status: 202
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1Job
            outputFormat: 'text'
            status: 202
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/apis/batch/v1/namespaces/:namespace/jobs/:name': {
      $delete:
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                gracePeriodSeconds?: number | undefined
                ignoreStoreReadErrorWithClusterBreakingPotential?: boolean | undefined
                orphanDependents?: boolean | undefined
                propagationPolicy?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1Status
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                gracePeriodSeconds?: number | undefined
                ignoreStoreReadErrorWithClusterBreakingPotential?: boolean | undefined
                orphanDependents?: boolean | undefined
                propagationPolicy?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1Status
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                gracePeriodSeconds?: number | undefined
                ignoreStoreReadErrorWithClusterBreakingPotential?: boolean | undefined
                orphanDependents?: boolean | undefined
                propagationPolicy?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1Status
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                gracePeriodSeconds?: number | undefined
                ignoreStoreReadErrorWithClusterBreakingPotential?: boolean | undefined
                orphanDependents?: boolean | undefined
                propagationPolicy?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1Status
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                gracePeriodSeconds?: number | undefined
                ignoreStoreReadErrorWithClusterBreakingPotential?: boolean | undefined
                orphanDependents?: boolean | undefined
                propagationPolicy?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1Status
            outputFormat: 'text'
            status: 202
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                gracePeriodSeconds?: number | undefined
                ignoreStoreReadErrorWithClusterBreakingPotential?: boolean | undefined
                orphanDependents?: boolean | undefined
                propagationPolicy?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1Status
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                gracePeriodSeconds?: number | undefined
                ignoreStoreReadErrorWithClusterBreakingPotential?: boolean | undefined
                orphanDependents?: boolean | undefined
                propagationPolicy?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1Status
            outputFormat: 'text'
            status: 202
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                gracePeriodSeconds?: number | undefined
                ignoreStoreReadErrorWithClusterBreakingPotential?: boolean | undefined
                orphanDependents?: boolean | undefined
                propagationPolicy?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1Status
            outputFormat: 'text'
            status: 202
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                gracePeriodSeconds?: number | undefined
                ignoreStoreReadErrorWithClusterBreakingPotential?: boolean | undefined
                orphanDependents?: boolean | undefined
                propagationPolicy?: string | undefined
                pretty?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
      $get:
        | {
            input: { param: { name: string; namespace: string } } & {
              query: { pretty?: string | undefined }
            }
            output: IoK8sApiBatchV1Job
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: { pretty?: string | undefined }
            }
            output: IoK8sApiBatchV1Job
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: { pretty?: string | undefined }
            }
            output: IoK8sApiBatchV1Job
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: { pretty?: string | undefined }
            }
            output: IoK8sApiBatchV1Job
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: { pretty?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
      $patch:
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiBatchV1Job
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiBatchV1Job
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiBatchV1Job
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiBatchV1Job
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiBatchV1Job
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiBatchV1Job
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiBatchV1Job
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiBatchV1Job
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: {}
            outputFormat: string
            status: 401
          }
      $put:
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1Job
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1Job
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1Job
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1Job
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1Job
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1Job
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1Job
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1Job
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/apis/batch/v1/namespaces/:namespace/jobs/:name/status': {
      $get:
        | {
            input: { param: { name: string; namespace: string } } & {
              query: { pretty?: string | undefined }
            }
            output: IoK8sApiBatchV1Job
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: { pretty?: string | undefined }
            }
            output: IoK8sApiBatchV1Job
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: { pretty?: string | undefined }
            }
            output: IoK8sApiBatchV1Job
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: { pretty?: string | undefined }
            }
            output: IoK8sApiBatchV1Job
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: { pretty?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
      $patch:
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiBatchV1Job
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiBatchV1Job
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiBatchV1Job
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiBatchV1Job
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiBatchV1Job
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiBatchV1Job
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiBatchV1Job
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: IoK8sApiBatchV1Job
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                force?: boolean | undefined
                pretty?: string | undefined
              }
            } & { json: IoK8sApimachineryPkgApisMetaV1Patch }
            output: {}
            outputFormat: string
            status: 401
          }
      $put:
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1Job
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1Job
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1Job
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1Job
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1Job
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1Job
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1Job
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: IoK8sApiBatchV1Job
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                dryRun?: string | undefined
                fieldManager?: string | undefined
                fieldValidation?: string | undefined
                pretty?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/apis/batch/v1/watch/cronjobs': {
      $get:
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/apis/batch/v1/watch/jobs': {
      $get:
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/apis/batch/v1/watch/namespaces/:namespace/cronjobs': {
      $get:
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/apis/batch/v1/watch/namespaces/:namespace/cronjobs/:name': {
      $get:
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/apis/batch/v1/watch/namespaces/:namespace/jobs': {
      $get:
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/apis/batch/v1/watch/namespaces/:namespace/jobs/:name': {
      $get:
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: IoK8sApimachineryPkgApisMetaV1WatchEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string; namespace: string } } & {
              query: {
                allowWatchBookmarks?: boolean | undefined
                continue?: string | undefined
                fieldSelector?: string | undefined
                labelSelector?: string | undefined
                limit?: number | undefined
                pretty?: string | undefined
                resourceVersion?: string | undefined
                resourceVersionMatch?: string | undefined
                sendInitialEvents?: boolean | undefined
                shardSelector?: string | undefined
                timeoutSeconds?: number | undefined
                watch?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  },
  '/'
>
export default routes
