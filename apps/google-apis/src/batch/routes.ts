import { createRoute, z } from '@hono/zod-openapi'

const AcceleratorSchema = z
  .object({
    count: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of accelerators of this type.' }),
    installGpuDrivers: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Deprecated: please use instances[0].install_gpu_drivers instead.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The accelerator type. For example, "nvidia-tesla-t4". See `gcloud compute accelerator-types list`.',
      }),
  })
  .openapi({
    description: 'Accelerator describes Compute Engine accelerators to be attached to the VM.',
    required: [],
  })
  .openapi('Accelerator')

const ActionConditionSchema = z
  .object({
    exitCodes: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'Exit codes of a task execution. If there are more than 1 exit codes, when task executes with any of the exit code in the list, the condition is met and the action will be executed.',
      }),
  })
  .openapi({ description: 'Conditions for actions to deal with task failures.', required: [] })
  .openapi('ActionCondition')

const TaskExecutionSchema = z
  .object({
    exitCode: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'When task is completed as the status of FAILED or SUCCEEDED, exit code is for one task execution result, default is 0 as success.',
      }),
  })
  .openapi({
    description:
      'This Task Execution field includes detail information for task execution procedures, based on StatusEvent types.',
    required: [],
  })
  .openapi('TaskExecution')

const StatusEventSchema = z
  .object({
    description: z.string().exactOptional().openapi({ description: 'Description of the event.' }),
    eventTime: z.string().exactOptional().openapi({ description: 'The time this event occurred.' }),
    taskExecution: TaskExecutionSchema.exactOptional().openapi({ description: 'Task Execution' }),
    taskState: z
      .enum([
        'STATE_UNSPECIFIED',
        'PENDING',
        'ASSIGNED',
        'RUNNING',
        'FAILED',
        'SUCCEEDED',
        'UNEXECUTED',
      ])
      .exactOptional()
      .openapi({ description: 'Task State' }),
    type: z.string().exactOptional().openapi({ description: 'Type of the event.' }),
  })
  .openapi({ description: 'Status event', required: [] })
  .openapi('StatusEvent')

const TaskStatusSchema = z
  .object({
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'PENDING',
        'ASSIGNED',
        'RUNNING',
        'FAILED',
        'SUCCEEDED',
        'UNEXECUTED',
      ])
      .exactOptional()
      .openapi({ description: 'Task state' }),
    statusEvents: z
      .array(StatusEventSchema)
      .exactOptional()
      .openapi({ description: 'Detailed info about why the state is reached.' }),
  })
  .openapi({ description: 'Status of a task', required: [] })
  .openapi('TaskStatus')

const AgentTaskInfoSchema = z
  .object({
    runnable: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The highest index of a runnable started by the agent for this task. The runnables are indexed from 1. Value 0 is undefined.',
      }),
    taskId: z.string().exactOptional().openapi({ description: 'ID of the Task' }),
    taskStatus: TaskStatusSchema.exactOptional().openapi({
      description:
        'The status of the Task. If we need agent specific fields we should fork the public TaskStatus into an agent specific one. Or add them below.',
    }),
  })
  .openapi({ description: 'Task Info', required: [] })
  .openapi('AgentTaskInfo')

const AgentInfoSchema = z
  .object({
    jobId: z.string().exactOptional().openapi({ description: 'The assigned Job ID' }),
    reportTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'When the AgentInfo is generated.' }),
    state: z
      .enum(['AGENT_STATE_UNSPECIFIED', 'AGENT_STARTING', 'AGENT_RUNNING', 'AGENT_STOPPED'])
      .exactOptional()
      .openapi({ description: 'Agent state.' }),
    taskGroupId: z.string().exactOptional().openapi({ description: 'The assigned task group ID.' }),
    tasks: z.array(AgentTaskInfoSchema).exactOptional().openapi({ description: 'Task Info.' }),
  })
  .openapi({ description: 'VM Agent Info.', required: [] })
  .openapi('AgentInfo')

const AgentMetadataSchema = z
  .object({
    creationTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'When the VM agent started. Use agent_startup_time instead.' }),
    creator: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Full name of the entity that created this vm. For MIG, this path is: projects/{project}/regions/{region}/InstanceGroupManagers/{igm} The value is retrieved from the vm metadata key of "created-by".',
      }),
    imageVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'image version for the VM that this agent is installed on.' }),
    instance: z
      .string()
      .exactOptional()
      .openapi({ description: 'GCP instance name (go/instance-name).' }),
    instanceId: z
      .string()
      .exactOptional()
      .openapi({ description: 'GCP instance ID (go/instance-id).' }),
    instancePreemptionNoticeReceived: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If the GCP instance has received preemption notice.' }),
    osRelease: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'parsed contents of /etc/os-release' }),
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'agent binary version running on VM' }),
    zone: z.string().exactOptional().openapi({ description: 'Agent zone.' }),
  })
  .openapi({ description: 'VM Agent Metadata.', required: [] })
  .openapi('AgentMetadata')

