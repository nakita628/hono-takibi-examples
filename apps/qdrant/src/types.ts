type ShardKey = string | bigint
type ReplicaState =
  | 'Active'
  | 'Dead'
  | 'Partial'
  | 'Initializing'
  | 'Listener'
  | 'PartialSnapshot'
  | 'Recovery'
  | 'Resharding'
  | 'ReshardingScaleDown'
  | 'ActiveRead'
  | 'ManualRecovery'
type CreateShardingKey = {
  shard_key: ShardKey
  shards_number?: (number | null) | undefined
  replication_factor?: (number | null) | undefined
  placement?: (bigint[] | null) | undefined
  initial_state?: ReplicaState | ({ [x: string]: unknown } | null) | undefined
}
type HardwareUsage = {
  cpu?: (number | null) | undefined
  payload_io_read?: (number | null) | undefined
  payload_io_write?: (number | null) | undefined
  payload_index_io_read?: (number | null) | undefined
  payload_index_io_write?: (number | null) | undefined
  vector_io_read?: (number | null) | undefined
  vector_io_write?: (number | null) | undefined
  remote_io_cached_read?: (number | null) | undefined
  remote_io_non_cached_read?: (number | null) | undefined
  updated_bytes?: (number | null) | undefined
  updated_indexed_bytes?: (number | null) | undefined
}
type ModelUsage = { tokens: bigint }
type InferenceUsage = { models: { [x: string]: ModelUsage } }
type Usage = {
  hardware?: HardwareUsage | ({ [x: string]: unknown } | null) | undefined
  inference?: InferenceUsage | ({ [x: string]: unknown } | null) | undefined
}
type ErrorResponse = {
  time?: number | undefined
  status?: { error?: string | undefined } | undefined
  result?: ({ [x: string]: unknown } | null) | undefined
}
type ShardKeyDescription = { key: ShardKey }
type ShardKeysResponse = { shard_keys?: (ShardKeyDescription[] | null) | undefined }
type DropShardingKey = { shard_key: ShardKey }
type VersionInfo = { title: string; version: string; commit?: (string | null) | undefined }
type AppFeaturesTelemetry = {
  debug: boolean
  service_debug_feature: boolean
  recovery_mode: boolean
  gpu: boolean
  rocksdb: boolean
  staging: boolean
}
type FeatureFlags = {
  all?: boolean | undefined
  incremental_hnsw_building?: boolean | undefined
  appendable_quantization?: boolean | undefined
  single_file_mmap_vector_storage?: boolean | undefined
  async_payload_storage?: boolean | undefined
  async_hnsw_graph?: boolean | undefined
  write_segment_manifest?: boolean | undefined
  append_only_mutations?: boolean | undefined
  compact_bitmask?: boolean | undefined
  append_only_storages?: boolean | undefined
  compact_logstore_tracker?: boolean | undefined
  transfer_raw_points?: boolean | undefined
  transfer_raw_payloads?: boolean | undefined
  persist_proxy_segments?: boolean | undefined
  combined_vector_storage?: boolean | undefined
  versioned_deletes?: boolean | undefined
  pipnn_graph_building?: boolean | undefined
  serverless_compatible?: boolean | undefined
}
type LowMemoryMode = 'disabled' | 'no_resident' | 'no_populate'
type HnswGlobalConfig = { healing_threshold?: number | undefined }
type ContainerRuntime = 'none' | 'docker' | 'kubernetes' | 'other'
type CpuEndian = 'little' | 'big' | 'other'
type GpuDeviceTelemetry = { name: string }
type RunningEnvironmentTelemetry = {
  distribution?: (string | null) | undefined
  distribution_version?: (string | null) | undefined
  is_docker: boolean
  container_runtime: ContainerRuntime
  cores?: (number | null) | undefined
  cpu_cores_used?: (number | null) | undefined
  ram_size?: (number | null) | undefined
  disk_size?: (number | null) | undefined
  cpu_flags: string
  cpu_endian?: CpuEndian | ({ [x: string]: unknown } | null) | undefined
  gpu_devices?: (GpuDeviceTelemetry[] | null) | undefined
}
type AuditTelemetry = {
  dir: string
  rotation: string
  max_log_files: number
  trust_forwarded_headers: boolean
  log_api: boolean
  output: string
  dir_size_bytes?: (number | null) | undefined
}
type AppBuildTelemetry = {
  name: string
  version: string
  features?: AppFeaturesTelemetry | ({ [x: string]: unknown } | null) | undefined
  runtime_features?: FeatureFlags | ({ [x: string]: unknown } | null) | undefined
  low_memory_mode?: LowMemoryMode | ({ [x: string]: unknown } | null) | undefined
  hnsw_global_config?: HnswGlobalConfig | ({ [x: string]: unknown } | null) | undefined
  system?: RunningEnvironmentTelemetry | ({ [x: string]: unknown } | null) | undefined
  jwt_rbac?: (boolean | null) | undefined
  hide_jwt_dashboard?: (boolean | null) | undefined
  audit?: AuditTelemetry | ({ [x: string]: unknown } | null) | undefined
  startup: string
}
type Distance = 'Cosine' | 'Euclid' | 'Dot' | 'Manhattan'
type Memory = 'cold' | 'cached' | 'pinned'
type HnswConfigDiff = {
  m?: (number | null) | undefined
  ef_construct?: (number | null) | undefined
  full_scan_threshold?: (number | null) | undefined
  max_indexing_threads?: (number | null) | undefined
  on_disk?: (boolean | null) | undefined
  memory?: Memory | ({ [x: string]: unknown } | null) | undefined
  payload_m?: (number | null) | undefined
  inline_storage?: (boolean | null) | undefined
}
type ScalarType = 'int8'
type ScalarQuantizationConfig = {
  type: ScalarType
  quantile?: (number | null) | undefined
  always_ram?: (boolean | null) | undefined
  memory?: Memory | ({ [x: string]: unknown } | null) | undefined
}
type ScalarQuantization = { scalar: ScalarQuantizationConfig }
type CompressionRatio = 'x4' | 'x8' | 'x16' | 'x32' | 'x64'
type ProductQuantizationConfig = {
  compression: CompressionRatio
  always_ram?: (boolean | null) | undefined
  memory?: Memory | ({ [x: string]: unknown } | null) | undefined
}
type ProductQuantization = { product: ProductQuantizationConfig }
type BinaryQuantizationEncoding = 'one_bit' | 'two_bits' | 'one_and_half_bits'
type BinaryQuantizationQueryEncoding = 'default' | 'binary' | 'scalar4bits' | 'scalar8bits'
type BinaryQuantizationConfig = {
  always_ram?: (boolean | null) | undefined
  memory?: Memory | ({ [x: string]: unknown } | null) | undefined
  encoding?: BinaryQuantizationEncoding | ({ [x: string]: unknown } | null) | undefined
  query_encoding?: BinaryQuantizationQueryEncoding | ({ [x: string]: unknown } | null) | undefined
}
type BinaryQuantization = { binary: BinaryQuantizationConfig }
type TurboQuantBitSize = 'bits1' | 'bits1_5' | 'bits2' | 'bits4' | 'bits8'
type TurboQuantQuantizationConfig = {
  always_ram?: (boolean | null) | undefined
  memory?: Memory | ({ [x: string]: unknown } | null) | undefined
  bits?: TurboQuantBitSize | ({ [x: string]: unknown } | null) | undefined
}
type TurboQuantization = { turbo: TurboQuantQuantizationConfig }
type QuantizationConfig =
  | ScalarQuantization
  | ProductQuantization
  | BinaryQuantization
  | TurboQuantization
type Datatype = 'float32' | 'uint8' | 'float16' | 'turbo4' | 'turbo8' | 'turbo16'
type MultiVectorComparator = 'max_sim'
type MultiVectorConfig = { comparator: MultiVectorComparator }
type VectorParams = {
  size: bigint
  distance: Distance
  hnsw_config?: HnswConfigDiff | ({ [x: string]: unknown } | null) | undefined
  quantization_config?: QuantizationConfig | ({ [x: string]: unknown } | null) | undefined
  on_disk?: (boolean | null) | undefined
  memory?: Memory | ({ [x: string]: unknown } | null) | undefined
  datatype?: Datatype | ({ [x: string]: unknown } | null) | undefined
  multivector_config?: MultiVectorConfig | ({ [x: string]: unknown } | null) | undefined
}
type VectorsConfig = VectorParams | { [x: string]: VectorParams }
type ShardingMethod = 'auto' | 'custom'
type PayloadStorageParams = { memory?: Memory | ({ [x: string]: unknown } | null) | undefined }
type IdTrackerParams = { memory?: Memory | ({ [x: string]: unknown } | null) | undefined }
type SparseIndexParams = {
  full_scan_threshold?: (number | null) | undefined
  on_disk?: (boolean | null) | undefined
  memory?: Memory | ({ [x: string]: unknown } | null) | undefined
  datatype?: Datatype | ({ [x: string]: unknown } | null) | undefined
}
type Modifier = 'none' | 'idf'
type SparseVectorParams = {
  index?: SparseIndexParams | ({ [x: string]: unknown } | null) | undefined
  modifier?: Modifier | ({ [x: string]: unknown } | null) | undefined
}
type CollectionParams = {
  vectors?: VectorsConfig | undefined
  shard_number?: number | undefined
  sharding_method?: ShardingMethod | ({ [x: string]: unknown } | null) | undefined
  replication_factor?: number | undefined
  write_consistency_factor?: number | undefined
  read_fan_out_factor?: (number | null) | undefined
  read_fan_out_delay_ms?: (bigint | null) | undefined
  on_disk_payload?: (boolean | null) | undefined
  payload?: PayloadStorageParams | ({ [x: string]: unknown } | null) | undefined
  id_tracker?: IdTrackerParams | ({ [x: string]: unknown } | null) | undefined
  sparse_vectors?: ({ [x: string]: SparseVectorParams } | null) | undefined
}
type HnswConfig = {
  m: number
  ef_construct: number
  full_scan_threshold: number
  max_indexing_threads?: number | undefined
  on_disk?: (boolean | null) | undefined
  memory?: Memory | ({ [x: string]: unknown } | null) | undefined
  payload_m?: (number | null) | undefined
  inline_storage?: (boolean | null) | undefined
}
type OptimizersConfig = {
  deleted_threshold?: number | undefined
  vacuum_min_vector_number?: number | undefined
  default_segment_number: number
  max_segment_size?: (number | null) | undefined
  memmap_threshold?: (number | null) | undefined
  indexing_threshold?: (number | null) | undefined
  flush_interval_sec: bigint
  max_optimization_threads?: (number | null) | undefined
  prevent_unoptimized?: (boolean | null) | undefined
}
type WalConfig = {
  wal_capacity_mb: number
  wal_segments_ahead: number
  wal_retain_closed?: number | undefined
}
type StrictModeMultivectorOutput = { max_vectors?: (number | null) | undefined }
type StrictModeMultivectorConfigOutput = { [x: string]: StrictModeMultivectorOutput }
type StrictModeSparseOutput = { max_length?: (number | null) | undefined }
type StrictModeSparseConfigOutput = { [x: string]: StrictModeSparseOutput }
type StrictModeConfigOutput = {
  enabled?: (boolean | null) | undefined
  max_query_limit?: (number | null) | undefined
  max_timeout?: (number | null) | undefined
  unindexed_filtering_retrieve?: (boolean | null) | undefined
  unindexed_filtering_update?: (boolean | null) | undefined
  require_tenant_filter?: (boolean | null) | undefined
  search_max_hnsw_ef?: (number | null) | undefined
  search_allow_exact?: (boolean | null) | undefined
  search_max_oversampling?: (number | null) | undefined
  upsert_max_batchsize?: (number | null) | undefined
  search_max_batchsize?: (number | null) | undefined
  max_collection_vector_size_bytes?: (number | null) | undefined
  read_rate_limit?: (number | null) | undefined
  write_rate_limit?: (number | null) | undefined
  max_collection_payload_size_bytes?: (number | null) | undefined
  max_points_count?: (number | null) | undefined
  filter_max_conditions?: (number | null) | undefined
  condition_max_size?: (number | null) | undefined
  multivector_config?:
    | StrictModeMultivectorConfigOutput
    | ({ [x: string]: unknown } | null)
    | undefined
  sparse_config?: StrictModeSparseConfigOutput | ({ [x: string]: unknown } | null) | undefined
  max_payload_index_count?: (number | null) | undefined
  max_resident_memory_percent?: (number | null) | undefined
}
type Payload = { [x: string]: unknown }
type CollectionConfigTelemetry = {
  params: CollectionParams
  hnsw_config: HnswConfig
  optimizer_config: OptimizersConfig
  wal_config: WalConfig
  quantization_config?: QuantizationConfig | ({ [x: string]: unknown } | null) | undefined
  strict_mode_config?: StrictModeConfigOutput | ({ [x: string]: unknown } | null) | undefined
  uuid?: (string | null) | undefined
  metadata?: Payload | ({ [x: string]: unknown } | null) | undefined
}
type ShardStatus = 'green' | 'yellow' | 'grey' | 'red'
type SegmentType = 'plain' | 'indexed' | 'special'
type PayloadSchemaType =
  | 'keyword'
  | 'integer'
  | 'float'
  | 'geo'
  | 'text'
  | 'bool'
  | 'datetime'
  | 'uuid'
