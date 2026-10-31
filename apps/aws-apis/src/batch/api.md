<h1 id="aws-batch">AWS Batch v2016-08-10</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Batch</fullname> <p>Using Batch, you can run batch computing workloads on the Amazon Web Services Cloud. Batch computing is a common means for developers, scientists, and engineers to access large amounts of compute resources. Batch uses the advantages of the batch computing to remove the undifferentiated heavy lifting of configuring and managing required infrastructure. At the same time, it also adopts a familiar batch computing software approach. You can use Batch to efficiently provision resources d, and work toward eliminating capacity constraints, reducing your overall compute costs, and delivering results more quickly.</p> <p>As a fully managed service, Batch can run batch computing workloads of any scale. Batch automatically provisions compute resources and optimizes workload distribution based on the quantity and scale of your specific workloads. With Batch, there's no need to install or manage batch computing software. This means that you can focus on analyzing results and solving your specific problems instead.</p>

Base URLs:

* <a href="http://batch.us-east-1.amazonaws.com">http://batch.us-east-1.amazonaws.com</a> - The AWS Batch multi-region endpoint

* <a href="https://batch.us-east-1.amazonaws.com">https://batch.us-east-1.amazonaws.com</a> - The AWS Batch multi-region endpoint

* <a href="http://batch.cn-north-1.amazonaws.com.cn">http://batch.cn-north-1.amazonaws.com.cn</a> - The AWS Batch endpoint for China (Beijing) and China (Ningxia)

* <a href="https://batch.cn-north-1.amazonaws.com.cn">https://batch.cn-north-1.amazonaws.com.cn</a> - The AWS Batch endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/batch/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-batch-default">Default</h1>

## CancelJob

<a id="opIdCancelJob"></a>

> Code samples

```bash
curl https://batch.us-east-1.amazonaws.com/v1/canceljob \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "jobId": "string",
    "reason": "string"
  }'
```

`POST /v1/canceljob`

<p>Cancels a job in an Batch job queue. Jobs that are in the <code>SUBMITTED</code> or <code>PENDING</code> are canceled. A job in<code>RUNNABLE</code> remains in <code>RUNNABLE</code> until it reaches the head of the job queue. Then the job status is updated to <code>FAILED</code>.</p> <note> <p>A <code>PENDING</code> job is canceled after all dependency jobs are completed. Therefore, it may take longer than expected to cancel a job in <code>PENDING</code> status.</p> <p>When you try to cancel an array parent job in <code>PENDING</code>, Batch attempts to cancel all child jobs. The array parent job is canceled when all child jobs are completed.</p> </note> <p>Jobs that progressed to the <code>STARTING</code> or <code>RUNNING</code> state aren't canceled. However, the API operation still succeeds, even if no job is canceled. These jobs must be terminated with the <a>TerminateJob</a> operation.</p>

> Body parameter

```json
{
  "jobId": "string",
  "reason": "string"
}
```