const ComputeResourceSchema = z
  .object({
    bootDiskMib: z
      .string()
      .exactOptional()
      .openapi({ description: 'Extra boot disk size in MiB for each task.' }),
    cpuMilli: z.string().exactOptional().openapi({ description: 'The milliCPU count.' }),
    memoryMib: z.string().exactOptional().openapi({ description: 'Memory in MiB.' }),
  })
  .openapi({ description: 'Compute resource requirements', required: [] })
  .openapi('ComputeResource')

const KMSEnvMapSchema = z
  .object({
    cipherText: z
      .string()
      .exactOptional()
      .openapi({ description: 'The value of the cipherText response from the `encrypt` method.' }),
    keyName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the KMS key that will be used to decrypt the cipher text.',
      }),
  })
  .openapi({ required: [] })
  .openapi('KMSEnvMap')

const EnvironmentSchema = z
  .object({
    encryptedVariables: KMSEnvMapSchema.exactOptional().openapi({
      description:
        'An encrypted JSON dictionary where the key/value pairs correspond to environment variable names and their values.',
    }),
    secretVariables: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'A map of environment variable names to Secret Manager secret names. The VM will access the named secrets to set the value of each environment variable.',
      }),
    variables: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'A map of environment variable names to values.' }),
  })
  .openapi({
    description:
      'An Environment describes a collection of environment variables to set when executing Tasks.',
    required: [],
  })
  .openapi('Environment')

const LifecyclePolicySchema = z
  .object({
    action: z
      .enum(['ACTION_UNSPECIFIED', 'RETRY_TASK', 'FAIL_TASK'])
      .exactOptional()
      .openapi({
        description:
          'Action to execute when ActionCondition is true. When RETRY_TASK is specified, we will retry failed tasks if we notice any exit code match and fail tasks if no match is found. Likewise, when FAIL_TASK is specified, we will fail tasks if we notice any exit code match and retry tasks if no match is found.',
      }),
    actionCondition: ActionConditionSchema.exactOptional().openapi({
      description: 'Conditions that decide why a task failure is dealt with a specific action.',
    }),
  })
  .openapi({
    description:
      'LifecyclePolicy describes how to deal with task failures based on different conditions.',
    required: [],
  })
  .openapi('LifecyclePolicy')

const BarrierSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Barriers are identified by their index in runnable list. Names are not required, but if present should be an identifier.',
      }),
  })
  .openapi({
    description: 'Barrier runnable blocks until all tasks in a taskgroup reach it.',
    required: [],
  })
  .openapi('Barrier')

const ContainerSchema = z
  .object({
    blockExternalNetwork: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set to true, external network access to and from container will be blocked, containers that are with block_external_network as true can still communicate with each other, network cannot be specified in the `container.options` field.',
      }),
    commands: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Overrides the `CMD` specified in the container. If there is an ENTRYPOINT (either in the container image or with the entrypoint field below) then commands are appended as arguments to the ENTRYPOINT.',
      }),
    entrypoint: z
      .string()
      .exactOptional()
      .openapi({ description: 'Overrides the `ENTRYPOINT` specified in the container.' }),
    imageUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URI to pull the container image from.' }),
    options: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Arbitrary additional options to include in the "docker run" command when running this container, e.g. "--network host".',
      }),
    password: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional password for logging in to a docker registry. If password matches `projects/*/secrets/*/versions/*` then Batch will read the password from the Secret Manager;',
      }),
    username: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional username for logging in to a docker registry. If username matches `projects/*/secrets/*/versions/*` then Batch will read the username from the Secret Manager.',
      }),
    volumes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "Volumes to mount (bind mount) from the host machine files or directories into the container, formatted to match docker run's --volume option, e.g. /foo:/bar, or /foo:/bar:ro",
      }),
  })
  .openapi({ description: 'Container runnable.', required: [] })
  .openapi('Container')

const ScriptSchema = z
  .object({
    path: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Script file path on the host VM. To specify an interpreter, please add a `#!`(also known as [shebang line](https://en.wikipedia.org/wiki/Shebang_(Unix))) as the first line of the file.(For example, to execute the script using bash, `#!/bin/bash` should be the first line of the file. To execute the script using`Python3`, `#!/usr/bin/env python3` should be the first line of the file.) Otherwise, the file will by default be excuted by `/bin/sh`.',
      }),
    text: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Shell script text. To specify an interpreter, please add a `#!\\n` at the beginning of the text.(For example, to execute the script using bash, `#!/bin/bash\\n` should be added. To execute the script using`Python3`, `#!/usr/bin/env python3\\n` should be added.) Otherwise, the script will by default be excuted by `/bin/sh`.',
      }),
  })
  .openapi({ description: 'Script runnable.', required: [] })
  .openapi('Script')

