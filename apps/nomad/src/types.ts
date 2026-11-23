type ACLTokenRoleLink = { ID?: string | undefined; Name?: string | undefined }
type ACLToken = {
  AccessorID?: string | undefined
  CreateIndex?: number | undefined
  CreateTime?: string | undefined
  ExpirationTTL?: bigint | undefined
  ExpirationTime?: string | undefined
  Global?: boolean | undefined
  ModifyIndex?: number | undefined
  Name?: string | undefined
  Policies?: string[] | undefined
  Roles?: ACLTokenRoleLink[] | undefined
  SecretID?: string | undefined
  Type?: string | undefined
}
type ACLPolicyListStub = {
  CreateIndex?: number | undefined
  Description?: string | undefined
  ModifyIndex?: number | undefined
  Name?: string | undefined
}
type JobACL = {
  Group?: string | undefined
  JobID?: string | undefined
  Namespace?: string | undefined
  Task?: string | undefined
}
type ACLPolicy = {
  CreateIndex?: number | undefined
  Description?: string | undefined
  JobACL?: JobACL | undefined
  ModifyIndex?: number | undefined
  Name?: string | undefined
  Rules?: string | undefined
}
type OneTimeToken = {
  AccessorID?: string | undefined
  CreateIndex?: number | undefined
  ExpiresAt?: string | undefined
  ModifyIndex?: number | undefined
  OneTimeSecretID?: string | undefined
}
type OneTimeTokenExchangeRequest = { OneTimeSecretID?: string | undefined }
type ACLTokenListStub = {
  AccessorID?: string | undefined
  CreateIndex?: number | undefined
  CreateTime?: string | undefined
  Global?: boolean | undefined
  ModifyIndex?: number | undefined
  Name?: string | undefined
  Policies?: string[] | undefined
  Roles?: ACLTokenRoleLink[] | undefined
  Type?: string | undefined
  expiration_time?: string | undefined
}
type DNSConfig = {
  Options?: string[] | undefined
  Searches?: string[] | undefined
  Servers?: string[] | undefined
}
type Port = {
  HostNetwork?: string | undefined
  Label?: string | undefined
  To?: number | undefined
  Value?: number | undefined
}
type NetworkResource = {
  CIDR?: string | undefined
  DNS?: DNSConfig | undefined
  Device?: string | undefined
  DynamicPorts?: Port[] | undefined
  Hostname?: string | undefined
  IP?: string | undefined
  MBits?: number | undefined
  Mode?: string | undefined
  ReservedPorts?: Port[] | undefined
}
type PortMapping = {
  HostIP?: string | undefined
  Label?: string | undefined
  To?: number | undefined
  Value?: number | undefined
}
type AllocatedSharedResources = {
  DiskMB?: bigint | undefined
  Networks?: NetworkResource[] | undefined
  Ports?: PortMapping[] | undefined
}
type AllocatedCpuResources = { CpuShares?: bigint | undefined }
type AllocatedDeviceResource = {
  DeviceIDs?: string[] | undefined
  Name?: string | undefined
  Type?: string | undefined
  Vendor?: string | undefined
}
type AllocatedMemoryResources = { MemoryMB?: bigint | undefined; MemoryMaxMB?: bigint | undefined }
type AllocatedTaskResources = {
  Cpu?: AllocatedCpuResources | undefined
  Devices?: AllocatedDeviceResource[] | undefined
  Memory?: AllocatedMemoryResources | undefined
  Networks?: NetworkResource[] | undefined
}
type AllocatedResources = {
  Shared?: AllocatedSharedResources | undefined
  Tasks?: { [x: string]: AllocatedTaskResources } | undefined
}
type AllocDeploymentStatus = {
  Canary?: boolean | undefined
  Healthy?: boolean | undefined
  ModifyIndex?: number | undefined
  Timestamp?: string | undefined
}
type DesiredTransition = { Migrate?: boolean | undefined; Reschedule?: boolean | undefined }
type Affinity = {
  LTarget?: string | undefined
  Operand?: string | undefined
  RTarget?: string | undefined
  Weight?: number | undefined
}
type Constraint = {
  LTarget?: string | undefined
  Operand?: string | undefined
  RTarget?: string | undefined
}
type MigrateStrategy = {
  HealthCheck?: string | undefined
  HealthyDeadline?: bigint | undefined
  MaxParallel?: number | undefined
  MinHealthyTime?: bigint | undefined
}
type MultiregionRegion = {
  Count?: number | undefined
  Datacenters?: string[] | undefined
  Meta?: { [x: string]: string } | undefined
  Name?: string | undefined
}
type MultiregionStrategy = { MaxParallel?: number | undefined; OnFailure?: string | undefined }
type Multiregion = {
  Regions?: MultiregionRegion[] | undefined
  Strategy?: MultiregionStrategy | undefined
}
type ParameterizedJobConfig = {
  MetaOptional?: string[] | undefined
  MetaRequired?: string[] | undefined
  Payload?: string | undefined
}
type PeriodicConfig = {
  Enabled?: boolean | undefined
  ProhibitOverlap?: boolean | undefined
  Spec?: string | undefined
  SpecType?: string | undefined
  TimeZone?: string | undefined
}
type ReschedulePolicy = {
  Attempts?: number | undefined
  Delay?: bigint | undefined
  DelayFunction?: string | undefined
  Interval?: bigint | undefined
  MaxDelay?: bigint | undefined
  Unlimited?: boolean | undefined
}
type SpreadTarget = { Percent?: number | undefined; Value?: string | undefined }
type Spread = {
  Attribute?: string | undefined
  SpreadTarget?: SpreadTarget[] | undefined
  Weight?: number | undefined
}
type Consul = { Namespace?: string | undefined }
type EphemeralDisk = {
  Migrate?: boolean | undefined
  SizeMB?: number | undefined
  Sticky?: boolean | undefined
}
type RestartPolicy = {
  Attempts?: number | undefined
  Delay?: bigint | undefined
  Interval?: bigint | undefined
  Mode?: string | undefined
}
type ScalingPolicy = {
  CreateIndex?: number | undefined
  Enabled?: boolean | undefined
  ID?: string | undefined
  Max?: bigint | undefined
  Min?: bigint | undefined
  ModifyIndex?: number | undefined
  Namespace?: string | undefined
  Policy?: { [x: string]: { [x: string]: unknown } } | undefined
  Target?: { [x: string]: string } | undefined
  Type?: string | undefined
}
type CheckRestart = {
  Grace?: bigint | undefined
  IgnoreWarnings?: boolean | undefined
  Limit?: number | undefined
}
type ServiceCheck = {
  AddressMode?: string | undefined
  Advertise?: string | undefined
  Args?: string[] | undefined
  Body?: string | undefined
  CheckRestart?: CheckRestart | undefined
  Command?: string | undefined
  Expose?: boolean | undefined
  FailuresBeforeCritical?: number | undefined
  GRPCService?: string | undefined
  GRPCUseTLS?: boolean | undefined
  Header?: { [x: string]: string[] } | undefined
  InitialStatus?: string | undefined
  Interval?: bigint | undefined
  Method?: string | undefined
  Name?: string | undefined
  OnUpdate?: string | undefined
  Path?: string | undefined
  PortLabel?: string | undefined
  Protocol?: string | undefined
  SuccessBeforePassing?: number | undefined
  TLSSkipVerify?: boolean | undefined
  TaskName?: string | undefined
  Timeout?: bigint | undefined
  Type?: string | undefined
}
type ConsulIngressService = { Hosts?: string[] | undefined; Name?: string | undefined }
type ConsulIngressListener = {
  Port?: number | undefined
  Protocol?: string | undefined
  Services?: ConsulIngressService[] | undefined
}
type ConsulGatewayTLSConfig = {
  CipherSuites?: string[] | undefined
  Enabled?: boolean | undefined
  TLSMaxVersion?: string | undefined
  TLSMinVersion?: string | undefined
}
type ConsulIngressConfigEntry = {
  Listeners?: ConsulIngressListener[] | undefined
  TLS?: ConsulGatewayTLSConfig | undefined
}
type ConsulGatewayBindAddress = {
  Address?: string | undefined
  Name?: string | undefined
  Port?: number | undefined
}
type ConsulGatewayProxy = {
  Config?: { [x: string]: { [x: string]: unknown } } | undefined
  ConnectTimeout?: bigint | undefined
  EnvoyDNSDiscoveryType?: string | undefined
  EnvoyGatewayBindAddresses?: { [x: string]: ConsulGatewayBindAddress } | undefined
  EnvoyGatewayBindTaggedAddresses?: boolean | undefined
  EnvoyGatewayNoDefaultBind?: boolean | undefined
}
type ConsulLinkedService = {
  CAFile?: string | undefined
  CertFile?: string | undefined
  KeyFile?: string | undefined
  Name?: string | undefined
  SNI?: string | undefined
}
type ConsulTerminatingConfigEntry = { Services?: ConsulLinkedService[] | undefined }
type ConsulGateway = {
  Ingress?: ConsulIngressConfigEntry | undefined
  Mesh?: { [x: string]: unknown } | undefined
  Proxy?: ConsulGatewayProxy | undefined
  Terminating?: ConsulTerminatingConfigEntry | undefined
}
type ConsulExposePath = {
  ListenerPort?: string | undefined
  LocalPathPort?: number | undefined
  Path?: string | undefined
  Protocol?: string | undefined
}
type ConsulExposeConfig = { Path?: ConsulExposePath[] | undefined }
type ConsulMeshGateway = { Mode?: string | undefined }
type ConsulUpstream = {
  Datacenter?: string | undefined
  DestinationName?: string | undefined
  DestinationNamespace?: string | undefined
  LocalBindAddress?: string | undefined
  LocalBindPort?: number | undefined
  MeshGateway?: ConsulMeshGateway | undefined
}
type ConsulProxy = {
  Config?: { [x: string]: { [x: string]: unknown } } | undefined
  ExposeConfig?: ConsulExposeConfig | undefined
  LocalServiceAddress?: string | undefined
  LocalServicePort?: number | undefined
  Upstreams?: ConsulUpstream[] | undefined
}
type ConsulSidecarService = {
  DisableDefaultTCPCheck?: boolean | undefined
  Port?: string | undefined
  Proxy?: ConsulProxy | undefined
  Tags?: string[] | undefined
}
type LogConfig = { MaxFileSizeMB?: number | undefined; MaxFiles?: number | undefined }
type RequestedDevice = {
  Affinities?: Affinity[] | undefined
  Constraints?: Constraint[] | undefined
  Count?: number | undefined
  Name?: string | undefined
}
type Resources = {
  CPU?: number | undefined
  Cores?: number | undefined
  Devices?: RequestedDevice[] | undefined
  DiskMB?: number | undefined
  IOPS?: number | undefined
  MemoryMB?: number | undefined
  MemoryMaxMB?: number | undefined
  Networks?: NetworkResource[] | undefined
}
type SidecarTask = {
  Config?: { [x: string]: { [x: string]: unknown } } | undefined
  Driver?: string | undefined
  Env?: { [x: string]: string } | undefined
  KillSignal?: string | undefined
  KillTimeout?: bigint | undefined
  LogConfig?: LogConfig | undefined
  Meta?: { [x: string]: string } | undefined
  Name?: string | undefined
  Resources?: Resources | undefined
  ShutdownDelay?: bigint | undefined
  User?: string | undefined
}
type ConsulConnect = {
  Gateway?: ConsulGateway | undefined
  Native?: boolean | undefined
  SidecarService?: ConsulSidecarService | undefined
  SidecarTask?: SidecarTask | undefined
}
type Service = {
  Address?: string | undefined
  AddressMode?: string | undefined
  CanaryMeta?: { [x: string]: string } | undefined
  CanaryTags?: string[] | undefined
  CheckRestart?: CheckRestart | undefined
  Checks?: ServiceCheck[] | undefined
  Connect?: ConsulConnect | undefined
  EnableTagOverride?: boolean | undefined
  Meta?: { [x: string]: string } | undefined
  Name?: string | undefined
  OnUpdate?: string | undefined
  PortLabel?: string | undefined
  Provider?: string | undefined
  TaggedAddresses?: { [x: string]: string } | undefined
  Tags?: string[] | undefined
  TaskName?: string | undefined
}
type TaskArtifact = {
  GetterHeaders?: { [x: string]: string } | undefined
  GetterMode?: string | undefined
  GetterOptions?: { [x: string]: string } | undefined
  GetterSource?: string | undefined
  RelativeDest?: string | undefined
}
type TaskCSIPluginConfig = {
  HealthTimeout?: bigint | undefined
  ID?: string | undefined
  MountDir?: string | undefined
  StagePublishBaseDir?: string | undefined
  Type?: string | undefined
}
type DispatchPayloadConfig = { File?: string | undefined }
type TaskLifecycle = { Hook?: string | undefined; Sidecar?: boolean | undefined }
type ChangeScript = {
  Args?: string[] | undefined
  Command?: string | undefined
  FailOnError?: boolean | undefined
  Timeout?: bigint | undefined
}
type WaitConfig = { Max?: bigint | undefined; Min?: bigint | undefined }
type Template = {
  ChangeMode?: string | undefined
  ChangeScript?: ChangeScript | undefined
  ChangeSignal?: string | undefined
  DestPath?: string | undefined
  EmbeddedTmpl?: string | undefined
  Envvars?: boolean | undefined
  Gid?: number | undefined
  LeftDelim?: string | undefined
  Perms?: string | undefined
  RightDelim?: string | undefined
  SourcePath?: string | undefined
  Splay?: bigint | undefined
  Uid?: number | undefined
  VaultGrace?: bigint | undefined
  Wait?: WaitConfig | undefined
}
type Vault = {
  ChangeMode?: string | undefined
  ChangeSignal?: string | undefined
  Env?: boolean | undefined
  Namespace?: string | undefined
  Policies?: string[] | undefined
}
type VolumeMount = {
  Destination?: string | undefined
  PropagationMode?: string | undefined
  ReadOnly?: boolean | undefined
  Volume?: string | undefined
}
type Task = {
  Affinities?: Affinity[] | undefined
  Artifacts?: TaskArtifact[] | undefined
  CSIPluginConfig?: TaskCSIPluginConfig | undefined
  Config?: { [x: string]: { [x: string]: unknown } } | undefined
  Constraints?: Constraint[] | undefined
  DispatchPayload?: DispatchPayloadConfig | undefined
  Driver?: string | undefined
  Env?: { [x: string]: string } | undefined
  KillSignal?: string | undefined
  KillTimeout?: bigint | undefined
  Kind?: string | undefined
  Leader?: boolean | undefined
  Lifecycle?: TaskLifecycle | undefined
  LogConfig?: LogConfig | undefined
  Meta?: { [x: string]: string } | undefined
  Name?: string | undefined
  Resources?: Resources | undefined
  RestartPolicy?: RestartPolicy | undefined
  ScalingPolicies?: ScalingPolicy[] | undefined
  Services?: Service[] | undefined
  ShutdownDelay?: bigint | undefined
  Templates?: Template[] | undefined
  User?: string | undefined
  Vault?: Vault | undefined
  VolumeMounts?: VolumeMount[] | undefined
}
type UpdateStrategy = {
  AutoPromote?: boolean | undefined
  AutoRevert?: boolean | undefined
  Canary?: number | undefined
  HealthCheck?: string | undefined
  HealthyDeadline?: bigint | undefined
  MaxParallel?: number | undefined
  MinHealthyTime?: bigint | undefined
  ProgressDeadline?: bigint | undefined
  Stagger?: bigint | undefined
}
type CSIMountOptions = { FSType?: string | undefined; MountFlags?: string[] | undefined }
type VolumeRequest = {
  AccessMode?: string | undefined
  AttachmentMode?: string | undefined
  MountOptions?: CSIMountOptions | undefined
  Name?: string | undefined
  PerAlloc?: boolean | undefined
  ReadOnly?: boolean | undefined
  Source?: string | undefined
  Type?: string | undefined
}
type TaskGroup = {
  Affinities?: Affinity[] | undefined
  Constraints?: Constraint[] | undefined
  Consul?: Consul | undefined
  Count?: number | undefined
  EphemeralDisk?: EphemeralDisk | undefined
  MaxClientDisconnect?: bigint | undefined
  Meta?: { [x: string]: string } | undefined
  Migrate?: MigrateStrategy | undefined
  Name?: string | undefined
  Networks?: NetworkResource[] | undefined
  ReschedulePolicy?: ReschedulePolicy | undefined
  RestartPolicy?: RestartPolicy | undefined
  Scaling?: ScalingPolicy | undefined
  Services?: Service[] | undefined
  ShutdownDelay?: bigint | undefined
  Spreads?: Spread[] | undefined
  StopAfterClientDisconnect?: bigint | undefined
  Tasks?: Task[] | undefined
  Update?: UpdateStrategy | undefined
  Volumes?: { [x: string]: VolumeRequest } | undefined
}
type Job = {
  Affinities?: Affinity[] | undefined
  AllAtOnce?: boolean | undefined
  Constraints?: Constraint[] | undefined
  ConsulNamespace?: string | undefined
  ConsulToken?: string | undefined
  CreateIndex?: number | undefined
  Datacenters?: string[] | undefined
  DispatchIdempotencyToken?: string | undefined
  Dispatched?: boolean | undefined
  ID?: string | undefined
  JobModifyIndex?: number | undefined
  Meta?: { [x: string]: string } | undefined
  Migrate?: MigrateStrategy | undefined
  ModifyIndex?: number | undefined
  Multiregion?: Multiregion | undefined
  Name?: string | undefined
  Namespace?: string | undefined
  NomadTokenID?: string | undefined
  ParameterizedJob?: ParameterizedJobConfig | undefined
  ParentID?: string | undefined
  Payload?: string | undefined
  Periodic?: PeriodicConfig | undefined
  Priority?: number | undefined
  Region?: string | undefined
  Reschedule?: ReschedulePolicy | undefined
  Spreads?: Spread[] | undefined
  Stable?: boolean | undefined
  Status?: string | undefined
  StatusDescription?: string | undefined
  Stop?: boolean | undefined
  SubmitTime?: bigint | undefined
  TaskGroups?: TaskGroup[] | undefined
  Type?: string | undefined
  Update?: UpdateStrategy | undefined
  VaultNamespace?: string | undefined
  VaultToken?: string | undefined
  Version?: number | undefined
}
type NodeScoreMeta = {
  NodeID?: string | undefined
  NormScore?: number | undefined
  Scores?: { [x: string]: number } | undefined
}
type AllocationMetric = {
  AllocationTime?: bigint | undefined
  ClassExhausted?: { [x: string]: number } | undefined
  ClassFiltered?: { [x: string]: number } | undefined
  CoalescedFailures?: number | undefined
  ConstraintFiltered?: { [x: string]: number } | undefined
  DimensionExhausted?: { [x: string]: number } | undefined
  NodesAvailable?: { [x: string]: number } | undefined
  NodesEvaluated?: number | undefined
  NodesExhausted?: number | undefined
  NodesFiltered?: number | undefined
  QuotaExhausted?: string[] | undefined
  ResourcesExhausted?: { [x: string]: Resources } | undefined
  ScoreMetaData?: NodeScoreMeta[] | undefined
  Scores?: { [x: string]: number } | undefined
}
type RescheduleEvent = {
  PrevAllocID?: string | undefined
  PrevNodeID?: string | undefined
  RescheduleTime?: bigint | undefined
}
type RescheduleTracker = { Events?: RescheduleEvent[] | undefined }
type TaskEvent = {
  Details?: { [x: string]: string } | undefined
  DiskLimit?: bigint | undefined
  DiskSize?: bigint | undefined
  DisplayMessage?: string | undefined
  DownloadError?: string | undefined
  DriverError?: string | undefined
  DriverMessage?: string | undefined
  ExitCode?: number | undefined
  FailedSibling?: string | undefined
  FailsTask?: boolean | undefined
  GenericSource?: string | undefined
  KillError?: string | undefined
  KillReason?: string | undefined
  KillTimeout?: bigint | undefined
  Message?: string | undefined
  RestartReason?: string | undefined
  SetupError?: string | undefined
  Signal?: number | undefined
  StartDelay?: bigint | undefined
  TaskSignal?: string | undefined
  TaskSignalReason?: string | undefined
  Time?: bigint | undefined
  Type?: string | undefined
  ValidationError?: string | undefined
  VaultError?: string | undefined
}
type TaskHandle = { DriverState?: string | undefined; Version?: number | undefined }
type TaskState = {
  Events?: TaskEvent[] | undefined
  Failed?: boolean | undefined
  FinishedAt?: string | undefined
  LastRestart?: string | undefined
  Restarts?: number | undefined
  StartedAt?: string | undefined
  State?: string | undefined
  TaskHandle?: TaskHandle | undefined
}
type Allocation = {
  AllocModifyIndex?: number | undefined
  AllocatedResources?: AllocatedResources | undefined
  ClientDescription?: string | undefined
  ClientStatus?: string | undefined
  CreateIndex?: number | undefined
  CreateTime?: bigint | undefined
  DeploymentID?: string | undefined
  DeploymentStatus?: AllocDeploymentStatus | undefined
  DesiredDescription?: string | undefined
  DesiredStatus?: string | undefined
  DesiredTransition?: DesiredTransition | undefined
  EvalID?: string | undefined
  FollowupEvalID?: string | undefined
  ID?: string | undefined
  Job?: Job | undefined
  JobID?: string | undefined
  Metrics?: AllocationMetric | undefined
  ModifyIndex?: number | undefined
  ModifyTime?: bigint | undefined
  Name?: string | undefined
  Namespace?: string | undefined
  NextAllocation?: string | undefined
  NodeID?: string | undefined
  NodeName?: string | undefined
  PreemptedAllocations?: string[] | undefined
  PreemptedByAllocation?: string | undefined
  PreviousAllocation?: string | undefined
  RescheduleTracker?: RescheduleTracker | undefined
  Resources?: Resources | undefined
  Services?: { [x: string]: string } | undefined
  TaskGroup?: string | undefined
  TaskResources?: { [x: string]: Resources } | undefined
  TaskStates?: { [x: string]: TaskState } | undefined
}
type ServiceRegistration = {
  Address?: string | undefined
  AllocID?: string | undefined
  CreateIndex?: number | undefined
  Datacenter?: string | undefined
  ID?: string | undefined
  JobID?: string | undefined
  ModifyIndex?: number | undefined
  Namespace?: string | undefined
  NodeID?: string | undefined
  Port?: number | undefined
  ServiceName?: string | undefined
  Tags?: string[] | undefined
}
type AllocStopResponse = { EvalID?: string | undefined; Index?: number | undefined }
type AllocationListStub = {
  AllocatedResources?: AllocatedResources | undefined
  ClientDescription?: string | undefined
  ClientStatus?: string | undefined
  CreateIndex?: number | undefined
  CreateTime?: bigint | undefined
  DeploymentStatus?: AllocDeploymentStatus | undefined
  DesiredDescription?: string | undefined
  DesiredStatus?: string | undefined
  EvalID?: string | undefined
  FollowupEvalID?: string | undefined
  ID?: string | undefined
  JobID?: string | undefined
  JobType?: string | undefined
  JobVersion?: number | undefined
  ModifyIndex?: number | undefined
  ModifyTime?: bigint | undefined
  Name?: string | undefined
  Namespace?: string | undefined
  NodeID?: string | undefined
  NodeName?: string | undefined
  PreemptedAllocations?: string[] | undefined
  PreemptedByAllocation?: string | undefined
  RescheduleTracker?: RescheduleTracker | undefined
  TaskGroup?: string | undefined
  TaskStates?: { [x: string]: TaskState } | undefined
}
type DeploymentState = {
  AutoRevert?: boolean | undefined
  DesiredCanaries?: number | undefined
  DesiredTotal?: number | undefined
  HealthyAllocs?: number | undefined
  PlacedAllocs?: number | undefined
  PlacedCanaries?: string[] | undefined
  ProgressDeadline?: bigint | undefined
  Promoted?: boolean | undefined
  RequireProgressBy?: string | undefined
  UnhealthyAllocs?: number | undefined
}
type Deployment = {
  CreateIndex?: number | undefined
  ID?: string | undefined
  IsMultiregion?: boolean | undefined
  JobCreateIndex?: number | undefined
  JobID?: string | undefined
  JobModifyIndex?: number | undefined
  JobSpecModifyIndex?: number | undefined
  JobVersion?: number | undefined
  ModifyIndex?: number | undefined
  Namespace?: string | undefined
  Status?: string | undefined
  StatusDescription?: string | undefined
  TaskGroups?: { [x: string]: DeploymentState } | undefined
}
type DeploymentAllocHealthRequest = {
  DeploymentID?: string | undefined
  HealthyAllocationIDs?: string[] | undefined
  Namespace?: string | undefined
  Region?: string | undefined
  SecretID?: string | undefined
  UnhealthyAllocationIDs?: string[] | undefined
}
type DeploymentUpdateResponse = {
  DeploymentModifyIndex?: number | undefined
  EvalCreateIndex?: number | undefined
  EvalID?: string | undefined
  LastIndex?: number | undefined
  RequestTime?: bigint | undefined
  RevertedJobVersion?: number | undefined
}
type DeploymentPauseRequest = {
  DeploymentID?: string | undefined
  Namespace?: string | undefined
  Pause?: boolean | undefined
  Region?: string | undefined
  SecretID?: string | undefined
}
type DeploymentPromoteRequest = {
  All?: boolean | undefined
  DeploymentID?: string | undefined
  Groups?: string[] | undefined
  Namespace?: string | undefined
  Region?: string | undefined
  SecretID?: string | undefined
}
type DeploymentUnblockRequest = {
  DeploymentID?: string | undefined
  Namespace?: string | undefined
  Region?: string | undefined
  SecretID?: string | undefined
}
type EvaluationStub = {
  BlockedEval?: string | undefined
  CreateIndex?: number | undefined
  CreateTime?: bigint | undefined
  DeploymentID?: string | undefined
  ID?: string | undefined
  JobID?: string | undefined
  ModifyIndex?: number | undefined
  ModifyTime?: bigint | undefined
  Namespace?: string | undefined
  NextEval?: string | undefined
  NodeID?: string | undefined
  PreviousEval?: string | undefined
  Priority?: number | undefined
  Status?: string | undefined
  StatusDescription?: string | undefined
  TriggeredBy?: string | undefined
  Type?: string | undefined
  WaitUntil?: string | undefined
}
type Evaluation = {
  AnnotatePlan?: boolean | undefined
  BlockedEval?: string | undefined
  ClassEligibility?: { [x: string]: boolean } | undefined
  CreateIndex?: number | undefined
  CreateTime?: bigint | undefined
  DeploymentID?: string | undefined
  EscapedComputedClass?: boolean | undefined
  FailedTGAllocs?: { [x: string]: AllocationMetric } | undefined
  ID?: string | undefined
  JobID?: string | undefined
  JobModifyIndex?: number | undefined
  ModifyIndex?: number | undefined
  ModifyTime?: bigint | undefined
  Namespace?: string | undefined
  NextEval?: string | undefined
  NodeID?: string | undefined
  NodeModifyIndex?: number | undefined
  PreviousEval?: string | undefined
  Priority?: number | undefined
  QueuedAllocations?: { [x: string]: number } | undefined
  QuotaLimitReached?: string | undefined
  RelatedEvals?: EvaluationStub[] | undefined
  SnapshotIndex?: number | undefined
  Status?: string | undefined
  StatusDescription?: string | undefined
  TriggeredBy?: string | undefined
  Type?: string | undefined
  Wait?: bigint | undefined
  WaitUntil?: string | undefined
}
type JobDeregisterResponse = {
  EvalCreateIndex?: number | undefined
  EvalID?: string | undefined
  JobModifyIndex?: number | undefined
  KnownLeader?: boolean | undefined
  LastContact?: bigint | undefined
  LastIndex?: number | undefined
  NextToken?: string | undefined
  RequestTime?: bigint | undefined
}
type JobRegisterRequest = {
  EnforceIndex?: boolean | undefined
  EvalPriority?: number | undefined
  Job?: Job | undefined
  JobModifyIndex?: number | undefined
  Namespace?: string | undefined
  PolicyOverride?: boolean | undefined
  PreserveCounts?: boolean | undefined
  Region?: string | undefined
  SecretID?: string | undefined
}
type JobRegisterResponse = {
  EvalCreateIndex?: number | undefined
  EvalID?: string | undefined
  JobModifyIndex?: number | undefined
  KnownLeader?: boolean | undefined
  LastContact?: bigint | undefined
  LastIndex?: number | undefined
  NextToken?: string | undefined
  RequestTime?: bigint | undefined
  Warnings?: string | undefined
}
type JobDispatchRequest = {
  JobID?: string | undefined
  Meta?: { [x: string]: string } | undefined
  Payload?: string | undefined
}
type JobDispatchResponse = {
  DispatchedJobID?: string | undefined
  EvalCreateIndex?: number | undefined
  EvalID?: string | undefined
  JobCreateIndex?: number | undefined
  LastIndex?: number | undefined
  RequestTime?: bigint | undefined
}
type EvalOptions = { ForceReschedule?: boolean | undefined }
type JobEvaluateRequest = {
  EvalOptions?: EvalOptions | undefined
  JobID?: string | undefined
  Namespace?: string | undefined
  Region?: string | undefined
  SecretID?: string | undefined
}
type PeriodicForceResponse = {
  EvalCreateIndex?: number | undefined
  EvalID?: string | undefined
  Index?: number | undefined
}
type JobPlanRequest = {
  Diff?: boolean | undefined
  Job?: Job | undefined
  Namespace?: string | undefined
  PolicyOverride?: boolean | undefined
  Region?: string | undefined
  SecretID?: string | undefined
}
type DesiredUpdates = {
  Canary?: number | undefined
  DestructiveUpdate?: number | undefined
  Ignore?: number | undefined
  InPlaceUpdate?: number | undefined
  Migrate?: number | undefined
  Place?: number | undefined
  Preemptions?: number | undefined
  Stop?: number | undefined
}
type PlanAnnotations = {
  DesiredTGUpdates?: { [x: string]: DesiredUpdates } | undefined
  PreemptedAllocs?: AllocationListStub[] | undefined
}
type FieldDiff = {
  Annotations?: string[] | undefined
  Name?: string | undefined
  New?: string | undefined
  Old?: string | undefined
  Type?: string | undefined
}
type ObjectDiff = {
  Fields?: FieldDiff[] | undefined
  Name?: string | undefined
  Objects?: ObjectDiff[] | undefined
  Type?: string | undefined
}
type TaskDiff = {
  Annotations?: string[] | undefined
  Fields?: FieldDiff[] | undefined
  Name?: string | undefined
  Objects?: ObjectDiff[] | undefined
  Type?: string | undefined
}
type TaskGroupDiff = {
  Fields?: FieldDiff[] | undefined
  Name?: string | undefined
  Objects?: ObjectDiff[] | undefined
  Tasks?: TaskDiff[] | undefined
  Type?: string | undefined
  Updates?: { [x: string]: number } | undefined
}
type JobDiff = {
  Fields?: FieldDiff[] | undefined
  ID?: string | undefined
  Objects?: ObjectDiff[] | undefined
  TaskGroups?: TaskGroupDiff[] | undefined
  Type?: string | undefined
}
type JobPlanResponse = {
  Annotations?: PlanAnnotations | undefined
  CreatedEvals?: Evaluation[] | undefined
  Diff?: JobDiff | undefined
  FailedTGAllocs?: { [x: string]: AllocationMetric } | undefined
  JobModifyIndex?: number | undefined
  NextPeriodicLaunch?: string | undefined
  Warnings?: string | undefined
}
type JobRevertRequest = {
  ConsulToken?: string | undefined
  EnforcePriorVersion?: number | undefined
  JobID?: string | undefined
  JobVersion?: number | undefined
  Namespace?: string | undefined
  Region?: string | undefined
  SecretID?: string | undefined
  VaultToken?: string | undefined
}
type ScalingEvent = {
  Count?: bigint | undefined
  CreateIndex?: number | undefined
  Error?: boolean | undefined
  EvalID?: string | undefined
  Message?: string | undefined
  Meta?: { [x: string]: { [x: string]: unknown } } | undefined
  PreviousCount?: bigint | undefined
  Time?: number | undefined
}
type TaskGroupScaleStatus = {
  Desired?: number | undefined
  Events?: ScalingEvent[] | undefined
  Healthy?: number | undefined
  Placed?: number | undefined
  Running?: number | undefined
  Unhealthy?: number | undefined
}
type JobScaleStatusResponse = {
  JobCreateIndex?: number | undefined
  JobID?: string | undefined
  JobModifyIndex?: number | undefined
  JobStopped?: boolean | undefined
  Namespace?: string | undefined
  TaskGroups?: { [x: string]: TaskGroupScaleStatus } | undefined
}
type ScalingRequest = {
  Count?: bigint | undefined
  Error?: boolean | undefined
  Message?: string | undefined
  Meta?: { [x: string]: { [x: string]: unknown } } | undefined
  Namespace?: string | undefined
  PolicyOverride?: boolean | undefined
  Region?: string | undefined
  SecretID?: string | undefined
  Target?: { [x: string]: string } | undefined
}
type JobStabilityRequest = {
  JobID?: string | undefined
  JobVersion?: number | undefined
  Namespace?: string | undefined
  Region?: string | undefined
  SecretID?: string | undefined
  Stable?: boolean | undefined
}
type JobStabilityResponse = { Index?: number | undefined }
type JobChildrenSummary = {
  Dead?: bigint | undefined
  Pending?: bigint | undefined
  Running?: bigint | undefined
}
type TaskGroupSummary = {
  Complete?: number | undefined
  Failed?: number | undefined
  Lost?: number | undefined
  Queued?: number | undefined
  Running?: number | undefined
  Starting?: number | undefined
  Unknown?: number | undefined
}
type JobSummary = {
  Children?: JobChildrenSummary | undefined
  CreateIndex?: number | undefined
  JobID?: string | undefined
  ModifyIndex?: number | undefined
  Namespace?: string | undefined
  Summary?: { [x: string]: TaskGroupSummary } | undefined
}
type JobVersionsResponse = {
  Diffs?: JobDiff[] | undefined
  KnownLeader?: boolean | undefined
  LastContact?: bigint | undefined
  LastIndex?: number | undefined
  NextToken?: string | undefined
  RequestTime?: bigint | undefined
  Versions?: Job[] | undefined
}
type JobListStub = {
  CreateIndex?: number | undefined
  Datacenters?: string[] | undefined
  ID?: string | undefined
  JobModifyIndex?: number | undefined
  JobSummary?: JobSummary | undefined
  ModifyIndex?: number | undefined
  Name?: string | undefined
  Namespace?: string | undefined
  ParameterizedJob?: boolean | undefined
  ParentID?: string | undefined
  Periodic?: boolean | undefined
  Priority?: number | undefined
  Status?: string | undefined
  StatusDescription?: string | undefined
  Stop?: boolean | undefined
  SubmitTime?: bigint | undefined
  Type?: string | undefined
}
type JobsParseRequest = {
  Canonicalize?: boolean | undefined
  JobHCL?: string | undefined
  hclv1?: boolean | undefined
}
type SampledValue = {
  Count?: number | undefined
  Labels?: { [x: string]: string } | undefined
  Max?: number | undefined
  Mean?: number | undefined
  Min?: number | undefined
  Name?: string | undefined
  Rate?: number | undefined
  Stddev?: number | undefined
  Sum?: number | undefined
}
type GaugeValue = {
  Labels?: { [x: string]: string } | undefined
  Name?: string | undefined
  Value?: number | undefined
}
type PointValue = { Name?: string | undefined; Points?: number[] | undefined }
type MetricsSummary = {
  Counters?: SampledValue[] | undefined
  Gauges?: GaugeValue[] | undefined
  Points?: PointValue[] | undefined
  Samples?: SampledValue[] | undefined
  Timestamp?: string | undefined
}
type NamespaceCapabilities = {
  DisabledTaskDrivers?: string[] | undefined
  EnabledTaskDrivers?: string[] | undefined
}
type Namespace = {
  Capabilities?: NamespaceCapabilities | undefined
  CreateIndex?: number | undefined
  Description?: string | undefined
  Meta?: { [x: string]: string } | undefined
  ModifyIndex?: number | undefined
  Name?: string | undefined
  Quota?: string | undefined
}
type CSIControllerInfo = {
  SupportsAttachDetach?: boolean | undefined
  SupportsClone?: boolean | undefined
  SupportsCondition?: boolean | undefined
  SupportsCreateDelete?: boolean | undefined
  SupportsCreateDeleteSnapshot?: boolean | undefined
  SupportsExpand?: boolean | undefined
  SupportsGet?: boolean | undefined
  SupportsGetCapacity?: boolean | undefined
  SupportsListSnapshots?: boolean | undefined
  SupportsListVolumes?: boolean | undefined
  SupportsListVolumesAttachedNodes?: boolean | undefined
  SupportsReadOnlyAttach?: boolean | undefined
}
type CSITopology = { Segments?: { [x: string]: string } | undefined }
type CSINodeInfo = {
  AccessibleTopology?: CSITopology | undefined
  ID?: string | undefined
  MaxVolumes?: bigint | undefined
  RequiresNodeStageVolume?: boolean | undefined
  SupportsCondition?: boolean | undefined
  SupportsExpand?: boolean | undefined
  SupportsStats?: boolean | undefined
}
type CSIInfo = {
  AllocID?: string | undefined
  ControllerInfo?: CSIControllerInfo | undefined
  HealthDescription?: string | undefined
  Healthy?: boolean | undefined
  NodeInfo?: CSINodeInfo | undefined
  PluginID?: string | undefined
  RequiresControllerPlugin?: boolean | undefined
  RequiresTopologies?: boolean | undefined
  UpdateTime?: string | undefined
}
type DrainStrategy = {
  Deadline?: bigint | undefined
  ForceDeadline?: string | undefined
  IgnoreSystemJobs?: boolean | undefined
  StartedAt?: string | undefined
}
type DriverInfo = {
  Attributes?: { [x: string]: string } | undefined
  Detected?: boolean | undefined
  HealthDescription?: string | undefined
  Healthy?: boolean | undefined
  UpdateTime?: string | undefined
}
type NodeEvent = {
  CreateIndex?: number | undefined
  Details?: { [x: string]: string } | undefined
  Message?: string | undefined
  Subsystem?: string | undefined
  Timestamp?: string | undefined
}
type HostNetworkInfo = {
  CIDR?: string | undefined
  Interface?: string | undefined
  Name?: string | undefined
  ReservedPorts?: string | undefined
}
type HostVolumeInfo = { Path?: string | undefined; ReadOnly?: boolean | undefined }
type DrainMetadata = {
  AccessorID?: string | undefined
  Meta?: { [x: string]: string } | undefined
  StartedAt?: string | undefined
  Status?: string | undefined
  UpdatedAt?: string | undefined
}
type NodeCpuResources = {
  CpuShares?: bigint | undefined
  ReservableCpuCores?: number[] | undefined
  TotalCpuCores?: number | undefined
}
type Attribute = {
  Bool?: boolean | undefined
  Float?: number | undefined
  Int?: bigint | undefined
  String?: string | undefined
  Unit?: string | undefined
}
type NodeDeviceLocality = { PciBusID?: string | undefined }
type NodeDevice = {
  HealthDescription?: string | undefined
  Healthy?: boolean | undefined
  ID?: string | undefined
  Locality?: NodeDeviceLocality | undefined
}
type NodeDeviceResource = {
  Attributes?: { [x: string]: Attribute } | undefined
  Instances?: NodeDevice[] | undefined
  Name?: string | undefined
  Type?: string | undefined
  Vendor?: string | undefined
}
type NodeDiskResources = { DiskMB?: bigint | undefined }
type NodeMemoryResources = { MemoryMB?: bigint | undefined }
type NodeResources = {
  Cpu?: NodeCpuResources | undefined
  Devices?: NodeDeviceResource[] | undefined
  Disk?: NodeDiskResources | undefined
  MaxDynamicPort?: number | undefined
  Memory?: NodeMemoryResources | undefined
  MinDynamicPort?: number | undefined
  Networks?: NetworkResource[] | undefined
}
type NodeReservedCpuResources = { CpuShares?: number | undefined }
type NodeReservedDiskResources = { DiskMB?: number | undefined }
type NodeReservedMemoryResources = { MemoryMB?: number | undefined }
type NodeReservedNetworkResources = { ReservedHostPorts?: string | undefined }
type NodeReservedResources = {
  Cpu?: NodeReservedCpuResources | undefined
  Disk?: NodeReservedDiskResources | undefined
  Memory?: NodeReservedMemoryResources | undefined
  Networks?: NodeReservedNetworkResources | undefined
}
type Node = {
  Attributes?: { [x: string]: string } | undefined
  CSIControllerPlugins?: { [x: string]: CSIInfo } | undefined
  CSINodePlugins?: { [x: string]: CSIInfo } | undefined
  CgroupParent?: string | undefined
  CreateIndex?: number | undefined
  Datacenter?: string | undefined
  Drain?: boolean | undefined
  DrainStrategy?: DrainStrategy | undefined
  Drivers?: { [x: string]: DriverInfo } | undefined
  Events?: NodeEvent[] | undefined
  HTTPAddr?: string | undefined
  HostNetworks?: { [x: string]: HostNetworkInfo } | undefined
  HostVolumes?: { [x: string]: HostVolumeInfo } | undefined
  ID?: string | undefined
  LastDrain?: DrainMetadata | undefined
  Links?: { [x: string]: string } | undefined
  Meta?: { [x: string]: string } | undefined
  ModifyIndex?: number | undefined
  Name?: string | undefined
  NodeClass?: string | undefined
  NodeResources?: NodeResources | undefined
  Reserved?: Resources | undefined
  ReservedResources?: NodeReservedResources | undefined
  Resources?: Resources | undefined
  SchedulingEligibility?: string | undefined
  Status?: string | undefined
  StatusDescription?: string | undefined
  StatusUpdatedAt?: bigint | undefined
  TLSEnabled?: boolean | undefined
}
type DrainSpec = { Deadline?: bigint | undefined; IgnoreSystemJobs?: boolean | undefined }
type NodeUpdateDrainRequest = {
  DrainSpec?: DrainSpec | undefined
  MarkEligible?: boolean | undefined
  Meta?: { [x: string]: string } | undefined
  NodeID?: string | undefined
}
type NodeDrainUpdateResponse = {
  EvalCreateIndex?: number | undefined
  EvalIDs?: string[] | undefined
  LastIndex?: number | undefined
  NodeModifyIndex?: number | undefined
  RequestTime?: bigint | undefined
}
type NodeUpdateEligibilityRequest = {
  Eligibility?: string | undefined
  NodeID?: string | undefined
}
type NodeEligibilityUpdateResponse = {
  EvalCreateIndex?: number | undefined
  EvalIDs?: string[] | undefined
  LastIndex?: number | undefined
  NodeModifyIndex?: number | undefined
  RequestTime?: bigint | undefined
}
type NodePurgeResponse = {
  EvalCreateIndex?: number | undefined
  EvalIDs?: string[] | undefined
  NodeModifyIndex?: number | undefined
}
type NodeListStub = {
  Address?: string | undefined
  Attributes?: { [x: string]: string } | undefined
  CreateIndex?: number | undefined
  Datacenter?: string | undefined
  Drain?: boolean | undefined
  Drivers?: { [x: string]: DriverInfo } | undefined
  ID?: string | undefined
  LastDrain?: DrainMetadata | undefined
  ModifyIndex?: number | undefined
  Name?: string | undefined
  NodeClass?: string | undefined
  NodeResources?: NodeResources | undefined
  ReservedResources?: NodeReservedResources | undefined
  SchedulingEligibility?: string | undefined
  Status?: string | undefined
  StatusDescription?: string | undefined
  Version?: string | undefined
}
type AutopilotConfiguration = {
  CleanupDeadServers?: boolean | undefined
  CreateIndex?: number | undefined
  DisableUpgradeMigration?: boolean | undefined
  EnableCustomUpgrades?: boolean | undefined
  EnableRedundancyZones?: boolean | undefined
  LastContactThreshold?: string | undefined
  MaxTrailingLogs?: number | undefined
  MinQuorum?: number | undefined
  ModifyIndex?: number | undefined
  ServerStabilizationTime?: string | undefined
}
type ServerHealth = {
  Address?: string | undefined
  Healthy?: boolean | undefined
  ID?: string | undefined
  LastContact?: bigint | undefined
  LastIndex?: number | undefined
  LastTerm?: number | undefined
  Leader?: boolean | undefined
  Name?: string | undefined
  SerfStatus?: string | undefined
  StableSince?: string | undefined
  Version?: string | undefined
  Voter?: boolean | undefined
}
type OperatorHealthReply = {
  FailureTolerance?: number | undefined
  Healthy?: boolean | undefined
  Servers?: ServerHealth[] | undefined
}
type RaftServer = {
  Address?: string | undefined
  ID?: string | undefined
  Leader?: boolean | undefined
  Node?: string | undefined
  RaftProtocol?: string | undefined
  Voter?: boolean | undefined
}
type RaftConfiguration = { Index?: number | undefined; Servers?: RaftServer[] | undefined }
type PreemptionConfig = {
  BatchSchedulerEnabled?: boolean | undefined
  ServiceSchedulerEnabled?: boolean | undefined
  SysBatchSchedulerEnabled?: boolean | undefined
  SystemSchedulerEnabled?: boolean | undefined
}
type SchedulerConfiguration = {
  CreateIndex?: number | undefined
  MemoryOversubscriptionEnabled?: boolean | undefined
  ModifyIndex?: number | undefined
  PauseEvalBroker?: boolean | undefined
  PreemptionConfig?: PreemptionConfig | undefined
  RejectJobRegistration?: boolean | undefined
  SchedulerAlgorithm?: string | undefined
}
type SchedulerConfigurationResponse = {
  KnownLeader?: boolean | undefined
  LastContact?: bigint | undefined
  LastIndex?: number | undefined
  NextToken?: string | undefined
  RequestTime?: bigint | undefined
  SchedulerConfig?: SchedulerConfiguration | undefined
}
type SchedulerSetConfigurationResponse = {
  LastIndex?: number | undefined
  RequestTime?: bigint | undefined
  Updated?: boolean | undefined
}
type CSIPlugin = {
  Allocations?: AllocationListStub[] | undefined
  ControllerRequired?: boolean | undefined
  Controllers?: { [x: string]: CSIInfo } | undefined
  ControllersExpected?: number | undefined
  ControllersHealthy?: number | undefined
  CreateIndex?: number | undefined
  ID?: string | undefined
  ModifyIndex?: number | undefined
  Nodes?: { [x: string]: CSIInfo } | undefined
  NodesExpected?: number | undefined
  NodesHealthy?: number | undefined
  Provider?: string | undefined
  Version?: string | undefined
}
type CSIPluginListStub = {
  ControllerRequired?: boolean | undefined
  ControllersExpected?: number | undefined
  ControllersHealthy?: number | undefined
  CreateIndex?: number | undefined
  ID?: string | undefined
  ModifyIndex?: number | undefined
  NodesExpected?: number | undefined
  NodesHealthy?: number | undefined
  Provider?: string | undefined
}
type QuotaLimit = {
  Hash?: string | undefined
  Region?: string | undefined
  RegionLimit?: Resources | undefined
  VariablesLimit?: number | undefined
}
type QuotaSpec = {
  CreateIndex?: number | undefined
  Description?: string | undefined
  Limits?: QuotaLimit[] | undefined
  ModifyIndex?: number | undefined
  Name?: string | undefined
}
type ScalingPolicyListStub = {
  CreateIndex?: number | undefined
  Enabled?: boolean | undefined
  ID?: string | undefined
  ModifyIndex?: number | undefined
  Target?: { [x: string]: string } | undefined
  Type?: string | undefined
}
type SearchRequest = {
  AllowStale?: boolean | undefined
  AuthToken?: string | undefined
  Context?: string | undefined
  Filter?: string | undefined
  Headers?: { [x: string]: string } | undefined
  Namespace?: string | undefined
  NextToken?: string | undefined
  Params?: { [x: string]: string } | undefined
  PerPage?: number | undefined
  Prefix?: string | undefined
  Region?: string | undefined
  Reverse?: boolean | undefined
  WaitIndex?: number | undefined
  WaitTime?: bigint | undefined
}
type SearchResponse = {
  KnownLeader?: boolean | undefined
  LastContact?: bigint | undefined
  LastIndex?: number | undefined
  Matches?: { [x: string]: string[] } | undefined
  NextToken?: string | undefined
  RequestTime?: bigint | undefined
  Truncations?: { [x: string]: boolean } | undefined
}
type FuzzySearchRequest = {
  AllowStale?: boolean | undefined
  AuthToken?: string | undefined
  Context?: string | undefined
  Filter?: string | undefined
  Headers?: { [x: string]: string } | undefined
  Namespace?: string | undefined
  NextToken?: string | undefined
  Params?: { [x: string]: string } | undefined
  PerPage?: number | undefined
  Prefix?: string | undefined
  Region?: string | undefined
  Reverse?: boolean | undefined
  Text?: string | undefined
  WaitIndex?: number | undefined
  WaitTime?: bigint | undefined
}
type FuzzyMatch = { ID?: string | undefined; Scope?: string[] | undefined }
type FuzzySearchResponse = {
  KnownLeader?: boolean | undefined
  LastContact?: bigint | undefined
  LastIndex?: number | undefined
  Matches?: { [x: string]: FuzzyMatch[] } | undefined
  NextToken?: string | undefined
  RequestTime?: bigint | undefined
  Truncations?: { [x: string]: boolean } | undefined
}
type JobValidateRequest = {
  Job?: Job | undefined
  Namespace?: string | undefined
  Region?: string | undefined
  SecretID?: string | undefined
}
type JobValidateResponse = {
  DriverConfigValidated?: boolean | undefined
  Error?: string | undefined
  ValidationErrors?: string[] | undefined
  Warnings?: string | undefined
}
type VariableItems = { [x: string]: string }
type Variable = {
  CreateIndex?: number | undefined
  CreateTime?: bigint | undefined
  Items?: VariableItems | undefined
  ModifyIndex?: number | undefined
  ModifyTime?: bigint | undefined
  Namespace?: string | undefined
  Path?: string | undefined
}
type VariableMetadata = {
  CreateIndex?: number | undefined
  CreateTime?: bigint | undefined
  ModifyIndex?: number | undefined
  ModifyTime?: bigint | undefined
  Namespace?: string | undefined
  Path?: string | undefined
}
type CSIVolumeCapability = { AccessMode?: string | undefined; AttachmentMode?: string | undefined }
type CSITopologyRequest = {
  Preferred?: CSITopology[] | undefined
  Required?: CSITopology[] | undefined
}
type CSISecrets = { [x: string]: string }
type CSIVolume = {
  AccessMode?: string | undefined
  Allocations?: AllocationListStub[] | undefined
  AttachmentMode?: string | undefined
  Capacity?: bigint | undefined
  CloneID?: string | undefined
  Context?: { [x: string]: string } | undefined
  ControllerRequired?: boolean | undefined
  ControllersExpected?: number | undefined
  ControllersHealthy?: number | undefined
  CreateIndex?: number | undefined
  ExternalID?: string | undefined
  ID?: string | undefined
  ModifyIndex?: number | undefined
  MountOptions?: CSIMountOptions | undefined
  Name?: string | undefined
  Namespace?: string | undefined
  NodesExpected?: number | undefined
  NodesHealthy?: number | undefined
  Parameters?: { [x: string]: string } | undefined
  PluginID?: string | undefined
  Provider?: string | undefined
  ProviderVersion?: string | undefined
  ReadAllocs?: { [x: string]: Allocation } | undefined
  RequestedCapabilities?: CSIVolumeCapability[] | undefined
  RequestedCapacityMax?: bigint | undefined
  RequestedCapacityMin?: bigint | undefined
  RequestedTopologies?: CSITopologyRequest | undefined
  ResourceExhausted?: string | undefined
  Schedulable?: boolean | undefined
  Secrets?: CSISecrets | undefined
  SnapshotID?: string | undefined
  Topologies?: CSITopology[] | undefined
  WriteAllocs?: { [x: string]: Allocation } | undefined
}
type CSIVolumeRegisterRequest = {
  Namespace?: string | undefined
  Region?: string | undefined
  SecretID?: string | undefined
  Volumes?: CSIVolume[] | undefined
}
type CSIVolumeCreateRequest = {
  Namespace?: string | undefined
  Region?: string | undefined
  SecretID?: string | undefined
  Volumes?: CSIVolume[] | undefined
}
type CSIVolumeListStub = {
  AccessMode?: string | undefined
  AttachmentMode?: string | undefined
  ControllerRequired?: boolean | undefined
  ControllersExpected?: number | undefined
  ControllersHealthy?: number | undefined
  CreateIndex?: number | undefined
  CurrentReaders?: number | undefined
  CurrentWriters?: number | undefined
  ExternalID?: string | undefined
  ID?: string | undefined
  ModifyIndex?: number | undefined
  Name?: string | undefined
  Namespace?: string | undefined
  NodesExpected?: number | undefined
  NodesHealthy?: number | undefined
  PluginID?: string | undefined
  Provider?: string | undefined
  ResourceExhausted?: string | undefined
  Schedulable?: boolean | undefined
  Topologies?: CSITopology[] | undefined
}
type CSIVolumeExternalStub = {
  CapacityBytes?: bigint | undefined
  CloneID?: string | undefined
  ExternalID?: string | undefined
  IsAbnormal?: boolean | undefined
  PublishedExternalNodeIDs?: string[] | undefined
  SnapshotID?: string | undefined
  Status?: string | undefined
  VolumeContext?: { [x: string]: string } | undefined
}
type CSIVolumeListExternalResponse = {
  NextToken?: string | undefined
  Volumes?: CSIVolumeExternalStub[] | undefined
}
type CSISnapshot = {
  CreateTime?: bigint | undefined
  ExternalSourceVolumeID?: string | undefined
  ID?: string | undefined
  IsReady?: boolean | undefined
  Name?: string | undefined
  Parameters?: { [x: string]: string } | undefined
  PluginID?: string | undefined
  Secrets?: CSISecrets | undefined
  SizeBytes?: bigint | undefined
  SourceVolumeID?: string | undefined
}
type CSISnapshotListResponse = {
  KnownLeader?: boolean | undefined
  LastContact?: bigint | undefined
  LastIndex?: number | undefined
  NextToken?: string | undefined
  RequestTime?: bigint | undefined
  Snapshots?: CSISnapshot[] | undefined
}
type CSISnapshotCreateRequest = {
  Namespace?: string | undefined
  Region?: string | undefined
  SecretID?: string | undefined
  Snapshots?: CSISnapshot[] | undefined
}
type CSISnapshotCreateResponse = {
  KnownLeader?: boolean | undefined
  LastContact?: bigint | undefined
  LastIndex?: number | undefined
  NextToken?: string | undefined
  RequestTime?: bigint | undefined
  Snapshots?: CSISnapshot[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/acl/bootstrap': {
      $post:
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: ACLToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/acl/policies': {
      $get:
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: ACLPolicyListStub[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/acl/policy/:policyName': {
      $delete:
        | {
            input: { param: { policyName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { policyName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { policyName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { policyName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { policyName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: { param: { policyName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: ACLPolicy
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { policyName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { policyName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { policyName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { policyName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { policyName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: ACLPolicy }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { policyName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: ACLPolicy }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { policyName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: ACLPolicy }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { policyName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: ACLPolicy }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { policyName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: ACLPolicy }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/acl/token': {
      $get:
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: ACLToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/acl/token/:tokenAccessor': {
      $delete:
        | {
            input: { param: { tokenAccessor: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { tokenAccessor: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { tokenAccessor: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { tokenAccessor: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { tokenAccessor: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: { param: { tokenAccessor: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: ACLToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tokenAccessor: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { tokenAccessor: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { tokenAccessor: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { tokenAccessor: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { tokenAccessor: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: ACLToken }
            output: ACLToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tokenAccessor: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: ACLToken }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { tokenAccessor: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: ACLToken }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { tokenAccessor: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: ACLToken }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { tokenAccessor: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: ACLToken }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/acl/token/onetime': {
      $post:
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: OneTimeToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/acl/token/onetime/exchange': {
      $post:
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: OneTimeTokenExchangeRequest
            }
            output: ACLToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: OneTimeTokenExchangeRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: OneTimeTokenExchangeRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: OneTimeTokenExchangeRequest
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: OneTimeTokenExchangeRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/acl/tokens': {
      $get:
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: ACLTokenListStub[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/allocation/:allocID': {
      $get:
        | {
            input: { param: { allocID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: Allocation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { allocID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { allocID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { allocID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { allocID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/allocation/:allocID/services': {
      $get:
        | {
            input: { param: { allocID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: ServiceRegistration[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { allocID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { allocID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { allocID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { allocID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/allocation/:allocID/stop': {
      $post:
        | {
            input: { param: { allocID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
                no_shutdown_delay?: boolean | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: AllocStopResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { allocID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
                no_shutdown_delay?: boolean | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { allocID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
                no_shutdown_delay?: boolean | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { allocID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
                no_shutdown_delay?: boolean | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { allocID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
                no_shutdown_delay?: boolean | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/allocations': {
      $get:
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
                resources?: boolean | undefined
                task_states?: boolean | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: AllocationListStub[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
                resources?: boolean | undefined
                task_states?: boolean | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
                resources?: boolean | undefined
                task_states?: boolean | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
                resources?: boolean | undefined
                task_states?: boolean | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
                resources?: boolean | undefined
                task_states?: boolean | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/deployment/:deploymentID': {
      $get:
        | {
            input: { param: { deploymentID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: Deployment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { deploymentID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { deploymentID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { deploymentID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { deploymentID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/deployment/allocation-health/:deploymentID': {
      $post:
        | {
            input: { param: { deploymentID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: DeploymentAllocHealthRequest
            }
            output: DeploymentUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { deploymentID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: DeploymentAllocHealthRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { deploymentID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: DeploymentAllocHealthRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { deploymentID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: DeploymentAllocHealthRequest
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { deploymentID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: DeploymentAllocHealthRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/deployment/allocations/:deploymentID': {
      $get:
        | {
            input: { param: { deploymentID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: AllocationListStub[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { deploymentID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { deploymentID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { deploymentID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { deploymentID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/deployment/fail/:deploymentID': {
      $post:
        | {
            input: { param: { deploymentID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: DeploymentUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { deploymentID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { deploymentID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { deploymentID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { deploymentID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/deployment/pause/:deploymentID': {
      $post:
        | {
            input: { param: { deploymentID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: DeploymentPauseRequest
            }
            output: DeploymentUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { deploymentID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: DeploymentPauseRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { deploymentID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: DeploymentPauseRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { deploymentID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: DeploymentPauseRequest
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { deploymentID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: DeploymentPauseRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/deployment/promote/:deploymentID': {
      $post:
        | {
            input: { param: { deploymentID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: DeploymentPromoteRequest
            }
            output: DeploymentUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { deploymentID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: DeploymentPromoteRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { deploymentID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: DeploymentPromoteRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { deploymentID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: DeploymentPromoteRequest
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { deploymentID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: DeploymentPromoteRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/deployment/unblock/:deploymentID': {
      $post:
        | {
            input: { param: { deploymentID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: DeploymentUnblockRequest
            }
            output: DeploymentUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { deploymentID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: DeploymentUnblockRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { deploymentID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: DeploymentUnblockRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { deploymentID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: DeploymentUnblockRequest
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { deploymentID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: DeploymentUnblockRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/deployments': {
      $get:
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: Deployment[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/evaluation/:evalID': {
      $get:
        | {
            input: { param: { evalID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: Evaluation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { evalID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { evalID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { evalID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { evalID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/evaluation/:evalID/allocations': {
      $get:
        | {
            input: { param: { evalID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: AllocationListStub[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { evalID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { evalID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { evalID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { evalID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/evaluations': {
      $get:
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: Evaluation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/job/:jobName': {
      $delete:
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
                purge?: boolean | undefined
                global?: boolean | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: JobDeregisterResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
                purge?: boolean | undefined
                global?: boolean | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
                purge?: boolean | undefined
                global?: boolean | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
                purge?: boolean | undefined
                global?: boolean | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
                purge?: boolean | undefined
                global?: boolean | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: Job
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: JobRegisterRequest }
            output: JobRegisterResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: JobRegisterRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: JobRegisterRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: JobRegisterRequest }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: JobRegisterRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/job/:jobName/allocations': {
      $get:
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
                all?: boolean | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: AllocationListStub[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
                all?: boolean | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
                all?: boolean | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
                all?: boolean | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
                all?: boolean | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/job/:jobName/deployment': {
      $get:
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: Deployment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/job/:jobName/deployments': {
      $get:
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
                all?: number | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: Deployment[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
                all?: number | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
                all?: number | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
                all?: number | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
                all?: number | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/job/:jobName/dispatch': {
      $post:
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: JobDispatchRequest }
            output: JobDispatchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: JobDispatchRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: JobDispatchRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: JobDispatchRequest }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: JobDispatchRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/job/:jobName/evaluate': {
      $post:
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: JobEvaluateRequest }
            output: JobRegisterResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: JobEvaluateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: JobEvaluateRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: JobEvaluateRequest }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: JobEvaluateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/job/:jobName/evaluations': {
      $get:
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: Evaluation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/job/:jobName/periodic/force': {
      $post:
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: PeriodicForceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/job/:jobName/plan': {
      $post:
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: JobPlanRequest }
            output: JobPlanResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: JobPlanRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: JobPlanRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: JobPlanRequest }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: JobPlanRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/job/:jobName/revert': {
      $post:
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: JobRevertRequest }
            output: JobRegisterResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: JobRevertRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: JobRevertRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: JobRevertRequest }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: JobRevertRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/job/:jobName/scale': {
      $get:
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: JobScaleStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: ScalingRequest }
            output: JobRegisterResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: ScalingRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: ScalingRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: ScalingRequest }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: ScalingRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/job/:jobName/stable': {
      $post:
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: JobStabilityRequest }
            output: JobStabilityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: JobStabilityRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: JobStabilityRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: JobStabilityRequest }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: JobStabilityRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/job/:jobName/summary': {
      $get:
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: JobSummary
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/job/:jobName/versions': {
      $get:
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
                diffs?: boolean | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: JobVersionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
                diffs?: boolean | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
                diffs?: boolean | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
                diffs?: boolean | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { jobName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
                diffs?: boolean | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/jobs': {
      $get:
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: JobListStub[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: JobRegisterRequest }
            output: JobRegisterResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: JobRegisterRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: JobRegisterRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: JobRegisterRequest }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: JobRegisterRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/jobs/parse': {
      $post:
        | { input: { json: JobsParseRequest }; output: Job; outputFormat: 'json'; status: 200 }
        | { input: { json: JobsParseRequest }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: JobsParseRequest }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: JobsParseRequest }; output: {}; outputFormat: string; status: 405 }
        | { input: { json: JobsParseRequest }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/metrics': {
      $get:
        | {
            input: { query: { format?: string | undefined } }
            output: MetricsSummary
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { format?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { format?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { format?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { query: { format?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/namespace': {
      $post:
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/namespace/:namespaceName': {
      $delete:
        | {
            input: { param: { namespaceName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { namespaceName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { namespaceName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { namespaceName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { namespaceName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: { param: { namespaceName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: Namespace
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespaceName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { namespaceName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { namespaceName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { namespaceName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { namespaceName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: Namespace }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { namespaceName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: Namespace }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { namespaceName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: Namespace }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { namespaceName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: Namespace }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { namespaceName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: Namespace }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/namespaces': {
      $get:
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: Namespace[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/node/:nodeId': {
      $get:
        | {
            input: { param: { nodeId: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: Node
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { nodeId: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { nodeId: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { nodeId: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { nodeId: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/node/:nodeId/allocations': {
      $get:
        | {
            input: { param: { nodeId: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: AllocationListStub[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { nodeId: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { nodeId: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { nodeId: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { nodeId: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/node/:nodeId/drain': {
      $post:
        | {
            input: { param: { nodeId: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } } & {
              json: NodeUpdateDrainRequest
            }
            output: NodeDrainUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { nodeId: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } } & {
              json: NodeUpdateDrainRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { nodeId: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } } & {
              json: NodeUpdateDrainRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { nodeId: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } } & {
              json: NodeUpdateDrainRequest
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { nodeId: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } } & {
              json: NodeUpdateDrainRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/node/:nodeId/eligibility': {
      $post:
        | {
            input: { param: { nodeId: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } } & {
              json: NodeUpdateEligibilityRequest
            }
            output: NodeEligibilityUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { nodeId: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } } & {
              json: NodeUpdateEligibilityRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { nodeId: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } } & {
              json: NodeUpdateEligibilityRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { nodeId: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } } & {
              json: NodeUpdateEligibilityRequest
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { nodeId: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } } & {
              json: NodeUpdateEligibilityRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/node/:nodeId/purge': {
      $post:
        | {
            input: { param: { nodeId: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: NodePurgeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { nodeId: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { nodeId: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { nodeId: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { nodeId: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/nodes': {
      $get:
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
                resources?: boolean | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: NodeListStub[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
                resources?: boolean | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
                resources?: boolean | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
                resources?: boolean | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
                resources?: boolean | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/operator/autopilot/configuration': {
      $get:
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: AutopilotConfiguration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: AutopilotConfiguration
            }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: AutopilotConfiguration
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: AutopilotConfiguration
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: AutopilotConfiguration
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: AutopilotConfiguration
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/operator/autopilot/health': {
      $get:
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: OperatorHealthReply
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/operator/raft/configuration': {
      $get:
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: RaftConfiguration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/operator/raft/peer': {
      $delete:
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/operator/scheduler/configuration': {
      $get:
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: SchedulerConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: SchedulerConfiguration
            }
            output: SchedulerSetConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: SchedulerConfiguration
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: SchedulerConfiguration
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: SchedulerConfiguration
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: SchedulerConfiguration
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/plugin/csi/:pluginID': {
      $get:
        | {
            input: { param: { pluginID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: CSIPlugin[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pluginID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { pluginID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { pluginID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { pluginID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/plugins': {
      $get:
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: CSIPluginListStub[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/quota': {
      $post:
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: QuotaSpec }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: QuotaSpec }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: QuotaSpec }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: QuotaSpec }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: QuotaSpec }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/quota/:specName': {
      $delete:
        | {
            input: { param: { specName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { specName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { specName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { specName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { specName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: { param: { specName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: QuotaSpec
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { specName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { specName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { specName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { specName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { specName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: QuotaSpec }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { specName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: QuotaSpec }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { specName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: QuotaSpec }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { specName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: QuotaSpec }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { specName: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: QuotaSpec }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/quotas': {
      $get:
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: { [x: string]: unknown }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/regions': {
      $get:
        | { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 405 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/scaling/policies': {
      $get:
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: ScalingPolicyListStub[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/scaling/policy/:policyID': {
      $get:
        | {
            input: { param: { policyID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: ScalingPolicy
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { policyID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { policyID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { policyID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { policyID: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/search': {
      $post:
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } } & {
              json: SearchRequest
            }
            output: SearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } } & {
              json: SearchRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } } & {
              json: SearchRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } } & {
              json: SearchRequest
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } } & {
              json: SearchRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/search/fuzzy': {
      $post:
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } } & {
              json: FuzzySearchRequest
            }
            output: FuzzySearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } } & {
              json: FuzzySearchRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } } & {
              json: FuzzySearchRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } } & {
              json: FuzzySearchRequest
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } } & {
              json: FuzzySearchRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/status/leader': {
      $get:
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/status/peers': {
      $get:
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/system/gc': {
      $put:
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/system/reconcile/summaries': {
      $put:
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/validate/job': {
      $post:
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: JobValidateRequest }
            output: JobValidateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: JobValidateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: JobValidateRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: JobValidateRequest }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: JobValidateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/var/:path': {
      $delete:
        | {
            input: { param: { path: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
                cas?: number | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: Variable }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { path: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
                cas?: number | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: Variable }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { path: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
                cas?: number | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: Variable }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { path: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
                cas?: number | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: Variable }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { path: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
                cas?: number | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: Variable }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: { param: { path: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: Variable
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { path: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { path: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { path: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { path: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { path: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
                cas?: number | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: Variable }
            output: Variable
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { path: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
                cas?: number | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: Variable }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { path: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
                cas?: number | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: Variable }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { path: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
                cas?: number | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: Variable }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { path: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
                cas?: number | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: Variable }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { param: { path: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
                cas?: number | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: Variable }
            output: Variable
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { path: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
                cas?: number | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: Variable }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { path: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
                cas?: number | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: Variable }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { path: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
                cas?: number | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: Variable }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { path: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
                cas?: number | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & { json: Variable }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/vars': {
      $get:
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: VariableMetadata[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/volume/csi/:volumeId': {
      $delete:
        | {
            input: { param: { volumeId: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
                force?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { volumeId: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
                force?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { volumeId: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
                force?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { volumeId: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
                force?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { volumeId: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
                force?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: { param: { volumeId: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: CSIVolume
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { volumeId: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { volumeId: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { volumeId: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { volumeId: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { volumeId: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: CSIVolumeRegisterRequest
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { volumeId: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: CSIVolumeRegisterRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { volumeId: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: CSIVolumeRegisterRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { volumeId: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: CSIVolumeRegisterRequest
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { volumeId: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: CSIVolumeRegisterRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/volume/csi/:volumeId/:action': {
      $delete:
        | {
            input: { param: { volumeId: string; action: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
                node?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { volumeId: string; action: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
                node?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { volumeId: string; action: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
                node?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { volumeId: string; action: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
                node?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { volumeId: string; action: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
                node?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { volumeId: string; action: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: CSIVolumeCreateRequest
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { volumeId: string; action: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: CSIVolumeCreateRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { volumeId: string; action: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: CSIVolumeCreateRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { volumeId: string; action: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: CSIVolumeCreateRequest
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { volumeId: string; action: string } } & {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: CSIVolumeCreateRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/volumes': {
      $get:
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
                node_id?: string | undefined
                plugin_id?: string | undefined
                type?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: CSIVolumeListStub[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
                node_id?: string | undefined
                plugin_id?: string | undefined
                type?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
                node_id?: string | undefined
                plugin_id?: string | undefined
                type?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
                node_id?: string | undefined
                plugin_id?: string | undefined
                type?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
                node_id?: string | undefined
                plugin_id?: string | undefined
                type?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: CSIVolumeRegisterRequest
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: CSIVolumeRegisterRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: CSIVolumeRegisterRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: CSIVolumeRegisterRequest
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: CSIVolumeRegisterRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/volumes/external': {
      $get:
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
                plugin_id?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: CSIVolumeListExternalResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
                plugin_id?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
                plugin_id?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
                plugin_id?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
                plugin_id?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/volumes/snapshot': {
      $delete:
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
                plugin_id?: string | undefined
                snapshot_id?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
                plugin_id?: string | undefined
                snapshot_id?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
                plugin_id?: string | undefined
                snapshot_id?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
                plugin_id?: string | undefined
                snapshot_id?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
                plugin_id?: string | undefined
                snapshot_id?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
                plugin_id?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: CSISnapshotListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
                plugin_id?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
                plugin_id?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
                plugin_id?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                wait?: string | undefined
                stale?: string | undefined
                prefix?: string | undefined
                per_page?: number | undefined
                next_token?: string | undefined
                plugin_id?: string | undefined
              }
            } & { header: { index?: number | undefined; 'X-Nomad-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: CSISnapshotCreateRequest
            }
            output: CSISnapshotCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: CSISnapshotCreateRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: CSISnapshotCreateRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: CSISnapshotCreateRequest
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                region?: string | undefined
                namespace?: string | undefined
                idempotency_token?: string | undefined
              }
            } & { header: { 'X-Nomad-Token'?: string | undefined } } & {
              json: CSISnapshotCreateRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
