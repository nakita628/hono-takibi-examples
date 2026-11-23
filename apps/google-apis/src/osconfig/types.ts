type LookupEffectiveGuestPolicyRequest = {
  osArchitecture?: string | undefined
  osShortName?: string | undefined
  osVersion?: string | undefined
}
type AptRepository = {
  archiveType?: 'ARCHIVE_TYPE_UNSPECIFIED' | 'DEB' | 'DEB_SRC' | undefined
  components?: string[] | undefined
  distribution?: string | undefined
  gpgKey?: string | undefined
  uri?: string | undefined
}
type GooRepository = { name?: string | undefined; url?: string | undefined }
type YumRepository = {
  baseUrl?: string | undefined
  displayName?: string | undefined
  gpgKeys?: string[] | undefined
  id?: string | undefined
}
type ZypperRepository = {
  baseUrl?: string | undefined
  displayName?: string | undefined
  gpgKeys?: string[] | undefined
  id?: string | undefined
}
type PackageRepository = {
  apt?: AptRepository | undefined
  goo?: GooRepository | undefined
  yum?: YumRepository | undefined
  zypper?: ZypperRepository | undefined
}
type EffectiveGuestPolicySourcedPackageRepository = {
  packageRepository?: PackageRepository | undefined
  source?: string | undefined
}
type Package = {
  desiredState?: 'DESIRED_STATE_UNSPECIFIED' | 'INSTALLED' | 'UPDATED' | 'REMOVED' | undefined
  manager?: 'MANAGER_UNSPECIFIED' | 'ANY' | 'APT' | 'YUM' | 'ZYPPER' | 'GOO' | undefined
  name?: string | undefined
}
type EffectiveGuestPolicySourcedPackage = {
  package?: Package | undefined
  source?: string | undefined
}
type SoftwareRecipeArtifactGcs = {
  bucket?: string | undefined
  generation?: string | undefined
  object?: string | undefined
}
type SoftwareRecipeArtifactRemote = { checksum?: string | undefined; uri?: string | undefined }
type SoftwareRecipeArtifact = {
  allowInsecure?: boolean | undefined
  gcs?: SoftwareRecipeArtifactGcs | undefined
  id?: string | undefined
  remote?: SoftwareRecipeArtifactRemote | undefined
}
type SoftwareRecipeStepExtractArchive = {
  artifactId?: string | undefined
  destination?: string | undefined
  type?:
    | 'ARCHIVE_TYPE_UNSPECIFIED'
    | 'TAR'
    | 'TAR_GZIP'
    | 'TAR_BZIP'
    | 'TAR_LZMA'
    | 'TAR_XZ'
    | 'ZIP'
    | undefined
}
type SoftwareRecipeStepInstallDpkg = { artifactId?: string | undefined }
type SoftwareRecipeStepCopyFile = {
  artifactId?: string | undefined
  destination?: string | undefined
  overwrite?: boolean | undefined
  permissions?: string | undefined
}
type SoftwareRecipeStepExecFile = {
  allowedExitCodes?: number[] | undefined
  args?: string[] | undefined
  artifactId?: string | undefined
  localPath?: string | undefined
}
type SoftwareRecipeStepInstallMsi = {
  allowedExitCodes?: number[] | undefined
  artifactId?: string | undefined
  flags?: string[] | undefined
}
type SoftwareRecipeStepInstallRpm = { artifactId?: string | undefined }
type SoftwareRecipeStepRunScript = {
  allowedExitCodes?: number[] | undefined
  interpreter?: 'INTERPRETER_UNSPECIFIED' | 'SHELL' | 'POWERSHELL' | undefined
  script?: string | undefined
}
type SoftwareRecipeStep = {
  archiveExtraction?: SoftwareRecipeStepExtractArchive | undefined
  dpkgInstallation?: SoftwareRecipeStepInstallDpkg | undefined
  fileCopy?: SoftwareRecipeStepCopyFile | undefined
  fileExec?: SoftwareRecipeStepExecFile | undefined
  msiInstallation?: SoftwareRecipeStepInstallMsi | undefined
  rpmInstallation?: SoftwareRecipeStepInstallRpm | undefined
  scriptRun?: SoftwareRecipeStepRunScript | undefined
}
type SoftwareRecipe = {
  artifacts?: SoftwareRecipeArtifact[] | undefined
  desiredState?: 'DESIRED_STATE_UNSPECIFIED' | 'INSTALLED' | 'UPDATED' | 'REMOVED' | undefined
  installSteps?: SoftwareRecipeStep[] | undefined
  name?: string | undefined
  updateSteps?: SoftwareRecipeStep[] | undefined
  version?: string | undefined
}
type EffectiveGuestPolicySourcedSoftwareRecipe = {
  softwareRecipe?: SoftwareRecipe | undefined
  source?: string | undefined
}
type EffectiveGuestPolicy = {
  packageRepositories?: EffectiveGuestPolicySourcedPackageRepository[] | undefined
  packages?: EffectiveGuestPolicySourcedPackage[] | undefined
  softwareRecipes?: EffectiveGuestPolicySourcedSoftwareRecipe[] | undefined
}
type Empty = { [x: string]: unknown }
type PatchJobInstanceDetailsSummary = {
  ackedInstanceCount?: string | undefined
  applyingPatchesInstanceCount?: string | undefined
  downloadingPatchesInstanceCount?: string | undefined
  failedInstanceCount?: string | undefined
  inactiveInstanceCount?: string | undefined
  noAgentDetectedInstanceCount?: string | undefined
  notifiedInstanceCount?: string | undefined
  pendingInstanceCount?: string | undefined
  postPatchStepInstanceCount?: string | undefined
  prePatchStepInstanceCount?: string | undefined
  rebootingInstanceCount?: string | undefined
  startedInstanceCount?: string | undefined
  succeededInstanceCount?: string | undefined
  succeededRebootRequiredInstanceCount?: string | undefined
  timedOutInstanceCount?: string | undefined
}
type PatchInstanceFilterGroupLabel = { labels?: { [x: string]: string } | undefined }
type PatchInstanceFilter = {
  all?: boolean | undefined
  groupLabels?: PatchInstanceFilterGroupLabel[] | undefined
  instanceNamePrefixes?: string[] | undefined
  instances?: string[] | undefined
  zones?: string[] | undefined
}
type AptSettings = {
  excludes?: string[] | undefined
  exclusivePackages?: string[] | undefined
  type?: 'TYPE_UNSPECIFIED' | 'DIST' | 'UPGRADE' | undefined
}
type GooSettings = { [x: string]: unknown }
type GcsObject = {
  bucket?: string | undefined
  generationNumber?: string | undefined
  object?: string | undefined
}
type ExecStepConfig = {
  allowedSuccessCodes?: number[] | undefined
  gcsObject?: GcsObject | undefined
  interpreter?: 'INTERPRETER_UNSPECIFIED' | 'NONE' | 'SHELL' | 'POWERSHELL' | undefined
  localPath?: string | undefined
}
type ExecStep = {
  linuxExecStepConfig?: ExecStepConfig | undefined
  windowsExecStepConfig?: ExecStepConfig | undefined
}
type WindowsUpdateSettings = {
  classifications?:
    | (
        | 'CLASSIFICATION_UNSPECIFIED'
        | 'CRITICAL'
        | 'SECURITY'
        | 'DEFINITION'
        | 'DRIVER'
        | 'FEATURE_PACK'
        | 'SERVICE_PACK'
        | 'TOOL'
        | 'UPDATE_ROLLUP'
        | 'UPDATE'
      )[]
    | undefined
  excludes?: string[] | undefined
  exclusivePatches?: string[] | undefined
}
type YumSettings = {
  excludes?: string[] | undefined
  exclusivePackages?: string[] | undefined
  minimal?: boolean | undefined
  security?: boolean | undefined
}
type ZypperSettings = {
  categories?: string[] | undefined
  excludes?: string[] | undefined
  exclusivePatches?: string[] | undefined
  severities?: string[] | undefined
  withOptional?: boolean | undefined
  withUpdate?: boolean | undefined
}
type PatchConfig = {
  apt?: AptSettings | undefined
  goo?: GooSettings | undefined
  migInstancesAllowed?: boolean | undefined
  postStep?: ExecStep | undefined
  preStep?: ExecStep | undefined
  rebootConfig?: 'REBOOT_CONFIG_UNSPECIFIED' | 'DEFAULT' | 'ALWAYS' | 'NEVER' | undefined
  windowsUpdate?: WindowsUpdateSettings | undefined
  yum?: YumSettings | undefined
  zypper?: ZypperSettings | undefined
}
type FixedOrPercent = { fixed?: number | undefined; percent?: number | undefined }
type PatchRollout = {
  disruptionBudget?: FixedOrPercent | undefined
  mode?: 'MODE_UNSPECIFIED' | 'ZONE_BY_ZONE' | 'CONCURRENT_ZONES' | undefined
}
type PatchJob = {
  createTime?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  dryRun?: boolean | undefined
  duration?: string | undefined
  errorMessage?: string | undefined
  instanceDetailsSummary?: PatchJobInstanceDetailsSummary | undefined
  instanceFilter?: PatchInstanceFilter | undefined
  name?: string | undefined
  patchConfig?: PatchConfig | undefined
  patchDeployment?: string | undefined
  percentComplete?: number | undefined
  rollout?: PatchRollout | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'STARTED'
    | 'INSTANCE_LOOKUP'
    | 'PATCHING'
    | 'SUCCEEDED'
    | 'COMPLETED_WITH_ERRORS'
    | 'CANCELED'
    | 'TIMED_OUT'
    | undefined
  updateTime?: string | undefined
}
type OneTimeSchedule = { executeTime?: string | undefined }
type WeekDayOfMonth = {
  dayOfWeek?:
    | 'DAY_OF_WEEK_UNSPECIFIED'
    | 'MONDAY'
    | 'TUESDAY'
    | 'WEDNESDAY'
    | 'THURSDAY'
    | 'FRIDAY'
    | 'SATURDAY'
    | 'SUNDAY'
    | undefined
  dayOffset?: number | undefined
  weekOrdinal?: number | undefined
}
type MonthlySchedule = {
  monthDay?: number | undefined
  weekDayOfMonth?: WeekDayOfMonth | undefined
}
type TimeOfDay = {
  hours?: number | undefined
  minutes?: number | undefined
  nanos?: number | undefined
  seconds?: number | undefined
}
type TimeZone = { id?: string | undefined; version?: string | undefined }
type WeeklySchedule = {
  dayOfWeek?:
    | 'DAY_OF_WEEK_UNSPECIFIED'
    | 'MONDAY'
    | 'TUESDAY'
    | 'WEDNESDAY'
    | 'THURSDAY'
    | 'FRIDAY'
    | 'SATURDAY'
    | 'SUNDAY'
    | undefined
}
type RecurringSchedule = {
  endTime?: string | undefined
  frequency?: 'FREQUENCY_UNSPECIFIED' | 'WEEKLY' | 'MONTHLY' | 'DAILY' | undefined
  lastExecuteTime?: string | undefined
  monthly?: MonthlySchedule | undefined
  nextExecuteTime?: string | undefined
  startTime?: string | undefined
  timeOfDay?: TimeOfDay | undefined
  timeZone?: TimeZone | undefined
  weekly?: WeeklySchedule | undefined
}
type PatchDeployment = {
  createTime?: string | undefined
  description?: string | undefined
  duration?: string | undefined
  instanceFilter?: PatchInstanceFilter | undefined
  lastExecuteTime?: string | undefined
  name?: string | undefined
  oneTimeSchedule?: OneTimeSchedule | undefined
  patchConfig?: PatchConfig | undefined
  recurringSchedule?: RecurringSchedule | undefined
  rollout?: PatchRollout | undefined
  state?: 'STATE_UNSPECIFIED' | 'ACTIVE' | 'PAUSED' | undefined
  updateTime?: string | undefined
}
type CancelPatchJobRequest = { [x: string]: unknown }
type PausePatchDeploymentRequest = { [x: string]: unknown }
type ResumePatchDeploymentRequest = { [x: string]: unknown }
type AssignmentGroupLabel = { labels?: { [x: string]: string } | undefined }
type AssignmentOsType = {
  osArchitecture?: string | undefined
  osShortName?: string | undefined
  osVersion?: string | undefined
}
type Assignment = {
  groupLabels?: AssignmentGroupLabel[] | undefined
  instanceNamePrefixes?: string[] | undefined
  instances?: string[] | undefined
  osTypes?: AssignmentOsType[] | undefined
  zones?: string[] | undefined
}
type GuestPolicy = {
  assignment?: Assignment | undefined
  createTime?: string | undefined
  description?: string | undefined
  etag?: string | undefined
  name?: string | undefined
  packageRepositories?: PackageRepository[] | undefined
  packages?: Package[] | undefined
  recipes?: SoftwareRecipe[] | undefined
  updateTime?: string | undefined
}
type ListGuestPoliciesResponse = {
  guestPolicies?: GuestPolicy[] | undefined
  nextPageToken?: string | undefined
}
type PatchJobInstanceDetails = {
  attemptCount?: string | undefined
  failureReason?: string | undefined
  instanceSystemId?: string | undefined
  name?: string | undefined
  state?:
    | 'PATCH_STATE_UNSPECIFIED'
    | 'PENDING'
    | 'INACTIVE'
    | 'NOTIFIED'
    | 'STARTED'
    | 'DOWNLOADING_PATCHES'
    | 'APPLYING_PATCHES'
    | 'REBOOTING'
    | 'SUCCEEDED'
    | 'SUCCEEDED_REBOOT_REQUIRED'
    | 'FAILED'
    | 'ACKED'
    | 'TIMED_OUT'
    | 'RUNNING_PRE_PATCH_STEP'
    | 'RUNNING_POST_PATCH_STEP'
    | 'NO_AGENT_DETECTED'
    | undefined
}
type ListPatchJobInstanceDetailsResponse = {
  nextPageToken?: string | undefined
  patchJobInstanceDetails?: PatchJobInstanceDetails[] | undefined
}
type ListPatchDeploymentsResponse = {
  nextPageToken?: string | undefined
  patchDeployments?: PatchDeployment[] | undefined
}
type ListPatchJobsResponse = {
  nextPageToken?: string | undefined
  patchJobs?: PatchJob[] | undefined
}
type ExecutePatchJobRequest = {
  description?: string | undefined
  displayName?: string | undefined
  dryRun?: boolean | undefined
  duration?: string | undefined
  instanceFilter?: PatchInstanceFilter | undefined
  patchConfig?: PatchConfig | undefined
  rollout?: PatchRollout | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta/:instance:lookupEffectiveGuestPolicy': {
      $post: {
        input: { param: { instance: string } } & {
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
        } & { json: LookupEffectiveGuestPolicyRequest }
        output: EffectiveGuestPolicy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:name': {
      $delete: {
        input: { param: { name: string } } & {
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
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
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
        }
        output: PatchJob
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            updateMask?: string | undefined
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
        } & { json: PatchDeployment }
        output: PatchDeployment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:name:cancel': {
      $post: {
        input: { param: { name: string } } & {
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
        } & { json: CancelPatchJobRequest }
        output: PatchJob
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:name:pause': {
      $post: {
        input: { param: { name: string } } & {
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
        } & { json: PausePatchDeploymentRequest }
        output: PatchDeployment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:name:resume': {
      $post: {
        input: { param: { name: string } } & {
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
        } & { json: ResumePatchDeploymentRequest }
        output: PatchDeployment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:parent/guestPolicies': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
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
        }
        output: ListGuestPoliciesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            guestPolicyId?: string | undefined
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
        } & { json: GuestPolicy }
        output: GuestPolicy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:parent/instanceDetails': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
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
        }
        output: ListPatchJobInstanceDetailsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:parent/patchDeployments': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
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
        }
        output: ListPatchDeploymentsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            patchDeploymentId?: string | undefined
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
        } & { json: PatchDeployment }
        output: PatchDeployment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:parent/patchJobs': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
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
        }
        output: ListPatchJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:parent/patchJobs:execute': {
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: ExecutePatchJobRequest }
        output: PatchJob
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