const RunnableSchema = z
  .object({
    alwaysRun: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "By default, after a Runnable fails, no further Runnable are executed. This flag indicates that this Runnable must be run even if the Task has already failed. This is useful for Runnables that copy output files off of the VM or for debugging. The always_run flag does not override the Task's overall max_run_duration. If the max_run_duration has expired then no further Runnables will execute, not even always_run Runnables.",
      }),
    background: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'This flag allows a Runnable to continue running in the background while the Task executes subsequent Runnables. This is useful to provide services to other Runnables (or to provide debugging support tools like SSH servers).',
      }),
    barrier: BarrierSchema.exactOptional().openapi({ description: 'Barrier runnable.' }),
    container: ContainerSchema.exactOptional().openapi({ description: 'Container runnable.' }),
    environment: EnvironmentSchema.exactOptional().openapi({
      description:
        'Environment variables for this Runnable (overrides variables set for the whole Task or TaskGroup).',
    }),
    ignoreExitStatus: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Normally, a non-zero exit status causes the Task to fail. This flag allows execution of other Runnables to continue instead.',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Labels for this Runnable.' }),
    script: ScriptSchema.exactOptional().openapi({ description: 'Script runnable.' }),
    timeout: z.string().exactOptional().openapi({ description: 'Timeout for this Runnable.' }),
  })
  .openapi({
    description:
      'Runnable describes instructions for executing a specific script or container as part of a Task.',
    required: [],
  })
  .openapi('Runnable')

const GCSSchema = z
  .object({
    remotePath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Remote path, either a bucket name or a subdirectory of a bucket, e.g.: bucket_name, bucket_name/subdirectory/',
      }),
  })
  .openapi({ description: 'Represents a Google Cloud Storage volume.', required: [] })
  .openapi('GCS')

const NFSSchema = z
  .object({
    remotePath: z
      .string()
      .exactOptional()
      .openapi({ description: 'Remote source path exported from the NFS, e.g., "/share".' }),
    server: z.string().exactOptional().openapi({ description: 'The IP address of the NFS.' }),
  })
  .openapi({ description: 'Represents an NFS volume.', required: [] })
  .openapi('NFS')

const VolumeSchema = z
  .object({
    deviceName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Device name of an attached disk volume, which should align with a device_name specified by job.allocation_policy.instances[0].policy.disks[i].device_name or defined by the given instance template in job.allocation_policy.instances[0].instance_template.',
      }),
    gcs: GCSSchema.exactOptional().openapi({ description: 'A Google Cloud Storage (GCS) volume.' }),
    mountOptions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'For Google Cloud Storage (GCS), mount options are the options supported by the gcsfuse tool (https://github.com/GoogleCloudPlatform/gcsfuse). For existing persistent disks, mount options provided by the mount command (https://man7.org/linux/man-pages/man8/mount.8.html) except writing are supported. This is due to restrictions of multi-writer mode (https://cloud.google.com/compute/docs/disks/sharing-disks-between-vms). For other attached disks and Network File System (NFS), mount options are these supported by the mount command (https://man7.org/linux/man-pages/man8/mount.8.html).',
      }),
    mountPath: z
      .string()
      .exactOptional()
      .openapi({ description: 'The mount path for the volume, e.g. /mnt/disks/share.' }),
    nfs: NFSSchema.exactOptional().openapi({
      description: 'A Network File System (NFS) volume. For example, a Filestore file share.',
    }),
  })
  .openapi({
    description: 'Volume describes a volume and parameters for it to be mounted to a VM.',
    required: [],
  })
  .openapi('Volume')

const TaskSpecSchema = z
  .object({
    computeResource: ComputeResourceSchema.exactOptional().openapi({
      description: 'ComputeResource requirements.',
    }),
    environment: EnvironmentSchema.exactOptional().openapi({
      description: 'Environment variables to set before running the Task.',
    }),
    environments: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Deprecated: please use environment(non-plural) instead.' }),
    lifecyclePolicies: z
      .array(LifecyclePolicySchema)
      .exactOptional()
      .openapi({
        description:
          'Lifecycle management schema when any task in a task group is failed. Currently we only support one lifecycle policy. When the lifecycle policy condition is met, the action in the policy will execute. If task execution result does not meet with the defined lifecycle policy, we consider it as the default policy. Default policy means if the exit code is 0, exit task. If task ends with non-zero exit code, retry the task with max_retry_count.',
      }),
    maxRetryCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Maximum number of retries on failures. The default, 0, which means never retry. The valid value range is [0, 10].',
      }),
    maxRunDuration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Maximum duration the task should run. The task will be killed and marked as FAILED if over this limit.',
      }),
    runnables: z
      .array(RunnableSchema)
      .exactOptional()
      .openapi({
        description:
          'The sequence of scripts or containers to run for this Task. Each Task using this TaskSpec executes its list of runnables in order. The Task succeeds if all of its runnables either exit with a zero status or any that exit with a non-zero status have the ignore_exit_status flag. Background runnables are killed automatically (if they have not already exited) a short time after all foreground runnables have completed. Even though this is likely to result in a non-zero exit status for the background runnable, these automatic kills are not treated as Task failures.',
      }),
    volumes: z
      .array(VolumeSchema)
      .exactOptional()
      .openapi({ description: 'Volumes to mount before running Tasks using this TaskSpec.' }),
  })
  .openapi({ description: 'Spec of a task', required: [] })
  .openapi('TaskSpec')