type KeywordIndexType = 'keyword'
type KeywordIndexParams = {
  type: KeywordIndexType
  is_tenant?: (boolean | null) | undefined
  on_disk?: (boolean | null) | undefined
  memory?: Memory | ({ [x: string]: unknown } | null) | undefined
  enable_hnsw?: (boolean | null) | undefined
  prefix?: (boolean | null) | undefined
  nested?: (string | null) | undefined
}
type IntegerIndexType = 'integer'
type IntegerIndexParams = {
  type: IntegerIndexType
  lookup?: (boolean | null) | undefined
  range?: (boolean | null) | undefined
  is_principal?: (boolean | null) | undefined
  on_disk?: (boolean | null) | undefined
  memory?: Memory | ({ [x: string]: unknown } | null) | undefined
  enable_hnsw?: (boolean | null) | undefined
  nested?: (string | null) | undefined
}
type FloatIndexType = 'float'
type FloatIndexParams = {
  type: FloatIndexType
  is_principal?: (boolean | null) | undefined
  on_disk?: (boolean | null) | undefined
  memory?: Memory | ({ [x: string]: unknown } | null) | undefined
  enable_hnsw?: (boolean | null) | undefined
  nested?: (string | null) | undefined
}
type GeoIndexType = 'geo'
type GeoIndexParams = {
  type: GeoIndexType
  on_disk?: (boolean | null) | undefined
  memory?: Memory | ({ [x: string]: unknown } | null) | undefined
  enable_hnsw?: (boolean | null) | undefined
  nested?: (string | null) | undefined
}
type TextIndexType = 'text'
type TokenizerType = 'prefix' | 'whitespace' | 'word' | 'multilingual' | 'code'
type Language =
  | 'arabic'
  | 'azerbaijani'
  | 'basque'
  | 'bengali'
  | 'catalan'
  | 'chinese'
  | 'danish'
  | 'dutch'
  | 'english'
  | 'finnish'
  | 'french'
  | 'german'
  | 'greek'
  | 'hebrew'
  | 'hinglish'
  | 'hungarian'
  | 'indonesian'
  | 'italian'
  | 'japanese'
  | 'kazakh'
  | 'nepali'
  | 'norwegian'
  | 'portuguese'
  | 'romanian'
  | 'russian'
  | 'slovene'
  | 'spanish'
  | 'swedish'
  | 'tajik'
  | 'turkish'
type StopwordsSet = {
  languages?: (Language[] | null) | undefined
  custom?: (string[] | null) | undefined
}
type StopwordsInterface = Language | StopwordsSet
type Snowball = 'snowball'
type SnowballLanguage =
  | 'arabic'
  | 'armenian'
  | 'danish'
  | 'dutch'
  | 'english'
  | 'finnish'
  | 'french'
  | 'german'
  | 'greek'
  | 'hungarian'
  | 'italian'
  | 'norwegian'
  | 'portuguese'
  | 'romanian'
  | 'russian'
  | 'spanish'
  | 'swedish'
  | 'tamil'
  | 'turkish'
type SnowballParams = { type: Snowball; language: SnowballLanguage }
type NoStemmer = 'none'
type DisabledStemmerParams = { type: NoStemmer }
type StemmingAlgorithm = SnowballParams | DisabledStemmerParams
type TextScoringType = 'bm25'
type TextScoringParams = { type: TextScoringType }
type TextScoringInterface = boolean | TextScoringParams
type TextIndexParams = {
  type: TextIndexType
  tokenizer?: TokenizerType | undefined
  min_token_len?: (number | null) | undefined
  max_token_len?: (number | null) | undefined
  lowercase?: (boolean | null) | undefined
  ascii_folding?: (boolean | null) | undefined
  phrase_matching?: (boolean | null) | undefined
  stopwords?: StopwordsInterface | ({ [x: string]: unknown } | null) | undefined
  on_disk?: (boolean | null) | undefined
  memory?: Memory | ({ [x: string]: unknown } | null) | undefined
  stemmer?: StemmingAlgorithm | ({ [x: string]: unknown } | null) | undefined
  enable_hnsw?: (boolean | null) | undefined
  scoring?: TextScoringInterface | ({ [x: string]: unknown } | null) | undefined
  nested?: (string | null) | undefined
}
type BoolIndexType = 'bool'
type BoolIndexParams = {
  type: BoolIndexType
  on_disk?: (boolean | null) | undefined
  memory?: Memory | ({ [x: string]: unknown } | null) | undefined
  enable_hnsw?: (boolean | null) | undefined
  nested?: (string | null) | undefined
}
type DatetimeIndexType = 'datetime'
type DatetimeIndexParams = {
  type: DatetimeIndexType
  is_principal?: (boolean | null) | undefined
  on_disk?: (boolean | null) | undefined
  memory?: Memory | ({ [x: string]: unknown } | null) | undefined
  enable_hnsw?: (boolean | null) | undefined
  nested?: (string | null) | undefined
}
type UuidIndexType = 'uuid'
type UuidIndexParams = {
  type: UuidIndexType
  is_tenant?: (boolean | null) | undefined
  on_disk?: (boolean | null) | undefined
  memory?: Memory | ({ [x: string]: unknown } | null) | undefined
  enable_hnsw?: (boolean | null) | undefined
  nested?: (string | null) | undefined
}
type PayloadSchemaParams =
  | KeywordIndexParams
  | IntegerIndexParams
  | FloatIndexParams
  | GeoIndexParams
  | TextIndexParams
  | BoolIndexParams
  | DatetimeIndexParams
  | UuidIndexParams
type PayloadIndexInfo = {
  data_type: PayloadSchemaType
  params?: PayloadSchemaParams | ({ [x: string]: unknown } | null) | undefined
  points: number
}
type IoBackend = 'mmap' | 'io_uring'
type VectorDataInfo = {
  num_vectors: number
  num_indexed_vectors: number
  num_deleted_vectors: number
  io_backend?: IoBackend | ({ [x: string]: unknown } | null) | undefined
}
type SegmentInfo = {
  uuid: string
  segment_type: SegmentType
  num_vectors: number
  num_points: number
  num_deferred_points?: (number | null) | undefined
  num_deleted_deferred_points?: (number | null) | undefined
  num_indexed_vectors: number
  num_deleted_vectors: number
  vectors_size_bytes: number
  payloads_size_bytes: number
  ram_usage_bytes: number
  disk_usage_bytes: number
  is_appendable: boolean
  index_schema: { [x: string]: PayloadIndexInfo }
  vector_data: { [x: string]: VectorDataInfo }
  payload_storage_io_backend?: IoBackend | ({ [x: string]: unknown } | null) | undefined
  deferred_internal_id?: (number | null) | undefined
}
type VectorStorageType =
  | 'Memory'
  | 'Mmap'
  | 'ChunkedMmap'
  | 'InRamChunkedMmap'
  | 'InRamMmap'
  | 'GraphInline'
type Indexes =
  | { type: 'plain'; options: { [x: string]: unknown } }
  | { type: 'hnsw'; options: HnswConfig }
type VectorStorageDatatype = 'float32' | 'float16' | 'uint8' | 'turbo4' | 'turbo8' | 'turbo16'
type VectorDataConfig = {
  size: number
  distance: Distance
  storage_type: VectorStorageType
  index: Indexes
  quantization_config?: QuantizationConfig | ({ [x: string]: unknown } | null) | undefined
  multivector_config?: MultiVectorConfig | ({ [x: string]: unknown } | null) | undefined
  datatype?: VectorStorageDatatype | ({ [x: string]: unknown } | null) | undefined
}
type SparseIndexType = 'MutableRam' | 'ImmutableRam' | 'Mmap'
type SparseIndexConfig = {
  full_scan_threshold?: (number | null) | undefined
  index_type: SparseIndexType
  datatype?: VectorStorageDatatype | ({ [x: string]: unknown } | null) | undefined
  memory?: Memory | ({ [x: string]: unknown } | null) | undefined
}
type SparseVectorStorageType = 'mmap'
type SparseVectorDataConfig = {
  index: SparseIndexConfig
  storage_type?: SparseVectorStorageType | undefined
  modifier?: Modifier | ({ [x: string]: unknown } | null) | undefined
}
type PayloadStorageType = { type: 'mmap' } | { type: 'in_ram_mmap' }
type SegmentConfig = {
  vector_data?: { [x: string]: VectorDataConfig } | undefined
  sparse_vector_data?: { [x: string]: SparseVectorDataConfig } | undefined
  payload_storage_type: PayloadStorageType
  id_tracker_memory?: Memory | ({ [x: string]: unknown } | null) | undefined
}
type OperationDurationStatistics = {
  count: number
  fail_count?: (number | null) | undefined
  avg_duration_micros?: (number | null) | undefined
  min_duration_micros?: (number | null) | undefined
  max_duration_micros?: (number | null) | undefined
  total_duration_micros?: (bigint | null) | undefined
  last_responded?: (string | null) | undefined
}
type VectorIndexSearchesTelemetry = {
  index_name?: (string | null) | undefined
  unfiltered_plain: OperationDurationStatistics
  unfiltered_hnsw: OperationDurationStatistics
  unfiltered_sparse: OperationDurationStatistics
  filtered_plain: OperationDurationStatistics
  filtered_small_cardinality: OperationDurationStatistics
  filtered_large_cardinality: OperationDurationStatistics
  filtered_acorn?: OperationDurationStatistics | undefined
  filtered_exact: OperationDurationStatistics
  filtered_sparse: OperationDurationStatistics
  unfiltered_exact: OperationDurationStatistics
}
type PayloadIndexTelemetry = {
  field_name?: (string | null) | undefined
  index_type: string
  points_values_count: number
  points_count: number
  histogram_bucket_size?: (number | null) | undefined
}
type SegmentTelemetry = {
  info: SegmentInfo
  config: SegmentConfig
  vector_index_searches: VectorIndexSearchesTelemetry[]
  payload_field_indices: PayloadIndexTelemetry[]
}
type OptimizersStatus = 'ok' | { error: string }
type TrackerStatus = 'optimizing' | 'done' | { cancelled: string } | { error: string }
type TrackerTelemetry = {
  name: string
  uuid: string
  segment_ids: number[]
  segment_uuids: string[]
  status: TrackerStatus
  start_at: string
  end_at?: (string | null) | undefined
}
type OptimizerTelemetry = {
  status: OptimizersStatus
  optimizations: OperationDurationStatistics
  log?: (TrackerTelemetry[] | null) | undefined
}
type ShardUpdateQueueInfo = {
  length: number
  op_num?: (number | null) | undefined
  deferred_points?: (number | null) | undefined
}
type LocalShardTelemetry = {
  variant_name?: (string | null) | undefined
  status?: ShardStatus | ({ [x: string]: unknown } | null) | undefined
  total_optimized_points: number
  vectors_size_bytes?: (number | null) | undefined
  payloads_size_bytes?: (number | null) | undefined
  num_points?: (number | null) | undefined
  num_vectors?: (number | null) | undefined
  num_vectors_by_name?: ({ [x: string]: number } | null) | undefined
  segments?: (SegmentTelemetry[] | null) | undefined
  optimizations?: OptimizerTelemetry | ({ [x: string]: unknown } | null) | undefined
  async_scorer?: (boolean | null) | undefined
  indexed_only_excluded_vectors?: ({ [x: string]: number } | null) | undefined
  update_queue?: ShardUpdateQueueInfo | ({ [x: string]: unknown } | null) | undefined
}
type RemoteShardTelemetry = {
  shard_id: number
  peer_id: bigint
  searches?: OperationDurationStatistics | ({ [x: string]: unknown } | null) | undefined
  updates?: OperationDurationStatistics | ({ [x: string]: unknown } | null) | undefined
}
type PartialSnapshotTelemetry = {
  ongoing_create_snapshot_requests: number
  is_recovering: boolean
  recovery_timestamp: bigint
}
type ReplicaSetTelemetry = {
  id: number
  key?: ShardKey | ({ [x: string]: unknown } | null) | undefined
  local?: LocalShardTelemetry | ({ [x: string]: unknown } | null) | undefined
  remote: RemoteShardTelemetry[]
  replicate_states: { [x: string]: ReplicaState }
  partial_snapshot?: PartialSnapshotTelemetry | ({ [x: string]: unknown } | null) | undefined
}
type ShardTransferMethod = 'stream_records' | 'snapshot' | 'wal_delta' | 'resharding_stream_records'
type ShardTransferInfo = {
  shard_id: number
  to_shard_id?: (number | null) | undefined
  from: bigint
  to: bigint
  sync: boolean
  method?: ShardTransferMethod | ({ [x: string]: unknown } | null) | undefined
  comment?: (string | null) | undefined
}
type ReshardingStage = 'migrating_points' | 'read_hash_ring_committed' | 'write_hash_ring_committed'
type ReshardingDirection = 'up' | 'down'
type ReshardingTelemetry = {
  stage: ReshardingStage
  direction: ReshardingDirection
  shard_id: number
  peer_id: bigint
  shard_key?: ShardKey | ({ [x: string]: unknown } | null) | undefined
  uuid: string
}
type ShardCleanStatusProgressTelemetry = { deleted_points: number }
type ShardCleanStatusFailedTelemetry = { reason: string }
type ShardCleanStatusTelemetry =
  | 'started'
  | 'done'
  | 'cancelled'
  | { progress: ShardCleanStatusProgressTelemetry }
  | { failed: ShardCleanStatusFailedTelemetry }
