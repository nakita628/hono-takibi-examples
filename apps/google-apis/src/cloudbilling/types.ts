type GuestAccelerator = {
  acceleratorCount?: string | undefined
  acceleratorType?: string | undefined
}
type VmResourceBasedCud = {
  guestAccelerator?: GuestAccelerator | undefined
  machineSeries?: string | undefined
  memorySizeGb?: number | undefined
  plan?: 'COMMITMENT_PLAN_UNSPECIFIED' | 'TWELVE_MONTH' | 'THIRTY_SIX_MONTH' | undefined
  region?: string | undefined
  virtualCpuCount?: string | undefined
}
type Commitment = { name?: string | undefined; vmResourceBasedCud?: VmResourceBasedCud | undefined }
type ScenarioConfig = { estimateDuration?: string | undefined }
type EstimationTimePoint = { estimationTimeFrameOffset?: string | undefined }
type UsageRateTimelineEntry = {
  effectiveTime?: EstimationTimePoint | undefined
  usageRate?: number | undefined
}
type UsageRateTimeline = {
  unit?: string | undefined
  usageRateTimelineEntries?: UsageRateTimelineEntry[] | undefined
}
type Usage = { usageRateTimeline?: UsageRateTimeline | undefined }
type CloudCdnEgressWorkload = {
  cacheEgressDestination?:
    | 'CACHE_EGRESS_DESTINATION_UNSPECIFIED'
    | 'CACHE_EGRESS_DESTINATION_ASIA_PACIFIC'
    | 'CACHE_EGRESS_DESTINATION_CHINA'
    | 'CACHE_EGRESS_DESTINATION_EUROPE'
    | 'CACHE_EGRESS_DESTINATION_NORTH_AMERICA'
    | 'CACHE_EGRESS_DESTINATION_OCEANIA'
    | 'CACHE_EGRESS_DESTINATION_LATIN_AMERICA'
    | 'CACHE_EGRESS_DESTINATION_OTHER_DESTINATIONS'
    | undefined
  cacheEgressRate?: Usage | undefined
}
type CacheFillRegions = {
  destinationRegion?:
    | 'CACHE_FILL_DESTINATION_REGION_UNSPECIFIED'
    | 'CACHE_FILL_DESTINATION_REGION_ASIA_PACIFIC'
    | 'CACHE_FILL_DESTINATION_REGION_EUROPE'
    | 'CACHE_FILL_DESTINATION_REGION_NORTH_AMERICA'
    | 'CACHE_FILL_DESTINATION_REGION_OCEANIA'
    | 'CACHE_FILL_DESTINATION_REGION_SOUTH_AMERICA'
    | 'CACHE_FILL_DESTINATION_REGION_CHINA'
    | 'CACHE_FILL_DESTINATION_REGION_OTHERS'
    | undefined
  sourceRegion?:
    | 'CACHE_FILL_SOURCE_REGION_UNSPECIFIED'
    | 'CACHE_FILL_REGION_ASIA_PACIFIC'
    | 'CACHE_FILL_SOURCE_REGION_EUROPE'
    | 'CACHE_FILL_SOURCE_REGION_NORTH_AMERICA'
    | 'CACHE_FILL_SOURCE_REGION_OCEANIA'
    | 'CACHE_FILL_SOURCE_REGION_SOUTH_AMERICA'
    | undefined
}
type CloudCdnWorkload = {
  cacheFillOriginService?:
    | 'CACHE_FILL_ORIGIN_SERVICE_UNSPECIFIED'
    | 'CACHE_FILL_ORIGIN_SERVICE_GOOGLE_CLOUD_STORAGE_BUCKET'
    | 'CACHE_FILL_ORIGIN_SERVICE_BACKEND_SERVICE'
    | undefined
  cacheFillRate?: Usage | undefined
  cacheFillRegions?: CacheFillRegions | undefined
  cacheLookUpRate?: Usage | undefined
}
type CloudInterconnectEgressWorkload = {
  egressRate?: Usage | undefined
  interconnectConnectionLocation?:
    | 'INTERCONNECT_CONNECTION_LOCATION_UNSPECIFIED'
    | 'INTERCONNECT_CONNECTION_LOCATION_ASIA'
    | 'INTERCONNECT_CONNECTION_LOCATION_EUROPE'
    | 'INTERCONNECT_CONNECTION_LOCATION_NORTH_AMERICA'
    | 'INTERCONNECT_CONNECTION_LOCATION_SOUTH_AMERICA'
    | 'INTERCONNECT_CONNECTION_LOCATION_AUSTRALIA'
    | undefined
}
type VlanAttachment = {
  bandwidth?:
    | 'BANDWIDTH_UNSPECIFIED'
    | 'BANDWIDTH_BPS_50M'
    | 'BANDWIDTH_BPS_100M'
    | 'BANDWIDTH_BPS_200M'
    | 'BANDWIDTH_BPS_300M'
    | 'BANDWIDTH_BPS_400M'
    | 'BANDWIDTH_BPS_500M'
    | 'BANDWIDTH_BPS_1G'
    | 'BANDWIDTH_BPS_2G'
    | 'BANDWIDTH_BPS_5G'
    | 'BANDWIDTH_BPS_10G'
    | 'BANDWIDTH_BPS_20G'
    | 'BANDWIDTH_BPS_50G'
    | undefined
  vlanCount?: Usage | undefined
}
type CloudInterconnectWorkload = {
  interconnectAttachments?: VlanAttachment[] | undefined
  interconnectType?:
    | 'INTERCONNECT_TYPE_UNSPECIFIED'
    | 'INTERCONNECT_TYPE_DEDICATED'
    | 'INTERCONNECT_TYPE_PARTNER'
    | undefined
  linkType?:
    | 'LINK_TYPE_UNSPECIFIED'
    | 'LINK_TYPE_ETHERNET_10G_LR'
    | 'LINK_TYPE_ETHERNET_100G_LR'
    | undefined
  provisionedLinkCount?: Usage | undefined
}
type CloudStorageEgressWorkload = {
  destinationContinent?:
    | 'DESTINATION_CONTINENT_UNSPECIFIED'
    | 'DESTINATION_CONTINENT_ASIA_PACIFIC'
    | 'DESTINATION_CONTINENT_AUTRALIA'
    | 'DESTINATION_CONTINENT_EUROPE'
    | 'DESTINATION_CONTINENT_NORTH_AMERICA'
    | 'DESTINATION_CONTINENT_SOUTH_AMERICA'
    | undefined
  egressRate?: Usage | undefined
  sourceContinent?:
    | 'SOURCE_CONTINENT_UNSPECIFIED'
    | 'SOURCE_CONTINENT_ASIA_PACIFIC'
    | 'SOURCE_CONTINENT_AUSTRALIA'
    | 'SOURCE_CONTINENT_EUROPE'
    | 'SOURCE_CONTINENT_NORTH_AMERICA'
    | 'SOURCE_CONTINENT_SOUTH_AMERICA'
    | undefined
}
type DualRegional = { name?: string | undefined }
type MultiRegional = { name?: string | undefined }
type Regional = { name?: string | undefined }
type CloudStorageWorkload = {
  dataRetrieval?: Usage | undefined
  dataStored?: Usage | undefined
  dualRegion?: DualRegional | undefined
  multiRegion?: MultiRegional | undefined
  operationA?: Usage | undefined
  operationB?: Usage | undefined
  region?: Regional | undefined
  storageClass?: string | undefined
}
type CustomMachineType = {
  machineSeries?: string | undefined
  memorySizeGb?: number | undefined
  virtualCpuCount?: string | undefined
}
type PredefinedMachineType = { machineType?: string | undefined }
type MachineType = {
  customMachineType?: CustomMachineType | undefined
  predefinedMachineType?: PredefinedMachineType | undefined
}
type PersistentDisk = {
  diskSize?: Usage | undefined
  diskType?: string | undefined
  provisionedIops?: Usage | undefined
  scope?: 'SCOPE_UNSPECIFIED' | 'SCOPE_ZONAL' | 'SCOPE_REGIONAL' | undefined
}
type ComputeVmWorkload = {
  enableConfidentialCompute?: boolean | undefined
  guestAccelerator?: GuestAccelerator | undefined
  instancesRunning?: Usage | undefined
  licenses?: string[] | undefined
  machineType?: MachineType | undefined
  persistentDisks?: PersistentDisk[] | undefined
  preemptible?: boolean | undefined
  region?: string | undefined
}
type PremiumTierEgressWorkload = {
  destinationContinent?:
    | 'DESTINATION_CONTINENT_UNSPECIFIED'
    | 'DESTINATION_CONTINENT_ASIA_PACIFIC'
    | 'DESTINATION_CONTINENT_AFRICA'
    | 'DESTINATION_CONTINENT_NORTH_AMERICA'
    | 'DESTINATION_CONTINENT_AUTRALIA'
    | 'DESTINATION_CONTINENT_CENTRAL_AMERICA'
    | 'DESTINATION_CONTINENT_CHINA'
    | 'DESTINATION_CONTINENT_EASTERN_EUROPE'
    | 'DESTINATION_CONTINENT_WESTERN_EUROPE'
    | 'DESTINATION_CONTINENT_EMEA'
    | 'DESTINATION_CONTINENT_INDIA'
    | 'DESTINATION_CONTINENT_MIDDLE_EAST'
    | 'DESTINATION_CONTINENT_SOUTH_AMERICA'
    | undefined
  egressRate?: Usage | undefined
  sourceRegion?: string | undefined
}
type StandardTierEgressWorkload = {
  egressRate?: Usage | undefined
  sourceRegion?: string | undefined
}
type InterRegionEgress = {
  destinationRegion?: string | undefined
  egressRate?: Usage | undefined
  sourceRegion?: string | undefined
}
type IntraRegionEgress = { egressRate?: Usage | undefined }
type VmToVmEgressWorkload = {
  interRegionEgress?: InterRegionEgress | undefined
  intraRegionEgress?: IntraRegionEgress | undefined
}
type Workload = {
  cloudCdnEgressWorkload?: CloudCdnEgressWorkload | undefined
  cloudCdnWorkload?: CloudCdnWorkload | undefined
  cloudInterconnectEgressWorkload?: CloudInterconnectEgressWorkload | undefined
  cloudInterconnectWorkload?: CloudInterconnectWorkload | undefined
  cloudStorageEgressWorkload?: CloudStorageEgressWorkload | undefined
  cloudStorageWorkload?: CloudStorageWorkload | undefined
  computeVmWorkload?: ComputeVmWorkload | undefined
  name?: string | undefined
  premiumTierEgressWorkload?: PremiumTierEgressWorkload | undefined
  standardTierEgressWorkload?: StandardTierEgressWorkload | undefined
  vmToVmEgressWorkload?: VmToVmEgressWorkload | undefined
}
type CostScenario = {
  commitments?: Commitment[] | undefined
  scenarioConfig?: ScenarioConfig | undefined
  workloads?: Workload[] | undefined
}
type EstimateCostScenarioForBillingAccountRequest = { costScenario?: CostScenario | undefined }
type Money = {
  currencyCode?: string | undefined
  nanos?: number | undefined
  units?: string | undefined
}
type CreditEstimate = {
  creditAmount?: Money | undefined
  creditDescription?: string | undefined
  creditType?: string | undefined
}
type CostEstimate = {
  creditEstimates?: CreditEstimate[] | undefined
  netCostEstimate?: Money | undefined
  preCreditCostEstimate?: Money | undefined
}
type SkuCostEstimate = {
  costEstimate?: CostEstimate | undefined
  sku?: string | undefined
  usageAmount?: number | undefined
  usageUnit?: string | undefined
}
type CommitmentCostEstimate = {
  commitmentTotalCostEstimate?: CostEstimate | undefined
  name?: string | undefined
  skuCostEstimates?: SkuCostEstimate[] | undefined
}
type WorkloadCostEstimate = {
  name?: string | undefined
  skuCostEstimates?: SkuCostEstimate[] | undefined
  workloadTotalCostEstimate?: CostEstimate | undefined
}
type SegmentCostEstimate = {
  commitmentCostEstimates?: CommitmentCostEstimate[] | undefined
  segmentStartTime?: EstimationTimePoint | undefined
  segmentTotalCostEstimate?: CostEstimate | undefined
  workloadCostEstimates?: WorkloadCostEstimate[] | undefined
}
type RateTier = { price?: Money | undefined; startAmount?: number | undefined }
type Rate = {
  tiers?: RateTier[] | undefined
  unit?: string | undefined
  unitCount?: number | undefined
}
type Price = {
  effectiveTime?: EstimationTimePoint | undefined
  priceType?: string | undefined
  rate?: Rate | undefined
}
type Sku = {
  displayName?: string | undefined
  prices?: Price[] | undefined
  sku?: string | undefined
}
type CostEstimationResult = {
  currencyCode?: string | undefined
  segmentCostEstimates?: SegmentCostEstimate[] | undefined
  skus?: Sku[] | undefined
}
type EstimateCostScenarioForBillingAccountResponse = {
  costEstimationResult?: CostEstimationResult | undefined
}
type EstimateCostScenarioWithListPriceRequest = { costScenario?: CostScenario | undefined }
type EstimateCostScenarioWithListPriceResponse = {
  costEstimationResult?: CostEstimationResult | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta/:billingAccount:estimateCostScenario': {
      $post: {
        input: { param: { billingAccount: string } } & {
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
        } & { json: EstimateCostScenarioForBillingAccountRequest }
        output: EstimateCostScenarioForBillingAccountResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta:estimateCostScenario': {
      $post: {
        input: {
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
        } & { json: EstimateCostScenarioWithListPriceRequest }
        output: EstimateCostScenarioWithListPriceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