const AgentTaskSchema = z
  .object({
    intendedState: z
      .enum(['INTENDED_STATE_UNSPECIFIED', 'ASSIGNED', 'CANCELLED', 'DELETED'])
      .exactOptional()
      .openapi({ description: 'The intended state of the task.' }),
    reachedBarrier: z
      .string()
      .exactOptional()
      .openapi({
        description: "The highest barrier reached by all tasks in the task's TaskGroup.",
      }),
    spec: TaskSpecSchema.exactOptional().openapi({ description: 'Task Spec.' }),
    status: TaskStatusSchema.exactOptional().openapi({ description: 'Task status.' }),
    task: z.string().exactOptional().openapi({ description: 'Task name.' }),
    taskSource: z
      .enum(['TASK_SOURCE_UNSPECIFIED', 'BATCH_INTERNAL', 'USER'])
      .exactOptional()
      .openapi({ description: 'TaskSource represents the source of the task.' }),
  })
  .openapi({
    description:
      'TODO(b/182501497) The message needs to be redefined when the Agent API server updates data in storage per the backend design.',
    required: [],
  })
  .openapi('AgentTask')

const AgentTimingInfoSchema = z
  .object({
    agentStartupTime: z.string().exactOptional().openapi({ description: 'Agent startup time' }),
    bootTime: z.string().exactOptional().openapi({ description: 'Boot timestamp of the VM OS' }),
    scriptStartupTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Startup time of the Batch VM script.' }),
  })
  .openapi({ description: 'VM timing information', required: [] })
  .openapi('AgentTimingInfo')

const DiskSchema = z
  .object({
    diskInterface: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Local SSDs are available through both "SCSI" and "NVMe" interfaces. If not indicated, "NVMe" will be the default one for local ssds. We only support "SCSI" for persistent disks now.',
      }),
    image: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of a public or custom image used as the data source. For example, the following are all valid URLs: * Specify the image by its family name: projects/{project}/global/images/family/{image_family} * Specify the image version: projects/{project}/global/images/{image_version} You can also use Batch customized image in short names. The following image values are supported for a boot disk: * "batch-debian": use Batch Debian images. * "batch-centos": use Batch CentOS images. * "batch-cos": use Batch Container-Optimized images.',
      }),
    sizeGb: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Disk size in GB. For persistent disk, this field is ignored if `data_source` is `image` or `snapshot`. For local SSD, size_gb should be a multiple of 375GB, otherwise, the final size will be the next greater multiple of 375 GB. For boot disk, Batch will calculate the boot disk size based on source image and task requirements if you do not speicify the size. If both this field and the boot_disk_mib field in task spec's compute_resource are defined, Batch will only honor this field.",
      }),
    snapshot: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of a snapshot used as the data source. Snapshot is not supported as boot disk now.',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Disk type as shown in `gcloud compute disk-types list`. For example, local SSD uses type "local-ssd". Persistent disks and boot disks use "pd-balanced", "pd-extreme", "pd-ssd" or "pd-standard".',
      }),
  })
  .openapi({
    description:
      'A new persistent disk or a local ssd. A VM can only have one local SSD setting but multiple local SSD partitions. See https://cloud.google.com/compute/docs/disks#pdspecs and https://cloud.google.com/compute/docs/disks#localssds.',
    required: [],
  })
  .openapi('Disk')

const AttachedDiskSchema = z
  .object({
    deviceName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Device name that the guest operating system will see. It is used by Runnable.volumes field to mount disks. So please specify the device_name if you want Batch to help mount the disk, and it should match the device_name field in volumes.',
      }),
    existingDisk: z.string().exactOptional().openapi({ description: 'Name of an existing PD.' }),
    newDisk: DiskSchema.exactOptional(),
  })
  .openapi({
    description:
      'A new or an existing persistent disk (PD) or a local ssd attached to a VM instance.',
    required: [],
  })
  .openapi('AttachedDisk')

const InstancePolicySchema = z
  .object({
    accelerators: z
      .array(AcceleratorSchema)
      .exactOptional()
      .openapi({ description: 'The accelerators attached to each VM instance.' }),
    bootDisk: DiskSchema.exactOptional().openapi({
      description:
        'Boot disk to be created and attached to each VM by this InstancePolicy. Boot disk will be deleted when the VM is deleted. Batch API now only supports booting from image.',
    }),
    disks: z
      .array(AttachedDiskSchema)
      .exactOptional()
      .openapi({
        description:
          'Non-boot disks to be attached for each VM created by this InstancePolicy. New disks will be deleted when the VM is deleted.',
      }),
    machineType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Compute Engine machine type.' }),
    minCpuPlatform: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The minimum CPU platform. See https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform. Not yet implemented.',
      }),
    provisioningModel: z
      .enum(['PROVISIONING_MODEL_UNSPECIFIED', 'STANDARD', 'SPOT', 'PREEMPTIBLE'])
      .exactOptional()
      .openapi({ description: 'The provisioning model.' }),
  })
  .openapi({
    description:
      'InstancePolicy describes an instance type and resources attached to each VM created by this InstancePolicy.',
    required: [],
  })
  .openapi('InstancePolicy')

const InstancePolicyOrTemplateSchema = z
  .object({
    installGpuDrivers: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Set this field true if users want Batch to help fetch drivers from a third party location and install them for GPUs specified in policy.accelerators or instance_template on their behalf. Default is false.',
      }),
    instanceTemplate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Name of an instance template used to create VMs. Named the field as 'instance_template' instead of 'template' to avoid c++ keyword conflict.",
      }),
    policy: InstancePolicySchema.exactOptional().openapi({ description: 'InstancePolicy.' }),
  })
  .openapi({ description: 'Either an InstancePolicy or an instance template.', required: [] })
  .openapi('InstancePolicyOrTemplate')