type CollectionTelemetry = {
  id: string
  init_time_ms?: (bigint | null) | undefined
  config?: CollectionConfigTelemetry | ({ [x: string]: unknown } | null) | undefined
  shards?: (ReplicaSetTelemetry[] | null) | undefined
  transfers?: (ShardTransferInfo[] | null) | undefined
  resharding?: (ReshardingTelemetry[] | null) | undefined
  shard_clean_tasks?: ({ [x: string]: ShardCleanStatusTelemetry } | null) | undefined
}
type CollectionsAggregatedTelemetry = {
  vectors: number
  optimizers_status: OptimizersStatus
  params: CollectionParams
}
type CollectionTelemetryEnum = CollectionTelemetry | CollectionsAggregatedTelemetry
type CollectionSnapshotTelemetry = {
  id: string
  running_snapshots?: (number | null) | undefined
  running_snapshot_recovery?: (number | null) | undefined
  total_snapshot_creations?: (number | null) | undefined
}
type CollectionsTelemetry = {
  number_of_collections: number
  max_collections?: (number | null) | undefined
  collections?: (CollectionTelemetryEnum[] | null) | undefined
  snapshots?: (CollectionSnapshotTelemetry[] | null) | undefined
}
type StateRole = 'Follower' | 'Candidate' | 'Leader' | 'PreCandidate'
type ConsensusThreadStatus =
  | { consensus_thread_status: 'working'; last_update: string }
  | { consensus_thread_status: 'stopped' }
  | { consensus_thread_status: 'stopped_with_err'; err: string }
type ClusterStatusTelemetry = {
  number_of_peers: number
  term: bigint
  commit: bigint
  pending_operations: number
  role?: StateRole | ({ [x: string]: unknown } | null) | undefined
  is_voter: boolean
  peer_id?: (bigint | null) | undefined
  consensus_thread_status: ConsensusThreadStatus
}
type P2pConfigTelemetry = { connection_pool_size: number }
type ConsensusConfigTelemetry = {
  max_message_queue_size: number
  tick_period_ms: bigint
  bootstrap_timeout_sec: bigint
}
type ClusterConfigTelemetry = {
  grpc_timeout_ms: bigint
  p2p: P2pConfigTelemetry
  consensus: ConsensusConfigTelemetry
}
type PeerInfo = { uri: string }
type PeerMetadata = { version: string }
type ClusterTelemetry = {
  enabled: boolean
  status?: ClusterStatusTelemetry | ({ [x: string]: unknown } | null) | undefined
  config?: ClusterConfigTelemetry | ({ [x: string]: unknown } | null) | undefined
  peers?: ({ [x: string]: PeerInfo } | null) | undefined
  peer_metadata?: ({ [x: string]: PeerMetadata } | null) | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
  resharding_enabled?: (boolean | null) | undefined
}
type WebApiTelemetry = {
  responses: { [x: string]: { [x: string]: OperationDurationStatistics } }
  per_collection_responses?:
    | { [x: string]: { [x: string]: { [x: string]: OperationDurationStatistics } } }
    | undefined
}
type GrpcTelemetry = {
  responses: { [x: string]: { [x: string]: OperationDurationStatistics } }
  per_collection_responses?:
    | { [x: string]: { [x: string]: { [x: string]: OperationDurationStatistics } } }
    | undefined
}
type RequestsTelemetry = { rest: WebApiTelemetry; grpc: GrpcTelemetry }
type MemoryTelemetry = {
  active_bytes: number
  allocated_bytes: number
  metadata_bytes: number
  resident_bytes: number
  retained_bytes: number
}
type HardwareTelemetry = { collection_data: { [x: string]: HardwareUsage } }
type SearchThreadPoolTelemetry = { mode: string; high_cpu_threads: number; high_io_threads: number }
type QuotaConfig = {
  enabled?: boolean | undefined
  max_resident_memory_percent?: (number | null) | undefined
  max_disk_usage_percent?: (number | null) | undefined
  release_margin_percent?: (number | null) | undefined
}
type QuotaExceeded = {
  resident_memory?: (boolean | null) | undefined
  disk_usage?: (boolean | null) | undefined
}
type QuotaTelemetry = { config: QuotaConfig; exceeded: QuotaExceeded }
type TelemetryData = {
  id: string
  app?: AppBuildTelemetry | ({ [x: string]: unknown } | null) | undefined
  collections: CollectionsTelemetry
  cluster?: ClusterTelemetry | ({ [x: string]: unknown } | null) | undefined
  requests?: RequestsTelemetry | ({ [x: string]: unknown } | null) | undefined
  memory?: MemoryTelemetry | ({ [x: string]: unknown } | null) | undefined
  hardware?: HardwareTelemetry | ({ [x: string]: unknown } | null) | undefined
  search_pool?: SearchThreadPoolTelemetry | ({ [x: string]: unknown } | null) | undefined
  quota?: QuotaTelemetry | ({ [x: string]: unknown } | null) | undefined
}
type RaftInfo = {
  term: bigint
  commit: bigint
  pending_operations: number
  leader?: (bigint | null) | undefined
  role?: StateRole | ({ [x: string]: unknown } | null) | undefined
  is_voter: boolean
}
type MessageSendErrors = {
  count: number
  latest_error?: (string | null) | undefined
  latest_error_timestamp?: (string | null) | undefined
}
type ClusterStatus =
  | { status: 'disabled' }
  | {
      status: 'enabled'
      peer_id: bigint
      peers: { [x: string]: PeerInfo }
      raft_info: RaftInfo
      consensus_thread_status: ConsensusThreadStatus
      message_send_failures: { [x: string]: MessageSendErrors }
    }