<h3 id="canceljob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» jobId|body|string|true|The Batch job ID of the job to cancel.|
|» reason|body|string|true|A message to attach to the job that explains the reason for canceling it. This message is returned by future <a>DescribeJobs</a> operations on the job. This message is also recorded in the Batch activity logs.|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="canceljob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelJobResponse](#schemacanceljobresponse)|
|480|480|ClientException|[ClientException](#schemaclientexception)|
|481|481|ServerException|[ServerException](#schemaserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateComputeEnvironment

<a id="opIdCreateComputeEnvironment"></a>

> Code samples

```bash
curl https://batch.us-east-1.amazonaws.com/v1/createcomputeenvironment \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "computeEnvironmentName": "string",
    "type": "MANAGED",
    "state": "ENABLED",
    "unmanagedvCpus": 0,
    "computeResources": {
      "type": {},
      "allocationStrategy": {},
      "minvCpus": {},
      "maxvCpus": {},
      "desiredvCpus": {},
      "instanceTypes": {},
      "imageId": {},
      "subnets": {},
      "securityGroupIds": {},
      "ec2KeyPair": {},
      "instanceRole": {},
      "tags": {
        "property1": "string",
        "property2": "string"
      },
      "placementGroup": {},
      "bidPercentage": {},
      "spotIamFleetRole": {},
      "launchTemplate": {
        "launchTemplateId": {},
        "launchTemplateName": {},
        "version": {}
      },
      "ec2Configuration": {}
    },
    "serviceRole": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "eksConfiguration": {
      "eksClusterArn": {},
      "kubernetesNamespace": {}
    }
  }'
```

`POST /v1/createcomputeenvironment`

<p>Creates an Batch compute environment. You can create <code>MANAGED</code> or <code>UNMANAGED</code> compute environments. <code>MANAGED</code> compute environments can use Amazon EC2 or Fargate resources. <code>UNMANAGED</code> compute environments can only use EC2 resources.</p> <p>In a managed compute environment, Batch manages the capacity and instance types of the compute resources within the environment. This is based on the compute resource specification that you define or the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">launch template</a> that you specify when you create the compute environment. Either, you can choose to use EC2 On-Demand Instances and EC2 Spot Instances. Or, you can use Fargate and Fargate Spot capacity in your managed compute environment. You can optionally set a maximum price so that Spot Instances only launch when the Spot Instance price is less than a specified percentage of the On-Demand price.</p> <note> <p>Multi-node parallel jobs aren't supported on Spot Instances.</p> </note> <p>In an unmanaged compute environment, you can manage your own EC2 compute resources and have flexibility with how you configure your compute resources. For example, you can use custom AMIs. However, you must verify that each of your AMIs meet the Amazon ECS container instance AMI specification. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container_instance_AMIs.html">container instance AMIs</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. After you created your unmanaged compute environment, you can use the <a>DescribeComputeEnvironments</a> operation to find the Amazon ECS cluster that's associated with it. Then, launch your container instances into that Amazon ECS cluster. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_container_instance.html">Launching an Amazon ECS container instance</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <note> <p>To create a compute environment that uses EKS resources, the caller must have permissions to call <code>eks:DescribeCluster</code>.</p> </note> <note> <p>Batch doesn't automatically upgrade the AMIs in a compute environment after it's created. For example, it also doesn't update the AMIs in your compute environment when a newer version of the Amazon ECS optimized AMI is available. You're responsible for the management of the guest operating system. This includes any updates and security patches. You're also responsible for any additional application software or utilities that you install on the compute resources. There are two ways to use a new AMI for your Batch jobs. The original method is to complete these steps:</p> <ol> <li> <p>Create a new compute environment with the new AMI.</p> </li> <li> <p>Add the compute environment to an existing job queue.</p> </li> <li> <p>Remove the earlier compute environment from your job queue.</p> </li> <li> <p>Delete the earlier compute environment.</p> </li> </ol> <p>In April 2022, Batch added enhanced support for updating compute environments. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a>. To use the enhanced updating of compute environments to update AMIs, follow these rules:</p> <ul> <li> <p>Either don't set the service role (<code>serviceRole</code>) parameter or set it to the <b>AWSBatchServiceRole</b> service-linked role.</p> </li> <li> <p>Set the allocation strategy (<code>allocationStrategy</code>) parameter to <code>BEST_FIT_PROGRESSIVE</code>, <code>SPOT_CAPACITY_OPTIMIZED</code>, or <code>SPOT_PRICE_CAPACITY_OPTIMIZED</code>.</p> </li> <li> <p>Set the update to latest image version (<code>updateToLatestImageVersion</code>) parameter to <code>true</code>. The <code>updateToLatestImageVersion</code> parameter is used when you update a compute environment. This parameter is ignored when you create a compute environment.</p> </li> <li> <p>Don't specify an AMI ID in <code>imageId</code>, <code>imageIdOverride</code> (in <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_Ec2Configuration.html"> <code>ec2Configuration</code> </a>), or in the launch template (<code>launchTemplate</code>). In that case, Batch selects the latest Amazon ECS optimized AMI that's supported by Batch at the time the infrastructure update is initiated. Alternatively, you can specify the AMI ID in the <code>imageId</code> or <code>imageIdOverride</code> parameters, or the launch template identified by the <code>LaunchTemplate</code> properties. Changing any of these properties starts an infrastructure update. If the AMI ID is specified in the launch template, it can't be replaced by specifying an AMI ID in either the <code>imageId</code> or <code>imageIdOverride</code> parameters. It can only be replaced by specifying a different launch template, or if the launch template version is set to <code>$Default</code> or <code>$Latest</code>, by setting either a new default version for the launch template (if <code>$Default</code>) or by adding a new version to the launch template (if <code>$Latest</code>).</p> </li> </ul> <p>If these rules are followed, any update that starts an infrastructure update causes the AMI ID to be re-selected. If the <code>version</code> setting in the launch template (<code>launchTemplate</code>) is set to <code>$Latest</code> or <code>$Default</code>, the latest or default version of the launch template is evaluated up at the time of the infrastructure update, even if the <code>launchTemplate</code> wasn't updated.</p> </note>

> Body parameter

```json
{
  "computeEnvironmentName": "string",
  "type": "MANAGED",
  "state": "ENABLED",
  "unmanagedvCpus": 0,
  "computeResources": {
    "type": {},
    "allocationStrategy": {},
    "minvCpus": {},
    "maxvCpus": {},
    "desiredvCpus": {},
    "instanceTypes": {},
    "imageId": {},
    "subnets": {},
    "securityGroupIds": {},
    "ec2KeyPair": {},
    "instanceRole": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "placementGroup": {},
    "bidPercentage": {},
    "spotIamFleetRole": {},
    "launchTemplate": {
      "launchTemplateId": {},
      "launchTemplateName": {},
      "version": {}
    },
    "ec2Configuration": {}
  },
  "serviceRole": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "eksConfiguration": {
    "eksClusterArn": {},
    "kubernetesNamespace": {}
  }
}
```

<h3 id="createcomputeenvironment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» computeEnvironmentName|body|string|true|The name for your compute environment. It can be up to 128 characters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).|
|» type|body|string|true|The type of the compute environment: <code>MANAGED</code> or <code>UNMANAGED</code>. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute Environments</a> in the <i>Batch User Guide</i>.|
|» state|body|string|false|<p>The state of the compute environment. If the state is <code>ENABLED</code>, then the compute environment accepts jobs from a queue and can scale out automatically based on queues.</p> <p>If the state is <code>ENABLED</code>, then the Batch scheduler can attempt to place jobs from an associated job queue on the compute resources within the environment. If the compute environment is managed, then it can scale its instances out or in automatically, based on the job queue demand.</p> <p>If the state is <code>DISABLED</code>, then the Batch scheduler doesn't attempt to place jobs within the environment. Jobs in a <code>STARTING</code> or <code>RUNNING</code> state continue to progress normally. Managed compute environments in the <code>DISABLED</code> state don't scale out. </p> <note> <p>Compute environments in a <code>DISABLED</code> state may continue to incur billing charges. To prevent additional charges, turn off and then delete the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environment_parameters.html#compute_environment_state">State</a> in the <i>Batch User Guide</i>.</p> </note> <p>When an instance is idle, the instance scales down to the <code>minvCpus</code> value. However, the instance size doesn't change. For example, consider a <code>c5.8xlarge</code> instance with a <code>minvCpus</code> value of <code>4</code> and a <code>desiredvCpus</code> value of <code>36</code>. This instance doesn't scale down to a <code>c5.large</code> instance.</p>|
|» unmanagedvCpus|body|integer|false|<p>The maximum number of vCPUs for an unmanaged compute environment. This parameter is only used for fair share scheduling to reserve vCPU capacity for new share identifiers. If this parameter isn't provided for a fair share job queue, no vCPU capacity is reserved.</p> <note> <p>This parameter is only supported when the <code>type</code> parameter is set to <code>UNMANAGED</code>.</p> </note>|
|» computeResources|body|object|false|An object that represents an Batch compute resource. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute environments</a> in the <i>Batch User Guide</i>.|
|» » type|body|object|false|none|
|» » allocationStrategy|body|object|false|none|
|» » minvCpus|body|object|false|none|
|» » maxvCpus|body|object|false|none|
|» » desiredvCpus|body|object|false|none|
|» » instanceTypes|body|object|false|none|
|» » imageId|body|object|false|none|
|» » subnets|body|object|false|none|
|» » securityGroupIds|body|object|false|none|
|» » ec2KeyPair|body|object|false|none|
|» » instanceRole|body|object|false|none|
|» » tags|body|object|false|none|
|» » » **additionalProperties**|body|[String](#schemastring)|false|none|
|» » placementGroup|body|object|false|none|
|» » bidPercentage|body|object|false|none|
|» » spotIamFleetRole|body|object|false|none|
|» » launchTemplate|body|object|false|none|
|» » » launchTemplateId|body|object|false|none|
|» » » launchTemplateName|body|object|false|none|
|» » » version|body|object|false|none|
|» » ec2Configuration|body|object|false|none|
|» serviceRole|body|string|false|<p>The full Amazon Resource Name (ARN) of the IAM role that allows Batch to make calls to other Amazon Web Services services on your behalf. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/service_IAM_role.html">Batch service IAM role</a> in the <i>Batch User Guide</i>.</p> <important> <p>If your account already created the Batch service-linked role, that role is used by default for your compute environment unless you specify a different role here. If the Batch service-linked role doesn't exist in your account, and no role is specified here, the service attempts to create the Batch service-linked role in your account.</p> </important> <p>If your specified role has a path other than <code>/</code>, then you must specify either the full role ARN (recommended) or prefix the role name with the path. For example, if a role with the name <code>bar</code> has a path of <code>/foo/</code>, specify <code>/foo/bar</code> as the role name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-friendly-names">Friendly names and paths</a> in the <i>IAM User Guide</i>.</p> <note> <p>Depending on how you created your Batch service role, its ARN might contain the <code>service-role</code> path prefix. When you only specify the name of the service role, Batch assumes that your ARN doesn't use the <code>service-role</code> path prefix. Because of this, we recommend that you specify the full ARN of your service role when you create compute environments.</p> </note>|
|» tags|body|object|false|<p>The tags that you apply to the compute environment to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in <i>Amazon Web Services General Reference</i>.</p> <p>These tags can be updated or removed using the <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_TagResource.html">TagResource</a> and <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_UntagResource.html">UntagResource</a> API operations. These tags don't propagate to the underlying compute resources.</p>|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» eksConfiguration|body|object|false|Configuration for the Amazon EKS cluster that supports the Batch compute environment. The cluster must exist before the compute environment can be created.|
|» » eksClusterArn|body|object|false|none|
|» » kubernetesNamespace|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|MANAGED|
|» type|UNMANAGED|
|» state|ENABLED|
|» state|DISABLED|

> Example responses

> 200 Response

```json
{
  "computeEnvironmentArn": "arn:aws:batch:us-east-1:012345678910:compute-environment/M4Spot",
  "computeEnvironmentName": "M4Spot"
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="createcomputeenvironment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateComputeEnvironmentResponse](#schemacreatecomputeenvironmentresponse)|
|480|480|ClientException|[ClientException](#schemaclientexception)|
|481|481|ServerException|[ServerException](#schemaserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateJobQueue

<a id="opIdCreateJobQueue"></a>

> Code samples

```bash
curl https://batch.us-east-1.amazonaws.com/v1/createjobqueue \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "jobQueueName": "string",
    "state": "ENABLED",
    "schedulingPolicyArn": "string",
    "priority": 0,
    "computeEnvironmentOrder": [
      {
        "order": {},
        "computeEnvironment": {}
      }
    ],
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /v1/createjobqueue`

<p>Creates an Batch job queue. When you create a job queue, you associate one or more compute environments to the queue and assign an order of preference for the compute environments.</p> <p>You also set a priority to the job queue that determines the order that the Batch scheduler places jobs onto its associated compute environments. For example, if a compute environment is associated with more than one job queue, the job queue with a higher priority is given preference for scheduling jobs to that compute environment.</p>

> Body parameter

```json
{
  "jobQueueName": "string",
  "state": "ENABLED",
  "schedulingPolicyArn": "string",
  "priority": 0,
  "computeEnvironmentOrder": [
    {
      "order": {},
      "computeEnvironment": {}
    }
  ],
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createjobqueue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» jobQueueName|body|string|true|The name of the job queue. It can be up to 128 letters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).|
|» state|body|string|false|The state of the job queue. If the job queue state is <code>ENABLED</code>, it is able to accept jobs. If the job queue state is <code>DISABLED</code>, new jobs can't be added to the queue, but jobs already in the queue can finish.|
|» schedulingPolicyArn|body|string|false|The Amazon Resource Name (ARN) of the fair share scheduling policy. If this parameter is specified, the job queue uses a fair share scheduling policy. If this parameter isn't specified, the job queue uses a first in, first out (FIFO) scheduling policy. After a job queue is created, you can replace but can't remove the fair share scheduling policy. The format is <code>aws:<i>Partition</i>:batch:<i>Region</i>:<i>Account</i>:scheduling-policy/<i>Name</i> </code>. An example is <code>aws:aws:batch:us-west-2:123456789012:scheduling-policy/MySchedulingPolicy</code>.|
|» priority|body|integer|true|The priority of the job queue. Job queues with a higher priority (or a higher integer value for the <code>priority</code> parameter) are evaluated first when associated with the same compute environment. Priority is determined in descending order. For example, a job queue with a priority value of <code>10</code> is given scheduling preference over a job queue with a priority value of <code>1</code>. All of the compute environments must be either EC2 (<code>EC2</code> or <code>SPOT</code>) or Fargate (<code>FARGATE</code> or <code>FARGATE_SPOT</code>); EC2 and Fargate compute environments can't be mixed.|
|» computeEnvironmentOrder|body|[[ComputeEnvironmentOrder](#schemacomputeenvironmentorder)]|true|<p>The set of compute environments mapped to a job queue and their order relative to each other. The job scheduler uses this parameter to determine which compute environment runs a specific job. Compute environments must be in the <code>VALID</code> state before you can associate them with a job queue. You can associate up to three compute environments with a job queue. All of the compute environments must be either EC2 (<code>EC2</code> or <code>SPOT</code>) or Fargate (<code>FARGATE</code> or <code>FARGATE_SPOT</code>); EC2 and Fargate compute environments can't be mixed.</p> <note> <p>All compute environments that are associated with a job queue must share the same architecture. Batch doesn't support mixing compute environment architecture types in a single job queue.</p> </note>|
|» tags|body|object|false|The tags that you apply to the job queue to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/using-tags.html">Tagging your Batch resources</a> in <i>Batch User Guide</i>.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» state|ENABLED|
|» state|DISABLED|

> Example responses

> 200 Response

```json
{
  "jobQueueArn": "arn:aws:batch:us-east-1:012345678910:job-queue/HighPriority",
  "jobQueueName": "HighPriority"
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="createjobqueue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateJobQueueResponse](#schemacreatejobqueueresponse)|
|480|480|ClientException|[ClientException](#schemaclientexception)|
|481|481|ServerException|[ServerException](#schemaserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateSchedulingPolicy

<a id="opIdCreateSchedulingPolicy"></a>

> Code samples

```bash
curl https://batch.us-east-1.amazonaws.com/v1/createschedulingpolicy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "fairsharePolicy": {
      "shareDecaySeconds": {},
      "computeReservation": {},
      "shareDistribution": {}
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /v1/createschedulingpolicy`

Creates an Batch scheduling policy.

> Body parameter

```json
{
  "name": "string",
  "fairsharePolicy": {
    "shareDecaySeconds": {},
    "computeReservation": {},
    "shareDistribution": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createschedulingpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» name|body|string|true|The name of the scheduling policy. It can be up to 128 letters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).|
|» fairsharePolicy|body|object|false|The fair share policy for a scheduling policy.|
|» » shareDecaySeconds|body|object|false|none|
|» » computeReservation|body|object|false|none|
|» » shareDistribution|body|object|false|none|
|» tags|body|object|false|<p>The tags that you apply to the scheduling policy to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in <i>Amazon Web Services General Reference</i>.</p> <p>These tags can be updated or removed using the <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_TagResource.html">TagResource</a> and <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_UntagResource.html">UntagResource</a> API operations.</p>|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{
  "name": {},
  "arn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="createschedulingpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateSchedulingPolicyResponse](#schemacreateschedulingpolicyresponse)|
|480|480|ClientException|[ClientException](#schemaclientexception)|
|481|481|ServerException|[ServerException](#schemaserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteComputeEnvironment

<a id="opIdDeleteComputeEnvironment"></a>

> Code samples

```bash
curl https://batch.us-east-1.amazonaws.com/v1/deletecomputeenvironment \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "computeEnvironment": "string"
  }'
```

`POST /v1/deletecomputeenvironment`

<p>Deletes an Batch compute environment.</p> <p>Before you can delete a compute environment, you must set its state to <code>DISABLED</code> with the <a>UpdateComputeEnvironment</a> API operation and disassociate it from any job queues with the <a>UpdateJobQueue</a> API operation. Compute environments that use Fargate resources must terminate all active jobs on that compute environment before deleting the compute environment. If this isn't done, the compute environment enters an invalid state.</p>

> Body parameter

```json
{
  "computeEnvironment": "string"
}
```

<h3 id="deletecomputeenvironment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» computeEnvironment|body|string|true|The name or Amazon Resource Name (ARN) of the compute environment to delete.|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="deletecomputeenvironment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteComputeEnvironmentResponse](#schemadeletecomputeenvironmentresponse)|
|480|480|ClientException|[ClientException](#schemaclientexception)|
|481|481|ServerException|[ServerException](#schemaserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteJobQueue

<a id="opIdDeleteJobQueue"></a>

> Code samples

```bash
curl https://batch.us-east-1.amazonaws.com/v1/deletejobqueue \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "jobQueue": "string"
  }'
```

`POST /v1/deletejobqueue`

<p>Deletes the specified job queue. You must first disable submissions for a queue with the <a>UpdateJobQueue</a> operation. All jobs in the queue are eventually terminated when you delete a job queue. The jobs are terminated at a rate of about 16 jobs each second.</p> <p>It's not necessary to disassociate compute environments from a queue before submitting a <code>DeleteJobQueue</code> request.</p>

> Body parameter

```json
{
  "jobQueue": "string"
}
```

<h3 id="deletejobqueue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» jobQueue|body|string|true|The short name or full Amazon Resource Name (ARN) of the queue to delete.|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="deletejobqueue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteJobQueueResponse](#schemadeletejobqueueresponse)|
|480|480|ClientException|[ClientException](#schemaclientexception)|
|481|481|ServerException|[ServerException](#schemaserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteSchedulingPolicy

<a id="opIdDeleteSchedulingPolicy"></a>

> Code samples

```bash
curl https://batch.us-east-1.amazonaws.com/v1/deleteschedulingpolicy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "arn": "string"
  }'
```

`POST /v1/deleteschedulingpolicy`

<p>Deletes the specified scheduling policy.</p> <p>You can't delete a scheduling policy that's used in any job queues.</p>

> Body parameter

```json
{
  "arn": "string"
}
```

<h3 id="deleteschedulingpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» arn|body|string|true|The Amazon Resource Name (ARN) of the scheduling policy to delete.|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="deleteschedulingpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteSchedulingPolicyResponse](#schemadeleteschedulingpolicyresponse)|
|480|480|ClientException|[ClientException](#schemaclientexception)|
|481|481|ServerException|[ServerException](#schemaserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeregisterJobDefinition

<a id="opIdDeregisterJobDefinition"></a>

> Code samples

```bash
curl https://batch.us-east-1.amazonaws.com/v1/deregisterjobdefinition \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "jobDefinition": "string"
  }'
```

`POST /v1/deregisterjobdefinition`

Deregisters an Batch job definition. Job definitions are permanently deleted after 180 days.

> Body parameter

```json
{
  "jobDefinition": "string"
}
```

<h3 id="deregisterjobdefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» jobDefinition|body|string|true|The name and revision (<code>name:revision</code>) or full Amazon Resource Name (ARN) of the job definition to deregister.|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="deregisterjobdefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeregisterJobDefinitionResponse](#schemaderegisterjobdefinitionresponse)|
|480|480|ClientException|[ClientException](#schemaclientexception)|
|481|481|ServerException|[ServerException](#schemaserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeComputeEnvironments

<a id="opIdDescribeComputeEnvironments"></a>

> Code samples

```bash
curl https://batch.us-east-1.amazonaws.com/v1/describecomputeenvironments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "computeEnvironments": [
      "string"
    ],
    "maxResults": 0,
    "nextToken": "string"
  }'
```

`POST /v1/describecomputeenvironments`

<p>Describes one or more of your compute environments.</p> <p>If you're using an unmanaged compute environment, you can use the <code>DescribeComputeEnvironment</code> operation to determine the <code>ecsClusterArn</code> that you launch your Amazon ECS container instances into.</p>

> Body parameter

```json
{
  "computeEnvironments": [
    "string"
  ],
  "maxResults": 0,
  "nextToken": "string"
}
```

<h3 id="describecomputeenvironments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» computeEnvironments|body|[[String](#schemastring)]|false|A list of up to 100 compute environment names or full Amazon Resource Name (ARN) entries.|
|» maxResults|body|integer|false|The maximum number of cluster results returned by <code>DescribeComputeEnvironments</code> in paginated output. When this parameter is used, <code>DescribeComputeEnvironments</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>DescribeComputeEnvironments</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter isn't used, then <code>DescribeComputeEnvironments</code> returns up to 100 results and a <code>nextToken</code> value if applicable.|
|» nextToken|body|string|false|<p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeComputeEnvironments</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>|

> Example responses

> 200 Response

```json
{
  "computeEnvironments": [
    {
      "type": "MANAGED",
      "computeEnvironmentArn": "arn:aws:batch:us-east-1:012345678910:compute-environment/P2OnDemand",
      "computeEnvironmentName": "P2OnDemand",
      "computeResources": {
        "type": "EC2",
        "desiredvCpus": 48,
        "ec2KeyPair": "id_rsa",
        "instanceRole": "ecsInstanceRole",
        "instanceTypes": [
          "p2"
        ],
        "maxvCpus": 128,
        "minvCpus": 0,
        "securityGroupIds": [
          "sg-cf5093b2"
        ],
        "subnets": [
          "subnet-220c0e0a",
          "subnet-1a95556d",
          "subnet-978f6dce"
        ],
        "tags": {
          "Name": "Batch Instance - P2OnDemand"
        }
      },
      "ecsClusterArn": "arn:aws:ecs:us-east-1:012345678910:cluster/P2OnDemand_Batch_2c06f29d-d1fe-3a49-879d-42394c86effc",
      "serviceRole": "arn:aws:iam::012345678910:role/AWSBatchServiceRole",
      "state": "ENABLED",
      "status": "VALID",
      "statusReason": "ComputeEnvironment Healthy"
    }
  ]
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="describecomputeenvironments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeComputeEnvironmentsResponse](#schemadescribecomputeenvironmentsresponse)|
|480|480|ClientException|[ClientException](#schemaclientexception)|
|481|481|ServerException|[ServerException](#schemaserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeJobDefinitions

<a id="opIdDescribeJobDefinitions"></a>

> Code samples

```bash
curl https://batch.us-east-1.amazonaws.com/v1/describejobdefinitions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "jobDefinitions": [
      "string"
    ],
    "maxResults": 0,
    "jobDefinitionName": "string",
    "status": "string",
    "nextToken": "string"
  }'
```

`POST /v1/describejobdefinitions`

Describes a list of job definitions. You can specify a <code>status</code> (such as <code>ACTIVE</code>) to only return job definitions that match that status.

> Body parameter

```json
{
  "jobDefinitions": [
    "string"
  ],
  "maxResults": 0,
  "jobDefinitionName": "string",
  "status": "string",
  "nextToken": "string"
}
```

<h3 id="describejobdefinitions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» jobDefinitions|body|[[String](#schemastring)]|false|A list of up to 100 job definitions. Each entry in the list can either be an ARN in the format <code>arn:aws:batch:${Region}:${Account}:job-definition/${JobDefinitionName}:${Revision}</code> or a short version using the form <code>${JobDefinitionName}:${Revision}</code>.|
|» maxResults|body|integer|false|The maximum number of results returned by <code>DescribeJobDefinitions</code> in paginated output. When this parameter is used, <code>DescribeJobDefinitions</code> only returns <code>maxResults</code> results in a single page and a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>DescribeJobDefinitions</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter isn't used, then <code>DescribeJobDefinitions</code> returns up to 100 results and a <code>nextToken</code> value if applicable.|
|» jobDefinitionName|body|string|false|The name of the job definition to describe.|
|» status|body|string|false|The status used to filter job definitions.|
|» nextToken|body|string|false|<p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeJobDefinitions</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>|

> Example responses

> 200 Response

```json
{
  "jobDefinitions": [
    {
      "type": "container",
      "containerProperties": {
        "command": [
          "sleep",
          "60"
        ],
        "environment": [],
        "image": "busybox",
        "mountPoints": [],
        "resourceRequirements": [
          {
            "type": "MEMORY",
            "value": "128"
          },
          {
            "type": "VCPU",
            "value": "1"
          }
        ],
        "ulimits": [],
        "volumes": []
      },
      "jobDefinitionArn": "arn:aws:batch:us-east-1:012345678910:job-definition/sleep60:1",
      "jobDefinitionName": "sleep60",
      "revision": 1,
      "status": "ACTIVE"
    }
  ]
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="describejobdefinitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeJobDefinitionsResponse](#schemadescribejobdefinitionsresponse)|
|480|480|ClientException|[ClientException](#schemaclientexception)|
|481|481|ServerException|[ServerException](#schemaserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeJobQueues

<a id="opIdDescribeJobQueues"></a>

> Code samples

```bash
curl https://batch.us-east-1.amazonaws.com/v1/describejobqueues \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "jobQueues": [
      "string"
    ],
    "maxResults": 0,
    "nextToken": "string"
  }'
```

`POST /v1/describejobqueues`

Describes one or more of your job queues.

> Body parameter

```json
{
  "jobQueues": [
    "string"
  ],
  "maxResults": 0,
  "nextToken": "string"
}
```

<h3 id="describejobqueues-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» jobQueues|body|[[String](#schemastring)]|false|A list of up to 100 queue names or full queue Amazon Resource Name (ARN) entries.|
|» maxResults|body|integer|false|The maximum number of results returned by <code>DescribeJobQueues</code> in paginated output. When this parameter is used, <code>DescribeJobQueues</code> only returns <code>maxResults</code> results in a single page and a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>DescribeJobQueues</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter isn't used, then <code>DescribeJobQueues</code> returns up to 100 results and a <code>nextToken</code> value if applicable.|
|» nextToken|body|string|false|<p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeJobQueues</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>|

> Example responses

> 200 Response

```json
{
  "jobQueues": [
    {
      "computeEnvironmentOrder": [
        {
          "computeEnvironment": "arn:aws:batch:us-east-1:012345678910:compute-environment/C4OnDemand",
          "order": 1
        }
      ],
      "jobQueueArn": "arn:aws:batch:us-east-1:012345678910:job-queue/HighPriority",
      "jobQueueName": "HighPriority",
      "priority": 1,
      "state": "ENABLED",
      "status": "VALID",
      "statusReason": "JobQueue Healthy"
    }
  ]
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="describejobqueues-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeJobQueuesResponse](#schemadescribejobqueuesresponse)|
|480|480|ClientException|[ClientException](#schemaclientexception)|
|481|481|ServerException|[ServerException](#schemaserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeJobs

<a id="opIdDescribeJobs"></a>

> Code samples

```bash
curl https://batch.us-east-1.amazonaws.com/v1/describejobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "jobs": [
      "string"
    ]
  }'
```

`POST /v1/describejobs`

Describes a list of Batch jobs.

> Body parameter

```json
{
  "jobs": [
    "string"
  ]
}
```

<h3 id="describejobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» jobs|body|[[String](#schemastring)]|true|A list of up to 100 job IDs.|

> Example responses

> 200 Response

```json
{
  "jobs": [
    {
      "container": {
        "command": [
          "sleep",
          "60"
        ],
        "containerInstanceArn": "arn:aws:ecs:us-east-1:012345678910:container-instance/5406d7cd-58bd-4b8f-9936-48d7c6b1526c",
        "environment": [],
        "exitCode": 0,
        "image": "busybox",
        "memory": 128,
        "mountPoints": [],
        "ulimits": [],
        "vcpus": 1,
        "volumes": []
      },
      "createdAt": 1480460782010,
      "dependsOn": [],
      "jobDefinition": "sleep60",
      "jobId": "24fa2d7a-64c4-49d2-8b47-f8da4fbde8e9",
      "jobName": "example",
      "jobQueue": "arn:aws:batch:us-east-1:012345678910:job-queue/HighPriority",
      "parameters": {},
      "startedAt": 1480460816500,
      "status": "SUCCEEDED",
      "stoppedAt": 1480460880699
    }
  ]
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="describejobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeJobsResponse](#schemadescribejobsresponse)|
|480|480|ClientException|[ClientException](#schemaclientexception)|
|481|481|ServerException|[ServerException](#schemaserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeSchedulingPolicies

<a id="opIdDescribeSchedulingPolicies"></a>

> Code samples

```bash
curl https://batch.us-east-1.amazonaws.com/v1/describeschedulingpolicies \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "arns": [
      "string"
    ]
  }'
```

`POST /v1/describeschedulingpolicies`

Describes one or more of your scheduling policies.

> Body parameter

```json
{
  "arns": [
    "string"
  ]
}
```

<h3 id="describeschedulingpolicies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» arns|body|[[String](#schemastring)]|true|A list of up to 100 scheduling policy Amazon Resource Name (ARN) entries.|

> Example responses

> 200 Response

```json
{
  "schedulingPolicies": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="describeschedulingpolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeSchedulingPoliciesResponse](#schemadescribeschedulingpoliciesresponse)|
|480|480|ClientException|[ClientException](#schemaclientexception)|
|481|481|ServerException|[ServerException](#schemaserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListJobs

<a id="opIdListJobs"></a>

> Code samples

```bash
curl https://batch.us-east-1.amazonaws.com/v1/listjobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "jobQueue": "string",
    "arrayJobId": "string",
    "multiNodeJobId": "string",
    "jobStatus": "SUBMITTED",
    "maxResults": 0,
    "nextToken": "string",
    "filters": [
      {
        "name": {},
        "values": {}
      }
    ]
  }'
```

`POST /v1/listjobs`

<p>Returns a list of Batch jobs.</p> <p>You must specify only one of the following items:</p> <ul> <li> <p>A job queue ID to return a list of jobs in that job queue</p> </li> <li> <p>A multi-node parallel job ID to return a list of nodes for that job</p> </li> <li> <p>An array job ID to return a list of the children for that job</p> </li> </ul> <p>You can filter the results by job status with the <code>jobStatus</code> parameter. If you don't specify a status, only <code>RUNNING</code> jobs are returned.</p>

> Body parameter

```json
{
  "jobQueue": "string",
  "arrayJobId": "string",
  "multiNodeJobId": "string",
  "jobStatus": "SUBMITTED",
  "maxResults": 0,
  "nextToken": "string",
  "filters": [
    {
      "name": {},
      "values": {}
    }
  ]
}
```

<h3 id="listjobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» jobQueue|body|string|false|The name or full Amazon Resource Name (ARN) of the job queue used to list jobs.|
|» arrayJobId|body|string|false|The job ID for an array job. Specifying an array job ID with this parameter lists all child jobs from within the specified array.|
|» multiNodeJobId|body|string|false|The job ID for a multi-node parallel job. Specifying a multi-node parallel job ID with this parameter lists all nodes that are associated with the specified job.|
|» jobStatus|body|string|false|The job status used to filter jobs in the specified queue. If the <code>filters</code> parameter is specified, the <code>jobStatus</code> parameter is ignored and jobs with any status are returned. If you don't specify a status, only <code>RUNNING</code> jobs are returned.|
|» maxResults|body|integer|false|The maximum number of results returned by <code>ListJobs</code> in paginated output. When this parameter is used, <code>ListJobs</code> only returns <code>maxResults</code> results in a single page and a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListJobs</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter isn't used, then <code>ListJobs</code> returns up to 100 results and a <code>nextToken</code> value if applicable.|
|» nextToken|body|string|false|<p>The <code>nextToken</code> value returned from a previous paginated <code>ListJobs</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>|
|» filters|body|[[KeyValuesPair](#schemakeyvaluespair)]|false|<p>The filter to apply to the query. Only one filter can be used at a time. When the filter is used, <code>jobStatus</code> is ignored. The filter doesn't apply to child jobs in an array or multi-node parallel (MNP) jobs. The results are sorted by the <code>createdAt</code> field, with the most recent jobs being first.</p> <dl> <dt>JOB_NAME</dt> <dd> <p>The value of the filter is a case-insensitive match for the job name. If the value ends with an asterisk (*), the filter matches any job name that begins with the string before the '*'. This corresponds to the <code>jobName</code> value. For example, <code>test1</code> matches both <code>Test1</code> and <code>test1</code>, and <code>test1*</code> matches both <code>test1</code> and <code>Test10</code>. When the <code>JOB_NAME</code> filter is used, the results are grouped by the job name and version.</p> </dd> <dt>JOB_DEFINITION</dt> <dd> <p>The value for the filter is the name or Amazon Resource Name (ARN) of the job definition. This corresponds to the <code>jobDefinition</code> value. The value is case sensitive. When the value for the filter is the job definition name, the results include all the jobs that used any revision of that job definition name. If the value ends with an asterisk (*), the filter matches any job definition name that begins with the string before the '*'. For example, <code>jd1</code> matches only <code>jd1</code>, and <code>jd1*</code> matches both <code>jd1</code> and <code>jd1A</code>. The version of the job definition that's used doesn't affect the sort order. When the <code>JOB_DEFINITION</code> filter is used and the ARN is used (which is in the form <code>arn:${Partition}:batch:${Region}:${Account}:job-definition/${JobDefinitionName}:${Revision}</code>), the results include jobs that used the specified revision of the job definition. Asterisk (*) isn't supported when the ARN is used.</p> </dd> <dt>BEFORE_CREATED_AT</dt> <dd> <p>The value for the filter is the time that's before the job was created. This corresponds to the <code>createdAt</code> value. The value is a string representation of the number of milliseconds since 00:00:00 UTC (midnight) on January 1, 1970.</p> </dd> <dt>AFTER_CREATED_AT</dt> <dd> <p>The value for the filter is the time that's after the job was created. This corresponds to the <code>createdAt</code> value. The value is a string representation of the number of milliseconds since 00:00:00 UTC (midnight) on January 1, 1970.</p> </dd> </dl>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» jobStatus|SUBMITTED|
|» jobStatus|PENDING|
|» jobStatus|RUNNABLE|
|» jobStatus|STARTING|
|» jobStatus|RUNNING|
|» jobStatus|SUCCEEDED|
|» jobStatus|FAILED|

> Example responses

> 200 Response

```json
{
  "jobSummaryList": [
    {
      "jobId": "68f0c163-fbd4-44e6-9fd1-25b14a434786",
      "jobName": "example"
    }
  ]
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="listjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListJobsResponse](#schemalistjobsresponse)|
|480|480|ClientException|[ClientException](#schemaclientexception)|
|481|481|ServerException|[ServerException](#schemaserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSchedulingPolicies

<a id="opIdListSchedulingPolicies"></a>

> Code samples

```bash
curl https://batch.us-east-1.amazonaws.com/v1/listschedulingpolicies \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "maxResults": 0,
    "nextToken": "string"
  }'
```

`POST /v1/listschedulingpolicies`

Returns a list of Batch scheduling policies.

> Body parameter

```json
{
  "maxResults": 0,
  "nextToken": "string"
}
```

<h3 id="listschedulingpolicies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» maxResults|body|integer|false|The maximum number of results that's returned by <code>ListSchedulingPolicies</code> in paginated output. When this parameter is used, <code>ListSchedulingPolicies</code> only returns <code>maxResults</code> results in a single page and a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListSchedulingPolicies</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter isn't used, <code>ListSchedulingPolicies</code> returns up to 100 results and a <code>nextToken</code> value if applicable.|
|» nextToken|body|string|false|<p>The <code>nextToken</code> value that's returned from a previous paginated <code>ListSchedulingPolicies</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>|

> Example responses

> 200 Response

```json
{
  "schedulingPolicies": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="listschedulingpolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSchedulingPoliciesResponse](#schemalistschedulingpoliciesresponse)|
|480|480|ClientException|[ClientException](#schemaclientexception)|
|481|481|ServerException|[ServerException](#schemaserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://batch.us-east-1.amazonaws.com/v1/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/tags/{resourceArn}`

Lists the tags for an Batch resource. Batch resources that support tags are compute environments, jobs, job definitions, job queues, and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported.

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon Resource Name (ARN) that identifies the resource that tags are listed for. Batch resources that support tags are compute environments, jobs, job definitions, job queues, and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "tags": {
    "Department": "Engineering",
    "Stage": "Alpha",
    "User": "JaneDoe"
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|ClientException|[ClientException](#schemaclientexception)|
|481|481|ServerException|[ServerException](#schemaserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://batch.us-east-1.amazonaws.com/v1/tags/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /v1/tags/{resourceArn}`

Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags that are associated with that resource are deleted as well. Batch resources that support tags are compute environments, jobs, job definitions, job queues, and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported.

> Body parameter

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="tagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon Resource Name (ARN) of the resource that tags are added to. Batch resources that support tags are compute environments, jobs, job definitions, job queues, and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|true|The tags that you apply to the resource to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in <i>Amazon Web Services General Reference</i>.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|ClientException|[ClientException](#schemaclientexception)|
|481|481|ServerException|[ServerException](#schemaserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RegisterJobDefinition

<a id="opIdRegisterJobDefinition"></a>

> Code samples

```bash
curl https://batch.us-east-1.amazonaws.com/v1/registerjobdefinition \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "jobDefinitionName": "string",
    "type": "container",
    "parameters": {
      "property1": "string",
      "property2": "string"
    },
    "schedulingPriority": 0,
    "containerProperties": {
      "image": {},
      "vcpus": {},
      "memory": {},
      "command": {},
      "jobRoleArn": {},
      "executionRoleArn": {},
      "volumes": {},
      "environment": {},
      "mountPoints": {},
      "readonlyRootFilesystem": {},
      "privileged": {},
      "ulimits": {},
      "user": {},
      "instanceType": {},
      "resourceRequirements": {},
      "linuxParameters": {
        "devices": {},
        "initProcessEnabled": {},
        "sharedMemorySize": {},
        "tmpfs": {},
        "maxSwap": {},
        "swappiness": {}
      },
      "logConfiguration": {
        "logDriver": {},
        "options": {
          "property1": "string",
          "property2": "string"
        },
        "secretOptions": {}
      },
      "secrets": {},
      "networkConfiguration": {
        "assignPublicIp": {}
      },
      "fargatePlatformConfiguration": {
        "platformVersion": {}
      },
      "ephemeralStorage": {
        "sizeInGiB": {}
      },
      "runtimePlatform": {
        "operatingSystemFamily": {},
        "cpuArchitecture": {}
      }
    },
    "nodeProperties": {
      "numNodes": {},
      "mainNode": {},
      "nodeRangeProperties": {}
    },
    "retryStrategy": {
      "attempts": {},
      "evaluateOnExit": {}
    },
    "propagateTags": true,
    "timeout": {
      "attemptDurationSeconds": {}
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "platformCapabilities": [
      "EC2"
    ],
    "eksProperties": {
      "podProperties": {
        "serviceAccountName": {},
        "hostNetwork": {},
        "dnsPolicy": {},
        "containers": {},
        "volumes": {},
        "metadata": {
          "labels": {
            "property1": "string",
            "property2": "string"
          }
        }
      }
    }
  }'
```

`POST /v1/registerjobdefinition`

Registers an Batch job definition.

> Body parameter

```json
{
  "jobDefinitionName": "string",
  "type": "container",
  "parameters": {
    "property1": "string",
    "property2": "string"
  },
  "schedulingPriority": 0,
  "containerProperties": {
    "image": {},
    "vcpus": {},
    "memory": {},
    "command": {},
    "jobRoleArn": {},
    "executionRoleArn": {},
    "volumes": {},
    "environment": {},
    "mountPoints": {},
    "readonlyRootFilesystem": {},
    "privileged": {},
    "ulimits": {},
    "user": {},
    "instanceType": {},
    "resourceRequirements": {},
    "linuxParameters": {
      "devices": {},
      "initProcessEnabled": {},
      "sharedMemorySize": {},
      "tmpfs": {},
      "maxSwap": {},
      "swappiness": {}
    },
    "logConfiguration": {
      "logDriver": {},
      "options": {
        "property1": "string",
        "property2": "string"
      },
      "secretOptions": {}
    },
    "secrets": {},
    "networkConfiguration": {
      "assignPublicIp": {}
    },
    "fargatePlatformConfiguration": {
      "platformVersion": {}
    },
    "ephemeralStorage": {
      "sizeInGiB": {}
    },
    "runtimePlatform": {
      "operatingSystemFamily": {},
      "cpuArchitecture": {}
    }
  },
  "nodeProperties": {
    "numNodes": {},
    "mainNode": {},
    "nodeRangeProperties": {}
  },
  "retryStrategy": {
    "attempts": {},
    "evaluateOnExit": {}
  },
  "propagateTags": true,
  "timeout": {
    "attemptDurationSeconds": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "platformCapabilities": [
    "EC2"
  ],
  "eksProperties": {
    "podProperties": {
      "serviceAccountName": {},
      "hostNetwork": {},
      "dnsPolicy": {},
      "containers": {},
      "volumes": {},
      "metadata": {
        "labels": {
          "property1": "string",
          "property2": "string"
        }
      }
    }
  }
}
```

<h3 id="registerjobdefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» jobDefinitionName|body|string|true|The name of the job definition to register. It can be up to 128 letters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).|
|» type|body|string|true|<p>The type of job definition. For more information about multi-node parallel jobs, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/multi-node-job-def.html">Creating a multi-node parallel job definition</a> in the <i>Batch User Guide</i>.</p> <note> <p>If the job is run on Fargate resources, then <code>multinode</code> isn't supported.</p> </note>|
|» parameters|body|object|false|Default parameter substitution placeholders to set in the job definition. Parameters are specified as a key-value pair mapping. Parameters in a <code>SubmitJob</code> request override any corresponding parameter defaults from the job definition.|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|
|» schedulingPriority|body|integer|false|<p>The scheduling priority for jobs that are submitted with this job definition. This only affects jobs in job queues with a fair share policy. Jobs with a higher scheduling priority are scheduled before jobs with a lower scheduling priority.</p> <p>The minimum supported value is 0 and the maximum supported value is 9999.</p>|
|» containerProperties|body|object|false|Container properties are used for Amazon ECS based job definitions. These properties to describe the container that's launched as part of a job.|
|» » image|body|object|false|none|
|» » vcpus|body|object|false|none|
|» » memory|body|object|false|none|
|» » command|body|object|false|none|
|» » jobRoleArn|body|object|false|none|
|» » executionRoleArn|body|object|false|none|
|» » volumes|body|object|false|none|
|» » environment|body|object|false|none|
|» » mountPoints|body|object|false|none|
|» » readonlyRootFilesystem|body|object|false|none|
|» » privileged|body|object|false|none|
|» » ulimits|body|object|false|none|
|» » user|body|object|false|none|
|» » instanceType|body|object|false|none|
|» » resourceRequirements|body|object|false|none|
|» » linuxParameters|body|object|false|none|
|» » » devices|body|object|false|none|
|» » » initProcessEnabled|body|object|false|none|
|» » » sharedMemorySize|body|object|false|none|
|» » » tmpfs|body|object|false|none|
|» » » maxSwap|body|object|false|none|
|» » » swappiness|body|object|false|none|
|» » logConfiguration|body|object|false|none|
|» » » logDriver|body|object|true|none|
|» » » options|body|object|false|none|
|» » » » **additionalProperties**|body|[String](#schemastring)|false|none|
|» » » secretOptions|body|object|false|none|
|» » secrets|body|object|false|none|
|» » networkConfiguration|body|object|false|none|
|» » » assignPublicIp|body|object|false|none|
|» » fargatePlatformConfiguration|body|object|false|none|
|» » » platformVersion|body|object|false|none|
|» » ephemeralStorage|body|object|false|none|
|» » » sizeInGiB|body|object|true|none|
|» » runtimePlatform|body|[RuntimePlatform](#schemaruntimeplatform)|false|An object that represents the compute environment architecture for Batch jobs on Fargate.|
|» nodeProperties|body|object|false|<p>An object that represents the node properties of a multi-node parallel job.</p> <note> <p>Node properties can't be specified for Amazon EKS based job definitions.</p> </note>|
|» » numNodes|body|object|false|none|
|» » mainNode|body|object|false|none|
|» » nodeRangeProperties|body|object|false|none|
|» retryStrategy|body|object|false|The retry strategy that's associated with a job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html">Automated job retries</a> in the <i>Batch User Guide</i>.|
|» » attempts|body|object|false|none|
|» » evaluateOnExit|body|object|false|none|
|» propagateTags|body|boolean|false|<p>Specifies whether to propagate the tags from the job or job definition to the corresponding Amazon ECS task. If no value is specified, the tags are not propagated. Tags can only be propagated to the tasks during task creation. For tags with the same name, job tags are given priority over job definitions tags. If the total number of combined tags from the job and job definition is over 50, the job is moved to the <code>FAILED</code> state.</p> <note> <p>If the job runs on Amazon EKS resources, then you must not specify <code>propagateTags</code>.</p> </note>|
|» timeout|body|object|false|An object that represents a job timeout configuration.|
|» » attemptDurationSeconds|body|object|false|none|
|» tags|body|object|false|The tags that you apply to the job definition to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/using-tags.html">Tagging Amazon Web Services Resources</a> in <i>Batch User Guide</i>.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» platformCapabilities|body|[[PlatformCapability](#schemaplatformcapability)]|false|<p>The platform capabilities required by the job definition. If no value is specified, it defaults to <code>EC2</code>. To run the job on Fargate resources, specify <code>FARGATE</code>.</p> <note> <p>If the job runs on Amazon EKS resources, then you must not specify <code>platformCapabilities</code>.</p> </note>|
|» eksProperties|body|object|false|An object that contains the properties for the Kubernetes resources of a job.|
|» » podProperties|body|object|false|none|
|» » » serviceAccountName|body|object|false|none|
|» » » hostNetwork|body|object|false|none|
|» » » dnsPolicy|body|object|false|none|
|» » » containers|body|object|false|none|
|» » » volumes|body|object|false|none|
|» » » metadata|body|object|false|none|
|» » » » labels|body|object|false|none|
|» » » » » **additionalProperties**|body|[String](#schemastring)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|container|
|» type|multinode|
|» platformCapabilities|EC2|
|» platformCapabilities|FARGATE|

> Example responses

> 200 Response

```json
{
  "jobDefinitionArn": "arn:aws:batch:us-east-1:012345678910:job-definition/sleep30:1",
  "jobDefinitionName": "sleep30",
  "revision": 1
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="registerjobdefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegisterJobDefinitionResponse](#schemaregisterjobdefinitionresponse)|
|480|480|ClientException|[ClientException](#schemaclientexception)|
|481|481|ServerException|[ServerException](#schemaserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SubmitJob

<a id="opIdSubmitJob"></a>

> Code samples

```bash
curl https://batch.us-east-1.amazonaws.com/v1/submitjob \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "jobName": "string",
    "jobQueue": "string",
    "shareIdentifier": "string",
    "schedulingPriorityOverride": 0,
    "arrayProperties": {
      "size": {}
    },
    "dependsOn": [
      {
        "jobId": {},
        "type": {}
      }
    ],
    "jobDefinition": "string",
    "parameters": {
      "property1": "string",
      "property2": "string"
    },
    "containerOverrides": {
      "vcpus": {},
      "memory": {},
      "command": {},
      "instanceType": {},
      "environment": {},
      "resourceRequirements": {}
    },
    "nodeOverrides": {
      "numNodes": {},
      "nodePropertyOverrides": {}
    },
    "retryStrategy": {
      "attempts": {},
      "evaluateOnExit": {}
    },
    "propagateTags": true,
    "timeout": {
      "attemptDurationSeconds": {}
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "eksPropertiesOverride": {
      "podProperties": {
        "containers": {},
        "metadata": {
          "labels": {
            "property1": "string",
            "property2": "string"
          }
        }
      }
    }
  }'
```

`POST /v1/submitjob`

<p>Submits an Batch job from a job definition. Parameters that are specified during <a>SubmitJob</a> override parameters defined in the job definition. vCPU and memory requirements that are specified in the <code>resourceRequirements</code> objects in the job definition are the exception. They can't be overridden this way using the <code>memory</code> and <code>vcpus</code> parameters. Rather, you must specify updates to job definition parameters in a <code>resourceRequirements</code> object that's included in the <code>containerOverrides</code> parameter.</p> <note> <p>Job queues with a scheduling policy are limited to 500 active fair share identifiers at a time. </p> </note> <important> <p>Jobs that run on Fargate resources can't be guaranteed to run for more than 14 days. This is because, after 14 days, Fargate resources might become unavailable and job might be terminated.</p> </important>

> Body parameter

```json
{
  "jobName": "string",
  "jobQueue": "string",
  "shareIdentifier": "string",
  "schedulingPriorityOverride": 0,
  "arrayProperties": {
    "size": {}
  },
  "dependsOn": [
    {
      "jobId": {},
      "type": {}
    }
  ],
  "jobDefinition": "string",
  "parameters": {
    "property1": "string",
    "property2": "string"
  },
  "containerOverrides": {
    "vcpus": {},
    "memory": {},
    "command": {},
    "instanceType": {},
    "environment": {},
    "resourceRequirements": {}
  },
  "nodeOverrides": {
    "numNodes": {},
    "nodePropertyOverrides": {}
  },
  "retryStrategy": {
    "attempts": {},
    "evaluateOnExit": {}
  },
  "propagateTags": true,
  "timeout": {
    "attemptDurationSeconds": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "eksPropertiesOverride": {
    "podProperties": {
      "containers": {},
      "metadata": {
        "labels": {
          "property1": "string",
          "property2": "string"
        }
      }
    }
  }
}
```

<h3 id="submitjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» jobName|body|string|true|The name of the job. It can be up to 128 letters long. The first character must be alphanumeric, can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).|
|» jobQueue|body|string|true|The job queue where the job is submitted. You can specify either the name or the Amazon Resource Name (ARN) of the queue.|
|» shareIdentifier|body|string|false|<p>The share identifier for the job. Don't specify this parameter if the job queue doesn't have a scheduling policy. If the job queue has a scheduling policy, then this parameter must be specified.</p> <p>This string is limited to 255 alphanumeric characters, and can be followed by an asterisk (*).</p>|
|» schedulingPriorityOverride|body|integer|false|<p>The scheduling priority for the job. This only affects jobs in job queues with a fair share policy. Jobs with a higher scheduling priority are scheduled before jobs with a lower scheduling priority. This overrides any scheduling priority in the job definition.</p> <p>The minimum supported value is 0 and the maximum supported value is 9999.</p>|
|» arrayProperties|body|object|false|An object that represents an Batch array job.|
|» » size|body|object|false|none|
|» dependsOn|body|[[JobDependency](#schemajobdependency)]|false|A list of dependencies for the job. A job can depend upon a maximum of 20 jobs. You can specify a <code>SEQUENTIAL</code> type dependency without specifying a job ID for array jobs so that each child array job completes sequentially, starting at index 0. You can also specify an <code>N_TO_N</code> type dependency with a job ID for array jobs. In that case, each index child of this job must wait for the corresponding index child of each dependency to complete before it can begin.|
|» jobDefinition|body|string|true|<p>The job definition used by this job. This value can be one of <code>definition-name</code>, <code>definition-name:revision</code>, or the Amazon Resource Name (ARN) for the job definition, with or without the revision (<code>arn:aws:batch:<i>region</i>:<i>account</i>:job-definition/<i>definition-name</i>:<i>revision</i> </code>, or <code>arn:aws:batch:<i>region</i>:<i>account</i>:job-definition/<i>definition-name</i> </code>).</p> <p>If the revision is not specified, then the latest active revision is used.</p>|
|» parameters|body|object|false|Additional parameters passed to the job that replace parameter substitution placeholders that are set in the job definition. Parameters are specified as a key and value pair mapping. Parameters in a <code>SubmitJob</code> request override any corresponding parameter defaults from the job definition.|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|
|» containerOverrides|body|object|false|<p>The overrides that should be sent to a container.</p> <p>For information about using Batch overrides when you connect event sources to targets, see <a href="https://docs.aws.amazon.com/eventbridge/latest/pipes-reference/API_BatchContainerOverrides.html">BatchContainerOverrides</a>.</p>|
|» » vcpus|body|object|false|none|
|» » memory|body|object|false|none|
|» » command|body|object|false|none|
|» » instanceType|body|object|false|none|
|» » environment|body|object|false|none|
|» » resourceRequirements|body|object|false|none|
|» nodeOverrides|body|object|false|<p>An object that represents any node overrides to a job definition that's used in a <a>SubmitJob</a> API operation.</p> <note> <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't provide it for these jobs. Rather, use <code>containerOverrides</code> instead.</p> </note>|
|» » numNodes|body|object|false|none|
|» » nodePropertyOverrides|body|object|false|none|
|» retryStrategy|body|object|false|The retry strategy that's associated with a job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html">Automated job retries</a> in the <i>Batch User Guide</i>.|
|» » attempts|body|object|false|none|
|» » evaluateOnExit|body|object|false|none|
|» propagateTags|body|boolean|false|Specifies whether to propagate the tags from the job or job definition to the corresponding Amazon ECS task. If no value is specified, the tags aren't propagated. Tags can only be propagated to the tasks during task creation. For tags with the same name, job tags are given priority over job definitions tags. If the total number of combined tags from the job and job definition is over 50, the job is moved to the <code>FAILED</code> state. When specified, this overrides the tag propagation setting in the job definition.|
|» timeout|body|object|false|An object that represents a job timeout configuration.|
|» » attemptDurationSeconds|body|object|false|none|
|» tags|body|object|false|The tags that you apply to the job request to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in <i>Amazon Web Services General Reference</i>.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» eksPropertiesOverride|body|object|false|An object that contains overrides for the Kubernetes resources of a job.|
|» » podProperties|body|object|false|none|
|» » » containers|body|object|false|none|
|» » » metadata|body|object|false|none|
|» » » » labels|body|object|false|none|
|» » » » » **additionalProperties**|body|[String](#schemastring)|false|none|

> Example responses

> 200 Response

```json
{
  "jobId": "876da822-4198-45f2-a252-6cea32512ea8",
  "jobName": "example"
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="submitjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SubmitJobResponse](#schemasubmitjobresponse)|
|480|480|ClientException|[ClientException](#schemaclientexception)|
|481|481|ServerException|[ServerException](#schemaserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TerminateJob

<a id="opIdTerminateJob"></a>

> Code samples

```bash
curl https://batch.us-east-1.amazonaws.com/v1/terminatejob \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "jobId": "string",
    "reason": "string"
  }'
```

`POST /v1/terminatejob`

Terminates a job in a job queue. Jobs that are in the <code>STARTING</code> or <code>RUNNING</code> state are terminated, which causes them to transition to <code>FAILED</code>. Jobs that have not progressed to the <code>STARTING</code> state are cancelled.

> Body parameter

```json
{
  "jobId": "string",
  "reason": "string"
}
```

<h3 id="terminatejob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» jobId|body|string|true|The Batch job ID of the job to terminate.|
|» reason|body|string|true|A message to attach to the job that explains the reason for canceling it. This message is returned by future <a>DescribeJobs</a> operations on the job. This message is also recorded in the Batch activity logs.|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="terminatejob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TerminateJobResponse](#schematerminatejobresponse)|
|480|480|ClientException|[ClientException](#schemaclientexception)|
|481|481|ServerException|[ServerException](#schemaserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://batch.us-east-1.amazonaws.com/v1/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/tags/{resourceArn}#tagKeys`

Deletes specified tags from an Batch resource.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon Resource Name (ARN) of the resource from which to delete tags. Batch resources that support tags are compute environments, jobs, job definitions, job queues, and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported.|
|tagKeys|query|[[TagKey](#schematagkey)]|true|The keys of the tags to be removed.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|ClientException|[ClientException](#schemaclientexception)|
|481|481|ServerException|[ServerException](#schemaserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateComputeEnvironment

<a id="opIdUpdateComputeEnvironment"></a>

> Code samples

```bash
curl https://batch.us-east-1.amazonaws.com/v1/updatecomputeenvironment \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "computeEnvironment": "string",
    "state": "ENABLED",
    "unmanagedvCpus": 0,
    "computeResources": {
      "minvCpus": {},
      "maxvCpus": {},
      "desiredvCpus": {},
      "subnets": {},
      "securityGroupIds": {},
      "allocationStrategy": {},
      "instanceTypes": {},
      "ec2KeyPair": {},
      "instanceRole": {},
      "tags": {
        "property1": "string",
        "property2": "string"
      },
      "placementGroup": {},
      "bidPercentage": {},
      "launchTemplate": {
        "launchTemplateId": {},
        "launchTemplateName": {},
        "version": {}
      },
      "ec2Configuration": {},
      "updateToLatestImageVersion": {},
      "type": {},
      "imageId": {}
    },
    "serviceRole": "string",
    "updatePolicy": {
      "terminateJobsOnUpdate": {},
      "jobExecutionTimeoutMinutes": {}
    }
  }'
```

`POST /v1/updatecomputeenvironment`

Updates an Batch compute environment.

> Body parameter

```json
{
  "computeEnvironment": "string",
  "state": "ENABLED",
  "unmanagedvCpus": 0,
  "computeResources": {
    "minvCpus": {},
    "maxvCpus": {},
    "desiredvCpus": {},
    "subnets": {},
    "securityGroupIds": {},
    "allocationStrategy": {},
    "instanceTypes": {},
    "ec2KeyPair": {},
    "instanceRole": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "placementGroup": {},
    "bidPercentage": {},
    "launchTemplate": {
      "launchTemplateId": {},
      "launchTemplateName": {},
      "version": {}
    },
    "ec2Configuration": {},
    "updateToLatestImageVersion": {},
    "type": {},
    "imageId": {}
  },
  "serviceRole": "string",
  "updatePolicy": {
    "terminateJobsOnUpdate": {},
    "jobExecutionTimeoutMinutes": {}
  }
}
```

<h3 id="updatecomputeenvironment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» computeEnvironment|body|string|true|The name or full Amazon Resource Name (ARN) of the compute environment to update.|
|» state|body|string|false|<p>The state of the compute environment. Compute environments in the <code>ENABLED</code> state can accept jobs from a queue and scale in or out automatically based on the workload demand of its associated queues.</p> <p>If the state is <code>ENABLED</code>, then the Batch scheduler can attempt to place jobs from an associated job queue on the compute resources within the environment. If the compute environment is managed, then it can scale its instances out or in automatically, based on the job queue demand.</p> <p>If the state is <code>DISABLED</code>, then the Batch scheduler doesn't attempt to place jobs within the environment. Jobs in a <code>STARTING</code> or <code>RUNNING</code> state continue to progress normally. Managed compute environments in the <code>DISABLED</code> state don't scale out. </p> <note> <p>Compute environments in a <code>DISABLED</code> state may continue to incur billing charges. To prevent additional charges, turn off and then delete the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environment_parameters.html#compute_environment_state">State</a> in the <i>Batch User Guide</i>.</p> </note> <p>When an instance is idle, the instance scales down to the <code>minvCpus</code> value. However, the instance size doesn't change. For example, consider a <code>c5.8xlarge</code> instance with a <code>minvCpus</code> value of <code>4</code> and a <code>desiredvCpus</code> value of <code>36</code>. This instance doesn't scale down to a <code>c5.large</code> instance.</p>|
|» unmanagedvCpus|body|integer|false|The maximum number of vCPUs expected to be used for an unmanaged compute environment. Don't specify this parameter for a managed compute environment. This parameter is only used for fair share scheduling to reserve vCPU capacity for new share identifiers. If this parameter isn't provided for a fair share job queue, no vCPU capacity is reserved.|
|» computeResources|body|object|false|An object that represents the attributes of a compute environment that can be updated. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>.|
|» » minvCpus|body|object|false|none|
|» » maxvCpus|body|object|false|none|
|» » desiredvCpus|body|object|false|none|
|» » subnets|body|object|false|none|
|» » securityGroupIds|body|object|false|none|
|» » allocationStrategy|body|object|false|none|
|» » instanceTypes|body|object|false|none|
|» » ec2KeyPair|body|object|false|none|
|» » instanceRole|body|object|false|none|
|» » tags|body|object|false|none|
|» » » **additionalProperties**|body|[String](#schemastring)|false|none|
|» » placementGroup|body|object|false|none|
|» » bidPercentage|body|object|false|none|
|» » launchTemplate|body|object|false|none|
|» » » launchTemplateId|body|object|false|none|
|» » » launchTemplateName|body|object|false|none|
|» » » version|body|object|false|none|
|» » ec2Configuration|body|object|false|none|
|» » updateToLatestImageVersion|body|object|false|none|
|» » type|body|object|false|none|
|» » imageId|body|object|false|none|
|» serviceRole|body|string|false|<p>The full Amazon Resource Name (ARN) of the IAM role that allows Batch to make calls to other Amazon Web Services services on your behalf. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/service_IAM_role.html">Batch service IAM role</a> in the <i>Batch User Guide</i>.</p> <important> <p>If the compute environment has a service-linked role, it can't be changed to use a regular IAM role. Likewise, if the compute environment has a regular IAM role, it can't be changed to use a service-linked role. To update the parameters for the compute environment that require an infrastructure update to change, the <b>AWSServiceRoleForBatch</b> service-linked role must be used. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>.</p> </important> <p>If your specified role has a path other than <code>/</code>, then you must either specify the full role ARN (recommended) or prefix the role name with the path.</p> <note> <p>Depending on how you created your Batch service role, its ARN might contain the <code>service-role</code> path prefix. When you only specify the name of the service role, Batch assumes that your ARN doesn't use the <code>service-role</code> path prefix. Because of this, we recommend that you specify the full ARN of your service role when you create compute environments.</p> </note>|
|» updatePolicy|body|object|false|Specifies the infrastructure update policy for the compute environment. For more information about infrastructure updates, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>.|
|» » terminateJobsOnUpdate|body|object|false|none|
|» » jobExecutionTimeoutMinutes|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» state|ENABLED|
|» state|DISABLED|

> Example responses

> 200 Response

```json
{
  "computeEnvironmentArn": "arn:aws:batch:us-east-1:012345678910:compute-environment/P2OnDemand",
  "computeEnvironmentName": "P2OnDemand"
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="updatecomputeenvironment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateComputeEnvironmentResponse](#schemaupdatecomputeenvironmentresponse)|
|480|480|ClientException|[ClientException](#schemaclientexception)|
|481|481|ServerException|[ServerException](#schemaserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateJobQueue

<a id="opIdUpdateJobQueue"></a>

> Code samples

```bash
curl https://batch.us-east-1.amazonaws.com/v1/updatejobqueue \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "jobQueue": "string",
    "state": "ENABLED",
    "schedulingPolicyArn": "string",
    "priority": 0,
    "computeEnvironmentOrder": [
      {
        "order": {},
        "computeEnvironment": {}
      }
    ]
  }'
```

`POST /v1/updatejobqueue`

Updates a job queue.

> Body parameter

```json
{
  "jobQueue": "string",
  "state": "ENABLED",
  "schedulingPolicyArn": "string",
  "priority": 0,
  "computeEnvironmentOrder": [
    {
      "order": {},
      "computeEnvironment": {}
    }
  ]
}
```

<h3 id="updatejobqueue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» jobQueue|body|string|true|The name or the Amazon Resource Name (ARN) of the job queue.|
|» state|body|string|false|Describes the queue's ability to accept new jobs. If the job queue state is <code>ENABLED</code>, it can accept jobs. If the job queue state is <code>DISABLED</code>, new jobs can't be added to the queue, but jobs already in the queue can finish.|
|» schedulingPolicyArn|body|string|false|Amazon Resource Name (ARN) of the fair share scheduling policy. Once a job queue is created, the fair share scheduling policy can be replaced but not removed. The format is <code>aws:<i>Partition</i>:batch:<i>Region</i>:<i>Account</i>:scheduling-policy/<i>Name</i> </code>. For example, <code>aws:aws:batch:us-west-2:123456789012:scheduling-policy/MySchedulingPolicy</code>.|
|» priority|body|integer|false|The priority of the job queue. Job queues with a higher priority (or a higher integer value for the <code>priority</code> parameter) are evaluated first when associated with the same compute environment. Priority is determined in descending order. For example, a job queue with a priority value of <code>10</code> is given scheduling preference over a job queue with a priority value of <code>1</code>. All of the compute environments must be either EC2 (<code>EC2</code> or <code>SPOT</code>) or Fargate (<code>FARGATE</code> or <code>FARGATE_SPOT</code>). EC2 and Fargate compute environments can't be mixed.|
|» computeEnvironmentOrder|body|[[ComputeEnvironmentOrder](#schemacomputeenvironmentorder)]|false|<p>Details the set of compute environments mapped to a job queue and their order relative to each other. This is one of the parameters used by the job scheduler to determine which compute environment runs a given job. Compute environments must be in the <code>VALID</code> state before you can associate them with a job queue. All of the compute environments must be either EC2 (<code>EC2</code> or <code>SPOT</code>) or Fargate (<code>FARGATE</code> or <code>FARGATE_SPOT</code>). EC2 and Fargate compute environments can't be mixed.</p> <note> <p>All compute environments that are associated with a job queue must share the same architecture. Batch doesn't support mixing compute environment architecture types in a single job queue.</p> </note>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» state|ENABLED|
|» state|DISABLED|

> Example responses

> 200 Response

```json
{
  "jobQueueArn": "arn:aws:batch:us-east-1:012345678910:job-queue/GPGPU",
  "jobQueueName": "GPGPU"
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="updatejobqueue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateJobQueueResponse](#schemaupdatejobqueueresponse)|
|480|480|ClientException|[ClientException](#schemaclientexception)|
|481|481|ServerException|[ServerException](#schemaserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateSchedulingPolicy

<a id="opIdUpdateSchedulingPolicy"></a>

> Code samples

```bash
curl https://batch.us-east-1.amazonaws.com/v1/updateschedulingpolicy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "arn": "string",
    "fairsharePolicy": {
      "shareDecaySeconds": {},
      "computeReservation": {},
      "shareDistribution": {}
    }
  }'
```

`POST /v1/updateschedulingpolicy`

Updates a scheduling policy.

> Body parameter

```json
{
  "arn": "string",
  "fairsharePolicy": {
    "shareDecaySeconds": {},
    "computeReservation": {},
    "shareDistribution": {}
  }
}
```

<h3 id="updateschedulingpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» arn|body|string|true|The Amazon Resource Name (ARN) of the scheduling policy to update.|
|» fairsharePolicy|body|object|false|The fair share policy for a scheduling policy.|
|» » shareDecaySeconds|body|object|false|none|
|» » computeReservation|body|object|false|none|
|» » shareDistribution|body|object|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="updateschedulingpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateSchedulingPolicyResponse](#schemaupdateschedulingpolicyresponse)|
|480|480|ClientException|[ClientException](#schemaclientexception)|
|481|481|ServerException|[ServerException](#schemaserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CancelJobResponse">CancelJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacanceljobresponse"></a>
<a id="schema_CancelJobResponse"></a>
<a id="tocScanceljobresponse"></a>
<a id="tocscanceljobresponse"></a>

```json
{}
```

<h2 id="tocS_ClientException">ClientException</h2>
<!-- backwards compatibility -->
<a id="schemaclientexception"></a>
<a id="schema_ClientException"></a>
<a id="tocSclientexception"></a>
<a id="tocsclientexception"></a>

```json
null
```

<h2 id="tocS_ServerException">ServerException</h2>
<!-- backwards compatibility -->
<a id="schemaserverexception"></a>
<a id="schema_ServerException"></a>
<a id="tocSserverexception"></a>
<a id="tocsserverexception"></a>

```json
null
```

<h2 id="tocS_CreateComputeEnvironmentResponse">CreateComputeEnvironmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatecomputeenvironmentresponse"></a>
<a id="schema_CreateComputeEnvironmentResponse"></a>
<a id="tocScreatecomputeenvironmentresponse"></a>
<a id="tocscreatecomputeenvironmentresponse"></a>

```json
{
  "computeEnvironmentArn": "arn:aws:batch:us-east-1:012345678910:compute-environment/M4Spot",
  "computeEnvironmentName": "M4Spot"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|computeEnvironmentName|object|false|none|none|
|computeEnvironmentArn|object|false|none|none|

<h2 id="tocS_CRType">CRType</h2>
<!-- backwards compatibility -->
<a id="schemacrtype"></a>
<a id="schema_CRType"></a>
<a id="tocScrtype"></a>
<a id="tocscrtype"></a>

```json
"EC2"
```

<h2 id="tocS_CRAllocationStrategy">CRAllocationStrategy</h2>
<!-- backwards compatibility -->
<a id="schemacrallocationstrategy"></a>
<a id="schema_CRAllocationStrategy"></a>
<a id="tocScrallocationstrategy"></a>
<a id="tocscrallocationstrategy"></a>

```json
"BEST_FIT"
```

<h2 id="tocS_Integer">Integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_Integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
0
```

<h2 id="tocS_StringList">StringList</h2>
<!-- backwards compatibility -->
<a id="schemastringlist"></a>
<a id="schema_StringList"></a>
<a id="tocSstringlist"></a>
<a id="tocsstringlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_TagsMap">TagsMap</h2>
<!-- backwards compatibility -->
<a id="schematagsmap"></a>
<a id="schema_TagsMap"></a>
<a id="tocStagsmap"></a>
<a id="tocstagsmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[String](#schemastring)|false|none|none|

<h2 id="tocS_LaunchTemplateSpecification">LaunchTemplateSpecification</h2>
<!-- backwards compatibility -->
<a id="schemalaunchtemplatespecification"></a>
<a id="schema_LaunchTemplateSpecification"></a>
<a id="tocSlaunchtemplatespecification"></a>
<a id="tocslaunchtemplatespecification"></a>

```json
{
  "launchTemplateId": {},
  "launchTemplateName": {},
  "version": {}
}
```

<p>An object that represents a launch template that's associated with a compute resource. You must specify either the launch template ID or launch template name in the request, but not both.</p> <p>If security groups are specified using both the <code>securityGroupIds</code> parameter of <code>CreateComputeEnvironment</code> and the launch template, the values in the <code>securityGroupIds</code> parameter of <code>CreateComputeEnvironment</code> will be used.</p> <note> <p>This object isn't applicable to jobs that are running on Fargate resources.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|launchTemplateId|object|false|none|none|
|launchTemplateName|object|false|none|none|
|version|object|false|none|none|

<h2 id="tocS_Ec2ConfigurationList">Ec2ConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemaec2configurationlist"></a>
<a id="schema_Ec2ConfigurationList"></a>
<a id="tocSec2configurationlist"></a>
<a id="tocsec2configurationlist"></a>

```json
[
  {
    "imageType": {},
    "imageIdOverride": {},
    "imageKubernetesVersion": {}
  }
]
```

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_CreateJobQueueResponse">CreateJobQueueResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatejobqueueresponse"></a>
<a id="schema_CreateJobQueueResponse"></a>
<a id="tocScreatejobqueueresponse"></a>
<a id="tocscreatejobqueueresponse"></a>

```json
{
  "jobQueueArn": "arn:aws:batch:us-east-1:012345678910:job-queue/HighPriority",
  "jobQueueName": "HighPriority"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobQueueName|object|true|none|none|
|jobQueueArn|object|true|none|none|

<h2 id="tocS_ComputeEnvironmentOrder">ComputeEnvironmentOrder</h2>
<!-- backwards compatibility -->
<a id="schemacomputeenvironmentorder"></a>
<a id="schema_ComputeEnvironmentOrder"></a>
<a id="tocScomputeenvironmentorder"></a>
<a id="tocscomputeenvironmentorder"></a>

```json
{
  "order": {},
  "computeEnvironment": {}
}
```

<p>The order that compute environments are tried in for job placement within a queue. Compute environments are tried in ascending order. For example, if two compute environments are associated with a job queue, the compute environment with a lower order integer value is tried for job placement first. Compute environments must be in the <code>VALID</code> state before you can associate them with a job queue. All of the compute environments must be either EC2 (<code>EC2</code> or <code>SPOT</code>) or Fargate (<code>FARGATE</code> or <code>FARGATE_SPOT</code>); EC2 and Fargate compute environments can't be mixed.</p> <note> <p>All compute environments that are associated with a job queue must share the same architecture. Batch doesn't support mixing compute environment architecture types in a single job queue.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|order|object|true|none|none|
|computeEnvironment|object|true|none|none|

<h2 id="tocS_CreateSchedulingPolicyResponse">CreateSchedulingPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateschedulingpolicyresponse"></a>
<a id="schema_CreateSchedulingPolicyResponse"></a>
<a id="tocScreateschedulingpolicyresponse"></a>
<a id="tocscreateschedulingpolicyresponse"></a>

```json
{
  "name": {},
  "arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|arn|object|true|none|none|

<h2 id="tocS_ShareAttributesList">ShareAttributesList</h2>
<!-- backwards compatibility -->
<a id="schemashareattributeslist"></a>
<a id="schema_ShareAttributesList"></a>
<a id="tocSshareattributeslist"></a>
<a id="tocsshareattributeslist"></a>

```json
[
  {
    "shareIdentifier": {},
    "weightFactor": {}
  }
]
```

<h2 id="tocS_DeleteComputeEnvironmentResponse">DeleteComputeEnvironmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletecomputeenvironmentresponse"></a>
<a id="schema_DeleteComputeEnvironmentResponse"></a>
<a id="tocSdeletecomputeenvironmentresponse"></a>
<a id="tocsdeletecomputeenvironmentresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteJobQueueResponse">DeleteJobQueueResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletejobqueueresponse"></a>
<a id="schema_DeleteJobQueueResponse"></a>
<a id="tocSdeletejobqueueresponse"></a>
<a id="tocsdeletejobqueueresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteSchedulingPolicyResponse">DeleteSchedulingPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteschedulingpolicyresponse"></a>
<a id="schema_DeleteSchedulingPolicyResponse"></a>
<a id="tocSdeleteschedulingpolicyresponse"></a>
<a id="tocsdeleteschedulingpolicyresponse"></a>

```json
{}
```

<h2 id="tocS_DeregisterJobDefinitionResponse">DeregisterJobDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaderegisterjobdefinitionresponse"></a>
<a id="schema_DeregisterJobDefinitionResponse"></a>
<a id="tocSderegisterjobdefinitionresponse"></a>
<a id="tocsderegisterjobdefinitionresponse"></a>

```json
{}
```

<h2 id="tocS_DescribeComputeEnvironmentsResponse">DescribeComputeEnvironmentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribecomputeenvironmentsresponse"></a>
<a id="schema_DescribeComputeEnvironmentsResponse"></a>
<a id="tocSdescribecomputeenvironmentsresponse"></a>
<a id="tocsdescribecomputeenvironmentsresponse"></a>

```json
{
  "computeEnvironments": [
    {
      "type": "MANAGED",
      "computeEnvironmentArn": "arn:aws:batch:us-east-1:012345678910:compute-environment/P2OnDemand",
      "computeEnvironmentName": "P2OnDemand",
      "computeResources": {
        "type": "EC2",
        "desiredvCpus": 48,
        "ec2KeyPair": "id_rsa",
        "instanceRole": "ecsInstanceRole",
        "instanceTypes": [
          "p2"
        ],
        "maxvCpus": 128,
        "minvCpus": 0,
        "securityGroupIds": [
          "sg-cf5093b2"
        ],
        "subnets": [
          "subnet-220c0e0a",
          "subnet-1a95556d",
          "subnet-978f6dce"
        ],
        "tags": {
          "Name": "Batch Instance - P2OnDemand"
        }
      },
      "ecsClusterArn": "arn:aws:ecs:us-east-1:012345678910:cluster/P2OnDemand_Batch_2c06f29d-d1fe-3a49-879d-42394c86effc",
      "serviceRole": "arn:aws:iam::012345678910:role/AWSBatchServiceRole",
      "state": "ENABLED",
      "status": "VALID",
      "statusReason": "ComputeEnvironment Healthy"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|computeEnvironments|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribeJobDefinitionsResponse">DescribeJobDefinitionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribejobdefinitionsresponse"></a>
<a id="schema_DescribeJobDefinitionsResponse"></a>
<a id="tocSdescribejobdefinitionsresponse"></a>
<a id="tocsdescribejobdefinitionsresponse"></a>

```json
{
  "jobDefinitions": [
    {
      "type": "container",
      "containerProperties": {
        "command": [
          "sleep",
          "60"
        ],
        "environment": [],
        "image": "busybox",
        "mountPoints": [],
        "resourceRequirements": [
          {
            "type": "MEMORY",
            "value": "128"
          },
          {
            "type": "VCPU",
            "value": "1"
          }
        ],
        "ulimits": [],
        "volumes": []
      },
      "jobDefinitionArn": "arn:aws:batch:us-east-1:012345678910:job-definition/sleep60:1",
      "jobDefinitionName": "sleep60",
      "revision": 1,
      "status": "ACTIVE"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobDefinitions|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribeJobQueuesResponse">DescribeJobQueuesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribejobqueuesresponse"></a>
<a id="schema_DescribeJobQueuesResponse"></a>
<a id="tocSdescribejobqueuesresponse"></a>
<a id="tocsdescribejobqueuesresponse"></a>

```json
{
  "jobQueues": [
    {
      "computeEnvironmentOrder": [
        {
          "computeEnvironment": "arn:aws:batch:us-east-1:012345678910:compute-environment/C4OnDemand",
          "order": 1
        }
      ],
      "jobQueueArn": "arn:aws:batch:us-east-1:012345678910:job-queue/HighPriority",
      "jobQueueName": "HighPriority",
      "priority": 1,
      "state": "ENABLED",
      "status": "VALID",
      "statusReason": "JobQueue Healthy"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobQueues|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribeJobsResponse">DescribeJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribejobsresponse"></a>
<a id="schema_DescribeJobsResponse"></a>
<a id="tocSdescribejobsresponse"></a>
<a id="tocsdescribejobsresponse"></a>

```json
{
  "jobs": [
    {
      "container": {
        "command": [
          "sleep",
          "60"
        ],
        "containerInstanceArn": "arn:aws:ecs:us-east-1:012345678910:container-instance/5406d7cd-58bd-4b8f-9936-48d7c6b1526c",
        "environment": [],
        "exitCode": 0,
        "image": "busybox",
        "memory": 128,
        "mountPoints": [],
        "ulimits": [],
        "vcpus": 1,
        "volumes": []
      },
      "createdAt": 1480460782010,
      "dependsOn": [],
      "jobDefinition": "sleep60",
      "jobId": "24fa2d7a-64c4-49d2-8b47-f8da4fbde8e9",
      "jobName": "example",
      "jobQueue": "arn:aws:batch:us-east-1:012345678910:job-queue/HighPriority",
      "parameters": {},
      "startedAt": 1480460816500,
      "status": "SUCCEEDED",
      "stoppedAt": 1480460880699
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobs|object|false|none|none|

<h2 id="tocS_DescribeSchedulingPoliciesResponse">DescribeSchedulingPoliciesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeschedulingpoliciesresponse"></a>
<a id="schema_DescribeSchedulingPoliciesResponse"></a>
<a id="tocSdescribeschedulingpoliciesresponse"></a>
<a id="tocsdescribeschedulingpoliciesresponse"></a>

```json
{
  "schedulingPolicies": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schedulingPolicies|object|false|none|none|

<h2 id="tocS_ListJobsResponse">ListJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistjobsresponse"></a>
<a id="schema_ListJobsResponse"></a>
<a id="tocSlistjobsresponse"></a>
<a id="tocslistjobsresponse"></a>

```json
{
  "jobSummaryList": [
    {
      "jobId": "68f0c163-fbd4-44e6-9fd1-25b14a434786",
      "jobName": "example"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobSummaryList|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_KeyValuesPair">KeyValuesPair</h2>
<!-- backwards compatibility -->
<a id="schemakeyvaluespair"></a>
<a id="schema_KeyValuesPair"></a>
<a id="tocSkeyvaluespair"></a>
<a id="tocskeyvaluespair"></a>

```json
{
  "name": {},
  "values": {}
}
```

A filter name and value pair that's used to return a more specific list of results from a <code>ListJobs</code> API operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|values|object|false|none|none|

<h2 id="tocS_ListSchedulingPoliciesResponse">ListSchedulingPoliciesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistschedulingpoliciesresponse"></a>
<a id="schema_ListSchedulingPoliciesResponse"></a>
<a id="tocSlistschedulingpoliciesresponse"></a>
<a id="tocslistschedulingpoliciesresponse"></a>

```json
{
  "schedulingPolicies": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schedulingPolicies|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "tags": {
    "Department": "Engineering",
    "Stage": "Alpha",
    "User": "JaneDoe"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|false|none|none|

<h2 id="tocS_RegisterJobDefinitionResponse">RegisterJobDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaregisterjobdefinitionresponse"></a>
<a id="schema_RegisterJobDefinitionResponse"></a>
<a id="tocSregisterjobdefinitionresponse"></a>
<a id="tocsregisterjobdefinitionresponse"></a>

```json
{
  "jobDefinitionArn": "arn:aws:batch:us-east-1:012345678910:job-definition/sleep30:1",
  "jobDefinitionName": "sleep30",
  "revision": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobDefinitionName|object|true|none|none|
|jobDefinitionArn|object|true|none|none|
|revision|object|true|none|none|

<h2 id="tocS_Volumes">Volumes</h2>
<!-- backwards compatibility -->
<a id="schemavolumes"></a>
<a id="schema_Volumes"></a>
<a id="tocSvolumes"></a>
<a id="tocsvolumes"></a>

```json
[
  {
    "host": {
      "sourcePath": {}
    },
    "name": {},
    "efsVolumeConfiguration": {
      "fileSystemId": {},
      "rootDirectory": {},
      "transitEncryption": {},
      "transitEncryptionPort": {},
      "authorizationConfig": {
        "accessPointId": {},
        "iam": {}
      }
    }
  }
]
```

<h2 id="tocS_EnvironmentVariables">EnvironmentVariables</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentvariables"></a>
<a id="schema_EnvironmentVariables"></a>
<a id="tocSenvironmentvariables"></a>
<a id="tocsenvironmentvariables"></a>

```json
[
  {
    "name": {},
    "value": {}
  }
]
```

<h2 id="tocS_MountPoints">MountPoints</h2>
<!-- backwards compatibility -->
<a id="schemamountpoints"></a>
<a id="schema_MountPoints"></a>
<a id="tocSmountpoints"></a>
<a id="tocsmountpoints"></a>

```json
[
  {
    "containerPath": {},
    "readOnly": {},
    "sourceVolume": {}
  }
]
```

<h2 id="tocS_Boolean">Boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_Boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_Ulimits">Ulimits</h2>
<!-- backwards compatibility -->
<a id="schemaulimits"></a>
<a id="schema_Ulimits"></a>
<a id="tocSulimits"></a>
<a id="tocsulimits"></a>

```json
[
  {
    "hardLimit": {},
    "name": {},
    "softLimit": {}
  }
]
```

<h2 id="tocS_ResourceRequirements">ResourceRequirements</h2>
<!-- backwards compatibility -->
<a id="schemaresourcerequirements"></a>
<a id="schema_ResourceRequirements"></a>
<a id="tocSresourcerequirements"></a>
<a id="tocsresourcerequirements"></a>

```json
[
  {
    "value": {},
    "type": {}
  }
]
```

<h2 id="tocS_LinuxParameters">LinuxParameters</h2>
<!-- backwards compatibility -->
<a id="schemalinuxparameters"></a>
<a id="schema_LinuxParameters"></a>
<a id="tocSlinuxparameters"></a>
<a id="tocslinuxparameters"></a>

```json
{
  "devices": {},
  "initProcessEnabled": {},
  "sharedMemorySize": {},
  "tmpfs": {},
  "maxSwap": {},
  "swappiness": {}
}
```

Linux-specific modifications that are applied to the container, such as details for device mappings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|devices|object|false|none|none|
|initProcessEnabled|object|false|none|none|
|sharedMemorySize|object|false|none|none|
|tmpfs|object|false|none|none|
|maxSwap|object|false|none|none|
|swappiness|object|false|none|none|

<h2 id="tocS_LogConfiguration">LogConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemalogconfiguration"></a>
<a id="schema_LogConfiguration"></a>
<a id="tocSlogconfiguration"></a>
<a id="tocslogconfiguration"></a>

```json
{
  "logDriver": {},
  "options": {
    "property1": "string",
    "property2": "string"
  },
  "secretOptions": {}
}
```

Log configuration options to send to a custom log driver for the container.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logDriver|object|true|none|none|
|options|object|false|none|none|
|secretOptions|object|false|none|none|

<h2 id="tocS_SecretList">SecretList</h2>
<!-- backwards compatibility -->
<a id="schemasecretlist"></a>
<a id="schema_SecretList"></a>
<a id="tocSsecretlist"></a>
<a id="tocssecretlist"></a>

```json
[
  {
    "name": {},
    "valueFrom": {}
  }
]
```

<h2 id="tocS_NetworkConfiguration">NetworkConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemanetworkconfiguration"></a>
<a id="schema_NetworkConfiguration"></a>
<a id="tocSnetworkconfiguration"></a>
<a id="tocsnetworkconfiguration"></a>

```json
{
  "assignPublicIp": {}
}
```

The network configuration for jobs that are running on Fargate resources. Jobs that are running on EC2 resources must not specify this parameter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assignPublicIp|object|false|none|none|

<h2 id="tocS_FargatePlatformConfiguration">FargatePlatformConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemafargateplatformconfiguration"></a>
<a id="schema_FargatePlatformConfiguration"></a>
<a id="tocSfargateplatformconfiguration"></a>
<a id="tocsfargateplatformconfiguration"></a>

```json
{
  "platformVersion": {}
}
```

The platform configuration for jobs that are running on Fargate resources. Jobs that run on EC2 resources must not specify this parameter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|platformVersion|object|false|none|none|

<h2 id="tocS_EphemeralStorage">EphemeralStorage</h2>
<!-- backwards compatibility -->
<a id="schemaephemeralstorage"></a>
<a id="schema_EphemeralStorage"></a>
<a id="tocSephemeralstorage"></a>
<a id="tocsephemeralstorage"></a>

```json
{
  "sizeInGiB": {}
}
```

The amount of ephemeral storage to allocate for the task. This parameter is used to expand the total amount of ephemeral storage available, beyond the default amount, for tasks hosted on Fargate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sizeInGiB|object|true|none|none|

<h2 id="tocS_RuntimePlatform">RuntimePlatform</h2>
<!-- backwards compatibility -->
<a id="schemaruntimeplatform"></a>
<a id="schema_RuntimePlatform"></a>
<a id="tocSruntimeplatform"></a>
<a id="tocsruntimeplatform"></a>

```json
{
  "operatingSystemFamily": {},
  "cpuArchitecture": {}
}
```

An object that represents the compute environment architecture for Batch jobs on Fargate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operatingSystemFamily|object|false|none|none|
|cpuArchitecture|object|false|none|none|

<h2 id="tocS_NodeRangeProperties">NodeRangeProperties</h2>
<!-- backwards compatibility -->
<a id="schemanoderangeproperties"></a>
<a id="schema_NodeRangeProperties"></a>
<a id="tocSnoderangeproperties"></a>
<a id="tocsnoderangeproperties"></a>

```json
[
  {
    "targetNodes": {},
    "container": {
      "image": {},
      "vcpus": {},
      "memory": {},
      "command": {},
      "jobRoleArn": {},
      "executionRoleArn": {},
      "volumes": {},
      "environment": {},
      "mountPoints": {},
      "readonlyRootFilesystem": {},
      "privileged": {},
      "ulimits": {},
      "user": {},
      "instanceType": {},
      "resourceRequirements": {},
      "linuxParameters": {
        "devices": {},
        "initProcessEnabled": {},
        "sharedMemorySize": {},
        "tmpfs": {},
        "maxSwap": {},
        "swappiness": {}
      },
      "logConfiguration": {
        "logDriver": {},
        "options": {
          "property1": "string",
          "property2": "string"
        },
        "secretOptions": {}
      },
      "secrets": {},
      "networkConfiguration": {
        "assignPublicIp": {}
      },
      "fargatePlatformConfiguration": {
        "platformVersion": {}
      },
      "ephemeralStorage": {
        "sizeInGiB": {}
      },
      "runtimePlatform": {
        "operatingSystemFamily": {},
        "cpuArchitecture": {}
      }
    }
  }
]
```

<h2 id="tocS_EvaluateOnExitList">EvaluateOnExitList</h2>
<!-- backwards compatibility -->
<a id="schemaevaluateonexitlist"></a>
<a id="schema_EvaluateOnExitList"></a>
<a id="tocSevaluateonexitlist"></a>
<a id="tocsevaluateonexitlist"></a>

```json
[
  {
    "onStatusReason": {},
    "onReason": {},
    "onExitCode": {},
    "action": {}
  }
]
```

<h2 id="tocS_PlatformCapability">PlatformCapability</h2>
<!-- backwards compatibility -->
<a id="schemaplatformcapability"></a>
<a id="schema_PlatformCapability"></a>
<a id="tocSplatformcapability"></a>
<a id="tocsplatformcapability"></a>

```json
"EC2"
```

<h2 id="tocS_EksPodProperties">EksPodProperties</h2>
<!-- backwards compatibility -->
<a id="schemaekspodproperties"></a>
<a id="schema_EksPodProperties"></a>
<a id="tocSekspodproperties"></a>
<a id="tocsekspodproperties"></a>

```json
{
  "serviceAccountName": {},
  "hostNetwork": {},
  "dnsPolicy": {},
  "containers": {},
  "volumes": {},
  "metadata": {
    "labels": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

The properties for the pod.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceAccountName|object|false|none|none|
|hostNetwork|object|false|none|none|
|dnsPolicy|object|false|none|none|
|containers|object|false|none|none|
|volumes|object|false|none|none|
|metadata|object|false|none|none|

<h2 id="tocS_SubmitJobResponse">SubmitJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemasubmitjobresponse"></a>
<a id="schema_SubmitJobResponse"></a>
<a id="tocSsubmitjobresponse"></a>
<a id="tocssubmitjobresponse"></a>

```json
{
  "jobId": "876da822-4198-45f2-a252-6cea32512ea8",
  "jobName": "example"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobArn|object|false|none|none|
|jobName|object|true|none|none|
|jobId|object|true|none|none|

<h2 id="tocS_JobDependency">JobDependency</h2>
<!-- backwards compatibility -->
<a id="schemajobdependency"></a>
<a id="schema_JobDependency"></a>
<a id="tocSjobdependency"></a>
<a id="tocsjobdependency"></a>

```json
{
  "jobId": {},
  "type": {}
}
```

An object that represents an Batch job dependency.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|object|false|none|none|
|type|object|false|none|none|

<h2 id="tocS_NodePropertyOverrides">NodePropertyOverrides</h2>
<!-- backwards compatibility -->
<a id="schemanodepropertyoverrides"></a>
<a id="schema_NodePropertyOverrides"></a>
<a id="tocSnodepropertyoverrides"></a>
<a id="tocsnodepropertyoverrides"></a>

```json
[
  {
    "targetNodes": {},
    "containerOverrides": {
      "vcpus": {},
      "memory": {},
      "command": {},
      "instanceType": {},
      "environment": {},
      "resourceRequirements": {}
    }
  }
]
```

<h2 id="tocS_EksPodPropertiesOverride">EksPodPropertiesOverride</h2>
<!-- backwards compatibility -->
<a id="schemaekspodpropertiesoverride"></a>
<a id="schema_EksPodPropertiesOverride"></a>
<a id="tocSekspodpropertiesoverride"></a>
<a id="tocsekspodpropertiesoverride"></a>

```json
{
  "containers": {},
  "metadata": {
    "labels": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

An object that contains overrides for the Kubernetes pod properties of a job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containers|object|false|none|none|
|metadata|object|false|none|none|

<h2 id="tocS_TagResourceResponse">TagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schematagresourceresponse"></a>
<a id="schema_TagResourceResponse"></a>
<a id="tocStagresourceresponse"></a>
<a id="tocstagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_TerminateJobResponse">TerminateJobResponse</h2>
<!-- backwards compatibility -->
<a id="schematerminatejobresponse"></a>
<a id="schema_TerminateJobResponse"></a>
<a id="tocSterminatejobresponse"></a>
<a id="tocsterminatejobresponse"></a>

```json
{}
```

<h2 id="tocS_UntagResourceResponse">UntagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceresponse"></a>
<a id="schema_UntagResourceResponse"></a>
<a id="tocSuntagresourceresponse"></a>
<a id="tocsuntagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_TagKey">TagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_TagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
"string"
```

<h2 id="tocS_UpdateComputeEnvironmentResponse">UpdateComputeEnvironmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecomputeenvironmentresponse"></a>
<a id="schema_UpdateComputeEnvironmentResponse"></a>
<a id="tocSupdatecomputeenvironmentresponse"></a>
<a id="tocsupdatecomputeenvironmentresponse"></a>

```json
{
  "computeEnvironmentArn": "arn:aws:batch:us-east-1:012345678910:compute-environment/P2OnDemand",
  "computeEnvironmentName": "P2OnDemand"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|computeEnvironmentName|object|false|none|none|
|computeEnvironmentArn|object|false|none|none|

<h2 id="tocS_CRUpdateAllocationStrategy">CRUpdateAllocationStrategy</h2>
<!-- backwards compatibility -->
<a id="schemacrupdateallocationstrategy"></a>
<a id="schema_CRUpdateAllocationStrategy"></a>
<a id="tocScrupdateallocationstrategy"></a>
<a id="tocscrupdateallocationstrategy"></a>

```json
"BEST_FIT_PROGRESSIVE"
```

<h2 id="tocS_JobExecutionTimeoutMinutes">JobExecutionTimeoutMinutes</h2>
<!-- backwards compatibility -->
<a id="schemajobexecutiontimeoutminutes"></a>
<a id="schema_JobExecutionTimeoutMinutes"></a>
<a id="tocSjobexecutiontimeoutminutes"></a>
<a id="tocsjobexecutiontimeoutminutes"></a>

```json
1
```

<h2 id="tocS_UpdateJobQueueResponse">UpdateJobQueueResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatejobqueueresponse"></a>
<a id="schema_UpdateJobQueueResponse"></a>
<a id="tocSupdatejobqueueresponse"></a>
<a id="tocsupdatejobqueueresponse"></a>

```json
{
  "jobQueueArn": "arn:aws:batch:us-east-1:012345678910:job-queue/GPGPU",
  "jobQueueName": "GPGPU"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobQueueName|object|false|none|none|
|jobQueueArn|object|false|none|none|

<h2 id="tocS_UpdateSchedulingPolicyResponse">UpdateSchedulingPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateschedulingpolicyresponse"></a>
<a id="schema_UpdateSchedulingPolicyResponse"></a>
<a id="tocSupdateschedulingpolicyresponse"></a>
<a id="tocsupdateschedulingpolicyresponse"></a>

```json
{}
```

<h2 id="tocS_ArrayJobDependency">ArrayJobDependency</h2>
<!-- backwards compatibility -->
<a id="schemaarrayjobdependency"></a>
<a id="schema_ArrayJobDependency"></a>
<a id="tocSarrayjobdependency"></a>
<a id="tocsarrayjobdependency"></a>

```json
"N_TO_N"
```

<h2 id="tocS_ArrayJobStatusSummary">ArrayJobStatusSummary</h2>
<!-- backwards compatibility -->
<a id="schemaarrayjobstatussummary"></a>
<a id="schema_ArrayJobStatusSummary"></a>
<a id="tocSarrayjobstatussummary"></a>
<a id="tocsarrayjobstatussummary"></a>

```json
{
  "property1": 0,
  "property2": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Integer](#schemainteger)|false|none|none|

<h2 id="tocS_ArrayProperties">ArrayProperties</h2>
<!-- backwards compatibility -->
<a id="schemaarrayproperties"></a>
<a id="schema_ArrayProperties"></a>
<a id="tocSarrayproperties"></a>
<a id="tocsarrayproperties"></a>

```json
{
  "size": {}
}
```

An object that represents an Batch array job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|size|object|false|none|none|

<h2 id="tocS_ArrayPropertiesDetail">ArrayPropertiesDetail</h2>
<!-- backwards compatibility -->
<a id="schemaarraypropertiesdetail"></a>
<a id="schema_ArrayPropertiesDetail"></a>
<a id="tocSarraypropertiesdetail"></a>
<a id="tocsarraypropertiesdetail"></a>

```json
{
  "statusSummary": {
    "property1": 0,
    "property2": 0
  },
  "size": {},
  "index": {}
}
```

An object that represents the array properties of a job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusSummary|object|false|none|none|
|size|object|false|none|none|
|index|object|false|none|none|

<h2 id="tocS_ArrayPropertiesSummary">ArrayPropertiesSummary</h2>
<!-- backwards compatibility -->
<a id="schemaarraypropertiessummary"></a>
<a id="schema_ArrayPropertiesSummary"></a>
<a id="tocSarraypropertiessummary"></a>
<a id="tocsarraypropertiessummary"></a>

```json
{
  "size": {},
  "index": {}
}
```

An object that represents the array properties of a job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|size|object|false|none|none|
|index|object|false|none|none|

<h2 id="tocS_AssignPublicIp">AssignPublicIp</h2>
<!-- backwards compatibility -->
<a id="schemaassignpublicip"></a>
<a id="schema_AssignPublicIp"></a>
<a id="tocSassignpublicip"></a>
<a id="tocsassignpublicip"></a>

```json
"ENABLED"
```

<h2 id="tocS_NetworkInterfaceList">NetworkInterfaceList</h2>
<!-- backwards compatibility -->
<a id="schemanetworkinterfacelist"></a>
<a id="schema_NetworkInterfaceList"></a>
<a id="tocSnetworkinterfacelist"></a>
<a id="tocsnetworkinterfacelist"></a>

```json
[
  {
    "attachmentId": {},
    "ipv6Address": {},
    "privateIpv4Address": {}
  }
]
```

<h2 id="tocS_AttemptContainerDetail">AttemptContainerDetail</h2>
<!-- backwards compatibility -->
<a id="schemaattemptcontainerdetail"></a>
<a id="schema_AttemptContainerDetail"></a>
<a id="tocSattemptcontainerdetail"></a>
<a id="tocsattemptcontainerdetail"></a>

```json
{
  "containerInstanceArn": {},
  "taskArn": {},
  "exitCode": {},
  "reason": {},
  "logStreamName": {},
  "networkInterfaces": {}
}
```

An object that represents the details of a container that's part of a job attempt.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containerInstanceArn|object|false|none|none|
|taskArn|object|false|none|none|
|exitCode|object|false|none|none|
|reason|object|false|none|none|
|logStreamName|object|false|none|none|
|networkInterfaces|object|false|none|none|

<h2 id="tocS_Long">Long</h2>
<!-- backwards compatibility -->
<a id="schemalong"></a>
<a id="schema_Long"></a>
<a id="tocSlong"></a>
<a id="tocslong"></a>

```json
0
```

<h2 id="tocS_AttemptDetail">AttemptDetail</h2>
<!-- backwards compatibility -->
<a id="schemaattemptdetail"></a>
<a id="schema_AttemptDetail"></a>
<a id="tocSattemptdetail"></a>
<a id="tocsattemptdetail"></a>

```json
{
  "container": {
    "containerInstanceArn": {},
    "taskArn": {},
    "exitCode": {},
    "reason": {},
    "logStreamName": {},
    "networkInterfaces": {}
  },
  "startedAt": {},
  "stoppedAt": {},
  "statusReason": {}
}
```

An object that represents a job attempt.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|container|object|false|none|none|
|startedAt|object|false|none|none|
|stoppedAt|object|false|none|none|
|statusReason|object|false|none|none|

<h2 id="tocS_AttemptDetails">AttemptDetails</h2>
<!-- backwards compatibility -->
<a id="schemaattemptdetails"></a>
<a id="schema_AttemptDetails"></a>
<a id="tocSattemptdetails"></a>
<a id="tocsattemptdetails"></a>

```json
[
  {
    "container": {
      "containerInstanceArn": {},
      "taskArn": {},
      "exitCode": {},
      "reason": {},
      "logStreamName": {},
      "networkInterfaces": {}
    },
    "startedAt": {},
    "stoppedAt": {},
    "statusReason": {}
  }
]
```

<h2 id="tocS_CEState">CEState</h2>
<!-- backwards compatibility -->
<a id="schemacestate"></a>
<a id="schema_CEState"></a>
<a id="tocScestate"></a>
<a id="tocscestate"></a>

```json
"ENABLED"
```

<h2 id="tocS_CEStatus">CEStatus</h2>
<!-- backwards compatibility -->
<a id="schemacestatus"></a>
<a id="schema_CEStatus"></a>
<a id="tocScestatus"></a>
<a id="tocscestatus"></a>

```json
"CREATING"
```

<h2 id="tocS_CEType">CEType</h2>
<!-- backwards compatibility -->
<a id="schemacetype"></a>
<a id="schema_CEType"></a>
<a id="tocScetype"></a>
<a id="tocscetype"></a>

```json
"MANAGED"
```

<h2 id="tocS_CancelJobRequest">CancelJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacanceljobrequest"></a>
<a id="schema_CancelJobRequest"></a>
<a id="tocScanceljobrequest"></a>
<a id="tocscanceljobrequest"></a>

```json
{
  "jobId": {},
  "reason": {}
}
```

Contains the parameters for <code>CancelJob</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|object|true|none|none|
|reason|object|true|none|none|

<h2 id="tocS_TagrisTagsMap">TagrisTagsMap</h2>
<!-- backwards compatibility -->
<a id="schematagristagsmap"></a>
<a id="schema_TagrisTagsMap"></a>
<a id="tocStagristagsmap"></a>
<a id="tocstagristagsmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[TagValue](#schematagvalue)|false|none|none|

<h2 id="tocS_ComputeResource">ComputeResource</h2>
<!-- backwards compatibility -->
<a id="schemacomputeresource"></a>
<a id="schema_ComputeResource"></a>
<a id="tocScomputeresource"></a>
<a id="tocscomputeresource"></a>

```json
{
  "type": {},
  "allocationStrategy": {},
  "minvCpus": {},
  "maxvCpus": {},
  "desiredvCpus": {},
  "instanceTypes": {},
  "imageId": {},
  "subnets": {},
  "securityGroupIds": {},
  "ec2KeyPair": {},
  "instanceRole": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "placementGroup": {},
  "bidPercentage": {},
  "spotIamFleetRole": {},
  "launchTemplate": {
    "launchTemplateId": {},
    "launchTemplateName": {},
    "version": {}
  },
  "ec2Configuration": {}
}
```

An object that represents an Batch compute resource. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute environments</a> in the <i>Batch User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|true|none|none|
|allocationStrategy|object|false|none|none|
|minvCpus|object|false|none|none|
|maxvCpus|object|true|none|none|
|desiredvCpus|object|false|none|none|
|instanceTypes|object|false|none|none|
|imageId|object|false|none|none|
|subnets|object|true|none|none|
|securityGroupIds|object|false|none|none|
|ec2KeyPair|object|false|none|none|
|instanceRole|object|false|none|none|
|tags|object|false|none|none|
|placementGroup|object|false|none|none|
|bidPercentage|object|false|none|none|
|spotIamFleetRole|object|false|none|none|
|launchTemplate|object|false|none|none|
|ec2Configuration|object|false|none|none|

<h2 id="tocS_UpdatePolicy">UpdatePolicy</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepolicy"></a>
<a id="schema_UpdatePolicy"></a>
<a id="tocSupdatepolicy"></a>
<a id="tocsupdatepolicy"></a>

```json
{
  "terminateJobsOnUpdate": {},
  "jobExecutionTimeoutMinutes": {}
}
```

Specifies the infrastructure update policy for the compute environment. For more information about infrastructure updates, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|terminateJobsOnUpdate|object|false|none|none|
|jobExecutionTimeoutMinutes|object|false|none|none|

<h2 id="tocS_EksConfiguration">EksConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaeksconfiguration"></a>
<a id="schema_EksConfiguration"></a>
<a id="tocSeksconfiguration"></a>
<a id="tocseksconfiguration"></a>

```json
{
  "eksClusterArn": {},
  "kubernetesNamespace": {}
}
```

Configuration for the Amazon EKS cluster that supports the Batch compute environment. The cluster must exist before the compute environment can be created.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eksClusterArn|object|true|none|none|
|kubernetesNamespace|object|true|none|none|

<h2 id="tocS_OrchestrationType">OrchestrationType</h2>
<!-- backwards compatibility -->
<a id="schemaorchestrationtype"></a>
<a id="schema_OrchestrationType"></a>
<a id="tocSorchestrationtype"></a>
<a id="tocsorchestrationtype"></a>

```json
"ECS"
```

<h2 id="tocS_ComputeEnvironmentDetail">ComputeEnvironmentDetail</h2>
<!-- backwards compatibility -->
<a id="schemacomputeenvironmentdetail"></a>
<a id="schema_ComputeEnvironmentDetail"></a>
<a id="tocScomputeenvironmentdetail"></a>
<a id="tocscomputeenvironmentdetail"></a>

```json
{
  "computeEnvironmentName": {},
  "computeEnvironmentArn": {},
  "unmanagedvCpus": {},
  "ecsClusterArn": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "type": {},
  "state": {},
  "status": {},
  "statusReason": {},
  "computeResources": {
    "type": {},
    "allocationStrategy": {},
    "minvCpus": {},
    "maxvCpus": {},
    "desiredvCpus": {},
    "instanceTypes": {},
    "imageId": {},
    "subnets": {},
    "securityGroupIds": {},
    "ec2KeyPair": {},
    "instanceRole": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "placementGroup": {},
    "bidPercentage": {},
    "spotIamFleetRole": {},
    "launchTemplate": {
      "launchTemplateId": {},
      "launchTemplateName": {},
      "version": {}
    },
    "ec2Configuration": {}
  },
  "serviceRole": {},
  "updatePolicy": {
    "terminateJobsOnUpdate": {},
    "jobExecutionTimeoutMinutes": {}
  },
  "eksConfiguration": {
    "eksClusterArn": {},
    "kubernetesNamespace": {}
  },
  "containerOrchestrationType": {},
  "uuid": {}
}
```

An object that represents an Batch compute environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|computeEnvironmentName|object|true|none|none|
|computeEnvironmentArn|object|true|none|none|
|unmanagedvCpus|object|false|none|none|
|ecsClusterArn|object|false|none|none|
|tags|object|false|none|none|
|type|object|false|none|none|
|state|object|false|none|none|
|status|object|false|none|none|
|statusReason|object|false|none|none|
|computeResources|object|false|none|none|
|serviceRole|object|false|none|none|
|updatePolicy|object|false|none|none|
|eksConfiguration|object|false|none|none|
|containerOrchestrationType|object|false|none|none|
|uuid|object|false|none|none|

<h2 id="tocS_ComputeEnvironmentDetailList">ComputeEnvironmentDetailList</h2>
<!-- backwards compatibility -->
<a id="schemacomputeenvironmentdetaillist"></a>
<a id="schema_ComputeEnvironmentDetailList"></a>
<a id="tocScomputeenvironmentdetaillist"></a>
<a id="tocscomputeenvironmentdetaillist"></a>

```json
[
  {
    "computeEnvironmentName": {},
    "computeEnvironmentArn": {},
    "unmanagedvCpus": {},
    "ecsClusterArn": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "type": {},
    "state": {},
    "status": {},
    "statusReason": {},
    "computeResources": {
      "type": {},
      "allocationStrategy": {},
      "minvCpus": {},
      "maxvCpus": {},
      "desiredvCpus": {},
      "instanceTypes": {},
      "imageId": {},
      "subnets": {},
      "securityGroupIds": {},
      "ec2KeyPair": {},
      "instanceRole": {},
      "tags": {
        "property1": "string",
        "property2": "string"
      },
      "placementGroup": {},
      "bidPercentage": {},
      "spotIamFleetRole": {},
      "launchTemplate": {
        "launchTemplateId": {},
        "launchTemplateName": {},
        "version": {}
      },
      "ec2Configuration": {}
    },
    "serviceRole": {},
    "updatePolicy": {
      "terminateJobsOnUpdate": {},
      "jobExecutionTimeoutMinutes": {}
    },
    "eksConfiguration": {
      "eksClusterArn": {},
      "kubernetesNamespace": {}
    },
    "containerOrchestrationType": {},
    "uuid": {}
  }
]
```

<h2 id="tocS_ComputeEnvironmentOrders">ComputeEnvironmentOrders</h2>
<!-- backwards compatibility -->
<a id="schemacomputeenvironmentorders"></a>
<a id="schema_ComputeEnvironmentOrders"></a>
<a id="tocScomputeenvironmentorders"></a>
<a id="tocscomputeenvironmentorders"></a>

```json
[
  {
    "order": {},
    "computeEnvironment": {}
  }
]
```

<h2 id="tocS_ComputeResourceUpdate">ComputeResourceUpdate</h2>
<!-- backwards compatibility -->
<a id="schemacomputeresourceupdate"></a>
<a id="schema_ComputeResourceUpdate"></a>
<a id="tocScomputeresourceupdate"></a>
<a id="tocscomputeresourceupdate"></a>

```json
{
  "minvCpus": {},
  "maxvCpus": {},
  "desiredvCpus": {},
  "subnets": {},
  "securityGroupIds": {},
  "allocationStrategy": {},
  "instanceTypes": {},
  "ec2KeyPair": {},
  "instanceRole": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "placementGroup": {},
  "bidPercentage": {},
  "launchTemplate": {
    "launchTemplateId": {},
    "launchTemplateName": {},
    "version": {}
  },
  "ec2Configuration": {},
  "updateToLatestImageVersion": {},
  "type": {},
  "imageId": {}
}
```

An object that represents the attributes of a compute environment that can be updated. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|minvCpus|object|false|none|none|
|maxvCpus|object|false|none|none|
|desiredvCpus|object|false|none|none|
|subnets|object|false|none|none|
|securityGroupIds|object|false|none|none|
|allocationStrategy|object|false|none|none|
|instanceTypes|object|false|none|none|
|ec2KeyPair|object|false|none|none|
|instanceRole|object|false|none|none|
|tags|object|false|none|none|
|placementGroup|object|false|none|none|
|bidPercentage|object|false|none|none|
|launchTemplate|object|false|none|none|
|ec2Configuration|object|false|none|none|
|updateToLatestImageVersion|object|false|none|none|
|type|object|false|none|none|
|imageId|object|false|none|none|

<h2 id="tocS_ContainerDetail">ContainerDetail</h2>
<!-- backwards compatibility -->
<a id="schemacontainerdetail"></a>
<a id="schema_ContainerDetail"></a>
<a id="tocScontainerdetail"></a>
<a id="tocscontainerdetail"></a>

```json
{
  "image": {},
  "vcpus": {},
  "memory": {},
  "command": {},
  "jobRoleArn": {},
  "executionRoleArn": {},
  "volumes": {},
  "environment": {},
  "mountPoints": {},
  "readonlyRootFilesystem": {},
  "ulimits": {},
  "privileged": {},
  "user": {},
  "exitCode": {},
  "reason": {},
  "containerInstanceArn": {},
  "taskArn": {},
  "logStreamName": {},
  "instanceType": {},
  "networkInterfaces": {},
  "resourceRequirements": {},
  "linuxParameters": {
    "devices": {},
    "initProcessEnabled": {},
    "sharedMemorySize": {},
    "tmpfs": {},
    "maxSwap": {},
    "swappiness": {}
  },
  "logConfiguration": {
    "logDriver": {},
    "options": {
      "property1": "string",
      "property2": "string"
    },
    "secretOptions": {}
  },
  "secrets": {},
  "networkConfiguration": {
    "assignPublicIp": {}
  },
  "fargatePlatformConfiguration": {
    "platformVersion": {}
  },
  "ephemeralStorage": {
    "sizeInGiB": {}
  },
  "runtimePlatform": {
    "operatingSystemFamily": {},
    "cpuArchitecture": {}
  }
}
```

An object that represents the details of a container that's part of a job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|image|object|false|none|none|
|vcpus|object|false|none|none|
|memory|object|false|none|none|
|command|object|false|none|none|
|jobRoleArn|object|false|none|none|
|executionRoleArn|object|false|none|none|
|volumes|object|false|none|none|
|environment|object|false|none|none|
|mountPoints|object|false|none|none|
|readonlyRootFilesystem|object|false|none|none|
|ulimits|object|false|none|none|
|privileged|object|false|none|none|
|user|object|false|none|none|
|exitCode|object|false|none|none|
|reason|object|false|none|none|
|containerInstanceArn|object|false|none|none|
|taskArn|object|false|none|none|
|logStreamName|object|false|none|none|
|instanceType|object|false|none|none|
|networkInterfaces|object|false|none|none|
|resourceRequirements|object|false|none|none|
|linuxParameters|object|false|none|none|
|logConfiguration|object|false|none|none|
|secrets|object|false|none|none|
|networkConfiguration|object|false|none|none|
|fargatePlatformConfiguration|object|false|none|none|
|ephemeralStorage|object|false|none|none|
|runtimePlatform|[RuntimePlatform](#schemaruntimeplatform)|false|none|An object that represents the compute environment architecture for Batch jobs on Fargate.|

<h2 id="tocS_ContainerOverrides">ContainerOverrides</h2>
<!-- backwards compatibility -->
<a id="schemacontaineroverrides"></a>
<a id="schema_ContainerOverrides"></a>
<a id="tocScontaineroverrides"></a>
<a id="tocscontaineroverrides"></a>

```json
{
  "vcpus": {},
  "memory": {},
  "command": {},
  "instanceType": {},
  "environment": {},
  "resourceRequirements": {}
}
```

<p>The overrides that should be sent to a container.</p> <p>For information about using Batch overrides when you connect event sources to targets, see <a href="https://docs.aws.amazon.com/eventbridge/latest/pipes-reference/API_BatchContainerOverrides.html">BatchContainerOverrides</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vcpus|object|false|none|none|
|memory|object|false|none|none|
|command|object|false|none|none|
|instanceType|object|false|none|none|
|environment|object|false|none|none|
|resourceRequirements|object|false|none|none|

<h2 id="tocS_ContainerProperties">ContainerProperties</h2>
<!-- backwards compatibility -->
<a id="schemacontainerproperties"></a>
<a id="schema_ContainerProperties"></a>
<a id="tocScontainerproperties"></a>
<a id="tocscontainerproperties"></a>

```json
{
  "image": {},
  "vcpus": {},
  "memory": {},
  "command": {},
  "jobRoleArn": {},
  "executionRoleArn": {},
  "volumes": {},
  "environment": {},
  "mountPoints": {},
  "readonlyRootFilesystem": {},
  "privileged": {},
  "ulimits": {},
  "user": {},
  "instanceType": {},
  "resourceRequirements": {},
  "linuxParameters": {
    "devices": {},
    "initProcessEnabled": {},
    "sharedMemorySize": {},
    "tmpfs": {},
    "maxSwap": {},
    "swappiness": {}
  },
  "logConfiguration": {
    "logDriver": {},
    "options": {
      "property1": "string",
      "property2": "string"
    },
    "secretOptions": {}
  },
  "secrets": {},
  "networkConfiguration": {
    "assignPublicIp": {}
  },
  "fargatePlatformConfiguration": {
    "platformVersion": {}
  },
  "ephemeralStorage": {
    "sizeInGiB": {}
  },
  "runtimePlatform": {
    "operatingSystemFamily": {},
    "cpuArchitecture": {}
  }
}
```

Container properties are used for Amazon ECS based job definitions. These properties to describe the container that's launched as part of a job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|image|object|false|none|none|
|vcpus|object|false|none|none|
|memory|object|false|none|none|
|command|object|false|none|none|
|jobRoleArn|object|false|none|none|
|executionRoleArn|object|false|none|none|
|volumes|object|false|none|none|
|environment|object|false|none|none|
|mountPoints|object|false|none|none|
|readonlyRootFilesystem|object|false|none|none|
|privileged|object|false|none|none|
|ulimits|object|false|none|none|
|user|object|false|none|none|
|instanceType|object|false|none|none|
|resourceRequirements|object|false|none|none|
|linuxParameters|object|false|none|none|
|logConfiguration|object|false|none|none|
|secrets|object|false|none|none|
|networkConfiguration|object|false|none|none|
|fargatePlatformConfiguration|object|false|none|none|
|ephemeralStorage|object|false|none|none|
|runtimePlatform|[RuntimePlatform](#schemaruntimeplatform)|false|none|An object that represents the compute environment architecture for Batch jobs on Fargate.|

<h2 id="tocS_ContainerSummary">ContainerSummary</h2>
<!-- backwards compatibility -->
<a id="schemacontainersummary"></a>
<a id="schema_ContainerSummary"></a>
<a id="tocScontainersummary"></a>
<a id="tocscontainersummary"></a>

```json
{
  "exitCode": {},
  "reason": {}
}
```

An object that represents summary details of a container within a job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exitCode|object|false|none|none|
|reason|object|false|none|none|

<h2 id="tocS_CreateComputeEnvironmentRequest">CreateComputeEnvironmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecomputeenvironmentrequest"></a>
<a id="schema_CreateComputeEnvironmentRequest"></a>
<a id="tocScreatecomputeenvironmentrequest"></a>
<a id="tocscreatecomputeenvironmentrequest"></a>

```json
{
  "computeEnvironmentName": {},
  "type": {},
  "state": {},
  "unmanagedvCpus": {},
  "computeResources": {
    "type": {},
    "allocationStrategy": {},
    "minvCpus": {},
    "maxvCpus": {},
    "desiredvCpus": {},
    "instanceTypes": {},
    "imageId": {},
    "subnets": {},
    "securityGroupIds": {},
    "ec2KeyPair": {},
    "instanceRole": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "placementGroup": {},
    "bidPercentage": {},
    "spotIamFleetRole": {},
    "launchTemplate": {
      "launchTemplateId": {},
      "launchTemplateName": {},
      "version": {}
    },
    "ec2Configuration": {}
  },
  "serviceRole": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "eksConfiguration": {
    "eksClusterArn": {},
    "kubernetesNamespace": {}
  }
}
```

Contains the parameters for <code>CreateComputeEnvironment</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|computeEnvironmentName|object|true|none|none|
|type|object|true|none|none|
|state|object|false|none|none|
|unmanagedvCpus|object|false|none|none|
|computeResources|object|false|none|none|
|serviceRole|object|false|none|none|
|tags|object|false|none|none|
|eksConfiguration|object|false|none|none|

<h2 id="tocS_JQState">JQState</h2>
<!-- backwards compatibility -->
<a id="schemajqstate"></a>
<a id="schema_JQState"></a>
<a id="tocSjqstate"></a>
<a id="tocsjqstate"></a>

```json
"ENABLED"
```

<h2 id="tocS_CreateJobQueueRequest">CreateJobQueueRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatejobqueuerequest"></a>
<a id="schema_CreateJobQueueRequest"></a>
<a id="tocScreatejobqueuerequest"></a>
<a id="tocscreatejobqueuerequest"></a>

```json
{
  "jobQueueName": {},
  "state": {},
  "schedulingPolicyArn": {},
  "priority": {},
  "computeEnvironmentOrder": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Contains the parameters for <code>CreateJobQueue</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobQueueName|object|true|none|none|
|state|object|false|none|none|
|schedulingPolicyArn|object|false|none|none|
|priority|object|true|none|none|
|computeEnvironmentOrder|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_FairsharePolicy">FairsharePolicy</h2>
<!-- backwards compatibility -->
<a id="schemafairsharepolicy"></a>
<a id="schema_FairsharePolicy"></a>
<a id="tocSfairsharepolicy"></a>
<a id="tocsfairsharepolicy"></a>

```json
{
  "shareDecaySeconds": {},
  "computeReservation": {},
  "shareDistribution": {}
}
```

The fair share policy for a scheduling policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shareDecaySeconds|object|false|none|none|
|computeReservation|object|false|none|none|
|shareDistribution|object|false|none|none|

<h2 id="tocS_CreateSchedulingPolicyRequest">CreateSchedulingPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateschedulingpolicyrequest"></a>
<a id="schema_CreateSchedulingPolicyRequest"></a>
<a id="tocScreateschedulingpolicyrequest"></a>
<a id="tocscreateschedulingpolicyrequest"></a>

```json
{
  "name": {},
  "fairsharePolicy": {
    "shareDecaySeconds": {},
    "computeReservation": {},
    "shareDistribution": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Contains the parameters for <code>CreateSchedulingPolicy</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|fairsharePolicy|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_DeleteComputeEnvironmentRequest">DeleteComputeEnvironmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletecomputeenvironmentrequest"></a>
<a id="schema_DeleteComputeEnvironmentRequest"></a>
<a id="tocSdeletecomputeenvironmentrequest"></a>
<a id="tocsdeletecomputeenvironmentrequest"></a>

```json
{
  "computeEnvironment": {}
}
```

Contains the parameters for <code>DeleteComputeEnvironment</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|computeEnvironment|object|true|none|none|

<h2 id="tocS_DeleteJobQueueRequest">DeleteJobQueueRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletejobqueuerequest"></a>
<a id="schema_DeleteJobQueueRequest"></a>
<a id="tocSdeletejobqueuerequest"></a>
<a id="tocsdeletejobqueuerequest"></a>

```json
{
  "jobQueue": {}
}
```

Contains the parameters for <code>DeleteJobQueue</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobQueue|object|true|none|none|

<h2 id="tocS_DeleteSchedulingPolicyRequest">DeleteSchedulingPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteschedulingpolicyrequest"></a>
<a id="schema_DeleteSchedulingPolicyRequest"></a>
<a id="tocSdeleteschedulingpolicyrequest"></a>
<a id="tocsdeleteschedulingpolicyrequest"></a>

```json
{
  "arn": {}
}
```

Contains the parameters for <code>DeleteSchedulingPolicy</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|

<h2 id="tocS_DeregisterJobDefinitionRequest">DeregisterJobDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaderegisterjobdefinitionrequest"></a>
<a id="schema_DeregisterJobDefinitionRequest"></a>
<a id="tocSderegisterjobdefinitionrequest"></a>
<a id="tocsderegisterjobdefinitionrequest"></a>

```json
{
  "jobDefinition": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobDefinition|object|true|none|none|

<h2 id="tocS_DescribeComputeEnvironmentsRequest">DescribeComputeEnvironmentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribecomputeenvironmentsrequest"></a>
<a id="schema_DescribeComputeEnvironmentsRequest"></a>
<a id="tocSdescribecomputeenvironmentsrequest"></a>
<a id="tocsdescribecomputeenvironmentsrequest"></a>

```json
{
  "computeEnvironments": {},
  "maxResults": {},
  "nextToken": {}
}
```

Contains the parameters for <code>DescribeComputeEnvironments</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|computeEnvironments|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribeJobDefinitionsRequest">DescribeJobDefinitionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribejobdefinitionsrequest"></a>
<a id="schema_DescribeJobDefinitionsRequest"></a>
<a id="tocSdescribejobdefinitionsrequest"></a>
<a id="tocsdescribejobdefinitionsrequest"></a>

```json
{
  "jobDefinitions": {},
  "maxResults": {},
  "jobDefinitionName": {},
  "status": {},
  "nextToken": {}
}
```

Contains the parameters for <code>DescribeJobDefinitions</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobDefinitions|object|false|none|none|
|maxResults|object|false|none|none|
|jobDefinitionName|object|false|none|none|
|status|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_JobDefinitionList">JobDefinitionList</h2>
<!-- backwards compatibility -->
<a id="schemajobdefinitionlist"></a>
<a id="schema_JobDefinitionList"></a>
<a id="tocSjobdefinitionlist"></a>
<a id="tocsjobdefinitionlist"></a>

```json
[
  {
    "jobDefinitionName": {},
    "jobDefinitionArn": {},
    "revision": {},
    "status": {},
    "type": {},
    "schedulingPriority": {},
    "parameters": {
      "property1": "string",
      "property2": "string"
    },
    "retryStrategy": {
      "attempts": {},
      "evaluateOnExit": {}
    },
    "containerProperties": {
      "image": {},
      "vcpus": {},
      "memory": {},
      "command": {},
      "jobRoleArn": {},
      "executionRoleArn": {},
      "volumes": {},
      "environment": {},
      "mountPoints": {},
      "readonlyRootFilesystem": {},
      "privileged": {},
      "ulimits": {},
      "user": {},
      "instanceType": {},
      "resourceRequirements": {},
      "linuxParameters": {
        "devices": {},
        "initProcessEnabled": {},
        "sharedMemorySize": {},
        "tmpfs": {},
        "maxSwap": {},
        "swappiness": {}
      },
      "logConfiguration": {
        "logDriver": {},
        "options": {
          "property1": "string",
          "property2": "string"
        },
        "secretOptions": {}
      },
      "secrets": {},
      "networkConfiguration": {
        "assignPublicIp": {}
      },
      "fargatePlatformConfiguration": {
        "platformVersion": {}
      },
      "ephemeralStorage": {
        "sizeInGiB": {}
      },
      "runtimePlatform": {
        "operatingSystemFamily": {},
        "cpuArchitecture": {}
      }
    },
    "timeout": {
      "attemptDurationSeconds": {}
    },
    "nodeProperties": {
      "numNodes": {},
      "mainNode": {},
      "nodeRangeProperties": {}
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "propagateTags": {},
    "platformCapabilities": {},
    "eksProperties": {
      "podProperties": {
        "serviceAccountName": {},
        "hostNetwork": {},
        "dnsPolicy": {},
        "containers": {},
        "volumes": {},
        "metadata": {
          "labels": {
            "property1": "string",
            "property2": "string"
          }
        }
      }
    },
    "containerOrchestrationType": {}
  }
]
```

<h2 id="tocS_DescribeJobQueuesRequest">DescribeJobQueuesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribejobqueuesrequest"></a>
<a id="schema_DescribeJobQueuesRequest"></a>
<a id="tocSdescribejobqueuesrequest"></a>
<a id="tocsdescribejobqueuesrequest"></a>

```json
{
  "jobQueues": {},
  "maxResults": {},
  "nextToken": {}
}
```

Contains the parameters for <code>DescribeJobQueues</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobQueues|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_JobQueueDetailList">JobQueueDetailList</h2>
<!-- backwards compatibility -->
<a id="schemajobqueuedetaillist"></a>
<a id="schema_JobQueueDetailList"></a>
<a id="tocSjobqueuedetaillist"></a>
<a id="tocsjobqueuedetaillist"></a>

```json
[
  {
    "jobQueueName": {},
    "jobQueueArn": {},
    "state": {},
    "schedulingPolicyArn": {},
    "status": {},
    "statusReason": {},
    "priority": {},
    "computeEnvironmentOrder": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_DescribeJobsRequest">DescribeJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribejobsrequest"></a>
<a id="schema_DescribeJobsRequest"></a>
<a id="tocSdescribejobsrequest"></a>
<a id="tocsdescribejobsrequest"></a>

```json
{
  "jobs": {}
}
```

Contains the parameters for <code>DescribeJobs</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobs|object|true|none|none|

<h2 id="tocS_JobDetailList">JobDetailList</h2>
<!-- backwards compatibility -->
<a id="schemajobdetaillist"></a>
<a id="schema_JobDetailList"></a>
<a id="tocSjobdetaillist"></a>
<a id="tocsjobdetaillist"></a>

```json
[
  {
    "jobArn": {},
    "jobName": {},
    "jobId": {},
    "jobQueue": {},
    "status": {},
    "shareIdentifier": {},
    "schedulingPriority": {},
    "attempts": {},
    "statusReason": {},
    "createdAt": {},
    "retryStrategy": {
      "attempts": {},
      "evaluateOnExit": {}
    },
    "startedAt": {},
    "stoppedAt": {},
    "dependsOn": {},
    "jobDefinition": {},
    "parameters": {
      "property1": "string",
      "property2": "string"
    },
    "container": {
      "image": {},
      "vcpus": {},
      "memory": {},
      "command": {},
      "jobRoleArn": {},
      "executionRoleArn": {},
      "volumes": {},
      "environment": {},
      "mountPoints": {},
      "readonlyRootFilesystem": {},
      "ulimits": {},
      "privileged": {},
      "user": {},
      "exitCode": {},
      "reason": {},
      "containerInstanceArn": {},
      "taskArn": {},
      "logStreamName": {},
      "instanceType": {},
      "networkInterfaces": {},
      "resourceRequirements": {},
      "linuxParameters": {
        "devices": {},
        "initProcessEnabled": {},
        "sharedMemorySize": {},
        "tmpfs": {},
        "maxSwap": {},
        "swappiness": {}
      },
      "logConfiguration": {
        "logDriver": {},
        "options": {
          "property1": "string",
          "property2": "string"
        },
        "secretOptions": {}
      },
      "secrets": {},
      "networkConfiguration": {
        "assignPublicIp": {}
      },
      "fargatePlatformConfiguration": {
        "platformVersion": {}
      },
      "ephemeralStorage": {
        "sizeInGiB": {}
      },
      "runtimePlatform": {
        "operatingSystemFamily": {},
        "cpuArchitecture": {}
      }
    },
    "nodeDetails": {
      "nodeIndex": {},
      "isMainNode": {}
    },
    "nodeProperties": {
      "numNodes": {},
      "mainNode": {},
      "nodeRangeProperties": {}
    },
    "arrayProperties": {
      "statusSummary": {
        "property1": 0,
        "property2": 0
      },
      "size": {},
      "index": {}
    },
    "timeout": {
      "attemptDurationSeconds": {}
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "propagateTags": {},
    "platformCapabilities": {},
    "eksProperties": {
      "podProperties": {
        "serviceAccountName": {},
        "hostNetwork": {},
        "dnsPolicy": {},
        "containers": {},
        "volumes": {},
        "podName": {},
        "nodeName": {},
        "metadata": {
          "labels": {
            "property1": "string",
            "property2": "string"
          }
        }
      }
    },
    "eksAttempts": {},
    "isCancelled": {},
    "isTerminated": {}
  }
]
```

<h2 id="tocS_DescribeSchedulingPoliciesRequest">DescribeSchedulingPoliciesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeschedulingpoliciesrequest"></a>
<a id="schema_DescribeSchedulingPoliciesRequest"></a>
<a id="tocSdescribeschedulingpoliciesrequest"></a>
<a id="tocsdescribeschedulingpoliciesrequest"></a>

```json
{
  "arns": {}
}
```

Contains the parameters for <code>DescribeSchedulingPolicies</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arns|object|true|none|none|

<h2 id="tocS_SchedulingPolicyDetailList">SchedulingPolicyDetailList</h2>
<!-- backwards compatibility -->
<a id="schemaschedulingpolicydetaillist"></a>
<a id="schema_SchedulingPolicyDetailList"></a>
<a id="tocSschedulingpolicydetaillist"></a>
<a id="tocsschedulingpolicydetaillist"></a>

```json
[
  {
    "name": {},
    "arn": {},
    "fairsharePolicy": {
      "shareDecaySeconds": {},
      "computeReservation": {},
      "shareDistribution": {}
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_DeviceCgroupPermissions">DeviceCgroupPermissions</h2>
<!-- backwards compatibility -->
<a id="schemadevicecgrouppermissions"></a>
<a id="schema_DeviceCgroupPermissions"></a>
<a id="tocSdevicecgrouppermissions"></a>
<a id="tocsdevicecgrouppermissions"></a>

```json
[
  "READ"
]
```

<h2 id="tocS_Device">Device</h2>
<!-- backwards compatibility -->
<a id="schemadevice"></a>
<a id="schema_Device"></a>
<a id="tocSdevice"></a>
<a id="tocsdevice"></a>

```json
{
  "hostPath": {},
  "containerPath": {},
  "permissions": {}
}
```

<p>An object that represents a container instance host device.</p> <note> <p>This object isn't applicable to jobs that are running on Fargate resources and shouldn't be provided.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hostPath|object|true|none|none|
|containerPath|object|false|none|none|
|permissions|object|false|none|none|

<h2 id="tocS_DeviceCgroupPermission">DeviceCgroupPermission</h2>
<!-- backwards compatibility -->
<a id="schemadevicecgrouppermission"></a>
<a id="schema_DeviceCgroupPermission"></a>
<a id="tocSdevicecgrouppermission"></a>
<a id="tocsdevicecgrouppermission"></a>

```json
"READ"
```

<h2 id="tocS_DevicesList">DevicesList</h2>
<!-- backwards compatibility -->
<a id="schemadeviceslist"></a>
<a id="schema_DevicesList"></a>
<a id="tocSdeviceslist"></a>
<a id="tocsdeviceslist"></a>

```json
[
  {
    "hostPath": {},
    "containerPath": {},
    "permissions": {}
  }
]
```

<h2 id="tocS_EFSAuthorizationConfigIAM">EFSAuthorizationConfigIAM</h2>
<!-- backwards compatibility -->
<a id="schemaefsauthorizationconfigiam"></a>
<a id="schema_EFSAuthorizationConfigIAM"></a>
<a id="tocSefsauthorizationconfigiam"></a>
<a id="tocsefsauthorizationconfigiam"></a>

```json
"ENABLED"
```

<h2 id="tocS_EFSAuthorizationConfig">EFSAuthorizationConfig</h2>
<!-- backwards compatibility -->
<a id="schemaefsauthorizationconfig"></a>
<a id="schema_EFSAuthorizationConfig"></a>
<a id="tocSefsauthorizationconfig"></a>
<a id="tocsefsauthorizationconfig"></a>

```json
{
  "accessPointId": {},
  "iam": {}
}
```

The authorization configuration details for the Amazon EFS file system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessPointId|object|false|none|none|
|iam|object|false|none|none|

<h2 id="tocS_EFSTransitEncryption">EFSTransitEncryption</h2>
<!-- backwards compatibility -->
<a id="schemaefstransitencryption"></a>
<a id="schema_EFSTransitEncryption"></a>
<a id="tocSefstransitencryption"></a>
<a id="tocsefstransitencryption"></a>

```json
"ENABLED"
```

<h2 id="tocS_EFSVolumeConfiguration">EFSVolumeConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaefsvolumeconfiguration"></a>
<a id="schema_EFSVolumeConfiguration"></a>
<a id="tocSefsvolumeconfiguration"></a>
<a id="tocsefsvolumeconfiguration"></a>

```json
{
  "fileSystemId": {},
  "rootDirectory": {},
  "transitEncryption": {},
  "transitEncryptionPort": {},
  "authorizationConfig": {
    "accessPointId": {},
    "iam": {}
  }
}
```

This is used when you're using an Amazon Elastic File System file system for job storage. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/efs-volumes.html">Amazon EFS Volumes</a> in the <i>Batch User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileSystemId|object|true|none|none|
|rootDirectory|object|false|none|none|
|transitEncryption|object|false|none|none|
|transitEncryptionPort|object|false|none|none|
|authorizationConfig|object|false|none|none|

<h2 id="tocS_ImageType">ImageType</h2>
<!-- backwards compatibility -->
<a id="schemaimagetype"></a>
<a id="schema_ImageType"></a>
<a id="tocSimagetype"></a>
<a id="tocsimagetype"></a>

```json
"string"
```

<h2 id="tocS_ImageIdOverride">ImageIdOverride</h2>
<!-- backwards compatibility -->
<a id="schemaimageidoverride"></a>
<a id="schema_ImageIdOverride"></a>
<a id="tocSimageidoverride"></a>
<a id="tocsimageidoverride"></a>

```json
"string"
```

<h2 id="tocS_KubernetesVersion">KubernetesVersion</h2>
<!-- backwards compatibility -->
<a id="schemakubernetesversion"></a>
<a id="schema_KubernetesVersion"></a>
<a id="tocSkubernetesversion"></a>
<a id="tocskubernetesversion"></a>

```json
"string"
```

<h2 id="tocS_Ec2Configuration">Ec2Configuration</h2>
<!-- backwards compatibility -->
<a id="schemaec2configuration"></a>
<a id="schema_Ec2Configuration"></a>
<a id="tocSec2configuration"></a>
<a id="tocsec2configuration"></a>

```json
{
  "imageType": {},
  "imageIdOverride": {},
  "imageKubernetesVersion": {}
}
```

<p>Provides information used to select Amazon Machine Images (AMIs) for instances in the compute environment. If <code>Ec2Configuration</code> isn't specified, the default is <code>ECS_AL2</code> (<a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#al2ami">Amazon Linux 2</a>).</p> <note> <p>This object isn't applicable to jobs that are running on Fargate resources.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageType|object|true|none|none|
|imageIdOverride|object|false|none|none|
|imageKubernetesVersion|object|false|none|none|

<h2 id="tocS_EksAttemptContainerDetail">EksAttemptContainerDetail</h2>
<!-- backwards compatibility -->
<a id="schemaeksattemptcontainerdetail"></a>
<a id="schema_EksAttemptContainerDetail"></a>
<a id="tocSeksattemptcontainerdetail"></a>
<a id="tocseksattemptcontainerdetail"></a>

```json
{
  "exitCode": {},
  "reason": {}
}
```

An object that represents the details for an attempt for a job attempt that an Amazon EKS container runs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exitCode|object|false|none|none|
|reason|object|false|none|none|

<h2 id="tocS_EksAttemptContainerDetails">EksAttemptContainerDetails</h2>
<!-- backwards compatibility -->
<a id="schemaeksattemptcontainerdetails"></a>
<a id="schema_EksAttemptContainerDetails"></a>
<a id="tocSeksattemptcontainerdetails"></a>
<a id="tocseksattemptcontainerdetails"></a>

```json
[
  {
    "exitCode": {},
    "reason": {}
  }
]
```

<h2 id="tocS_EksAttemptDetail">EksAttemptDetail</h2>
<!-- backwards compatibility -->
<a id="schemaeksattemptdetail"></a>
<a id="schema_EksAttemptDetail"></a>
<a id="tocSeksattemptdetail"></a>
<a id="tocseksattemptdetail"></a>

```json
{
  "containers": {},
  "podName": {},
  "nodeName": {},
  "startedAt": {},
  "stoppedAt": {},
  "statusReason": {}
}
```

An object that represents the details of a job attempt for a job attempt by an Amazon EKS container.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containers|object|false|none|none|
|podName|object|false|none|none|
|nodeName|object|false|none|none|
|startedAt|object|false|none|none|
|stoppedAt|object|false|none|none|
|statusReason|object|false|none|none|

<h2 id="tocS_EksAttemptDetails">EksAttemptDetails</h2>
<!-- backwards compatibility -->
<a id="schemaeksattemptdetails"></a>
<a id="schema_EksAttemptDetails"></a>
<a id="tocSeksattemptdetails"></a>
<a id="tocseksattemptdetails"></a>

```json
[
  {
    "containers": {},
    "podName": {},
    "nodeName": {},
    "startedAt": {},
    "stoppedAt": {},
    "statusReason": {}
  }
]
```

<h2 id="tocS_EksContainerEnvironmentVariables">EksContainerEnvironmentVariables</h2>
<!-- backwards compatibility -->
<a id="schemaekscontainerenvironmentvariables"></a>
<a id="schema_EksContainerEnvironmentVariables"></a>
<a id="tocSekscontainerenvironmentvariables"></a>
<a id="tocsekscontainerenvironmentvariables"></a>

```json
[
  {
    "name": {},
    "value": {}
  }
]
```

<h2 id="tocS_EksContainerResourceRequirements">EksContainerResourceRequirements</h2>
<!-- backwards compatibility -->
<a id="schemaekscontainerresourcerequirements"></a>
<a id="schema_EksContainerResourceRequirements"></a>
<a id="tocSekscontainerresourcerequirements"></a>
<a id="tocsekscontainerresourcerequirements"></a>

```json
{
  "limits": {
    "property1": "string",
    "property2": "string"
  },
  "requests": {
    "property1": "string",
    "property2": "string"
  }
}
```

The type and amount of resources to assign to a container. The supported resources include <code>memory</code>, <code>cpu</code>, and <code>nvidia.com/gpu</code>. For more information, see <a href="https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/">Resource management for pods and containers</a> in the <i>Kubernetes documentation</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|limits|object|false|none|none|
|requests|object|false|none|none|

<h2 id="tocS_EksContainerVolumeMounts">EksContainerVolumeMounts</h2>
<!-- backwards compatibility -->
<a id="schemaekscontainervolumemounts"></a>
<a id="schema_EksContainerVolumeMounts"></a>
<a id="tocSekscontainervolumemounts"></a>
<a id="tocsekscontainervolumemounts"></a>

```json
[
  {
    "name": {},
    "mountPath": {},
    "readOnly": {}
  }
]
```

<h2 id="tocS_EksContainerSecurityContext">EksContainerSecurityContext</h2>
<!-- backwards compatibility -->
<a id="schemaekscontainersecuritycontext"></a>
<a id="schema_EksContainerSecurityContext"></a>
<a id="tocSekscontainersecuritycontext"></a>
<a id="tocsekscontainersecuritycontext"></a>

```json
{
  "runAsUser": {},
  "runAsGroup": {},
  "privileged": {},
  "readOnlyRootFilesystem": {},
  "runAsNonRoot": {}
}
```

The security context for a job. For more information, see <a href="https://kubernetes.io/docs/tasks/configure-pod-container/security-context/">Configure a security context for a pod or container</a> in the <i>Kubernetes documentation</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|runAsUser|object|false|none|none|
|runAsGroup|object|false|none|none|
|privileged|object|false|none|none|
|readOnlyRootFilesystem|object|false|none|none|
|runAsNonRoot|object|false|none|none|

<h2 id="tocS_EksContainer">EksContainer</h2>
<!-- backwards compatibility -->
<a id="schemaekscontainer"></a>
<a id="schema_EksContainer"></a>
<a id="tocSekscontainer"></a>
<a id="tocsekscontainer"></a>

```json
{
  "name": {},
  "image": {},
  "imagePullPolicy": {},
  "command": {},
  "args": {},
  "env": {},
  "resources": {
    "limits": {
      "property1": "string",
      "property2": "string"
    },
    "requests": {
      "property1": "string",
      "property2": "string"
    }
  },
  "volumeMounts": {},
  "securityContext": {
    "runAsUser": {},
    "runAsGroup": {},
    "privileged": {},
    "readOnlyRootFilesystem": {},
    "runAsNonRoot": {}
  }
}
```

EKS container properties are used in job definitions for Amazon EKS based job definitions to describe the properties for a container node in the pod that's launched as part of a job. This can't be specified for Amazon ECS based job definitions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|image|object|true|none|none|
|imagePullPolicy|object|false|none|none|
|command|object|false|none|none|
|args|object|false|none|none|
|env|object|false|none|none|
|resources|object|false|none|none|
|volumeMounts|object|false|none|none|
|securityContext|object|false|none|none|

<h2 id="tocS_EksContainerDetail">EksContainerDetail</h2>
<!-- backwards compatibility -->
<a id="schemaekscontainerdetail"></a>
<a id="schema_EksContainerDetail"></a>
<a id="tocSekscontainerdetail"></a>
<a id="tocsekscontainerdetail"></a>

```json
{
  "name": {},
  "image": {},
  "imagePullPolicy": {},
  "command": {},
  "args": {},
  "env": {},
  "resources": {
    "limits": {
      "property1": "string",
      "property2": "string"
    },
    "requests": {
      "property1": "string",
      "property2": "string"
    }
  },
  "exitCode": {},
  "reason": {},
  "volumeMounts": {},
  "securityContext": {
    "runAsUser": {},
    "runAsGroup": {},
    "privileged": {},
    "readOnlyRootFilesystem": {},
    "runAsNonRoot": {}
  }
}
```

The details for container properties that are returned by <code>DescribeJobs</code> for jobs that use Amazon EKS.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|image|object|false|none|none|
|imagePullPolicy|object|false|none|none|
|command|object|false|none|none|
|args|object|false|none|none|
|env|object|false|none|none|
|resources|object|false|none|none|
|exitCode|object|false|none|none|
|reason|object|false|none|none|
|volumeMounts|object|false|none|none|
|securityContext|object|false|none|none|

<h2 id="tocS_EksContainerDetails">EksContainerDetails</h2>
<!-- backwards compatibility -->
<a id="schemaekscontainerdetails"></a>
<a id="schema_EksContainerDetails"></a>
<a id="tocSekscontainerdetails"></a>
<a id="tocsekscontainerdetails"></a>

```json
[
  {
    "name": {},
    "image": {},
    "imagePullPolicy": {},
    "command": {},
    "args": {},
    "env": {},
    "resources": {
      "limits": {
        "property1": "string",
        "property2": "string"
      },
      "requests": {
        "property1": "string",
        "property2": "string"
      }
    },
    "exitCode": {},
    "reason": {},
    "volumeMounts": {},
    "securityContext": {
      "runAsUser": {},
      "runAsGroup": {},
      "privileged": {},
      "readOnlyRootFilesystem": {},
      "runAsNonRoot": {}
    }
  }
]
```

<h2 id="tocS_EksContainerEnvironmentVariable">EksContainerEnvironmentVariable</h2>
<!-- backwards compatibility -->
<a id="schemaekscontainerenvironmentvariable"></a>
<a id="schema_EksContainerEnvironmentVariable"></a>
<a id="tocSekscontainerenvironmentvariable"></a>
<a id="tocsekscontainerenvironmentvariable"></a>

```json
{
  "name": {},
  "value": {}
}
```

An environment variable.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|value|object|false|none|none|

<h2 id="tocS_EksContainerOverride">EksContainerOverride</h2>
<!-- backwards compatibility -->
<a id="schemaekscontaineroverride"></a>
<a id="schema_EksContainerOverride"></a>
<a id="tocSekscontaineroverride"></a>
<a id="tocsekscontaineroverride"></a>

```json
{
  "image": {},
  "command": {},
  "args": {},
  "env": {},
  "resources": {
    "limits": {
      "property1": "string",
      "property2": "string"
    },
    "requests": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

Object representing any Kubernetes overrides to a job definition that's used in a <a>SubmitJob</a> API operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|image|object|false|none|none|
|command|object|false|none|none|
|args|object|false|none|none|
|env|object|false|none|none|
|resources|object|false|none|none|

<h2 id="tocS_EksContainerOverrideList">EksContainerOverrideList</h2>
<!-- backwards compatibility -->
<a id="schemaekscontaineroverridelist"></a>
<a id="schema_EksContainerOverrideList"></a>
<a id="tocSekscontaineroverridelist"></a>
<a id="tocsekscontaineroverridelist"></a>

```json
[
  {
    "image": {},
    "command": {},
    "args": {},
    "env": {},
    "resources": {
      "limits": {
        "property1": "string",
        "property2": "string"
      },
      "requests": {
        "property1": "string",
        "property2": "string"
      }
    }
  }
]
```

<h2 id="tocS_EksLimits">EksLimits</h2>
<!-- backwards compatibility -->
<a id="schemaekslimits"></a>
<a id="schema_EksLimits"></a>
<a id="tocSekslimits"></a>
<a id="tocsekslimits"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Quantity](#schemaquantity)|false|none|none|

<h2 id="tocS_EksRequests">EksRequests</h2>
<!-- backwards compatibility -->
<a id="schemaeksrequests"></a>
<a id="schema_EksRequests"></a>
<a id="tocSeksrequests"></a>
<a id="tocseksrequests"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Quantity](#schemaquantity)|false|none|none|

<h2 id="tocS_EksContainerVolumeMount">EksContainerVolumeMount</h2>
<!-- backwards compatibility -->
<a id="schemaekscontainervolumemount"></a>
<a id="schema_EksContainerVolumeMount"></a>
<a id="tocSekscontainervolumemount"></a>
<a id="tocsekscontainervolumemount"></a>

```json
{
  "name": {},
  "mountPath": {},
  "readOnly": {}
}
```

The volume mounts for a container for an Amazon EKS job. For more information about volumes and volume mounts in Kubernetes, see <a href="https://kubernetes.io/docs/concepts/storage/volumes/">Volumes</a> in the <i>Kubernetes documentation</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|mountPath|object|false|none|none|
|readOnly|object|false|none|none|

<h2 id="tocS_EksContainers">EksContainers</h2>
<!-- backwards compatibility -->
<a id="schemaekscontainers"></a>
<a id="schema_EksContainers"></a>
<a id="tocSekscontainers"></a>
<a id="tocsekscontainers"></a>

```json
[
  {
    "name": {},
    "image": {},
    "imagePullPolicy": {},
    "command": {},
    "args": {},
    "env": {},
    "resources": {
      "limits": {
        "property1": "string",
        "property2": "string"
      },
      "requests": {
        "property1": "string",
        "property2": "string"
      }
    },
    "volumeMounts": {},
    "securityContext": {
      "runAsUser": {},
      "runAsGroup": {},
      "privileged": {},
      "readOnlyRootFilesystem": {},
      "runAsNonRoot": {}
    }
  }
]
```

<h2 id="tocS_Quantity">Quantity</h2>
<!-- backwards compatibility -->
<a id="schemaquantity"></a>
<a id="schema_Quantity"></a>
<a id="tocSquantity"></a>
<a id="tocsquantity"></a>

```json
"string"
```

<h2 id="tocS_EksEmptyDir">EksEmptyDir</h2>
<!-- backwards compatibility -->
<a id="schemaeksemptydir"></a>
<a id="schema_EksEmptyDir"></a>
<a id="tocSeksemptydir"></a>
<a id="tocseksemptydir"></a>

```json
{
  "medium": {},
  "sizeLimit": {}
}
```

Specifies the configuration of a Kubernetes <code>emptyDir</code> volume. An <code>emptyDir</code> volume is first created when a pod is assigned to a node. It exists as long as that pod is running on that node. The <code>emptyDir</code> volume is initially empty. All containers in the pod can read and write the files in the <code>emptyDir</code> volume. However, the <code>emptyDir</code> volume can be mounted at the same or different paths in each container. When a pod is removed from a node for any reason, the data in the <code>emptyDir</code> is deleted permanently. For more information, see <a href="https://kubernetes.io/docs/concepts/storage/volumes/#emptydir">emptyDir</a> in the <i>Kubernetes documentation</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|medium|object|false|none|none|
|sizeLimit|object|false|none|none|

<h2 id="tocS_EksHostPath">EksHostPath</h2>
<!-- backwards compatibility -->
<a id="schemaekshostpath"></a>
<a id="schema_EksHostPath"></a>
<a id="tocSekshostpath"></a>
<a id="tocsekshostpath"></a>

```json
{
  "path": {}
}
```

Specifies the configuration of a Kubernetes <code>hostPath</code> volume. A <code>hostPath</code> volume mounts an existing file or directory from the host node's filesystem into your pod. For more information, see <a href="https://kubernetes.io/docs/concepts/storage/volumes/#hostpath">hostPath</a> in the <i>Kubernetes documentation</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|object|false|none|none|

<h2 id="tocS_EksLabelsMap">EksLabelsMap</h2>
<!-- backwards compatibility -->
<a id="schemaekslabelsmap"></a>
<a id="schema_EksLabelsMap"></a>
<a id="tocSekslabelsmap"></a>
<a id="tocsekslabelsmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[String](#schemastring)|false|none|none|

<h2 id="tocS_EksMetadata">EksMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaeksmetadata"></a>
<a id="schema_EksMetadata"></a>
<a id="tocSeksmetadata"></a>
<a id="tocseksmetadata"></a>

```json
{
  "labels": {
    "property1": "string",
    "property2": "string"
  }
}
```

Describes and uniquely identifies Kubernetes resources. For example, the compute environment that a pod runs in or the <code>jobID</code> for a job running in the pod. For more information, see <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/">Understanding Kubernetes Objects</a> in the <i>Kubernetes documentation</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labels|object|false|none|none|

<h2 id="tocS_EksVolumes">EksVolumes</h2>
<!-- backwards compatibility -->
<a id="schemaeksvolumes"></a>
<a id="schema_EksVolumes"></a>
<a id="tocSeksvolumes"></a>
<a id="tocseksvolumes"></a>

```json
[
  {
    "name": {},
    "hostPath": {
      "path": {}
    },
    "emptyDir": {
      "medium": {},
      "sizeLimit": {}
    },
    "secret": {
      "secretName": {},
      "optional": {}
    }
  }
]
```

<h2 id="tocS_EksPodPropertiesDetail">EksPodPropertiesDetail</h2>
<!-- backwards compatibility -->
<a id="schemaekspodpropertiesdetail"></a>
<a id="schema_EksPodPropertiesDetail"></a>
<a id="tocSekspodpropertiesdetail"></a>
<a id="tocsekspodpropertiesdetail"></a>

```json
{
  "serviceAccountName": {},
  "hostNetwork": {},
  "dnsPolicy": {},
  "containers": {},
  "volumes": {},
  "podName": {},
  "nodeName": {},
  "metadata": {
    "labels": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

The details for the pod.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceAccountName|object|false|none|none|
|hostNetwork|object|false|none|none|
|dnsPolicy|object|false|none|none|
|containers|object|false|none|none|
|volumes|object|false|none|none|
|podName|object|false|none|none|
|nodeName|object|false|none|none|
|metadata|[EksMetadata](#schemaeksmetadata)|false|none|Describes and uniquely identifies Kubernetes resources. For example, the compute environment that a pod runs in or the <code>jobID</code> for a job running in the pod. For more information, see <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/">Understanding Kubernetes Objects</a> in the <i>Kubernetes documentation</i>.|

<h2 id="tocS_EksProperties">EksProperties</h2>
<!-- backwards compatibility -->
<a id="schemaeksproperties"></a>
<a id="schema_EksProperties"></a>
<a id="tocSeksproperties"></a>
<a id="tocseksproperties"></a>

```json
{
  "podProperties": {
    "serviceAccountName": {},
    "hostNetwork": {},
    "dnsPolicy": {},
    "containers": {},
    "volumes": {},
    "metadata": {
      "labels": {
        "property1": "string",
        "property2": "string"
      }
    }
  }
}
```

An object that contains the properties for the Kubernetes resources of a job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|podProperties|object|false|none|none|

<h2 id="tocS_EksPropertiesDetail">EksPropertiesDetail</h2>
<!-- backwards compatibility -->
<a id="schemaekspropertiesdetail"></a>
<a id="schema_EksPropertiesDetail"></a>
<a id="tocSekspropertiesdetail"></a>
<a id="tocsekspropertiesdetail"></a>

```json
{
  "podProperties": {
    "serviceAccountName": {},
    "hostNetwork": {},
    "dnsPolicy": {},
    "containers": {},
    "volumes": {},
    "podName": {},
    "nodeName": {},
    "metadata": {
      "labels": {
        "property1": "string",
        "property2": "string"
      }
    }
  }
}
```

An object that contains the details for the Kubernetes resources of a job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|podProperties|object|false|none|none|

<h2 id="tocS_EksPropertiesOverride">EksPropertiesOverride</h2>
<!-- backwards compatibility -->
<a id="schemaekspropertiesoverride"></a>
<a id="schema_EksPropertiesOverride"></a>
<a id="tocSekspropertiesoverride"></a>
<a id="tocsekspropertiesoverride"></a>

```json
{
  "podProperties": {
    "containers": {},
    "metadata": {
      "labels": {
        "property1": "string",
        "property2": "string"
      }
    }
  }
}
```

An object that contains overrides for the Kubernetes resources of a job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|podProperties|object|false|none|none|

<h2 id="tocS_EksSecret">EksSecret</h2>
<!-- backwards compatibility -->
<a id="schemaekssecret"></a>
<a id="schema_EksSecret"></a>
<a id="tocSekssecret"></a>
<a id="tocsekssecret"></a>

```json
{
  "secretName": {},
  "optional": {}
}
```

Specifies the configuration of a Kubernetes <code>secret</code> volume. For more information, see <a href="https://kubernetes.io/docs/concepts/storage/volumes/#secret">secret</a> in the <i>Kubernetes documentation</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|secretName|object|true|none|none|
|optional|object|false|none|none|

<h2 id="tocS_EksVolume">EksVolume</h2>
<!-- backwards compatibility -->
<a id="schemaeksvolume"></a>
<a id="schema_EksVolume"></a>
<a id="tocSeksvolume"></a>
<a id="tocseksvolume"></a>

```json
{
  "name": {},
  "hostPath": {
    "path": {}
  },
  "emptyDir": {
    "medium": {},
    "sizeLimit": {}
  },
  "secret": {
    "secretName": {},
    "optional": {}
  }
}
```

Specifies an Amazon EKS volume for a job definition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|hostPath|object|false|none|none|
|emptyDir|object|false|none|none|
|secret|object|false|none|none|

<h2 id="tocS_KeyValuePair">KeyValuePair</h2>
<!-- backwards compatibility -->
<a id="schemakeyvaluepair"></a>
<a id="schema_KeyValuePair"></a>
<a id="tocSkeyvaluepair"></a>
<a id="tocskeyvaluepair"></a>

```json
{
  "name": {},
  "value": {}
}
```

A key-value pair object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|value|object|false|none|none|

<h2 id="tocS_RetryAction">RetryAction</h2>
<!-- backwards compatibility -->
<a id="schemaretryaction"></a>
<a id="schema_RetryAction"></a>
<a id="tocSretryaction"></a>
<a id="tocsretryaction"></a>

```json
"RETRY"
```

<h2 id="tocS_EvaluateOnExit">EvaluateOnExit</h2>
<!-- backwards compatibility -->
<a id="schemaevaluateonexit"></a>
<a id="schema_EvaluateOnExit"></a>
<a id="tocSevaluateonexit"></a>
<a id="tocsevaluateonexit"></a>

```json
{
  "onStatusReason": {},
  "onReason": {},
  "onExitCode": {},
  "action": {}
}
```

Specifies an array of up to 5 conditions to be met, and an action to take (<code>RETRY</code> or <code>EXIT</code>) if all conditions are met. If none of the <code>EvaluateOnExit</code> conditions in a <code>RetryStrategy</code> match, then the job is retried.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|onStatusReason|object|false|none|none|
|onReason|object|false|none|none|
|onExitCode|object|false|none|none|
|action|object|true|none|none|

<h2 id="tocS_Float">Float</h2>
<!-- backwards compatibility -->
<a id="schemafloat"></a>
<a id="schema_Float"></a>
<a id="tocSfloat"></a>
<a id="tocsfloat"></a>

```json
0
```

<h2 id="tocS_Host">Host</h2>
<!-- backwards compatibility -->
<a id="schemahost"></a>
<a id="schema_Host"></a>
<a id="tocShost"></a>
<a id="tocshost"></a>

```json
{
  "sourcePath": {}
}
```

Determine whether your data volume persists on the host container instance and where it's stored. If this parameter is empty, then the Docker daemon assigns a host path for your data volume. However, the data isn't guaranteed to persist after the containers that are associated with it stop running.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourcePath|object|false|none|none|

<h2 id="tocS_JQStatus">JQStatus</h2>
<!-- backwards compatibility -->
<a id="schemajqstatus"></a>
<a id="schema_JQStatus"></a>
<a id="tocSjqstatus"></a>
<a id="tocsjqstatus"></a>

```json
"CREATING"
```

<h2 id="tocS_ParametersMap">ParametersMap</h2>
<!-- backwards compatibility -->
<a id="schemaparametersmap"></a>
<a id="schema_ParametersMap"></a>
<a id="tocSparametersmap"></a>
<a id="tocsparametersmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[String](#schemastring)|false|none|none|

<h2 id="tocS_RetryStrategy">RetryStrategy</h2>
<!-- backwards compatibility -->
<a id="schemaretrystrategy"></a>
<a id="schema_RetryStrategy"></a>
<a id="tocSretrystrategy"></a>
<a id="tocsretrystrategy"></a>

```json
{
  "attempts": {},
  "evaluateOnExit": {}
}
```

The retry strategy that's associated with a job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html">Automated job retries</a> in the <i>Batch User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attempts|object|false|none|none|
|evaluateOnExit|object|false|none|none|

<h2 id="tocS_JobTimeout">JobTimeout</h2>
<!-- backwards compatibility -->
<a id="schemajobtimeout"></a>
<a id="schema_JobTimeout"></a>
<a id="tocSjobtimeout"></a>
<a id="tocsjobtimeout"></a>

```json
{
  "attemptDurationSeconds": {}
}
```

An object that represents a job timeout configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attemptDurationSeconds|object|false|none|none|

<h2 id="tocS_NodeProperties">NodeProperties</h2>
<!-- backwards compatibility -->
<a id="schemanodeproperties"></a>
<a id="schema_NodeProperties"></a>
<a id="tocSnodeproperties"></a>
<a id="tocsnodeproperties"></a>

```json
{
  "numNodes": {},
  "mainNode": {},
  "nodeRangeProperties": {}
}
```

<p>An object that represents the node properties of a multi-node parallel job.</p> <note> <p>Node properties can't be specified for Amazon EKS based job definitions.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|numNodes|object|true|none|none|
|mainNode|object|true|none|none|
|nodeRangeProperties|object|true|none|none|

<h2 id="tocS_PlatformCapabilityList">PlatformCapabilityList</h2>
<!-- backwards compatibility -->
<a id="schemaplatformcapabilitylist"></a>
<a id="schema_PlatformCapabilityList"></a>
<a id="tocSplatformcapabilitylist"></a>
<a id="tocsplatformcapabilitylist"></a>

```json
[
  "EC2"
]
```

<h2 id="tocS_JobDefinition">JobDefinition</h2>
<!-- backwards compatibility -->
<a id="schemajobdefinition"></a>
<a id="schema_JobDefinition"></a>
<a id="tocSjobdefinition"></a>
<a id="tocsjobdefinition"></a>

```json
{
  "jobDefinitionName": {},
  "jobDefinitionArn": {},
  "revision": {},
  "status": {},
  "type": {},
  "schedulingPriority": {},
  "parameters": {
    "property1": "string",
    "property2": "string"
  },
  "retryStrategy": {
    "attempts": {},
    "evaluateOnExit": {}
  },
  "containerProperties": {
    "image": {},
    "vcpus": {},
    "memory": {},
    "command": {},
    "jobRoleArn": {},
    "executionRoleArn": {},
    "volumes": {},
    "environment": {},
    "mountPoints": {},
    "readonlyRootFilesystem": {},
    "privileged": {},
    "ulimits": {},
    "user": {},
    "instanceType": {},
    "resourceRequirements": {},
    "linuxParameters": {
      "devices": {},
      "initProcessEnabled": {},
      "sharedMemorySize": {},
      "tmpfs": {},
      "maxSwap": {},
      "swappiness": {}
    },
    "logConfiguration": {
      "logDriver": {},
      "options": {
        "property1": "string",
        "property2": "string"
      },
      "secretOptions": {}
    },
    "secrets": {},
    "networkConfiguration": {
      "assignPublicIp": {}
    },
    "fargatePlatformConfiguration": {
      "platformVersion": {}
    },
    "ephemeralStorage": {
      "sizeInGiB": {}
    },
    "runtimePlatform": {
      "operatingSystemFamily": {},
      "cpuArchitecture": {}
    }
  },
  "timeout": {
    "attemptDurationSeconds": {}
  },
  "nodeProperties": {
    "numNodes": {},
    "mainNode": {},
    "nodeRangeProperties": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "propagateTags": {},
  "platformCapabilities": {},
  "eksProperties": {
    "podProperties": {
      "serviceAccountName": {},
      "hostNetwork": {},
      "dnsPolicy": {},
      "containers": {},
      "volumes": {},
      "metadata": {
        "labels": {
          "property1": "string",
          "property2": "string"
        }
      }
    }
  },
  "containerOrchestrationType": {}
}
```

An object that represents an Batch job definition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobDefinitionName|object|true|none|none|
|jobDefinitionArn|object|true|none|none|
|revision|object|true|none|none|
|status|object|false|none|none|
|type|object|true|none|none|
|schedulingPriority|object|false|none|none|
|parameters|object|false|none|none|
|retryStrategy|object|false|none|none|
|containerProperties|object|false|none|none|
|timeout|object|false|none|none|
|nodeProperties|object|false|none|none|
|tags|object|false|none|none|
|propagateTags|object|false|none|none|
|platformCapabilities|object|false|none|none|
|eksProperties|object|false|none|none|
|containerOrchestrationType|object|false|none|none|

<h2 id="tocS_JobDefinitionType">JobDefinitionType</h2>
<!-- backwards compatibility -->
<a id="schemajobdefinitiontype"></a>
<a id="schema_JobDefinitionType"></a>
<a id="tocSjobdefinitiontype"></a>
<a id="tocsjobdefinitiontype"></a>

```json
"container"
```

<h2 id="tocS_JobDependencyList">JobDependencyList</h2>
<!-- backwards compatibility -->
<a id="schemajobdependencylist"></a>
<a id="schema_JobDependencyList"></a>
<a id="tocSjobdependencylist"></a>
<a id="tocsjobdependencylist"></a>

```json
[
  {
    "jobId": {},
    "type": {}
  }
]
```

<h2 id="tocS_JobStatus">JobStatus</h2>
<!-- backwards compatibility -->
<a id="schemajobstatus"></a>
<a id="schema_JobStatus"></a>
<a id="tocSjobstatus"></a>
<a id="tocsjobstatus"></a>

```json
"SUBMITTED"
```

<h2 id="tocS_NodeDetails">NodeDetails</h2>
<!-- backwards compatibility -->
<a id="schemanodedetails"></a>
<a id="schema_NodeDetails"></a>
<a id="tocSnodedetails"></a>
<a id="tocsnodedetails"></a>

```json
{
  "nodeIndex": {},
  "isMainNode": {}
}
```

An object that represents the details of a multi-node parallel job node.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nodeIndex|object|false|none|none|
|isMainNode|object|false|none|none|

<h2 id="tocS_JobDetail">JobDetail</h2>
<!-- backwards compatibility -->
<a id="schemajobdetail"></a>
<a id="schema_JobDetail"></a>
<a id="tocSjobdetail"></a>
<a id="tocsjobdetail"></a>

```json
{
  "jobArn": {},
  "jobName": {},
  "jobId": {},
  "jobQueue": {},
  "status": {},
  "shareIdentifier": {},
  "schedulingPriority": {},
  "attempts": {},
  "statusReason": {},
  "createdAt": {},
  "retryStrategy": {
    "attempts": {},
    "evaluateOnExit": {}
  },
  "startedAt": {},
  "stoppedAt": {},
  "dependsOn": {},
  "jobDefinition": {},
  "parameters": {
    "property1": "string",
    "property2": "string"
  },
  "container": {
    "image": {},
    "vcpus": {},
    "memory": {},
    "command": {},
    "jobRoleArn": {},
    "executionRoleArn": {},
    "volumes": {},
    "environment": {},
    "mountPoints": {},
    "readonlyRootFilesystem": {},
    "ulimits": {},
    "privileged": {},
    "user": {},
    "exitCode": {},
    "reason": {},
    "containerInstanceArn": {},
    "taskArn": {},
    "logStreamName": {},
    "instanceType": {},
    "networkInterfaces": {},
    "resourceRequirements": {},
    "linuxParameters": {
      "devices": {},
      "initProcessEnabled": {},
      "sharedMemorySize": {},
      "tmpfs": {},
      "maxSwap": {},
      "swappiness": {}
    },
    "logConfiguration": {
      "logDriver": {},
      "options": {
        "property1": "string",
        "property2": "string"
      },
      "secretOptions": {}
    },
    "secrets": {},
    "networkConfiguration": {
      "assignPublicIp": {}
    },
    "fargatePlatformConfiguration": {
      "platformVersion": {}
    },
    "ephemeralStorage": {
      "sizeInGiB": {}
    },
    "runtimePlatform": {
      "operatingSystemFamily": {},
      "cpuArchitecture": {}
    }
  },
  "nodeDetails": {
    "nodeIndex": {},
    "isMainNode": {}
  },
  "nodeProperties": {
    "numNodes": {},
    "mainNode": {},
    "nodeRangeProperties": {}
  },
  "arrayProperties": {
    "statusSummary": {
      "property1": 0,
      "property2": 0
    },
    "size": {},
    "index": {}
  },
  "timeout": {
    "attemptDurationSeconds": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "propagateTags": {},
  "platformCapabilities": {},
  "eksProperties": {
    "podProperties": {
      "serviceAccountName": {},
      "hostNetwork": {},
      "dnsPolicy": {},
      "containers": {},
      "volumes": {},
      "podName": {},
      "nodeName": {},
      "metadata": {
        "labels": {
          "property1": "string",
          "property2": "string"
        }
      }
    }
  },
  "eksAttempts": {},
  "isCancelled": {},
  "isTerminated": {}
}
```

An object that represents an Batch job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobArn|object|false|none|none|
|jobName|object|true|none|none|
|jobId|object|true|none|none|
|jobQueue|object|true|none|none|
|status|object|true|none|none|
|shareIdentifier|object|false|none|none|
|schedulingPriority|object|false|none|none|
|attempts|object|false|none|none|
|statusReason|object|false|none|none|
|createdAt|object|false|none|none|
|retryStrategy|object|false|none|none|
|startedAt|object|true|none|none|
|stoppedAt|object|false|none|none|
|dependsOn|object|false|none|none|
|jobDefinition|object|true|none|none|
|parameters|object|false|none|none|
|container|object|false|none|none|
|nodeDetails|object|false|none|none|
|nodeProperties|object|false|none|none|
|arrayProperties|object|false|none|none|
|timeout|object|false|none|none|
|tags|object|false|none|none|
|propagateTags|object|false|none|none|
|platformCapabilities|object|false|none|none|
|eksProperties|object|false|none|none|
|eksAttempts|object|false|none|none|
|isCancelled|object|false|none|none|
|isTerminated|object|false|none|none|

<h2 id="tocS_JobQueueDetail">JobQueueDetail</h2>
<!-- backwards compatibility -->
<a id="schemajobqueuedetail"></a>
<a id="schema_JobQueueDetail"></a>
<a id="tocSjobqueuedetail"></a>
<a id="tocsjobqueuedetail"></a>

```json
{
  "jobQueueName": {},
  "jobQueueArn": {},
  "state": {},
  "schedulingPolicyArn": {},
  "status": {},
  "statusReason": {},
  "priority": {},
  "computeEnvironmentOrder": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

An object that represents the details for an Batch job queue.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobQueueName|object|true|none|none|
|jobQueueArn|object|true|none|none|
|state|object|true|none|none|
|schedulingPolicyArn|object|false|none|none|
|status|object|false|none|none|
|statusReason|object|false|none|none|
|priority|object|true|none|none|
|computeEnvironmentOrder|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_NodePropertiesSummary">NodePropertiesSummary</h2>
<!-- backwards compatibility -->
<a id="schemanodepropertiessummary"></a>
<a id="schema_NodePropertiesSummary"></a>
<a id="tocSnodepropertiessummary"></a>
<a id="tocsnodepropertiessummary"></a>

```json
{
  "isMainNode": {},
  "numNodes": {},
  "nodeIndex": {}
}
```

An object that represents the properties of a node that's associated with a multi-node parallel job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isMainNode|object|false|none|none|
|numNodes|object|false|none|none|
|nodeIndex|object|false|none|none|

<h2 id="tocS_JobSummary">JobSummary</h2>
<!-- backwards compatibility -->
<a id="schemajobsummary"></a>
<a id="schema_JobSummary"></a>
<a id="tocSjobsummary"></a>
<a id="tocsjobsummary"></a>

```json
{
  "jobArn": {},
  "jobId": {},
  "jobName": {},
  "createdAt": {},
  "status": {},
  "statusReason": {},
  "startedAt": {},
  "stoppedAt": {},
  "container": {
    "exitCode": {},
    "reason": {}
  },
  "arrayProperties": {
    "size": {},
    "index": {}
  },
  "nodeProperties": {
    "isMainNode": {},
    "numNodes": {},
    "nodeIndex": {}
  },
  "jobDefinition": {}
}
```

An object that represents summary details of a job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobArn|object|false|none|none|
|jobId|object|true|none|none|
|jobName|object|true|none|none|
|createdAt|object|false|none|none|
|status|object|false|none|none|
|statusReason|object|false|none|none|
|startedAt|object|false|none|none|
|stoppedAt|object|false|none|none|
|container|object|false|none|none|
|arrayProperties|object|false|none|none|
|nodeProperties|object|false|none|none|
|jobDefinition|object|false|none|none|

<h2 id="tocS_JobSummaryList">JobSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemajobsummarylist"></a>
<a id="schema_JobSummaryList"></a>
<a id="tocSjobsummarylist"></a>
<a id="tocsjobsummarylist"></a>

```json
[
  {
    "jobArn": {},
    "jobId": {},
    "jobName": {},
    "createdAt": {},
    "status": {},
    "statusReason": {},
    "startedAt": {},
    "stoppedAt": {},
    "container": {
      "exitCode": {},
      "reason": {}
    },
    "arrayProperties": {
      "size": {},
      "index": {}
    },
    "nodeProperties": {
      "isMainNode": {},
      "numNodes": {},
      "nodeIndex": {}
    },
    "jobDefinition": {}
  }
]
```

<h2 id="tocS_TmpfsList">TmpfsList</h2>
<!-- backwards compatibility -->
<a id="schematmpfslist"></a>
<a id="schema_TmpfsList"></a>
<a id="tocStmpfslist"></a>
<a id="tocstmpfslist"></a>

```json
[
  {
    "containerPath": {},
    "size": {},
    "mountOptions": {}
  }
]
```

<h2 id="tocS_ListJobsFilterList">ListJobsFilterList</h2>
<!-- backwards compatibility -->
<a id="schemalistjobsfilterlist"></a>
<a id="schema_ListJobsFilterList"></a>
<a id="tocSlistjobsfilterlist"></a>
<a id="tocslistjobsfilterlist"></a>

```json
[
  {
    "name": {},
    "values": {}
  }
]
```

<h2 id="tocS_ListJobsRequest">ListJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistjobsrequest"></a>
<a id="schema_ListJobsRequest"></a>
<a id="tocSlistjobsrequest"></a>
<a id="tocslistjobsrequest"></a>

```json
{
  "jobQueue": {},
  "arrayJobId": {},
  "multiNodeJobId": {},
  "jobStatus": {},
  "maxResults": {},
  "nextToken": {},
  "filters": {}
}
```

Contains the parameters for <code>ListJobs</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobQueue|object|false|none|none|
|arrayJobId|object|false|none|none|
|multiNodeJobId|object|false|none|none|
|jobStatus|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|
|filters|object|false|none|none|

<h2 id="tocS_ListSchedulingPoliciesRequest">ListSchedulingPoliciesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistschedulingpoliciesrequest"></a>
<a id="schema_ListSchedulingPoliciesRequest"></a>
<a id="tocSlistschedulingpoliciesrequest"></a>
<a id="tocslistschedulingpoliciesrequest"></a>

```json
{
  "maxResults": {},
  "nextToken": {}
}
```

Contains the parameters for <code>ListSchedulingPolicies</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_SchedulingPolicyListingDetailList">SchedulingPolicyListingDetailList</h2>
<!-- backwards compatibility -->
<a id="schemaschedulingpolicylistingdetaillist"></a>
<a id="schema_SchedulingPolicyListingDetailList"></a>
<a id="tocSschedulingpolicylistingdetaillist"></a>
<a id="tocsschedulingpolicylistingdetaillist"></a>

```json
[
  {
    "arn": {}
  }
]
```

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{}
```

Contains the parameters for <code>ListTagsForResource</code>.

<h2 id="tocS_LogDriver">LogDriver</h2>
<!-- backwards compatibility -->
<a id="schemalogdriver"></a>
<a id="schema_LogDriver"></a>
<a id="tocSlogdriver"></a>
<a id="tocslogdriver"></a>

```json
"json-file"
```

<h2 id="tocS_LogConfigurationOptionsMap">LogConfigurationOptionsMap</h2>
<!-- backwards compatibility -->
<a id="schemalogconfigurationoptionsmap"></a>
<a id="schema_LogConfigurationOptionsMap"></a>
<a id="tocSlogconfigurationoptionsmap"></a>
<a id="tocslogconfigurationoptionsmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[String](#schemastring)|false|none|none|

<h2 id="tocS_MountPoint">MountPoint</h2>
<!-- backwards compatibility -->
<a id="schemamountpoint"></a>
<a id="schema_MountPoint"></a>
<a id="tocSmountpoint"></a>
<a id="tocsmountpoint"></a>

```json
{
  "containerPath": {},
  "readOnly": {},
  "sourceVolume": {}
}
```

Details for a Docker volume mount point that's used in a job's container properties. This parameter maps to <code>Volumes</code> in the <a href="https://docs.docker.com/engine/reference/api/docker_remote_api_v1.19/#create-a-container">Create a container</a> section of the <i>Docker Remote API</i> and the <code>--volume</code> option to docker run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containerPath|object|false|none|none|
|readOnly|object|false|none|none|
|sourceVolume|object|false|none|none|

<h2 id="tocS_NetworkInterface">NetworkInterface</h2>
<!-- backwards compatibility -->
<a id="schemanetworkinterface"></a>
<a id="schema_NetworkInterface"></a>
<a id="tocSnetworkinterface"></a>
<a id="tocsnetworkinterface"></a>

```json
{
  "attachmentId": {},
  "ipv6Address": {},
  "privateIpv4Address": {}
}
```

An object that represents the elastic network interface for a multi-node parallel job node.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachmentId|object|false|none|none|
|ipv6Address|object|false|none|none|
|privateIpv4Address|object|false|none|none|

<h2 id="tocS_NodeOverrides">NodeOverrides</h2>
<!-- backwards compatibility -->
<a id="schemanodeoverrides"></a>
<a id="schema_NodeOverrides"></a>
<a id="tocSnodeoverrides"></a>
<a id="tocsnodeoverrides"></a>

```json
{
  "numNodes": {},
  "nodePropertyOverrides": {}
}
```

<p>An object that represents any node overrides to a job definition that's used in a <a>SubmitJob</a> API operation.</p> <note> <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't provide it for these jobs. Rather, use <code>containerOverrides</code> instead.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|numNodes|object|false|none|none|
|nodePropertyOverrides|object|false|none|none|

<h2 id="tocS_NodePropertyOverride">NodePropertyOverride</h2>
<!-- backwards compatibility -->
<a id="schemanodepropertyoverride"></a>
<a id="schema_NodePropertyOverride"></a>
<a id="tocSnodepropertyoverride"></a>
<a id="tocsnodepropertyoverride"></a>

```json
{
  "targetNodes": {},
  "containerOverrides": {
    "vcpus": {},
    "memory": {},
    "command": {},
    "instanceType": {},
    "environment": {},
    "resourceRequirements": {}
  }
}
```

The object that represents any node overrides to a job definition that's used in a <a>SubmitJob</a> API operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|targetNodes|object|true|none|none|
|containerOverrides|object|false|none|none|

<h2 id="tocS_NodeRangeProperty">NodeRangeProperty</h2>
<!-- backwards compatibility -->
<a id="schemanoderangeproperty"></a>
<a id="schema_NodeRangeProperty"></a>
<a id="tocSnoderangeproperty"></a>
<a id="tocsnoderangeproperty"></a>

```json
{
  "targetNodes": {},
  "container": {
    "image": {},
    "vcpus": {},
    "memory": {},
    "command": {},
    "jobRoleArn": {},
    "executionRoleArn": {},
    "volumes": {},
    "environment": {},
    "mountPoints": {},
    "readonlyRootFilesystem": {},
    "privileged": {},
    "ulimits": {},
    "user": {},
    "instanceType": {},
    "resourceRequirements": {},
    "linuxParameters": {
      "devices": {},
      "initProcessEnabled": {},
      "sharedMemorySize": {},
      "tmpfs": {},
      "maxSwap": {},
      "swappiness": {}
    },
    "logConfiguration": {
      "logDriver": {},
      "options": {
        "property1": "string",
        "property2": "string"
      },
      "secretOptions": {}
    },
    "secrets": {},
    "networkConfiguration": {
      "assignPublicIp": {}
    },
    "fargatePlatformConfiguration": {
      "platformVersion": {}
    },
    "ephemeralStorage": {
      "sizeInGiB": {}
    },
    "runtimePlatform": {
      "operatingSystemFamily": {},
      "cpuArchitecture": {}
    }
  }
}
```

An object that represents the properties of the node range for a multi-node parallel job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|targetNodes|object|true|none|none|
|container|object|false|none|none|

<h2 id="tocS_RegisterJobDefinitionRequest">RegisterJobDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaregisterjobdefinitionrequest"></a>
<a id="schema_RegisterJobDefinitionRequest"></a>
<a id="tocSregisterjobdefinitionrequest"></a>
<a id="tocsregisterjobdefinitionrequest"></a>

```json
{
  "jobDefinitionName": {},
  "type": {},
  "parameters": {
    "property1": "string",
    "property2": "string"
  },
  "schedulingPriority": {},
  "containerProperties": {
    "image": {},
    "vcpus": {},
    "memory": {},
    "command": {},
    "jobRoleArn": {},
    "executionRoleArn": {},
    "volumes": {},
    "environment": {},
    "mountPoints": {},
    "readonlyRootFilesystem": {},
    "privileged": {},
    "ulimits": {},
    "user": {},
    "instanceType": {},
    "resourceRequirements": {},
    "linuxParameters": {
      "devices": {},
      "initProcessEnabled": {},
      "sharedMemorySize": {},
      "tmpfs": {},
      "maxSwap": {},
      "swappiness": {}
    },
    "logConfiguration": {
      "logDriver": {},
      "options": {
        "property1": "string",
        "property2": "string"
      },
      "secretOptions": {}
    },
    "secrets": {},
    "networkConfiguration": {
      "assignPublicIp": {}
    },
    "fargatePlatformConfiguration": {
      "platformVersion": {}
    },
    "ephemeralStorage": {
      "sizeInGiB": {}
    },
    "runtimePlatform": {
      "operatingSystemFamily": {},
      "cpuArchitecture": {}
    }
  },
  "nodeProperties": {
    "numNodes": {},
    "mainNode": {},
    "nodeRangeProperties": {}
  },
  "retryStrategy": {
    "attempts": {},
    "evaluateOnExit": {}
  },
  "propagateTags": {},
  "timeout": {
    "attemptDurationSeconds": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "platformCapabilities": {},
  "eksProperties": {
    "podProperties": {
      "serviceAccountName": {},
      "hostNetwork": {},
      "dnsPolicy": {},
      "containers": {},
      "volumes": {},
      "metadata": {
        "labels": {
          "property1": "string",
          "property2": "string"
        }
      }
    }
  }
}
```

Contains the parameters for <code>RegisterJobDefinition</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobDefinitionName|object|true|none|none|
|type|object|true|none|none|
|parameters|object|false|none|none|
|schedulingPriority|object|false|none|none|
|containerProperties|object|false|none|none|
|nodeProperties|object|false|none|none|
|retryStrategy|object|false|none|none|
|propagateTags|object|false|none|none|
|timeout|object|false|none|none|
|tags|object|false|none|none|
|platformCapabilities|object|false|none|none|
|eksProperties|object|false|none|none|

<h2 id="tocS_ResourceType">ResourceType</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetype"></a>
<a id="schema_ResourceType"></a>
<a id="tocSresourcetype"></a>
<a id="tocsresourcetype"></a>

```json
"GPU"
```

<h2 id="tocS_ResourceRequirement">ResourceRequirement</h2>
<!-- backwards compatibility -->
<a id="schemaresourcerequirement"></a>
<a id="schema_ResourceRequirement"></a>
<a id="tocSresourcerequirement"></a>
<a id="tocsresourcerequirement"></a>

```json
{
  "value": {},
  "type": {}
}
```

The type and amount of a resource to assign to a container. The supported resources include <code>GPU</code>, <code>MEMORY</code>, and <code>VCPU</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|object|true|none|none|
|type|object|true|none|none|

<h2 id="tocS_SchedulingPolicyDetail">SchedulingPolicyDetail</h2>
<!-- backwards compatibility -->
<a id="schemaschedulingpolicydetail"></a>
<a id="schema_SchedulingPolicyDetail"></a>
<a id="tocSschedulingpolicydetail"></a>
<a id="tocsschedulingpolicydetail"></a>

```json
{
  "name": {},
  "arn": {},
  "fairsharePolicy": {
    "shareDecaySeconds": {},
    "computeReservation": {},
    "shareDistribution": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

An object that represents a scheduling policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|arn|object|true|none|none|
|fairsharePolicy|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_SchedulingPolicyListingDetail">SchedulingPolicyListingDetail</h2>
<!-- backwards compatibility -->
<a id="schemaschedulingpolicylistingdetail"></a>
<a id="schema_SchedulingPolicyListingDetail"></a>
<a id="tocSschedulingpolicylistingdetail"></a>
<a id="tocsschedulingpolicylistingdetail"></a>

```json
{
  "arn": {}
}
```

An object that contains the details of a scheduling policy that's returned in a <code>ListSchedulingPolicy</code> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|

<h2 id="tocS_Secret">Secret</h2>
<!-- backwards compatibility -->
<a id="schemasecret"></a>
<a id="schema_Secret"></a>
<a id="tocSsecret"></a>
<a id="tocssecret"></a>

```json
{
  "name": {},
  "valueFrom": {}
}
```

<p>An object that represents the secret to expose to your container. Secrets can be exposed to a container in the following ways:</p> <ul> <li> <p>To inject sensitive data into your containers as environment variables, use the <code>secrets</code> container definition parameter.</p> </li> <li> <p>To reference sensitive information in the log configuration of a container, use the <code>secretOptions</code> container definition parameter.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/specifying-sensitive-data.html">Specifying sensitive data</a> in the <i>Batch User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|valueFrom|object|true|none|none|

<h2 id="tocS_ShareAttributes">ShareAttributes</h2>
<!-- backwards compatibility -->
<a id="schemashareattributes"></a>
<a id="schema_ShareAttributes"></a>
<a id="tocSshareattributes"></a>
<a id="tocsshareattributes"></a>

```json
{
  "shareIdentifier": {},
  "weightFactor": {}
}
```

Specifies the weights for the fair share identifiers for the fair share policy. Fair share identifiers that aren't included have a default weight of <code>1.0</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shareIdentifier|object|true|none|none|
|weightFactor|object|false|none|none|

<h2 id="tocS_SubmitJobRequest">SubmitJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemasubmitjobrequest"></a>
<a id="schema_SubmitJobRequest"></a>
<a id="tocSsubmitjobrequest"></a>
<a id="tocssubmitjobrequest"></a>

```json
{
  "jobName": {},
  "jobQueue": {},
  "shareIdentifier": {},
  "schedulingPriorityOverride": {},
  "arrayProperties": {
    "size": {}
  },
  "dependsOn": {},
  "jobDefinition": {},
  "parameters": {
    "property1": "string",
    "property2": "string"
  },
  "containerOverrides": {
    "vcpus": {},
    "memory": {},
    "command": {},
    "instanceType": {},
    "environment": {},
    "resourceRequirements": {}
  },
  "nodeOverrides": {
    "numNodes": {},
    "nodePropertyOverrides": {}
  },
  "retryStrategy": {
    "attempts": {},
    "evaluateOnExit": {}
  },
  "propagateTags": {},
  "timeout": {
    "attemptDurationSeconds": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "eksPropertiesOverride": {
    "podProperties": {
      "containers": {},
      "metadata": {
        "labels": {
          "property1": "string",
          "property2": "string"
        }
      }
    }
  }
}
```

Contains the parameters for <code>SubmitJob</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobName|object|true|none|none|
|jobQueue|object|true|none|none|
|shareIdentifier|object|false|none|none|
|schedulingPriorityOverride|object|false|none|none|
|arrayProperties|object|false|none|none|
|dependsOn|object|false|none|none|
|jobDefinition|object|true|none|none|
|parameters|object|false|none|none|
|containerOverrides|object|false|none|none|
|nodeOverrides|object|false|none|none|
|retryStrategy|object|false|none|none|
|propagateTags|object|false|none|none|
|timeout|object|false|none|none|
|tags|object|false|none|none|
|eksPropertiesOverride|object|false|none|none|

<h2 id="tocS_TagKeysList">TagKeysList</h2>
<!-- backwards compatibility -->
<a id="schematagkeyslist"></a>
<a id="schema_TagKeysList"></a>
<a id="tocStagkeyslist"></a>
<a id="tocstagkeyslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_TagResourceRequest">TagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schematagresourcerequest"></a>
<a id="schema_TagResourceRequest"></a>
<a id="tocStagresourcerequest"></a>
<a id="tocstagresourcerequest"></a>

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Contains the parameters for <code>TagResource</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|true|none|none|

<h2 id="tocS_TerminateJobRequest">TerminateJobRequest</h2>
<!-- backwards compatibility -->
<a id="schematerminatejobrequest"></a>
<a id="schema_TerminateJobRequest"></a>
<a id="tocSterminatejobrequest"></a>
<a id="tocsterminatejobrequest"></a>

```json
{
  "jobId": {},
  "reason": {}
}
```

Contains the parameters for <code>TerminateJob</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|object|true|none|none|
|reason|object|true|none|none|

<h2 id="tocS_Tmpfs">Tmpfs</h2>
<!-- backwards compatibility -->
<a id="schematmpfs"></a>
<a id="schema_Tmpfs"></a>
<a id="tocStmpfs"></a>
<a id="tocstmpfs"></a>

```json
{
  "containerPath": {},
  "size": {},
  "mountOptions": {}
}
```

<p>The container path, mount options, and size of the <code>tmpfs</code> mount.</p> <note> <p>This object isn't applicable to jobs that are running on Fargate resources.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containerPath|object|true|none|none|
|size|object|true|none|none|
|mountOptions|object|false|none|none|

<h2 id="tocS_Ulimit">Ulimit</h2>
<!-- backwards compatibility -->
<a id="schemaulimit"></a>
<a id="schema_Ulimit"></a>
<a id="tocSulimit"></a>
<a id="tocsulimit"></a>

```json
{
  "hardLimit": {},
  "name": {},
  "softLimit": {}
}
```

<p>The <code>ulimit</code> settings to pass to the container.</p> <note> <p>This object isn't applicable to jobs that are running on Fargate resources.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hardLimit|object|true|none|none|
|name|object|true|none|none|
|softLimit|object|true|none|none|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

Contains the parameters for <code>UntagResource</code>.

<h2 id="tocS_UpdateComputeEnvironmentRequest">UpdateComputeEnvironmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecomputeenvironmentrequest"></a>
<a id="schema_UpdateComputeEnvironmentRequest"></a>
<a id="tocSupdatecomputeenvironmentrequest"></a>
<a id="tocsupdatecomputeenvironmentrequest"></a>

```json
{
  "computeEnvironment": {},
  "state": {},
  "unmanagedvCpus": {},
  "computeResources": {
    "minvCpus": {},
    "maxvCpus": {},
    "desiredvCpus": {},
    "subnets": {},
    "securityGroupIds": {},
    "allocationStrategy": {},
    "instanceTypes": {},
    "ec2KeyPair": {},
    "instanceRole": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "placementGroup": {},
    "bidPercentage": {},
    "launchTemplate": {
      "launchTemplateId": {},
      "launchTemplateName": {},
      "version": {}
    },
    "ec2Configuration": {},
    "updateToLatestImageVersion": {},
    "type": {},
    "imageId": {}
  },
  "serviceRole": {},
  "updatePolicy": {
    "terminateJobsOnUpdate": {},
    "jobExecutionTimeoutMinutes": {}
  }
}
```

Contains the parameters for <code>UpdateComputeEnvironment</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|computeEnvironment|object|true|none|none|
|state|object|false|none|none|
|unmanagedvCpus|object|false|none|none|
|computeResources|object|false|none|none|
|serviceRole|object|false|none|none|
|updatePolicy|object|false|none|none|

<h2 id="tocS_UpdateJobQueueRequest">UpdateJobQueueRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatejobqueuerequest"></a>
<a id="schema_UpdateJobQueueRequest"></a>
<a id="tocSupdatejobqueuerequest"></a>
<a id="tocsupdatejobqueuerequest"></a>

```json
{
  "jobQueue": {},
  "state": {},
  "schedulingPolicyArn": {},
  "priority": {},
  "computeEnvironmentOrder": {}
}
```

Contains the parameters for <code>UpdateJobQueue</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobQueue|object|true|none|none|
|state|object|false|none|none|
|schedulingPolicyArn|object|false|none|none|
|priority|object|false|none|none|
|computeEnvironmentOrder|object|false|none|none|

<h2 id="tocS_UpdateSchedulingPolicyRequest">UpdateSchedulingPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateschedulingpolicyrequest"></a>
<a id="schema_UpdateSchedulingPolicyRequest"></a>
<a id="tocSupdateschedulingpolicyrequest"></a>
<a id="tocsupdateschedulingpolicyrequest"></a>

```json
{
  "arn": {},
  "fairsharePolicy": {
    "shareDecaySeconds": {},
    "computeReservation": {},
    "shareDistribution": {}
  }
}
```

Contains the parameters for <code>UpdateSchedulingPolicy</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|true|none|none|
|fairsharePolicy|object|false|none|none|

<h2 id="tocS_Volume">Volume</h2>
<!-- backwards compatibility -->
<a id="schemavolume"></a>
<a id="schema_Volume"></a>
<a id="tocSvolume"></a>
<a id="tocsvolume"></a>

```json
{
  "host": {
    "sourcePath": {}
  },
  "name": {},
  "efsVolumeConfiguration": {
    "fileSystemId": {},
    "rootDirectory": {},
    "transitEncryption": {},
    "transitEncryptionPort": {},
    "authorizationConfig": {
      "accessPointId": {},
      "iam": {}
    }
  }
}
```

A data volume that's used in a job's container properties.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|host|object|false|none|none|
|name|object|false|none|none|
|efsVolumeConfiguration|object|false|none|none|