const LocationPolicySchema = z
  .object({
    allowedLocations: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of allowed location names represented by internal URLs. Each location can be a region or a zone. Only one region or multiple zones in one region is supported now. For example, ["regions/us-central1"] allow VMs in any zones in region us-central1. ["zones/us-central1-a", "zones/us-central1-c"] only allow VMs in zones us-central1-a and us-central1-c. All locations end up in different regions would cause errors. For example, ["regions/us-central1", "zones/us-central1-a", "zones/us-central1-b", "zones/us-west1-a"] contains 2 regions "us-central1" and "us-west1". An error is expected in this case.',
      }),
  })
  .openapi({ required: [] })
  .openapi('LocationPolicy')

const NetworkInterfaceSchema = z
  .object({
    network: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL of an existing network resource. You can specify the network as a full or partial URL. For example, the following are all valid URLs: * https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network} * projects/{project}/global/networks/{network} * global/networks/{network}',
      }),
    noExternalIpAddress: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Default is false (with an external IP address). Required if no external public IP address is attached to the VM. If no external public IP address, additional configuration is required to allow the VM to access Google Services. See https://cloud.google.com/vpc/docs/configure-private-google-access and https://cloud.google.com/nat/docs/gce-example#create-nat for more information.',
      }),
    subnetwork: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL of an existing subnetwork resource in the network. You can specify the subnetwork as a full or partial URL. For example, the following are all valid URLs: * https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/subnetworks/{subnetwork} * projects/{project}/regions/{region}/subnetworks/{subnetwork} * regions/{region}/subnetworks/{subnetwork}',
      }),
  })
  .openapi({ description: 'A network interface.', required: [] })
  .openapi('NetworkInterface')

const NetworkPolicySchema = z
  .object({
    networkInterfaces: z
      .array(NetworkInterfaceSchema)
      .exactOptional()
      .openapi({ description: 'Network configurations.' }),
  })
  .openapi({
    description: 'NetworkPolicy describes VM instance network configurations.',
    required: [],
  })
  .openapi('NetworkPolicy')

const PlacementPolicySchema = z
  .object({
    collocation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'UNSPECIFIED vs. COLLOCATED (default UNSPECIFIED). Use COLLOCATED when you want VMs to be located close to each other for low network latency between the VMs. No placement policy will be generated when collocation is UNSPECIFIED.',
      }),
    maxDistance: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'When specified, causes the job to fail if more than max_distance logical switches are required between VMs. Batch uses the most compact possible placement of VMs even when max_distance is not specified. An explicit max_distance makes that level of compactness a strict requirement. Not yet implemented',
      }),
  })
  .openapi({
    description:
      'PlacementPolicy describes a group placement policy for the VMs controlled by this AllocationPolicy.',
    required: [],
  })
  .openapi('PlacementPolicy')

const ServiceAccountSchema = z
  .object({
    email: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Email address of the service account. If not specified, the default Compute Engine service account for the project will be used. If instance template is being used, the service account has to be specified in the instance template and it has to match the email field here.',
      }),
    scopes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of scopes to be enabled for this service account on the VM, in addition to the cloud-platform API scope that will be added by default.',
      }),
  })
  .openapi({
    description: 'Carries information about a Google Cloud service account.',
    required: [],
  })
  .openapi('ServiceAccount')

const AllocationPolicySchema = z
  .object({
    instances: z
      .array(InstancePolicyOrTemplateSchema)
      .exactOptional()
      .openapi({
        description:
          'Describe instances that can be created by this AllocationPolicy. Only instances[0] is supported now.',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Labels applied to all VM instances and other resources created by AllocationPolicy. Labels could be user provided or system generated. You can assign up to 64 labels. [Google Compute Engine label restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions) apply. Label names that start with "goog-" or "google-" are reserved.',
      }),
    location: LocationPolicySchema.exactOptional().openapi({
      description: 'Location where compute resources should be allocated for the Job.',
    }),
    network: NetworkPolicySchema.exactOptional().openapi({ description: 'The network policy.' }),
    placement: PlacementPolicySchema.exactOptional().openapi({
      description: 'The placement policy.',
    }),
    serviceAccount: ServiceAccountSchema.exactOptional().openapi({
      description: 'Service account that VMs will run as.',
    }),
  })
  .openapi({
    description:
      "A Job's resource allocation policy describes when, where, and how compute resources should be allocated for the Job.",
    required: [],
  })
  .openapi('AllocationPolicy')

const CancelOperationRequestSchema = z
  .object({})
  .openapi({ description: 'The request message for Operations.CancelOperation.' })
  .openapi('CancelOperationRequest')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const InstanceStatusSchema = z
  .object({
    bootDisk: DiskSchema.exactOptional().openapi({ description: 'The VM boot disk.' }),
    machineType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Compute Engine machine type.' }),
    provisioningModel: z
      .enum(['PROVISIONING_MODEL_UNSPECIFIED', 'STANDARD', 'SPOT', 'PREEMPTIBLE'])
      .exactOptional()
      .openapi({ description: 'The VM instance provisioning model.' }),
    taskPack: z
      .string()
      .exactOptional()
      .openapi({ description: 'The max number of tasks can be assigned to this instance type.' }),
  })
  .openapi({ description: 'VM instance status.', required: [] })
  .openapi('InstanceStatus')