type DistributedReplicaTelemetry = {
  peer_id: bigint
  state: ReplicaState
  status?: ShardStatus | ({ [x: string]: unknown } | null) | undefined
  total_optimized_points?: (number | null) | undefined
  vectors_size_bytes?: (number | null) | undefined
  payloads_size_bytes?: (number | null) | undefined
  num_points?: (number | null) | undefined
  num_vectors?: (number | null) | undefined
  num_vectors_by_name?: ({ [x: string]: number } | null) | undefined
  shard_cleaning_status?: ShardCleanStatusTelemetry | ({ [x: string]: unknown } | null) | undefined
  partial_snapshot?: PartialSnapshotTelemetry | ({ [x: string]: unknown } | null) | undefined
}
type DistributedShardTelemetry = {
  id: number
  key?: ShardKey | ({ [x: string]: unknown } | null) | undefined
  replicas: DistributedReplicaTelemetry[]
}
type ReshardingInfo = {
  direction: ReshardingDirection
  shard_id: number
  peer_id: bigint
  shard_key?: ShardKey | ({ [x: string]: unknown } | null) | undefined
}
type DistributedCollectionTelemetry = {
  id: string
  shards?: (DistributedShardTelemetry[] | null) | undefined
  reshardings?: (ReshardingInfo[] | null) | undefined
  shard_transfers?: (ShardTransferInfo[] | null) | undefined
}
type DistributedPeerDetails = {
  version: string
  role?: StateRole | ({ [x: string]: unknown } | null) | undefined
  is_voter: boolean
  term: bigint
  commit: bigint
  num_pending_operations: bigint
  consensus_thread_status: ConsensusThreadStatus
}
type DistributedPeerInfo = {
  uri: string
  responsive: boolean
  details?: DistributedPeerDetails | ({ [x: string]: unknown } | null) | undefined
}
type DistributedClusterTelemetry = {
  enabled: boolean
  number_of_peers?: (bigint | null) | undefined
  peers: { [x: string]: DistributedPeerInfo }
}
type DistributedTelemetryData = {
  collections: { [x: string]: DistributedCollectionTelemetry }
  cluster?: DistributedClusterTelemetry | ({ [x: string]: unknown } | null) | undefined
}
type QuotaUsage = {
  resident_memory_percent?: (number | null) | undefined
  disk_usage_percent?: (number | null) | undefined
}
type PeerQuotaUsage = {
  exceeded: boolean
  resident_memory_percent?: (number | null) | undefined
  disk_usage_percent?: (number | null) | undefined
}
type QuotaStatus = {
  config: QuotaConfig
  usage: QuotaUsage
  peers?: ({ [x: string]: PeerQuotaUsage } | null) | undefined
}
type CollectionDescription = { name: string }
type CollectionsResponse = { collections: CollectionDescription[] }
type CollectionStatus = 'green' | 'yellow' | 'grey' | 'red'
type CollectionWarning = { message: string }
type CollectionConfig = {
  params: CollectionParams
  hnsw_config: HnswConfig
  optimizer_config: OptimizersConfig
  wal_config?: WalConfig | ({ [x: string]: unknown } | null) | undefined
  quantization_config?: QuantizationConfig | ({ [x: string]: unknown } | null) | undefined
  strict_mode_config?: StrictModeConfigOutput | ({ [x: string]: unknown } | null) | undefined
  metadata?: Payload | ({ [x: string]: unknown } | null) | undefined
}
type UpdateQueueInfo = { length: number; deferred_points?: (number | null) | undefined }
type CollectionInfo = {
  status: CollectionStatus
  optimizer_status: OptimizersStatus
  warnings?: CollectionWarning[] | undefined
  indexed_vectors_count?: (number | null) | undefined
  points_count?: (number | null) | undefined
  segments_count: number
  config: CollectionConfig
  payload_schema: { [x: string]: PayloadIndexInfo }
  update_queue?: UpdateQueueInfo | ({ [x: string]: unknown } | null) | undefined
  created_at?: (string | null) | undefined
}
type WalConfigDiff = {
  wal_capacity_mb?: (number | null) | undefined
  wal_segments_ahead?: (number | null) | undefined
  wal_retain_closed?: (number | null) | undefined
}
type MaxOptimizationThreadsSetting = 'auto'
type MaxOptimizationThreads = MaxOptimizationThreadsSetting | number
type OptimizersConfigDiff = {
  deleted_threshold?: (number | null) | undefined
  vacuum_min_vector_number?: (number | null) | undefined
  default_segment_number?: (number | null) | undefined
  max_segment_size?: (number | null) | undefined
  memmap_threshold?: (number | null) | undefined
  indexing_threshold?: (number | null) | undefined
  flush_interval_sec?: (bigint | null) | undefined
  max_optimization_threads?: MaxOptimizationThreads | ({ [x: string]: unknown } | null) | undefined
  prevent_unoptimized?: (boolean | null) | undefined
}
type StrictModeMultivector = { max_vectors?: (number | null) | undefined }
type StrictModeMultivectorConfig = { [x: string]: StrictModeMultivector }
type StrictModeSparse = { max_length?: (number | null) | undefined }
type StrictModeSparseConfig = { [x: string]: StrictModeSparse }
type StrictModeConfig = {
  enabled?: (boolean | null) | undefined
  max_query_limit?: (number | null) | undefined
  max_timeout?: (number | null) | undefined
  unindexed_filtering_retrieve?: (boolean | null) | undefined
  unindexed_filtering_update?: (boolean | null) | undefined
  require_tenant_filter?: (boolean | null) | undefined
  search_max_hnsw_ef?: (number | null) | undefined
  search_allow_exact?: (boolean | null) | undefined
  search_max_oversampling?: (number | null) | undefined
  upsert_max_batchsize?: (number | null) | undefined
  search_max_batchsize?: (number | null) | undefined
  max_collection_vector_size_bytes?: (number | null) | undefined
  read_rate_limit?: (number | null) | undefined
  write_rate_limit?: (number | null) | undefined
  max_collection_payload_size_bytes?: (number | null) | undefined
  max_points_count?: (number | null) | undefined
  filter_max_conditions?: (number | null) | undefined
  condition_max_size?: (number | null) | undefined
  multivector_config?: StrictModeMultivectorConfig | ({ [x: string]: unknown } | null) | undefined
  sparse_config?: StrictModeSparseConfig | ({ [x: string]: unknown } | null) | undefined
  max_payload_index_count?: (number | null) | undefined
  max_resident_memory_percent?: (number | null) | undefined
}
type CreateCollection = {
  vectors?: VectorsConfig | undefined
  shard_number?: (number | null) | undefined
  sharding_method?: ShardingMethod | ({ [x: string]: unknown } | null) | undefined
  replication_factor?: (number | null) | undefined
  write_consistency_factor?: (number | null) | undefined
  on_disk_payload?: (boolean | null) | undefined
  payload?: PayloadStorageParams | ({ [x: string]: unknown } | null) | undefined
  id_tracker?: IdTrackerParams | ({ [x: string]: unknown } | null) | undefined
  hnsw_config?: HnswConfigDiff | ({ [x: string]: unknown } | null) | undefined
  wal_config?: WalConfigDiff | ({ [x: string]: unknown } | null) | undefined
  optimizers_config?: OptimizersConfigDiff | ({ [x: string]: unknown } | null) | undefined
  quantization_config?: QuantizationConfig | ({ [x: string]: unknown } | null) | undefined
  sparse_vectors?: ({ [x: string]: SparseVectorParams } | null) | undefined
  strict_mode_config?: StrictModeConfig | ({ [x: string]: unknown } | null) | undefined
  metadata?: Payload | ({ [x: string]: unknown } | null) | undefined
}
type Disabled = 'Disabled'
type QuantizationConfigDiff =
  | ScalarQuantization
  | ProductQuantization
  | BinaryQuantization
  | TurboQuantization
  | Disabled
type VectorParamsDiff = {
  hnsw_config?: HnswConfigDiff | ({ [x: string]: unknown } | null) | undefined
  quantization_config?: QuantizationConfigDiff | ({ [x: string]: unknown } | null) | undefined
  on_disk?: (boolean | null) | undefined
  memory?: Memory | ({ [x: string]: unknown } | null) | undefined
}
type VectorsConfigDiff = { [x: string]: VectorParamsDiff }
type CollectionParamsDiff = {
  replication_factor?: (number | null) | undefined
  write_consistency_factor?: (number | null) | undefined
  read_fan_out_factor?: (number | null) | undefined
  read_fan_out_delay_ms?: (bigint | null) | undefined
  on_disk_payload?: (boolean | null) | undefined
  payload?: PayloadStorageParams | ({ [x: string]: unknown } | null) | undefined
  id_tracker?: IdTrackerParams | ({ [x: string]: unknown } | null) | undefined
}
type SparseVectorsConfig = { [x: string]: SparseVectorParams }
type UpdateCollection = {
  vectors?: VectorsConfigDiff | ({ [x: string]: unknown } | null) | undefined
  optimizers_config?: OptimizersConfigDiff | ({ [x: string]: unknown } | null) | undefined
  params?: CollectionParamsDiff | ({ [x: string]: unknown } | null) | undefined
  hnsw_config?: HnswConfigDiff | ({ [x: string]: unknown } | null) | undefined
  quantization_config?: QuantizationConfigDiff | ({ [x: string]: unknown } | null) | undefined
  sparse_vectors?: SparseVectorsConfig | ({ [x: string]: unknown } | null) | undefined
  strict_mode_config?: StrictModeConfig | ({ [x: string]: unknown } | null) | undefined
  metadata?: Payload | ({ [x: string]: unknown } | null) | undefined
}
type CreateAlias = { collection_name: string; alias_name: string }
type CreateAliasOperation = { create_alias: CreateAlias }
type DeleteAlias = { alias_name: string }
type DeleteAliasOperation = { delete_alias: DeleteAlias }
type RenameAlias = { old_alias_name: string; new_alias_name: string }
type RenameAliasOperation = { rename_alias: RenameAlias }
type AliasOperations = CreateAliasOperation | DeleteAliasOperation | RenameAliasOperation
type ChangeAliasesOperation = { actions: AliasOperations[] }
type WriteOrdering = 'weak' | 'medium' | 'strong'
type PayloadFieldSchema = PayloadSchemaType | PayloadSchemaParams
type CreateFieldIndex = {
  field_name: string
  field_schema?: PayloadFieldSchema | ({ [x: string]: unknown } | null) | undefined
}
type UpdateStatus = 'acknowledged' | 'completed' | 'wait_timeout'
type UpdateResult = { operation_id?: (bigint | null) | undefined; status: UpdateStatus }
type CollectionExistence = { exists: boolean }
type DenseVectorConfig = {
  size: number
  distance: Distance
  multivector_config?: MultiVectorConfig | ({ [x: string]: unknown } | null) | undefined
  datatype?: VectorStorageDatatype | ({ [x: string]: unknown } | null) | undefined
}
type DenseVectorNameConfig = { dense: DenseVectorConfig }
type SparseVectorConfig = {
  modifier?: Modifier | ({ [x: string]: unknown } | null) | undefined
  datatype?: VectorStorageDatatype | ({ [x: string]: unknown } | null) | undefined
}
type SparseVectorNameConfig = { sparse: SparseVectorConfig }
type VectorNameConfig = DenseVectorNameConfig | SparseVectorNameConfig
type LocalShardInfo = {
  shard_id: number
  shard_key?: ShardKey | ({ [x: string]: unknown } | null) | undefined
  points_count: number
  state: ReplicaState
}
type RemoteShardInfo = {
  shard_id: number
  shard_key?: ShardKey | ({ [x: string]: unknown } | null) | undefined
  peer_id: bigint
  state: ReplicaState
}
type CollectionClusterInfo = {
  peer_id: bigint
  shard_count: number
  local_shards: LocalShardInfo[]
  remote_shards: RemoteShardInfo[]
  shard_transfers: ShardTransferInfo[]
  resharding_operations?: (ReshardingInfo[] | null) | undefined
}
type MoveShard = {
  shard_id: number
  to_peer_id: bigint
  from_peer_id: bigint
  method?: ShardTransferMethod | ({ [x: string]: unknown } | null) | undefined
}
type MoveShardOperation = { move_shard: MoveShard }
type ReplicateShard = {
  shard_id: number
  to_peer_id: bigint
  from_peer_id: bigint
  method?: ShardTransferMethod | ({ [x: string]: unknown } | null) | undefined
}
type ReplicateShardOperation = { replicate_shard: ReplicateShard }
type AbortShardTransfer = { shard_id: number; to_peer_id: bigint; from_peer_id: bigint }
type AbortTransferOperation = { abort_transfer: AbortShardTransfer }
type Replica = { shard_id: number; peer_id: bigint }
type DropReplicaOperation = { drop_replica: Replica }
type CreateShardingKeyOperation = { create_sharding_key: CreateShardingKey }
type DropShardingKeyOperation = { drop_sharding_key: DropShardingKey }
type RestartTransfer = {
  shard_id: number
  from_peer_id: bigint
  to_peer_id: bigint
  method: ShardTransferMethod
}
type RestartTransferOperation = { restart_transfer: RestartTransfer }
type StartResharding = {
  direction: ReshardingDirection
  peer_id?: (bigint | null) | undefined
  shard_key?: ShardKey | ({ [x: string]: unknown } | null) | undefined
}
type StartReshardingOperation = { start_resharding: StartResharding }
type AbortResharding = { [x: string]: unknown }
type AbortReshardingOperation = { abort_resharding: AbortResharding }
type ValueVariants = string | bigint | boolean
type MatchValue = { value: ValueVariants }
type MatchText = { text: string }
type MatchTextAny = { text_any: string }
type MatchPhrase = { phrase: string }
type MatchPrefix = { prefix: string }
type MatchSubstring = { substring: string }
type AnyVariants = string[] | bigint[]
type MatchAny = { any: AnyVariants }
type MatchExcept = { except: AnyVariants }
type Match =
  | MatchValue
  | MatchText
  | MatchTextAny
  | MatchPhrase
  | MatchPrefix
  | MatchSubstring
  | MatchAny
  | MatchExcept