const LogsPolicySchema = z
  .object({
    destination: z
      .enum(['DESTINATION_UNSPECIFIED', 'CLOUD_LOGGING', 'PATH'])
      .exactOptional()
      .openapi({ description: 'Where logs should be saved.' }),
    logsPath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The path to which logs are saved when the destination = PATH. This can be a local file path on the VM, or under the mount point of a Persistent Disk or Filestore, or a Cloud Storage path.',
      }),
  })
  .openapi({
    description:
      "LogsPolicy describes how outputs from a Job's Tasks (stdout/stderr) will be preserved.",
    required: [],
  })
  .openapi('LogsPolicy')

const MessageSchema = z
  .object({
    newJobState: z
      .enum([
        'STATE_UNSPECIFIED',
        'QUEUED',
        'SCHEDULED',
        'RUNNING',
        'SUCCEEDED',
        'FAILED',
        'DELETION_IN_PROGRESS',
      ])
      .exactOptional()
      .openapi({ description: 'The new job state.' }),
    newTaskState: z
      .enum([
        'STATE_UNSPECIFIED',
        'PENDING',
        'ASSIGNED',
        'RUNNING',
        'FAILED',
        'SUCCEEDED',
        'UNEXECUTED',
      ])
      .exactOptional()
      .openapi({ description: 'The new task state.' }),
    type: z
      .enum(['TYPE_UNSPECIFIED', 'JOB_STATE_CHANGED', 'TASK_STATE_CHANGED'])
      .exactOptional()
      .openapi({ description: 'The message type.' }),
  })
  .openapi({
    description:
      'Message details. Describe the attribute that a message should have. Without specified message attributes, no message will be sent by default.',
    required: [],
  })
  .openapi('Message')

const JobNotificationSchema = z
  .object({
    message: MessageSchema.exactOptional().openapi({
      description:
        'The attribute requirements of messages to be sent to this Pub/Sub topic. Without this field, no message will be sent.',
    }),
    pubsubTopic: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Pub/Sub topic where notifications like the job state changes will be published. This topic exist in the same project as the job and billings will be charged to this project. If not specified, no Pub/Sub messages will be sent. Topic format: `projects/{project}/topics/{topic}`.',
      }),
  })
  .openapi({ description: 'Notification configurations.', required: [] })
  .openapi('JobNotification')

const TaskGroupStatusSchema = z
  .object({
    counts: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Count of task in each state in the TaskGroup. The map key is task state name.',
      }),
    instances: z
      .array(InstanceStatusSchema)
      .exactOptional()
      .openapi({ description: 'Status of instances allocated for the TaskGroup.' }),
  })
  .openapi({ description: 'Aggregated task status for a TaskGroup.', required: [] })
  .openapi('TaskGroupStatus')

const JobStatusSchema = z
  .object({
    runDuration: z
      .string()
      .exactOptional()
      .openapi({ description: 'The duration of time that the Job spent in status RUNNING.' }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'QUEUED',
        'SCHEDULED',
        'RUNNING',
        'SUCCEEDED',
        'FAILED',
        'DELETION_IN_PROGRESS',
      ])
      .exactOptional()
      .openapi({ description: 'Job state' }),
    statusEvents: z
      .array(StatusEventSchema)
      .exactOptional()
      .openapi({ description: 'Job status events' }),
    taskGroups: z
      .record(z.string(), TaskGroupStatusSchema)
      .exactOptional()
      .openapi({
        description:
          'Aggregated task status for each TaskGroup in the Job. The map key is TaskGroup ID.',
      }),
  })
  .openapi({ description: 'Job status.', required: [] })
  .openapi('JobStatus')

const TaskGroupSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. TaskGroup name. The system generates this field based on parent Job name. For example: "projects/123456/locations/us-west1/jobs/job01/taskGroups/group01".',
        readOnly: true,
      }),
    parallelism: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Max number of tasks that can run in parallel. Default to min(task_count, 1000). Field parallelism must be 1 if the scheduling_policy is IN_ORDER.',
      }),
    permissiveSsh: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When true, Batch will configure SSH to allow passwordless login between VMs running the Batch tasks in the same TaskGroup.',
      }),
    requireHostsFile: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When true, Batch will populate a file with a list of all VMs assigned to the TaskGroup and set the BATCH_HOSTS_FILE environment variable to the path of that file. Defaults to false.',
      }),
    taskCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of Tasks in the TaskGroup. Default is 1.' }),
    taskCountPerNode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Max number of tasks that can be run on a VM at the same time. If not specified, the system will decide a value based on available compute resources on a VM and task requirements.',
      }),
    taskEnvironments: z
      .array(EnvironmentSchema)
      .exactOptional()
      .openapi({
        description:
          "An array of environment variable mappings, which are passed to Tasks with matching indices. If task_environments is used then task_count should not be specified in the request (and will be ignored). Task count will be the length of task_environments. Tasks get a BATCH_TASK_INDEX and BATCH_TASK_COUNT environment variable, in addition to any environment variables set in task_environments, specifying the number of Tasks in the Task's parent TaskGroup, and the specific Task's index in the TaskGroup (0 through BATCH_TASK_COUNT - 1). task_environments supports up to 200 entries.",
      }),
    taskSpec: TaskSpecSchema.exactOptional().openapi({
      description: 'Required. Tasks in the group share the same task spec.',
    }),
  })
  .openapi({
    description:
      'A TaskGroup contains one or multiple Tasks that share the same Runnable but with different runtime parameters.',
    required: [],
  })
  .openapi('TaskGroup')

const JobSchema = z
  .object({
    allocationPolicy: AllocationPolicySchema.exactOptional().openapi({
      description: 'Compute resource allocation for all TaskGroups in the Job.',
    }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. When the Job was created.', readOnly: true }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Labels for the Job. Labels could be user provided or system generated. For example, "labels": { "department": "finance", "environment": "test" } You can assign up to 64 labels. [Google Compute Engine label restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions) apply. Label names that start with "goog-" or "google-" are reserved.',
      }),
    logsPolicy: LogsPolicySchema.exactOptional().openapi({
      description: 'Log preservation policy for the Job.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Job name. For example: "projects/123456/locations/us-central1/jobs/job01".',
        readOnly: true,
      }),
    notifications: z
      .array(JobNotificationSchema)
      .exactOptional()
      .openapi({ description: 'Notification configurations.' }),
    priority: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Priority of the Job. The valid value range is [0, 100). Default value is 0. Higher value indicates higher priority. A job with higher priority value is more likely to run earlier if all other requirements are satisfied.',
      }),
    status: JobStatusSchema.exactOptional().openapi({
      description: 'Output only. Job status. It is read only for users.',
      readOnly: true,
    }),
    taskGroups: z
      .array(TaskGroupSchema)
      .exactOptional()
      .openapi({
        description: 'Required. TaskGroups in the Job. Only one TaskGroup is supported now.',
      }),
    uid: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. A system generated unique ID (in UUID4 format) for the Job.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The last time the Job was updated.', readOnly: true }),
  })
  .openapi({ description: 'The Cloud Batch Job description.', required: [] })
  .openapi('Job')