type Range = {
  lt?: (number | null) | undefined
  gt?: (number | null) | undefined
  gte?: (number | null) | undefined
  lte?: (number | null) | undefined
}
type DatetimeRange = {
  lt?: (string | null) | undefined
  gt?: (string | null) | undefined
  gte?: (string | null) | undefined
  lte?: (string | null) | undefined
}
type RangeInterface = Range | DatetimeRange
type GeoPoint = { lon: number; lat: number }
type GeoBoundingBox = { top_left: GeoPoint; bottom_right: GeoPoint }
type GeoRadius = { center: GeoPoint; radius: number }
type GeoLineString = { points: GeoPoint[] }
type GeoPolygon = { exterior: GeoLineString; interiors?: (GeoLineString[] | null) | undefined }
type ValuesCount = {
  lt?: (number | null) | undefined
  gt?: (number | null) | undefined
  gte?: (number | null) | undefined
  lte?: (number | null) | undefined
}
type FieldCondition = {
  key: string
  match?: Match | ({ [x: string]: unknown } | null) | undefined
  range?: RangeInterface | ({ [x: string]: unknown } | null) | undefined
  geo_bounding_box?: GeoBoundingBox | ({ [x: string]: unknown } | null) | undefined
  geo_radius?: GeoRadius | ({ [x: string]: unknown } | null) | undefined
  geo_polygon?: GeoPolygon | ({ [x: string]: unknown } | null) | undefined
  values_count?: ValuesCount | ({ [x: string]: unknown } | null) | undefined
  is_empty?: (boolean | null) | undefined
  is_null?: (boolean | null) | undefined
}
type PayloadField = { key: string }
type IsEmptyCondition = { is_empty: PayloadField }
type IsNullCondition = { is_null: PayloadField }
type ExtendedPointId = bigint | string
type HasIdCondition = { has_id: ExtendedPointId[] }
type HasVectorCondition = { has_vector: string }
type Slice = { total: number; index: number }
type SliceCondition = { slice: Slice }
type Nested = { key: string; filter: Filter }
type NestedCondition = { nested: Nested }
type Condition =
  | FieldCondition
  | IsEmptyCondition
  | IsNullCondition
  | HasIdCondition
  | HasVectorCondition
  | SliceCondition
  | NestedCondition
  | Filter
type MinShould = { conditions: Condition[]; min_count: number }
type Filter = {
  should?: Condition | Condition[] | ({ [x: string]: unknown } | null) | undefined
  min_should?: MinShould | ({ [x: string]: unknown } | null) | undefined
  must?: Condition | Condition[] | ({ [x: string]: unknown } | null) | undefined
  must_not?: Condition | Condition[] | ({ [x: string]: unknown } | null) | undefined
}
type ReplicatePoints = {
  filter?: Filter | ({ [x: string]: unknown } | null) | undefined
  from_shard_key: ShardKey
  to_shard_key: ShardKey
}
type ReplicatePointsOperation = { replicate_points: ReplicatePoints }
type ClusterOperations =
  | MoveShardOperation
  | ReplicateShardOperation
  | AbortTransferOperation
  | DropReplicaOperation
  | CreateShardingKeyOperation
  | DropShardingKeyOperation
  | RestartTransferOperation
  | StartReshardingOperation
  | AbortReshardingOperation
  | ReplicatePointsOperation
type OptimizationsSummary = {
  queued_optimizations: number
  queued_segments: number
  queued_points: number
  idle_segments: number
}
type OptimizationSegmentInfo = { uuid: string; points_count: number }
type ProgressTree = {
  name: string
  started_at?: (string | null) | undefined
  finished_at?: (string | null) | undefined
  duration_sec?: (number | null) | undefined
  done?: (bigint | null) | undefined
  total?: (bigint | null) | undefined
  children?: ProgressTree[] | undefined
}
type Optimization = {
  uuid: string
  optimizer: string
  status: TrackerStatus
  segments: OptimizationSegmentInfo[]
  progress: ProgressTree
}
type PendingOptimization = { optimizer: string; segments: OptimizationSegmentInfo[] }
type OptimizationsResponse = {
  summary: OptimizationsSummary
  running: Optimization[]
  queued?: (PendingOptimization[] | null) | undefined
  completed?: (Optimization[] | null) | undefined
  idle_segments?: (OptimizationSegmentInfo[] | null) | undefined
}
type AliasDescription = { alias_name: string; collection_name: string }
type CollectionsAliasesResponse = { aliases: AliasDescription[] }
type SnapshotPriority = 'no_sync' | 'snapshot' | 'replica'
type SnapshotRecover = {
  location: string
  priority?: SnapshotPriority | ({ [x: string]: unknown } | null) | undefined
  checksum?: (string | null) | undefined
  api_key?: (string | null) | undefined
}
type SnapshotDescription = {
  name: string
  creation_time?: (string | null) | undefined
  size: bigint
  checksum?: (string | null) | undefined
}
type ShardSnapshotLocation = string | string
type ShardSnapshotRecover = {
  location: ShardSnapshotLocation
  priority?: SnapshotPriority | ({ [x: string]: unknown } | null) | undefined
  checksum?: (string | null) | undefined
  api_key?: (string | null) | undefined
}
type ReadConsistencyType = 'majority' | 'quorum' | 'all'
type ReadConsistency = number | ReadConsistencyType
type SparseVector = { indices: number[]; values: number[] }
type VectorOutput = number[] | SparseVector | number[][]
type VectorStructOutput = number[] | number[][] | { [x: string]: VectorOutput }
type OrderValue = bigint | number
type Record = {
  id: ExtendedPointId
  payload?: Payload | ({ [x: string]: unknown } | null) | undefined
  vector?: VectorStructOutput | ({ [x: string]: unknown } | null) | undefined
  shard_key?: ShardKey | ({ [x: string]: unknown } | null) | undefined
  order_value?: OrderValue | ({ [x: string]: unknown } | null) | undefined
}
type ShardKeyWithFallback = { target: ShardKey; fallback: ShardKey }
type ShardKeySelector = ShardKey | ShardKey[] | ShardKeyWithFallback
type PayloadSelectorInclude = { include: string[] }
type PayloadSelectorExclude = { exclude: string[] }
type PayloadSelector = PayloadSelectorInclude | PayloadSelectorExclude
type WithPayloadInterface = boolean | string[] | PayloadSelector
type WithVector = boolean | string[]
type PointRequest = {
  shard_key?: ShardKeySelector | ({ [x: string]: unknown } | null) | undefined
  ids: ExtendedPointId[]
  with_payload?: WithPayloadInterface | ({ [x: string]: unknown } | null) | undefined
  with_vector?: WithVector | undefined
}
type Bm25Config = {
  k?: number | undefined
  b?: number | undefined
  avg_len?: number | undefined
  tokenizer?: TokenizerType | undefined
  language?: (string | null) | undefined
  lowercase?: (boolean | null) | undefined
  ascii_folding?: (boolean | null) | undefined
  stopwords?: StopwordsInterface | ({ [x: string]: unknown } | null) | undefined
  stemmer?: StemmingAlgorithm | ({ [x: string]: unknown } | null) | undefined
  min_token_len?: (number | null) | undefined
  max_token_len?: (number | null) | undefined
}
type DocumentOptions = { [x: string]: unknown } | Bm25Config
type Document = {
  text: string
  model: string
  options?: DocumentOptions | ({ [x: string]: unknown } | null) | undefined
}
type Image = {
  image: { [x: string]: unknown }
  model: string
  options?: ({ [x: string]: unknown } | null) | undefined
}
type InferenceObject = {
  object: { [x: string]: unknown }
  model: string
  options?: ({ [x: string]: unknown } | null) | undefined
}
type Vector = number[] | SparseVector | number[][] | Document | Image | InferenceObject
type BatchVectorStruct =
  | number[][]
  | number[][][]
  | { [x: string]: Vector[] }
  | Document[]
  | Image[]
  | InferenceObject[]
type Batch = {
  ids: ExtendedPointId[]
  vectors: BatchVectorStruct
  payloads?: ((Payload | ({ [x: string]: unknown } | null))[] | null) | undefined
}
type UpdateMode = 'upsert' | 'insert_only' | 'update_only'
type PointsBatch = {
  batch: Batch
  shard_key?: ShardKeySelector | ({ [x: string]: unknown } | null) | undefined
  update_filter?: Filter | ({ [x: string]: unknown } | null) | undefined
  update_mode?: UpdateMode | ({ [x: string]: unknown } | null) | undefined
}
type VectorStruct =
  | number[]
  | number[][]
  | { [x: string]: Vector }
  | Document
  | Image
  | InferenceObject
type PointStruct = {
  id: ExtendedPointId
  vector: VectorStruct
  payload?: Payload | ({ [x: string]: unknown } | null) | undefined
}
type PointsList = {
  points: PointStruct[]
  shard_key?: ShardKeySelector | ({ [x: string]: unknown } | null) | undefined
  update_filter?: Filter | ({ [x: string]: unknown } | null) | undefined
  update_mode?: UpdateMode | ({ [x: string]: unknown } | null) | undefined
}
type PointInsertOperations = PointsBatch | PointsList
type PointIdsList = {
  points: ExtendedPointId[]
  shard_key?: ShardKeySelector | ({ [x: string]: unknown } | null) | undefined
}
type FilterSelector = {
  filter: Filter
  shard_key?: ShardKeySelector | ({ [x: string]: unknown } | null) | undefined
}
type PointsSelector = PointIdsList | FilterSelector
type PointVectors = { id: ExtendedPointId; vector: VectorStruct }
type UpdateVectors = {
  points: PointVectors[]
  shard_key?: ShardKeySelector | ({ [x: string]: unknown } | null) | undefined
  update_filter?: Filter | ({ [x: string]: unknown } | null) | undefined
}
type DeleteVectors = {
  points?: (ExtendedPointId[] | null) | undefined
  filter?: Filter | ({ [x: string]: unknown } | null) | undefined
  vector: string[]
  shard_key?: ShardKeySelector | ({ [x: string]: unknown } | null) | undefined
}
type SetPayload = {
  payload: Payload
  points?: (ExtendedPointId[] | null) | undefined
  filter?: Filter | ({ [x: string]: unknown } | null) | undefined
  shard_key?: ShardKeySelector | ({ [x: string]: unknown } | null) | undefined
  key?: (string | null) | undefined
}
type DeletePayload = {
  keys: string[]
  points?: (ExtendedPointId[] | null) | undefined
  filter?: Filter | ({ [x: string]: unknown } | null) | undefined
  shard_key?: ShardKeySelector | ({ [x: string]: unknown } | null) | undefined
}
type UpsertOperation = { upsert: PointInsertOperations }
type DeleteOperation = { delete: PointsSelector }
type SetPayloadOperation = { set_payload: SetPayload }
type OverwritePayloadOperation = { overwrite_payload: SetPayload }
type DeletePayloadOperation = { delete_payload: DeletePayload }
type ClearPayloadOperation = { clear_payload: PointsSelector }
type UpdateVectorsOperation = { update_vectors: UpdateVectors }
type DeleteVectorsOperation = { delete_vectors: DeleteVectors }
type UpdateOperation =
  | UpsertOperation
  | DeleteOperation
  | SetPayloadOperation
  | OverwritePayloadOperation
  | DeletePayloadOperation
  | ClearPayloadOperation
  | UpdateVectorsOperation
  | DeleteVectorsOperation
type UpdateOperations = { operations: UpdateOperation[] }
type Direction = 'asc' | 'desc'
type StartFrom = bigint | number | string
type OrderBy = {
  key: string
  direction?: Direction | ({ [x: string]: unknown } | null) | undefined
  start_from?: StartFrom | ({ [x: string]: unknown } | null) | undefined
}
type OrderByInterface = string | OrderBy
type ScrollRequest = {
  shard_key?: ShardKeySelector | ({ [x: string]: unknown } | null) | undefined
  offset?: ExtendedPointId | ({ [x: string]: unknown } | null) | undefined
  limit?: (number | null) | undefined
  filter?: Filter | ({ [x: string]: unknown } | null) | undefined
  with_payload?: WithPayloadInterface | ({ [x: string]: unknown } | null) | undefined
  with_vector?: WithVector | undefined
  order_by?: OrderByInterface | ({ [x: string]: unknown } | null) | undefined
}
type ScrollResult = {
  points: Record[]
  next_page_offset?: ExtendedPointId | ({ [x: string]: unknown } | null) | undefined
}
type CountRequest = {
  shard_key?: ShardKeySelector | ({ [x: string]: unknown } | null) | undefined
  filter?: Filter | ({ [x: string]: unknown } | null) | undefined
  exact?: boolean | undefined
}
type CountResult = { count: number }
type FacetRequest = {
  shard_key?: ShardKeySelector | ({ [x: string]: unknown } | null) | undefined
  key: string
  limit?: (number | null) | undefined
  filter?: Filter | ({ [x: string]: unknown } | null) | undefined
  exact?: (boolean | null) | undefined
}
type FacetValue = string | bigint | boolean
type FacetValueHit = { value: FacetValue; count: number }
type FacetResponse = { hits: FacetValueHit[] }
type VectorInput =
  | number[]
  | SparseVector
  | number[][]
  | ExtendedPointId
  | Document
  | Image
  | InferenceObject