const ListJobsResponseSchema = z
  .object({
    jobs: z.array(JobSchema).exactOptional().openapi({ description: 'Jobs.' }),
    nextPageToken: z.string().exactOptional().openapi({ description: 'Next page token.' }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({ description: 'ListJob Response.', required: [] })
  .openapi('ListJobsResponse')

const LocationSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The friendly name for this location, typically a nearby city name. For example, "Tokyo".',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"}',
      }),
    locationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The canonical id for this location. For example: `"us-east1"`.' }),
    metadata: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Service-specific metadata. For example the available capacity at the given location.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`',
      }),
  })
  .openapi({
    description: 'A resource that represents Google Cloud Platform location.',
    required: [],
  })
  .openapi('Location')

const ListLocationsResponseSchema = z
  .object({
    locations: z
      .array(LocationSchema)
      .exactOptional()
      .openapi({
        description: 'A list of locations that matches the specified filter in the request.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The standard List next-page token.' }),
  })
  .openapi({ description: 'The response message for Locations.ListLocations.', required: [] })
  .openapi('ListLocationsResponse')

const StatusSchema = z
  .object({
    code: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The status code, which should be an enum value of google.rpc.Code.',
      }),
    details: z
      .array(
        z.record(
          z.string(),
          z
            .any()
            .openapi({
              description: 'Properties of the object. Contains field @type with type URL.',
            }),
        ),
      )
      .exactOptional()
      .openapi({
        description:
          'A list of messages that carry the error details. There is a common set of message types for APIs to use.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.',
      }),
  })
  .openapi({
    description:
      'The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).',
    required: [],
  })
  .openapi('Status')

const OperationSchema = z
  .object({
    done: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.',
      }),
    error: StatusSchema.exactOptional().openapi({
      description: 'The error result of the operation in case of failure or cancellation.',
    }),
    metadata: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.',
      }),
    response: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.',
      }),
  })
  .openapi({
    description:
      'This resource represents a long-running operation that is the result of a network API call.',
    required: [],
  })
  .openapi('Operation')

const ListOperationsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The standard List next-page token.' }),
    operations: z
      .array(OperationSchema)
      .exactOptional()
      .openapi({
        description: 'A list of operations that matches the specified filter in the request.',
      }),
  })
  .openapi({ description: 'The response message for Operations.ListOperations.', required: [] })
  .openapi('ListOperationsResponse')

const TaskSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Task name. The name is generated from the parent TaskGroup name and \'id\' field. For example: "projects/123456/locations/us-west1/jobs/job01/taskGroups/group01/tasks/task01".',
      }),
    status: TaskStatusSchema.exactOptional().openapi({ description: 'Task Status.' }),
  })
  .openapi({ description: 'A Cloud Batch task.', required: [] })
  .openapi('Task')

const ListTasksResponseSchema = z
  .object({
    nextPageToken: z.string().exactOptional().openapi({ description: 'Next page token.' }),
    tasks: z.array(TaskSchema).exactOptional().openapi({ description: 'Tasks.' }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({ description: 'ListTasks Response.', required: [] })
  .openapi('ListTasksResponse')

const OperationMetadataSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. API version used to start the operation.',
        readOnly: true,
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time the operation was created.', readOnly: true }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time the operation finished running.',
        readOnly: true,
      }),
    requestedCancellation: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.',
        readOnly: true,
      }),
    statusMessage: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Human-readable status of the operation, if any.',
        readOnly: true,
      }),
    target: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Server-defined resource path for the target of the operation.',
        readOnly: true,
      }),
    verb: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Name of the verb executed by the operation.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Represents the metadata of the long-running operation.', required: [] })
  .openapi('OperationMetadata')

const ReportAgentStateRequestSchema = z
  .object({
    agentInfo: AgentInfoSchema.exactOptional().openapi({ description: 'Agent info.' }),
    agentTimingInfo: AgentTimingInfoSchema.exactOptional().openapi({
      description: 'Agent timing info.',
    }),
    metadata: AgentMetadataSchema.exactOptional().openapi({ description: 'Agent metadata.' }),
  })
  .openapi({
    description:
      "Request to report agent's state. The Request itself implies the agent is healthy.",
    required: [],
  })
  .openapi('ReportAgentStateRequest')

const ReportAgentStateResponseSchema = z
  .object({
    defaultReportInterval: z
      .string()
      .exactOptional()
      .openapi({ description: 'Default report interval override' }),
    minReportInterval: z
      .string()
      .exactOptional()
      .openapi({ description: 'Minimum report interval override' }),
    tasks: z
      .array(AgentTaskSchema)
      .exactOptional()
      .openapi({ description: 'Tasks assigned to the agent' }),
  })
  .openapi({ description: 'Response to ReportAgentStateRequest.', required: [] })
  .openapi('ReportAgentStateResponse')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1NameRoute = createRoute({
  method: 'get',
  path: '/v1/{name}',
  tags: ['projects'],
  description:
    'Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.',
  operationId: 'batch.projects.locations.operations.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the operation resource.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV1NameRoute = createRoute({
  method: 'delete',
  path: '/v1/{name}',
  tags: ['projects'],
  description:
    "Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.",
  operationId: 'batch.projects.locations.operations.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      reason: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Reason for this deletion.',
            in: 'query',
            name: 'reason',
            schema: { type: 'string' },
            required: false,
          },
        }),
      requestId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).',
            in: 'query',
            name: 'requestId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the operation resource to be deleted.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1NameLocationsRoute = createRoute({
  method: 'get',
  path: '/v1/{name}/locations',
  tags: ['projects'],
  description: 'Lists information about the supported locations for this service.',
  operationId: 'batch.projects.locations.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of results to return. If not set, the service selects a default.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The resource that owns the locations collection, if applicable.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListLocationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1NameOperationsRoute = createRoute({
  method: 'get',
  path: '/v1/{name}/operations',
  tags: ['projects'],
  description:
    "Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.",
  operationId: 'batch.projects.locations.operations.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The standard list filter.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The standard list page size.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The standard list page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: "The name of the operation's parent resource.",
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListOperationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameCancelRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:cancel',
  tags: ['projects'],
  description:
    "Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.",
  operationId: 'batch.projects.locations.operations.cancel',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the operation resource to be cancelled.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CancelOperationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentJobsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/jobs',
  tags: ['projects'],
  description: 'List all Jobs for a project within a region.',
  operationId: 'batch.projects.locations.jobs.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'List filter.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Page size.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Parent path.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListJobsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentJobsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/jobs',
  tags: ['projects'],
  description: 'Create a Job.',
  operationId: 'batch.projects.locations.jobs.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      jobId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "ID used to uniquely identify the Job within its parent scope. This field should contain at most 63 characters and must start with lowercase characters. Only lowercase characters, numbers and '-' are accepted. The '-' character cannot be the first or the last one. A system generated ID will be used if the field is not set. The job.name field in the request will be ignored and the created resource name of the Job will be \"{parent}/jobs/{job_id}\".",
            in: 'query',
            name: 'jobId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      requestId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).',
            in: 'query',
            name: 'requestId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent resource name where the Job will be created. Pattern: "projects/{project}/locations/{location}"',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: JobSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: JobSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentStateReportRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/state:report',
  tags: ['projects'],
  description: "Report agent's state, e.g. agent status and tasks information",
  operationId: 'batch.projects.locations.state.report',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Format: projects/{project}/locations/{location} {project} should be a project number.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ReportAgentStateRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReportAgentStateResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentTasksRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/tasks',
  tags: ['projects'],
  description: 'List Tasks associated with a job.',
  operationId: 'batch.projects.locations.jobs.taskGroups.tasks.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Task filter, null filter matches all Tasks. Filter string should be of the format State=TaskStatus.State e.g. State=RUNNING',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Page size.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Name of a TaskGroup from which Tasks are being requested. Pattern: "projects/{project}/locations/{location}/jobs/{job}/taskGroups/{task_group}"',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListTasksResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