type Mmr = {
  diversity?: (number | null) | undefined
  candidates_limit?: (number | null) | undefined
}
type NearestQuery = {
  nearest: VectorInput
  mmr?: Mmr | ({ [x: string]: unknown } | null) | undefined
}
type RecommendStrategy = 'average_vector' | 'best_score' | 'sum_scores'
type RecommendInput = {
  positive?: (VectorInput[] | null) | undefined
  negative?: (VectorInput[] | null) | undefined
  strategy?: RecommendStrategy | ({ [x: string]: unknown } | null) | undefined
}
type RecommendQuery = { recommend: RecommendInput }
type ContextPair = { positive: VectorInput; negative: VectorInput }
type DiscoverInput = {
  target: VectorInput
  context: ContextPair | ContextPair[] | ({ [x: string]: unknown } | null)
}
type DiscoverQuery = { discover: DiscoverInput }
type ContextInput = ContextPair | ContextPair[] | ({ [x: string]: unknown } | null)
type ContextQuery = { context: ContextInput }
type OrderByQuery = { order_by: OrderByInterface }
type Fusion = 'rrf' | 'dbsf'
type FusionQuery = { fusion: Fusion }
type Rrf = { k?: (number | null) | undefined; weights?: (number[] | null) | undefined }
type RrfQuery = { rrf: Rrf }
type GeoDistanceParams = { origin: GeoPoint; to: string }
type GeoDistance = { geo_distance: GeoDistanceParams }
type DatetimeExpression = { datetime: string }
type DatetimeKeyExpression = { datetime_key: string }
type MultExpression = { mult: Expression[] }
type SumExpression = { sum: Expression[] }
type MaxExpression = { max: Expression[] }
type MinExpression = { min: Expression[] }
type NegExpression = { neg: Expression }
type AbsExpression = { abs: Expression }
type DivParams = {
  left: Expression
  right: Expression
  by_zero_default?: (number | null) | undefined
}
type DivExpression = { div: DivParams }
type SqrtExpression = { sqrt: Expression }
type PowParams = { base: Expression; exponent: Expression }
type PowExpression = { pow: PowParams }
type ExpExpression = { exp: Expression }
type Log10Expression = { log10: Expression }
type LnExpression = { ln: Expression }
type AcoshExpression = { acosh: Expression }
type DecayParamsExpression = {
  x: Expression
  target?: Expression | ({ [x: string]: unknown } | null) | undefined
  scale?: (number | null) | undefined
  midpoint?: (number | null) | undefined
}
type LinDecayExpression = { lin_decay: DecayParamsExpression }
type ExpDecayExpression = { exp_decay: DecayParamsExpression }
type GaussDecayExpression = { gauss_decay: DecayParamsExpression }
type Expression =
  | number
  | string
  | Condition
  | GeoDistance
  | DatetimeExpression
  | DatetimeKeyExpression
  | MultExpression
  | SumExpression
  | MaxExpression
  | MinExpression
  | NegExpression
  | AbsExpression
  | DivExpression
  | SqrtExpression
  | PowExpression
  | ExpExpression
  | Log10Expression
  | LnExpression
  | AcoshExpression
  | LinDecayExpression
  | ExpDecayExpression
  | GaussDecayExpression
type FormulaQuery = { formula: Expression; defaults?: { [x: string]: unknown } | undefined }
type Sample = 'random'
type SampleQuery = { sample: Sample }
type FeedbackItem = { example: VectorInput; score: number }
type NaiveFeedbackStrategyParams = { a: number; b: number; c: number }
type NaiveFeedbackStrategy = { naive: NaiveFeedbackStrategyParams }
type FeedbackStrategy = NaiveFeedbackStrategy
type RelevanceFeedbackInput = {
  target: VectorInput
  feedback: FeedbackItem[]
  strategy: FeedbackStrategy
}
type RelevanceFeedbackQuery = { relevance_feedback: RelevanceFeedbackInput }
type Bm25Params = { k?: (number | null) | undefined; b?: (number | null) | undefined }
type Bm25Scoring = { bm25: Bm25Params }
type TextQueryScoring = Bm25Scoring
type TextQueryInput = {
  query: string
  scoring?: TextQueryScoring | ({ [x: string]: unknown } | null) | undefined
}
type TextInterface = string | TextQueryInput
type TextQuery = { text: TextInterface }
type Query =
  | NearestQuery
  | RecommendQuery
  | DiscoverQuery
  | ContextQuery
  | OrderByQuery
  | FusionQuery
  | RrfQuery
  | FormulaQuery
  | SampleQuery
  | RelevanceFeedbackQuery
  | TextQuery
type QueryInterface = VectorInput | Query
type QuantizationSearchParams = {
  ignore?: boolean | undefined
  rescore?: (boolean | null) | undefined
  oversampling?: (number | null) | undefined
}
type AcornSearchParams = {
  enable?: boolean | undefined
  max_selectivity?: (number | null) | undefined
}
type IdfScope = 'global'
type IdfCorpusParams = { corpus: Filter }
type IdfParams = IdfScope | IdfCorpusParams
type SearchParams = {
  hnsw_ef?: (number | null) | undefined
  exact?: boolean | undefined
  quantization?: QuantizationSearchParams | ({ [x: string]: unknown } | null) | undefined
  indexed_only?: boolean | undefined
  acorn?: AcornSearchParams | ({ [x: string]: unknown } | null) | undefined
  idf?: IdfParams | ({ [x: string]: unknown } | null) | undefined
}
type LookupLocation = {
  collection: string
  vector?: (string | null) | undefined
  shard_key?: ShardKeySelector | ({ [x: string]: unknown } | null) | undefined
}
type Prefetch = {
  prefetch?: Prefetch | Prefetch[] | ({ [x: string]: unknown } | null) | undefined
  query?: QueryInterface | ({ [x: string]: unknown } | null) | undefined
  using?: (string | null) | undefined
  filter?: Filter | ({ [x: string]: unknown } | null) | undefined
  params?: SearchParams | ({ [x: string]: unknown } | null) | undefined
  score_threshold?: (number | null) | undefined
  limit?: (number | null) | undefined
  lookup_from?: LookupLocation | ({ [x: string]: unknown } | null) | undefined
}
type QueryRequest = {
  shard_key?: ShardKeySelector | ({ [x: string]: unknown } | null) | undefined
  prefetch?: Prefetch | Prefetch[] | ({ [x: string]: unknown } | null) | undefined
  query?: QueryInterface | ({ [x: string]: unknown } | null) | undefined
  using?: (string | null) | undefined
  filter?: Filter | ({ [x: string]: unknown } | null) | undefined
  params?: SearchParams | ({ [x: string]: unknown } | null) | undefined
  score_threshold?: (number | null) | undefined
  limit?: (number | null) | undefined
  offset?: (number | null) | undefined
  with_vector?: WithVector | ({ [x: string]: unknown } | null) | undefined
  with_payload?: WithPayloadInterface | ({ [x: string]: unknown } | null) | undefined
  lookup_from?: LookupLocation | ({ [x: string]: unknown } | null) | undefined
}
type ScoredPoint = {
  id: ExtendedPointId
  version: bigint
  score: number
  payload?: Payload | ({ [x: string]: unknown } | null) | undefined
  vector?: VectorStructOutput | ({ [x: string]: unknown } | null) | undefined
  shard_key?: ShardKey | ({ [x: string]: unknown } | null) | undefined
  order_value?: OrderValue | ({ [x: string]: unknown } | null) | undefined
}
type QueryResponse = { points: ScoredPoint[] }
type QueryRequestBatch = { searches: QueryRequest[] }
type WithLookup = {
  collection: string
  with_payload?: WithPayloadInterface | ({ [x: string]: unknown } | null) | undefined
  with_vectors?: WithVector | ({ [x: string]: unknown } | null) | undefined
}
type WithLookupInterface = string | WithLookup
type QueryGroupsRequest = {
  shard_key?: ShardKeySelector | ({ [x: string]: unknown } | null) | undefined
  prefetch?: Prefetch | Prefetch[] | ({ [x: string]: unknown } | null) | undefined
  query?: QueryInterface | ({ [x: string]: unknown } | null) | undefined
  using?: (string | null) | undefined
  filter?: Filter | ({ [x: string]: unknown } | null) | undefined
  params?: SearchParams | ({ [x: string]: unknown } | null) | undefined
  score_threshold?: (number | null) | undefined
  with_vector?: WithVector | ({ [x: string]: unknown } | null) | undefined
  with_payload?: WithPayloadInterface | ({ [x: string]: unknown } | null) | undefined
  lookup_from?: LookupLocation | ({ [x: string]: unknown } | null) | undefined
  group_by: string
  group_size?: (number | null) | undefined
  limit?: (number | null) | undefined
  with_lookup?: WithLookupInterface | ({ [x: string]: unknown } | null) | undefined
}
type GroupId = string | bigint | bigint
type PointGroup = {
  hits: ScoredPoint[]
  id: GroupId
  lookup?: Record | ({ [x: string]: unknown } | null) | undefined
}
type GroupsResult = { groups: PointGroup[] }
type SearchMatrixRequest = {
  shard_key?: ShardKeySelector | ({ [x: string]: unknown } | null) | undefined
  filter?: Filter | ({ [x: string]: unknown } | null) | undefined
  sample?: (number | null) | undefined
  limit?: (number | null) | undefined
  using?: (string | null) | undefined
}
type SearchMatrixPair = { a: ExtendedPointId; b: ExtendedPointId; score: number }
type SearchMatrixPairsResponse = { pairs: SearchMatrixPair[] }
type SearchMatrixOffsetsResponse = {
  offsets_row: bigint[]
  offsets_col: bigint[]
  scores: number[]
  ids: ExtendedPointId[]
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/collections/:collection_name/shards': {
      $put:
        | {
            input: { param: { collection_name: string } } & {
              query: { timeout?: number | undefined }
            } & { json: CreateShardingKey }
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: { timeout?: number | undefined }
            } & { json: CreateShardingKey }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: { timeout?: number | undefined }
            } & { json: CreateShardingKey }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: { param: { collection_name: string } }
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: ShardKeysResponse | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/collections/:collection_name/shards/delete': {
      $post:
        | {
            input: { param: { collection_name: string } } & {
              query: { timeout?: number | undefined }
            } & { json: DropShardingKey }
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: { timeout?: number | undefined }
            } & { json: DropShardingKey }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: { timeout?: number | undefined }
            } & { json: DropShardingKey }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/': {
      $get:
        | { input: {}; output: VersionInfo; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/telemetry': {
      $get:
        | {
            input: {
              query: {
                anonymize?: boolean | undefined
                details_level?: number | undefined
                per_collection?: boolean | undefined
                timeout?: number | undefined
              }
            }
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: TelemetryData | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                anonymize?: boolean | undefined
                details_level?: number | undefined
                per_collection?: boolean | undefined
                timeout?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                anonymize?: boolean | undefined
                details_level?: number | undefined
                per_collection?: boolean | undefined
                timeout?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/metrics': {
      $get:
        | {
            input: {
              query: {
                anonymize?: boolean | undefined
                per_collection?: boolean | undefined
                timeout?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                anonymize?: boolean | undefined
                per_collection?: boolean | undefined
                timeout?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/healthz': {
      $get:
        | { input: {}; output: string; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/livez': {
      $get:
        | { input: {}; output: string; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/readyz': {
      $get:
        | { input: {}; output: string; outputFormat: 'text'; status: 200 }
        | { input: {}; output: string; outputFormat: 'text'; status: 503 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/issues': {
      $get:
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
      $delete:
        | {
            input: {}
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/cluster': {
      $get:
        | {
            input: {}
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: ClusterStatus | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/cluster/telemetry': {
      $get:
        | {
            input: { query: { details_level?: number | undefined; timeout?: number | undefined } }
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: DistributedTelemetryData | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { details_level?: number | undefined; timeout?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { details_level?: number | undefined; timeout?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/cluster/recover': {
      $post:
        | {
            input: {}
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/cluster/peer/:peer_id': {
      $delete:
        | {
            input: { param: { peer_id: number } } & {
              query: { timeout?: number | undefined; force?: boolean | undefined }
            }
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { peer_id: number } } & {
              query: { timeout?: number | undefined; force?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { peer_id: number } } & {
              query: { timeout?: number | undefined; force?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/quotas': {
      $get:
        | {
            input: {}
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: QuotaStatus | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
      $put:
        | {
            input: { query: { wait?: boolean | undefined } } & { json: QuotaConfig }
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { wait?: boolean | undefined } } & { json: QuotaConfig }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { wait?: boolean | undefined } } & { json: QuotaConfig }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/collections': {
      $get:
        | {
            input: {}
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: CollectionsResponse | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/collections/:collection_name': {
      $get:
        | {
            input: { param: { collection_name: string } }
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: CollectionInfo | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { collection_name: string } } & {
              query: { timeout?: number | undefined }
            } & { json: CreateCollection }
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: { timeout?: number | undefined }
            } & { json: CreateCollection }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: { timeout?: number | undefined }
            } & { json: CreateCollection }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { collection_name: string } } & {
              query: { timeout?: number | undefined }
            } & { json: UpdateCollection }
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: { timeout?: number | undefined }
            } & { json: UpdateCollection }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: { timeout?: number | undefined }
            } & { json: UpdateCollection }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { collection_name: string } } & {
              query: { timeout?: number | undefined }
            }
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: { timeout?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: { timeout?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/collections/aliases': {
      $post:
        | {
            input: { query: { timeout?: number | undefined } } & { json: ChangeAliasesOperation }
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { timeout?: number | undefined } } & { json: ChangeAliasesOperation }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { timeout?: number | undefined } } & { json: ChangeAliasesOperation }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/collections/:collection_name/index': {
      $put:
        | {
            input: { param: { collection_name: string } } & {
              query: {
                wait?: boolean | undefined
                ordering?: WriteOrdering | undefined
                timeout?: number | undefined
              }
            } & { json: CreateFieldIndex }
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: UpdateResult | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: {
                wait?: boolean | undefined
                ordering?: WriteOrdering | undefined
                timeout?: number | undefined
              }
            } & { json: CreateFieldIndex }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: {
                wait?: boolean | undefined
                ordering?: WriteOrdering | undefined
                timeout?: number | undefined
              }
            } & { json: CreateFieldIndex }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/collections/:collection_name/exists': {
      $get:
        | {
            input: { param: { collection_name: string } }
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: CollectionExistence | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/collections/:collection_name/index/:field_name': {
      $delete:
        | {
            input: { param: { collection_name: string; field_name: string } } & {
              query: {
                wait?: boolean | undefined
                ordering?: WriteOrdering | undefined
                timeout?: number | undefined
              }
            }
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: UpdateResult | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string; field_name: string } } & {
              query: {
                wait?: boolean | undefined
                ordering?: WriteOrdering | undefined
                timeout?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string; field_name: string } } & {
              query: {
                wait?: boolean | undefined
                ordering?: WriteOrdering | undefined
                timeout?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/collections/:collection_name/vectors/:vector_name': {
      $put:
        | {
            input: { param: { collection_name: string; vector_name: string } } & {
              query: {
                wait?: boolean | undefined
                ordering?: WriteOrdering | undefined
                timeout?: number | undefined
              }
            } & { json: VectorNameConfig }
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: UpdateResult | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string; vector_name: string } } & {
              query: {
                wait?: boolean | undefined
                ordering?: WriteOrdering | undefined
                timeout?: number | undefined
              }
            } & { json: VectorNameConfig }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string; vector_name: string } } & {
              query: {
                wait?: boolean | undefined
                ordering?: WriteOrdering | undefined
                timeout?: number | undefined
              }
            } & { json: VectorNameConfig }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { collection_name: string; vector_name: string } } & {
              query: {
                wait?: boolean | undefined
                ordering?: WriteOrdering | undefined
                timeout?: number | undefined
              }
            }
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: UpdateResult | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string; vector_name: string } } & {
              query: {
                wait?: boolean | undefined
                ordering?: WriteOrdering | undefined
                timeout?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string; vector_name: string } } & {
              query: {
                wait?: boolean | undefined
                ordering?: WriteOrdering | undefined
                timeout?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/collections/:collection_name/cluster': {
      $get:
        | {
            input: { param: { collection_name: string } }
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: CollectionClusterInfo | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { collection_name: string } } & {
              query: { timeout?: number | undefined }
            } & { json: ClusterOperations }
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: { timeout?: number | undefined }
            } & { json: ClusterOperations }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: { timeout?: number | undefined }
            } & { json: ClusterOperations }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/collections/:collection_name/optimizations': {
      $get:
        | {
            input: { param: { collection_name: string } } & {
              query: { with?: string | undefined; completed_limit?: number | undefined }
            }
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: OptimizationsResponse | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: { with?: string | undefined; completed_limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: { with?: string | undefined; completed_limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/collections/:collection_name/aliases': {
      $get:
        | {
            input: { param: { collection_name: string } }
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: CollectionsAliasesResponse | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/aliases': {
      $get:
        | {
            input: {}
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: CollectionsAliasesResponse | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/collections/:collection_name/snapshots/upload': {
      $post:
        | {
            input: { param: { collection_name: string } } & {
              query: {
                wait?: boolean | undefined
                priority?: SnapshotPriority | undefined
                checksum?: string | undefined
              }
            } & { form: { snapshot?: File | undefined } }
            output: {
              time?: number | undefined
              status?: string | undefined
              result?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: {
                wait?: boolean | undefined
                priority?: SnapshotPriority | undefined
                checksum?: string | undefined
              }
            } & { form: { snapshot?: File | undefined } }
            output: { time?: number | undefined; status?: string | undefined }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { collection_name: string } } & {
              query: {
                wait?: boolean | undefined
                priority?: SnapshotPriority | undefined
                checksum?: string | undefined
              }
            } & { form: { snapshot?: File | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: {
                wait?: boolean | undefined
                priority?: SnapshotPriority | undefined
                checksum?: string | undefined
              }
            } & { form: { snapshot?: File | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/collections/:collection_name/snapshots/recover': {
      $put:
        | {
            input: { param: { collection_name: string } } & {
              query: { wait?: boolean | undefined }
            } & { json: SnapshotRecover }
            output: {
              time?: number | undefined
              status?: string | undefined
              result?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: { wait?: boolean | undefined }
            } & { json: SnapshotRecover }
            output: { time?: number | undefined; status?: string | undefined }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { collection_name: string } } & {
              query: { wait?: boolean | undefined }
            } & { json: SnapshotRecover }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: { wait?: boolean | undefined }
            } & { json: SnapshotRecover }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/collections/:collection_name/snapshots': {
      $get:
        | {
            input: { param: { collection_name: string } }
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: SnapshotDescription[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { collection_name: string } } & {
              query: { wait?: boolean | undefined }
            }
            output: {
              time?: number | undefined
              status?: string | undefined
              result?: SnapshotDescription | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: { wait?: boolean | undefined }
            }
            output: { time?: number | undefined; status?: string | undefined }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { collection_name: string } } & {
              query: { wait?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: { wait?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/collections/:collection_name/snapshots/:snapshot_name': {
      $delete:
        | {
            input: { param: { collection_name: string; snapshot_name: string } } & {
              query: { wait?: boolean | undefined }
            }
            output: {
              time?: number | undefined
              status?: string | undefined
              result?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string; snapshot_name: string } } & {
              query: { wait?: boolean | undefined }
            }
            output: { time?: number | undefined; status?: string | undefined }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { collection_name: string; snapshot_name: string } } & {
              query: { wait?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string; snapshot_name: string } } & {
              query: { wait?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: { param: { collection_name: string; snapshot_name: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { collection_name: string; snapshot_name: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string; snapshot_name: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/snapshots': {
      $get:
        | {
            input: {}
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: SnapshotDescription[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
      $post:
        | {
            input: { query: { wait?: boolean | undefined } }
            output: {
              time?: number | undefined
              status?: string | undefined
              result?: SnapshotDescription | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { wait?: boolean | undefined } }
            output: { time?: number | undefined; status?: string | undefined }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { query: { wait?: boolean | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { wait?: boolean | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/snapshots/:snapshot_name': {
      $delete:
        | {
            input: { param: { snapshot_name: string } } & { query: { wait?: boolean | undefined } }
            output: {
              time?: number | undefined
              status?: string | undefined
              result?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { snapshot_name: string } } & { query: { wait?: boolean | undefined } }
            output: { time?: number | undefined; status?: string | undefined }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { snapshot_name: string } } & { query: { wait?: boolean | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { snapshot_name: string } } & { query: { wait?: boolean | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: { param: { snapshot_name: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { snapshot_name: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { snapshot_name: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/collections/:collection_name/shards/:shard_id/snapshot': {
      $get:
        | {
            input: { param: { collection_name: string; shard_id: number } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { collection_name: string; shard_id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string; shard_id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/collections/:collection_name/shards/:shard_id/snapshots/upload': {
      $post:
        | {
            input: { param: { collection_name: string; shard_id: number } } & {
              query: {
                wait?: boolean | undefined
                priority?: SnapshotPriority | undefined
                checksum?: string | undefined
              }
            } & { form: { snapshot?: File | undefined } }
            output: {
              time?: number | undefined
              status?: string | undefined
              result?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string; shard_id: number } } & {
              query: {
                wait?: boolean | undefined
                priority?: SnapshotPriority | undefined
                checksum?: string | undefined
              }
            } & { form: { snapshot?: File | undefined } }
            output: { time?: number | undefined; status?: string | undefined }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { collection_name: string; shard_id: number } } & {
              query: {
                wait?: boolean | undefined
                priority?: SnapshotPriority | undefined
                checksum?: string | undefined
              }
            } & { form: { snapshot?: File | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string; shard_id: number } } & {
              query: {
                wait?: boolean | undefined
                priority?: SnapshotPriority | undefined
                checksum?: string | undefined
              }
            } & { form: { snapshot?: File | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/collections/:collection_name/shards/:shard_id/snapshots/recover': {
      $put:
        | {
            input: { param: { collection_name: string; shard_id: number } } & {
              query: { wait?: boolean | undefined }
            } & { json: ShardSnapshotRecover }
            output: {
              time?: number | undefined
              status?: string | undefined
              result?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string; shard_id: number } } & {
              query: { wait?: boolean | undefined }
            } & { json: ShardSnapshotRecover }
            output: { time?: number | undefined; status?: string | undefined }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { collection_name: string; shard_id: number } } & {
              query: { wait?: boolean | undefined }
            } & { json: ShardSnapshotRecover }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string; shard_id: number } } & {
              query: { wait?: boolean | undefined }
            } & { json: ShardSnapshotRecover }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/collections/:collection_name/shards/:shard_id/snapshots': {
      $get:
        | {
            input: { param: { collection_name: string; shard_id: number } }
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: SnapshotDescription[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string; shard_id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string; shard_id: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { collection_name: string; shard_id: number } } & {
              query: { wait?: boolean | undefined }
            }
            output: {
              time?: number | undefined
              status?: string | undefined
              result?: SnapshotDescription | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string; shard_id: number } } & {
              query: { wait?: boolean | undefined }
            }
            output: { time?: number | undefined; status?: string | undefined }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { collection_name: string; shard_id: number } } & {
              query: { wait?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string; shard_id: number } } & {
              query: { wait?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/collections/:collection_name/shards/:shard_id/snapshots/:snapshot_name': {
      $delete:
        | {
            input: {
              param: { collection_name: string; shard_id: number; snapshot_name: string }
            } & { query: { wait?: boolean | undefined } }
            output: {
              time?: number | undefined
              status?: string | undefined
              result?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { collection_name: string; shard_id: number; snapshot_name: string }
            } & { query: { wait?: boolean | undefined } }
            output: { time?: number | undefined; status?: string | undefined }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              param: { collection_name: string; shard_id: number; snapshot_name: string }
            } & { query: { wait?: boolean | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { collection_name: string; shard_id: number; snapshot_name: string }
            } & { query: { wait?: boolean | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: { param: { collection_name: string; shard_id: number; snapshot_name: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { collection_name: string; shard_id: number; snapshot_name: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string; shard_id: number; snapshot_name: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/collections/:collection_name/points/:id': {
      $get:
        | {
            input: { param: { collection_name: string; id: ExtendedPointId } } & {
              query: { consistency?: ReadConsistency | undefined; timeout?: number | undefined }
            }
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: Record | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string; id: ExtendedPointId } } & {
              query: { consistency?: ReadConsistency | undefined; timeout?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string; id: ExtendedPointId } } & {
              query: { consistency?: ReadConsistency | undefined; timeout?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/collections/:collection_name/points': {
      $post:
        | {
            input: { param: { collection_name: string } } & {
              query: { consistency?: ReadConsistency | undefined; timeout?: number | undefined }
            } & { json: PointRequest }
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: Record[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: { consistency?: ReadConsistency | undefined; timeout?: number | undefined }
            } & { json: PointRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: { consistency?: ReadConsistency | undefined; timeout?: number | undefined }
            } & { json: PointRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { collection_name: string } } & {
              query: {
                wait?: boolean | undefined
                ordering?: WriteOrdering | undefined
                timeout?: number | undefined
              }
            } & { json: PointInsertOperations }
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: UpdateResult | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: {
                wait?: boolean | undefined
                ordering?: WriteOrdering | undefined
                timeout?: number | undefined
              }
            } & { json: PointInsertOperations }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: {
                wait?: boolean | undefined
                ordering?: WriteOrdering | undefined
                timeout?: number | undefined
              }
            } & { json: PointInsertOperations }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/collections/:collection_name/points/delete': {
      $post:
        | {
            input: { param: { collection_name: string } } & {
              query: {
                wait?: boolean | undefined
                ordering?: WriteOrdering | undefined
                timeout?: number | undefined
              }
            } & { json: PointsSelector }
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: UpdateResult | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: {
                wait?: boolean | undefined
                ordering?: WriteOrdering | undefined
                timeout?: number | undefined
              }
            } & { json: PointsSelector }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: {
                wait?: boolean | undefined
                ordering?: WriteOrdering | undefined
                timeout?: number | undefined
              }
            } & { json: PointsSelector }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/collections/:collection_name/points/vectors': {
      $put:
        | {
            input: { param: { collection_name: string } } & {
              query: {
                wait?: boolean | undefined
                ordering?: WriteOrdering | undefined
                timeout?: number | undefined
              }
            } & { json: UpdateVectors }
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: UpdateResult | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: {
                wait?: boolean | undefined
                ordering?: WriteOrdering | undefined
                timeout?: number | undefined
              }
            } & { json: UpdateVectors }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: {
                wait?: boolean | undefined
                ordering?: WriteOrdering | undefined
                timeout?: number | undefined
              }
            } & { json: UpdateVectors }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/collections/:collection_name/points/vectors/delete': {
      $post:
        | {
            input: { param: { collection_name: string } } & {
              query: {
                wait?: boolean | undefined
                ordering?: WriteOrdering | undefined
                timeout?: number | undefined
              }
            } & { json: DeleteVectors }
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: UpdateResult | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: {
                wait?: boolean | undefined
                ordering?: WriteOrdering | undefined
                timeout?: number | undefined
              }
            } & { json: DeleteVectors }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: {
                wait?: boolean | undefined
                ordering?: WriteOrdering | undefined
                timeout?: number | undefined
              }
            } & { json: DeleteVectors }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/collections/:collection_name/points/payload': {
      $post:
        | {
            input: { param: { collection_name: string } } & {
              query: {
                wait?: boolean | undefined
                ordering?: WriteOrdering | undefined
                timeout?: number | undefined
              }
            } & { json: SetPayload }
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: UpdateResult | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: {
                wait?: boolean | undefined
                ordering?: WriteOrdering | undefined
                timeout?: number | undefined
              }
            } & { json: SetPayload }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: {
                wait?: boolean | undefined
                ordering?: WriteOrdering | undefined
                timeout?: number | undefined
              }
            } & { json: SetPayload }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { collection_name: string } } & {
              query: {
                wait?: boolean | undefined
                ordering?: WriteOrdering | undefined
                timeout?: number | undefined
              }
            } & { json: SetPayload }
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: UpdateResult | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: {
                wait?: boolean | undefined
                ordering?: WriteOrdering | undefined
                timeout?: number | undefined
              }
            } & { json: SetPayload }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: {
                wait?: boolean | undefined
                ordering?: WriteOrdering | undefined
                timeout?: number | undefined
              }
            } & { json: SetPayload }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/collections/:collection_name/points/payload/delete': {
      $post:
        | {
            input: { param: { collection_name: string } } & {
              query: {
                wait?: boolean | undefined
                ordering?: WriteOrdering | undefined
                timeout?: number | undefined
              }
            } & { json: DeletePayload }
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: UpdateResult | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: {
                wait?: boolean | undefined
                ordering?: WriteOrdering | undefined
                timeout?: number | undefined
              }
            } & { json: DeletePayload }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: {
                wait?: boolean | undefined
                ordering?: WriteOrdering | undefined
                timeout?: number | undefined
              }
            } & { json: DeletePayload }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/collections/:collection_name/points/payload/clear': {
      $post:
        | {
            input: { param: { collection_name: string } } & {
              query: {
                wait?: boolean | undefined
                ordering?: WriteOrdering | undefined
                timeout?: number | undefined
              }
            } & { json: PointsSelector }
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: UpdateResult | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: {
                wait?: boolean | undefined
                ordering?: WriteOrdering | undefined
                timeout?: number | undefined
              }
            } & { json: PointsSelector }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: {
                wait?: boolean | undefined
                ordering?: WriteOrdering | undefined
                timeout?: number | undefined
              }
            } & { json: PointsSelector }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/collections/:collection_name/points/batch': {
      $post:
        | {
            input: { param: { collection_name: string } } & {
              query: {
                wait?: boolean | undefined
                ordering?: WriteOrdering | undefined
                timeout?: number | undefined
              }
            } & { json: UpdateOperations }
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: UpdateResult[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: {
                wait?: boolean | undefined
                ordering?: WriteOrdering | undefined
                timeout?: number | undefined
              }
            } & { json: UpdateOperations }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: {
                wait?: boolean | undefined
                ordering?: WriteOrdering | undefined
                timeout?: number | undefined
              }
            } & { json: UpdateOperations }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/collections/:collection_name/points/scroll': {
      $post:
        | {
            input: { param: { collection_name: string } } & {
              query: { consistency?: ReadConsistency | undefined; timeout?: number | undefined }
            } & { json: ScrollRequest }
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: ScrollResult | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: { consistency?: ReadConsistency | undefined; timeout?: number | undefined }
            } & { json: ScrollRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: { consistency?: ReadConsistency | undefined; timeout?: number | undefined }
            } & { json: ScrollRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/collections/:collection_name/points/count': {
      $post:
        | {
            input: { param: { collection_name: string } } & {
              query: { consistency?: ReadConsistency | undefined; timeout?: number | undefined }
            } & { json: CountRequest }
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: CountResult | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: { consistency?: ReadConsistency | undefined; timeout?: number | undefined }
            } & { json: CountRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: { consistency?: ReadConsistency | undefined; timeout?: number | undefined }
            } & { json: CountRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/collections/:collection_name/facet': {
      $post:
        | {
            input: { param: { collection_name: string } } & {
              query: { consistency?: ReadConsistency | undefined; timeout?: number | undefined }
            } & { json: FacetRequest }
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: FacetResponse | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: { consistency?: ReadConsistency | undefined; timeout?: number | undefined }
            } & { json: FacetRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: { consistency?: ReadConsistency | undefined; timeout?: number | undefined }
            } & { json: FacetRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/collections/:collection_name/points/query': {
      $post:
        | {
            input: { param: { collection_name: string } } & {
              query: { consistency?: ReadConsistency | undefined; timeout?: number | undefined }
            } & { json: QueryRequest }
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: QueryResponse | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: { consistency?: ReadConsistency | undefined; timeout?: number | undefined }
            } & { json: QueryRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: { consistency?: ReadConsistency | undefined; timeout?: number | undefined }
            } & { json: QueryRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/collections/:collection_name/points/query/batch': {
      $post:
        | {
            input: { param: { collection_name: string } } & {
              query: { consistency?: ReadConsistency | undefined; timeout?: number | undefined }
            } & { json: QueryRequestBatch }
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: QueryResponse[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: { consistency?: ReadConsistency | undefined; timeout?: number | undefined }
            } & { json: QueryRequestBatch }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: { consistency?: ReadConsistency | undefined; timeout?: number | undefined }
            } & { json: QueryRequestBatch }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/collections/:collection_name/points/query/groups': {
      $post:
        | {
            input: { param: { collection_name: string } } & {
              query: { consistency?: ReadConsistency | undefined; timeout?: number | undefined }
            } & { json: QueryGroupsRequest }
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: GroupsResult | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: { consistency?: ReadConsistency | undefined; timeout?: number | undefined }
            } & { json: QueryGroupsRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: { consistency?: ReadConsistency | undefined; timeout?: number | undefined }
            } & { json: QueryGroupsRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/collections/:collection_name/points/search/matrix/pairs': {
      $post:
        | {
            input: { param: { collection_name: string } } & {
              query: { consistency?: ReadConsistency | undefined; timeout?: number | undefined }
            } & { json: SearchMatrixRequest }
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: SearchMatrixPairsResponse | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: { consistency?: ReadConsistency | undefined; timeout?: number | undefined }
            } & { json: SearchMatrixRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: { consistency?: ReadConsistency | undefined; timeout?: number | undefined }
            } & { json: SearchMatrixRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/collections/:collection_name/points/search/matrix/offsets': {
      $post:
        | {
            input: { param: { collection_name: string } } & {
              query: { consistency?: ReadConsistency | undefined; timeout?: number | undefined }
            } & { json: SearchMatrixRequest }
            output: {
              usage?: Usage | ({ [x: string]: unknown } | null) | undefined
              time?: number | undefined
              status?: string | undefined
              result?: SearchMatrixOffsetsResponse | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: { consistency?: ReadConsistency | undefined; timeout?: number | undefined }
            } & { json: SearchMatrixRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_name: string } } & {
              query: { consistency?: ReadConsistency | undefined; timeout?: number | undefined }
            } & { json: SearchMatrixRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  },
  '/'
>
export default routes
