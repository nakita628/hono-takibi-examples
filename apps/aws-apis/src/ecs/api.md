<h1 id="amazon-ec2-container-service">Amazon EC2 Container Service v2014-11-13</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Amazon Elastic Container Service</fullname> <p>Amazon Elastic Container Service (Amazon ECS) is a highly scalable, fast, container management service. It makes it easy to run, stop, and manage Docker containers. You can host your cluster on a serverless infrastructure that's managed by Amazon ECS by launching your services or tasks on Fargate. For more control, you can host your tasks on a cluster of Amazon Elastic Compute Cloud (Amazon EC2) or External (on-premises) instances that you manage.</p> <p>Amazon ECS makes it easy to launch and stop container-based applications with simple API calls. This makes it easy to get the state of your cluster from a centralized service, and gives you access to many familiar Amazon EC2 features.</p> <p>You can use Amazon ECS to schedule the placement of containers across your cluster based on your resource needs, isolation policies, and availability requirements. With Amazon ECS, you don't need to operate your own cluster management and configuration management systems. You also don't need to worry about scaling your management infrastructure.</p>

Base URLs:

* <a href="http://ecs.us-east-1.amazonaws.com">http://ecs.us-east-1.amazonaws.com</a> - The Amazon ECS multi-region endpoint

* <a href="https://ecs.us-east-1.amazonaws.com">https://ecs.us-east-1.amazonaws.com</a> - The Amazon ECS multi-region endpoint

* <a href="http://ecs.cn-north-1.amazonaws.com.cn">http://ecs.cn-north-1.amazonaws.com.cn</a> - The Amazon ECS endpoint for China (Beijing) and China (Ningxia)

* <a href="https://ecs.cn-north-1.amazonaws.com.cn">https://ecs.cn-north-1.amazonaws.com.cn</a> - The Amazon ECS endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/ecs/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-ec2-container-service-default">Default</h1>

## CreateCapacityProvider

<a id="opIdCreateCapacityProvider"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateCapacityProvider' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.CreateCapacityProvider' \
  -d '{
    "name": {},
    "autoScalingGroupProvider": {
      "autoScalingGroupArn": {},
      "managedScaling": {
        "status": {},
        "targetCapacity": {},
        "minimumScalingStepSize": {},
        "maximumScalingStepSize": {},
        "instanceWarmupPeriod": {}
      },
      "managedTerminationProtection": {}
    },
    "tags": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateCapacityProvider`

<p>Creates a new capacity provider. Capacity providers are associated with an Amazon ECS cluster and are used in capacity provider strategies to facilitate cluster auto scaling.</p> <p>Only capacity providers that use an Auto Scaling group can be created. Amazon ECS tasks on Fargate use the <code>FARGATE</code> and <code>FARGATE_SPOT</code> capacity providers. These providers are available to all accounts in the Amazon Web Services Regions that Fargate supports.</p>

> Body parameter

```json
{
  "name": {},
  "autoScalingGroupProvider": {
    "autoScalingGroupArn": {},
    "managedScaling": {
      "status": {},
      "targetCapacity": {},
      "minimumScalingStepSize": {},
      "maximumScalingStepSize": {},
      "instanceWarmupPeriod": {}
    },
    "managedTerminationProtection": {}
  },
  "tags": {}
}
```

<h3 id="createcapacityprovider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateCapacityProviderRequest](#schemacreatecapacityproviderrequest)|true|none|
|» name|body|object|true|none|
|» autoScalingGroupProvider|body|object|true|none|
|» » autoScalingGroupArn|body|object|true|none|
|» » managedScaling|body|object|false|none|
|» » » status|body|object|false|none|
|» » » targetCapacity|body|object|false|none|
|» » » minimumScalingStepSize|body|object|false|none|
|» » » maximumScalingStepSize|body|object|false|none|
|» » » instanceWarmupPeriod|body|object|false|none|
|» » managedTerminationProtection|body|object|false|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.CreateCapacityProvider|

> Example responses

> 200 Response

```json
{
  "capacityProvider": {
    "capacityProviderArn": {},
    "name": {},
    "status": {},
    "autoScalingGroupProvider": {
      "autoScalingGroupArn": {},
      "managedScaling": {
        "status": {},
        "targetCapacity": {},
        "minimumScalingStepSize": {},
        "maximumScalingStepSize": {},
        "instanceWarmupPeriod": {}
      },
      "managedTerminationProtection": {}
    },
    "updateStatus": {},
    "updateStatusReason": {},
    "tags": {}
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="createcapacityprovider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateCapacityProviderResponse](#schemacreatecapacityproviderresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|UpdateInProgressException|[UpdateInProgressException](#schemaupdateinprogressexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateCluster

<a id="opIdCreateCluster"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateCluster' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.CreateCluster' \
  -d '{
    "clusterName": {},
    "tags": {},
    "settings": {},
    "configuration": {
      "executeCommandConfiguration": {
        "kmsKeyId": {},
        "logging": {},
        "logConfiguration": {
          "cloudWatchLogGroupName": {},
          "cloudWatchEncryptionEnabled": {},
          "s3BucketName": {},
          "s3EncryptionEnabled": {},
          "s3KeyPrefix": {}
        }
      }
    },
    "capacityProviders": {},
    "defaultCapacityProviderStrategy": {},
    "serviceConnectDefaults": {
      "namespace": {}
    }
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateCluster`

<p>Creates a new Amazon ECS cluster. By default, your account receives a <code>default</code> cluster when you launch your first container instance. However, you can create your own cluster with a unique name with the <code>CreateCluster</code> action.</p> <note> <p>When you call the <a>CreateCluster</a> API operation, Amazon ECS attempts to create the Amazon ECS service-linked role for your account. This is so that it can manage required resources in other Amazon Web Services services on your behalf. However, if the user that makes the call doesn't have permissions to create the service-linked role, it isn't created. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html">Using service-linked roles for Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </note>

> Body parameter

```json
{
  "clusterName": {},
  "tags": {},
  "settings": {},
  "configuration": {
    "executeCommandConfiguration": {
      "kmsKeyId": {},
      "logging": {},
      "logConfiguration": {
        "cloudWatchLogGroupName": {},
        "cloudWatchEncryptionEnabled": {},
        "s3BucketName": {},
        "s3EncryptionEnabled": {},
        "s3KeyPrefix": {}
      }
    }
  },
  "capacityProviders": {},
  "defaultCapacityProviderStrategy": {},
  "serviceConnectDefaults": {
    "namespace": {}
  }
}
```

<h3 id="createcluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateClusterRequest](#schemacreateclusterrequest)|true|none|
|» clusterName|body|object|false|none|
|» tags|body|object|false|none|
|» settings|body|object|false|none|
|» configuration|body|object|false|none|
|» » executeCommandConfiguration|body|object|false|none|
|» » » kmsKeyId|body|object|false|none|
|» » » logging|body|object|false|none|
|» » » logConfiguration|body|object|false|none|
|» » » » cloudWatchLogGroupName|body|object|false|none|
|» » » » cloudWatchEncryptionEnabled|body|object|false|none|
|» » » » s3BucketName|body|object|false|none|
|» » » » s3EncryptionEnabled|body|object|false|none|
|» » » » s3KeyPrefix|body|object|false|none|
|» capacityProviders|body|object|false|none|
|» defaultCapacityProviderStrategy|body|object|false|none|
|» serviceConnectDefaults|body|object|false|none|
|» » namespace|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.CreateCluster|

> Example responses

> 200 Response

```json
{
  "cluster": {
    "activeServicesCount": 0,
    "clusterArn": "arn:aws:ecs:us-east-1:012345678910:cluster/my_cluster",
    "clusterName": "my_cluster",
    "pendingTasksCount": 0,
    "registeredContainerInstancesCount": 0,
    "runningTasksCount": 0,
    "status": "ACTIVE"
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="createcluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateClusterResponse](#schemacreateclusterresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|NamespaceNotFoundException|[NamespaceNotFoundException](#schemanamespacenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateService

<a id="opIdCreateService"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateService' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.CreateService' \
  -d '{
    "cluster": {},
    "serviceName": {},
    "taskDefinition": {},
    "loadBalancers": {},
    "serviceRegistries": {},
    "desiredCount": {},
    "clientToken": {},
    "launchType": {},
    "capacityProviderStrategy": {},
    "platformVersion": {},
    "role": {},
    "deploymentConfiguration": {
      "deploymentCircuitBreaker": {
        "enable": {},
        "rollback": {}
      },
      "maximumPercent": {},
      "minimumHealthyPercent": {},
      "alarms": {
        "alarmNames": {},
        "enable": {},
        "rollback": {}
      }
    },
    "placementConstraints": {},
    "placementStrategy": {},
    "networkConfiguration": {
      "awsvpcConfiguration": {
        "subnets": {},
        "securityGroups": {},
        "assignPublicIp": {}
      }
    },
    "healthCheckGracePeriodSeconds": {},
    "schedulingStrategy": {},
    "deploymentController": {
      "type": {}
    },
    "tags": {},
    "enableECSManagedTags": {},
    "propagateTags": {},
    "enableExecuteCommand": {},
    "serviceConnectConfiguration": {
      "enabled": {},
      "namespace": {},
      "services": {},
      "logConfiguration": {
        "logDriver": {},
        "options": {
          "property1": "string",
          "property2": "string"
        },
        "secretOptions": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateService`

<p>Runs and maintains your desired number of tasks from a specified task definition. If the number of tasks running in a service drops below the <code>desiredCount</code>, Amazon ECS runs another copy of the task in the specified cluster. To update an existing service, see the <a>UpdateService</a> action.</p> <note> <p>Starting April 15, 2023, Amazon Web Services will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service. </p> </note> <p>In addition to maintaining the desired count of tasks in your service, you can optionally run your service behind one or more load balancers. The load balancers distribute traffic across the tasks that are associated with the service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-load-balancing.html">Service load balancing</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>Tasks for services that don't use a load balancer are considered healthy if they're in the <code>RUNNING</code> state. Tasks for services that use a load balancer are considered healthy if they're in the <code>RUNNING</code> state and are reported as healthy by the load balancer.</p> <p>There are two service scheduler strategies available:</p> <ul> <li> <p> <code>REPLICA</code> - The replica scheduling strategy places and maintains your desired number of tasks across your cluster. By default, the service scheduler spreads tasks across Availability Zones. You can use task placement strategies and constraints to customize task placement decisions. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html">Service scheduler concepts</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </li> <li> <p> <code>DAEMON</code> - The daemon scheduling strategy deploys exactly one task on each active container instance that meets all of the task placement constraints that you specify in your cluster. The service scheduler also evaluates the task placement constraints for running tasks. It also stops tasks that don't meet the placement constraints. When using this strategy, you don't need to specify a desired number of tasks, a task placement strategy, or use Service Auto Scaling policies. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html">Service scheduler concepts</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </li> </ul> <p>You can optionally specify a deployment configuration for your service. The deployment is initiated by changing properties. For example, the deployment might be initiated by the task definition or by your desired count of a service. This is done with an <a>UpdateService</a> operation. The default value for a replica service for <code>minimumHealthyPercent</code> is 100%. The default value for a daemon service for <code>minimumHealthyPercent</code> is 0%.</p> <p>If a service uses the <code>ECS</code> deployment controller, the minimum healthy percent represents a lower limit on the number of tasks in a service that must remain in the <code>RUNNING</code> state during a deployment. Specifically, it represents it as a percentage of your desired number of tasks (rounded up to the nearest integer). This happens when any of your container instances are in the <code>DRAINING</code> state if the service contains tasks using the EC2 launch type. Using this parameter, you can deploy without using additional cluster capacity. For example, if you set your service to have desired number of four tasks and a minimum healthy percent of 50%, the scheduler might stop two existing tasks to free up cluster capacity before starting two new tasks. If they're in the <code>RUNNING</code> state, tasks for services that don't use a load balancer are considered healthy . If they're in the <code>RUNNING</code> state and reported as healthy by the load balancer, tasks for services that <i>do</i> use a load balancer are considered healthy . The default value for minimum healthy percent is 100%.</p> <p>If a service uses the <code>ECS</code> deployment controller, the <b>maximum percent</b> parameter represents an upper limit on the number of tasks in a service that are allowed in the <code>RUNNING</code> or <code>PENDING</code> state during a deployment. Specifically, it represents it as a percentage of the desired number of tasks (rounded down to the nearest integer). This happens when any of your container instances are in the <code>DRAINING</code> state if the service contains tasks using the EC2 launch type. Using this parameter, you can define the deployment batch size. For example, if your service has a desired number of four tasks and a maximum percent value of 200%, the scheduler may start four new tasks before stopping the four older tasks (provided that the cluster resources required to do this are available). The default value for maximum percent is 200%.</p> <p>If a service uses either the <code>CODE_DEPLOY</code> or <code>EXTERNAL</code> deployment controller types and tasks that use the EC2 launch type, the <b>minimum healthy percent</b> and <b>maximum percent</b> values are used only to define the lower and upper limit on the number of the tasks in the service that remain in the <code>RUNNING</code> state. This is while the container instances are in the <code>DRAINING</code> state. If the tasks in the service use the Fargate launch type, the minimum healthy percent and maximum percent values aren't used. This is the case even if they're currently visible when describing your service.</p> <p>When creating a service that uses the <code>EXTERNAL</code> deployment controller, you can specify only parameters that aren't controlled at the task set level. The only required parameter is the service name. You control your services using the <a>CreateTaskSet</a> operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS deployment types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>When the service scheduler launches new tasks, it determines task placement. For information about task placement and task placement strategies, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement.html">Amazon ECS task placement</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>

> Body parameter

```json
{
  "cluster": {},
  "serviceName": {},
  "taskDefinition": {},
  "loadBalancers": {},
  "serviceRegistries": {},
  "desiredCount": {},
  "clientToken": {},
  "launchType": {},
  "capacityProviderStrategy": {},
  "platformVersion": {},
  "role": {},
  "deploymentConfiguration": {
    "deploymentCircuitBreaker": {
      "enable": {},
      "rollback": {}
    },
    "maximumPercent": {},
    "minimumHealthyPercent": {},
    "alarms": {
      "alarmNames": {},
      "enable": {},
      "rollback": {}
    }
  },
  "placementConstraints": {},
  "placementStrategy": {},
  "networkConfiguration": {
    "awsvpcConfiguration": {
      "subnets": {},
      "securityGroups": {},
      "assignPublicIp": {}
    }
  },
  "healthCheckGracePeriodSeconds": {},
  "schedulingStrategy": {},
  "deploymentController": {
    "type": {}
  },
  "tags": {},
  "enableECSManagedTags": {},
  "propagateTags": {},
  "enableExecuteCommand": {},
  "serviceConnectConfiguration": {
    "enabled": {},
    "namespace": {},
    "services": {},
    "logConfiguration": {
      "logDriver": {},
      "options": {
        "property1": "string",
        "property2": "string"
      },
      "secretOptions": {}
    }
  }
}
```

<h3 id="createservice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateServiceRequest](#schemacreateservicerequest)|true|none|
|» cluster|body|object|false|none|
|» serviceName|body|object|true|none|
|» taskDefinition|body|object|false|none|
|» loadBalancers|body|object|false|none|
|» serviceRegistries|body|object|false|none|
|» desiredCount|body|object|false|none|
|» clientToken|body|object|false|none|
|» launchType|body|object|false|none|
|» capacityProviderStrategy|body|object|false|none|
|» platformVersion|body|object|false|none|
|» role|body|object|false|none|
|» deploymentConfiguration|body|object|false|none|
|» » deploymentCircuitBreaker|body|object|false|none|
|» » » enable|body|object|true|none|
|» » » rollback|body|object|true|none|
|» » maximumPercent|body|object|false|none|
|» » minimumHealthyPercent|body|object|false|none|
|» » alarms|body|object|false|none|
|» » » alarmNames|body|object|true|none|
|» » » enable|body|object|true|none|
|» » » rollback|body|object|true|none|
|» placementConstraints|body|object|false|none|
|» placementStrategy|body|object|false|none|
|» networkConfiguration|body|object|false|none|
|» » awsvpcConfiguration|body|object|false|none|
|» » » subnets|body|object|true|none|
|» » » securityGroups|body|object|false|none|
|» » » assignPublicIp|body|object|false|none|
|» healthCheckGracePeriodSeconds|body|object|false|none|
|» schedulingStrategy|body|object|false|none|
|» deploymentController|body|object|false|none|
|» » type|body|object|true|none|
|» tags|body|object|false|none|
|» enableECSManagedTags|body|object|false|none|
|» propagateTags|body|object|false|none|
|» enableExecuteCommand|body|object|false|none|
|» serviceConnectConfiguration|body|object|false|none|
|» » enabled|body|object|true|none|
|» » namespace|body|object|false|none|
|» » services|body|object|false|none|
|» » logConfiguration|body|[LogConfiguration](#schemalogconfiguration)|false|<p>The log configuration for the container. This parameter maps to <code>LogConfig</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--log-driver</code> option to <a href="https://docs.docker.com/engine/reference/commandline/run/"> <code>docker run</code> </a>.</p> <p>By default, containers use the same logging driver that the Docker daemon uses. However, the container might use a different logging driver than the Docker daemon by specifying a log driver configuration in the container definition. For more information about the options for different supported log drivers, see <a href="https://docs.docker.com/engine/admin/logging/overview/">Configure logging drivers</a> in the Docker documentation.</p> <p>Understand the following when specifying a log configuration for your containers.</p> <ul> <li> <p>Amazon ECS currently supports a subset of the logging drivers available to the Docker daemon. Additional log drivers may be available in future releases of the Amazon ECS container agent.</p> <p>For tasks on Fargate, the supported log drivers are <code>awslogs</code>, <code>splunk</code>, and <code>awsfirelens</code>.</p> <p>For tasks hosted on Amazon EC2 instances, the supported log drivers are <code>awslogs</code>, <code>fluentd</code>, <code>gelf</code>, <code>json-file</code>, <code>journald</code>, <code>logentries</code>,<code>syslog</code>, <code>splunk</code>, and <code>awsfirelens</code>.</p> </li> <li> <p>This parameter requires version 1.18 of the Docker Remote API or greater on your container instance.</p> </li> <li> <p>For tasks that are hosted on Amazon EC2 instances, the Amazon ECS container agent must register the available logging drivers with the <code>ECS_AVAILABLE_LOGGING_DRIVERS</code> environment variable before containers placed on that instance can use these log configuration options. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS container agent configuration</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </li> <li> <p>For tasks that are on Fargate, because you don't have access to the underlying infrastructure your tasks are hosted on, any additional software needed must be installed outside of the task. For example, the Fluentd output aggregators or a remote host running Logstash to send Gelf logs to.</p> </li> </ul>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.CreateService|

> Example responses

> 200 Response

```json
{
  "service": {
    "clusterArn": "arn:aws:ecs:us-east-1:012345678910:cluster/default",
    "createdAt": "2016-08-29T16:02:54.884Z",
    "deploymentConfiguration": {
      "maximumPercent": 200,
      "minimumHealthyPercent": 100
    },
    "deployments": [
      {
        "createdAt": "2016-08-29T16:02:54.884Z",
        "desiredCount": 10,
        "id": "ecs-svc/9223370564343000923",
        "pendingCount": 0,
        "runningCount": 0,
        "status": "PRIMARY",
        "taskDefinition": "arn:aws:ecs:us-east-1:012345678910:task-definition/console-sample-app-static:6",
        "updatedAt": "2016-08-29T16:02:54.884Z"
      }
    ],
    "desiredCount": 10,
    "events": [],
    "loadBalancers": [
      {
        "containerName": "simple-app",
        "containerPort": 80,
        "loadBalancerName": "EC2Contai-EcsElast-15DCDAURT3ZO2"
      }
    ],
    "pendingCount": 0,
    "roleArn": "arn:aws:iam::012345678910:role/ecsServiceRole",
    "runningCount": 0,
    "serviceArn": "arn:aws:ecs:us-east-1:012345678910:service/ecs-simple-service-elb",
    "serviceName": "ecs-simple-service-elb",
    "status": "ACTIVE",
    "taskDefinition": "arn:aws:ecs:us-east-1:012345678910:task-definition/console-sample-app-static:6"
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="createservice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateServiceResponse](#schemacreateserviceresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ClusterNotFoundException|[ClusterNotFoundException](#schemaclusternotfoundexception)|
|484|484|UnsupportedFeatureException|[UnsupportedFeatureException](#schemaunsupportedfeatureexception)|
|485|485|PlatformUnknownException|[PlatformUnknownException](#schemaplatformunknownexception)|
|486|486|PlatformTaskDefinitionIncompatibilityException|[PlatformTaskDefinitionIncompatibilityException](#schemaplatformtaskdefinitionincompatibilityexception)|
|487|487|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|488|488|NamespaceNotFoundException|[NamespaceNotFoundException](#schemanamespacenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateTaskSet

<a id="opIdCreateTaskSet"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateTaskSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.CreateTaskSet' \
  -d '{
    "service": {},
    "cluster": {},
    "externalId": {},
    "taskDefinition": {},
    "networkConfiguration": {
      "awsvpcConfiguration": {
        "subnets": {},
        "securityGroups": {},
        "assignPublicIp": {}
      }
    },
    "loadBalancers": {},
    "serviceRegistries": {},
    "launchType": {},
    "capacityProviderStrategy": {},
    "platformVersion": {},
    "scale": {
      "value": {},
      "unit": {}
    },
    "clientToken": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateTaskSet`

Create a task set in the specified cluster and service. This is used when a service uses the <code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS deployment types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.

> Body parameter

```json
{
  "service": {},
  "cluster": {},
  "externalId": {},
  "taskDefinition": {},
  "networkConfiguration": {
    "awsvpcConfiguration": {
      "subnets": {},
      "securityGroups": {},
      "assignPublicIp": {}
    }
  },
  "loadBalancers": {},
  "serviceRegistries": {},
  "launchType": {},
  "capacityProviderStrategy": {},
  "platformVersion": {},
  "scale": {
    "value": {},
    "unit": {}
  },
  "clientToken": {},
  "tags": {}
}
```

<h3 id="createtaskset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateTaskSetRequest](#schemacreatetasksetrequest)|true|none|
|» service|body|object|true|none|
|» cluster|body|object|true|none|
|» externalId|body|object|false|none|
|» taskDefinition|body|object|true|none|
|» networkConfiguration|body|object|false|none|
|» » awsvpcConfiguration|body|object|false|none|
|» » » subnets|body|object|true|none|
|» » » securityGroups|body|object|false|none|
|» » » assignPublicIp|body|object|false|none|
|» loadBalancers|body|object|false|none|
|» serviceRegistries|body|object|false|none|
|» launchType|body|object|false|none|
|» capacityProviderStrategy|body|object|false|none|
|» platformVersion|body|object|false|none|
|» scale|body|object|false|none|
|» » value|body|object|false|none|
|» » unit|body|object|false|none|
|» clientToken|body|object|false|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.CreateTaskSet|

> Example responses

> 200 Response

```json
{
  "taskSet": {
    "id": {},
    "taskSetArn": {},
    "serviceArn": {},
    "clusterArn": {},
    "startedBy": {},
    "externalId": {},
    "status": {},
    "taskDefinition": {},
    "computedDesiredCount": {},
    "pendingCount": {},
    "runningCount": {},
    "createdAt": {},
    "updatedAt": {},
    "launchType": {},
    "capacityProviderStrategy": {},
    "platformVersion": {},
    "platformFamily": {},
    "networkConfiguration": {
      "awsvpcConfiguration": {
        "subnets": {},
        "securityGroups": {},
        "assignPublicIp": {}
      }
    },
    "loadBalancers": {},
    "serviceRegistries": {},
    "scale": {
      "value": {},
      "unit": {}
    },
    "stabilityStatus": {},
    "stabilityStatusAt": {},
    "tags": {}
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

> 489 Response

```json
null
```

> 490 Response

```json
null
```

<h3 id="createtaskset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateTaskSetResponse](#schemacreatetasksetresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ClusterNotFoundException|[ClusterNotFoundException](#schemaclusternotfoundexception)|
|484|484|UnsupportedFeatureException|[UnsupportedFeatureException](#schemaunsupportedfeatureexception)|
|485|485|PlatformUnknownException|[PlatformUnknownException](#schemaplatformunknownexception)|
|486|486|PlatformTaskDefinitionIncompatibilityException|[PlatformTaskDefinitionIncompatibilityException](#schemaplatformtaskdefinitionincompatibilityexception)|
|487|487|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|488|488|ServiceNotFoundException|[ServiceNotFoundException](#schemaservicenotfoundexception)|
|489|489|ServiceNotActiveException|[ServiceNotActiveException](#schemaservicenotactiveexception)|
|490|490|NamespaceNotFoundException|[NamespaceNotFoundException](#schemanamespacenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAccountSetting

<a id="opIdDeleteAccountSetting"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteAccountSetting' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.DeleteAccountSetting' \
  -d '{
    "name": {},
    "principalArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteAccountSetting`

Disables an account setting for a specified user, role, or the root user for an account.

> Body parameter

```json
{
  "name": {},
  "principalArn": {}
}
```

<h3 id="deleteaccountsetting-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteAccountSettingRequest](#schemadeleteaccountsettingrequest)|true|none|
|» name|body|object|true|none|
|» principalArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.DeleteAccountSetting|

> Example responses

> 200 Response

```json
{
  "setting": {
    "name": "containerInstanceLongArnFormat",
    "value": "enabled",
    "principalArn": "arn:aws:iam::<aws_account_id>:user/principalName"
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

> 482 Response

```json
null
```

<h3 id="deleteaccountsetting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteAccountSettingResponse](#schemadeleteaccountsettingresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAttributes

<a id="opIdDeleteAttributes"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteAttributes' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.DeleteAttributes' \
  -d '{
    "cluster": {},
    "attributes": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteAttributes`

Deletes one or more custom attributes from an Amazon ECS resource.

> Body parameter

```json
{
  "cluster": {},
  "attributes": {}
}
```

<h3 id="deleteattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteAttributesRequest](#schemadeleteattributesrequest)|true|none|
|» cluster|body|object|false|none|
|» attributes|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.DeleteAttributes|

> Example responses

> 200 Response

```json
{
  "attributes": {}
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

> 482 Response

```json
null
```

<h3 id="deleteattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteAttributesResponse](#schemadeleteattributesresponse)|
|480|480|ClusterNotFoundException|[ClusterNotFoundException](#schemaclusternotfoundexception)|
|481|481|TargetNotFoundException|[TargetNotFoundException](#schematargetnotfoundexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteCapacityProvider

<a id="opIdDeleteCapacityProvider"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteCapacityProvider' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.DeleteCapacityProvider' \
  -d '{
    "capacityProvider": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteCapacityProvider`

<p>Deletes the specified capacity provider.</p> <note> <p>The <code>FARGATE</code> and <code>FARGATE_SPOT</code> capacity providers are reserved and can't be deleted. You can disassociate them from a cluster using either the <a>PutClusterCapacityProviders</a> API or by deleting the cluster.</p> </note> <p>Prior to a capacity provider being deleted, the capacity provider must be removed from the capacity provider strategy from all services. The <a>UpdateService</a> API can be used to remove a capacity provider from a service's capacity provider strategy. When updating a service, the <code>forceNewDeployment</code> option can be used to ensure that any tasks using the Amazon EC2 instance capacity provided by the capacity provider are transitioned to use the capacity from the remaining capacity providers. Only capacity providers that aren't associated with a cluster can be deleted. To remove a capacity provider from a cluster, you can either use <a>PutClusterCapacityProviders</a> or delete the cluster.</p>

> Body parameter

```json
{
  "capacityProvider": {}
}
```

<h3 id="deletecapacityprovider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteCapacityProviderRequest](#schemadeletecapacityproviderrequest)|true|none|
|» capacityProvider|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.DeleteCapacityProvider|

> Example responses

> 200 Response

```json
{
  "capacityProvider": {
    "capacityProviderArn": {},
    "name": {},
    "status": {},
    "autoScalingGroupProvider": {
      "autoScalingGroupArn": {},
      "managedScaling": {
        "status": {},
        "targetCapacity": {},
        "minimumScalingStepSize": {},
        "maximumScalingStepSize": {},
        "instanceWarmupPeriod": {}
      },
      "managedTerminationProtection": {}
    },
    "updateStatus": {},
    "updateStatusReason": {},
    "tags": {}
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

> 482 Response

```json
null
```

<h3 id="deletecapacityprovider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteCapacityProviderResponse](#schemadeletecapacityproviderresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteCluster

<a id="opIdDeleteCluster"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteCluster' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.DeleteCluster' \
  -d '{
    "cluster": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteCluster`

<p>Deletes the specified cluster. The cluster transitions to the <code>INACTIVE</code> state. Clusters with an <code>INACTIVE</code> status might remain discoverable in your account for a period of time. However, this behavior is subject to change in the future. We don't recommend that you rely on <code>INACTIVE</code> clusters persisting.</p> <p>You must deregister all container instances from this cluster before you may delete it. You can list the container instances in a cluster with <a>ListContainerInstances</a> and deregister them with <a>DeregisterContainerInstance</a>.</p>

> Body parameter

```json
{
  "cluster": {}
}
```

<h3 id="deletecluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteClusterRequest](#schemadeleteclusterrequest)|true|none|
|» cluster|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.DeleteCluster|

> Example responses

> 200 Response

```json
{
  "cluster": {
    "activeServicesCount": 0,
    "clusterArn": "arn:aws:ecs:us-east-1:012345678910:cluster/my_cluster",
    "clusterName": "my_cluster",
    "pendingTasksCount": 0,
    "registeredContainerInstancesCount": 0,
    "runningTasksCount": 0,
    "status": "INACTIVE"
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="deletecluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteClusterResponse](#schemadeleteclusterresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ClusterNotFoundException|[ClusterNotFoundException](#schemaclusternotfoundexception)|
|484|484|ClusterContainsContainerInstancesException|[ClusterContainsContainerInstancesException](#schemaclustercontainscontainerinstancesexception)|
|485|485|ClusterContainsServicesException|[ClusterContainsServicesException](#schemaclustercontainsservicesexception)|
|486|486|ClusterContainsTasksException|[ClusterContainsTasksException](#schemaclustercontainstasksexception)|
|487|487|UpdateInProgressException|[UpdateInProgressException](#schemaupdateinprogressexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteService

<a id="opIdDeleteService"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteService' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.DeleteService' \
  -d '{
    "cluster": {},
    "service": {},
    "force": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteService`

<p>Deletes a specified service within a cluster. You can delete a service if you have no running tasks in it and the desired task count is zero. If the service is actively maintaining tasks, you can't delete it, and you must update the service to a desired task count of zero. For more information, see <a>UpdateService</a>.</p> <note> <p>When you delete a service, if there are still running tasks that require cleanup, the service status moves from <code>ACTIVE</code> to <code>DRAINING</code>, and the service is no longer visible in the console or in the <a>ListServices</a> API operation. After all tasks have transitioned to either <code>STOPPING</code> or <code>STOPPED</code> status, the service status moves from <code>DRAINING</code> to <code>INACTIVE</code>. Services in the <code>DRAINING</code> or <code>INACTIVE</code> status can still be viewed with the <a>DescribeServices</a> API operation. However, in the future, <code>INACTIVE</code> services may be cleaned up and purged from Amazon ECS record keeping, and <a>DescribeServices</a> calls on those services return a <code>ServiceNotFoundException</code> error.</p> </note> <important> <p>If you attempt to create a new service with the same name as an existing service in either <code>ACTIVE</code> or <code>DRAINING</code> status, you receive an error.</p> </important>

> Body parameter

```json
{
  "cluster": {},
  "service": {},
  "force": {}
}
```

<h3 id="deleteservice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteServiceRequest](#schemadeleteservicerequest)|true|none|
|» cluster|body|object|false|none|
|» service|body|object|true|none|
|» force|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.DeleteService|

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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="deleteservice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteServiceResponse](#schemadeleteserviceresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ClusterNotFoundException|[ClusterNotFoundException](#schemaclusternotfoundexception)|
|484|484|ServiceNotFoundException|[ServiceNotFoundException](#schemaservicenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteTaskDefinitions

<a id="opIdDeleteTaskDefinitions"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteTaskDefinitions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.DeleteTaskDefinitions' \
  -d '{
    "taskDefinitions": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteTaskDefinitions`

<p>Deletes one or more task definitions.</p> <p>You must deregister a task definition revision before you delete it. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeregisterTaskDefinition.html">DeregisterTaskDefinition</a>.</p> <p>When you delete a task definition revision, it is immediately transitions from the <code>INACTIVE</code> to <code>DELETE_IN_PROGRESS</code>. Existing tasks and services that reference a <code>DELETE_IN_PROGRESS</code> task definition revision continue to run without disruption. Existing services that reference a <code>DELETE_IN_PROGRESS</code> task definition revision can still scale up or down by modifying the service's desired count.</p> <p>You can't use a <code>DELETE_IN_PROGRESS</code> task definition revision to run new tasks or create new services. You also can't update an existing service to reference a <code>DELETE_IN_PROGRESS</code> task definition revision.</p> <p> A task definition revision will stay in <code>DELETE_IN_PROGRESS</code> status until all the associated tasks and services have been terminated.</p> <p>When you delete all <code>INACTIVE</code> task definition revisions, the task definition name is not displayed in the console and not returned in the API. If a task definition revisions are in the <code>DELETE_IN_PROGRESS</code> state, the task definition name is displayed in the console and returned in the API. The task definition name is retained by Amazon ECS and the revision is incremented the next time you create a task definition with that name.</p>

> Body parameter

```json
{
  "taskDefinitions": {}
}
```

<h3 id="deletetaskdefinitions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteTaskDefinitionsRequest](#schemadeletetaskdefinitionsrequest)|true|none|
|» taskDefinitions|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.DeleteTaskDefinitions|

> Example responses

> 200 Response

```json
{
  "taskDefinitions": {},
  "failures": {}
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="deletetaskdefinitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteTaskDefinitionsResponse](#schemadeletetaskdefinitionsresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ServerException|[ServerException](#schemaserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteTaskSet

<a id="opIdDeleteTaskSet"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteTaskSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.DeleteTaskSet' \
  -d '{
    "cluster": {},
    "service": {},
    "taskSet": {},
    "force": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteTaskSet`

Deletes a specified task set within a service. This is used when a service uses the <code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS deployment types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.

> Body parameter

```json
{
  "cluster": {},
  "service": {},
  "taskSet": {},
  "force": {}
}
```

<h3 id="deletetaskset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteTaskSetRequest](#schemadeletetasksetrequest)|true|none|
|» cluster|body|object|true|none|
|» service|body|object|true|none|
|» taskSet|body|object|true|none|
|» force|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.DeleteTaskSet|

> Example responses

> 200 Response

```json
{
  "taskSet": {
    "id": {},
    "taskSetArn": {},
    "serviceArn": {},
    "clusterArn": {},
    "startedBy": {},
    "externalId": {},
    "status": {},
    "taskDefinition": {},
    "computedDesiredCount": {},
    "pendingCount": {},
    "runningCount": {},
    "createdAt": {},
    "updatedAt": {},
    "launchType": {},
    "capacityProviderStrategy": {},
    "platformVersion": {},
    "platformFamily": {},
    "networkConfiguration": {
      "awsvpcConfiguration": {
        "subnets": {},
        "securityGroups": {},
        "assignPublicIp": {}
      }
    },
    "loadBalancers": {},
    "serviceRegistries": {},
    "scale": {
      "value": {},
      "unit": {}
    },
    "stabilityStatus": {},
    "stabilityStatusAt": {},
    "tags": {}
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="deletetaskset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteTaskSetResponse](#schemadeletetasksetresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ClusterNotFoundException|[ClusterNotFoundException](#schemaclusternotfoundexception)|
|484|484|UnsupportedFeatureException|[UnsupportedFeatureException](#schemaunsupportedfeatureexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ServiceNotFoundException|[ServiceNotFoundException](#schemaservicenotfoundexception)|
|487|487|ServiceNotActiveException|[ServiceNotActiveException](#schemaservicenotactiveexception)|
|488|488|TaskSetNotFoundException|[TaskSetNotFoundException](#schematasksetnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeregisterContainerInstance

<a id="opIdDeregisterContainerInstance"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeregisterContainerInstance' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.DeregisterContainerInstance' \
  -d '{
    "cluster": {},
    "containerInstance": {},
    "force": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeregisterContainerInstance`

<p>Deregisters an Amazon ECS container instance from the specified cluster. This instance is no longer available to run tasks.</p> <p>If you intend to use the container instance for some other purpose after deregistration, we recommend that you stop all of the tasks running on the container instance before deregistration. That prevents any orphaned tasks from consuming resources.</p> <p>Deregistering a container instance removes the instance from a cluster, but it doesn't terminate the EC2 instance. If you are finished using the instance, be sure to terminate it in the Amazon EC2 console to stop billing.</p> <note> <p>If you terminate a running container instance, Amazon ECS automatically deregisters the instance from your cluster (stopped container instances or instances with disconnected agents aren't automatically deregistered when terminated).</p> </note>

> Body parameter

```json
{
  "cluster": {},
  "containerInstance": {},
  "force": {}
}
```

<h3 id="deregistercontainerinstance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeregisterContainerInstanceRequest](#schemaderegistercontainerinstancerequest)|true|none|
|» cluster|body|object|false|none|
|» containerInstance|body|object|true|none|
|» force|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.DeregisterContainerInstance|

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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="deregistercontainerinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeregisterContainerInstanceResponse](#schemaderegistercontainerinstanceresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ClusterNotFoundException|[ClusterNotFoundException](#schemaclusternotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeregisterTaskDefinition

<a id="opIdDeregisterTaskDefinition"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeregisterTaskDefinition' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.DeregisterTaskDefinition' \
  -d '{
    "taskDefinition": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeregisterTaskDefinition`

<p>Deregisters the specified task definition by family and revision. Upon deregistration, the task definition is marked as <code>INACTIVE</code>. Existing tasks and services that reference an <code>INACTIVE</code> task definition continue to run without disruption. Existing services that reference an <code>INACTIVE</code> task definition can still scale up or down by modifying the service's desired count. If you want to delete a task definition revision, you must first deregister the task definition revision.</p> <p>You can't use an <code>INACTIVE</code> task definition to run new tasks or create new services, and you can't update an existing service to reference an <code>INACTIVE</code> task definition. However, there may be up to a 10-minute window following deregistration where these restrictions have not yet taken effect.</p> <note> <p>At this time, <code>INACTIVE</code> task definitions remain discoverable in your account indefinitely. However, this behavior is subject to change in the future. We don't recommend that you rely on <code>INACTIVE</code> task definitions persisting beyond the lifecycle of any associated tasks and services.</p> </note> <p>You must deregister a task definition revision before you delete it. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteTaskDefinitions.html">DeleteTaskDefinitions</a>.</p>

> Body parameter

```json
{
  "taskDefinition": {}
}
```

<h3 id="deregistertaskdefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeregisterTaskDefinitionRequest](#schemaderegistertaskdefinitionrequest)|true|none|
|» taskDefinition|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.DeregisterTaskDefinition|

> Example responses

> 200 Response

```json
{
  "taskDefinition": {
    "taskDefinitionArn": {},
    "containerDefinitions": {},
    "family": {},
    "taskRoleArn": {},
    "executionRoleArn": {},
    "networkMode": {},
    "revision": {},
    "volumes": {},
    "status": {},
    "requiresAttributes": {},
    "placementConstraints": {},
    "compatibilities": {},
    "runtimePlatform": {
      "cpuArchitecture": {},
      "operatingSystemFamily": {}
    },
    "requiresCompatibilities": {},
    "cpu": {},
    "memory": {},
    "inferenceAccelerators": {},
    "pidMode": {},
    "ipcMode": {},
    "proxyConfiguration": {
      "type": {},
      "containerName": {},
      "properties": null
    },
    "registeredAt": {},
    "deregisteredAt": {},
    "registeredBy": {},
    "ephemeralStorage": {
      "sizeInGiB": {}
    }
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

> 482 Response

```json
null
```

<h3 id="deregistertaskdefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeregisterTaskDefinitionResponse](#schemaderegistertaskdefinitionresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeCapacityProviders

<a id="opIdDescribeCapacityProviders"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeCapacityProviders' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.DescribeCapacityProviders' \
  -d '{
    "capacityProviders": {},
    "include": {},
    "maxResults": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeCapacityProviders`

Describes one or more of your capacity providers.

> Body parameter

```json
{
  "capacityProviders": {},
  "include": {},
  "maxResults": {},
  "nextToken": {}
}
```

<h3 id="describecapacityproviders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeCapacityProvidersRequest](#schemadescribecapacityprovidersrequest)|true|none|
|» capacityProviders|body|object|false|none|
|» include|body|object|false|none|
|» maxResults|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.DescribeCapacityProviders|

> Example responses

> 200 Response

```json
{
  "capacityProviders": {},
  "failures": {},
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

> 482 Response

```json
null
```

<h3 id="describecapacityproviders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeCapacityProvidersResponse](#schemadescribecapacityprovidersresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeClusters

<a id="opIdDescribeClusters"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeClusters' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.DescribeClusters' \
  -d '{
    "clusters": {},
    "include": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeClusters`

Describes one or more of your clusters.

> Body parameter

```json
{
  "clusters": {},
  "include": {}
}
```

<h3 id="describeclusters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeClustersRequest](#schemadescribeclustersrequest)|true|none|
|» clusters|body|object|false|none|
|» include|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.DescribeClusters|

> Example responses

> 200 Response

```json
{
  "clusters": [
    {
      "clusterArn": "arn:aws:ecs:us-east-1:aws_account_id:cluster/default",
      "clusterName": "default",
      "status": "ACTIVE"
    }
  ],
  "failures": []
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

> 482 Response

```json
null
```

<h3 id="describeclusters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeClustersResponse](#schemadescribeclustersresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeContainerInstances

<a id="opIdDescribeContainerInstances"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeContainerInstances' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.DescribeContainerInstances' \
  -d '{
    "cluster": {},
    "containerInstances": {},
    "include": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeContainerInstances`

Describes one or more container instances. Returns metadata about each container instance requested.

> Body parameter

```json
{
  "cluster": {},
  "containerInstances": {},
  "include": {}
}
```

<h3 id="describecontainerinstances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeContainerInstancesRequest](#schemadescribecontainerinstancesrequest)|true|none|
|» cluster|body|object|false|none|
|» containerInstances|body|object|true|none|
|» include|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.DescribeContainerInstances|

> Example responses

> 200 Response

```json
{
  "containerInstances": [
    {
      "agentConnected": true,
      "containerInstanceArn": "arn:aws:ecs:us-east-1:012345678910:container-instance/f2756532-8f13-4d53-87c9-aed50dc94cd7",
      "ec2InstanceId": "i-807f3249",
      "pendingTasksCount": 0,
      "registeredResources": [
        {
          "name": "CPU",
          "type": "INTEGER",
          "doubleValue": 0,
          "integerValue": 2048,
          "longValue": 0
        },
        {
          "name": "MEMORY",
          "type": "INTEGER",
          "doubleValue": 0,
          "integerValue": 3768,
          "longValue": 0
        },
        {
          "name": "PORTS",
          "type": "STRINGSET",
          "doubleValue": 0,
          "integerValue": 0,
          "longValue": 0,
          "stringSetValue": [
            "2376",
            "22",
            "51678",
            "2375"
          ]
        }
      ],
      "remainingResources": [
        {
          "name": "CPU",
          "type": "INTEGER",
          "doubleValue": 0,
          "integerValue": 1948,
          "longValue": 0
        },
        {
          "name": "MEMORY",
          "type": "INTEGER",
          "doubleValue": 0,
          "integerValue": 3668,
          "longValue": 0
        },
        {
          "name": "PORTS",
          "type": "STRINGSET",
          "doubleValue": 0,
          "integerValue": 0,
          "longValue": 0,
          "stringSetValue": [
            "2376",
            "22",
            "80",
            "51678",
            "2375"
          ]
        }
      ],
      "runningTasksCount": 1,
      "status": "ACTIVE"
    }
  ],
  "failures": []
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="describecontainerinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeContainerInstancesResponse](#schemadescribecontainerinstancesresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ClusterNotFoundException|[ClusterNotFoundException](#schemaclusternotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeServices

<a id="opIdDescribeServices"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeServices' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.DescribeServices' \
  -d '{
    "cluster": {},
    "services": {},
    "include": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeServices`

Describes the specified services running in your cluster.

> Body parameter

```json
{
  "cluster": {},
  "services": {},
  "include": {}
}
```

<h3 id="describeservices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeServicesRequest](#schemadescribeservicesrequest)|true|none|
|» cluster|body|object|false|none|
|» services|body|object|true|none|
|» include|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.DescribeServices|

> Example responses

> 200 Response

```json
{
  "failures": [],
  "services": [
    {
      "clusterArn": "arn:aws:ecs:us-east-1:012345678910:cluster/default",
      "createdAt": "2016-08-29T16:25:52.130Z",
      "deploymentConfiguration": {
        "maximumPercent": 200,
        "minimumHealthyPercent": 100
      },
      "deployments": [
        {
          "createdAt": "2016-08-29T16:25:52.130Z",
          "desiredCount": 1,
          "id": "ecs-svc/9223370564341623665",
          "pendingCount": 0,
          "runningCount": 0,
          "status": "PRIMARY",
          "taskDefinition": "arn:aws:ecs:us-east-1:012345678910:task-definition/hello_world:6",
          "updatedAt": "2016-08-29T16:25:52.130Z"
        }
      ],
      "desiredCount": 1,
      "events": [
        {
          "createdAt": "2016-08-29T16:25:58.520Z",
          "id": "38c285e5-d335-4b68-8b15-e46dedc8e88d",
          "message": "(service ecs-simple-service) was unable to place a task because no container instance met all of its requirements. The closest matching (container-instance 3f4de1c5-ffdd-4954-af7e-75b4be0c8841) is already using a port required by your task. For more information, see the Troubleshooting section of the Amazon ECS Developer Guide."
        }
      ],
      "loadBalancers": [],
      "pendingCount": 0,
      "runningCount": 0,
      "serviceArn": "arn:aws:ecs:us-east-1:012345678910:service/ecs-simple-service",
      "serviceName": "ecs-simple-service",
      "status": "ACTIVE",
      "taskDefinition": "arn:aws:ecs:us-east-1:012345678910:task-definition/hello_world:6"
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="describeservices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeServicesResponse](#schemadescribeservicesresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ClusterNotFoundException|[ClusterNotFoundException](#schemaclusternotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeTaskDefinition

<a id="opIdDescribeTaskDefinition"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTaskDefinition' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.DescribeTaskDefinition' \
  -d '{
    "taskDefinition": {},
    "include": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTaskDefinition`

<p>Describes a task definition. You can specify a <code>family</code> and <code>revision</code> to find information about a specific task definition, or you can simply specify the family to find the latest <code>ACTIVE</code> revision in that family.</p> <note> <p>You can only describe <code>INACTIVE</code> task definitions while an active task or service references them.</p> </note>

> Body parameter

```json
{
  "taskDefinition": {},
  "include": {}
}
```

<h3 id="describetaskdefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeTaskDefinitionRequest](#schemadescribetaskdefinitionrequest)|true|none|
|» taskDefinition|body|object|true|none|
|» include|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.DescribeTaskDefinition|

> Example responses

> 200 Response

```json
{
  "taskDefinition": {
    "containerDefinitions": [
      {
        "name": "wordpress",
        "cpu": 10,
        "environment": [],
        "essential": true,
        "image": "wordpress",
        "links": [
          "mysql"
        ],
        "memory": 500,
        "mountPoints": [],
        "portMappings": [
          {
            "containerPort": 80,
            "hostPort": 80
          }
        ],
        "volumesFrom": []
      },
      {
        "name": "mysql",
        "cpu": 10,
        "environment": [
          {
            "name": "MYSQL_ROOT_PASSWORD",
            "value": "password"
          }
        ],
        "essential": true,
        "image": "mysql",
        "memory": 500,
        "mountPoints": [],
        "portMappings": [],
        "volumesFrom": []
      }
    ],
    "family": "hello_world",
    "revision": 8,
    "taskDefinitionArn": "arn:aws:ecs:us-east-1:<aws_account_id>:task-definition/hello_world:8",
    "volumes": []
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

> 482 Response

```json
null
```

<h3 id="describetaskdefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTaskDefinitionResponse](#schemadescribetaskdefinitionresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeTaskSets

<a id="opIdDescribeTaskSets"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTaskSets' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.DescribeTaskSets' \
  -d '{
    "cluster": {},
    "service": {},
    "taskSets": {},
    "include": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTaskSets`

Describes the task sets in the specified cluster and service. This is used when a service uses the <code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.

> Body parameter

```json
{
  "cluster": {},
  "service": {},
  "taskSets": {},
  "include": {}
}
```

<h3 id="describetasksets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeTaskSetsRequest](#schemadescribetasksetsrequest)|true|none|
|» cluster|body|object|true|none|
|» service|body|object|true|none|
|» taskSets|body|object|false|none|
|» include|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.DescribeTaskSets|

> Example responses

> 200 Response

```json
{
  "taskSets": {},
  "failures": {}
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="describetasksets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTaskSetsResponse](#schemadescribetasksetsresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ClusterNotFoundException|[ClusterNotFoundException](#schemaclusternotfoundexception)|
|484|484|UnsupportedFeatureException|[UnsupportedFeatureException](#schemaunsupportedfeatureexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ServiceNotFoundException|[ServiceNotFoundException](#schemaservicenotfoundexception)|
|487|487|ServiceNotActiveException|[ServiceNotActiveException](#schemaservicenotactiveexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeTasks

<a id="opIdDescribeTasks"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTasks' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.DescribeTasks' \
  -d '{
    "cluster": {},
    "tasks": {},
    "include": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTasks`

<p>Describes a specified task or tasks.</p> <p>Currently, stopped tasks appear in the returned results for at least one hour.</p> <p>If you have tasks with tags, and then delete the cluster, the tagged tasks are returned in the response. If you create a new cluster with the same name as the deleted cluster, the tagged tasks are not included in the response.</p>

> Body parameter

```json
{
  "cluster": {},
  "tasks": {},
  "include": {}
}
```

<h3 id="describetasks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeTasksRequest](#schemadescribetasksrequest)|true|none|
|» cluster|body|object|false|none|
|» tasks|body|object|true|none|
|» include|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.DescribeTasks|

> Example responses

> 200 Response

```json
{
  "failures": [],
  "tasks": [
    {
      "clusterArn": "arn:aws:ecs:<region>:<aws_account_id>:cluster/default",
      "containerInstanceArn": "arn:aws:ecs:<region>:<aws_account_id>:container-instance/18f9eda5-27d7-4c19-b133-45adc516e8fb",
      "containers": [
        {
          "name": "ecs-demo",
          "containerArn": "arn:aws:ecs:<region>:<aws_account_id>:container/7c01765b-c588-45b3-8290-4ba38bd6c5a6",
          "lastStatus": "RUNNING",
          "networkBindings": [
            {
              "bindIP": "0.0.0.0",
              "containerPort": 80,
              "hostPort": 80
            }
          ],
          "taskArn": "arn:aws:ecs:<region>:<aws_account_id>:task/c5cba4eb-5dad-405e-96db-71ef8eefe6a8"
        }
      ],
      "desiredStatus": "RUNNING",
      "lastStatus": "RUNNING",
      "overrides": {
        "containerOverrides": [
          {
            "name": "ecs-demo"
          }
        ]
      },
      "startedBy": "ecs-svc/9223370608528463088",
      "taskArn": "arn:aws:ecs:<region>:<aws_account_id>:task/c5cba4eb-5dad-405e-96db-71ef8eefe6a8",
      "taskDefinitionArn": "arn:aws:ecs:<region>:<aws_account_id>:task-definition/amazon-ecs-sample:1"
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="describetasks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTasksResponse](#schemadescribetasksresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ClusterNotFoundException|[ClusterNotFoundException](#schemaclusternotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DiscoverPollEndpoint

<a id="opIdDiscoverPollEndpoint"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DiscoverPollEndpoint' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.DiscoverPollEndpoint' \
  -d '{
    "containerInstance": {},
    "cluster": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DiscoverPollEndpoint`

<note> <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p> </note> <p>Returns an endpoint for the Amazon ECS agent to poll for updates.</p>

> Body parameter

```json
{
  "containerInstance": {},
  "cluster": {}
}
```

<h3 id="discoverpollendpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DiscoverPollEndpointRequest](#schemadiscoverpollendpointrequest)|true|none|
|» containerInstance|body|object|false|none|
|» cluster|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.DiscoverPollEndpoint|

> Example responses

> 200 Response

```json
{
  "endpoint": {},
  "telemetryEndpoint": {},
  "serviceConnectEndpoint": {}
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

<h3 id="discoverpollendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DiscoverPollEndpointResponse](#schemadiscoverpollendpointresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ExecuteCommand

<a id="opIdExecuteCommand"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ExecuteCommand' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.ExecuteCommand' \
  -d '{
    "cluster": {},
    "container": {},
    "command": {},
    "interactive": {},
    "task": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ExecuteCommand`

<p>Runs a command remotely on a container within a task.</p> <p>If you use a condition key in your IAM policy to refine the conditions for the policy statement, for example limit the actions to a specific cluster, you receive an <code>AccessDeniedException</code> when there is a mismatch between the condition key value and the corresponding parameter value.</p> <p>For information about required permissions and considerations, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-exec.html">Using Amazon ECS Exec for debugging</a> in the <i>Amazon ECS Developer Guide</i>. </p>

> Body parameter

```json
{
  "cluster": {},
  "container": {},
  "command": {},
  "interactive": {},
  "task": {}
}
```

<h3 id="executecommand-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ExecuteCommandRequest](#schemaexecutecommandrequest)|true|none|
|» cluster|body|object|false|none|
|» container|body|object|false|none|
|» command|body|object|true|none|
|» interactive|body|object|true|none|
|» task|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.ExecuteCommand|

> Example responses

> 200 Response

```json
{
  "clusterArn": {},
  "containerArn": {},
  "containerName": {},
  "interactive": {},
  "session": {
    "sessionId": {},
    "streamUrl": {},
    "tokenValue": {}
  },
  "taskArn": {}
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="executecommand-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ExecuteCommandResponse](#schemaexecutecommandresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ClusterNotFoundException|[ClusterNotFoundException](#schemaclusternotfoundexception)|
|485|485|TargetNotConnectedException|[TargetNotConnectedException](#schematargetnotconnectedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetTaskProtection

<a id="opIdGetTaskProtection"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.GetTaskProtection' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.GetTaskProtection' \
  -d '{
    "cluster": {},
    "tasks": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.GetTaskProtection`

Retrieves the protection status of tasks in an Amazon ECS service.

> Body parameter

```json
{
  "cluster": {},
  "tasks": {}
}
```

<h3 id="gettaskprotection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetTaskProtectionRequest](#schemagettaskprotectionrequest)|true|none|
|» cluster|body|object|true|none|
|» tasks|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.GetTaskProtection|

> Example responses

> 200 Response

```json
{
  "failures": [],
  "protectedTasks": [
    {
      "expirationDate": "2022-11-02T06:56:32.553Z",
      "protectionEnabled": true,
      "taskArn": "arn:aws:ecs:us-west-2:012345678910:task/b8b1cf532d0e46ba8d44a40d1de16772"
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="gettaskprotection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetTaskProtectionResponse](#schemagettaskprotectionresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ClusterNotFoundException|[ClusterNotFoundException](#schemaclusternotfoundexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ServerException|[ServerException](#schemaserverexception)|
|486|486|UnsupportedFeatureException|[UnsupportedFeatureException](#schemaunsupportedfeatureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAccountSettings

<a id="opIdListAccountSettings"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListAccountSettings' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.ListAccountSettings' \
  -d '{
    "name": {},
    "value": {},
    "principalArn": {},
    "effectiveSettings": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListAccountSettings`

Lists the account settings for a specified principal.

> Body parameter

```json
{
  "name": {},
  "value": {},
  "principalArn": {},
  "effectiveSettings": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="listaccountsettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListAccountSettingsRequest](#schemalistaccountsettingsrequest)|true|none|
|» name|body|object|false|none|
|» value|body|object|false|none|
|» principalArn|body|object|false|none|
|» effectiveSettings|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.ListAccountSettings|

> Example responses

> 200 Response

```json
{
  "settings": [
    {
      "name": "containerInstanceLongArnFormat",
      "value": "disabled",
      "principalArn": "arn:aws:iam::<aws_account_id>:user/principalName"
    },
    {
      "name": "serviceLongArnFormat",
      "value": "enabled",
      "principalArn": "arn:aws:iam::<aws_account_id>:user/principalName"
    },
    {
      "name": "taskLongArnFormat",
      "value": "disabled",
      "principalArn": "arn:aws:iam::<aws_account_id>:user/principalName"
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

> 482 Response

```json
null
```

<h3 id="listaccountsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAccountSettingsResponse](#schemalistaccountsettingsresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAttributes

<a id="opIdListAttributes"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListAttributes' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.ListAttributes' \
  -d '{
    "cluster": {},
    "targetType": {},
    "attributeName": {},
    "attributeValue": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListAttributes`

Lists the attributes for Amazon ECS resources within a specified target type and cluster. When you specify a target type and cluster, <code>ListAttributes</code> returns a list of attribute objects, one for each attribute on each resource. You can filter the list of results to a single attribute name to only return results that have that name. You can also filter the results by attribute name and value. You can do this, for example, to see which container instances in a cluster are running a Linux AMI (<code>ecs.os-type=linux</code>). 

> Body parameter

```json
{
  "cluster": {},
  "targetType": {},
  "attributeName": {},
  "attributeValue": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="listattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListAttributesRequest](#schemalistattributesrequest)|true|none|
|» cluster|body|object|false|none|
|» targetType|body|object|true|none|
|» attributeName|body|object|false|none|
|» attributeValue|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.ListAttributes|

> Example responses

> 200 Response

```json
{
  "attributes": {},
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

<h3 id="listattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAttributesResponse](#schemalistattributesresponse)|
|480|480|ClusterNotFoundException|[ClusterNotFoundException](#schemaclusternotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListClusters

<a id="opIdListClusters"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListClusters' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.ListClusters' \
  -d '{
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListClusters`

Returns a list of existing clusters.

> Body parameter

```json
{
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="listclusters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListClustersRequest](#schemalistclustersrequest)|true|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.ListClusters|

> Example responses

> 200 Response

```json
{
  "clusterArns": [
    "arn:aws:ecs:us-east-1:<aws_account_id>:cluster/test",
    "arn:aws:ecs:us-east-1:<aws_account_id>:cluster/default"
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

> 482 Response

```json
null
```

<h3 id="listclusters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListClustersResponse](#schemalistclustersresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListContainerInstances

<a id="opIdListContainerInstances"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListContainerInstances' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.ListContainerInstances' \
  -d '{
    "cluster": {},
    "filter": {},
    "nextToken": {},
    "maxResults": {},
    "status": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListContainerInstances`

Returns a list of container instances in a specified cluster. You can filter the results of a <code>ListContainerInstances</code> operation with cluster query language statements inside the <code>filter</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html">Cluster Query Language</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.

> Body parameter

```json
{
  "cluster": {},
  "filter": {},
  "nextToken": {},
  "maxResults": {},
  "status": {}
}
```

<h3 id="listcontainerinstances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListContainerInstancesRequest](#schemalistcontainerinstancesrequest)|true|none|
|» cluster|body|object|false|none|
|» filter|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|
|» status|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.ListContainerInstances|

> Example responses

> 200 Response

```json
{
  "containerInstanceArns": [
    "arn:aws:ecs:us-east-1:<aws_account_id>:container-instance/f6bbb147-5370-4ace-8c73-c7181ded911f",
    "arn:aws:ecs:us-east-1:<aws_account_id>:container-instance/ffe3d344-77e2-476c-a4d0-bf560ad50acb"
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="listcontainerinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListContainerInstancesResponse](#schemalistcontainerinstancesresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ClusterNotFoundException|[ClusterNotFoundException](#schemaclusternotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListServices

<a id="opIdListServices"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListServices' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.ListServices' \
  -d '{
    "cluster": {},
    "nextToken": {},
    "maxResults": {},
    "launchType": {},
    "schedulingStrategy": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListServices`

Returns a list of services. You can filter the results by cluster, launch type, and scheduling strategy.

> Body parameter

```json
{
  "cluster": {},
  "nextToken": {},
  "maxResults": {},
  "launchType": {},
  "schedulingStrategy": {}
}
```

<h3 id="listservices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListServicesRequest](#schemalistservicesrequest)|true|none|
|» cluster|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|
|» launchType|body|object|false|none|
|» schedulingStrategy|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.ListServices|

> Example responses

> 200 Response

```json
{
  "serviceArns": [
    "arn:aws:ecs:us-east-1:012345678910:service/my-http-service"
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="listservices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListServicesResponse](#schemalistservicesresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ClusterNotFoundException|[ClusterNotFoundException](#schemaclusternotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListServicesByNamespace

<a id="opIdListServicesByNamespace"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListServicesByNamespace' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.ListServicesByNamespace' \
  -d '{
    "namespace": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListServicesByNamespace`

This operation lists all of the services that are associated with a Cloud Map namespace. This list might include services in different clusters. In contrast, <code>ListServices</code> can only list services in one cluster at a time. If you need to filter the list of services in a single cluster by various parameters, use <code>ListServices</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.

> Body parameter

```json
{
  "namespace": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="listservicesbynamespace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListServicesByNamespaceRequest](#schemalistservicesbynamespacerequest)|true|none|
|» namespace|body|object|true|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.ListServicesByNamespace|

> Example responses

> 200 Response

```json
{
  "serviceArns": {},
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="listservicesbynamespace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListServicesByNamespaceResponse](#schemalistservicesbynamespaceresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|NamespaceNotFoundException|[NamespaceNotFoundException](#schemanamespacenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.ListTagsForResource' \
  -d '{
    "resourceArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTagsForResource`

List the tags for an Amazon ECS resource.

> Body parameter

```json
{
  "resourceArn": {}
}
```

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListTagsForResourceRequest](#schemalisttagsforresourcerequest)|true|none|
|» resourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.ListTagsForResource|

> Example responses

> 200 Response

```json
{
  "tags": [
    {
      "key": "team",
      "value": "dev"
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ClusterNotFoundException|[ClusterNotFoundException](#schemaclusternotfoundexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTaskDefinitionFamilies

<a id="opIdListTaskDefinitionFamilies"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTaskDefinitionFamilies' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.ListTaskDefinitionFamilies' \
  -d '{
    "familyPrefix": {},
    "status": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTaskDefinitionFamilies`

<p>Returns a list of task definition families that are registered to your account. This list includes task definition families that no longer have any <code>ACTIVE</code> task definition revisions.</p> <p>You can filter out task definition families that don't contain any <code>ACTIVE</code> task definition revisions by setting the <code>status</code> parameter to <code>ACTIVE</code>. You can also filter the results with the <code>familyPrefix</code> parameter.</p>

> Body parameter

```json
{
  "familyPrefix": {},
  "status": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="listtaskdefinitionfamilies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListTaskDefinitionFamiliesRequest](#schemalisttaskdefinitionfamiliesrequest)|true|none|
|» familyPrefix|body|object|false|none|
|» status|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.ListTaskDefinitionFamilies|

> Example responses

> 200 Response

```json
{
  "families": [
    "hpcc",
    "hpcc-c4-8xlarge"
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

> 482 Response

```json
null
```

<h3 id="listtaskdefinitionfamilies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTaskDefinitionFamiliesResponse](#schemalisttaskdefinitionfamiliesresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTaskDefinitions

<a id="opIdListTaskDefinitions"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTaskDefinitions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.ListTaskDefinitions' \
  -d '{
    "familyPrefix": {},
    "status": {},
    "sort": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTaskDefinitions`

Returns a list of task definitions that are registered to your account. You can filter the results by family name with the <code>familyPrefix</code> parameter or by status with the <code>status</code> parameter.

> Body parameter

```json
{
  "familyPrefix": {},
  "status": {},
  "sort": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="listtaskdefinitions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListTaskDefinitionsRequest](#schemalisttaskdefinitionsrequest)|true|none|
|» familyPrefix|body|object|false|none|
|» status|body|object|false|none|
|» sort|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.ListTaskDefinitions|

> Example responses

> 200 Response

```json
{
  "taskDefinitionArns": [
    "arn:aws:ecs:us-east-1:<aws_account_id>:task-definition/wordpress:3",
    "arn:aws:ecs:us-east-1:<aws_account_id>:task-definition/wordpress:4",
    "arn:aws:ecs:us-east-1:<aws_account_id>:task-definition/wordpress:5",
    "arn:aws:ecs:us-east-1:<aws_account_id>:task-definition/wordpress:6"
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

> 482 Response

```json
null
```

<h3 id="listtaskdefinitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTaskDefinitionsResponse](#schemalisttaskdefinitionsresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTasks

<a id="opIdListTasks"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTasks' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.ListTasks' \
  -d '{
    "cluster": {},
    "containerInstance": {},
    "family": {},
    "nextToken": {},
    "maxResults": {},
    "startedBy": {},
    "serviceName": {},
    "desiredStatus": {},
    "launchType": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTasks`

<p>Returns a list of tasks. You can filter the results by cluster, task definition family, container instance, launch type, what IAM principal started the task, or by the desired status of the task.</p> <p>Recently stopped tasks might appear in the returned results. </p>

> Body parameter

```json
{
  "cluster": {},
  "containerInstance": {},
  "family": {},
  "nextToken": {},
  "maxResults": {},
  "startedBy": {},
  "serviceName": {},
  "desiredStatus": {},
  "launchType": {}
}
```

<h3 id="listtasks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListTasksRequest](#schemalisttasksrequest)|true|none|
|» cluster|body|object|false|none|
|» containerInstance|body|object|false|none|
|» family|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|
|» startedBy|body|object|false|none|
|» serviceName|body|object|false|none|
|» desiredStatus|body|object|false|none|
|» launchType|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.ListTasks|

> Example responses

> 200 Response

```json
{
  "taskArns": [
    "arn:aws:ecs:us-east-1:012345678910:task/0cc43cdb-3bee-4407-9c26-c0e6ea5bee84"
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="listtasks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTasksResponse](#schemalisttasksresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ClusterNotFoundException|[ClusterNotFoundException](#schemaclusternotfoundexception)|
|484|484|ServiceNotFoundException|[ServiceNotFoundException](#schemaservicenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutAccountSetting

<a id="opIdPutAccountSetting"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAccountSetting' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.PutAccountSetting' \
  -d '{
    "name": {},
    "value": {},
    "principalArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAccountSetting`

<p>Modifies an account setting. Account settings are set on a per-Region basis.</p> <p>If you change the root user account setting, the default settings are reset for users and roles that do not have specified individual account settings. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-account-settings.html">Account Settings</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>When <code>serviceLongArnFormat</code>, <code>taskLongArnFormat</code>, or <code>containerInstanceLongArnFormat</code> are specified, the Amazon Resource Name (ARN) and resource ID format of the resource type for a specified user, role, or the root user for an account is affected. The opt-in and opt-out account setting must be set for each Amazon ECS resource separately. The ARN and resource ID format of a resource is defined by the opt-in status of the user or role that created the resource. You must turn on this setting to use Amazon ECS features such as resource tagging.</p> <p>When <code>awsvpcTrunking</code> is specified, the elastic network interface (ENI) limit for any new container instances that support the feature is changed. If <code>awsvpcTrunking</code> is turned on, any new container instances that support the feature are launched have the increased ENI limits available to them. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container-instance-eni.html">Elastic Network Interface Trunking</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>When <code>containerInsights</code> is specified, the default setting indicating whether Amazon Web Services CloudWatch Container Insights is turned on for your clusters is changed. If <code>containerInsights</code> is turned on, any new clusters that are created will have Container Insights turned on unless you disable it during cluster creation. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cloudwatch-container-insights.html">CloudWatch Container Insights</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>Amazon ECS is introducing tagging authorization for resource creation. Users must have permissions for actions that create the resource, such as <code>ecsCreateCluster</code>. If tags are specified when you create a resource, Amazon Web Services performs additional authorization to verify if users or roles have permissions to create tags. Therefore, you must grant explicit permissions to use the <code>ecs:TagResource</code> action. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/supported-iam-actions-tagging.html">Grant permission to tag resources on creation</a> in the <i>Amazon ECS Developer Guide</i>.</p>

> Body parameter

```json
{
  "name": {},
  "value": {},
  "principalArn": {}
}
```

<h3 id="putaccountsetting-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PutAccountSettingRequest](#schemaputaccountsettingrequest)|true|none|
|» name|body|object|true|none|
|» value|body|object|true|none|
|» principalArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.PutAccountSetting|

> Example responses

> 200 Response

```json
{
  "setting": {
    "name": "containerInstanceLongArnFormat",
    "value": "enabled",
    "principalArn": "arn:aws:iam::<aws_account_id>:user/principalName"
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

> 482 Response

```json
null
```

<h3 id="putaccountsetting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutAccountSettingResponse](#schemaputaccountsettingresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutAccountSettingDefault

<a id="opIdPutAccountSettingDefault"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAccountSettingDefault' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.PutAccountSettingDefault' \
  -d '{
    "name": {},
    "value": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAccountSettingDefault`

Modifies an account setting for all users on an account for whom no individual account setting has been specified. Account settings are set on a per-Region basis.

> Body parameter

```json
{
  "name": {},
  "value": {}
}
```

<h3 id="putaccountsettingdefault-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PutAccountSettingDefaultRequest](#schemaputaccountsettingdefaultrequest)|true|none|
|» name|body|object|true|none|
|» value|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.PutAccountSettingDefault|

> Example responses

> 200 Response

```json
{
  "setting": {
    "name": "serviceLongArnFormat",
    "value": "enabled",
    "principalArn": "arn:aws:iam::<aws_account_id>:root"
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

> 482 Response

```json
null
```

<h3 id="putaccountsettingdefault-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutAccountSettingDefaultResponse](#schemaputaccountsettingdefaultresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutAttributes

<a id="opIdPutAttributes"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAttributes' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.PutAttributes' \
  -d '{
    "cluster": {},
    "attributes": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAttributes`

Create or update an attribute on an Amazon ECS resource. If the attribute doesn't exist, it's created. If the attribute exists, its value is replaced with the specified value. To delete an attribute, use <a>DeleteAttributes</a>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html#attributes">Attributes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.

> Body parameter

```json
{
  "cluster": {},
  "attributes": {}
}
```

<h3 id="putattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PutAttributesRequest](#schemaputattributesrequest)|true|none|
|» cluster|body|object|false|none|
|» attributes|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.PutAttributes|

> Example responses

> 200 Response

```json
{
  "attributes": {}
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="putattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutAttributesResponse](#schemaputattributesresponse)|
|480|480|ClusterNotFoundException|[ClusterNotFoundException](#schemaclusternotfoundexception)|
|481|481|TargetNotFoundException|[TargetNotFoundException](#schematargetnotfoundexception)|
|482|482|AttributeLimitExceededException|[AttributeLimitExceededException](#schemaattributelimitexceededexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutClusterCapacityProviders

<a id="opIdPutClusterCapacityProviders"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutClusterCapacityProviders' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.PutClusterCapacityProviders' \
  -d '{
    "cluster": {},
    "capacityProviders": {},
    "defaultCapacityProviderStrategy": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutClusterCapacityProviders`

<p>Modifies the available capacity providers and the default capacity provider strategy for a cluster.</p> <p>You must specify both the available capacity providers and a default capacity provider strategy for the cluster. If the specified cluster has existing capacity providers associated with it, you must specify all existing capacity providers in addition to any new ones you want to add. Any existing capacity providers that are associated with a cluster that are omitted from a <a>PutClusterCapacityProviders</a> API call will be disassociated with the cluster. You can only disassociate an existing capacity provider from a cluster if it's not being used by any existing tasks.</p> <p>When creating a service or running a task on a cluster, if no capacity provider or launch type is specified, then the cluster's default capacity provider strategy is used. We recommend that you define a default capacity provider strategy for your cluster. However, you must specify an empty array (<code>[]</code>) to bypass defining a default strategy.</p>

> Body parameter

```json
{
  "cluster": {},
  "capacityProviders": {},
  "defaultCapacityProviderStrategy": {}
}
```

<h3 id="putclustercapacityproviders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PutClusterCapacityProvidersRequest](#schemaputclustercapacityprovidersrequest)|true|none|
|» cluster|body|object|true|none|
|» capacityProviders|body|object|true|none|
|» defaultCapacityProviderStrategy|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.PutClusterCapacityProviders|

> Example responses

> 200 Response

```json
{
  "cluster": {
    "clusterArn": {},
    "clusterName": {},
    "configuration": {
      "executeCommandConfiguration": {
        "kmsKeyId": {},
        "logging": {},
        "logConfiguration": {
          "cloudWatchLogGroupName": {},
          "cloudWatchEncryptionEnabled": {},
          "s3BucketName": {},
          "s3EncryptionEnabled": {},
          "s3KeyPrefix": {}
        }
      }
    },
    "status": {},
    "registeredContainerInstancesCount": {},
    "runningTasksCount": {},
    "pendingTasksCount": {},
    "activeServicesCount": {},
    "statistics": {},
    "tags": {},
    "settings": {},
    "capacityProviders": {},
    "defaultCapacityProviderStrategy": {},
    "attachments": {},
    "attachmentsStatus": {},
    "serviceConnectDefaults": {
      "namespace": {}
    }
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="putclustercapacityproviders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutClusterCapacityProvidersResponse](#schemaputclustercapacityprovidersresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ClusterNotFoundException|[ClusterNotFoundException](#schemaclusternotfoundexception)|
|484|484|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|485|485|UpdateInProgressException|[UpdateInProgressException](#schemaupdateinprogressexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RegisterContainerInstance

<a id="opIdRegisterContainerInstance"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RegisterContainerInstance' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.RegisterContainerInstance' \
  -d '{
    "cluster": {},
    "instanceIdentityDocument": {},
    "instanceIdentityDocumentSignature": {},
    "totalResources": {},
    "versionInfo": {
      "agentVersion": {},
      "agentHash": {},
      "dockerVersion": {}
    },
    "containerInstanceArn": {},
    "attributes": {},
    "platformDevices": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RegisterContainerInstance`

<note> <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p> </note> <p>Registers an EC2 instance into the specified cluster. This instance becomes available to place containers on.</p>

> Body parameter

```json
{
  "cluster": {},
  "instanceIdentityDocument": {},
  "instanceIdentityDocumentSignature": {},
  "totalResources": {},
  "versionInfo": {
    "agentVersion": {},
    "agentHash": {},
    "dockerVersion": {}
  },
  "containerInstanceArn": {},
  "attributes": {},
  "platformDevices": {},
  "tags": {}
}
```

<h3 id="registercontainerinstance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[RegisterContainerInstanceRequest](#schemaregistercontainerinstancerequest)|true|none|
|» cluster|body|object|false|none|
|» instanceIdentityDocument|body|object|false|none|
|» instanceIdentityDocumentSignature|body|object|false|none|
|» totalResources|body|object|false|none|
|» versionInfo|body|object|false|none|
|» » agentVersion|body|object|false|none|
|» » agentHash|body|object|false|none|
|» » dockerVersion|body|object|false|none|
|» containerInstanceArn|body|object|false|none|
|» attributes|body|object|false|none|
|» platformDevices|body|object|false|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.RegisterContainerInstance|

> Example responses

> 200 Response

```json
{
  "containerInstance": {
    "containerInstanceArn": {},
    "ec2InstanceId": {},
    "capacityProviderName": {},
    "version": {},
    "versionInfo": {
      "agentVersion": {},
      "agentHash": {},
      "dockerVersion": {}
    },
    "remainingResources": {},
    "registeredResources": {},
    "status": {},
    "statusReason": {},
    "agentConnected": {},
    "runningTasksCount": {},
    "pendingTasksCount": {},
    "agentUpdateStatus": {},
    "attributes": {},
    "registeredAt": {},
    "attachments": {},
    "tags": {},
    "healthStatus": {
      "overallStatus": {},
      "details": {}
    }
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

> 482 Response

```json
null
```

<h3 id="registercontainerinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegisterContainerInstanceResponse](#schemaregistercontainerinstanceresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RegisterTaskDefinition

<a id="opIdRegisterTaskDefinition"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RegisterTaskDefinition' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.RegisterTaskDefinition' \
  -d '{
    "family": {},
    "taskRoleArn": {},
    "executionRoleArn": {},
    "networkMode": {},
    "containerDefinitions": {},
    "volumes": {},
    "placementConstraints": {},
    "requiresCompatibilities": {},
    "cpu": {},
    "memory": {},
    "tags": {},
    "pidMode": {},
    "ipcMode": {},
    "proxyConfiguration": {
      "type": {},
      "containerName": {},
      "properties": null
    },
    "inferenceAccelerators": {},
    "ephemeralStorage": {
      "sizeInGiB": {}
    },
    "runtimePlatform": {
      "cpuArchitecture": {},
      "operatingSystemFamily": {}
    }
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RegisterTaskDefinition`

<p>Registers a new task definition from the supplied <code>family</code> and <code>containerDefinitions</code>. Optionally, you can add data volumes to your containers with the <code>volumes</code> parameter. For more information about task definition parameters and defaults, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_defintions.html">Amazon ECS Task Definitions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>You can specify a role for your task with the <code>taskRoleArn</code> parameter. When you specify a role for a task, its containers can then use the latest versions of the CLI or SDKs to make API requests to the Amazon Web Services services that are specified in the policy that's associated with the role. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html">IAM Roles for Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>You can specify a Docker networking mode for the containers in your task definition with the <code>networkMode</code> parameter. The available network modes correspond to those described in <a href="https://docs.docker.com/engine/reference/run/#/network-settings">Network settings</a> in the Docker run reference. If you specify the <code>awsvpc</code> network mode, the task is allocated an elastic network interface, and you must specify a <a>NetworkConfiguration</a> when you create a service or run a task with the task definition. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html">Task Networking</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>

> Body parameter

```json
{
  "family": {},
  "taskRoleArn": {},
  "executionRoleArn": {},
  "networkMode": {},
  "containerDefinitions": {},
  "volumes": {},
  "placementConstraints": {},
  "requiresCompatibilities": {},
  "cpu": {},
  "memory": {},
  "tags": {},
  "pidMode": {},
  "ipcMode": {},
  "proxyConfiguration": {
    "type": {},
    "containerName": {},
    "properties": null
  },
  "inferenceAccelerators": {},
  "ephemeralStorage": {
    "sizeInGiB": {}
  },
  "runtimePlatform": {
    "cpuArchitecture": {},
    "operatingSystemFamily": {}
  }
}
```

<h3 id="registertaskdefinition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[RegisterTaskDefinitionRequest](#schemaregistertaskdefinitionrequest)|true|none|
|» family|body|object|true|none|
|» taskRoleArn|body|object|false|none|
|» executionRoleArn|body|object|false|none|
|» networkMode|body|object|false|none|
|» containerDefinitions|body|object|true|none|
|» volumes|body|object|false|none|
|» placementConstraints|body|object|false|none|
|» requiresCompatibilities|body|object|false|none|
|» cpu|body|object|false|none|
|» memory|body|object|false|none|
|» tags|body|object|false|none|
|» pidMode|body|object|false|none|
|» ipcMode|body|object|false|none|
|» proxyConfiguration|body|object|false|none|
|» » type|body|object|false|none|
|» » containerName|body|object|true|none|
|» » properties|body|object|false|<p>The set of network configuration parameters to provide the Container Network Interface (CNI) plugin, specified as key-value pairs.</p> <ul> <li> <p> <code>IgnoredUID</code> - (Required) The user ID (UID) of the proxy container as defined by the <code>user</code> parameter in a container definition. This is used to ensure the proxy ignores its own traffic. If <code>IgnoredGID</code> is specified, this field can be empty.</p> </li> <li> <p> <code>IgnoredGID</code> - (Required) The group ID (GID) of the proxy container as defined by the <code>user</code> parameter in a container definition. This is used to ensure the proxy ignores its own traffic. If <code>IgnoredUID</code> is specified, this field can be empty.</p> </li> <li> <p> <code>AppPorts</code> - (Required) The list of ports that the application uses. Network traffic to these ports is forwarded to the <code>ProxyIngressPort</code> and <code>ProxyEgressPort</code>.</p> </li> <li> <p> <code>ProxyIngressPort</code> - (Required) Specifies the port that incoming traffic to the <code>AppPorts</code> is directed to.</p> </li> <li> <p> <code>ProxyEgressPort</code> - (Required) Specifies the port that outgoing traffic from the <code>AppPorts</code> is directed to.</p> </li> <li> <p> <code>EgressIgnoredPorts</code> - (Required) The egress traffic going to the specified ports is ignored and not redirected to the <code>ProxyEgressPort</code>. It can be an empty list.</p> </li> <li> <p> <code>EgressIgnoredIPs</code> - (Required) The egress traffic going to the specified IP addresses is ignored and not redirected to the <code>ProxyEgressPort</code>. It can be an empty list.</p> </li> </ul>|
|» inferenceAccelerators|body|object|false|none|
|» ephemeralStorage|body|object|false|none|
|» » sizeInGiB|body|object|true|none|
|» runtimePlatform|body|object|false|none|
|» » cpuArchitecture|body|object|false|none|
|» » operatingSystemFamily|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.RegisterTaskDefinition|

> Example responses

> 200 Response

```json
{
  "taskDefinition": {
    "containerDefinitions": [
      {
        "name": "sleep",
        "command": [
          "sleep",
          "360"
        ],
        "cpu": 10,
        "environment": [],
        "essential": true,
        "image": "busybox",
        "memory": 10,
        "mountPoints": [],
        "portMappings": [],
        "volumesFrom": []
      }
    ],
    "family": "sleep360",
    "revision": 1,
    "taskDefinitionArn": "arn:aws:ecs:us-east-1:<aws_account_id>:task-definition/sleep360:19",
    "volumes": []
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

> 482 Response

```json
null
```

<h3 id="registertaskdefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegisterTaskDefinitionResponse](#schemaregistertaskdefinitionresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RunTask

<a id="opIdRunTask"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RunTask' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.RunTask' \
  -d '{
    "capacityProviderStrategy": {},
    "cluster": {},
    "count": {},
    "enableECSManagedTags": {},
    "enableExecuteCommand": {},
    "group": {},
    "launchType": {},
    "networkConfiguration": {
      "awsvpcConfiguration": {
        "subnets": {},
        "securityGroups": {},
        "assignPublicIp": {}
      }
    },
    "overrides": {
      "containerOverrides": {},
      "cpu": {},
      "inferenceAcceleratorOverrides": {},
      "executionRoleArn": {},
      "memory": {},
      "taskRoleArn": {},
      "ephemeralStorage": {
        "sizeInGiB": {}
      }
    },
    "placementConstraints": {},
    "placementStrategy": {},
    "platformVersion": {},
    "propagateTags": {},
    "referenceId": {},
    "startedBy": {},
    "tags": {},
    "taskDefinition": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RunTask`

<p>Starts a new task using the specified task definition.</p> <p>You can allow Amazon ECS to place tasks for you, or you can customize how Amazon ECS places tasks using placement constraints and placement strategies. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html">Scheduling Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>Alternatively, you can use <a>StartTask</a> to use your own scheduler or place tasks manually on specific container instances.</p> <note> <p>Starting April 15, 2023, Amazon Web Services will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service. </p> </note> <p>The Amazon ECS API follows an eventual consistency model. This is because of the distributed nature of the system supporting the API. This means that the result of an API command you run that affects your Amazon ECS resources might not be immediately visible to all subsequent commands you run. Keep this in mind when you carry out an API command that immediately follows a previous API command.</p> <p>To manage eventual consistency, you can do the following:</p> <ul> <li> <p>Confirm the state of the resource before you run a command to modify it. Run the DescribeTasks command using an exponential backoff algorithm to ensure that you allow enough time for the previous command to propagate through the system. To do this, run the DescribeTasks command repeatedly, starting with a couple of seconds of wait time and increasing gradually up to five minutes of wait time.</p> </li> <li> <p>Add wait time between subsequent commands, even if the DescribeTasks command returns an accurate response. Apply an exponential backoff algorithm starting with a couple of seconds of wait time, and increase gradually up to about five minutes of wait time.</p> </li> </ul>

> Body parameter

```json
{
  "capacityProviderStrategy": {},
  "cluster": {},
  "count": {},
  "enableECSManagedTags": {},
  "enableExecuteCommand": {},
  "group": {},
  "launchType": {},
  "networkConfiguration": {
    "awsvpcConfiguration": {
      "subnets": {},
      "securityGroups": {},
      "assignPublicIp": {}
    }
  },
  "overrides": {
    "containerOverrides": {},
    "cpu": {},
    "inferenceAcceleratorOverrides": {},
    "executionRoleArn": {},
    "memory": {},
    "taskRoleArn": {},
    "ephemeralStorage": {
      "sizeInGiB": {}
    }
  },
  "placementConstraints": {},
  "placementStrategy": {},
  "platformVersion": {},
  "propagateTags": {},
  "referenceId": {},
  "startedBy": {},
  "tags": {},
  "taskDefinition": {}
}
```

<h3 id="runtask-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[RunTaskRequest](#schemaruntaskrequest)|true|none|
|» capacityProviderStrategy|body|object|false|none|
|» cluster|body|object|false|none|
|» count|body|object|false|none|
|» enableECSManagedTags|body|object|false|none|
|» enableExecuteCommand|body|object|false|none|
|» group|body|object|false|none|
|» launchType|body|object|false|none|
|» networkConfiguration|body|object|false|none|
|» » awsvpcConfiguration|body|object|false|none|
|» » » subnets|body|object|true|none|
|» » » securityGroups|body|object|false|none|
|» » » assignPublicIp|body|object|false|none|
|» overrides|body|object|false|none|
|» » containerOverrides|body|object|false|none|
|» » cpu|body|object|false|none|
|» » inferenceAcceleratorOverrides|body|object|false|none|
|» » executionRoleArn|body|object|false|none|
|» » memory|body|object|false|none|
|» » taskRoleArn|body|object|false|none|
|» » ephemeralStorage|body|object|false|none|
|» » » sizeInGiB|body|object|true|none|
|» placementConstraints|body|object|false|none|
|» placementStrategy|body|object|false|none|
|» platformVersion|body|object|false|none|
|» propagateTags|body|object|false|none|
|» referenceId|body|object|false|none|
|» startedBy|body|object|false|none|
|» tags|body|object|false|none|
|» taskDefinition|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.RunTask|

> Example responses

> 200 Response

```json
{
  "tasks": [
    {
      "containerInstanceArn": "arn:aws:ecs:us-east-1:<aws_account_id>:container-instance/ffe3d344-77e2-476c-a4d0-bf560ad50acb",
      "containers": [
        {
          "name": "sleep",
          "containerArn": "arn:aws:ecs:us-east-1:<aws_account_id>:container/58591c8e-be29-4ddf-95aa-ee459d4c59fd",
          "lastStatus": "PENDING",
          "taskArn": "arn:aws:ecs:us-east-1:<aws_account_id>:task/a9f21ea7-c9f5-44b1-b8e6-b31f50ed33c0"
        }
      ],
      "desiredStatus": "RUNNING",
      "lastStatus": "PENDING",
      "overrides": {
        "containerOverrides": [
          {
            "name": "sleep"
          }
        ]
      },
      "taskArn": "arn:aws:ecs:us-east-1:<aws_account_id>:task/a9f21ea7-c9f5-44b1-b8e6-b31f50ed33c0",
      "taskDefinitionArn": "arn:aws:ecs:us-east-1:<aws_account_id>:task-definition/sleep360:1"
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="runtask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RunTaskResponse](#schemaruntaskresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ClusterNotFoundException|[ClusterNotFoundException](#schemaclusternotfoundexception)|
|484|484|UnsupportedFeatureException|[UnsupportedFeatureException](#schemaunsupportedfeatureexception)|
|485|485|PlatformUnknownException|[PlatformUnknownException](#schemaplatformunknownexception)|
|486|486|PlatformTaskDefinitionIncompatibilityException|[PlatformTaskDefinitionIncompatibilityException](#schemaplatformtaskdefinitionincompatibilityexception)|
|487|487|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|488|488|BlockedException|[BlockedException](#schemablockedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartTask

<a id="opIdStartTask"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.StartTask' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.StartTask' \
  -d '{
    "cluster": {},
    "containerInstances": {},
    "enableECSManagedTags": {},
    "enableExecuteCommand": {},
    "group": {},
    "networkConfiguration": {
      "awsvpcConfiguration": {
        "subnets": {},
        "securityGroups": {},
        "assignPublicIp": {}
      }
    },
    "overrides": {
      "containerOverrides": {},
      "cpu": {},
      "inferenceAcceleratorOverrides": {},
      "executionRoleArn": {},
      "memory": {},
      "taskRoleArn": {},
      "ephemeralStorage": {
        "sizeInGiB": {}
      }
    },
    "propagateTags": {},
    "referenceId": {},
    "startedBy": {},
    "tags": {},
    "taskDefinition": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.StartTask`

<p>Starts a new task from the specified task definition on the specified container instance or instances.</p> <note> <p>Starting April 15, 2023, Amazon Web Services will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service. </p> </note> <p>Alternatively, you can use <a>RunTask</a> to place tasks for you. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html">Scheduling Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>

> Body parameter

```json
{
  "cluster": {},
  "containerInstances": {},
  "enableECSManagedTags": {},
  "enableExecuteCommand": {},
  "group": {},
  "networkConfiguration": {
    "awsvpcConfiguration": {
      "subnets": {},
      "securityGroups": {},
      "assignPublicIp": {}
    }
  },
  "overrides": {
    "containerOverrides": {},
    "cpu": {},
    "inferenceAcceleratorOverrides": {},
    "executionRoleArn": {},
    "memory": {},
    "taskRoleArn": {},
    "ephemeralStorage": {
      "sizeInGiB": {}
    }
  },
  "propagateTags": {},
  "referenceId": {},
  "startedBy": {},
  "tags": {},
  "taskDefinition": {}
}
```

<h3 id="starttask-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[StartTaskRequest](#schemastarttaskrequest)|true|none|
|» cluster|body|object|false|none|
|» containerInstances|body|object|true|none|
|» enableECSManagedTags|body|object|false|none|
|» enableExecuteCommand|body|object|false|none|
|» group|body|object|false|none|
|» networkConfiguration|body|object|false|none|
|» » awsvpcConfiguration|body|object|false|none|
|» » » subnets|body|object|true|none|
|» » » securityGroups|body|object|false|none|
|» » » assignPublicIp|body|object|false|none|
|» overrides|body|object|false|none|
|» » containerOverrides|body|object|false|none|
|» » cpu|body|object|false|none|
|» » inferenceAcceleratorOverrides|body|object|false|none|
|» » executionRoleArn|body|object|false|none|
|» » memory|body|object|false|none|
|» » taskRoleArn|body|object|false|none|
|» » ephemeralStorage|body|object|false|none|
|» » » sizeInGiB|body|object|true|none|
|» propagateTags|body|object|false|none|
|» referenceId|body|object|false|none|
|» startedBy|body|object|false|none|
|» tags|body|object|false|none|
|» taskDefinition|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.StartTask|

> Example responses

> 200 Response

```json
{
  "tasks": {},
  "failures": {}
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="starttask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartTaskResponse](#schemastarttaskresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ClusterNotFoundException|[ClusterNotFoundException](#schemaclusternotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopTask

<a id="opIdStopTask"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.StopTask' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.StopTask' \
  -d '{
    "cluster": {},
    "task": {},
    "reason": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.StopTask`

<p>Stops a running task. Any tags associated with the task will be deleted.</p> <p>When <a>StopTask</a> is called on a task, the equivalent of <code>docker stop</code> is issued to the containers running in the task. This results in a <code>SIGTERM</code> value and a default 30-second timeout, after which the <code>SIGKILL</code> value is sent and the containers are forcibly stopped. If the container handles the <code>SIGTERM</code> value gracefully and exits within 30 seconds from receiving it, no <code>SIGKILL</code> value is sent.</p> <note> <p>The default 30-second timeout can be configured on the Amazon ECS container agent with the <code>ECS_CONTAINER_STOP_TIMEOUT</code> variable. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS Container Agent Configuration</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </note>

> Body parameter

```json
{
  "cluster": {},
  "task": {},
  "reason": {}
}
```

<h3 id="stoptask-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[StopTaskRequest](#schemastoptaskrequest)|true|none|
|» cluster|body|object|false|none|
|» task|body|object|true|none|
|» reason|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.StopTask|

> Example responses

> 200 Response

```json
{
  "task": {
    "attachments": {},
    "attributes": {},
    "availabilityZone": {},
    "capacityProviderName": {},
    "clusterArn": {},
    "connectivity": {},
    "connectivityAt": {},
    "containerInstanceArn": {},
    "containers": {},
    "cpu": {},
    "createdAt": {},
    "desiredStatus": {},
    "enableExecuteCommand": {},
    "executionStoppedAt": {},
    "group": {},
    "healthStatus": {},
    "inferenceAccelerators": {},
    "lastStatus": {},
    "launchType": {},
    "memory": {},
    "overrides": {
      "containerOverrides": {},
      "cpu": {},
      "inferenceAcceleratorOverrides": {},
      "executionRoleArn": {},
      "memory": {},
      "taskRoleArn": {},
      "ephemeralStorage": {
        "sizeInGiB": {}
      }
    },
    "platformVersion": {},
    "platformFamily": {},
    "pullStartedAt": {},
    "pullStoppedAt": {},
    "startedAt": {},
    "startedBy": {},
    "stopCode": {},
    "stoppedAt": {},
    "stoppedReason": {},
    "stoppingAt": {},
    "tags": {},
    "taskArn": {},
    "taskDefinitionArn": {},
    "version": {},
    "ephemeralStorage": {
      "sizeInGiB": {}
    }
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="stoptask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopTaskResponse](#schemastoptaskresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ClusterNotFoundException|[ClusterNotFoundException](#schemaclusternotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SubmitAttachmentStateChanges

<a id="opIdSubmitAttachmentStateChanges"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitAttachmentStateChanges' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.SubmitAttachmentStateChanges' \
  -d '{
    "cluster": {},
    "attachments": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitAttachmentStateChanges`

<note> <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p> </note> <p>Sent to acknowledge that an attachment changed states.</p>

> Body parameter

```json
{
  "cluster": {},
  "attachments": {}
}
```

<h3 id="submitattachmentstatechanges-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[SubmitAttachmentStateChangesRequest](#schemasubmitattachmentstatechangesrequest)|true|none|
|» cluster|body|object|false|none|
|» attachments|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.SubmitAttachmentStateChanges|

> Example responses

> 200 Response

```json
{
  "acknowledgment": {}
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="submitattachmentstatechanges-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SubmitAttachmentStateChangesResponse](#schemasubmitattachmentstatechangesresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SubmitContainerStateChange

<a id="opIdSubmitContainerStateChange"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitContainerStateChange' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.SubmitContainerStateChange' \
  -d '{
    "cluster": {},
    "task": {},
    "containerName": {},
    "runtimeId": {},
    "status": {},
    "exitCode": {},
    "reason": {},
    "networkBindings": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitContainerStateChange`

<note> <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p> </note> <p>Sent to acknowledge that a container changed states.</p>

> Body parameter

```json
{
  "cluster": {},
  "task": {},
  "containerName": {},
  "runtimeId": {},
  "status": {},
  "exitCode": {},
  "reason": {},
  "networkBindings": {}
}
```

<h3 id="submitcontainerstatechange-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[SubmitContainerStateChangeRequest](#schemasubmitcontainerstatechangerequest)|true|none|
|» cluster|body|object|false|none|
|» task|body|object|false|none|
|» containerName|body|object|false|none|
|» runtimeId|body|object|false|none|
|» status|body|object|false|none|
|» exitCode|body|object|false|none|
|» reason|body|object|false|none|
|» networkBindings|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.SubmitContainerStateChange|

> Example responses

> 200 Response

```json
{
  "acknowledgment": {}
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

> 482 Response

```json
null
```

<h3 id="submitcontainerstatechange-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SubmitContainerStateChangeResponse](#schemasubmitcontainerstatechangeresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SubmitTaskStateChange

<a id="opIdSubmitTaskStateChange"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitTaskStateChange' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.SubmitTaskStateChange' \
  -d '{
    "cluster": {},
    "task": {},
    "status": {},
    "reason": {},
    "containers": {},
    "attachments": {},
    "managedAgents": {},
    "pullStartedAt": {},
    "pullStoppedAt": {},
    "executionStoppedAt": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitTaskStateChange`

<note> <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p> </note> <p>Sent to acknowledge that a task changed states.</p>

> Body parameter

```json
{
  "cluster": {},
  "task": {},
  "status": {},
  "reason": {},
  "containers": {},
  "attachments": {},
  "managedAgents": {},
  "pullStartedAt": {},
  "pullStoppedAt": {},
  "executionStoppedAt": {}
}
```

<h3 id="submittaskstatechange-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[SubmitTaskStateChangeRequest](#schemasubmittaskstatechangerequest)|true|none|
|» cluster|body|object|false|none|
|» task|body|object|false|none|
|» status|body|object|false|none|
|» reason|body|object|false|none|
|» containers|body|object|false|none|
|» attachments|body|object|false|none|
|» managedAgents|body|object|false|none|
|» pullStartedAt|body|object|false|none|
|» pullStoppedAt|body|object|false|none|
|» executionStoppedAt|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.SubmitTaskStateChange|

> Example responses

> 200 Response

```json
{
  "acknowledgment": {}
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="submittaskstatechange-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SubmitTaskStateChangeResponse](#schemasubmittaskstatechangeresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.TagResource' \
  -d '{
    "resourceArn": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.TagResource`

Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags that are associated with that resource are deleted as well.

> Body parameter

```json
{
  "resourceArn": {},
  "tags": {}
}
```

<h3 id="tagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[TagResourceRequest](#schematagresourcerequest)|true|none|
|» resourceArn|body|object|true|none|
|» tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.TagResource|

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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ClusterNotFoundException|[ClusterNotFoundException](#schemaclusternotfoundexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.UntagResource' \
  -d '{
    "resourceArn": {},
    "tagKeys": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UntagResource`

Deletes specified tags from a resource.

> Body parameter

```json
{
  "resourceArn": {},
  "tagKeys": {}
}
```

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UntagResourceRequest](#schemauntagresourcerequest)|true|none|
|» resourceArn|body|object|true|none|
|» tagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.UntagResource|

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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ClusterNotFoundException|[ClusterNotFoundException](#schemaclusternotfoundexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateCapacityProvider

<a id="opIdUpdateCapacityProvider"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateCapacityProvider' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.UpdateCapacityProvider' \
  -d '{
    "name": {},
    "autoScalingGroupProvider": {
      "managedScaling": {
        "status": {},
        "targetCapacity": {},
        "minimumScalingStepSize": {},
        "maximumScalingStepSize": {},
        "instanceWarmupPeriod": {}
      },
      "managedTerminationProtection": {}
    }
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateCapacityProvider`

Modifies the parameters for a capacity provider.

> Body parameter

```json
{
  "name": {},
  "autoScalingGroupProvider": {
    "managedScaling": {
      "status": {},
      "targetCapacity": {},
      "minimumScalingStepSize": {},
      "maximumScalingStepSize": {},
      "instanceWarmupPeriod": {}
    },
    "managedTerminationProtection": {}
  }
}
```

<h3 id="updatecapacityprovider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateCapacityProviderRequest](#schemaupdatecapacityproviderrequest)|true|none|
|» name|body|object|true|none|
|» autoScalingGroupProvider|body|object|true|none|
|» » managedScaling|body|object|false|none|
|» » » status|body|object|false|none|
|» » » targetCapacity|body|object|false|none|
|» » » minimumScalingStepSize|body|object|false|none|
|» » » maximumScalingStepSize|body|object|false|none|
|» » » instanceWarmupPeriod|body|object|false|none|
|» » managedTerminationProtection|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.UpdateCapacityProvider|

> Example responses

> 200 Response

```json
{
  "capacityProvider": {
    "capacityProviderArn": {},
    "name": {},
    "status": {},
    "autoScalingGroupProvider": {
      "autoScalingGroupArn": {},
      "managedScaling": {
        "status": {},
        "targetCapacity": {},
        "minimumScalingStepSize": {},
        "maximumScalingStepSize": {},
        "instanceWarmupPeriod": {}
      },
      "managedTerminationProtection": {}
    },
    "updateStatus": {},
    "updateStatusReason": {},
    "tags": {}
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

> 482 Response

```json
null
```

<h3 id="updatecapacityprovider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateCapacityProviderResponse](#schemaupdatecapacityproviderresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateCluster

<a id="opIdUpdateCluster"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateCluster' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.UpdateCluster' \
  -d '{
    "cluster": {},
    "settings": {},
    "configuration": {
      "executeCommandConfiguration": {
        "kmsKeyId": {},
        "logging": {},
        "logConfiguration": {
          "cloudWatchLogGroupName": {},
          "cloudWatchEncryptionEnabled": {},
          "s3BucketName": {},
          "s3EncryptionEnabled": {},
          "s3KeyPrefix": {}
        }
      }
    },
    "serviceConnectDefaults": {
      "namespace": {}
    }
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateCluster`

Updates the cluster.

> Body parameter

```json
{
  "cluster": {},
  "settings": {},
  "configuration": {
    "executeCommandConfiguration": {
      "kmsKeyId": {},
      "logging": {},
      "logConfiguration": {
        "cloudWatchLogGroupName": {},
        "cloudWatchEncryptionEnabled": {},
        "s3BucketName": {},
        "s3EncryptionEnabled": {},
        "s3KeyPrefix": {}
      }
    }
  },
  "serviceConnectDefaults": {
    "namespace": {}
  }
}
```

<h3 id="updatecluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateClusterRequest](#schemaupdateclusterrequest)|true|none|
|» cluster|body|object|true|none|
|» settings|body|object|false|none|
|» configuration|body|object|false|none|
|» » executeCommandConfiguration|body|object|false|none|
|» » » kmsKeyId|body|object|false|none|
|» » » logging|body|object|false|none|
|» » » logConfiguration|body|object|false|none|
|» » » » cloudWatchLogGroupName|body|object|false|none|
|» » » » cloudWatchEncryptionEnabled|body|object|false|none|
|» » » » s3BucketName|body|object|false|none|
|» » » » s3EncryptionEnabled|body|object|false|none|
|» » » » s3KeyPrefix|body|object|false|none|
|» serviceConnectDefaults|body|object|false|none|
|» » namespace|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.UpdateCluster|

> Example responses

> 200 Response

```json
{
  "cluster": {
    "clusterArn": {},
    "clusterName": {},
    "configuration": {
      "executeCommandConfiguration": {
        "kmsKeyId": {},
        "logging": {},
        "logConfiguration": {
          "cloudWatchLogGroupName": {},
          "cloudWatchEncryptionEnabled": {},
          "s3BucketName": {},
          "s3EncryptionEnabled": {},
          "s3KeyPrefix": {}
        }
      }
    },
    "status": {},
    "registeredContainerInstancesCount": {},
    "runningTasksCount": {},
    "pendingTasksCount": {},
    "activeServicesCount": {},
    "statistics": {},
    "tags": {},
    "settings": {},
    "capacityProviders": {},
    "defaultCapacityProviderStrategy": {},
    "attachments": {},
    "attachmentsStatus": {},
    "serviceConnectDefaults": {
      "namespace": {}
    }
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="updatecluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateClusterResponse](#schemaupdateclusterresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ClusterNotFoundException|[ClusterNotFoundException](#schemaclusternotfoundexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|NamespaceNotFoundException|[NamespaceNotFoundException](#schemanamespacenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateClusterSettings

<a id="opIdUpdateClusterSettings"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateClusterSettings' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.UpdateClusterSettings' \
  -d '{
    "cluster": {},
    "settings": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateClusterSettings`

Modifies the settings to use for a cluster.

> Body parameter

```json
{
  "cluster": {},
  "settings": {}
}
```

<h3 id="updateclustersettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateClusterSettingsRequest](#schemaupdateclustersettingsrequest)|true|none|
|» cluster|body|object|true|none|
|» settings|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.UpdateClusterSettings|

> Example responses

> 200 Response

```json
{
  "cluster": {
    "clusterArn": {},
    "clusterName": {},
    "configuration": {
      "executeCommandConfiguration": {
        "kmsKeyId": {},
        "logging": {},
        "logConfiguration": {
          "cloudWatchLogGroupName": {},
          "cloudWatchEncryptionEnabled": {},
          "s3BucketName": {},
          "s3EncryptionEnabled": {},
          "s3KeyPrefix": {}
        }
      }
    },
    "status": {},
    "registeredContainerInstancesCount": {},
    "runningTasksCount": {},
    "pendingTasksCount": {},
    "activeServicesCount": {},
    "statistics": {},
    "tags": {},
    "settings": {},
    "capacityProviders": {},
    "defaultCapacityProviderStrategy": {},
    "attachments": {},
    "attachmentsStatus": {},
    "serviceConnectDefaults": {
      "namespace": {}
    }
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="updateclustersettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateClusterSettingsResponse](#schemaupdateclustersettingsresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ClusterNotFoundException|[ClusterNotFoundException](#schemaclusternotfoundexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateContainerAgent

<a id="opIdUpdateContainerAgent"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateContainerAgent' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.UpdateContainerAgent' \
  -d '{
    "cluster": {},
    "containerInstance": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateContainerAgent`

<p>Updates the Amazon ECS container agent on a specified container instance. Updating the Amazon ECS container agent doesn't interrupt running tasks or services on the container instance. The process for updating the agent differs depending on whether your container instance was launched with the Amazon ECS-optimized AMI or another operating system.</p> <note> <p>The <code>UpdateContainerAgent</code> API isn't supported for container instances using the Amazon ECS-optimized Amazon Linux 2 (arm64) AMI. To update the container agent, you can update the <code>ecs-init</code> package. This updates the agent. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/agent-update-ecs-ami.html">Updating the Amazon ECS container agent</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </note> <note> <p>Agent updates with the <code>UpdateContainerAgent</code> API operation do not apply to Windows container instances. We recommend that you launch new container instances to update the agent version in your Windows clusters.</p> </note> <p>The <code>UpdateContainerAgent</code> API requires an Amazon ECS-optimized AMI or Amazon Linux AMI with the <code>ecs-init</code> service installed and running. For help updating the Amazon ECS container agent on other operating systems, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html#manually_update_agent">Manually updating the Amazon ECS container agent</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>

> Body parameter

```json
{
  "cluster": {},
  "containerInstance": {}
}
```

<h3 id="updatecontaineragent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateContainerAgentRequest](#schemaupdatecontaineragentrequest)|true|none|
|» cluster|body|object|false|none|
|» containerInstance|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.UpdateContainerAgent|

> Example responses

> 200 Response

```json
{
  "containerInstance": {
    "containerInstanceArn": {},
    "ec2InstanceId": {},
    "capacityProviderName": {},
    "version": {},
    "versionInfo": {
      "agentVersion": {},
      "agentHash": {},
      "dockerVersion": {}
    },
    "remainingResources": {},
    "registeredResources": {},
    "status": {},
    "statusReason": {},
    "agentConnected": {},
    "runningTasksCount": {},
    "pendingTasksCount": {},
    "agentUpdateStatus": {},
    "attributes": {},
    "registeredAt": {},
    "attachments": {},
    "tags": {},
    "healthStatus": {
      "overallStatus": {},
      "details": {}
    }
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="updatecontaineragent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateContainerAgentResponse](#schemaupdatecontaineragentresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ClusterNotFoundException|[ClusterNotFoundException](#schemaclusternotfoundexception)|
|484|484|UpdateInProgressException|[UpdateInProgressException](#schemaupdateinprogressexception)|
|485|485|NoUpdateAvailableException|[NoUpdateAvailableException](#schemanoupdateavailableexception)|
|486|486|MissingVersionException|[MissingVersionException](#schemamissingversionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateContainerInstancesState

<a id="opIdUpdateContainerInstancesState"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateContainerInstancesState' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.UpdateContainerInstancesState' \
  -d '{
    "cluster": {},
    "containerInstances": {},
    "status": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateContainerInstancesState`

<p>Modifies the status of an Amazon ECS container instance.</p> <p>Once a container instance has reached an <code>ACTIVE</code> state, you can change the status of a container instance to <code>DRAINING</code> to manually remove an instance from a cluster, for example to perform system updates, update the Docker daemon, or scale down the cluster size.</p> <important> <p>A container instance can't be changed to <code>DRAINING</code> until it has reached an <code>ACTIVE</code> status. If the instance is in any other status, an error will be received.</p> </important> <p>When you set a container instance to <code>DRAINING</code>, Amazon ECS prevents new tasks from being scheduled for placement on the container instance and replacement service tasks are started on other container instances in the cluster if the resources are available. Service tasks on the container instance that are in the <code>PENDING</code> state are stopped immediately.</p> <p>Service tasks on the container instance that are in the <code>RUNNING</code> state are stopped and replaced according to the service's deployment configuration parameters, <code>minimumHealthyPercent</code> and <code>maximumPercent</code>. You can change the deployment configuration of your service using <a>UpdateService</a>.</p> <ul> <li> <p>If <code>minimumHealthyPercent</code> is below 100%, the scheduler can ignore <code>desiredCount</code> temporarily during task replacement. For example, <code>desiredCount</code> is four tasks, a minimum of 50% allows the scheduler to stop two existing tasks before starting two new tasks. If the minimum is 100%, the service scheduler can't remove existing tasks until the replacement tasks are considered healthy. Tasks for services that do not use a load balancer are considered healthy if they're in the <code>RUNNING</code> state. Tasks for services that use a load balancer are considered healthy if they're in the <code>RUNNING</code> state and are reported as healthy by the load balancer.</p> </li> <li> <p>The <code>maximumPercent</code> parameter represents an upper limit on the number of running tasks during task replacement. You can use this to define the replacement batch size. For example, if <code>desiredCount</code> is four tasks, a maximum of 200% starts four new tasks before stopping the four tasks to be drained, provided that the cluster resources required to do this are available. If the maximum is 100%, then replacement tasks can't start until the draining tasks have stopped.</p> </li> </ul> <p>Any <code>PENDING</code> or <code>RUNNING</code> tasks that do not belong to a service aren't affected. You must wait for them to finish or stop them manually.</p> <p>A container instance has completed draining when it has no more <code>RUNNING</code> tasks. You can verify this using <a>ListTasks</a>.</p> <p>When a container instance has been drained, you can set a container instance to <code>ACTIVE</code> status and once it has reached that status the Amazon ECS scheduler can begin scheduling tasks on the instance again.</p>

> Body parameter

```json
{
  "cluster": {},
  "containerInstances": {},
  "status": {}
}
```

<h3 id="updatecontainerinstancesstate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateContainerInstancesStateRequest](#schemaupdatecontainerinstancesstaterequest)|true|none|
|» cluster|body|object|false|none|
|» containerInstances|body|object|true|none|
|» status|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.UpdateContainerInstancesState|

> Example responses

> 200 Response

```json
{
  "containerInstances": {},
  "failures": {}
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="updatecontainerinstancesstate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateContainerInstancesStateResponse](#schemaupdatecontainerinstancesstateresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ClusterNotFoundException|[ClusterNotFoundException](#schemaclusternotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateService

<a id="opIdUpdateService"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateService' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.UpdateService' \
  -d '{
    "cluster": {},
    "service": {},
    "desiredCount": {},
    "taskDefinition": {},
    "capacityProviderStrategy": {},
    "deploymentConfiguration": {
      "deploymentCircuitBreaker": {
        "enable": {},
        "rollback": {}
      },
      "maximumPercent": {},
      "minimumHealthyPercent": {},
      "alarms": {
        "alarmNames": {},
        "enable": {},
        "rollback": {}
      }
    },
    "networkConfiguration": {
      "awsvpcConfiguration": {
        "subnets": {},
        "securityGroups": {},
        "assignPublicIp": {}
      }
    },
    "placementConstraints": {},
    "placementStrategy": {},
    "platformVersion": {},
    "forceNewDeployment": {},
    "healthCheckGracePeriodSeconds": {},
    "enableExecuteCommand": {},
    "enableECSManagedTags": {},
    "loadBalancers": {},
    "propagateTags": {},
    "serviceRegistries": {},
    "serviceConnectConfiguration": {
      "enabled": {},
      "namespace": {},
      "services": {},
      "logConfiguration": {
        "logDriver": {},
        "options": {
          "property1": "string",
          "property2": "string"
        },
        "secretOptions": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateService`

<p>Modifies the parameters of a service.</p> <p>For services using the rolling update (<code>ECS</code>) you can update the desired count, deployment configuration, network configuration, load balancers, service registries, enable ECS managed tags option, propagate tags option, task placement constraints and strategies, and task definition. When you update any of these parameters, Amazon ECS starts new tasks with the new configuration. </p> <p>For services using the blue/green (<code>CODE_DEPLOY</code>) deployment controller, only the desired count, deployment configuration, health check grace period, task placement constraints and strategies, enable ECS managed tags option, and propagate tags can be updated using this API. If the network configuration, platform version, task definition, or load balancer need to be updated, create a new CodeDeploy deployment. For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_CreateDeployment.html">CreateDeployment</a> in the <i>CodeDeploy API Reference</i>.</p> <p>For services using an external deployment controller, you can update only the desired count, task placement constraints and strategies, health check grace period, enable ECS managed tags option, and propagate tags option, using this API. If the launch type, load balancer, network configuration, platform version, or task definition need to be updated, create a new task set For more information, see <a>CreateTaskSet</a>.</p> <p>You can add to or subtract from the number of instantiations of a task definition in a service by specifying the cluster that the service is running in and a new <code>desiredCount</code> parameter.</p> <p>If you have updated the Docker image of your application, you can create a new task definition with that image and deploy it to your service. The service scheduler uses the minimum healthy percent and maximum percent parameters (in the service's deployment configuration) to determine the deployment strategy.</p> <note> <p>If your updated Docker image uses the same tag as what is in the existing task definition for your service (for example, <code>my_image:latest</code>), you don't need to create a new revision of your task definition. You can update the service using the <code>forceNewDeployment</code> option. The new tasks launched by the deployment pull the current image/tag combination from your repository when they start.</p> </note> <p>You can also update the deployment configuration of a service. When a deployment is triggered by updating the task definition of a service, the service scheduler uses the deployment configuration parameters, <code>minimumHealthyPercent</code> and <code>maximumPercent</code>, to determine the deployment strategy.</p> <ul> <li> <p>If <code>minimumHealthyPercent</code> is below 100%, the scheduler can ignore <code>desiredCount</code> temporarily during a deployment. For example, if <code>desiredCount</code> is four tasks, a minimum of 50% allows the scheduler to stop two existing tasks before starting two new tasks. Tasks for services that don't use a load balancer are considered healthy if they're in the <code>RUNNING</code> state. Tasks for services that use a load balancer are considered healthy if they're in the <code>RUNNING</code> state and are reported as healthy by the load balancer.</p> </li> <li> <p>The <code>maximumPercent</code> parameter represents an upper limit on the number of running tasks during a deployment. You can use it to define the deployment batch size. For example, if <code>desiredCount</code> is four tasks, a maximum of 200% starts four new tasks before stopping the four older tasks (provided that the cluster resources required to do this are available).</p> </li> </ul> <p>When <a>UpdateService</a> stops a task during a deployment, the equivalent of <code>docker stop</code> is issued to the containers running in the task. This results in a <code>SIGTERM</code> and a 30-second timeout. After this, <code>SIGKILL</code> is sent and the containers are forcibly stopped. If the container handles the <code>SIGTERM</code> gracefully and exits within 30 seconds from receiving it, no <code>SIGKILL</code> is sent.</p> <p>When the service scheduler launches new tasks, it determines task placement in your cluster with the following logic.</p> <ul> <li> <p>Determine which of the container instances in your cluster can support your service's task definition. For example, they have the required CPU, memory, ports, and container instance attributes.</p> </li> <li> <p>By default, the service scheduler attempts to balance tasks across Availability Zones in this manner even though you can choose a different placement strategy.</p> <ul> <li> <p>Sort the valid container instances by the fewest number of running tasks for this service in the same Availability Zone as the instance. For example, if zone A has one running service task and zones B and C each have zero, valid container instances in either zone B or C are considered optimal for placement.</p> </li> <li> <p>Place the new service task on a valid container instance in an optimal Availability Zone (based on the previous steps), favoring container instances with the fewest number of running tasks for this service.</p> </li> </ul> </li> </ul> <p>When the service scheduler stops running tasks, it attempts to maintain balance across the Availability Zones in your cluster using the following logic: </p> <ul> <li> <p>Sort the container instances by the largest number of running tasks for this service in the same Availability Zone as the instance. For example, if zone A has one running service task and zones B and C each have two, container instances in either zone B or C are considered optimal for termination.</p> </li> <li> <p>Stop the task on a container instance in an optimal Availability Zone (based on the previous steps), favoring container instances with the largest number of running tasks for this service.</p> </li> </ul> <note> <p>You must have a service-linked role when you update any of the following service properties:</p> <ul> <li> <p> <code>loadBalancers</code>,</p> </li> <li> <p> <code>serviceRegistries</code> </p> </li> </ul> <p>For more information about the role see the <code>CreateService</code> request parameter <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateService.html#ECS-CreateService-request-role"> <code>role</code> </a>. </p> </note>

> Body parameter

```json
{
  "cluster": {},
  "service": {},
  "desiredCount": {},
  "taskDefinition": {},
  "capacityProviderStrategy": {},
  "deploymentConfiguration": {
    "deploymentCircuitBreaker": {
      "enable": {},
      "rollback": {}
    },
    "maximumPercent": {},
    "minimumHealthyPercent": {},
    "alarms": {
      "alarmNames": {},
      "enable": {},
      "rollback": {}
    }
  },
  "networkConfiguration": {
    "awsvpcConfiguration": {
      "subnets": {},
      "securityGroups": {},
      "assignPublicIp": {}
    }
  },
  "placementConstraints": {},
  "placementStrategy": {},
  "platformVersion": {},
  "forceNewDeployment": {},
  "healthCheckGracePeriodSeconds": {},
  "enableExecuteCommand": {},
  "enableECSManagedTags": {},
  "loadBalancers": {},
  "propagateTags": {},
  "serviceRegistries": {},
  "serviceConnectConfiguration": {
    "enabled": {},
    "namespace": {},
    "services": {},
    "logConfiguration": {
      "logDriver": {},
      "options": {
        "property1": "string",
        "property2": "string"
      },
      "secretOptions": {}
    }
  }
}
```

<h3 id="updateservice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateServiceRequest](#schemaupdateservicerequest)|true|none|
|» cluster|body|object|false|none|
|» service|body|object|true|none|
|» desiredCount|body|object|false|none|
|» taskDefinition|body|object|false|none|
|» capacityProviderStrategy|body|object|false|none|
|» deploymentConfiguration|body|object|false|none|
|» » deploymentCircuitBreaker|body|object|false|none|
|» » » enable|body|object|true|none|
|» » » rollback|body|object|true|none|
|» » maximumPercent|body|object|false|none|
|» » minimumHealthyPercent|body|object|false|none|
|» » alarms|body|object|false|none|
|» » » alarmNames|body|object|true|none|
|» » » enable|body|object|true|none|
|» » » rollback|body|object|true|none|
|» networkConfiguration|body|object|false|none|
|» » awsvpcConfiguration|body|object|false|none|
|» » » subnets|body|object|true|none|
|» » » securityGroups|body|object|false|none|
|» » » assignPublicIp|body|object|false|none|
|» placementConstraints|body|object|false|none|
|» placementStrategy|body|object|false|none|
|» platformVersion|body|object|false|none|
|» forceNewDeployment|body|object|false|none|
|» healthCheckGracePeriodSeconds|body|object|false|none|
|» enableExecuteCommand|body|object|false|none|
|» enableECSManagedTags|body|object|false|none|
|» loadBalancers|body|object|false|none|
|» propagateTags|body|object|false|none|
|» serviceRegistries|body|object|false|none|
|» serviceConnectConfiguration|body|object|false|none|
|» » enabled|body|object|true|none|
|» » namespace|body|object|false|none|
|» » services|body|object|false|none|
|» » logConfiguration|body|[LogConfiguration](#schemalogconfiguration)|false|<p>The log configuration for the container. This parameter maps to <code>LogConfig</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--log-driver</code> option to <a href="https://docs.docker.com/engine/reference/commandline/run/"> <code>docker run</code> </a>.</p> <p>By default, containers use the same logging driver that the Docker daemon uses. However, the container might use a different logging driver than the Docker daemon by specifying a log driver configuration in the container definition. For more information about the options for different supported log drivers, see <a href="https://docs.docker.com/engine/admin/logging/overview/">Configure logging drivers</a> in the Docker documentation.</p> <p>Understand the following when specifying a log configuration for your containers.</p> <ul> <li> <p>Amazon ECS currently supports a subset of the logging drivers available to the Docker daemon. Additional log drivers may be available in future releases of the Amazon ECS container agent.</p> <p>For tasks on Fargate, the supported log drivers are <code>awslogs</code>, <code>splunk</code>, and <code>awsfirelens</code>.</p> <p>For tasks hosted on Amazon EC2 instances, the supported log drivers are <code>awslogs</code>, <code>fluentd</code>, <code>gelf</code>, <code>json-file</code>, <code>journald</code>, <code>logentries</code>,<code>syslog</code>, <code>splunk</code>, and <code>awsfirelens</code>.</p> </li> <li> <p>This parameter requires version 1.18 of the Docker Remote API or greater on your container instance.</p> </li> <li> <p>For tasks that are hosted on Amazon EC2 instances, the Amazon ECS container agent must register the available logging drivers with the <code>ECS_AVAILABLE_LOGGING_DRIVERS</code> environment variable before containers placed on that instance can use these log configuration options. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS container agent configuration</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </li> <li> <p>For tasks that are on Fargate, because you don't have access to the underlying infrastructure your tasks are hosted on, any additional software needed must be installed outside of the task. For example, the Fluentd output aggregators or a remote host running Logstash to send Gelf logs to.</p> </li> </ul>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.UpdateService|

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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

> 489 Response

```json
null
```

<h3 id="updateservice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateServiceResponse](#schemaupdateserviceresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ClusterNotFoundException|[ClusterNotFoundException](#schemaclusternotfoundexception)|
|484|484|ServiceNotFoundException|[ServiceNotFoundException](#schemaservicenotfoundexception)|
|485|485|ServiceNotActiveException|[ServiceNotActiveException](#schemaservicenotactiveexception)|
|486|486|PlatformUnknownException|[PlatformUnknownException](#schemaplatformunknownexception)|
|487|487|PlatformTaskDefinitionIncompatibilityException|[PlatformTaskDefinitionIncompatibilityException](#schemaplatformtaskdefinitionincompatibilityexception)|
|488|488|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|489|489|NamespaceNotFoundException|[NamespaceNotFoundException](#schemanamespacenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateServicePrimaryTaskSet

<a id="opIdUpdateServicePrimaryTaskSet"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet' \
  -d '{
    "cluster": {},
    "service": {},
    "primaryTaskSet": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet`

Modifies which task set in a service is the primary task set. Any parameters that are updated on the primary task set in a service will transition to the service. This is used when a service uses the <code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.

> Body parameter

```json
{
  "cluster": {},
  "service": {},
  "primaryTaskSet": {}
}
```

<h3 id="updateserviceprimarytaskset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateServicePrimaryTaskSetRequest](#schemaupdateserviceprimarytasksetrequest)|true|none|
|» cluster|body|object|true|none|
|» service|body|object|true|none|
|» primaryTaskSet|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet|

> Example responses

> 200 Response

```json
{
  "taskSet": {
    "id": {},
    "taskSetArn": {},
    "serviceArn": {},
    "clusterArn": {},
    "startedBy": {},
    "externalId": {},
    "status": {},
    "taskDefinition": {},
    "computedDesiredCount": {},
    "pendingCount": {},
    "runningCount": {},
    "createdAt": {},
    "updatedAt": {},
    "launchType": {},
    "capacityProviderStrategy": {},
    "platformVersion": {},
    "platformFamily": {},
    "networkConfiguration": {
      "awsvpcConfiguration": {
        "subnets": {},
        "securityGroups": {},
        "assignPublicIp": {}
      }
    },
    "loadBalancers": {},
    "serviceRegistries": {},
    "scale": {
      "value": {},
      "unit": {}
    },
    "stabilityStatus": {},
    "stabilityStatusAt": {},
    "tags": {}
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="updateserviceprimarytaskset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateServicePrimaryTaskSetResponse](#schemaupdateserviceprimarytasksetresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ClusterNotFoundException|[ClusterNotFoundException](#schemaclusternotfoundexception)|
|484|484|UnsupportedFeatureException|[UnsupportedFeatureException](#schemaunsupportedfeatureexception)|
|485|485|ServiceNotFoundException|[ServiceNotFoundException](#schemaservicenotfoundexception)|
|486|486|ServiceNotActiveException|[ServiceNotActiveException](#schemaservicenotactiveexception)|
|487|487|TaskSetNotFoundException|[TaskSetNotFoundException](#schematasksetnotfoundexception)|
|488|488|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateTaskProtection

<a id="opIdUpdateTaskProtection"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateTaskProtection' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.UpdateTaskProtection' \
  -d '{
    "cluster": {},
    "tasks": {},
    "protectionEnabled": {},
    "expiresInMinutes": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateTaskProtection`

<p>Updates the protection status of a task. You can set <code>protectionEnabled</code> to <code>true</code> to protect your task from termination during scale-in events from <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-auto-scaling.html">Service Autoscaling</a> or <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">deployments</a>.</p> <p>Task-protection, by default, expires after 2 hours at which point Amazon ECS clears the <code>protectionEnabled</code> property making the task eligible for termination by a subsequent scale-in event.</p> <p>You can specify a custom expiration period for task protection from 1 minute to up to 2,880 minutes (48 hours). To specify the custom expiration period, set the <code>expiresInMinutes</code> property. The <code>expiresInMinutes</code> property is always reset when you invoke this operation for a task that already has <code>protectionEnabled</code> set to <code>true</code>. You can keep extending the protection expiration period of a task by invoking this operation repeatedly.</p> <p>To learn more about Amazon ECS task protection, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-scale-in-protection.html">Task scale-in protection</a> in the <i> <i>Amazon Elastic Container Service Developer Guide</i> </i>.</p> <note> <p>This operation is only supported for tasks belonging to an Amazon ECS service. Invoking this operation for a standalone task will result in an <code>TASK_NOT_VALID</code> failure. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/api_failures_messages.html">API failure reasons</a>.</p> </note> <important> <p>If you prefer to set task protection from within the container, we recommend using the <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-scale-in-protection-endpoint.html">Task scale-in protection endpoint</a>.</p> </important>

> Body parameter

```json
{
  "cluster": {},
  "tasks": {},
  "protectionEnabled": {},
  "expiresInMinutes": {}
}
```

<h3 id="updatetaskprotection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateTaskProtectionRequest](#schemaupdatetaskprotectionrequest)|true|none|
|» cluster|body|object|true|none|
|» tasks|body|object|true|none|
|» protectionEnabled|body|object|true|none|
|» expiresInMinutes|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.UpdateTaskProtection|

> Example responses

> 200 Response

```json
{
  "failures": [],
  "protectedTasks": [
    {
      "protectionEnabled": false,
      "taskArn": "arn:aws:ecs:us-west-2:012345678910:task/b8b1cf532d0e46ba8d44a40d1de16772"
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="updatetaskprotection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateTaskProtectionResponse](#schemaupdatetaskprotectionresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ClusterNotFoundException|[ClusterNotFoundException](#schemaclusternotfoundexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ServerException|[ServerException](#schemaserverexception)|
|486|486|UnsupportedFeatureException|[UnsupportedFeatureException](#schemaunsupportedfeatureexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateTaskSet

<a id="opIdUpdateTaskSet"></a>

> Code samples

```bash
curl 'https://ecs.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateTaskSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerServiceV20141113.UpdateTaskSet' \
  -d '{
    "cluster": {},
    "service": {},
    "taskSet": {},
    "scale": {
      "value": {},
      "unit": {}
    }
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateTaskSet`

Modifies a task set. This is used when a service uses the <code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.

> Body parameter

```json
{
  "cluster": {},
  "service": {},
  "taskSet": {},
  "scale": {
    "value": {},
    "unit": {}
  }
}
```

<h3 id="updatetaskset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateTaskSetRequest](#schemaupdatetasksetrequest)|true|none|
|» cluster|body|object|true|none|
|» service|body|object|true|none|
|» taskSet|body|object|true|none|
|» scale|body|object|true|none|
|» » value|body|object|false|none|
|» » unit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerServiceV20141113.UpdateTaskSet|

> Example responses

> 200 Response

```json
{
  "taskSet": {
    "id": {},
    "taskSetArn": {},
    "serviceArn": {},
    "clusterArn": {},
    "startedBy": {},
    "externalId": {},
    "status": {},
    "taskDefinition": {},
    "computedDesiredCount": {},
    "pendingCount": {},
    "runningCount": {},
    "createdAt": {},
    "updatedAt": {},
    "launchType": {},
    "capacityProviderStrategy": {},
    "platformVersion": {},
    "platformFamily": {},
    "networkConfiguration": {
      "awsvpcConfiguration": {
        "subnets": {},
        "securityGroups": {},
        "assignPublicIp": {}
      }
    },
    "loadBalancers": {},
    "serviceRegistries": {},
    "scale": {
      "value": {},
      "unit": {}
    },
    "stabilityStatus": {},
    "stabilityStatusAt": {},
    "tags": {}
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="updatetaskset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateTaskSetResponse](#schemaupdatetasksetresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ClusterNotFoundException|[ClusterNotFoundException](#schemaclusternotfoundexception)|
|484|484|UnsupportedFeatureException|[UnsupportedFeatureException](#schemaunsupportedfeatureexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ServiceNotFoundException|[ServiceNotFoundException](#schemaservicenotfoundexception)|
|487|487|ServiceNotActiveException|[ServiceNotActiveException](#schemaservicenotactiveexception)|
|488|488|TaskSetNotFoundException|[TaskSetNotFoundException](#schematasksetnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateCapacityProviderResponse">CreateCapacityProviderResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatecapacityproviderresponse"></a>
<a id="schema_CreateCapacityProviderResponse"></a>
<a id="tocScreatecapacityproviderresponse"></a>
<a id="tocscreatecapacityproviderresponse"></a>

```json
{
  "capacityProvider": {
    "capacityProviderArn": {},
    "name": {},
    "status": {},
    "autoScalingGroupProvider": {
      "autoScalingGroupArn": {},
      "managedScaling": {
        "status": {},
        "targetCapacity": {},
        "minimumScalingStepSize": {},
        "maximumScalingStepSize": {},
        "instanceWarmupPeriod": {}
      },
      "managedTerminationProtection": {}
    },
    "updateStatus": {},
    "updateStatusReason": {},
    "tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capacityProvider|object|false|none|none|

<h2 id="tocS_CreateCapacityProviderRequest">CreateCapacityProviderRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecapacityproviderrequest"></a>
<a id="schema_CreateCapacityProviderRequest"></a>
<a id="tocScreatecapacityproviderrequest"></a>
<a id="tocscreatecapacityproviderrequest"></a>

```json
{
  "name": {},
  "autoScalingGroupProvider": {
    "autoScalingGroupArn": {},
    "managedScaling": {
      "status": {},
      "targetCapacity": {},
      "minimumScalingStepSize": {},
      "maximumScalingStepSize": {},
      "instanceWarmupPeriod": {}
    },
    "managedTerminationProtection": {}
  },
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|autoScalingGroupProvider|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_ServerException">ServerException</h2>
<!-- backwards compatibility -->
<a id="schemaserverexception"></a>
<a id="schema_ServerException"></a>
<a id="tocSserverexception"></a>
<a id="tocsserverexception"></a>

```json
null
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

<h2 id="tocS_InvalidParameterException">InvalidParameterException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidparameterexception"></a>
<a id="schema_InvalidParameterException"></a>
<a id="tocSinvalidparameterexception"></a>
<a id="tocsinvalidparameterexception"></a>

```json
null
```

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

```json
null
```

<h2 id="tocS_UpdateInProgressException">UpdateInProgressException</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinprogressexception"></a>
<a id="schema_UpdateInProgressException"></a>
<a id="tocSupdateinprogressexception"></a>
<a id="tocsupdateinprogressexception"></a>

```json
null
```

<h2 id="tocS_CreateClusterResponse">CreateClusterResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateclusterresponse"></a>
<a id="schema_CreateClusterResponse"></a>
<a id="tocScreateclusterresponse"></a>
<a id="tocscreateclusterresponse"></a>

```json
{
  "cluster": {
    "activeServicesCount": 0,
    "clusterArn": "arn:aws:ecs:us-east-1:012345678910:cluster/my_cluster",
    "clusterName": "my_cluster",
    "pendingTasksCount": 0,
    "registeredContainerInstancesCount": 0,
    "runningTasksCount": 0,
    "status": "ACTIVE"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|object|false|none|none|

<h2 id="tocS_CreateClusterRequest">CreateClusterRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateclusterrequest"></a>
<a id="schema_CreateClusterRequest"></a>
<a id="tocScreateclusterrequest"></a>
<a id="tocscreateclusterrequest"></a>

```json
{
  "clusterName": {},
  "tags": {},
  "settings": {},
  "configuration": {
    "executeCommandConfiguration": {
      "kmsKeyId": {},
      "logging": {},
      "logConfiguration": {
        "cloudWatchLogGroupName": {},
        "cloudWatchEncryptionEnabled": {},
        "s3BucketName": {},
        "s3EncryptionEnabled": {},
        "s3KeyPrefix": {}
      }
    }
  },
  "capacityProviders": {},
  "defaultCapacityProviderStrategy": {},
  "serviceConnectDefaults": {
    "namespace": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterName|object|false|none|none|
|tags|object|false|none|none|
|settings|object|false|none|none|
|configuration|object|false|none|none|
|capacityProviders|object|false|none|none|
|defaultCapacityProviderStrategy|object|false|none|none|
|serviceConnectDefaults|object|false|none|none|

<h2 id="tocS_NamespaceNotFoundException">NamespaceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemanamespacenotfoundexception"></a>
<a id="schema_NamespaceNotFoundException"></a>
<a id="tocSnamespacenotfoundexception"></a>
<a id="tocsnamespacenotfoundexception"></a>

```json
null
```

<h2 id="tocS_CreateServiceResponse">CreateServiceResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateserviceresponse"></a>
<a id="schema_CreateServiceResponse"></a>
<a id="tocScreateserviceresponse"></a>
<a id="tocscreateserviceresponse"></a>

```json
{
  "service": {
    "clusterArn": "arn:aws:ecs:us-east-1:012345678910:cluster/default",
    "createdAt": "2016-08-29T16:02:54.884Z",
    "deploymentConfiguration": {
      "maximumPercent": 200,
      "minimumHealthyPercent": 100
    },
    "deployments": [
      {
        "createdAt": "2016-08-29T16:02:54.884Z",
        "desiredCount": 10,
        "id": "ecs-svc/9223370564343000923",
        "pendingCount": 0,
        "runningCount": 0,
        "status": "PRIMARY",
        "taskDefinition": "arn:aws:ecs:us-east-1:012345678910:task-definition/console-sample-app-static:6",
        "updatedAt": "2016-08-29T16:02:54.884Z"
      }
    ],
    "desiredCount": 10,
    "events": [],
    "loadBalancers": [
      {
        "containerName": "simple-app",
        "containerPort": 80,
        "loadBalancerName": "EC2Contai-EcsElast-15DCDAURT3ZO2"
      }
    ],
    "pendingCount": 0,
    "roleArn": "arn:aws:iam::012345678910:role/ecsServiceRole",
    "runningCount": 0,
    "serviceArn": "arn:aws:ecs:us-east-1:012345678910:service/ecs-simple-service-elb",
    "serviceName": "ecs-simple-service-elb",
    "status": "ACTIVE",
    "taskDefinition": "arn:aws:ecs:us-east-1:012345678910:task-definition/console-sample-app-static:6"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|service|object|false|none|none|

<h2 id="tocS_CreateServiceRequest">CreateServiceRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateservicerequest"></a>
<a id="schema_CreateServiceRequest"></a>
<a id="tocScreateservicerequest"></a>
<a id="tocscreateservicerequest"></a>

```json
{
  "cluster": {},
  "serviceName": {},
  "taskDefinition": {},
  "loadBalancers": {},
  "serviceRegistries": {},
  "desiredCount": {},
  "clientToken": {},
  "launchType": {},
  "capacityProviderStrategy": {},
  "platformVersion": {},
  "role": {},
  "deploymentConfiguration": {
    "deploymentCircuitBreaker": {
      "enable": {},
      "rollback": {}
    },
    "maximumPercent": {},
    "minimumHealthyPercent": {},
    "alarms": {
      "alarmNames": {},
      "enable": {},
      "rollback": {}
    }
  },
  "placementConstraints": {},
  "placementStrategy": {},
  "networkConfiguration": {
    "awsvpcConfiguration": {
      "subnets": {},
      "securityGroups": {},
      "assignPublicIp": {}
    }
  },
  "healthCheckGracePeriodSeconds": {},
  "schedulingStrategy": {},
  "deploymentController": {
    "type": {}
  },
  "tags": {},
  "enableECSManagedTags": {},
  "propagateTags": {},
  "enableExecuteCommand": {},
  "serviceConnectConfiguration": {
    "enabled": {},
    "namespace": {},
    "services": {},
    "logConfiguration": {
      "logDriver": {},
      "options": {
        "property1": "string",
        "property2": "string"
      },
      "secretOptions": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|object|false|none|none|
|serviceName|object|true|none|none|
|taskDefinition|object|false|none|none|
|loadBalancers|object|false|none|none|
|serviceRegistries|object|false|none|none|
|desiredCount|object|false|none|none|
|clientToken|object|false|none|none|
|launchType|object|false|none|none|
|capacityProviderStrategy|object|false|none|none|
|platformVersion|object|false|none|none|
|role|object|false|none|none|
|deploymentConfiguration|object|false|none|none|
|placementConstraints|object|false|none|none|
|placementStrategy|object|false|none|none|
|networkConfiguration|object|false|none|none|
|healthCheckGracePeriodSeconds|object|false|none|none|
|schedulingStrategy|object|false|none|none|
|deploymentController|object|false|none|none|
|tags|object|false|none|none|
|enableECSManagedTags|object|false|none|none|
|propagateTags|object|false|none|none|
|enableExecuteCommand|object|false|none|none|
|serviceConnectConfiguration|object|false|none|none|

<h2 id="tocS_ClusterNotFoundException">ClusterNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaclusternotfoundexception"></a>
<a id="schema_ClusterNotFoundException"></a>
<a id="tocSclusternotfoundexception"></a>
<a id="tocsclusternotfoundexception"></a>

```json
null
```

<h2 id="tocS_UnsupportedFeatureException">UnsupportedFeatureException</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedfeatureexception"></a>
<a id="schema_UnsupportedFeatureException"></a>
<a id="tocSunsupportedfeatureexception"></a>
<a id="tocsunsupportedfeatureexception"></a>

```json
null
```

<h2 id="tocS_PlatformUnknownException">PlatformUnknownException</h2>
<!-- backwards compatibility -->
<a id="schemaplatformunknownexception"></a>
<a id="schema_PlatformUnknownException"></a>
<a id="tocSplatformunknownexception"></a>
<a id="tocsplatformunknownexception"></a>

```json
null
```

<h2 id="tocS_PlatformTaskDefinitionIncompatibilityException">PlatformTaskDefinitionIncompatibilityException</h2>
<!-- backwards compatibility -->
<a id="schemaplatformtaskdefinitionincompatibilityexception"></a>
<a id="schema_PlatformTaskDefinitionIncompatibilityException"></a>
<a id="tocSplatformtaskdefinitionincompatibilityexception"></a>
<a id="tocsplatformtaskdefinitionincompatibilityexception"></a>

```json
null
```

<h2 id="tocS_AccessDeniedException">AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedexception"></a>
<a id="schema_AccessDeniedException"></a>
<a id="tocSaccessdeniedexception"></a>
<a id="tocsaccessdeniedexception"></a>

```json
null
```

<h2 id="tocS_CreateTaskSetResponse">CreateTaskSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatetasksetresponse"></a>
<a id="schema_CreateTaskSetResponse"></a>
<a id="tocScreatetasksetresponse"></a>
<a id="tocscreatetasksetresponse"></a>

```json
{
  "taskSet": {
    "id": {},
    "taskSetArn": {},
    "serviceArn": {},
    "clusterArn": {},
    "startedBy": {},
    "externalId": {},
    "status": {},
    "taskDefinition": {},
    "computedDesiredCount": {},
    "pendingCount": {},
    "runningCount": {},
    "createdAt": {},
    "updatedAt": {},
    "launchType": {},
    "capacityProviderStrategy": {},
    "platformVersion": {},
    "platformFamily": {},
    "networkConfiguration": {
      "awsvpcConfiguration": {
        "subnets": {},
        "securityGroups": {},
        "assignPublicIp": {}
      }
    },
    "loadBalancers": {},
    "serviceRegistries": {},
    "scale": {
      "value": {},
      "unit": {}
    },
    "stabilityStatus": {},
    "stabilityStatusAt": {},
    "tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskSet|object|false|none|none|

<h2 id="tocS_CreateTaskSetRequest">CreateTaskSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatetasksetrequest"></a>
<a id="schema_CreateTaskSetRequest"></a>
<a id="tocScreatetasksetrequest"></a>
<a id="tocscreatetasksetrequest"></a>

```json
{
  "service": {},
  "cluster": {},
  "externalId": {},
  "taskDefinition": {},
  "networkConfiguration": {
    "awsvpcConfiguration": {
      "subnets": {},
      "securityGroups": {},
      "assignPublicIp": {}
    }
  },
  "loadBalancers": {},
  "serviceRegistries": {},
  "launchType": {},
  "capacityProviderStrategy": {},
  "platformVersion": {},
  "scale": {
    "value": {},
    "unit": {}
  },
  "clientToken": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|service|object|true|none|none|
|cluster|object|true|none|none|
|externalId|object|false|none|none|
|taskDefinition|object|true|none|none|
|networkConfiguration|object|false|none|none|
|loadBalancers|object|false|none|none|
|serviceRegistries|object|false|none|none|
|launchType|object|false|none|none|
|capacityProviderStrategy|object|false|none|none|
|platformVersion|object|false|none|none|
|scale|object|false|none|none|
|clientToken|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_ServiceNotFoundException">ServiceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaservicenotfoundexception"></a>
<a id="schema_ServiceNotFoundException"></a>
<a id="tocSservicenotfoundexception"></a>
<a id="tocsservicenotfoundexception"></a>

```json
null
```

<h2 id="tocS_ServiceNotActiveException">ServiceNotActiveException</h2>
<!-- backwards compatibility -->
<a id="schemaservicenotactiveexception"></a>
<a id="schema_ServiceNotActiveException"></a>
<a id="tocSservicenotactiveexception"></a>
<a id="tocsservicenotactiveexception"></a>

```json
null
```

<h2 id="tocS_DeleteAccountSettingResponse">DeleteAccountSettingResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteaccountsettingresponse"></a>
<a id="schema_DeleteAccountSettingResponse"></a>
<a id="tocSdeleteaccountsettingresponse"></a>
<a id="tocsdeleteaccountsettingresponse"></a>

```json
{
  "setting": {
    "name": "containerInstanceLongArnFormat",
    "value": "enabled",
    "principalArn": "arn:aws:iam::<aws_account_id>:user/principalName"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|setting|object|false|none|none|

<h2 id="tocS_DeleteAccountSettingRequest">DeleteAccountSettingRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteaccountsettingrequest"></a>
<a id="schema_DeleteAccountSettingRequest"></a>
<a id="tocSdeleteaccountsettingrequest"></a>
<a id="tocsdeleteaccountsettingrequest"></a>

```json
{
  "name": {},
  "principalArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|principalArn|object|false|none|none|

<h2 id="tocS_DeleteAttributesResponse">DeleteAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteattributesresponse"></a>
<a id="schema_DeleteAttributesResponse"></a>
<a id="tocSdeleteattributesresponse"></a>
<a id="tocsdeleteattributesresponse"></a>

```json
{
  "attributes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|none|

<h2 id="tocS_DeleteAttributesRequest">DeleteAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteattributesrequest"></a>
<a id="schema_DeleteAttributesRequest"></a>
<a id="tocSdeleteattributesrequest"></a>
<a id="tocsdeleteattributesrequest"></a>

```json
{
  "cluster": {},
  "attributes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|object|false|none|none|
|attributes|object|true|none|none|

<h2 id="tocS_TargetNotFoundException">TargetNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schematargetnotfoundexception"></a>
<a id="schema_TargetNotFoundException"></a>
<a id="tocStargetnotfoundexception"></a>
<a id="tocstargetnotfoundexception"></a>

```json
null
```

<h2 id="tocS_DeleteCapacityProviderResponse">DeleteCapacityProviderResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletecapacityproviderresponse"></a>
<a id="schema_DeleteCapacityProviderResponse"></a>
<a id="tocSdeletecapacityproviderresponse"></a>
<a id="tocsdeletecapacityproviderresponse"></a>

```json
{
  "capacityProvider": {
    "capacityProviderArn": {},
    "name": {},
    "status": {},
    "autoScalingGroupProvider": {
      "autoScalingGroupArn": {},
      "managedScaling": {
        "status": {},
        "targetCapacity": {},
        "minimumScalingStepSize": {},
        "maximumScalingStepSize": {},
        "instanceWarmupPeriod": {}
      },
      "managedTerminationProtection": {}
    },
    "updateStatus": {},
    "updateStatusReason": {},
    "tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capacityProvider|object|false|none|none|

<h2 id="tocS_DeleteCapacityProviderRequest">DeleteCapacityProviderRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletecapacityproviderrequest"></a>
<a id="schema_DeleteCapacityProviderRequest"></a>
<a id="tocSdeletecapacityproviderrequest"></a>
<a id="tocsdeletecapacityproviderrequest"></a>

```json
{
  "capacityProvider": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capacityProvider|object|true|none|none|

<h2 id="tocS_DeleteClusterResponse">DeleteClusterResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteclusterresponse"></a>
<a id="schema_DeleteClusterResponse"></a>
<a id="tocSdeleteclusterresponse"></a>
<a id="tocsdeleteclusterresponse"></a>

```json
{
  "cluster": {
    "activeServicesCount": 0,
    "clusterArn": "arn:aws:ecs:us-east-1:012345678910:cluster/my_cluster",
    "clusterName": "my_cluster",
    "pendingTasksCount": 0,
    "registeredContainerInstancesCount": 0,
    "runningTasksCount": 0,
    "status": "INACTIVE"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|object|false|none|none|

<h2 id="tocS_DeleteClusterRequest">DeleteClusterRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteclusterrequest"></a>
<a id="schema_DeleteClusterRequest"></a>
<a id="tocSdeleteclusterrequest"></a>
<a id="tocsdeleteclusterrequest"></a>

```json
{
  "cluster": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|object|true|none|none|

<h2 id="tocS_ClusterContainsContainerInstancesException">ClusterContainsContainerInstancesException</h2>
<!-- backwards compatibility -->
<a id="schemaclustercontainscontainerinstancesexception"></a>
<a id="schema_ClusterContainsContainerInstancesException"></a>
<a id="tocSclustercontainscontainerinstancesexception"></a>
<a id="tocsclustercontainscontainerinstancesexception"></a>

```json
null
```

<h2 id="tocS_ClusterContainsServicesException">ClusterContainsServicesException</h2>
<!-- backwards compatibility -->
<a id="schemaclustercontainsservicesexception"></a>
<a id="schema_ClusterContainsServicesException"></a>
<a id="tocSclustercontainsservicesexception"></a>
<a id="tocsclustercontainsservicesexception"></a>

```json
null
```

<h2 id="tocS_ClusterContainsTasksException">ClusterContainsTasksException</h2>
<!-- backwards compatibility -->
<a id="schemaclustercontainstasksexception"></a>
<a id="schema_ClusterContainsTasksException"></a>
<a id="tocSclustercontainstasksexception"></a>
<a id="tocsclustercontainstasksexception"></a>

```json
null
```

<h2 id="tocS_DeleteServiceResponse">DeleteServiceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteserviceresponse"></a>
<a id="schema_DeleteServiceResponse"></a>
<a id="tocSdeleteserviceresponse"></a>
<a id="tocsdeleteserviceresponse"></a>

```json
{}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|service|object|false|none|none|

<h2 id="tocS_DeleteServiceRequest">DeleteServiceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteservicerequest"></a>
<a id="schema_DeleteServiceRequest"></a>
<a id="tocSdeleteservicerequest"></a>
<a id="tocsdeleteservicerequest"></a>

```json
{
  "cluster": {},
  "service": {},
  "force": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|object|false|none|none|
|service|object|true|none|none|
|force|object|false|none|none|

<h2 id="tocS_DeleteTaskDefinitionsResponse">DeleteTaskDefinitionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletetaskdefinitionsresponse"></a>
<a id="schema_DeleteTaskDefinitionsResponse"></a>
<a id="tocSdeletetaskdefinitionsresponse"></a>
<a id="tocsdeletetaskdefinitionsresponse"></a>

```json
{
  "taskDefinitions": {},
  "failures": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskDefinitions|object|false|none|none|
|failures|object|false|none|none|

<h2 id="tocS_DeleteTaskDefinitionsRequest">DeleteTaskDefinitionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletetaskdefinitionsrequest"></a>
<a id="schema_DeleteTaskDefinitionsRequest"></a>
<a id="tocSdeletetaskdefinitionsrequest"></a>
<a id="tocsdeletetaskdefinitionsrequest"></a>

```json
{
  "taskDefinitions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskDefinitions|object|true|none|none|

<h2 id="tocS_DeleteTaskSetResponse">DeleteTaskSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletetasksetresponse"></a>
<a id="schema_DeleteTaskSetResponse"></a>
<a id="tocSdeletetasksetresponse"></a>
<a id="tocsdeletetasksetresponse"></a>

```json
{
  "taskSet": {
    "id": {},
    "taskSetArn": {},
    "serviceArn": {},
    "clusterArn": {},
    "startedBy": {},
    "externalId": {},
    "status": {},
    "taskDefinition": {},
    "computedDesiredCount": {},
    "pendingCount": {},
    "runningCount": {},
    "createdAt": {},
    "updatedAt": {},
    "launchType": {},
    "capacityProviderStrategy": {},
    "platformVersion": {},
    "platformFamily": {},
    "networkConfiguration": {
      "awsvpcConfiguration": {
        "subnets": {},
        "securityGroups": {},
        "assignPublicIp": {}
      }
    },
    "loadBalancers": {},
    "serviceRegistries": {},
    "scale": {
      "value": {},
      "unit": {}
    },
    "stabilityStatus": {},
    "stabilityStatusAt": {},
    "tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskSet|object|false|none|none|

<h2 id="tocS_DeleteTaskSetRequest">DeleteTaskSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletetasksetrequest"></a>
<a id="schema_DeleteTaskSetRequest"></a>
<a id="tocSdeletetasksetrequest"></a>
<a id="tocsdeletetasksetrequest"></a>

```json
{
  "cluster": {},
  "service": {},
  "taskSet": {},
  "force": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|object|true|none|none|
|service|object|true|none|none|
|taskSet|object|true|none|none|
|force|object|false|none|none|

<h2 id="tocS_TaskSetNotFoundException">TaskSetNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schematasksetnotfoundexception"></a>
<a id="schema_TaskSetNotFoundException"></a>
<a id="tocStasksetnotfoundexception"></a>
<a id="tocstasksetnotfoundexception"></a>

```json
null
```

<h2 id="tocS_DeregisterContainerInstanceResponse">DeregisterContainerInstanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaderegistercontainerinstanceresponse"></a>
<a id="schema_DeregisterContainerInstanceResponse"></a>
<a id="tocSderegistercontainerinstanceresponse"></a>
<a id="tocsderegistercontainerinstanceresponse"></a>

```json
{}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containerInstance|object|false|none|none|

<h2 id="tocS_DeregisterContainerInstanceRequest">DeregisterContainerInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaderegistercontainerinstancerequest"></a>
<a id="schema_DeregisterContainerInstanceRequest"></a>
<a id="tocSderegistercontainerinstancerequest"></a>
<a id="tocsderegistercontainerinstancerequest"></a>

```json
{
  "cluster": {},
  "containerInstance": {},
  "force": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|object|false|none|none|
|containerInstance|object|true|none|none|
|force|object|false|none|none|

<h2 id="tocS_DeregisterTaskDefinitionResponse">DeregisterTaskDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaderegistertaskdefinitionresponse"></a>
<a id="schema_DeregisterTaskDefinitionResponse"></a>
<a id="tocSderegistertaskdefinitionresponse"></a>
<a id="tocsderegistertaskdefinitionresponse"></a>

```json
{
  "taskDefinition": {
    "taskDefinitionArn": {},
    "containerDefinitions": {},
    "family": {},
    "taskRoleArn": {},
    "executionRoleArn": {},
    "networkMode": {},
    "revision": {},
    "volumes": {},
    "status": {},
    "requiresAttributes": {},
    "placementConstraints": {},
    "compatibilities": {},
    "runtimePlatform": {
      "cpuArchitecture": {},
      "operatingSystemFamily": {}
    },
    "requiresCompatibilities": {},
    "cpu": {},
    "memory": {},
    "inferenceAccelerators": {},
    "pidMode": {},
    "ipcMode": {},
    "proxyConfiguration": {
      "type": {},
      "containerName": {},
      "properties": null
    },
    "registeredAt": {},
    "deregisteredAt": {},
    "registeredBy": {},
    "ephemeralStorage": {
      "sizeInGiB": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskDefinition|object|false|none|none|

<h2 id="tocS_DeregisterTaskDefinitionRequest">DeregisterTaskDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaderegistertaskdefinitionrequest"></a>
<a id="schema_DeregisterTaskDefinitionRequest"></a>
<a id="tocSderegistertaskdefinitionrequest"></a>
<a id="tocsderegistertaskdefinitionrequest"></a>

```json
{
  "taskDefinition": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskDefinition|object|true|none|none|

<h2 id="tocS_DescribeCapacityProvidersResponse">DescribeCapacityProvidersResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribecapacityprovidersresponse"></a>
<a id="schema_DescribeCapacityProvidersResponse"></a>
<a id="tocSdescribecapacityprovidersresponse"></a>
<a id="tocsdescribecapacityprovidersresponse"></a>

```json
{
  "capacityProviders": {},
  "failures": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capacityProviders|object|false|none|none|
|failures|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribeCapacityProvidersRequest">DescribeCapacityProvidersRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribecapacityprovidersrequest"></a>
<a id="schema_DescribeCapacityProvidersRequest"></a>
<a id="tocSdescribecapacityprovidersrequest"></a>
<a id="tocsdescribecapacityprovidersrequest"></a>

```json
{
  "capacityProviders": {},
  "include": {},
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capacityProviders|object|false|none|none|
|include|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribeClustersResponse">DescribeClustersResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeclustersresponse"></a>
<a id="schema_DescribeClustersResponse"></a>
<a id="tocSdescribeclustersresponse"></a>
<a id="tocsdescribeclustersresponse"></a>

```json
{
  "clusters": [
    {
      "clusterArn": "arn:aws:ecs:us-east-1:aws_account_id:cluster/default",
      "clusterName": "default",
      "status": "ACTIVE"
    }
  ],
  "failures": []
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusters|object|false|none|none|
|failures|object|false|none|none|

<h2 id="tocS_DescribeClustersRequest">DescribeClustersRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeclustersrequest"></a>
<a id="schema_DescribeClustersRequest"></a>
<a id="tocSdescribeclustersrequest"></a>
<a id="tocsdescribeclustersrequest"></a>

```json
{
  "clusters": {},
  "include": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusters|object|false|none|none|
|include|object|false|none|none|

<h2 id="tocS_DescribeContainerInstancesResponse">DescribeContainerInstancesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribecontainerinstancesresponse"></a>
<a id="schema_DescribeContainerInstancesResponse"></a>
<a id="tocSdescribecontainerinstancesresponse"></a>
<a id="tocsdescribecontainerinstancesresponse"></a>

```json
{
  "containerInstances": [
    {
      "agentConnected": true,
      "containerInstanceArn": "arn:aws:ecs:us-east-1:012345678910:container-instance/f2756532-8f13-4d53-87c9-aed50dc94cd7",
      "ec2InstanceId": "i-807f3249",
      "pendingTasksCount": 0,
      "registeredResources": [
        {
          "name": "CPU",
          "type": "INTEGER",
          "doubleValue": 0,
          "integerValue": 2048,
          "longValue": 0
        },
        {
          "name": "MEMORY",
          "type": "INTEGER",
          "doubleValue": 0,
          "integerValue": 3768,
          "longValue": 0
        },
        {
          "name": "PORTS",
          "type": "STRINGSET",
          "doubleValue": 0,
          "integerValue": 0,
          "longValue": 0,
          "stringSetValue": [
            "2376",
            "22",
            "51678",
            "2375"
          ]
        }
      ],
      "remainingResources": [
        {
          "name": "CPU",
          "type": "INTEGER",
          "doubleValue": 0,
          "integerValue": 1948,
          "longValue": 0
        },
        {
          "name": "MEMORY",
          "type": "INTEGER",
          "doubleValue": 0,
          "integerValue": 3668,
          "longValue": 0
        },
        {
          "name": "PORTS",
          "type": "STRINGSET",
          "doubleValue": 0,
          "integerValue": 0,
          "longValue": 0,
          "stringSetValue": [
            "2376",
            "22",
            "80",
            "51678",
            "2375"
          ]
        }
      ],
      "runningTasksCount": 1,
      "status": "ACTIVE"
    }
  ],
  "failures": []
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containerInstances|object|false|none|none|
|failures|object|false|none|none|

<h2 id="tocS_DescribeContainerInstancesRequest">DescribeContainerInstancesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribecontainerinstancesrequest"></a>
<a id="schema_DescribeContainerInstancesRequest"></a>
<a id="tocSdescribecontainerinstancesrequest"></a>
<a id="tocsdescribecontainerinstancesrequest"></a>

```json
{
  "cluster": {},
  "containerInstances": {},
  "include": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|object|false|none|none|
|containerInstances|object|true|none|none|
|include|object|false|none|none|

<h2 id="tocS_DescribeServicesResponse">DescribeServicesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeservicesresponse"></a>
<a id="schema_DescribeServicesResponse"></a>
<a id="tocSdescribeservicesresponse"></a>
<a id="tocsdescribeservicesresponse"></a>

```json
{
  "failures": [],
  "services": [
    {
      "clusterArn": "arn:aws:ecs:us-east-1:012345678910:cluster/default",
      "createdAt": "2016-08-29T16:25:52.130Z",
      "deploymentConfiguration": {
        "maximumPercent": 200,
        "minimumHealthyPercent": 100
      },
      "deployments": [
        {
          "createdAt": "2016-08-29T16:25:52.130Z",
          "desiredCount": 1,
          "id": "ecs-svc/9223370564341623665",
          "pendingCount": 0,
          "runningCount": 0,
          "status": "PRIMARY",
          "taskDefinition": "arn:aws:ecs:us-east-1:012345678910:task-definition/hello_world:6",
          "updatedAt": "2016-08-29T16:25:52.130Z"
        }
      ],
      "desiredCount": 1,
      "events": [
        {
          "createdAt": "2016-08-29T16:25:58.520Z",
          "id": "38c285e5-d335-4b68-8b15-e46dedc8e88d",
          "message": "(service ecs-simple-service) was unable to place a task because no container instance met all of its requirements. The closest matching (container-instance 3f4de1c5-ffdd-4954-af7e-75b4be0c8841) is already using a port required by your task. For more information, see the Troubleshooting section of the Amazon ECS Developer Guide."
        }
      ],
      "loadBalancers": [],
      "pendingCount": 0,
      "runningCount": 0,
      "serviceArn": "arn:aws:ecs:us-east-1:012345678910:service/ecs-simple-service",
      "serviceName": "ecs-simple-service",
      "status": "ACTIVE",
      "taskDefinition": "arn:aws:ecs:us-east-1:012345678910:task-definition/hello_world:6"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|services|object|false|none|none|
|failures|object|false|none|none|

<h2 id="tocS_DescribeServicesRequest">DescribeServicesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeservicesrequest"></a>
<a id="schema_DescribeServicesRequest"></a>
<a id="tocSdescribeservicesrequest"></a>
<a id="tocsdescribeservicesrequest"></a>

```json
{
  "cluster": {},
  "services": {},
  "include": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|object|false|none|none|
|services|object|true|none|none|
|include|object|false|none|none|

<h2 id="tocS_DescribeTaskDefinitionResponse">DescribeTaskDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribetaskdefinitionresponse"></a>
<a id="schema_DescribeTaskDefinitionResponse"></a>
<a id="tocSdescribetaskdefinitionresponse"></a>
<a id="tocsdescribetaskdefinitionresponse"></a>

```json
{
  "taskDefinition": {
    "containerDefinitions": [
      {
        "name": "wordpress",
        "cpu": 10,
        "environment": [],
        "essential": true,
        "image": "wordpress",
        "links": [
          "mysql"
        ],
        "memory": 500,
        "mountPoints": [],
        "portMappings": [
          {
            "containerPort": 80,
            "hostPort": 80
          }
        ],
        "volumesFrom": []
      },
      {
        "name": "mysql",
        "cpu": 10,
        "environment": [
          {
            "name": "MYSQL_ROOT_PASSWORD",
            "value": "password"
          }
        ],
        "essential": true,
        "image": "mysql",
        "memory": 500,
        "mountPoints": [],
        "portMappings": [],
        "volumesFrom": []
      }
    ],
    "family": "hello_world",
    "revision": 8,
    "taskDefinitionArn": "arn:aws:ecs:us-east-1:<aws_account_id>:task-definition/hello_world:8",
    "volumes": []
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskDefinition|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_DescribeTaskDefinitionRequest">DescribeTaskDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribetaskdefinitionrequest"></a>
<a id="schema_DescribeTaskDefinitionRequest"></a>
<a id="tocSdescribetaskdefinitionrequest"></a>
<a id="tocsdescribetaskdefinitionrequest"></a>

```json
{
  "taskDefinition": {},
  "include": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskDefinition|object|true|none|none|
|include|object|false|none|none|

<h2 id="tocS_DescribeTaskSetsResponse">DescribeTaskSetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribetasksetsresponse"></a>
<a id="schema_DescribeTaskSetsResponse"></a>
<a id="tocSdescribetasksetsresponse"></a>
<a id="tocsdescribetasksetsresponse"></a>

```json
{
  "taskSets": {},
  "failures": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskSets|object|false|none|none|
|failures|object|false|none|none|

<h2 id="tocS_DescribeTaskSetsRequest">DescribeTaskSetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribetasksetsrequest"></a>
<a id="schema_DescribeTaskSetsRequest"></a>
<a id="tocSdescribetasksetsrequest"></a>
<a id="tocsdescribetasksetsrequest"></a>

```json
{
  "cluster": {},
  "service": {},
  "taskSets": {},
  "include": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|object|true|none|none|
|service|object|true|none|none|
|taskSets|object|false|none|none|
|include|object|false|none|none|

<h2 id="tocS_DescribeTasksResponse">DescribeTasksResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribetasksresponse"></a>
<a id="schema_DescribeTasksResponse"></a>
<a id="tocSdescribetasksresponse"></a>
<a id="tocsdescribetasksresponse"></a>

```json
{
  "failures": [],
  "tasks": [
    {
      "clusterArn": "arn:aws:ecs:<region>:<aws_account_id>:cluster/default",
      "containerInstanceArn": "arn:aws:ecs:<region>:<aws_account_id>:container-instance/18f9eda5-27d7-4c19-b133-45adc516e8fb",
      "containers": [
        {
          "name": "ecs-demo",
          "containerArn": "arn:aws:ecs:<region>:<aws_account_id>:container/7c01765b-c588-45b3-8290-4ba38bd6c5a6",
          "lastStatus": "RUNNING",
          "networkBindings": [
            {
              "bindIP": "0.0.0.0",
              "containerPort": 80,
              "hostPort": 80
            }
          ],
          "taskArn": "arn:aws:ecs:<region>:<aws_account_id>:task/c5cba4eb-5dad-405e-96db-71ef8eefe6a8"
        }
      ],
      "desiredStatus": "RUNNING",
      "lastStatus": "RUNNING",
      "overrides": {
        "containerOverrides": [
          {
            "name": "ecs-demo"
          }
        ]
      },
      "startedBy": "ecs-svc/9223370608528463088",
      "taskArn": "arn:aws:ecs:<region>:<aws_account_id>:task/c5cba4eb-5dad-405e-96db-71ef8eefe6a8",
      "taskDefinitionArn": "arn:aws:ecs:<region>:<aws_account_id>:task-definition/amazon-ecs-sample:1"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tasks|object|false|none|none|
|failures|object|false|none|none|

<h2 id="tocS_DescribeTasksRequest">DescribeTasksRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribetasksrequest"></a>
<a id="schema_DescribeTasksRequest"></a>
<a id="tocSdescribetasksrequest"></a>
<a id="tocsdescribetasksrequest"></a>

```json
{
  "cluster": {},
  "tasks": {},
  "include": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|object|false|none|none|
|tasks|object|true|none|none|
|include|object|false|none|none|

<h2 id="tocS_DiscoverPollEndpointResponse">DiscoverPollEndpointResponse</h2>
<!-- backwards compatibility -->
<a id="schemadiscoverpollendpointresponse"></a>
<a id="schema_DiscoverPollEndpointResponse"></a>
<a id="tocSdiscoverpollendpointresponse"></a>
<a id="tocsdiscoverpollendpointresponse"></a>

```json
{
  "endpoint": {},
  "telemetryEndpoint": {},
  "serviceConnectEndpoint": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoint|object|false|none|none|
|telemetryEndpoint|object|false|none|none|
|serviceConnectEndpoint|object|false|none|none|

<h2 id="tocS_DiscoverPollEndpointRequest">DiscoverPollEndpointRequest</h2>
<!-- backwards compatibility -->
<a id="schemadiscoverpollendpointrequest"></a>
<a id="schema_DiscoverPollEndpointRequest"></a>
<a id="tocSdiscoverpollendpointrequest"></a>
<a id="tocsdiscoverpollendpointrequest"></a>

```json
{
  "containerInstance": {},
  "cluster": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containerInstance|object|false|none|none|
|cluster|object|false|none|none|

<h2 id="tocS_ExecuteCommandResponse">ExecuteCommandResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexecutecommandresponse"></a>
<a id="schema_ExecuteCommandResponse"></a>
<a id="tocSexecutecommandresponse"></a>
<a id="tocsexecutecommandresponse"></a>

```json
{
  "clusterArn": {},
  "containerArn": {},
  "containerName": {},
  "interactive": {},
  "session": {
    "sessionId": {},
    "streamUrl": {},
    "tokenValue": {}
  },
  "taskArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterArn|object|false|none|none|
|containerArn|object|false|none|none|
|containerName|object|false|none|none|
|interactive|object|false|none|none|
|session|object|false|none|none|
|taskArn|object|false|none|none|

<h2 id="tocS_ExecuteCommandRequest">ExecuteCommandRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexecutecommandrequest"></a>
<a id="schema_ExecuteCommandRequest"></a>
<a id="tocSexecutecommandrequest"></a>
<a id="tocsexecutecommandrequest"></a>

```json
{
  "cluster": {},
  "container": {},
  "command": {},
  "interactive": {},
  "task": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|object|false|none|none|
|container|object|false|none|none|
|command|object|true|none|none|
|interactive|object|true|none|none|
|task|object|true|none|none|

<h2 id="tocS_TargetNotConnectedException">TargetNotConnectedException</h2>
<!-- backwards compatibility -->
<a id="schematargetnotconnectedexception"></a>
<a id="schema_TargetNotConnectedException"></a>
<a id="tocStargetnotconnectedexception"></a>
<a id="tocstargetnotconnectedexception"></a>

```json
null
```

<h2 id="tocS_GetTaskProtectionResponse">GetTaskProtectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettaskprotectionresponse"></a>
<a id="schema_GetTaskProtectionResponse"></a>
<a id="tocSgettaskprotectionresponse"></a>
<a id="tocsgettaskprotectionresponse"></a>

```json
{
  "failures": [],
  "protectedTasks": [
    {
      "expirationDate": "2022-11-02T06:56:32.553Z",
      "protectionEnabled": true,
      "taskArn": "arn:aws:ecs:us-west-2:012345678910:task/b8b1cf532d0e46ba8d44a40d1de16772"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|protectedTasks|object|false|none|none|
|failures|object|false|none|none|

<h2 id="tocS_GetTaskProtectionRequest">GetTaskProtectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagettaskprotectionrequest"></a>
<a id="schema_GetTaskProtectionRequest"></a>
<a id="tocSgettaskprotectionrequest"></a>
<a id="tocsgettaskprotectionrequest"></a>

```json
{
  "cluster": {},
  "tasks": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|object|true|none|none|
|tasks|object|false|none|none|

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_ListAccountSettingsResponse">ListAccountSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistaccountsettingsresponse"></a>
<a id="schema_ListAccountSettingsResponse"></a>
<a id="tocSlistaccountsettingsresponse"></a>
<a id="tocslistaccountsettingsresponse"></a>

```json
{
  "settings": [
    {
      "name": "containerInstanceLongArnFormat",
      "value": "disabled",
      "principalArn": "arn:aws:iam::<aws_account_id>:user/principalName"
    },
    {
      "name": "serviceLongArnFormat",
      "value": "enabled",
      "principalArn": "arn:aws:iam::<aws_account_id>:user/principalName"
    },
    {
      "name": "taskLongArnFormat",
      "value": "disabled",
      "principalArn": "arn:aws:iam::<aws_account_id>:user/principalName"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|settings|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListAccountSettingsRequest">ListAccountSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistaccountsettingsrequest"></a>
<a id="schema_ListAccountSettingsRequest"></a>
<a id="tocSlistaccountsettingsrequest"></a>
<a id="tocslistaccountsettingsrequest"></a>

```json
{
  "name": {},
  "value": {},
  "principalArn": {},
  "effectiveSettings": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|value|object|false|none|none|
|principalArn|object|false|none|none|
|effectiveSettings|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ListAttributesResponse">ListAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistattributesresponse"></a>
<a id="schema_ListAttributesResponse"></a>
<a id="tocSlistattributesresponse"></a>
<a id="tocslistattributesresponse"></a>

```json
{
  "attributes": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListAttributesRequest">ListAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistattributesrequest"></a>
<a id="schema_ListAttributesRequest"></a>
<a id="tocSlistattributesrequest"></a>
<a id="tocslistattributesrequest"></a>

```json
{
  "cluster": {},
  "targetType": {},
  "attributeName": {},
  "attributeValue": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|object|false|none|none|
|targetType|object|true|none|none|
|attributeName|object|false|none|none|
|attributeValue|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ListClustersResponse">ListClustersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistclustersresponse"></a>
<a id="schema_ListClustersResponse"></a>
<a id="tocSlistclustersresponse"></a>
<a id="tocslistclustersresponse"></a>

```json
{
  "clusterArns": [
    "arn:aws:ecs:us-east-1:<aws_account_id>:cluster/test",
    "arn:aws:ecs:us-east-1:<aws_account_id>:cluster/default"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterArns|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListClustersRequest">ListClustersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistclustersrequest"></a>
<a id="schema_ListClustersRequest"></a>
<a id="tocSlistclustersrequest"></a>
<a id="tocslistclustersrequest"></a>

```json
{
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ListContainerInstancesResponse">ListContainerInstancesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcontainerinstancesresponse"></a>
<a id="schema_ListContainerInstancesResponse"></a>
<a id="tocSlistcontainerinstancesresponse"></a>
<a id="tocslistcontainerinstancesresponse"></a>

```json
{
  "containerInstanceArns": [
    "arn:aws:ecs:us-east-1:<aws_account_id>:container-instance/f6bbb147-5370-4ace-8c73-c7181ded911f",
    "arn:aws:ecs:us-east-1:<aws_account_id>:container-instance/ffe3d344-77e2-476c-a4d0-bf560ad50acb"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containerInstanceArns|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListContainerInstancesRequest">ListContainerInstancesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcontainerinstancesrequest"></a>
<a id="schema_ListContainerInstancesRequest"></a>
<a id="tocSlistcontainerinstancesrequest"></a>
<a id="tocslistcontainerinstancesrequest"></a>

```json
{
  "cluster": {},
  "filter": {},
  "nextToken": {},
  "maxResults": {},
  "status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|object|false|none|none|
|filter|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|
|status|object|false|none|none|

<h2 id="tocS_ListServicesResponse">ListServicesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistservicesresponse"></a>
<a id="schema_ListServicesResponse"></a>
<a id="tocSlistservicesresponse"></a>
<a id="tocslistservicesresponse"></a>

```json
{
  "serviceArns": [
    "arn:aws:ecs:us-east-1:012345678910:service/my-http-service"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceArns|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListServicesRequest">ListServicesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistservicesrequest"></a>
<a id="schema_ListServicesRequest"></a>
<a id="tocSlistservicesrequest"></a>
<a id="tocslistservicesrequest"></a>

```json
{
  "cluster": {},
  "nextToken": {},
  "maxResults": {},
  "launchType": {},
  "schedulingStrategy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|
|launchType|object|false|none|none|
|schedulingStrategy|object|false|none|none|

<h2 id="tocS_ListServicesByNamespaceResponse">ListServicesByNamespaceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistservicesbynamespaceresponse"></a>
<a id="schema_ListServicesByNamespaceResponse"></a>
<a id="tocSlistservicesbynamespaceresponse"></a>
<a id="tocslistservicesbynamespaceresponse"></a>

```json
{
  "serviceArns": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceArns|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListServicesByNamespaceRequest">ListServicesByNamespaceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistservicesbynamespacerequest"></a>
<a id="schema_ListServicesByNamespaceRequest"></a>
<a id="tocSlistservicesbynamespacerequest"></a>
<a id="tocslistservicesbynamespacerequest"></a>

```json
{
  "namespace": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|namespace|object|true|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "tags": [
    {
      "key": "team",
      "value": "dev"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|false|none|none|

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{
  "resourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceArn|object|true|none|none|

<h2 id="tocS_ListTaskDefinitionFamiliesResponse">ListTaskDefinitionFamiliesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttaskdefinitionfamiliesresponse"></a>
<a id="schema_ListTaskDefinitionFamiliesResponse"></a>
<a id="tocSlisttaskdefinitionfamiliesresponse"></a>
<a id="tocslisttaskdefinitionfamiliesresponse"></a>

```json
{
  "families": [
    "hpcc",
    "hpcc-c4-8xlarge"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|families|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListTaskDefinitionFamiliesRequest">ListTaskDefinitionFamiliesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttaskdefinitionfamiliesrequest"></a>
<a id="schema_ListTaskDefinitionFamiliesRequest"></a>
<a id="tocSlisttaskdefinitionfamiliesrequest"></a>
<a id="tocslisttaskdefinitionfamiliesrequest"></a>

```json
{
  "familyPrefix": {},
  "status": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|familyPrefix|object|false|none|none|
|status|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ListTaskDefinitionsResponse">ListTaskDefinitionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttaskdefinitionsresponse"></a>
<a id="schema_ListTaskDefinitionsResponse"></a>
<a id="tocSlisttaskdefinitionsresponse"></a>
<a id="tocslisttaskdefinitionsresponse"></a>

```json
{
  "taskDefinitionArns": [
    "arn:aws:ecs:us-east-1:<aws_account_id>:task-definition/wordpress:3",
    "arn:aws:ecs:us-east-1:<aws_account_id>:task-definition/wordpress:4",
    "arn:aws:ecs:us-east-1:<aws_account_id>:task-definition/wordpress:5",
    "arn:aws:ecs:us-east-1:<aws_account_id>:task-definition/wordpress:6"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskDefinitionArns|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListTaskDefinitionsRequest">ListTaskDefinitionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttaskdefinitionsrequest"></a>
<a id="schema_ListTaskDefinitionsRequest"></a>
<a id="tocSlisttaskdefinitionsrequest"></a>
<a id="tocslisttaskdefinitionsrequest"></a>

```json
{
  "familyPrefix": {},
  "status": {},
  "sort": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|familyPrefix|object|false|none|none|
|status|object|false|none|none|
|sort|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ListTasksResponse">ListTasksResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttasksresponse"></a>
<a id="schema_ListTasksResponse"></a>
<a id="tocSlisttasksresponse"></a>
<a id="tocslisttasksresponse"></a>

```json
{
  "taskArns": [
    "arn:aws:ecs:us-east-1:012345678910:task/0cc43cdb-3bee-4407-9c26-c0e6ea5bee84"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskArns|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListTasksRequest">ListTasksRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttasksrequest"></a>
<a id="schema_ListTasksRequest"></a>
<a id="tocSlisttasksrequest"></a>
<a id="tocslisttasksrequest"></a>

```json
{
  "cluster": {},
  "containerInstance": {},
  "family": {},
  "nextToken": {},
  "maxResults": {},
  "startedBy": {},
  "serviceName": {},
  "desiredStatus": {},
  "launchType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|object|false|none|none|
|containerInstance|object|false|none|none|
|family|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|
|startedBy|object|false|none|none|
|serviceName|object|false|none|none|
|desiredStatus|object|false|none|none|
|launchType|object|false|none|none|

<h2 id="tocS_PutAccountSettingResponse">PutAccountSettingResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputaccountsettingresponse"></a>
<a id="schema_PutAccountSettingResponse"></a>
<a id="tocSputaccountsettingresponse"></a>
<a id="tocsputaccountsettingresponse"></a>

```json
{
  "setting": {
    "name": "containerInstanceLongArnFormat",
    "value": "enabled",
    "principalArn": "arn:aws:iam::<aws_account_id>:user/principalName"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|setting|object|false|none|none|

<h2 id="tocS_PutAccountSettingRequest">PutAccountSettingRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputaccountsettingrequest"></a>
<a id="schema_PutAccountSettingRequest"></a>
<a id="tocSputaccountsettingrequest"></a>
<a id="tocsputaccountsettingrequest"></a>

```json
{
  "name": {},
  "value": {},
  "principalArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|value|object|true|none|none|
|principalArn|object|false|none|none|

<h2 id="tocS_PutAccountSettingDefaultResponse">PutAccountSettingDefaultResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputaccountsettingdefaultresponse"></a>
<a id="schema_PutAccountSettingDefaultResponse"></a>
<a id="tocSputaccountsettingdefaultresponse"></a>
<a id="tocsputaccountsettingdefaultresponse"></a>

```json
{
  "setting": {
    "name": "serviceLongArnFormat",
    "value": "enabled",
    "principalArn": "arn:aws:iam::<aws_account_id>:root"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|setting|object|false|none|none|

<h2 id="tocS_PutAccountSettingDefaultRequest">PutAccountSettingDefaultRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputaccountsettingdefaultrequest"></a>
<a id="schema_PutAccountSettingDefaultRequest"></a>
<a id="tocSputaccountsettingdefaultrequest"></a>
<a id="tocsputaccountsettingdefaultrequest"></a>

```json
{
  "name": {},
  "value": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|value|object|true|none|none|

<h2 id="tocS_PutAttributesResponse">PutAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputattributesresponse"></a>
<a id="schema_PutAttributesResponse"></a>
<a id="tocSputattributesresponse"></a>
<a id="tocsputattributesresponse"></a>

```json
{
  "attributes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|none|

<h2 id="tocS_PutAttributesRequest">PutAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputattributesrequest"></a>
<a id="schema_PutAttributesRequest"></a>
<a id="tocSputattributesrequest"></a>
<a id="tocsputattributesrequest"></a>

```json
{
  "cluster": {},
  "attributes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|object|false|none|none|
|attributes|object|true|none|none|

<h2 id="tocS_AttributeLimitExceededException">AttributeLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaattributelimitexceededexception"></a>
<a id="schema_AttributeLimitExceededException"></a>
<a id="tocSattributelimitexceededexception"></a>
<a id="tocsattributelimitexceededexception"></a>

```json
null
```

<h2 id="tocS_PutClusterCapacityProvidersResponse">PutClusterCapacityProvidersResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputclustercapacityprovidersresponse"></a>
<a id="schema_PutClusterCapacityProvidersResponse"></a>
<a id="tocSputclustercapacityprovidersresponse"></a>
<a id="tocsputclustercapacityprovidersresponse"></a>

```json
{
  "cluster": {
    "clusterArn": {},
    "clusterName": {},
    "configuration": {
      "executeCommandConfiguration": {
        "kmsKeyId": {},
        "logging": {},
        "logConfiguration": {
          "cloudWatchLogGroupName": {},
          "cloudWatchEncryptionEnabled": {},
          "s3BucketName": {},
          "s3EncryptionEnabled": {},
          "s3KeyPrefix": {}
        }
      }
    },
    "status": {},
    "registeredContainerInstancesCount": {},
    "runningTasksCount": {},
    "pendingTasksCount": {},
    "activeServicesCount": {},
    "statistics": {},
    "tags": {},
    "settings": {},
    "capacityProviders": {},
    "defaultCapacityProviderStrategy": {},
    "attachments": {},
    "attachmentsStatus": {},
    "serviceConnectDefaults": {
      "namespace": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|object|false|none|none|

<h2 id="tocS_PutClusterCapacityProvidersRequest">PutClusterCapacityProvidersRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputclustercapacityprovidersrequest"></a>
<a id="schema_PutClusterCapacityProvidersRequest"></a>
<a id="tocSputclustercapacityprovidersrequest"></a>
<a id="tocsputclustercapacityprovidersrequest"></a>

```json
{
  "cluster": {},
  "capacityProviders": {},
  "defaultCapacityProviderStrategy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|object|true|none|none|
|capacityProviders|object|true|none|none|
|defaultCapacityProviderStrategy|object|true|none|none|

<h2 id="tocS_ResourceInUseException">ResourceInUseException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceinuseexception"></a>
<a id="schema_ResourceInUseException"></a>
<a id="tocSresourceinuseexception"></a>
<a id="tocsresourceinuseexception"></a>

```json
null
```

<h2 id="tocS_RegisterContainerInstanceResponse">RegisterContainerInstanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaregistercontainerinstanceresponse"></a>
<a id="schema_RegisterContainerInstanceResponse"></a>
<a id="tocSregistercontainerinstanceresponse"></a>
<a id="tocsregistercontainerinstanceresponse"></a>

```json
{
  "containerInstance": {
    "containerInstanceArn": {},
    "ec2InstanceId": {},
    "capacityProviderName": {},
    "version": {},
    "versionInfo": {
      "agentVersion": {},
      "agentHash": {},
      "dockerVersion": {}
    },
    "remainingResources": {},
    "registeredResources": {},
    "status": {},
    "statusReason": {},
    "agentConnected": {},
    "runningTasksCount": {},
    "pendingTasksCount": {},
    "agentUpdateStatus": {},
    "attributes": {},
    "registeredAt": {},
    "attachments": {},
    "tags": {},
    "healthStatus": {
      "overallStatus": {},
      "details": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containerInstance|object|false|none|none|

<h2 id="tocS_RegisterContainerInstanceRequest">RegisterContainerInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaregistercontainerinstancerequest"></a>
<a id="schema_RegisterContainerInstanceRequest"></a>
<a id="tocSregistercontainerinstancerequest"></a>
<a id="tocsregistercontainerinstancerequest"></a>

```json
{
  "cluster": {},
  "instanceIdentityDocument": {},
  "instanceIdentityDocumentSignature": {},
  "totalResources": {},
  "versionInfo": {
    "agentVersion": {},
    "agentHash": {},
    "dockerVersion": {}
  },
  "containerInstanceArn": {},
  "attributes": {},
  "platformDevices": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|object|false|none|none|
|instanceIdentityDocument|object|false|none|none|
|instanceIdentityDocumentSignature|object|false|none|none|
|totalResources|object|false|none|none|
|versionInfo|object|false|none|none|
|containerInstanceArn|object|false|none|none|
|attributes|object|false|none|none|
|platformDevices|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_RegisterTaskDefinitionResponse">RegisterTaskDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaregistertaskdefinitionresponse"></a>
<a id="schema_RegisterTaskDefinitionResponse"></a>
<a id="tocSregistertaskdefinitionresponse"></a>
<a id="tocsregistertaskdefinitionresponse"></a>

```json
{
  "taskDefinition": {
    "containerDefinitions": [
      {
        "name": "sleep",
        "command": [
          "sleep",
          "360"
        ],
        "cpu": 10,
        "environment": [],
        "essential": true,
        "image": "busybox",
        "memory": 10,
        "mountPoints": [],
        "portMappings": [],
        "volumesFrom": []
      }
    ],
    "family": "sleep360",
    "revision": 1,
    "taskDefinitionArn": "arn:aws:ecs:us-east-1:<aws_account_id>:task-definition/sleep360:19",
    "volumes": []
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskDefinition|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_RegisterTaskDefinitionRequest">RegisterTaskDefinitionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaregistertaskdefinitionrequest"></a>
<a id="schema_RegisterTaskDefinitionRequest"></a>
<a id="tocSregistertaskdefinitionrequest"></a>
<a id="tocsregistertaskdefinitionrequest"></a>

```json
{
  "family": {},
  "taskRoleArn": {},
  "executionRoleArn": {},
  "networkMode": {},
  "containerDefinitions": {},
  "volumes": {},
  "placementConstraints": {},
  "requiresCompatibilities": {},
  "cpu": {},
  "memory": {},
  "tags": {},
  "pidMode": {},
  "ipcMode": {},
  "proxyConfiguration": {
    "type": {},
    "containerName": {},
    "properties": null
  },
  "inferenceAccelerators": {},
  "ephemeralStorage": {
    "sizeInGiB": {}
  },
  "runtimePlatform": {
    "cpuArchitecture": {},
    "operatingSystemFamily": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|family|object|true|none|none|
|taskRoleArn|object|false|none|none|
|executionRoleArn|object|false|none|none|
|networkMode|object|false|none|none|
|containerDefinitions|object|true|none|none|
|volumes|object|false|none|none|
|placementConstraints|object|false|none|none|
|requiresCompatibilities|object|false|none|none|
|cpu|object|false|none|none|
|memory|object|false|none|none|
|tags|object|false|none|none|
|pidMode|object|false|none|none|
|ipcMode|object|false|none|none|
|proxyConfiguration|object|false|none|none|
|inferenceAccelerators|object|false|none|none|
|ephemeralStorage|object|false|none|none|
|runtimePlatform|object|false|none|none|

<h2 id="tocS_RunTaskResponse">RunTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemaruntaskresponse"></a>
<a id="schema_RunTaskResponse"></a>
<a id="tocSruntaskresponse"></a>
<a id="tocsruntaskresponse"></a>

```json
{
  "tasks": [
    {
      "containerInstanceArn": "arn:aws:ecs:us-east-1:<aws_account_id>:container-instance/ffe3d344-77e2-476c-a4d0-bf560ad50acb",
      "containers": [
        {
          "name": "sleep",
          "containerArn": "arn:aws:ecs:us-east-1:<aws_account_id>:container/58591c8e-be29-4ddf-95aa-ee459d4c59fd",
          "lastStatus": "PENDING",
          "taskArn": "arn:aws:ecs:us-east-1:<aws_account_id>:task/a9f21ea7-c9f5-44b1-b8e6-b31f50ed33c0"
        }
      ],
      "desiredStatus": "RUNNING",
      "lastStatus": "PENDING",
      "overrides": {
        "containerOverrides": [
          {
            "name": "sleep"
          }
        ]
      },
      "taskArn": "arn:aws:ecs:us-east-1:<aws_account_id>:task/a9f21ea7-c9f5-44b1-b8e6-b31f50ed33c0",
      "taskDefinitionArn": "arn:aws:ecs:us-east-1:<aws_account_id>:task-definition/sleep360:1"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tasks|object|false|none|none|
|failures|object|false|none|none|

<h2 id="tocS_RunTaskRequest">RunTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemaruntaskrequest"></a>
<a id="schema_RunTaskRequest"></a>
<a id="tocSruntaskrequest"></a>
<a id="tocsruntaskrequest"></a>

```json
{
  "capacityProviderStrategy": {},
  "cluster": {},
  "count": {},
  "enableECSManagedTags": {},
  "enableExecuteCommand": {},
  "group": {},
  "launchType": {},
  "networkConfiguration": {
    "awsvpcConfiguration": {
      "subnets": {},
      "securityGroups": {},
      "assignPublicIp": {}
    }
  },
  "overrides": {
    "containerOverrides": {},
    "cpu": {},
    "inferenceAcceleratorOverrides": {},
    "executionRoleArn": {},
    "memory": {},
    "taskRoleArn": {},
    "ephemeralStorage": {
      "sizeInGiB": {}
    }
  },
  "placementConstraints": {},
  "placementStrategy": {},
  "platformVersion": {},
  "propagateTags": {},
  "referenceId": {},
  "startedBy": {},
  "tags": {},
  "taskDefinition": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capacityProviderStrategy|object|false|none|none|
|cluster|object|false|none|none|
|count|object|false|none|none|
|enableECSManagedTags|object|false|none|none|
|enableExecuteCommand|object|false|none|none|
|group|object|false|none|none|
|launchType|object|false|none|none|
|networkConfiguration|object|false|none|none|
|overrides|object|false|none|none|
|placementConstraints|object|false|none|none|
|placementStrategy|object|false|none|none|
|platformVersion|object|false|none|none|
|propagateTags|object|false|none|none|
|referenceId|object|false|none|none|
|startedBy|object|false|none|none|
|tags|object|false|none|none|
|taskDefinition|object|true|none|none|

<h2 id="tocS_BlockedException">BlockedException</h2>
<!-- backwards compatibility -->
<a id="schemablockedexception"></a>
<a id="schema_BlockedException"></a>
<a id="tocSblockedexception"></a>
<a id="tocsblockedexception"></a>

```json
null
```

<h2 id="tocS_StartTaskResponse">StartTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemastarttaskresponse"></a>
<a id="schema_StartTaskResponse"></a>
<a id="tocSstarttaskresponse"></a>
<a id="tocsstarttaskresponse"></a>

```json
{
  "tasks": {},
  "failures": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tasks|object|false|none|none|
|failures|object|false|none|none|

<h2 id="tocS_StartTaskRequest">StartTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemastarttaskrequest"></a>
<a id="schema_StartTaskRequest"></a>
<a id="tocSstarttaskrequest"></a>
<a id="tocsstarttaskrequest"></a>

```json
{
  "cluster": {},
  "containerInstances": {},
  "enableECSManagedTags": {},
  "enableExecuteCommand": {},
  "group": {},
  "networkConfiguration": {
    "awsvpcConfiguration": {
      "subnets": {},
      "securityGroups": {},
      "assignPublicIp": {}
    }
  },
  "overrides": {
    "containerOverrides": {},
    "cpu": {},
    "inferenceAcceleratorOverrides": {},
    "executionRoleArn": {},
    "memory": {},
    "taskRoleArn": {},
    "ephemeralStorage": {
      "sizeInGiB": {}
    }
  },
  "propagateTags": {},
  "referenceId": {},
  "startedBy": {},
  "tags": {},
  "taskDefinition": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|object|false|none|none|
|containerInstances|object|true|none|none|
|enableECSManagedTags|object|false|none|none|
|enableExecuteCommand|object|false|none|none|
|group|object|false|none|none|
|networkConfiguration|object|false|none|none|
|overrides|object|false|none|none|
|propagateTags|object|false|none|none|
|referenceId|object|false|none|none|
|startedBy|object|false|none|none|
|tags|object|false|none|none|
|taskDefinition|object|true|none|none|

<h2 id="tocS_StopTaskResponse">StopTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemastoptaskresponse"></a>
<a id="schema_StopTaskResponse"></a>
<a id="tocSstoptaskresponse"></a>
<a id="tocsstoptaskresponse"></a>

```json
{
  "task": {
    "attachments": {},
    "attributes": {},
    "availabilityZone": {},
    "capacityProviderName": {},
    "clusterArn": {},
    "connectivity": {},
    "connectivityAt": {},
    "containerInstanceArn": {},
    "containers": {},
    "cpu": {},
    "createdAt": {},
    "desiredStatus": {},
    "enableExecuteCommand": {},
    "executionStoppedAt": {},
    "group": {},
    "healthStatus": {},
    "inferenceAccelerators": {},
    "lastStatus": {},
    "launchType": {},
    "memory": {},
    "overrides": {
      "containerOverrides": {},
      "cpu": {},
      "inferenceAcceleratorOverrides": {},
      "executionRoleArn": {},
      "memory": {},
      "taskRoleArn": {},
      "ephemeralStorage": {
        "sizeInGiB": {}
      }
    },
    "platformVersion": {},
    "platformFamily": {},
    "pullStartedAt": {},
    "pullStoppedAt": {},
    "startedAt": {},
    "startedBy": {},
    "stopCode": {},
    "stoppedAt": {},
    "stoppedReason": {},
    "stoppingAt": {},
    "tags": {},
    "taskArn": {},
    "taskDefinitionArn": {},
    "version": {},
    "ephemeralStorage": {
      "sizeInGiB": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|task|object|false|none|none|

<h2 id="tocS_StopTaskRequest">StopTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemastoptaskrequest"></a>
<a id="schema_StopTaskRequest"></a>
<a id="tocSstoptaskrequest"></a>
<a id="tocsstoptaskrequest"></a>

```json
{
  "cluster": {},
  "task": {},
  "reason": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|object|false|none|none|
|task|object|true|none|none|
|reason|object|false|none|none|

<h2 id="tocS_SubmitAttachmentStateChangesResponse">SubmitAttachmentStateChangesResponse</h2>
<!-- backwards compatibility -->
<a id="schemasubmitattachmentstatechangesresponse"></a>
<a id="schema_SubmitAttachmentStateChangesResponse"></a>
<a id="tocSsubmitattachmentstatechangesresponse"></a>
<a id="tocssubmitattachmentstatechangesresponse"></a>

```json
{
  "acknowledgment": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acknowledgment|object|false|none|none|

<h2 id="tocS_SubmitAttachmentStateChangesRequest">SubmitAttachmentStateChangesRequest</h2>
<!-- backwards compatibility -->
<a id="schemasubmitattachmentstatechangesrequest"></a>
<a id="schema_SubmitAttachmentStateChangesRequest"></a>
<a id="tocSsubmitattachmentstatechangesrequest"></a>
<a id="tocssubmitattachmentstatechangesrequest"></a>

```json
{
  "cluster": {},
  "attachments": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|object|false|none|none|
|attachments|object|true|none|none|

<h2 id="tocS_SubmitContainerStateChangeResponse">SubmitContainerStateChangeResponse</h2>
<!-- backwards compatibility -->
<a id="schemasubmitcontainerstatechangeresponse"></a>
<a id="schema_SubmitContainerStateChangeResponse"></a>
<a id="tocSsubmitcontainerstatechangeresponse"></a>
<a id="tocssubmitcontainerstatechangeresponse"></a>

```json
{
  "acknowledgment": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acknowledgment|object|false|none|none|

<h2 id="tocS_SubmitContainerStateChangeRequest">SubmitContainerStateChangeRequest</h2>
<!-- backwards compatibility -->
<a id="schemasubmitcontainerstatechangerequest"></a>
<a id="schema_SubmitContainerStateChangeRequest"></a>
<a id="tocSsubmitcontainerstatechangerequest"></a>
<a id="tocssubmitcontainerstatechangerequest"></a>

```json
{
  "cluster": {},
  "task": {},
  "containerName": {},
  "runtimeId": {},
  "status": {},
  "exitCode": {},
  "reason": {},
  "networkBindings": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|object|false|none|none|
|task|object|false|none|none|
|containerName|object|false|none|none|
|runtimeId|object|false|none|none|
|status|object|false|none|none|
|exitCode|object|false|none|none|
|reason|object|false|none|none|
|networkBindings|object|false|none|none|

<h2 id="tocS_SubmitTaskStateChangeResponse">SubmitTaskStateChangeResponse</h2>
<!-- backwards compatibility -->
<a id="schemasubmittaskstatechangeresponse"></a>
<a id="schema_SubmitTaskStateChangeResponse"></a>
<a id="tocSsubmittaskstatechangeresponse"></a>
<a id="tocssubmittaskstatechangeresponse"></a>

```json
{
  "acknowledgment": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acknowledgment|object|false|none|none|

<h2 id="tocS_SubmitTaskStateChangeRequest">SubmitTaskStateChangeRequest</h2>
<!-- backwards compatibility -->
<a id="schemasubmittaskstatechangerequest"></a>
<a id="schema_SubmitTaskStateChangeRequest"></a>
<a id="tocSsubmittaskstatechangerequest"></a>
<a id="tocssubmittaskstatechangerequest"></a>

```json
{
  "cluster": {},
  "task": {},
  "status": {},
  "reason": {},
  "containers": {},
  "attachments": {},
  "managedAgents": {},
  "pullStartedAt": {},
  "pullStoppedAt": {},
  "executionStoppedAt": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|object|false|none|none|
|task|object|false|none|none|
|status|object|false|none|none|
|reason|object|false|none|none|
|containers|object|false|none|none|
|attachments|object|false|none|none|
|managedAgents|object|false|none|none|
|pullStartedAt|object|false|none|none|
|pullStoppedAt|object|false|none|none|
|executionStoppedAt|object|false|none|none|

<h2 id="tocS_TagResourceResponse">TagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schematagresourceresponse"></a>
<a id="schema_TagResourceResponse"></a>
<a id="tocStagresourceresponse"></a>
<a id="tocstagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_TagResourceRequest">TagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schematagresourcerequest"></a>
<a id="schema_TagResourceRequest"></a>
<a id="tocStagresourcerequest"></a>
<a id="tocstagresourcerequest"></a>

```json
{
  "resourceArn": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceArn|object|true|none|none|
|tags|object|true|none|none|

<h2 id="tocS_UntagResourceResponse">UntagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceresponse"></a>
<a id="schema_UntagResourceResponse"></a>
<a id="tocSuntagresourceresponse"></a>
<a id="tocsuntagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{
  "resourceArn": {},
  "tagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceArn|object|true|none|none|
|tagKeys|object|true|none|none|

<h2 id="tocS_UpdateCapacityProviderResponse">UpdateCapacityProviderResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecapacityproviderresponse"></a>
<a id="schema_UpdateCapacityProviderResponse"></a>
<a id="tocSupdatecapacityproviderresponse"></a>
<a id="tocsupdatecapacityproviderresponse"></a>

```json
{
  "capacityProvider": {
    "capacityProviderArn": {},
    "name": {},
    "status": {},
    "autoScalingGroupProvider": {
      "autoScalingGroupArn": {},
      "managedScaling": {
        "status": {},
        "targetCapacity": {},
        "minimumScalingStepSize": {},
        "maximumScalingStepSize": {},
        "instanceWarmupPeriod": {}
      },
      "managedTerminationProtection": {}
    },
    "updateStatus": {},
    "updateStatusReason": {},
    "tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capacityProvider|object|false|none|none|

<h2 id="tocS_UpdateCapacityProviderRequest">UpdateCapacityProviderRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecapacityproviderrequest"></a>
<a id="schema_UpdateCapacityProviderRequest"></a>
<a id="tocSupdatecapacityproviderrequest"></a>
<a id="tocsupdatecapacityproviderrequest"></a>

```json
{
  "name": {},
  "autoScalingGroupProvider": {
    "managedScaling": {
      "status": {},
      "targetCapacity": {},
      "minimumScalingStepSize": {},
      "maximumScalingStepSize": {},
      "instanceWarmupPeriod": {}
    },
    "managedTerminationProtection": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|autoScalingGroupProvider|object|true|none|none|

<h2 id="tocS_UpdateClusterResponse">UpdateClusterResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateclusterresponse"></a>
<a id="schema_UpdateClusterResponse"></a>
<a id="tocSupdateclusterresponse"></a>
<a id="tocsupdateclusterresponse"></a>

```json
{
  "cluster": {
    "clusterArn": {},
    "clusterName": {},
    "configuration": {
      "executeCommandConfiguration": {
        "kmsKeyId": {},
        "logging": {},
        "logConfiguration": {
          "cloudWatchLogGroupName": {},
          "cloudWatchEncryptionEnabled": {},
          "s3BucketName": {},
          "s3EncryptionEnabled": {},
          "s3KeyPrefix": {}
        }
      }
    },
    "status": {},
    "registeredContainerInstancesCount": {},
    "runningTasksCount": {},
    "pendingTasksCount": {},
    "activeServicesCount": {},
    "statistics": {},
    "tags": {},
    "settings": {},
    "capacityProviders": {},
    "defaultCapacityProviderStrategy": {},
    "attachments": {},
    "attachmentsStatus": {},
    "serviceConnectDefaults": {
      "namespace": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|object|false|none|none|

<h2 id="tocS_UpdateClusterRequest">UpdateClusterRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateclusterrequest"></a>
<a id="schema_UpdateClusterRequest"></a>
<a id="tocSupdateclusterrequest"></a>
<a id="tocsupdateclusterrequest"></a>

```json
{
  "cluster": {},
  "settings": {},
  "configuration": {
    "executeCommandConfiguration": {
      "kmsKeyId": {},
      "logging": {},
      "logConfiguration": {
        "cloudWatchLogGroupName": {},
        "cloudWatchEncryptionEnabled": {},
        "s3BucketName": {},
        "s3EncryptionEnabled": {},
        "s3KeyPrefix": {}
      }
    }
  },
  "serviceConnectDefaults": {
    "namespace": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|object|true|none|none|
|settings|object|false|none|none|
|configuration|object|false|none|none|
|serviceConnectDefaults|object|false|none|none|

<h2 id="tocS_UpdateClusterSettingsResponse">UpdateClusterSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateclustersettingsresponse"></a>
<a id="schema_UpdateClusterSettingsResponse"></a>
<a id="tocSupdateclustersettingsresponse"></a>
<a id="tocsupdateclustersettingsresponse"></a>

```json
{
  "cluster": {
    "clusterArn": {},
    "clusterName": {},
    "configuration": {
      "executeCommandConfiguration": {
        "kmsKeyId": {},
        "logging": {},
        "logConfiguration": {
          "cloudWatchLogGroupName": {},
          "cloudWatchEncryptionEnabled": {},
          "s3BucketName": {},
          "s3EncryptionEnabled": {},
          "s3KeyPrefix": {}
        }
      }
    },
    "status": {},
    "registeredContainerInstancesCount": {},
    "runningTasksCount": {},
    "pendingTasksCount": {},
    "activeServicesCount": {},
    "statistics": {},
    "tags": {},
    "settings": {},
    "capacityProviders": {},
    "defaultCapacityProviderStrategy": {},
    "attachments": {},
    "attachmentsStatus": {},
    "serviceConnectDefaults": {
      "namespace": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|object|false|none|none|

<h2 id="tocS_UpdateClusterSettingsRequest">UpdateClusterSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateclustersettingsrequest"></a>
<a id="schema_UpdateClusterSettingsRequest"></a>
<a id="tocSupdateclustersettingsrequest"></a>
<a id="tocsupdateclustersettingsrequest"></a>

```json
{
  "cluster": {},
  "settings": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|object|true|none|none|
|settings|object|true|none|none|

<h2 id="tocS_UpdateContainerAgentResponse">UpdateContainerAgentResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecontaineragentresponse"></a>
<a id="schema_UpdateContainerAgentResponse"></a>
<a id="tocSupdatecontaineragentresponse"></a>
<a id="tocsupdatecontaineragentresponse"></a>

```json
{
  "containerInstance": {
    "containerInstanceArn": {},
    "ec2InstanceId": {},
    "capacityProviderName": {},
    "version": {},
    "versionInfo": {
      "agentVersion": {},
      "agentHash": {},
      "dockerVersion": {}
    },
    "remainingResources": {},
    "registeredResources": {},
    "status": {},
    "statusReason": {},
    "agentConnected": {},
    "runningTasksCount": {},
    "pendingTasksCount": {},
    "agentUpdateStatus": {},
    "attributes": {},
    "registeredAt": {},
    "attachments": {},
    "tags": {},
    "healthStatus": {
      "overallStatus": {},
      "details": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containerInstance|object|false|none|none|

<h2 id="tocS_UpdateContainerAgentRequest">UpdateContainerAgentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecontaineragentrequest"></a>
<a id="schema_UpdateContainerAgentRequest"></a>
<a id="tocSupdatecontaineragentrequest"></a>
<a id="tocsupdatecontaineragentrequest"></a>

```json
{
  "cluster": {},
  "containerInstance": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|object|false|none|none|
|containerInstance|object|true|none|none|

<h2 id="tocS_NoUpdateAvailableException">NoUpdateAvailableException</h2>
<!-- backwards compatibility -->
<a id="schemanoupdateavailableexception"></a>
<a id="schema_NoUpdateAvailableException"></a>
<a id="tocSnoupdateavailableexception"></a>
<a id="tocsnoupdateavailableexception"></a>

```json
null
```

<h2 id="tocS_MissingVersionException">MissingVersionException</h2>
<!-- backwards compatibility -->
<a id="schemamissingversionexception"></a>
<a id="schema_MissingVersionException"></a>
<a id="tocSmissingversionexception"></a>
<a id="tocsmissingversionexception"></a>

```json
null
```

<h2 id="tocS_UpdateContainerInstancesStateResponse">UpdateContainerInstancesStateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecontainerinstancesstateresponse"></a>
<a id="schema_UpdateContainerInstancesStateResponse"></a>
<a id="tocSupdatecontainerinstancesstateresponse"></a>
<a id="tocsupdatecontainerinstancesstateresponse"></a>

```json
{
  "containerInstances": {},
  "failures": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containerInstances|object|false|none|none|
|failures|object|false|none|none|

<h2 id="tocS_UpdateContainerInstancesStateRequest">UpdateContainerInstancesStateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecontainerinstancesstaterequest"></a>
<a id="schema_UpdateContainerInstancesStateRequest"></a>
<a id="tocSupdatecontainerinstancesstaterequest"></a>
<a id="tocsupdatecontainerinstancesstaterequest"></a>

```json
{
  "cluster": {},
  "containerInstances": {},
  "status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|object|false|none|none|
|containerInstances|object|true|none|none|
|status|object|true|none|none|

<h2 id="tocS_UpdateServiceResponse">UpdateServiceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateserviceresponse"></a>
<a id="schema_UpdateServiceResponse"></a>
<a id="tocSupdateserviceresponse"></a>
<a id="tocsupdateserviceresponse"></a>

```json
{}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|service|object|false|none|none|

<h2 id="tocS_UpdateServiceRequest">UpdateServiceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateservicerequest"></a>
<a id="schema_UpdateServiceRequest"></a>
<a id="tocSupdateservicerequest"></a>
<a id="tocsupdateservicerequest"></a>

```json
{
  "cluster": {},
  "service": {},
  "desiredCount": {},
  "taskDefinition": {},
  "capacityProviderStrategy": {},
  "deploymentConfiguration": {
    "deploymentCircuitBreaker": {
      "enable": {},
      "rollback": {}
    },
    "maximumPercent": {},
    "minimumHealthyPercent": {},
    "alarms": {
      "alarmNames": {},
      "enable": {},
      "rollback": {}
    }
  },
  "networkConfiguration": {
    "awsvpcConfiguration": {
      "subnets": {},
      "securityGroups": {},
      "assignPublicIp": {}
    }
  },
  "placementConstraints": {},
  "placementStrategy": {},
  "platformVersion": {},
  "forceNewDeployment": {},
  "healthCheckGracePeriodSeconds": {},
  "enableExecuteCommand": {},
  "enableECSManagedTags": {},
  "loadBalancers": {},
  "propagateTags": {},
  "serviceRegistries": {},
  "serviceConnectConfiguration": {
    "enabled": {},
    "namespace": {},
    "services": {},
    "logConfiguration": {
      "logDriver": {},
      "options": {
        "property1": "string",
        "property2": "string"
      },
      "secretOptions": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|object|false|none|none|
|service|object|true|none|none|
|desiredCount|object|false|none|none|
|taskDefinition|object|false|none|none|
|capacityProviderStrategy|object|false|none|none|
|deploymentConfiguration|object|false|none|none|
|networkConfiguration|object|false|none|none|
|placementConstraints|object|false|none|none|
|placementStrategy|object|false|none|none|
|platformVersion|object|false|none|none|
|forceNewDeployment|object|false|none|none|
|healthCheckGracePeriodSeconds|object|false|none|none|
|enableExecuteCommand|object|false|none|none|
|enableECSManagedTags|object|false|none|none|
|loadBalancers|object|false|none|none|
|propagateTags|object|false|none|none|
|serviceRegistries|object|false|none|none|
|serviceConnectConfiguration|object|false|none|none|

<h2 id="tocS_UpdateServicePrimaryTaskSetResponse">UpdateServicePrimaryTaskSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateserviceprimarytasksetresponse"></a>
<a id="schema_UpdateServicePrimaryTaskSetResponse"></a>
<a id="tocSupdateserviceprimarytasksetresponse"></a>
<a id="tocsupdateserviceprimarytasksetresponse"></a>

```json
{
  "taskSet": {
    "id": {},
    "taskSetArn": {},
    "serviceArn": {},
    "clusterArn": {},
    "startedBy": {},
    "externalId": {},
    "status": {},
    "taskDefinition": {},
    "computedDesiredCount": {},
    "pendingCount": {},
    "runningCount": {},
    "createdAt": {},
    "updatedAt": {},
    "launchType": {},
    "capacityProviderStrategy": {},
    "platformVersion": {},
    "platformFamily": {},
    "networkConfiguration": {
      "awsvpcConfiguration": {
        "subnets": {},
        "securityGroups": {},
        "assignPublicIp": {}
      }
    },
    "loadBalancers": {},
    "serviceRegistries": {},
    "scale": {
      "value": {},
      "unit": {}
    },
    "stabilityStatus": {},
    "stabilityStatusAt": {},
    "tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskSet|object|false|none|none|

<h2 id="tocS_UpdateServicePrimaryTaskSetRequest">UpdateServicePrimaryTaskSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateserviceprimarytasksetrequest"></a>
<a id="schema_UpdateServicePrimaryTaskSetRequest"></a>
<a id="tocSupdateserviceprimarytasksetrequest"></a>
<a id="tocsupdateserviceprimarytasksetrequest"></a>

```json
{
  "cluster": {},
  "service": {},
  "primaryTaskSet": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|object|true|none|none|
|service|object|true|none|none|
|primaryTaskSet|object|true|none|none|

<h2 id="tocS_UpdateTaskProtectionResponse">UpdateTaskProtectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetaskprotectionresponse"></a>
<a id="schema_UpdateTaskProtectionResponse"></a>
<a id="tocSupdatetaskprotectionresponse"></a>
<a id="tocsupdatetaskprotectionresponse"></a>

```json
{
  "failures": [],
  "protectedTasks": [
    {
      "protectionEnabled": false,
      "taskArn": "arn:aws:ecs:us-west-2:012345678910:task/b8b1cf532d0e46ba8d44a40d1de16772"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|protectedTasks|object|false|none|none|
|failures|object|false|none|none|

<h2 id="tocS_UpdateTaskProtectionRequest">UpdateTaskProtectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetaskprotectionrequest"></a>
<a id="schema_UpdateTaskProtectionRequest"></a>
<a id="tocSupdatetaskprotectionrequest"></a>
<a id="tocsupdatetaskprotectionrequest"></a>

```json
{
  "cluster": {},
  "tasks": {},
  "protectionEnabled": {},
  "expiresInMinutes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|object|true|none|none|
|tasks|object|true|none|none|
|protectionEnabled|object|true|none|none|
|expiresInMinutes|object|false|none|none|

<h2 id="tocS_UpdateTaskSetResponse">UpdateTaskSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetasksetresponse"></a>
<a id="schema_UpdateTaskSetResponse"></a>
<a id="tocSupdatetasksetresponse"></a>
<a id="tocsupdatetasksetresponse"></a>

```json
{
  "taskSet": {
    "id": {},
    "taskSetArn": {},
    "serviceArn": {},
    "clusterArn": {},
    "startedBy": {},
    "externalId": {},
    "status": {},
    "taskDefinition": {},
    "computedDesiredCount": {},
    "pendingCount": {},
    "runningCount": {},
    "createdAt": {},
    "updatedAt": {},
    "launchType": {},
    "capacityProviderStrategy": {},
    "platformVersion": {},
    "platformFamily": {},
    "networkConfiguration": {
      "awsvpcConfiguration": {
        "subnets": {},
        "securityGroups": {},
        "assignPublicIp": {}
      }
    },
    "loadBalancers": {},
    "serviceRegistries": {},
    "scale": {
      "value": {},
      "unit": {}
    },
    "stabilityStatus": {},
    "stabilityStatusAt": {},
    "tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskSet|object|false|none|none|

<h2 id="tocS_UpdateTaskSetRequest">UpdateTaskSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetasksetrequest"></a>
<a id="schema_UpdateTaskSetRequest"></a>
<a id="tocSupdatetasksetrequest"></a>
<a id="tocsupdatetasksetrequest"></a>

```json
{
  "cluster": {},
  "service": {},
  "taskSet": {},
  "scale": {
    "value": {},
    "unit": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|object|true|none|none|
|service|object|true|none|none|
|taskSet|object|true|none|none|
|scale|object|true|none|none|

<h2 id="tocS_AgentUpdateStatus">AgentUpdateStatus</h2>
<!-- backwards compatibility -->
<a id="schemaagentupdatestatus"></a>
<a id="schema_AgentUpdateStatus"></a>
<a id="tocSagentupdatestatus"></a>
<a id="tocsagentupdatestatus"></a>

```json
"PENDING"
```

<h2 id="tocS_ApplicationProtocol">ApplicationProtocol</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationprotocol"></a>
<a id="schema_ApplicationProtocol"></a>
<a id="tocSapplicationprotocol"></a>
<a id="tocsapplicationprotocol"></a>

```json
"http"
```

<h2 id="tocS_AssignPublicIp">AssignPublicIp</h2>
<!-- backwards compatibility -->
<a id="schemaassignpublicip"></a>
<a id="schema_AssignPublicIp"></a>
<a id="tocSassignpublicip"></a>
<a id="tocsassignpublicip"></a>

```json
"ENABLED"
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

<h2 id="tocS_AttachmentDetails">AttachmentDetails</h2>
<!-- backwards compatibility -->
<a id="schemaattachmentdetails"></a>
<a id="schema_AttachmentDetails"></a>
<a id="tocSattachmentdetails"></a>
<a id="tocsattachmentdetails"></a>

```json
[
  {
    "name": {},
    "value": {}
  }
]
```

<h2 id="tocS_Attachment">Attachment</h2>
<!-- backwards compatibility -->
<a id="schemaattachment"></a>
<a id="schema_Attachment"></a>
<a id="tocSattachment"></a>
<a id="tocsattachment"></a>

```json
{
  "id": {},
  "type": {},
  "status": {},
  "details": {}
}
```

An object representing a container instance or task attachment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|type|object|false|none|none|
|status|object|false|none|none|
|details|object|false|none|none|

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

<h2 id="tocS_AttachmentStateChange">AttachmentStateChange</h2>
<!-- backwards compatibility -->
<a id="schemaattachmentstatechange"></a>
<a id="schema_AttachmentStateChange"></a>
<a id="tocSattachmentstatechange"></a>
<a id="tocsattachmentstatechange"></a>

```json
{
  "attachmentArn": {},
  "status": {}
}
```

An object representing a change in state for a task attachment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachmentArn|object|true|none|none|
|status|object|true|none|none|

<h2 id="tocS_AttachmentStateChanges">AttachmentStateChanges</h2>
<!-- backwards compatibility -->
<a id="schemaattachmentstatechanges"></a>
<a id="schema_AttachmentStateChanges"></a>
<a id="tocSattachmentstatechanges"></a>
<a id="tocsattachmentstatechanges"></a>

```json
[
  {
    "attachmentArn": {},
    "status": {}
  }
]
```

<h2 id="tocS_Attachments">Attachments</h2>
<!-- backwards compatibility -->
<a id="schemaattachments"></a>
<a id="schema_Attachments"></a>
<a id="tocSattachments"></a>
<a id="tocsattachments"></a>

```json
[
  {
    "id": {},
    "type": {},
    "status": {},
    "details": {}
  }
]
```

<h2 id="tocS_TargetType">TargetType</h2>
<!-- backwards compatibility -->
<a id="schematargettype"></a>
<a id="schema_TargetType"></a>
<a id="tocStargettype"></a>
<a id="tocstargettype"></a>

```json
"container-instance"
```

<h2 id="tocS_Attribute">Attribute</h2>
<!-- backwards compatibility -->
<a id="schemaattribute"></a>
<a id="schema_Attribute"></a>
<a id="tocSattribute"></a>
<a id="tocsattribute"></a>

```json
{
  "name": {},
  "value": {},
  "targetType": {},
  "targetId": {}
}
```

An attribute is a name-value pair that's associated with an Amazon ECS object. Use attributes to extend the Amazon ECS data model by adding custom metadata to your resources. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html#attributes">Attributes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|value|object|false|none|none|
|targetType|object|false|none|none|
|targetId|object|false|none|none|

<h2 id="tocS_Attributes">Attributes</h2>
<!-- backwards compatibility -->
<a id="schemaattributes"></a>
<a id="schema_Attributes"></a>
<a id="tocSattributes"></a>
<a id="tocsattributes"></a>

```json
[
  {
    "name": {},
    "value": {},
    "targetType": {},
    "targetId": {}
  }
]
```

<h2 id="tocS_ManagedScaling">ManagedScaling</h2>
<!-- backwards compatibility -->
<a id="schemamanagedscaling"></a>
<a id="schema_ManagedScaling"></a>
<a id="tocSmanagedscaling"></a>
<a id="tocsmanagedscaling"></a>

```json
{
  "status": {},
  "targetCapacity": {},
  "minimumScalingStepSize": {},
  "maximumScalingStepSize": {},
  "instanceWarmupPeriod": {}
}
```

<p>The managed scaling settings for the Auto Scaling group capacity provider.</p> <p>When managed scaling is turned on, Amazon ECS manages the scale-in and scale-out actions of the Auto Scaling group. Amazon ECS manages a target tracking scaling policy using an Amazon ECS managed CloudWatch metric with the specified <code>targetCapacity</code> value as the target value for the metric. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/asg-capacity-providers.html#asg-capacity-providers-managed-scaling">Using managed scaling</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>If managed scaling is off, the user must manage the scaling of the Auto Scaling group.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|false|none|none|
|targetCapacity|object|false|none|none|
|minimumScalingStepSize|object|false|none|none|
|maximumScalingStepSize|object|false|none|none|
|instanceWarmupPeriod|object|false|none|none|

<h2 id="tocS_ManagedTerminationProtection">ManagedTerminationProtection</h2>
<!-- backwards compatibility -->
<a id="schemamanagedterminationprotection"></a>
<a id="schema_ManagedTerminationProtection"></a>
<a id="tocSmanagedterminationprotection"></a>
<a id="tocsmanagedterminationprotection"></a>

```json
"ENABLED"
```

<h2 id="tocS_AutoScalingGroupProvider">AutoScalingGroupProvider</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalinggroupprovider"></a>
<a id="schema_AutoScalingGroupProvider"></a>
<a id="tocSautoscalinggroupprovider"></a>
<a id="tocsautoscalinggroupprovider"></a>

```json
{
  "autoScalingGroupArn": {},
  "managedScaling": {
    "status": {},
    "targetCapacity": {},
    "minimumScalingStepSize": {},
    "maximumScalingStepSize": {},
    "instanceWarmupPeriod": {}
  },
  "managedTerminationProtection": {}
}
```

The details of the Auto Scaling group for the capacity provider.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoScalingGroupArn|object|true|none|none|
|managedScaling|object|false|none|none|
|managedTerminationProtection|object|false|none|none|

<h2 id="tocS_AutoScalingGroupProviderUpdate">AutoScalingGroupProviderUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalinggroupproviderupdate"></a>
<a id="schema_AutoScalingGroupProviderUpdate"></a>
<a id="tocSautoscalinggroupproviderupdate"></a>
<a id="tocsautoscalinggroupproviderupdate"></a>

```json
{
  "managedScaling": {
    "status": {},
    "targetCapacity": {},
    "minimumScalingStepSize": {},
    "maximumScalingStepSize": {},
    "instanceWarmupPeriod": {}
  },
  "managedTerminationProtection": {}
}
```

The details of the Auto Scaling group capacity provider to update.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|managedScaling|object|false|none|none|
|managedTerminationProtection|object|false|none|none|

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

<h2 id="tocS_AwsVpcConfiguration">AwsVpcConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaawsvpcconfiguration"></a>
<a id="schema_AwsVpcConfiguration"></a>
<a id="tocSawsvpcconfiguration"></a>
<a id="tocsawsvpcconfiguration"></a>

```json
{
  "subnets": {},
  "securityGroups": {},
  "assignPublicIp": {}
}
```

An object representing the networking details for a task or service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subnets|object|true|none|none|
|securityGroups|object|false|none|none|
|assignPublicIp|object|false|none|none|

<h2 id="tocS_Boolean">Boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_Boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_BoxedBoolean">BoxedBoolean</h2>
<!-- backwards compatibility -->
<a id="schemaboxedboolean"></a>
<a id="schema_BoxedBoolean"></a>
<a id="tocSboxedboolean"></a>
<a id="tocsboxedboolean"></a>

```json
true
```

<h2 id="tocS_BoxedInteger">BoxedInteger</h2>
<!-- backwards compatibility -->
<a id="schemaboxedinteger"></a>
<a id="schema_BoxedInteger"></a>
<a id="tocSboxedinteger"></a>
<a id="tocsboxedinteger"></a>

```json
0
```

<h2 id="tocS_CPUArchitecture">CPUArchitecture</h2>
<!-- backwards compatibility -->
<a id="schemacpuarchitecture"></a>
<a id="schema_CPUArchitecture"></a>
<a id="tocScpuarchitecture"></a>
<a id="tocscpuarchitecture"></a>

```json
"X86_64"
```

<h2 id="tocS_CapacityProviderStatus">CapacityProviderStatus</h2>
<!-- backwards compatibility -->
<a id="schemacapacityproviderstatus"></a>
<a id="schema_CapacityProviderStatus"></a>
<a id="tocScapacityproviderstatus"></a>
<a id="tocscapacityproviderstatus"></a>

```json
"ACTIVE"
```

<h2 id="tocS_CapacityProviderUpdateStatus">CapacityProviderUpdateStatus</h2>
<!-- backwards compatibility -->
<a id="schemacapacityproviderupdatestatus"></a>
<a id="schema_CapacityProviderUpdateStatus"></a>
<a id="tocScapacityproviderupdatestatus"></a>
<a id="tocscapacityproviderupdatestatus"></a>

```json
"DELETE_IN_PROGRESS"
```

<h2 id="tocS_Tags">Tags</h2>
<!-- backwards compatibility -->
<a id="schematags"></a>
<a id="schema_Tags"></a>
<a id="tocStags"></a>
<a id="tocstags"></a>

```json
[
  {
    "key": {},
    "value": {}
  }
]
```

<h2 id="tocS_CapacityProvider">CapacityProvider</h2>
<!-- backwards compatibility -->
<a id="schemacapacityprovider"></a>
<a id="schema_CapacityProvider"></a>
<a id="tocScapacityprovider"></a>
<a id="tocscapacityprovider"></a>

```json
{
  "capacityProviderArn": {},
  "name": {},
  "status": {},
  "autoScalingGroupProvider": {
    "autoScalingGroupArn": {},
    "managedScaling": {
      "status": {},
      "targetCapacity": {},
      "minimumScalingStepSize": {},
      "maximumScalingStepSize": {},
      "instanceWarmupPeriod": {}
    },
    "managedTerminationProtection": {}
  },
  "updateStatus": {},
  "updateStatusReason": {},
  "tags": {}
}
```

The details for a capacity provider.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capacityProviderArn|object|false|none|none|
|name|object|false|none|none|
|status|object|false|none|none|
|autoScalingGroupProvider|object|false|none|none|
|updateStatus|object|false|none|none|
|updateStatusReason|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CapacityProviderField">CapacityProviderField</h2>
<!-- backwards compatibility -->
<a id="schemacapacityproviderfield"></a>
<a id="schema_CapacityProviderField"></a>
<a id="tocScapacityproviderfield"></a>
<a id="tocscapacityproviderfield"></a>

```json
"TAGS"
```

<h2 id="tocS_CapacityProviderFieldList">CapacityProviderFieldList</h2>
<!-- backwards compatibility -->
<a id="schemacapacityproviderfieldlist"></a>
<a id="schema_CapacityProviderFieldList"></a>
<a id="tocScapacityproviderfieldlist"></a>
<a id="tocscapacityproviderfieldlist"></a>

```json
[
  "TAGS"
]
```

<h2 id="tocS_CapacityProviderStrategyItem">CapacityProviderStrategyItem</h2>
<!-- backwards compatibility -->
<a id="schemacapacityproviderstrategyitem"></a>
<a id="schema_CapacityProviderStrategyItem"></a>
<a id="tocScapacityproviderstrategyitem"></a>
<a id="tocscapacityproviderstrategyitem"></a>

```json
{
  "capacityProvider": {},
  "weight": {},
  "base": {}
}
```

<p>The details of a capacity provider strategy. A capacity provider strategy can be set when using the <a>RunTask</a> or <a>CreateCluster</a> APIs or as the default capacity provider strategy for a cluster with the <a>CreateCluster</a> API.</p> <p>Only capacity providers that are already associated with a cluster and have an <code>ACTIVE</code> or <code>UPDATING</code> status can be used in a capacity provider strategy. The <a>PutClusterCapacityProviders</a> API is used to associate a capacity provider with a cluster.</p> <p>If specifying a capacity provider that uses an Auto Scaling group, the capacity provider must already be created. New Auto Scaling group capacity providers can be created with the <a>CreateCapacityProvider</a> API operation.</p> <p>To use a Fargate capacity provider, specify either the <code>FARGATE</code> or <code>FARGATE_SPOT</code> capacity providers. The Fargate capacity providers are available to all accounts and only need to be associated with a cluster to be used in a capacity provider strategy.</p> <p>A capacity provider strategy may contain a maximum of 6 capacity providers.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capacityProvider|object|true|none|none|
|weight|object|false|none|none|
|base|object|false|none|none|

<h2 id="tocS_CapacityProviderStrategy">CapacityProviderStrategy</h2>
<!-- backwards compatibility -->
<a id="schemacapacityproviderstrategy"></a>
<a id="schema_CapacityProviderStrategy"></a>
<a id="tocScapacityproviderstrategy"></a>
<a id="tocscapacityproviderstrategy"></a>

```json
[
  {
    "capacityProvider": {},
    "weight": {},
    "base": {}
  }
]
```

<h2 id="tocS_CapacityProviderStrategyItemWeight">CapacityProviderStrategyItemWeight</h2>
<!-- backwards compatibility -->
<a id="schemacapacityproviderstrategyitemweight"></a>
<a id="schema_CapacityProviderStrategyItemWeight"></a>
<a id="tocScapacityproviderstrategyitemweight"></a>
<a id="tocscapacityproviderstrategyitemweight"></a>

```json
0
```

<h2 id="tocS_CapacityProviderStrategyItemBase">CapacityProviderStrategyItemBase</h2>
<!-- backwards compatibility -->
<a id="schemacapacityproviderstrategyitembase"></a>
<a id="schema_CapacityProviderStrategyItemBase"></a>
<a id="tocScapacityproviderstrategyitembase"></a>
<a id="tocscapacityproviderstrategyitembase"></a>

```json
0
```

<h2 id="tocS_CapacityProviders">CapacityProviders</h2>
<!-- backwards compatibility -->
<a id="schemacapacityproviders"></a>
<a id="schema_CapacityProviders"></a>
<a id="tocScapacityproviders"></a>
<a id="tocscapacityproviders"></a>

```json
[
  {
    "capacityProviderArn": {},
    "name": {},
    "status": {},
    "autoScalingGroupProvider": {
      "autoScalingGroupArn": {},
      "managedScaling": {
        "status": {},
        "targetCapacity": {},
        "minimumScalingStepSize": {},
        "maximumScalingStepSize": {},
        "instanceWarmupPeriod": {}
      },
      "managedTerminationProtection": {}
    },
    "updateStatus": {},
    "updateStatusReason": {},
    "tags": {}
  }
]
```

<h2 id="tocS_ClusterConfiguration">ClusterConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaclusterconfiguration"></a>
<a id="schema_ClusterConfiguration"></a>
<a id="tocSclusterconfiguration"></a>
<a id="tocsclusterconfiguration"></a>

```json
{
  "executeCommandConfiguration": {
    "kmsKeyId": {},
    "logging": {},
    "logConfiguration": {
      "cloudWatchLogGroupName": {},
      "cloudWatchEncryptionEnabled": {},
      "s3BucketName": {},
      "s3EncryptionEnabled": {},
      "s3KeyPrefix": {}
    }
  }
}
```

The execute command configuration for the cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|executeCommandConfiguration|object|false|none|none|

<h2 id="tocS_Integer">Integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_Integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
0
```

<h2 id="tocS_Statistics">Statistics</h2>
<!-- backwards compatibility -->
<a id="schemastatistics"></a>
<a id="schema_Statistics"></a>
<a id="tocSstatistics"></a>
<a id="tocsstatistics"></a>

```json
[
  {
    "name": {},
    "value": {}
  }
]
```

<h2 id="tocS_ClusterSettings">ClusterSettings</h2>
<!-- backwards compatibility -->
<a id="schemaclustersettings"></a>
<a id="schema_ClusterSettings"></a>
<a id="tocSclustersettings"></a>
<a id="tocsclustersettings"></a>

```json
[
  {
    "name": {},
    "value": {}
  }
]
```

<h2 id="tocS_ClusterServiceConnectDefaults">ClusterServiceConnectDefaults</h2>
<!-- backwards compatibility -->
<a id="schemaclusterserviceconnectdefaults"></a>
<a id="schema_ClusterServiceConnectDefaults"></a>
<a id="tocSclusterserviceconnectdefaults"></a>
<a id="tocsclusterserviceconnectdefaults"></a>

```json
{
  "namespace": {}
}
```

<p>Use this parameter to set a default Service Connect namespace. After you set a default Service Connect namespace, any new services with Service Connect turned on that are created in the cluster are added as client services in the namespace. This setting only applies to new services that set the <code>enabled</code> parameter to <code>true</code> in the <code>ServiceConnectConfiguration</code>. You can set the namespace of each service individually in the <code>ServiceConnectConfiguration</code> to override this default parameter.</p> <p>Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|namespace|object|false|none|none|

<h2 id="tocS_Cluster">Cluster</h2>
<!-- backwards compatibility -->
<a id="schemacluster"></a>
<a id="schema_Cluster"></a>
<a id="tocScluster"></a>
<a id="tocscluster"></a>

```json
{
  "clusterArn": {},
  "clusterName": {},
  "configuration": {
    "executeCommandConfiguration": {
      "kmsKeyId": {},
      "logging": {},
      "logConfiguration": {
        "cloudWatchLogGroupName": {},
        "cloudWatchEncryptionEnabled": {},
        "s3BucketName": {},
        "s3EncryptionEnabled": {},
        "s3KeyPrefix": {}
      }
    }
  },
  "status": {},
  "registeredContainerInstancesCount": {},
  "runningTasksCount": {},
  "pendingTasksCount": {},
  "activeServicesCount": {},
  "statistics": {},
  "tags": {},
  "settings": {},
  "capacityProviders": {},
  "defaultCapacityProviderStrategy": {},
  "attachments": {},
  "attachmentsStatus": {},
  "serviceConnectDefaults": {
    "namespace": {}
  }
}
```

A regional grouping of one or more container instances where you can run task requests. Each account receives a default cluster the first time you use the Amazon ECS service, but you may also create other clusters. Clusters may contain more than one instance type simultaneously.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterArn|object|false|none|none|
|clusterName|object|false|none|none|
|configuration|object|false|none|none|
|status|object|false|none|none|
|registeredContainerInstancesCount|object|false|none|none|
|runningTasksCount|object|false|none|none|
|pendingTasksCount|object|false|none|none|
|activeServicesCount|object|false|none|none|
|statistics|object|false|none|none|
|tags|object|false|none|none|
|settings|object|false|none|none|
|capacityProviders|object|false|none|none|
|defaultCapacityProviderStrategy|object|false|none|none|
|attachments|object|false|none|none|
|attachmentsStatus|object|false|none|none|
|serviceConnectDefaults|object|false|none|none|

<h2 id="tocS_ExecuteCommandConfiguration">ExecuteCommandConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaexecutecommandconfiguration"></a>
<a id="schema_ExecuteCommandConfiguration"></a>
<a id="tocSexecutecommandconfiguration"></a>
<a id="tocsexecutecommandconfiguration"></a>

```json
{
  "kmsKeyId": {},
  "logging": {},
  "logConfiguration": {
    "cloudWatchLogGroupName": {},
    "cloudWatchEncryptionEnabled": {},
    "s3BucketName": {},
    "s3EncryptionEnabled": {},
    "s3KeyPrefix": {}
  }
}
```

The details of the execute command configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kmsKeyId|object|false|none|none|
|logging|object|false|none|none|
|logConfiguration|object|false|none|none|

<h2 id="tocS_ClusterField">ClusterField</h2>
<!-- backwards compatibility -->
<a id="schemaclusterfield"></a>
<a id="schema_ClusterField"></a>
<a id="tocSclusterfield"></a>
<a id="tocsclusterfield"></a>

```json
"ATTACHMENTS"
```

<h2 id="tocS_ClusterFieldList">ClusterFieldList</h2>
<!-- backwards compatibility -->
<a id="schemaclusterfieldlist"></a>
<a id="schema_ClusterFieldList"></a>
<a id="tocSclusterfieldlist"></a>
<a id="tocsclusterfieldlist"></a>

```json
[
  "ATTACHMENTS"
]
```

<h2 id="tocS_ClusterServiceConnectDefaultsRequest">ClusterServiceConnectDefaultsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaclusterserviceconnectdefaultsrequest"></a>
<a id="schema_ClusterServiceConnectDefaultsRequest"></a>
<a id="tocSclusterserviceconnectdefaultsrequest"></a>
<a id="tocsclusterserviceconnectdefaultsrequest"></a>

```json
{
  "namespace": {}
}
```

<p>Use this parameter to set a default Service Connect namespace. After you set a default Service Connect namespace, any new services with Service Connect turned on that are created in the cluster are added as client services in the namespace. This setting only applies to new services that set the <code>enabled</code> parameter to <code>true</code> in the <code>ServiceConnectConfiguration</code>. You can set the namespace of each service individually in the <code>ServiceConnectConfiguration</code> to override this default parameter.</p> <p>Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|namespace|object|true|none|none|

<h2 id="tocS_ClusterSettingName">ClusterSettingName</h2>
<!-- backwards compatibility -->
<a id="schemaclustersettingname"></a>
<a id="schema_ClusterSettingName"></a>
<a id="tocSclustersettingname"></a>
<a id="tocsclustersettingname"></a>

```json
"containerInsights"
```

<h2 id="tocS_ClusterSetting">ClusterSetting</h2>
<!-- backwards compatibility -->
<a id="schemaclustersetting"></a>
<a id="schema_ClusterSetting"></a>
<a id="tocSclustersetting"></a>
<a id="tocsclustersetting"></a>

```json
{
  "name": {},
  "value": {}
}
```

The settings to use when creating a cluster. This parameter is used to turn on CloudWatch Container Insights for a cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|value|object|false|none|none|

<h2 id="tocS_Clusters">Clusters</h2>
<!-- backwards compatibility -->
<a id="schemaclusters"></a>
<a id="schema_Clusters"></a>
<a id="tocSclusters"></a>
<a id="tocsclusters"></a>

```json
[
  {
    "clusterArn": {},
    "clusterName": {},
    "configuration": {
      "executeCommandConfiguration": {
        "kmsKeyId": {},
        "logging": {},
        "logConfiguration": {
          "cloudWatchLogGroupName": {},
          "cloudWatchEncryptionEnabled": {},
          "s3BucketName": {},
          "s3EncryptionEnabled": {},
          "s3KeyPrefix": {}
        }
      }
    },
    "status": {},
    "registeredContainerInstancesCount": {},
    "runningTasksCount": {},
    "pendingTasksCount": {},
    "activeServicesCount": {},
    "statistics": {},
    "tags": {},
    "settings": {},
    "capacityProviders": {},
    "defaultCapacityProviderStrategy": {},
    "attachments": {},
    "attachmentsStatus": {},
    "serviceConnectDefaults": {
      "namespace": {}
    }
  }
]
```

<h2 id="tocS_Compatibility">Compatibility</h2>
<!-- backwards compatibility -->
<a id="schemacompatibility"></a>
<a id="schema_Compatibility"></a>
<a id="tocScompatibility"></a>
<a id="tocscompatibility"></a>

```json
"EC2"
```

<h2 id="tocS_CompatibilityList">CompatibilityList</h2>
<!-- backwards compatibility -->
<a id="schemacompatibilitylist"></a>
<a id="schema_CompatibilityList"></a>
<a id="tocScompatibilitylist"></a>
<a id="tocscompatibilitylist"></a>

```json
[
  "EC2"
]
```

<h2 id="tocS_Connectivity">Connectivity</h2>
<!-- backwards compatibility -->
<a id="schemaconnectivity"></a>
<a id="schema_Connectivity"></a>
<a id="tocSconnectivity"></a>
<a id="tocsconnectivity"></a>

```json
"CONNECTED"
```

<h2 id="tocS_NetworkBindings">NetworkBindings</h2>
<!-- backwards compatibility -->
<a id="schemanetworkbindings"></a>
<a id="schema_NetworkBindings"></a>
<a id="tocSnetworkbindings"></a>
<a id="tocsnetworkbindings"></a>

```json
[
  {
    "bindIP": {},
    "containerPort": {},
    "hostPort": {},
    "protocol": {},
    "containerPortRange": {},
    "hostPortRange": {}
  }
]
```

<h2 id="tocS_NetworkInterfaces">NetworkInterfaces</h2>
<!-- backwards compatibility -->
<a id="schemanetworkinterfaces"></a>
<a id="schema_NetworkInterfaces"></a>
<a id="tocSnetworkinterfaces"></a>
<a id="tocsnetworkinterfaces"></a>

```json
[
  {
    "attachmentId": {},
    "privateIpv4Address": {},
    "ipv6Address": {}
  }
]
```

<h2 id="tocS_HealthStatus">HealthStatus</h2>
<!-- backwards compatibility -->
<a id="schemahealthstatus"></a>
<a id="schema_HealthStatus"></a>
<a id="tocShealthstatus"></a>
<a id="tocshealthstatus"></a>

```json
"HEALTHY"
```

<h2 id="tocS_ManagedAgents">ManagedAgents</h2>
<!-- backwards compatibility -->
<a id="schemamanagedagents"></a>
<a id="schema_ManagedAgents"></a>
<a id="tocSmanagedagents"></a>
<a id="tocsmanagedagents"></a>

```json
[
  {
    "lastStartedAt": {},
    "name": {},
    "reason": {},
    "lastStatus": {}
  }
]
```

<h2 id="tocS_GpuIds">GpuIds</h2>
<!-- backwards compatibility -->
<a id="schemagpuids"></a>
<a id="schema_GpuIds"></a>
<a id="tocSgpuids"></a>
<a id="tocsgpuids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Container">Container</h2>
<!-- backwards compatibility -->
<a id="schemacontainer"></a>
<a id="schema_Container"></a>
<a id="tocScontainer"></a>
<a id="tocscontainer"></a>

```json
{
  "containerArn": {},
  "taskArn": {},
  "name": {},
  "image": {},
  "imageDigest": {},
  "runtimeId": {},
  "lastStatus": {},
  "exitCode": {},
  "reason": {},
  "networkBindings": {},
  "networkInterfaces": {},
  "healthStatus": {},
  "managedAgents": {},
  "cpu": {},
  "memory": {},
  "memoryReservation": {},
  "gpuIds": {}
}
```

A Docker container that's part of a task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containerArn|object|false|none|none|
|taskArn|object|false|none|none|
|name|object|false|none|none|
|image|object|false|none|none|
|imageDigest|object|false|none|none|
|runtimeId|object|false|none|none|
|lastStatus|object|false|none|none|
|exitCode|object|false|none|none|
|reason|object|false|none|none|
|networkBindings|object|false|none|none|
|networkInterfaces|object|false|none|none|
|healthStatus|object|false|none|none|
|managedAgents|object|false|none|none|
|cpu|object|false|none|none|
|memory|object|false|none|none|
|memoryReservation|object|false|none|none|
|gpuIds|object|false|none|none|

<h2 id="tocS_ContainerCondition">ContainerCondition</h2>
<!-- backwards compatibility -->
<a id="schemacontainercondition"></a>
<a id="schema_ContainerCondition"></a>
<a id="tocScontainercondition"></a>
<a id="tocscontainercondition"></a>

```json
"START"
```

<h2 id="tocS_RepositoryCredentials">RepositoryCredentials</h2>
<!-- backwards compatibility -->
<a id="schemarepositorycredentials"></a>
<a id="schema_RepositoryCredentials"></a>
<a id="tocSrepositorycredentials"></a>
<a id="tocsrepositorycredentials"></a>

```json
{
  "credentialsParameter": {}
}
```

The repository credentials for private registry authentication.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|credentialsParameter|object|true|none|none|

<h2 id="tocS_PortMappingList">PortMappingList</h2>
<!-- backwards compatibility -->
<a id="schemaportmappinglist"></a>
<a id="schema_PortMappingList"></a>
<a id="tocSportmappinglist"></a>
<a id="tocsportmappinglist"></a>

```json
[
  {
    "containerPort": {},
    "hostPort": {},
    "protocol": {},
    "name": {},
    "appProtocol": {},
    "containerPortRange": {}
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

<h2 id="tocS_EnvironmentFiles">EnvironmentFiles</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentfiles"></a>
<a id="schema_EnvironmentFiles"></a>
<a id="tocSenvironmentfiles"></a>
<a id="tocsenvironmentfiles"></a>

```json
[
  {
    "value": {},
    "type": {}
  }
]
```

<h2 id="tocS_MountPointList">MountPointList</h2>
<!-- backwards compatibility -->
<a id="schemamountpointlist"></a>
<a id="schema_MountPointList"></a>
<a id="tocSmountpointlist"></a>
<a id="tocsmountpointlist"></a>

```json
[
  {
    "sourceVolume": {},
    "containerPath": {},
    "readOnly": {}
  }
]
```

<h2 id="tocS_VolumeFromList">VolumeFromList</h2>
<!-- backwards compatibility -->
<a id="schemavolumefromlist"></a>
<a id="schema_VolumeFromList"></a>
<a id="tocSvolumefromlist"></a>
<a id="tocsvolumefromlist"></a>

```json
[
  {
    "sourceContainer": {},
    "readOnly": {}
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
  "capabilities": {
    "add": {},
    "drop": {}
  },
  "devices": {},
  "initProcessEnabled": {},
  "sharedMemorySize": {},
  "tmpfs": {},
  "maxSwap": {},
  "swappiness": {}
}
```

The Linux-specific options that are applied to the container, such as Linux <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_KernelCapabilities.html">KernelCapabilities</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capabilities|object|false|none|none|
|devices|object|false|none|none|
|initProcessEnabled|object|false|none|none|
|sharedMemorySize|object|false|none|none|
|tmpfs|object|false|none|none|
|maxSwap|object|false|none|none|
|swappiness|object|false|none|none|

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

<h2 id="tocS_ContainerDependencies">ContainerDependencies</h2>
<!-- backwards compatibility -->
<a id="schemacontainerdependencies"></a>
<a id="schema_ContainerDependencies"></a>
<a id="tocScontainerdependencies"></a>
<a id="tocscontainerdependencies"></a>

```json
[
  {
    "containerName": {},
    "condition": {}
  }
]
```

<h2 id="tocS_HostEntryList">HostEntryList</h2>
<!-- backwards compatibility -->
<a id="schemahostentrylist"></a>
<a id="schema_HostEntryList"></a>
<a id="tocShostentrylist"></a>
<a id="tocshostentrylist"></a>

```json
[
  {
    "hostname": {},
    "ipAddress": {}
  }
]
```

<h2 id="tocS_DockerLabelsMap">DockerLabelsMap</h2>
<!-- backwards compatibility -->
<a id="schemadockerlabelsmap"></a>
<a id="schema_DockerLabelsMap"></a>
<a id="tocSdockerlabelsmap"></a>
<a id="tocsdockerlabelsmap"></a>

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

<h2 id="tocS_UlimitList">UlimitList</h2>
<!-- backwards compatibility -->
<a id="schemaulimitlist"></a>
<a id="schema_UlimitList"></a>
<a id="tocSulimitlist"></a>
<a id="tocsulimitlist"></a>

```json
[
  {
    "name": {},
    "softLimit": {},
    "hardLimit": {}
  }
]
```

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

<p>The log configuration for the container. This parameter maps to <code>LogConfig</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--log-driver</code> option to <a href="https://docs.docker.com/engine/reference/commandline/run/"> <code>docker run</code> </a>.</p> <p>By default, containers use the same logging driver that the Docker daemon uses. However, the container might use a different logging driver than the Docker daemon by specifying a log driver configuration in the container definition. For more information about the options for different supported log drivers, see <a href="https://docs.docker.com/engine/admin/logging/overview/">Configure logging drivers</a> in the Docker documentation.</p> <p>Understand the following when specifying a log configuration for your containers.</p> <ul> <li> <p>Amazon ECS currently supports a subset of the logging drivers available to the Docker daemon. Additional log drivers may be available in future releases of the Amazon ECS container agent.</p> <p>For tasks on Fargate, the supported log drivers are <code>awslogs</code>, <code>splunk</code>, and <code>awsfirelens</code>.</p> <p>For tasks hosted on Amazon EC2 instances, the supported log drivers are <code>awslogs</code>, <code>fluentd</code>, <code>gelf</code>, <code>json-file</code>, <code>journald</code>, <code>logentries</code>,<code>syslog</code>, <code>splunk</code>, and <code>awsfirelens</code>.</p> </li> <li> <p>This parameter requires version 1.18 of the Docker Remote API or greater on your container instance.</p> </li> <li> <p>For tasks that are hosted on Amazon EC2 instances, the Amazon ECS container agent must register the available logging drivers with the <code>ECS_AVAILABLE_LOGGING_DRIVERS</code> environment variable before containers placed on that instance can use these log configuration options. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS container agent configuration</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </li> <li> <p>For tasks that are on Fargate, because you don't have access to the underlying infrastructure your tasks are hosted on, any additional software needed must be installed outside of the task. For example, the Fluentd output aggregators or a remote host running Logstash to send Gelf logs to.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logDriver|object|true|none|none|
|options|object|false|none|none|
|secretOptions|object|false|none|none|

<h2 id="tocS_HealthCheck">HealthCheck</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheck"></a>
<a id="schema_HealthCheck"></a>
<a id="tocShealthcheck"></a>
<a id="tocshealthcheck"></a>

```json
{
  "command": {},
  "interval": {},
  "timeout": {},
  "retries": {},
  "startPeriod": {}
}
```

<p>An object representing a container health check. Health check parameters that are specified in a container definition override any Docker health checks that exist in the container image (such as those specified in a parent image or from the image's Dockerfile). This configuration maps to the <code>HEALTHCHECK</code> parameter of <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p> <note> <p>The Amazon ECS container agent only monitors and reports on the health checks specified in the task definition. Amazon ECS does not monitor Docker health checks that are embedded in a container image and not specified in the container definition. Health check parameters that are specified in a container definition override any Docker health checks that exist in the container image.</p> </note> <p>You can view the health status of both individual containers and a task with the DescribeTasks API operation or when viewing the task details in the console.</p> <p>The health check is designed to make sure that your containers survive agent restarts, upgrades, or temporary unavailability.</p> <p>The following describes the possible <code>healthStatus</code> values for a container:</p> <ul> <li> <p> <code>HEALTHY</code>-The container health check has passed successfully.</p> </li> <li> <p> <code>UNHEALTHY</code>-The container health check has failed.</p> </li> <li> <p> <code>UNKNOWN</code>-The container health check is being evaluated or there's no container health check defined.</p> </li> </ul> <p>The following describes the possible <code>healthStatus</code> values for a task. The container health check status of non-essential containers don't have an effect on the health status of a task.</p> <ul> <li> <p> <code>HEALTHY</code>-All essential containers within the task have passed their health checks.</p> </li> <li> <p> <code>UNHEALTHY</code>-One or more essential containers have failed their health check.</p> </li> <li> <p> <code>UNKNOWN</code>-The essential containers within the task are still having their health checks evaluated, there are only nonessential containers with health checks defined, or there are no container health checks defined.</p> </li> </ul> <p>If a task is run manually, and not as part of a service, the task will continue its lifecycle regardless of its health status. For tasks that are part of a service, if the task reports as unhealthy then the task will be stopped and the service scheduler will replace it.</p> <p>The following are notes about container health check support:</p> <ul> <li> <p>When the Amazon ECS agent cannot connect to the Amazon ECS service, the service reports the container as <code>UNHEALTHY</code>. </p> </li> <li> <p>The health check statuses are the "last heard from" response from the Amazon ECS agent. There are no assumptions made about the status of the container health checks.</p> </li> <li> <p>Container health checks require version 1.17.0 or greater of the Amazon ECS container agent. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html">Updating the Amazon ECS container agent</a>.</p> </li> <li> <p>Container health checks are supported for Fargate tasks if you're using platform version <code>1.1.0</code> or greater. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">Fargate platform versions</a>.</p> </li> <li> <p>Container health checks aren't supported for tasks that are part of a service that's configured to use a Classic Load Balancer.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|command|object|true|none|none|
|interval|object|false|none|none|
|timeout|object|false|none|none|
|retries|object|false|none|none|
|startPeriod|object|false|none|none|

<h2 id="tocS_SystemControls">SystemControls</h2>
<!-- backwards compatibility -->
<a id="schemasystemcontrols"></a>
<a id="schema_SystemControls"></a>
<a id="tocSsystemcontrols"></a>
<a id="tocssystemcontrols"></a>

```json
[
  {
    "namespace": {},
    "value": {}
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

<h2 id="tocS_FirelensConfiguration">FirelensConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemafirelensconfiguration"></a>
<a id="schema_FirelensConfiguration"></a>
<a id="tocSfirelensconfiguration"></a>
<a id="tocsfirelensconfiguration"></a>

```json
{
  "type": {},
  "options": {
    "property1": "string",
    "property2": "string"
  }
}
```

The FireLens configuration for the container. This is used to specify and configure a log router for container logs. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html">Custom log routing</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|true|none|none|
|options|object|false|none|none|

<h2 id="tocS_ContainerDefinition">ContainerDefinition</h2>
<!-- backwards compatibility -->
<a id="schemacontainerdefinition"></a>
<a id="schema_ContainerDefinition"></a>
<a id="tocScontainerdefinition"></a>
<a id="tocscontainerdefinition"></a>

```json
{
  "name": {},
  "image": {},
  "repositoryCredentials": {
    "credentialsParameter": {}
  },
  "cpu": {},
  "memory": {},
  "memoryReservation": {},
  "links": {},
  "portMappings": {},
  "essential": {},
  "entryPoint": {},
  "command": {},
  "environment": {},
  "environmentFiles": {},
  "mountPoints": {},
  "volumesFrom": {},
  "linuxParameters": {
    "capabilities": {
      "add": {},
      "drop": {}
    },
    "devices": {},
    "initProcessEnabled": {},
    "sharedMemorySize": {},
    "tmpfs": {},
    "maxSwap": {},
    "swappiness": {}
  },
  "secrets": {},
  "dependsOn": {},
  "startTimeout": {},
  "stopTimeout": {},
  "hostname": {},
  "user": {},
  "workingDirectory": {},
  "disableNetworking": {},
  "privileged": {},
  "readonlyRootFilesystem": {},
  "dnsServers": {},
  "dnsSearchDomains": {},
  "extraHosts": {},
  "dockerSecurityOptions": {},
  "interactive": {},
  "pseudoTerminal": {},
  "dockerLabels": {
    "property1": "string",
    "property2": "string"
  },
  "ulimits": {},
  "logConfiguration": {
    "logDriver": {},
    "options": {
      "property1": "string",
      "property2": "string"
    },
    "secretOptions": {}
  },
  "healthCheck": {
    "command": {},
    "interval": {},
    "timeout": {},
    "retries": {},
    "startPeriod": {}
  },
  "systemControls": {},
  "resourceRequirements": {},
  "firelensConfiguration": {
    "type": {},
    "options": {
      "property1": "string",
      "property2": "string"
    }
  },
  "credentialSpecs": {}
}
```

Container definitions are used in task definitions to describe the different containers that are launched as part of a task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|image|object|false|none|none|
|repositoryCredentials|object|false|none|none|
|cpu|object|false|none|none|
|memory|object|false|none|none|
|memoryReservation|object|false|none|none|
|links|object|false|none|none|
|portMappings|object|false|none|none|
|essential|object|false|none|none|
|entryPoint|object|false|none|none|
|command|object|false|none|none|
|environment|object|false|none|none|
|environmentFiles|object|false|none|none|
|mountPoints|object|false|none|none|
|volumesFrom|object|false|none|none|
|linuxParameters|object|false|none|none|
|secrets|object|false|none|none|
|dependsOn|object|false|none|none|
|startTimeout|object|false|none|none|
|stopTimeout|object|false|none|none|
|hostname|object|false|none|none|
|user|object|false|none|none|
|workingDirectory|object|false|none|none|
|disableNetworking|object|false|none|none|
|privileged|object|false|none|none|
|readonlyRootFilesystem|object|false|none|none|
|dnsServers|object|false|none|none|
|dnsSearchDomains|object|false|none|none|
|extraHosts|object|false|none|none|
|dockerSecurityOptions|object|false|none|none|
|interactive|object|false|none|none|
|pseudoTerminal|object|false|none|none|
|dockerLabels|object|false|none|none|
|ulimits|object|false|none|none|
|logConfiguration|object|false|none|none|
|healthCheck|object|false|none|none|
|systemControls|object|false|none|none|
|resourceRequirements|object|false|none|none|
|firelensConfiguration|object|false|none|none|
|credentialSpecs|object|false|none|none|

<h2 id="tocS_ContainerDefinitions">ContainerDefinitions</h2>
<!-- backwards compatibility -->
<a id="schemacontainerdefinitions"></a>
<a id="schema_ContainerDefinitions"></a>
<a id="tocScontainerdefinitions"></a>
<a id="tocscontainerdefinitions"></a>

```json
[
  {
    "name": {},
    "image": {},
    "repositoryCredentials": {
      "credentialsParameter": {}
    },
    "cpu": {},
    "memory": {},
    "memoryReservation": {},
    "links": {},
    "portMappings": {},
    "essential": {},
    "entryPoint": {},
    "command": {},
    "environment": {},
    "environmentFiles": {},
    "mountPoints": {},
    "volumesFrom": {},
    "linuxParameters": {
      "capabilities": {
        "add": {},
        "drop": {}
      },
      "devices": {},
      "initProcessEnabled": {},
      "sharedMemorySize": {},
      "tmpfs": {},
      "maxSwap": {},
      "swappiness": {}
    },
    "secrets": {},
    "dependsOn": {},
    "startTimeout": {},
    "stopTimeout": {},
    "hostname": {},
    "user": {},
    "workingDirectory": {},
    "disableNetworking": {},
    "privileged": {},
    "readonlyRootFilesystem": {},
    "dnsServers": {},
    "dnsSearchDomains": {},
    "extraHosts": {},
    "dockerSecurityOptions": {},
    "interactive": {},
    "pseudoTerminal": {},
    "dockerLabels": {
      "property1": "string",
      "property2": "string"
    },
    "ulimits": {},
    "logConfiguration": {
      "logDriver": {},
      "options": {
        "property1": "string",
        "property2": "string"
      },
      "secretOptions": {}
    },
    "healthCheck": {
      "command": {},
      "interval": {},
      "timeout": {},
      "retries": {},
      "startPeriod": {}
    },
    "systemControls": {},
    "resourceRequirements": {},
    "firelensConfiguration": {
      "type": {},
      "options": {
        "property1": "string",
        "property2": "string"
      }
    },
    "credentialSpecs": {}
  }
]
```

<h2 id="tocS_ContainerDependency">ContainerDependency</h2>
<!-- backwards compatibility -->
<a id="schemacontainerdependency"></a>
<a id="schema_ContainerDependency"></a>
<a id="tocScontainerdependency"></a>
<a id="tocscontainerdependency"></a>

```json
{
  "containerName": {},
  "condition": {}
}
```

<p>The dependencies defined for container startup and shutdown. A container can contain multiple dependencies. When a dependency is defined for container startup, for container shutdown it is reversed.</p> <p>Your Amazon ECS container instances require at least version 1.26.0 of the container agent to use container dependencies. However, we recommend using the latest container agent version. For information about checking your agent version and updating to the latest version, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html">Updating the Amazon ECS Container Agent</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. If you're using an Amazon ECS-optimized Linux AMI, your instance needs at least version 1.26.0-1 of the <code>ecs-init</code> package. If your container instances are launched from version <code>20190301</code> or later, then they contain the required versions of the container agent and <code>ecs-init</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html">Amazon ECS-optimized Linux AMI</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <note> <p>For tasks that use the Fargate launch type, the task or service requires the following platforms:</p> <ul> <li> <p>Linux platform version <code>1.3.0</code> or later.</p> </li> <li> <p>Windows platform version <code>1.0.0</code> or later.</p> </li> </ul> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containerName|object|true|none|none|
|condition|object|true|none|none|

<h2 id="tocS_Long">Long</h2>
<!-- backwards compatibility -->
<a id="schemalong"></a>
<a id="schema_Long"></a>
<a id="tocSlong"></a>
<a id="tocslong"></a>

```json
0
```

<h2 id="tocS_VersionInfo">VersionInfo</h2>
<!-- backwards compatibility -->
<a id="schemaversioninfo"></a>
<a id="schema_VersionInfo"></a>
<a id="tocSversioninfo"></a>
<a id="tocsversioninfo"></a>

```json
{
  "agentVersion": {},
  "agentHash": {},
  "dockerVersion": {}
}
```

The Docker and Amazon ECS container agent version information about a container instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentVersion|object|false|none|none|
|agentHash|object|false|none|none|
|dockerVersion|object|false|none|none|

<h2 id="tocS_Resources">Resources</h2>
<!-- backwards compatibility -->
<a id="schemaresources"></a>
<a id="schema_Resources"></a>
<a id="tocSresources"></a>
<a id="tocsresources"></a>

```json
[
  {
    "name": {},
    "type": {},
    "doubleValue": {},
    "longValue": {},
    "integerValue": {},
    "stringSetValue": {}
  }
]
```

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ContainerInstanceHealthStatus">ContainerInstanceHealthStatus</h2>
<!-- backwards compatibility -->
<a id="schemacontainerinstancehealthstatus"></a>
<a id="schema_ContainerInstanceHealthStatus"></a>
<a id="tocScontainerinstancehealthstatus"></a>
<a id="tocscontainerinstancehealthstatus"></a>

```json
{
  "overallStatus": {},
  "details": {}
}
```

An object representing the health status of the container instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|overallStatus|object|false|none|none|
|details|object|false|none|none|

<h2 id="tocS_ContainerInstance">ContainerInstance</h2>
<!-- backwards compatibility -->
<a id="schemacontainerinstance"></a>
<a id="schema_ContainerInstance"></a>
<a id="tocScontainerinstance"></a>
<a id="tocscontainerinstance"></a>

```json
{
  "containerInstanceArn": {},
  "ec2InstanceId": {},
  "capacityProviderName": {},
  "version": {},
  "versionInfo": {
    "agentVersion": {},
    "agentHash": {},
    "dockerVersion": {}
  },
  "remainingResources": {},
  "registeredResources": {},
  "status": {},
  "statusReason": {},
  "agentConnected": {},
  "runningTasksCount": {},
  "pendingTasksCount": {},
  "agentUpdateStatus": {},
  "attributes": {},
  "registeredAt": {},
  "attachments": {},
  "tags": {},
  "healthStatus": {
    "overallStatus": {},
    "details": {}
  }
}
```

An Amazon EC2 or External instance that's running the Amazon ECS agent and has been registered with a cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containerInstanceArn|object|false|none|none|
|ec2InstanceId|object|false|none|none|
|capacityProviderName|object|false|none|none|
|version|object|false|none|none|
|versionInfo|object|false|none|none|
|remainingResources|object|false|none|none|
|registeredResources|object|false|none|none|
|status|object|false|none|none|
|statusReason|object|false|none|none|
|agentConnected|object|false|none|none|
|runningTasksCount|object|false|none|none|
|pendingTasksCount|object|false|none|none|
|agentUpdateStatus|object|false|none|none|
|attributes|object|false|none|none|
|registeredAt|object|false|none|none|
|attachments|object|false|none|none|
|tags|object|false|none|none|
|healthStatus|object|false|none|none|

<h2 id="tocS_ContainerInstanceField">ContainerInstanceField</h2>
<!-- backwards compatibility -->
<a id="schemacontainerinstancefield"></a>
<a id="schema_ContainerInstanceField"></a>
<a id="tocScontainerinstancefield"></a>
<a id="tocscontainerinstancefield"></a>

```json
"TAGS"
```

<h2 id="tocS_ContainerInstanceFieldList">ContainerInstanceFieldList</h2>
<!-- backwards compatibility -->
<a id="schemacontainerinstancefieldlist"></a>
<a id="schema_ContainerInstanceFieldList"></a>
<a id="tocScontainerinstancefieldlist"></a>
<a id="tocscontainerinstancefieldlist"></a>

```json
[
  "TAGS"
]
```

<h2 id="tocS_InstanceHealthCheckState">InstanceHealthCheckState</h2>
<!-- backwards compatibility -->
<a id="schemainstancehealthcheckstate"></a>
<a id="schema_InstanceHealthCheckState"></a>
<a id="tocSinstancehealthcheckstate"></a>
<a id="tocsinstancehealthcheckstate"></a>

```json
"OK"
```

<h2 id="tocS_InstanceHealthCheckResultList">InstanceHealthCheckResultList</h2>
<!-- backwards compatibility -->
<a id="schemainstancehealthcheckresultlist"></a>
<a id="schema_InstanceHealthCheckResultList"></a>
<a id="tocSinstancehealthcheckresultlist"></a>
<a id="tocsinstancehealthcheckresultlist"></a>

```json
[
  {
    "type": {},
    "status": {},
    "lastUpdated": {},
    "lastStatusChange": {}
  }
]
```

<h2 id="tocS_ContainerInstanceStatus">ContainerInstanceStatus</h2>
<!-- backwards compatibility -->
<a id="schemacontainerinstancestatus"></a>
<a id="schema_ContainerInstanceStatus"></a>
<a id="tocScontainerinstancestatus"></a>
<a id="tocscontainerinstancestatus"></a>

```json
"ACTIVE"
```

<h2 id="tocS_ContainerInstances">ContainerInstances</h2>
<!-- backwards compatibility -->
<a id="schemacontainerinstances"></a>
<a id="schema_ContainerInstances"></a>
<a id="tocScontainerinstances"></a>
<a id="tocscontainerinstances"></a>

```json
[
  {
    "containerInstanceArn": {},
    "ec2InstanceId": {},
    "capacityProviderName": {},
    "version": {},
    "versionInfo": {
      "agentVersion": {},
      "agentHash": {},
      "dockerVersion": {}
    },
    "remainingResources": {},
    "registeredResources": {},
    "status": {},
    "statusReason": {},
    "agentConnected": {},
    "runningTasksCount": {},
    "pendingTasksCount": {},
    "agentUpdateStatus": {},
    "attributes": {},
    "registeredAt": {},
    "attachments": {},
    "tags": {},
    "healthStatus": {
      "overallStatus": {},
      "details": {}
    }
  }
]
```

<h2 id="tocS_ContainerOverride">ContainerOverride</h2>
<!-- backwards compatibility -->
<a id="schemacontaineroverride"></a>
<a id="schema_ContainerOverride"></a>
<a id="tocScontaineroverride"></a>
<a id="tocscontaineroverride"></a>

```json
{
  "name": {},
  "command": {},
  "environment": {},
  "environmentFiles": {},
  "cpu": {},
  "memory": {},
  "memoryReservation": {},
  "resourceRequirements": {}
}
```

<p>The overrides that are sent to a container. An empty container override can be passed in. An example of an empty container override is <code>{"containerOverrides": [ ] }</code>. If a non-empty container override is specified, the <code>name</code> parameter must be included.</p> <p>You can use Secrets Manager or Amazon Web Services Systems Manager Parameter Store to store the sensitive data. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/secrets-envvar.html">Retrieve secrets through environment variables</a> in the Amazon ECS Developer Guide.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|command|object|false|none|none|
|environment|object|false|none|none|
|environmentFiles|object|false|none|none|
|cpu|object|false|none|none|
|memory|object|false|none|none|
|memoryReservation|object|false|none|none|
|resourceRequirements|object|false|none|none|

<h2 id="tocS_ContainerOverrides">ContainerOverrides</h2>
<!-- backwards compatibility -->
<a id="schemacontaineroverrides"></a>
<a id="schema_ContainerOverrides"></a>
<a id="tocScontaineroverrides"></a>
<a id="tocscontaineroverrides"></a>

```json
[
  {
    "name": {},
    "command": {},
    "environment": {},
    "environmentFiles": {},
    "cpu": {},
    "memory": {},
    "memoryReservation": {},
    "resourceRequirements": {}
  }
]
```

<h2 id="tocS_ContainerStateChange">ContainerStateChange</h2>
<!-- backwards compatibility -->
<a id="schemacontainerstatechange"></a>
<a id="schema_ContainerStateChange"></a>
<a id="tocScontainerstatechange"></a>
<a id="tocscontainerstatechange"></a>

```json
{
  "containerName": {},
  "imageDigest": {},
  "runtimeId": {},
  "exitCode": {},
  "networkBindings": {},
  "reason": {},
  "status": {}
}
```

An object that represents a change in state for a container.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containerName|object|false|none|none|
|imageDigest|object|false|none|none|
|runtimeId|object|false|none|none|
|exitCode|object|false|none|none|
|networkBindings|object|false|none|none|
|reason|object|false|none|none|
|status|object|false|none|none|

<h2 id="tocS_ContainerStateChanges">ContainerStateChanges</h2>
<!-- backwards compatibility -->
<a id="schemacontainerstatechanges"></a>
<a id="schema_ContainerStateChanges"></a>
<a id="tocScontainerstatechanges"></a>
<a id="tocscontainerstatechanges"></a>

```json
[
  {
    "containerName": {},
    "imageDigest": {},
    "runtimeId": {},
    "exitCode": {},
    "networkBindings": {},
    "reason": {},
    "status": {}
  }
]
```

<h2 id="tocS_Containers">Containers</h2>
<!-- backwards compatibility -->
<a id="schemacontainers"></a>
<a id="schema_Containers"></a>
<a id="tocScontainers"></a>
<a id="tocscontainers"></a>

```json
[
  {
    "containerArn": {},
    "taskArn": {},
    "name": {},
    "image": {},
    "imageDigest": {},
    "runtimeId": {},
    "lastStatus": {},
    "exitCode": {},
    "reason": {},
    "networkBindings": {},
    "networkInterfaces": {},
    "healthStatus": {},
    "managedAgents": {},
    "cpu": {},
    "memory": {},
    "memoryReservation": {},
    "gpuIds": {}
  }
]
```

<h2 id="tocS_LoadBalancers">LoadBalancers</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancers"></a>
<a id="schema_LoadBalancers"></a>
<a id="tocSloadbalancers"></a>
<a id="tocsloadbalancers"></a>

```json
[
  {
    "targetGroupArn": {},
    "loadBalancerName": {},
    "containerName": {},
    "containerPort": {}
  }
]
```

<h2 id="tocS_ServiceRegistries">ServiceRegistries</h2>
<!-- backwards compatibility -->
<a id="schemaserviceregistries"></a>
<a id="schema_ServiceRegistries"></a>
<a id="tocSserviceregistries"></a>
<a id="tocsserviceregistries"></a>

```json
[
  {
    "registryArn": {},
    "port": {},
    "containerName": {},
    "containerPort": {}
  }
]
```

<h2 id="tocS_LaunchType">LaunchType</h2>
<!-- backwards compatibility -->
<a id="schemalaunchtype"></a>
<a id="schema_LaunchType"></a>
<a id="tocSlaunchtype"></a>
<a id="tocslaunchtype"></a>

```json
"EC2"
```

<h2 id="tocS_DeploymentConfiguration">DeploymentConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentconfiguration"></a>
<a id="schema_DeploymentConfiguration"></a>
<a id="tocSdeploymentconfiguration"></a>
<a id="tocsdeploymentconfiguration"></a>

```json
{
  "deploymentCircuitBreaker": {
    "enable": {},
    "rollback": {}
  },
  "maximumPercent": {},
  "minimumHealthyPercent": {},
  "alarms": {
    "alarmNames": {},
    "enable": {},
    "rollback": {}
  }
}
```

Optional deployment parameters that control how many tasks run during a deployment and the ordering of stopping and starting tasks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentCircuitBreaker|object|false|none|none|
|maximumPercent|object|false|none|none|
|minimumHealthyPercent|object|false|none|none|
|alarms|object|false|none|none|

<h2 id="tocS_PlacementConstraints">PlacementConstraints</h2>
<!-- backwards compatibility -->
<a id="schemaplacementconstraints"></a>
<a id="schema_PlacementConstraints"></a>
<a id="tocSplacementconstraints"></a>
<a id="tocsplacementconstraints"></a>

```json
[
  {
    "type": {},
    "expression": {}
  }
]
```

<h2 id="tocS_PlacementStrategies">PlacementStrategies</h2>
<!-- backwards compatibility -->
<a id="schemaplacementstrategies"></a>
<a id="schema_PlacementStrategies"></a>
<a id="tocSplacementstrategies"></a>
<a id="tocsplacementstrategies"></a>

```json
[
  {
    "type": {},
    "field": {}
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
  "awsvpcConfiguration": {
    "subnets": {},
    "securityGroups": {},
    "assignPublicIp": {}
  }
}
```

The network configuration for a task or service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|awsvpcConfiguration|object|false|none|none|

<h2 id="tocS_SchedulingStrategy">SchedulingStrategy</h2>
<!-- backwards compatibility -->
<a id="schemaschedulingstrategy"></a>
<a id="schema_SchedulingStrategy"></a>
<a id="tocSschedulingstrategy"></a>
<a id="tocsschedulingstrategy"></a>

```json
"REPLICA"
```

<h2 id="tocS_DeploymentController">DeploymentController</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentcontroller"></a>
<a id="schema_DeploymentController"></a>
<a id="tocSdeploymentcontroller"></a>
<a id="tocsdeploymentcontroller"></a>

```json
{
  "type": {}
}
```

The deployment controller to use for the service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS deployment types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|true|none|none|

<h2 id="tocS_PropagateTags">PropagateTags</h2>
<!-- backwards compatibility -->
<a id="schemapropagatetags"></a>
<a id="schema_PropagateTags"></a>
<a id="tocSpropagatetags"></a>
<a id="tocspropagatetags"></a>

```json
"TASK_DEFINITION"
```

<h2 id="tocS_ServiceConnectConfiguration">ServiceConnectConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaserviceconnectconfiguration"></a>
<a id="schema_ServiceConnectConfiguration"></a>
<a id="tocSserviceconnectconfiguration"></a>
<a id="tocsserviceconnectconfiguration"></a>

```json
{
  "enabled": {},
  "namespace": {},
  "services": {},
  "logConfiguration": {
    "logDriver": {},
    "options": {
      "property1": "string",
      "property2": "string"
    },
    "secretOptions": {}
  }
}
```

<p>The Service Connect configuration of your Amazon ECS service. The configuration for this service to discover and connect to services, and be discovered by, and connected from, other services within a namespace.</p> <p>Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|object|true|none|none|
|namespace|object|false|none|none|
|services|object|false|none|none|
|logConfiguration|[LogConfiguration](#schemalogconfiguration)|false|none|<p>The log configuration for the container. This parameter maps to <code>LogConfig</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--log-driver</code> option to <a href="https://docs.docker.com/engine/reference/commandline/run/"> <code>docker run</code> </a>.</p> <p>By default, containers use the same logging driver that the Docker daemon uses. However, the container might use a different logging driver than the Docker daemon by specifying a log driver configuration in the container definition. For more information about the options for different supported log drivers, see <a href="https://docs.docker.com/engine/admin/logging/overview/">Configure logging drivers</a> in the Docker documentation.</p> <p>Understand the following when specifying a log configuration for your containers.</p> <ul> <li> <p>Amazon ECS currently supports a subset of the logging drivers available to the Docker daemon. Additional log drivers may be available in future releases of the Amazon ECS container agent.</p> <p>For tasks on Fargate, the supported log drivers are <code>awslogs</code>, <code>splunk</code>, and <code>awsfirelens</code>.</p> <p>For tasks hosted on Amazon EC2 instances, the supported log drivers are <code>awslogs</code>, <code>fluentd</code>, <code>gelf</code>, <code>json-file</code>, <code>journald</code>, <code>logentries</code>,<code>syslog</code>, <code>splunk</code>, and <code>awsfirelens</code>.</p> </li> <li> <p>This parameter requires version 1.18 of the Docker Remote API or greater on your container instance.</p> </li> <li> <p>For tasks that are hosted on Amazon EC2 instances, the Amazon ECS container agent must register the available logging drivers with the <code>ECS_AVAILABLE_LOGGING_DRIVERS</code> environment variable before containers placed on that instance can use these log configuration options. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS container agent configuration</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </li> <li> <p>For tasks that are on Fargate, because you don't have access to the underlying infrastructure your tasks are hosted on, any additional software needed must be installed outside of the task. For example, the Fluentd output aggregators or a remote host running Logstash to send Gelf logs to.</p> </li> </ul>|

<h2 id="tocS_Service">Service</h2>
<!-- backwards compatibility -->
<a id="schemaservice"></a>
<a id="schema_Service"></a>
<a id="tocSservice"></a>
<a id="tocsservice"></a>

```json
{
  "serviceArn": {},
  "serviceName": {},
  "clusterArn": {},
  "loadBalancers": {},
  "serviceRegistries": {},
  "status": {},
  "desiredCount": {},
  "runningCount": {},
  "pendingCount": {},
  "launchType": {},
  "capacityProviderStrategy": {},
  "platformVersion": {},
  "platformFamily": {},
  "taskDefinition": {},
  "deploymentConfiguration": {
    "deploymentCircuitBreaker": {
      "enable": {},
      "rollback": {}
    },
    "maximumPercent": {},
    "minimumHealthyPercent": {},
    "alarms": {
      "alarmNames": {},
      "enable": {},
      "rollback": {}
    }
  },
  "taskSets": {},
  "deployments": {},
  "roleArn": {},
  "events": {},
  "createdAt": {},
  "placementConstraints": {},
  "placementStrategy": {},
  "networkConfiguration": {
    "awsvpcConfiguration": {
      "subnets": {},
      "securityGroups": {},
      "assignPublicIp": {}
    }
  },
  "healthCheckGracePeriodSeconds": {},
  "schedulingStrategy": {},
  "deploymentController": {
    "type": {}
  },
  "tags": {},
  "createdBy": {},
  "enableECSManagedTags": {},
  "propagateTags": {},
  "enableExecuteCommand": {}
}
```

Details on a service within a cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceArn|object|false|none|none|
|serviceName|object|false|none|none|
|clusterArn|object|false|none|none|
|loadBalancers|object|false|none|none|
|serviceRegistries|object|false|none|none|
|status|object|false|none|none|
|desiredCount|object|false|none|none|
|runningCount|object|false|none|none|
|pendingCount|object|false|none|none|
|launchType|object|false|none|none|
|capacityProviderStrategy|object|false|none|none|
|platformVersion|object|false|none|none|
|platformFamily|object|false|none|none|
|taskDefinition|object|false|none|none|
|deploymentConfiguration|object|false|none|none|
|taskSets|object|false|none|none|
|deployments|object|false|none|none|
|roleArn|object|false|none|none|
|events|object|false|none|none|
|createdAt|object|false|none|none|
|placementConstraints|object|false|none|none|
|placementStrategy|object|false|none|none|
|networkConfiguration|object|false|none|none|
|healthCheckGracePeriodSeconds|object|false|none|none|
|schedulingStrategy|object|false|none|none|
|deploymentController|object|false|none|none|
|tags|object|false|none|none|
|createdBy|object|false|none|none|
|enableECSManagedTags|object|false|none|none|
|propagateTags|object|false|none|none|
|enableExecuteCommand|object|false|none|none|

<h2 id="tocS_Scale">Scale</h2>
<!-- backwards compatibility -->
<a id="schemascale"></a>
<a id="schema_Scale"></a>
<a id="tocSscale"></a>
<a id="tocsscale"></a>

```json
{
  "value": {},
  "unit": {}
}
```

A floating-point percentage of the desired number of tasks to place and keep running in the task set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|object|false|none|none|
|unit|object|false|none|none|

<h2 id="tocS_TaskSet">TaskSet</h2>
<!-- backwards compatibility -->
<a id="schemataskset"></a>
<a id="schema_TaskSet"></a>
<a id="tocStaskset"></a>
<a id="tocstaskset"></a>

```json
{
  "id": {},
  "taskSetArn": {},
  "serviceArn": {},
  "clusterArn": {},
  "startedBy": {},
  "externalId": {},
  "status": {},
  "taskDefinition": {},
  "computedDesiredCount": {},
  "pendingCount": {},
  "runningCount": {},
  "createdAt": {},
  "updatedAt": {},
  "launchType": {},
  "capacityProviderStrategy": {},
  "platformVersion": {},
  "platformFamily": {},
  "networkConfiguration": {
    "awsvpcConfiguration": {
      "subnets": {},
      "securityGroups": {},
      "assignPublicIp": {}
    }
  },
  "loadBalancers": {},
  "serviceRegistries": {},
  "scale": {
    "value": {},
    "unit": {}
  },
  "stabilityStatus": {},
  "stabilityStatusAt": {},
  "tags": {}
}
```

Information about a set of Amazon ECS tasks in either an CodeDeploy or an <code>EXTERNAL</code> deployment. An Amazon ECS task set includes details such as the desired number of tasks, how many tasks are running, and whether the task set serves production traffic.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|taskSetArn|object|false|none|none|
|serviceArn|object|false|none|none|
|clusterArn|object|false|none|none|
|startedBy|object|false|none|none|
|externalId|object|false|none|none|
|status|object|false|none|none|
|taskDefinition|object|false|none|none|
|computedDesiredCount|object|false|none|none|
|pendingCount|object|false|none|none|
|runningCount|object|false|none|none|
|createdAt|object|false|none|none|
|updatedAt|object|false|none|none|
|launchType|object|false|none|none|
|capacityProviderStrategy|object|false|none|none|
|platformVersion|object|false|none|none|
|platformFamily|object|false|none|none|
|networkConfiguration|object|false|none|none|
|loadBalancers|object|false|none|none|
|serviceRegistries|object|false|none|none|
|scale|object|false|none|none|
|stabilityStatus|object|false|none|none|
|stabilityStatusAt|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_SettingName">SettingName</h2>
<!-- backwards compatibility -->
<a id="schemasettingname"></a>
<a id="schema_SettingName"></a>
<a id="tocSsettingname"></a>
<a id="tocssettingname"></a>

```json
"serviceLongArnFormat"
```

<h2 id="tocS_Setting">Setting</h2>
<!-- backwards compatibility -->
<a id="schemasetting"></a>
<a id="schema_Setting"></a>
<a id="tocSsetting"></a>
<a id="tocssetting"></a>

```json
{
  "name": {},
  "value": {},
  "principalArn": {}
}
```

The current account setting for a resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|value|object|false|none|none|
|principalArn|object|false|none|none|

<h2 id="tocS_TaskDefinitionList">TaskDefinitionList</h2>
<!-- backwards compatibility -->
<a id="schemataskdefinitionlist"></a>
<a id="schema_TaskDefinitionList"></a>
<a id="tocStaskdefinitionlist"></a>
<a id="tocstaskdefinitionlist"></a>

```json
[
  {
    "taskDefinitionArn": {},
    "containerDefinitions": {},
    "family": {},
    "taskRoleArn": {},
    "executionRoleArn": {},
    "networkMode": {},
    "revision": {},
    "volumes": {},
    "status": {},
    "requiresAttributes": {},
    "placementConstraints": {},
    "compatibilities": {},
    "runtimePlatform": {
      "cpuArchitecture": {},
      "operatingSystemFamily": {}
    },
    "requiresCompatibilities": {},
    "cpu": {},
    "memory": {},
    "inferenceAccelerators": {},
    "pidMode": {},
    "ipcMode": {},
    "proxyConfiguration": {
      "type": {},
      "containerName": {},
      "properties": null
    },
    "registeredAt": {},
    "deregisteredAt": {},
    "registeredBy": {},
    "ephemeralStorage": {
      "sizeInGiB": {}
    }
  }
]
```

<h2 id="tocS_Failures">Failures</h2>
<!-- backwards compatibility -->
<a id="schemafailures"></a>
<a id="schema_Failures"></a>
<a id="tocSfailures"></a>
<a id="tocsfailures"></a>

```json
[
  {
    "arn": {},
    "reason": {},
    "detail": {}
  }
]
```

<h2 id="tocS_DeploymentRolloutState">DeploymentRolloutState</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentrolloutstate"></a>
<a id="schema_DeploymentRolloutState"></a>
<a id="tocSdeploymentrolloutstate"></a>
<a id="tocsdeploymentrolloutstate"></a>

```json
"COMPLETED"
```

<h2 id="tocS_ServiceConnectServiceResourceList">ServiceConnectServiceResourceList</h2>
<!-- backwards compatibility -->
<a id="schemaserviceconnectserviceresourcelist"></a>
<a id="schema_ServiceConnectServiceResourceList"></a>
<a id="tocSserviceconnectserviceresourcelist"></a>
<a id="tocsserviceconnectserviceresourcelist"></a>

```json
[
  {
    "discoveryName": {},
    "discoveryArn": {}
  }
]
```

<h2 id="tocS_Deployment">Deployment</h2>
<!-- backwards compatibility -->
<a id="schemadeployment"></a>
<a id="schema_Deployment"></a>
<a id="tocSdeployment"></a>
<a id="tocsdeployment"></a>

```json
{
  "id": {},
  "status": {},
  "taskDefinition": {},
  "desiredCount": {},
  "pendingCount": {},
  "runningCount": {},
  "failedTasks": {},
  "createdAt": {},
  "updatedAt": {},
  "capacityProviderStrategy": {},
  "launchType": {},
  "platformVersion": {},
  "platformFamily": {},
  "networkConfiguration": {
    "awsvpcConfiguration": {
      "subnets": {},
      "securityGroups": {},
      "assignPublicIp": {}
    }
  },
  "rolloutState": {},
  "rolloutStateReason": {},
  "serviceConnectConfiguration": {
    "enabled": {},
    "namespace": {},
    "services": {},
    "logConfiguration": {
      "logDriver": {},
      "options": {
        "property1": "string",
        "property2": "string"
      },
      "secretOptions": {}
    }
  },
  "serviceConnectResources": {}
}
```

The details of an Amazon ECS service deployment. This is used only when a service uses the <code>ECS</code> deployment controller type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|status|object|false|none|none|
|taskDefinition|object|false|none|none|
|desiredCount|object|false|none|none|
|pendingCount|object|false|none|none|
|runningCount|object|false|none|none|
|failedTasks|object|false|none|none|
|createdAt|object|false|none|none|
|updatedAt|object|false|none|none|
|capacityProviderStrategy|object|false|none|none|
|launchType|object|false|none|none|
|platformVersion|object|false|none|none|
|platformFamily|object|false|none|none|
|networkConfiguration|object|false|none|none|
|rolloutState|object|false|none|none|
|rolloutStateReason|object|false|none|none|
|serviceConnectConfiguration|object|false|none|none|
|serviceConnectResources|object|false|none|none|

<h2 id="tocS_DeploymentAlarms">DeploymentAlarms</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentalarms"></a>
<a id="schema_DeploymentAlarms"></a>
<a id="tocSdeploymentalarms"></a>
<a id="tocsdeploymentalarms"></a>

```json
{
  "alarmNames": {},
  "enable": {},
  "rollback": {}
}
```

<p>One of the methods which provide a way for you to quickly identify when a deployment has failed, and then to optionally roll back the failure to the last working deployment.</p> <p>When the alarms are generated, Amazon ECS sets the service deployment to failed. Set the rollback parameter to have Amazon ECS to roll back your service to the last completed deployment after a failure.</p> <p>You can only use the <code>DeploymentAlarms</code> method to detect failures when the <code>DeploymentController</code> is set to <code>ECS</code> (rolling update).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-ecs.html">Rolling update</a> in the <i> <i>Amazon Elastic Container Service Developer Guide</i> </i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alarmNames|object|true|none|none|
|enable|object|true|none|none|
|rollback|object|true|none|none|

<h2 id="tocS_DeploymentCircuitBreaker">DeploymentCircuitBreaker</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentcircuitbreaker"></a>
<a id="schema_DeploymentCircuitBreaker"></a>
<a id="tocSdeploymentcircuitbreaker"></a>
<a id="tocsdeploymentcircuitbreaker"></a>

```json
{
  "enable": {},
  "rollback": {}
}
```

<note> <p>The deployment circuit breaker can only be used for services using the rolling update (<code>ECS</code>) deployment type.</p> </note> <p>The <b>deployment circuit breaker</b> determines whether a service deployment will fail if the service can't reach a steady state. If it is turned on, a service deployment will transition to a failed state and stop launching new tasks. You can also configure Amazon ECS to roll back your service to the last completed deployment after a failure. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-ecs.html">Rolling update</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>For more information about API failure reasons, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/api_failures_messages.html">API failure reasons</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enable|object|true|none|none|
|rollback|object|true|none|none|

<h2 id="tocS_DeploymentControllerType">DeploymentControllerType</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentcontrollertype"></a>
<a id="schema_DeploymentControllerType"></a>
<a id="tocSdeploymentcontrollertype"></a>
<a id="tocsdeploymentcontrollertype"></a>

```json
"ECS"
```

<h2 id="tocS_Deployments">Deployments</h2>
<!-- backwards compatibility -->
<a id="schemadeployments"></a>
<a id="schema_Deployments"></a>
<a id="tocSdeployments"></a>
<a id="tocsdeployments"></a>

```json
[
  {
    "id": {},
    "status": {},
    "taskDefinition": {},
    "desiredCount": {},
    "pendingCount": {},
    "runningCount": {},
    "failedTasks": {},
    "createdAt": {},
    "updatedAt": {},
    "capacityProviderStrategy": {},
    "launchType": {},
    "platformVersion": {},
    "platformFamily": {},
    "networkConfiguration": {
      "awsvpcConfiguration": {
        "subnets": {},
        "securityGroups": {},
        "assignPublicIp": {}
      }
    },
    "rolloutState": {},
    "rolloutStateReason": {},
    "serviceConnectConfiguration": {
      "enabled": {},
      "namespace": {},
      "services": {},
      "logConfiguration": {
        "logDriver": {},
        "options": {
          "property1": "string",
          "property2": "string"
        },
        "secretOptions": {}
      }
    },
    "serviceConnectResources": {}
  }
]
```

<h2 id="tocS_TaskDefinition">TaskDefinition</h2>
<!-- backwards compatibility -->
<a id="schemataskdefinition"></a>
<a id="schema_TaskDefinition"></a>
<a id="tocStaskdefinition"></a>
<a id="tocstaskdefinition"></a>

```json
{
  "taskDefinitionArn": {},
  "containerDefinitions": {},
  "family": {},
  "taskRoleArn": {},
  "executionRoleArn": {},
  "networkMode": {},
  "revision": {},
  "volumes": {},
  "status": {},
  "requiresAttributes": {},
  "placementConstraints": {},
  "compatibilities": {},
  "runtimePlatform": {
    "cpuArchitecture": {},
    "operatingSystemFamily": {}
  },
  "requiresCompatibilities": {},
  "cpu": {},
  "memory": {},
  "inferenceAccelerators": {},
  "pidMode": {},
  "ipcMode": {},
  "proxyConfiguration": {
    "type": {},
    "containerName": {},
    "properties": null
  },
  "registeredAt": {},
  "deregisteredAt": {},
  "registeredBy": {},
  "ephemeralStorage": {
    "sizeInGiB": {}
  }
}
```

The details of a task definition which describes the container and volume definitions of an Amazon Elastic Container Service task. You can specify which Docker images to use, the required resources, and other configurations related to launching the task definition through an Amazon ECS service or task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskDefinitionArn|object|false|none|none|
|containerDefinitions|object|false|none|none|
|family|object|false|none|none|
|taskRoleArn|object|false|none|none|
|executionRoleArn|object|false|none|none|
|networkMode|object|false|none|none|
|revision|object|false|none|none|
|volumes|object|false|none|none|
|status|object|false|none|none|
|requiresAttributes|object|false|none|none|
|placementConstraints|object|false|none|none|
|compatibilities|object|false|none|none|
|runtimePlatform|object|false|none|none|
|requiresCompatibilities|object|false|none|none|
|cpu|object|false|none|none|
|memory|object|false|none|none|
|inferenceAccelerators|object|false|none|none|
|pidMode|object|false|none|none|
|ipcMode|object|false|none|none|
|proxyConfiguration|object|false|none|none|
|registeredAt|object|false|none|none|
|deregisteredAt|object|false|none|none|
|registeredBy|object|false|none|none|
|ephemeralStorage|object|false|none|none|

<h2 id="tocS_ServiceFieldList">ServiceFieldList</h2>
<!-- backwards compatibility -->
<a id="schemaservicefieldlist"></a>
<a id="schema_ServiceFieldList"></a>
<a id="tocSservicefieldlist"></a>
<a id="tocsservicefieldlist"></a>

```json
[
  "TAGS"
]
```

<h2 id="tocS_Services">Services</h2>
<!-- backwards compatibility -->
<a id="schemaservices"></a>
<a id="schema_Services"></a>
<a id="tocSservices"></a>
<a id="tocsservices"></a>

```json
[
  {
    "serviceArn": {},
    "serviceName": {},
    "clusterArn": {},
    "loadBalancers": {},
    "serviceRegistries": {},
    "status": {},
    "desiredCount": {},
    "runningCount": {},
    "pendingCount": {},
    "launchType": {},
    "capacityProviderStrategy": {},
    "platformVersion": {},
    "platformFamily": {},
    "taskDefinition": {},
    "deploymentConfiguration": {
      "deploymentCircuitBreaker": {
        "enable": {},
        "rollback": {}
      },
      "maximumPercent": {},
      "minimumHealthyPercent": {},
      "alarms": {
        "alarmNames": {},
        "enable": {},
        "rollback": {}
      }
    },
    "taskSets": {},
    "deployments": {},
    "roleArn": {},
    "events": {},
    "createdAt": {},
    "placementConstraints": {},
    "placementStrategy": {},
    "networkConfiguration": {
      "awsvpcConfiguration": {
        "subnets": {},
        "securityGroups": {},
        "assignPublicIp": {}
      }
    },
    "healthCheckGracePeriodSeconds": {},
    "schedulingStrategy": {},
    "deploymentController": {
      "type": {}
    },
    "tags": {},
    "createdBy": {},
    "enableECSManagedTags": {},
    "propagateTags": {},
    "enableExecuteCommand": {}
  }
]
```

<h2 id="tocS_TaskDefinitionFieldList">TaskDefinitionFieldList</h2>
<!-- backwards compatibility -->
<a id="schemataskdefinitionfieldlist"></a>
<a id="schema_TaskDefinitionFieldList"></a>
<a id="tocStaskdefinitionfieldlist"></a>
<a id="tocstaskdefinitionfieldlist"></a>

```json
[
  "TAGS"
]
```

<h2 id="tocS_TaskSetFieldList">TaskSetFieldList</h2>
<!-- backwards compatibility -->
<a id="schematasksetfieldlist"></a>
<a id="schema_TaskSetFieldList"></a>
<a id="tocStasksetfieldlist"></a>
<a id="tocstasksetfieldlist"></a>

```json
[
  "TAGS"
]
```

<h2 id="tocS_TaskSets">TaskSets</h2>
<!-- backwards compatibility -->
<a id="schematasksets"></a>
<a id="schema_TaskSets"></a>
<a id="tocStasksets"></a>
<a id="tocstasksets"></a>

```json
[
  {
    "id": {},
    "taskSetArn": {},
    "serviceArn": {},
    "clusterArn": {},
    "startedBy": {},
    "externalId": {},
    "status": {},
    "taskDefinition": {},
    "computedDesiredCount": {},
    "pendingCount": {},
    "runningCount": {},
    "createdAt": {},
    "updatedAt": {},
    "launchType": {},
    "capacityProviderStrategy": {},
    "platformVersion": {},
    "platformFamily": {},
    "networkConfiguration": {
      "awsvpcConfiguration": {
        "subnets": {},
        "securityGroups": {},
        "assignPublicIp": {}
      }
    },
    "loadBalancers": {},
    "serviceRegistries": {},
    "scale": {
      "value": {},
      "unit": {}
    },
    "stabilityStatus": {},
    "stabilityStatusAt": {},
    "tags": {}
  }
]
```

<h2 id="tocS_TaskFieldList">TaskFieldList</h2>
<!-- backwards compatibility -->
<a id="schemataskfieldlist"></a>
<a id="schema_TaskFieldList"></a>
<a id="tocStaskfieldlist"></a>
<a id="tocstaskfieldlist"></a>

```json
[
  "TAGS"
]
```

<h2 id="tocS_Tasks">Tasks</h2>
<!-- backwards compatibility -->
<a id="schematasks"></a>
<a id="schema_Tasks"></a>
<a id="tocStasks"></a>
<a id="tocstasks"></a>

```json
[
  {
    "attachments": {},
    "attributes": {},
    "availabilityZone": {},
    "capacityProviderName": {},
    "clusterArn": {},
    "connectivity": {},
    "connectivityAt": {},
    "containerInstanceArn": {},
    "containers": {},
    "cpu": {},
    "createdAt": {},
    "desiredStatus": {},
    "enableExecuteCommand": {},
    "executionStoppedAt": {},
    "group": {},
    "healthStatus": {},
    "inferenceAccelerators": {},
    "lastStatus": {},
    "launchType": {},
    "memory": {},
    "overrides": {
      "containerOverrides": {},
      "cpu": {},
      "inferenceAcceleratorOverrides": {},
      "executionRoleArn": {},
      "memory": {},
      "taskRoleArn": {},
      "ephemeralStorage": {
        "sizeInGiB": {}
      }
    },
    "platformVersion": {},
    "platformFamily": {},
    "pullStartedAt": {},
    "pullStoppedAt": {},
    "startedAt": {},
    "startedBy": {},
    "stopCode": {},
    "stoppedAt": {},
    "stoppedReason": {},
    "stoppingAt": {},
    "tags": {},
    "taskArn": {},
    "taskDefinitionArn": {},
    "version": {},
    "ephemeralStorage": {
      "sizeInGiB": {}
    }
  }
]
```

<h2 id="tocS_DesiredStatus">DesiredStatus</h2>
<!-- backwards compatibility -->
<a id="schemadesiredstatus"></a>
<a id="schema_DesiredStatus"></a>
<a id="tocSdesiredstatus"></a>
<a id="tocsdesiredstatus"></a>

```json
"RUNNING"
```

<h2 id="tocS_DeviceCgroupPermissions">DeviceCgroupPermissions</h2>
<!-- backwards compatibility -->
<a id="schemadevicecgrouppermissions"></a>
<a id="schema_DeviceCgroupPermissions"></a>
<a id="tocSdevicecgrouppermissions"></a>
<a id="tocsdevicecgrouppermissions"></a>

```json
[
  "read"
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

An object representing a container instance host device.

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
"read"
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

<h2 id="tocS_Scope">Scope</h2>
<!-- backwards compatibility -->
<a id="schemascope"></a>
<a id="schema_Scope"></a>
<a id="tocSscope"></a>
<a id="tocsscope"></a>

```json
"task"
```

<h2 id="tocS_StringMap">StringMap</h2>
<!-- backwards compatibility -->
<a id="schemastringmap"></a>
<a id="schema_StringMap"></a>
<a id="tocSstringmap"></a>
<a id="tocsstringmap"></a>

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

<h2 id="tocS_DockerVolumeConfiguration">DockerVolumeConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadockervolumeconfiguration"></a>
<a id="schema_DockerVolumeConfiguration"></a>
<a id="tocSdockervolumeconfiguration"></a>
<a id="tocsdockervolumeconfiguration"></a>

```json
{
  "scope": {},
  "autoprovision": {},
  "driver": {},
  "driverOpts": {
    "property1": "string",
    "property2": "string"
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  }
}
```

This parameter is specified when you're using Docker volumes. Docker volumes are only supported when you're using the EC2 launch type. Windows containers only support the use of the <code>local</code> driver. To use bind mounts, specify a <code>host</code> instead.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scope|object|false|none|none|
|autoprovision|object|false|none|none|
|driver|object|false|none|none|
|driverOpts|object|false|none|none|
|labels|object|false|none|none|

<h2 id="tocS_Double">Double</h2>
<!-- backwards compatibility -->
<a id="schemadouble"></a>
<a id="schema_Double"></a>
<a id="tocSdouble"></a>
<a id="tocsdouble"></a>

```json
0
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

This parameter is specified when you're using an Amazon Elastic File System file system for task storage. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/efs-volumes.html">Amazon EFS volumes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileSystemId|object|true|none|none|
|rootDirectory|object|false|none|none|
|transitEncryption|object|false|none|none|
|transitEncryptionPort|object|false|none|none|
|authorizationConfig|object|false|none|none|

<h2 id="tocS_EnvironmentFileType">EnvironmentFileType</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentfiletype"></a>
<a id="schema_EnvironmentFileType"></a>
<a id="tocSenvironmentfiletype"></a>
<a id="tocsenvironmentfiletype"></a>

```json
"s3"
```

<h2 id="tocS_EnvironmentFile">EnvironmentFile</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentfile"></a>
<a id="schema_EnvironmentFile"></a>
<a id="tocSenvironmentfile"></a>
<a id="tocsenvironmentfile"></a>

```json
{
  "value": {},
  "type": {}
}
```

<p>A list of files containing the environment variables to pass to a container. You can specify up to ten environment files. The file must have a <code>.env</code> file extension. Each line in an environment file should contain an environment variable in <code>VARIABLE=VALUE</code> format. Lines beginning with <code>#</code> are treated as comments and are ignored. For more information about the environment variable file syntax, see <a href="https://docs.docker.com/compose/env-file/">Declare default environment variables in file</a>.</p> <p>If there are environment variables specified using the <code>environment</code> parameter in a container definition, they take precedence over the variables contained within an environment file. If multiple environment files are specified that contain the same variable, they're processed from the top down. We recommend that you use unique variable names. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/taskdef-envfiles.html">Specifying environment variables</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>You must use the following platforms for the Fargate launch type:</p> <ul> <li> <p>Linux platform version <code>1.4.0</code> or later.</p> </li> <li> <p>Windows platform version <code>1.0.0</code> or later.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|object|true|none|none|
|type|object|true|none|none|

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

<p>The amount of ephemeral storage to allocate for the task. This parameter is used to expand the total amount of ephemeral storage available, beyond the default amount, for tasks hosted on Fargate. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/userguide/using_data_volumes.html">Fargate task storage</a> in the <i>Amazon ECS User Guide for Fargate</i>.</p> <note> <p>For tasks using the Fargate launch type, the task requires the following platforms:</p> <ul> <li> <p>Linux platform version <code>1.4.0</code> or later.</p> </li> <li> <p>Windows platform version <code>1.0.0</code> or later.</p> </li> </ul> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sizeInGiB|object|true|none|none|

<h2 id="tocS_ExecuteCommandLogging">ExecuteCommandLogging</h2>
<!-- backwards compatibility -->
<a id="schemaexecutecommandlogging"></a>
<a id="schema_ExecuteCommandLogging"></a>
<a id="tocSexecutecommandlogging"></a>
<a id="tocsexecutecommandlogging"></a>

```json
"NONE"
```

<h2 id="tocS_ExecuteCommandLogConfiguration">ExecuteCommandLogConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaexecutecommandlogconfiguration"></a>
<a id="schema_ExecuteCommandLogConfiguration"></a>
<a id="tocSexecutecommandlogconfiguration"></a>
<a id="tocsexecutecommandlogconfiguration"></a>

```json
{
  "cloudWatchLogGroupName": {},
  "cloudWatchEncryptionEnabled": {},
  "s3BucketName": {},
  "s3EncryptionEnabled": {},
  "s3KeyPrefix": {}
}
```

The log configuration for the results of the execute command actions. The logs can be sent to CloudWatch Logs or an Amazon S3 bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudWatchLogGroupName|object|false|none|none|
|cloudWatchEncryptionEnabled|object|false|none|none|
|s3BucketName|object|false|none|none|
|s3EncryptionEnabled|object|false|none|none|
|s3KeyPrefix|object|false|none|none|

<h2 id="tocS_Session">Session</h2>
<!-- backwards compatibility -->
<a id="schemasession"></a>
<a id="schema_Session"></a>
<a id="tocSsession"></a>
<a id="tocssession"></a>

```json
{
  "sessionId": {},
  "streamUrl": {},
  "tokenValue": {}
}
```

The details for the execute command session.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sessionId|object|false|none|none|
|streamUrl|object|false|none|none|
|tokenValue|object|false|none|none|

<h2 id="tocS_FSxWindowsFileServerAuthorizationConfig">FSxWindowsFileServerAuthorizationConfig</h2>
<!-- backwards compatibility -->
<a id="schemafsxwindowsfileserverauthorizationconfig"></a>
<a id="schema_FSxWindowsFileServerAuthorizationConfig"></a>
<a id="tocSfsxwindowsfileserverauthorizationconfig"></a>
<a id="tocsfsxwindowsfileserverauthorizationconfig"></a>

```json
{
  "credentialsParameter": {},
  "domain": {}
}
```

<p>The authorization configuration details for Amazon FSx for Windows File Server file system. See <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_FSxWindowsFileServerVolumeConfiguration.html">FSxWindowsFileServerVolumeConfiguration</a> in the <i>Amazon ECS API Reference</i>.</p> <p>For more information and the input format, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/wfsx-volumes.html">Amazon FSx for Windows File Server Volumes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|credentialsParameter|object|true|none|none|
|domain|object|true|none|none|

<h2 id="tocS_FSxWindowsFileServerVolumeConfiguration">FSxWindowsFileServerVolumeConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemafsxwindowsfileservervolumeconfiguration"></a>
<a id="schema_FSxWindowsFileServerVolumeConfiguration"></a>
<a id="tocSfsxwindowsfileservervolumeconfiguration"></a>
<a id="tocsfsxwindowsfileservervolumeconfiguration"></a>

```json
{
  "fileSystemId": {},
  "rootDirectory": {},
  "authorizationConfig": {
    "credentialsParameter": {},
    "domain": {}
  }
}
```

<p>This parameter is specified when you're using <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/what-is.html">Amazon FSx for Windows File Server</a> file system for task storage.</p> <p>For more information and the input format, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/wfsx-volumes.html">Amazon FSx for Windows File Server volumes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileSystemId|object|true|none|none|
|rootDirectory|object|true|none|none|
|authorizationConfig|object|true|none|none|

<h2 id="tocS_Failure">Failure</h2>
<!-- backwards compatibility -->
<a id="schemafailure"></a>
<a id="schema_Failure"></a>
<a id="tocSfailure"></a>
<a id="tocsfailure"></a>

```json
{
  "arn": {},
  "reason": {},
  "detail": {}
}
```

A failed resource. For a list of common causes, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/api_failures_messages.html">API failure reasons</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|reason|object|false|none|none|
|detail|object|false|none|none|

<h2 id="tocS_FirelensConfigurationType">FirelensConfigurationType</h2>
<!-- backwards compatibility -->
<a id="schemafirelensconfigurationtype"></a>
<a id="schema_FirelensConfigurationType"></a>
<a id="tocSfirelensconfigurationtype"></a>
<a id="tocsfirelensconfigurationtype"></a>

```json
"fluentd"
```

<h2 id="tocS_FirelensConfigurationOptionsMap">FirelensConfigurationOptionsMap</h2>
<!-- backwards compatibility -->
<a id="schemafirelensconfigurationoptionsmap"></a>
<a id="schema_FirelensConfigurationOptionsMap"></a>
<a id="tocSfirelensconfigurationoptionsmap"></a>
<a id="tocsfirelensconfigurationoptionsmap"></a>

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

<h2 id="tocS_ProtectedTasks">ProtectedTasks</h2>
<!-- backwards compatibility -->
<a id="schemaprotectedtasks"></a>
<a id="schema_ProtectedTasks"></a>
<a id="tocSprotectedtasks"></a>
<a id="tocsprotectedtasks"></a>

```json
[
  {
    "taskArn": {},
    "protectionEnabled": {},
    "expirationDate": {}
  }
]
```

<h2 id="tocS_HostEntry">HostEntry</h2>
<!-- backwards compatibility -->
<a id="schemahostentry"></a>
<a id="schema_HostEntry"></a>
<a id="tocShostentry"></a>
<a id="tocshostentry"></a>

```json
{
  "hostname": {},
  "ipAddress": {}
}
```

Hostnames and IP address entries that are added to the <code>/etc/hosts</code> file of a container via the <code>extraHosts</code> parameter of its <a>ContainerDefinition</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hostname|object|true|none|none|
|ipAddress|object|true|none|none|

<h2 id="tocS_HostVolumeProperties">HostVolumeProperties</h2>
<!-- backwards compatibility -->
<a id="schemahostvolumeproperties"></a>
<a id="schema_HostVolumeProperties"></a>
<a id="tocShostvolumeproperties"></a>
<a id="tocshostvolumeproperties"></a>

```json
{
  "sourcePath": {}
}
```

Details on a container instance bind mount host volume.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourcePath|object|false|none|none|

<h2 id="tocS_InferenceAccelerator">InferenceAccelerator</h2>
<!-- backwards compatibility -->
<a id="schemainferenceaccelerator"></a>
<a id="schema_InferenceAccelerator"></a>
<a id="tocSinferenceaccelerator"></a>
<a id="tocsinferenceaccelerator"></a>

```json
{
  "deviceName": {},
  "deviceType": {}
}
```

Details on an Elastic Inference accelerator. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-inference.html">Working with Amazon Elastic Inference on Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceName|object|true|none|none|
|deviceType|object|true|none|none|

<h2 id="tocS_InferenceAcceleratorOverride">InferenceAcceleratorOverride</h2>
<!-- backwards compatibility -->
<a id="schemainferenceacceleratoroverride"></a>
<a id="schema_InferenceAcceleratorOverride"></a>
<a id="tocSinferenceacceleratoroverride"></a>
<a id="tocsinferenceacceleratoroverride"></a>

```json
{
  "deviceName": {},
  "deviceType": {}
}
```

Details on an Elastic Inference accelerator task override. This parameter is used to override the Elastic Inference accelerator specified in the task definition. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-inference.html">Working with Amazon Elastic Inference on Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceName|object|false|none|none|
|deviceType|object|false|none|none|

<h2 id="tocS_InferenceAcceleratorOverrides">InferenceAcceleratorOverrides</h2>
<!-- backwards compatibility -->
<a id="schemainferenceacceleratoroverrides"></a>
<a id="schema_InferenceAcceleratorOverrides"></a>
<a id="tocSinferenceacceleratoroverrides"></a>
<a id="tocsinferenceacceleratoroverrides"></a>

```json
[
  {
    "deviceName": {},
    "deviceType": {}
  }
]
```

<h2 id="tocS_InferenceAccelerators">InferenceAccelerators</h2>
<!-- backwards compatibility -->
<a id="schemainferenceaccelerators"></a>
<a id="schema_InferenceAccelerators"></a>
<a id="tocSinferenceaccelerators"></a>
<a id="tocsinferenceaccelerators"></a>

```json
[
  {
    "deviceName": {},
    "deviceType": {}
  }
]
```

<h2 id="tocS_InstanceHealthCheckType">InstanceHealthCheckType</h2>
<!-- backwards compatibility -->
<a id="schemainstancehealthchecktype"></a>
<a id="schema_InstanceHealthCheckType"></a>
<a id="tocSinstancehealthchecktype"></a>
<a id="tocsinstancehealthchecktype"></a>

```json
"CONTAINER_RUNTIME"
```

<h2 id="tocS_InstanceHealthCheckResult">InstanceHealthCheckResult</h2>
<!-- backwards compatibility -->
<a id="schemainstancehealthcheckresult"></a>
<a id="schema_InstanceHealthCheckResult"></a>
<a id="tocSinstancehealthcheckresult"></a>
<a id="tocsinstancehealthcheckresult"></a>

```json
{
  "type": {},
  "status": {},
  "lastUpdated": {},
  "lastStatusChange": {}
}
```

An object representing the result of a container instance health status check.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|false|none|none|
|status|object|false|none|none|
|lastUpdated|object|false|none|none|
|lastStatusChange|object|false|none|none|

<h2 id="tocS_IpcMode">IpcMode</h2>
<!-- backwards compatibility -->
<a id="schemaipcmode"></a>
<a id="schema_IpcMode"></a>
<a id="tocSipcmode"></a>
<a id="tocsipcmode"></a>

```json
"host"
```

<h2 id="tocS_KernelCapabilities">KernelCapabilities</h2>
<!-- backwards compatibility -->
<a id="schemakernelcapabilities"></a>
<a id="schema_KernelCapabilities"></a>
<a id="tocSkernelcapabilities"></a>
<a id="tocskernelcapabilities"></a>

```json
{
  "add": {},
  "drop": {}
}
```

The Linux capabilities for the container that are added to or dropped from the default configuration provided by Docker. For more information about the default capabilities and the non-default available capabilities, see <a href="https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities">Runtime privilege and Linux capabilities</a> in the <i>Docker run reference</i>. For more detailed information about these Linux capabilities, see the <a href="http://man7.org/linux/man-pages/man7/capabilities.7.html">capabilities(7)</a> Linux manual page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|add|object|false|none|none|
|drop|object|false|none|none|

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

<h2 id="tocS_Settings">Settings</h2>
<!-- backwards compatibility -->
<a id="schemasettings"></a>
<a id="schema_Settings"></a>
<a id="tocSsettings"></a>
<a id="tocssettings"></a>

```json
[
  {
    "name": {},
    "value": {},
    "principalArn": {}
  }
]
```

<h2 id="tocS_TaskDefinitionFamilyStatus">TaskDefinitionFamilyStatus</h2>
<!-- backwards compatibility -->
<a id="schemataskdefinitionfamilystatus"></a>
<a id="schema_TaskDefinitionFamilyStatus"></a>
<a id="tocStaskdefinitionfamilystatus"></a>
<a id="tocstaskdefinitionfamilystatus"></a>

```json
"ACTIVE"
```

<h2 id="tocS_TaskDefinitionStatus">TaskDefinitionStatus</h2>
<!-- backwards compatibility -->
<a id="schemataskdefinitionstatus"></a>
<a id="schema_TaskDefinitionStatus"></a>
<a id="tocStaskdefinitionstatus"></a>
<a id="tocstaskdefinitionstatus"></a>

```json
"ACTIVE"
```

<h2 id="tocS_SortOrder">SortOrder</h2>
<!-- backwards compatibility -->
<a id="schemasortorder"></a>
<a id="schema_SortOrder"></a>
<a id="tocSsortorder"></a>
<a id="tocssortorder"></a>

```json
"ASC"
```

<h2 id="tocS_LoadBalancer">LoadBalancer</h2>
<!-- backwards compatibility -->
<a id="schemaloadbalancer"></a>
<a id="schema_LoadBalancer"></a>
<a id="tocSloadbalancer"></a>
<a id="tocsloadbalancer"></a>

```json
{
  "targetGroupArn": {},
  "loadBalancerName": {},
  "containerName": {},
  "containerPort": {}
}
```

<p>The load balancer configuration to use with a service or task set.</p> <p>When you add, update, or remove a load balancer configuration, Amazon ECS starts a new deployment with the updated Elastic Load Balancing configuration. This causes tasks to register to and deregister from load balancers.</p> <p>We recommend that you verify this on a test environment before you update the Elastic Load Balancing configuration. </p> <p>A service-linked role is required for services that use multiple target groups. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html">Using service-linked roles</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|targetGroupArn|object|false|none|none|
|loadBalancerName|object|false|none|none|
|containerName|object|false|none|none|
|containerPort|object|false|none|none|

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

<h2 id="tocS_ManagedAgentName">ManagedAgentName</h2>
<!-- backwards compatibility -->
<a id="schemamanagedagentname"></a>
<a id="schema_ManagedAgentName"></a>
<a id="tocSmanagedagentname"></a>
<a id="tocsmanagedagentname"></a>

```json
"ExecuteCommandAgent"
```

<h2 id="tocS_ManagedAgent">ManagedAgent</h2>
<!-- backwards compatibility -->
<a id="schemamanagedagent"></a>
<a id="schema_ManagedAgent"></a>
<a id="tocSmanagedagent"></a>
<a id="tocsmanagedagent"></a>

```json
{
  "lastStartedAt": {},
  "name": {},
  "reason": {},
  "lastStatus": {}
}
```

Details about the managed agent status for the container.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastStartedAt|object|false|none|none|
|name|object|false|none|none|
|reason|object|false|none|none|
|lastStatus|object|false|none|none|

<h2 id="tocS_ManagedAgentStateChange">ManagedAgentStateChange</h2>
<!-- backwards compatibility -->
<a id="schemamanagedagentstatechange"></a>
<a id="schema_ManagedAgentStateChange"></a>
<a id="tocSmanagedagentstatechange"></a>
<a id="tocsmanagedagentstatechange"></a>

```json
{
  "containerName": {},
  "managedAgentName": {},
  "status": {},
  "reason": {}
}
```

An object representing a change in state for a managed agent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containerName|object|true|none|none|
|managedAgentName|object|true|none|none|
|status|object|true|none|none|
|reason|object|false|none|none|

<h2 id="tocS_ManagedAgentStateChanges">ManagedAgentStateChanges</h2>
<!-- backwards compatibility -->
<a id="schemamanagedagentstatechanges"></a>
<a id="schema_ManagedAgentStateChanges"></a>
<a id="tocSmanagedagentstatechanges"></a>
<a id="tocsmanagedagentstatechanges"></a>

```json
[
  {
    "containerName": {},
    "managedAgentName": {},
    "status": {},
    "reason": {}
  }
]
```

<h2 id="tocS_ManagedScalingStatus">ManagedScalingStatus</h2>
<!-- backwards compatibility -->
<a id="schemamanagedscalingstatus"></a>
<a id="schema_ManagedScalingStatus"></a>
<a id="tocSmanagedscalingstatus"></a>
<a id="tocsmanagedscalingstatus"></a>

```json
"ENABLED"
```

<h2 id="tocS_ManagedScalingTargetCapacity">ManagedScalingTargetCapacity</h2>
<!-- backwards compatibility -->
<a id="schemamanagedscalingtargetcapacity"></a>
<a id="schema_ManagedScalingTargetCapacity"></a>
<a id="tocSmanagedscalingtargetcapacity"></a>
<a id="tocsmanagedscalingtargetcapacity"></a>

```json
1
```

<h2 id="tocS_ManagedScalingStepSize">ManagedScalingStepSize</h2>
<!-- backwards compatibility -->
<a id="schemamanagedscalingstepsize"></a>
<a id="schema_ManagedScalingStepSize"></a>
<a id="tocSmanagedscalingstepsize"></a>
<a id="tocsmanagedscalingstepsize"></a>

```json
1
```

<h2 id="tocS_ManagedScalingInstanceWarmupPeriod">ManagedScalingInstanceWarmupPeriod</h2>
<!-- backwards compatibility -->
<a id="schemamanagedscalinginstancewarmupperiod"></a>
<a id="schema_ManagedScalingInstanceWarmupPeriod"></a>
<a id="tocSmanagedscalinginstancewarmupperiod"></a>
<a id="tocsmanagedscalinginstancewarmupperiod"></a>

```json
0
```

<h2 id="tocS_MountPoint">MountPoint</h2>
<!-- backwards compatibility -->
<a id="schemamountpoint"></a>
<a id="schema_MountPoint"></a>
<a id="tocSmountpoint"></a>
<a id="tocsmountpoint"></a>

```json
{
  "sourceVolume": {},
  "containerPath": {},
  "readOnly": {}
}
```

The details for a volume mount point that's used in a container definition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceVolume|object|false|none|none|
|containerPath|object|false|none|none|
|readOnly|object|false|none|none|

<h2 id="tocS_TransportProtocol">TransportProtocol</h2>
<!-- backwards compatibility -->
<a id="schematransportprotocol"></a>
<a id="schema_TransportProtocol"></a>
<a id="tocStransportprotocol"></a>
<a id="tocstransportprotocol"></a>

```json
"tcp"
```

<h2 id="tocS_NetworkBinding">NetworkBinding</h2>
<!-- backwards compatibility -->
<a id="schemanetworkbinding"></a>
<a id="schema_NetworkBinding"></a>
<a id="tocSnetworkbinding"></a>
<a id="tocsnetworkbinding"></a>

```json
{
  "bindIP": {},
  "containerPort": {},
  "hostPort": {},
  "protocol": {},
  "containerPortRange": {},
  "hostPortRange": {}
}
```

Details on the network bindings between a container and its host container instance. After a task reaches the <code>RUNNING</code> status, manual and automatic host and container port assignments are visible in the <code>networkBindings</code> section of <a>DescribeTasks</a> API responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bindIP|object|false|none|none|
|containerPort|object|false|none|none|
|hostPort|object|false|none|none|
|protocol|object|false|none|none|
|containerPortRange|object|false|none|none|
|hostPortRange|object|false|none|none|

<h2 id="tocS_NetworkInterface">NetworkInterface</h2>
<!-- backwards compatibility -->
<a id="schemanetworkinterface"></a>
<a id="schema_NetworkInterface"></a>
<a id="tocSnetworkinterface"></a>
<a id="tocsnetworkinterface"></a>

```json
{
  "attachmentId": {},
  "privateIpv4Address": {},
  "ipv6Address": {}
}
```

An object representing the elastic network interface for tasks that use the <code>awsvpc</code> network mode.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachmentId|object|false|none|none|
|privateIpv4Address|object|false|none|none|
|ipv6Address|object|false|none|none|

<h2 id="tocS_NetworkMode">NetworkMode</h2>
<!-- backwards compatibility -->
<a id="schemanetworkmode"></a>
<a id="schema_NetworkMode"></a>
<a id="tocSnetworkmode"></a>
<a id="tocsnetworkmode"></a>

```json
"bridge"
```

<h2 id="tocS_OSFamily">OSFamily</h2>
<!-- backwards compatibility -->
<a id="schemaosfamily"></a>
<a id="schema_OSFamily"></a>
<a id="tocSosfamily"></a>
<a id="tocsosfamily"></a>

```json
"WINDOWS_SERVER_2019_FULL"
```

<h2 id="tocS_PidMode">PidMode</h2>
<!-- backwards compatibility -->
<a id="schemapidmode"></a>
<a id="schema_PidMode"></a>
<a id="tocSpidmode"></a>
<a id="tocspidmode"></a>

```json
"host"
```

<h2 id="tocS_PlacementConstraintType">PlacementConstraintType</h2>
<!-- backwards compatibility -->
<a id="schemaplacementconstrainttype"></a>
<a id="schema_PlacementConstraintType"></a>
<a id="tocSplacementconstrainttype"></a>
<a id="tocsplacementconstrainttype"></a>

```json
"distinctInstance"
```

<h2 id="tocS_PlacementConstraint">PlacementConstraint</h2>
<!-- backwards compatibility -->
<a id="schemaplacementconstraint"></a>
<a id="schema_PlacementConstraint"></a>
<a id="tocSplacementconstraint"></a>
<a id="tocsplacementconstraint"></a>

```json
{
  "type": {},
  "expression": {}
}
```

<p>An object representing a constraint on task placement. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html">Task placement constraints</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <note> <p>If you're using the Fargate launch type, task placement constraints aren't supported.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|false|none|none|
|expression|object|false|none|none|

<h2 id="tocS_PlacementStrategy">PlacementStrategy</h2>
<!-- backwards compatibility -->
<a id="schemaplacementstrategy"></a>
<a id="schema_PlacementStrategy"></a>
<a id="tocSplacementstrategy"></a>
<a id="tocsplacementstrategy"></a>

```json
{
  "type": {},
  "field": {}
}
```

The task placement strategy for a task or service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html">Task placement strategies</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|false|none|none|
|field|object|false|none|none|

<h2 id="tocS_PlacementStrategyType">PlacementStrategyType</h2>
<!-- backwards compatibility -->
<a id="schemaplacementstrategytype"></a>
<a id="schema_PlacementStrategyType"></a>
<a id="tocSplacementstrategytype"></a>
<a id="tocsplacementstrategytype"></a>

```json
"random"
```

<h2 id="tocS_PlatformDeviceType">PlatformDeviceType</h2>
<!-- backwards compatibility -->
<a id="schemaplatformdevicetype"></a>
<a id="schema_PlatformDeviceType"></a>
<a id="tocSplatformdevicetype"></a>
<a id="tocsplatformdevicetype"></a>

```json
"GPU"
```

<h2 id="tocS_PlatformDevice">PlatformDevice</h2>
<!-- backwards compatibility -->
<a id="schemaplatformdevice"></a>
<a id="schema_PlatformDevice"></a>
<a id="tocSplatformdevice"></a>
<a id="tocsplatformdevice"></a>

```json
{
  "id": {},
  "type": {}
}
```

The devices that are available on the container instance. The only supported device type is a GPU.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|
|type|object|true|none|none|

<h2 id="tocS_PlatformDevices">PlatformDevices</h2>
<!-- backwards compatibility -->
<a id="schemaplatformdevices"></a>
<a id="schema_PlatformDevices"></a>
<a id="tocSplatformdevices"></a>
<a id="tocsplatformdevices"></a>

```json
[
  {
    "id": {},
    "type": {}
  }
]
```

<h2 id="tocS_PortMapping">PortMapping</h2>
<!-- backwards compatibility -->
<a id="schemaportmapping"></a>
<a id="schema_PortMapping"></a>
<a id="tocSportmapping"></a>
<a id="tocsportmapping"></a>

```json
{
  "containerPort": {},
  "hostPort": {},
  "protocol": {},
  "name": {},
  "appProtocol": {},
  "containerPortRange": {}
}
```

<p>Port mappings allow containers to access ports on the host container instance to send or receive traffic. Port mappings are specified as part of the container definition.</p> <p>If you use containers in a task with the <code>awsvpc</code> or <code>host</code> network mode, specify the exposed ports using <code>containerPort</code>. The <code>hostPort</code> can be left blank or it must be the same value as the <code>containerPort</code>.</p> <p>Most fields of this parameter (<code>containerPort</code>, <code>hostPort</code>, <code>protocol</code>) maps to <code>PortBindings</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--publish</code> option to <a href="https://docs.docker.com/engine/reference/commandline/run/"> <code>docker run</code> </a>. If the network mode of a task definition is set to <code>host</code>, host ports must either be undefined or match the container port in the port mapping.</p> <note> <p>You can't expose the same container port for multiple protocols. If you attempt this, an error is returned.</p> </note> <p>After a task reaches the <code>RUNNING</code> status, manual and automatic host and container port assignments are visible in the <code>networkBindings</code> section of <a>DescribeTasks</a> API responses.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containerPort|object|false|none|none|
|hostPort|object|false|none|none|
|protocol|object|false|none|none|
|name|object|false|none|none|
|appProtocol|object|false|none|none|
|containerPortRange|object|false|none|none|

<h2 id="tocS_PortNumber">PortNumber</h2>
<!-- backwards compatibility -->
<a id="schemaportnumber"></a>
<a id="schema_PortNumber"></a>
<a id="tocSportnumber"></a>
<a id="tocsportnumber"></a>

```json
0
```

<h2 id="tocS_ProtectedTask">ProtectedTask</h2>
<!-- backwards compatibility -->
<a id="schemaprotectedtask"></a>
<a id="schema_ProtectedTask"></a>
<a id="tocSprotectedtask"></a>
<a id="tocsprotectedtask"></a>

```json
{
  "taskArn": {},
  "protectionEnabled": {},
  "expirationDate": {}
}
```

An object representing the protection status details for a task. You can set the protection status with the <a>UpdateTaskProtection</a> API and get the status of tasks with the <a>GetTaskProtection</a> API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskArn|object|false|none|none|
|protectionEnabled|object|false|none|none|
|expirationDate|object|false|none|none|

<h2 id="tocS_ProxyConfigurationType">ProxyConfigurationType</h2>
<!-- backwards compatibility -->
<a id="schemaproxyconfigurationtype"></a>
<a id="schema_ProxyConfigurationType"></a>
<a id="tocSproxyconfigurationtype"></a>
<a id="tocsproxyconfigurationtype"></a>

```json
"APPMESH"
```

<h2 id="tocS_ProxyConfiguration">ProxyConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaproxyconfiguration"></a>
<a id="schema_ProxyConfiguration"></a>
<a id="tocSproxyconfiguration"></a>
<a id="tocsproxyconfiguration"></a>

```json
{
  "type": {},
  "containerName": {},
  "properties": null
}
```

<p>The configuration details for the App Mesh proxy.</p> <p>For tasks that use the EC2 launch type, the container instances require at least version 1.26.0 of the container agent and at least version 1.26.0-1 of the <code>ecs-init</code> package to use a proxy configuration. If your container instances are launched from the Amazon ECS optimized AMI version <code>20190301</code> or later, then they contain the required versions of the container agent and <code>ecs-init</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html">Amazon ECS-optimized Linux AMI</a> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|false|none|none|
|containerName|object|true|none|none|
|properties|object|false|none|<p>The set of network configuration parameters to provide the Container Network Interface (CNI) plugin, specified as key-value pairs.</p> <ul> <li> <p> <code>IgnoredUID</code> - (Required) The user ID (UID) of the proxy container as defined by the <code>user</code> parameter in a container definition. This is used to ensure the proxy ignores its own traffic. If <code>IgnoredGID</code> is specified, this field can be empty.</p> </li> <li> <p> <code>IgnoredGID</code> - (Required) The group ID (GID) of the proxy container as defined by the <code>user</code> parameter in a container definition. This is used to ensure the proxy ignores its own traffic. If <code>IgnoredUID</code> is specified, this field can be empty.</p> </li> <li> <p> <code>AppPorts</code> - (Required) The list of ports that the application uses. Network traffic to these ports is forwarded to the <code>ProxyIngressPort</code> and <code>ProxyEgressPort</code>.</p> </li> <li> <p> <code>ProxyIngressPort</code> - (Required) Specifies the port that incoming traffic to the <code>AppPorts</code> is directed to.</p> </li> <li> <p> <code>ProxyEgressPort</code> - (Required) Specifies the port that outgoing traffic from the <code>AppPorts</code> is directed to.</p> </li> <li> <p> <code>EgressIgnoredPorts</code> - (Required) The egress traffic going to the specified ports is ignored and not redirected to the <code>ProxyEgressPort</code>. It can be an empty list.</p> </li> <li> <p> <code>EgressIgnoredIPs</code> - (Required) The egress traffic going to the specified IP addresses is ignored and not redirected to the <code>ProxyEgressPort</code>. It can be an empty list.</p> </li> </ul>|

<h2 id="tocS_ProxyConfigurationProperties">ProxyConfigurationProperties</h2>
<!-- backwards compatibility -->
<a id="schemaproxyconfigurationproperties"></a>
<a id="schema_ProxyConfigurationProperties"></a>
<a id="tocSproxyconfigurationproperties"></a>
<a id="tocsproxyconfigurationproperties"></a>

```json
[
  {
    "name": {},
    "value": {}
  }
]
```

<h2 id="tocS_VolumeList">VolumeList</h2>
<!-- backwards compatibility -->
<a id="schemavolumelist"></a>
<a id="schema_VolumeList"></a>
<a id="tocSvolumelist"></a>
<a id="tocsvolumelist"></a>

```json
[
  {
    "name": {},
    "host": {
      "sourcePath": {}
    },
    "dockerVolumeConfiguration": {
      "scope": {},
      "autoprovision": {},
      "driver": {},
      "driverOpts": {
        "property1": "string",
        "property2": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      }
    },
    "efsVolumeConfiguration": {
      "fileSystemId": {},
      "rootDirectory": {},
      "transitEncryption": {},
      "transitEncryptionPort": {},
      "authorizationConfig": {
        "accessPointId": {},
        "iam": {}
      }
    },
    "fsxWindowsFileServerVolumeConfiguration": {
      "fileSystemId": {},
      "rootDirectory": {},
      "authorizationConfig": {
        "credentialsParameter": {},
        "domain": {}
      }
    }
  }
]
```

<h2 id="tocS_TaskDefinitionPlacementConstraints">TaskDefinitionPlacementConstraints</h2>
<!-- backwards compatibility -->
<a id="schemataskdefinitionplacementconstraints"></a>
<a id="schema_TaskDefinitionPlacementConstraints"></a>
<a id="tocStaskdefinitionplacementconstraints"></a>
<a id="tocstaskdefinitionplacementconstraints"></a>

```json
[
  {
    "type": {},
    "expression": {}
  }
]
```

<h2 id="tocS_RuntimePlatform">RuntimePlatform</h2>
<!-- backwards compatibility -->
<a id="schemaruntimeplatform"></a>
<a id="schema_RuntimePlatform"></a>
<a id="tocSruntimeplatform"></a>
<a id="tocsruntimeplatform"></a>

```json
{
  "cpuArchitecture": {},
  "operatingSystemFamily": {}
}
```

<p>Information about the platform for the Amazon ECS service or task.</p> <p>For more information about <code>RuntimePlatform</code>, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html#runtime-platform">RuntimePlatform</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cpuArchitecture|object|false|none|none|
|operatingSystemFamily|object|false|none|none|

<h2 id="tocS_RequiresAttributes">RequiresAttributes</h2>
<!-- backwards compatibility -->
<a id="schemarequiresattributes"></a>
<a id="schema_RequiresAttributes"></a>
<a id="tocSrequiresattributes"></a>
<a id="tocsrequiresattributes"></a>

```json
[
  {
    "name": {},
    "value": {},
    "targetType": {},
    "targetId": {}
  }
]
```

<h2 id="tocS_Resource">Resource</h2>
<!-- backwards compatibility -->
<a id="schemaresource"></a>
<a id="schema_Resource"></a>
<a id="tocSresource"></a>
<a id="tocsresource"></a>

```json
{
  "name": {},
  "type": {},
  "doubleValue": {},
  "longValue": {},
  "integerValue": {},
  "stringSetValue": {}
}
```

Describes the resources available for a container instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|type|object|false|none|none|
|doubleValue|object|false|none|none|
|longValue|object|false|none|none|
|integerValue|object|false|none|none|
|stringSetValue|object|false|none|none|

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

The type and amount of a resource to assign to a container. The supported resource types are GPUs and Elastic Inference accelerators. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-gpu.html">Working with GPUs on Amazon ECS</a> or <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-inference.html">Working with Amazon Elastic Inference on Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|object|true|none|none|
|type|object|true|none|none|

<h2 id="tocS_TaskOverride">TaskOverride</h2>
<!-- backwards compatibility -->
<a id="schemataskoverride"></a>
<a id="schema_TaskOverride"></a>
<a id="tocStaskoverride"></a>
<a id="tocstaskoverride"></a>

```json
{
  "containerOverrides": {},
  "cpu": {},
  "inferenceAcceleratorOverrides": {},
  "executionRoleArn": {},
  "memory": {},
  "taskRoleArn": {},
  "ephemeralStorage": {
    "sizeInGiB": {}
  }
}
```

The overrides that are associated with a task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containerOverrides|object|false|none|none|
|cpu|object|false|none|none|
|inferenceAcceleratorOverrides|object|false|none|none|
|executionRoleArn|object|false|none|none|
|memory|object|false|none|none|
|taskRoleArn|object|false|none|none|
|ephemeralStorage|object|false|none|none|

<h2 id="tocS_ScaleUnit">ScaleUnit</h2>
<!-- backwards compatibility -->
<a id="schemascaleunit"></a>
<a id="schema_ScaleUnit"></a>
<a id="tocSscaleunit"></a>
<a id="tocsscaleunit"></a>

```json
"PERCENT"
```

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

<p>An object representing the secret to expose to your container. Secrets can be exposed to a container in the following ways:</p> <ul> <li> <p>To inject sensitive data into your containers as environment variables, use the <code>secrets</code> container definition parameter.</p> </li> <li> <p>To reference sensitive information in the log configuration of a container, use the <code>secretOptions</code> container definition parameter.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html">Specifying sensitive data</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|valueFrom|object|true|none|none|

<h2 id="tocS_SensitiveString">SensitiveString</h2>
<!-- backwards compatibility -->
<a id="schemasensitivestring"></a>
<a id="schema_SensitiveString"></a>
<a id="tocSsensitivestring"></a>
<a id="tocssensitivestring"></a>

```json
"password"
```

<h2 id="tocS_ServiceEvents">ServiceEvents</h2>
<!-- backwards compatibility -->
<a id="schemaserviceevents"></a>
<a id="schema_ServiceEvents"></a>
<a id="tocSserviceevents"></a>
<a id="tocsserviceevents"></a>

```json
[
  {
    "id": {},
    "createdAt": {},
    "message": {}
  }
]
```

<h2 id="tocS_ServiceConnectClientAlias">ServiceConnectClientAlias</h2>
<!-- backwards compatibility -->
<a id="schemaserviceconnectclientalias"></a>
<a id="schema_ServiceConnectClientAlias"></a>
<a id="tocSserviceconnectclientalias"></a>
<a id="tocsserviceconnectclientalias"></a>

```json
{
  "port": {},
  "dnsName": {}
}
```

<p>Each alias ("endpoint") is a fully-qualified name and port number that other tasks ("clients") can use to connect to this service.</p> <p>Each name and port mapping must be unique within the namespace.</p> <p>Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|port|object|true|none|none|
|dnsName|object|false|none|none|

<h2 id="tocS_ServiceConnectClientAliasList">ServiceConnectClientAliasList</h2>
<!-- backwards compatibility -->
<a id="schemaserviceconnectclientaliaslist"></a>
<a id="schema_ServiceConnectClientAliasList"></a>
<a id="tocSserviceconnectclientaliaslist"></a>
<a id="tocsserviceconnectclientaliaslist"></a>

```json
[
  {
    "port": {},
    "dnsName": {}
  }
]
```

<h2 id="tocS_ServiceConnectServiceList">ServiceConnectServiceList</h2>
<!-- backwards compatibility -->
<a id="schemaserviceconnectservicelist"></a>
<a id="schema_ServiceConnectServiceList"></a>
<a id="tocSserviceconnectservicelist"></a>
<a id="tocsserviceconnectservicelist"></a>

```json
[
  {
    "portName": {},
    "discoveryName": {},
    "clientAliases": {},
    "ingressPortOverride": {}
  }
]
```

<h2 id="tocS_ServiceConnectService">ServiceConnectService</h2>
<!-- backwards compatibility -->
<a id="schemaserviceconnectservice"></a>
<a id="schema_ServiceConnectService"></a>
<a id="tocSserviceconnectservice"></a>
<a id="tocsserviceconnectservice"></a>

```json
{
  "portName": {},
  "discoveryName": {},
  "clientAliases": {},
  "ingressPortOverride": {}
}
```

The Service Connect service object configuration. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portName|object|true|none|none|
|discoveryName|object|false|none|none|
|clientAliases|object|false|none|none|
|ingressPortOverride|object|false|none|none|

<h2 id="tocS_ServiceConnectServiceResource">ServiceConnectServiceResource</h2>
<!-- backwards compatibility -->
<a id="schemaserviceconnectserviceresource"></a>
<a id="schema_ServiceConnectServiceResource"></a>
<a id="tocSserviceconnectserviceresource"></a>
<a id="tocsserviceconnectserviceresource"></a>

```json
{
  "discoveryName": {},
  "discoveryArn": {}
}
```

<p>The Service Connect resource. Each configuration maps a discovery name to a Cloud Map service name. The data is stored in Cloud Map as part of the Service Connect configuration for each discovery name of this Amazon ECS service.</p> <p>A task can resolve the <code>dnsName</code> for each of the <code>clientAliases</code> of a service. However a task can't resolve the discovery names. If you want to connect to a service, refer to the <code>ServiceConnectConfiguration</code> of that service for the list of <code>clientAliases</code> that you can use.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|discoveryName|object|false|none|none|
|discoveryArn|object|false|none|none|

<h2 id="tocS_ServiceEvent">ServiceEvent</h2>
<!-- backwards compatibility -->
<a id="schemaserviceevent"></a>
<a id="schema_ServiceEvent"></a>
<a id="tocSserviceevent"></a>
<a id="tocsserviceevent"></a>

```json
{
  "id": {},
  "createdAt": {},
  "message": {}
}
```

The details for an event that's associated with a service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|createdAt|object|false|none|none|
|message|object|false|none|none|

<h2 id="tocS_ServiceField">ServiceField</h2>
<!-- backwards compatibility -->
<a id="schemaservicefield"></a>
<a id="schema_ServiceField"></a>
<a id="tocSservicefield"></a>
<a id="tocsservicefield"></a>

```json
"TAGS"
```

<h2 id="tocS_ServiceRegistry">ServiceRegistry</h2>
<!-- backwards compatibility -->
<a id="schemaserviceregistry"></a>
<a id="schema_ServiceRegistry"></a>
<a id="tocSserviceregistry"></a>
<a id="tocsserviceregistry"></a>

```json
{
  "registryArn": {},
  "port": {},
  "containerName": {},
  "containerPort": {}
}
```

<p>The details for the service registry.</p> <p>Each service may be associated with one service registry. Multiple service registries for each service are not supported.</p> <p>When you add, update, or remove the service registries configuration, Amazon ECS starts a new deployment. New tasks are registered and deregistered to the updated service registry configuration.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryArn|object|false|none|none|
|port|object|false|none|none|
|containerName|object|false|none|none|
|containerPort|object|false|none|none|

<h2 id="tocS_StabilityStatus">StabilityStatus</h2>
<!-- backwards compatibility -->
<a id="schemastabilitystatus"></a>
<a id="schema_StabilityStatus"></a>
<a id="tocSstabilitystatus"></a>
<a id="tocsstabilitystatus"></a>

```json
"STEADY_STATE"
```

<h2 id="tocS_Task">Task</h2>
<!-- backwards compatibility -->
<a id="schematask"></a>
<a id="schema_Task"></a>
<a id="tocStask"></a>
<a id="tocstask"></a>

```json
{
  "attachments": {},
  "attributes": {},
  "availabilityZone": {},
  "capacityProviderName": {},
  "clusterArn": {},
  "connectivity": {},
  "connectivityAt": {},
  "containerInstanceArn": {},
  "containers": {},
  "cpu": {},
  "createdAt": {},
  "desiredStatus": {},
  "enableExecuteCommand": {},
  "executionStoppedAt": {},
  "group": {},
  "healthStatus": {},
  "inferenceAccelerators": {},
  "lastStatus": {},
  "launchType": {},
  "memory": {},
  "overrides": {
    "containerOverrides": {},
    "cpu": {},
    "inferenceAcceleratorOverrides": {},
    "executionRoleArn": {},
    "memory": {},
    "taskRoleArn": {},
    "ephemeralStorage": {
      "sizeInGiB": {}
    }
  },
  "platformVersion": {},
  "platformFamily": {},
  "pullStartedAt": {},
  "pullStoppedAt": {},
  "startedAt": {},
  "startedBy": {},
  "stopCode": {},
  "stoppedAt": {},
  "stoppedReason": {},
  "stoppingAt": {},
  "tags": {},
  "taskArn": {},
  "taskDefinitionArn": {},
  "version": {},
  "ephemeralStorage": {
    "sizeInGiB": {}
  }
}
```

Details on a task in a cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachments|object|false|none|none|
|attributes|object|false|none|none|
|availabilityZone|object|false|none|none|
|capacityProviderName|object|false|none|none|
|clusterArn|object|false|none|none|
|connectivity|object|false|none|none|
|connectivityAt|object|false|none|none|
|containerInstanceArn|object|false|none|none|
|containers|object|false|none|none|
|cpu|object|false|none|none|
|createdAt|object|false|none|none|
|desiredStatus|object|false|none|none|
|enableExecuteCommand|object|false|none|none|
|executionStoppedAt|object|false|none|none|
|group|object|false|none|none|
|healthStatus|object|false|none|none|
|inferenceAccelerators|object|false|none|none|
|lastStatus|object|false|none|none|
|launchType|object|false|none|none|
|memory|object|false|none|none|
|overrides|object|false|none|none|
|platformVersion|object|false|none|none|
|platformFamily|object|false|none|none|
|pullStartedAt|object|false|none|none|
|pullStoppedAt|object|false|none|none|
|startedAt|object|false|none|none|
|startedBy|object|false|none|none|
|stopCode|object|false|none|none|
|stoppedAt|object|false|none|none|
|stoppedReason|object|false|none|none|
|stoppingAt|object|false|none|none|
|tags|object|false|none|none|
|taskArn|object|false|none|none|
|taskDefinitionArn|object|false|none|none|
|version|object|false|none|none|
|ephemeralStorage|object|false|none|none|

<h2 id="tocS_SystemControl">SystemControl</h2>
<!-- backwards compatibility -->
<a id="schemasystemcontrol"></a>
<a id="schema_SystemControl"></a>
<a id="tocSsystemcontrol"></a>
<a id="tocssystemcontrol"></a>

```json
{
  "namespace": {},
  "value": {}
}
```

<p>A list of namespaced kernel parameters to set in the container. This parameter maps to <code>Sysctls</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--sysctl</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker run</a>.</p> <p>We don't recommend that you specify network-related <code>systemControls</code> parameters for multiple containers in a single task. This task also uses either the <code>awsvpc</code> or <code>host</code> network mode. It does it for the following reasons.</p> <ul> <li> <p>For tasks that use the <code>awsvpc</code> network mode, if you set <code>systemControls</code> for any container, it applies to all containers in the task. If you set different <code>systemControls</code> for multiple containers in a single task, the container that's started last determines which <code>systemControls</code> take effect.</p> </li> <li> <p>For tasks that use the <code>host</code> network mode, the <code>systemControls</code> parameter applies to the container instance's kernel parameter and that of all containers of any tasks running on that container instance.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|namespace|object|false|none|none|
|value|object|false|none|none|

<h2 id="tocS_TagKey">TagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_TagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
"string"
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

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "key": {},
  "value": {}
}
```

<p>The metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value. You define them.</p> <p>The following basic restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per resource - 50</p> </li> <li> <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p> </li> <li> <p>Maximum key length - 128 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length - 256 Unicode characters in UTF-8</p> </li> <li> <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p> </li> <li> <p>Tag keys and values are case-sensitive.</p> </li> <li> <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|object|false|none|none|
|value|object|false|none|none|

<h2 id="tocS_TagKeys">TagKeys</h2>
<!-- backwards compatibility -->
<a id="schematagkeys"></a>
<a id="schema_TagKeys"></a>
<a id="tocStagkeys"></a>
<a id="tocstagkeys"></a>

```json
[
  "string"
]
```

<h2 id="tocS_TaskStopCode">TaskStopCode</h2>
<!-- backwards compatibility -->
<a id="schemataskstopcode"></a>
<a id="schema_TaskStopCode"></a>
<a id="tocStaskstopcode"></a>
<a id="tocstaskstopcode"></a>

```json
"TaskFailedToStart"
```

<h2 id="tocS_TaskDefinitionField">TaskDefinitionField</h2>
<!-- backwards compatibility -->
<a id="schemataskdefinitionfield"></a>
<a id="schema_TaskDefinitionField"></a>
<a id="tocStaskdefinitionfield"></a>
<a id="tocstaskdefinitionfield"></a>

```json
"TAGS"
```

<h2 id="tocS_TaskDefinitionPlacementConstraintType">TaskDefinitionPlacementConstraintType</h2>
<!-- backwards compatibility -->
<a id="schemataskdefinitionplacementconstrainttype"></a>
<a id="schema_TaskDefinitionPlacementConstraintType"></a>
<a id="tocStaskdefinitionplacementconstrainttype"></a>
<a id="tocstaskdefinitionplacementconstrainttype"></a>

```json
"memberOf"
```

<h2 id="tocS_TaskDefinitionPlacementConstraint">TaskDefinitionPlacementConstraint</h2>
<!-- backwards compatibility -->
<a id="schemataskdefinitionplacementconstraint"></a>
<a id="schema_TaskDefinitionPlacementConstraint"></a>
<a id="tocStaskdefinitionplacementconstraint"></a>
<a id="tocstaskdefinitionplacementconstraint"></a>

```json
{
  "type": {},
  "expression": {}
}
```

<p>The constraint on task placement in the task definition. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html">Task placement constraints</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <note> <p>Task placement constraints aren't supported for tasks run on Fargate.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|false|none|none|
|expression|object|false|none|none|

<h2 id="tocS_TaskField">TaskField</h2>
<!-- backwards compatibility -->
<a id="schemataskfield"></a>
<a id="schema_TaskField"></a>
<a id="tocStaskfield"></a>
<a id="tocstaskfield"></a>

```json
"TAGS"
```

<h2 id="tocS_TaskSetField">TaskSetField</h2>
<!-- backwards compatibility -->
<a id="schematasksetfield"></a>
<a id="schema_TaskSetField"></a>
<a id="tocStasksetfield"></a>
<a id="tocstasksetfield"></a>

```json
"TAGS"
```

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

The container path, mount options, and size of the tmpfs mount.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containerPath|object|true|none|none|
|size|object|true|none|none|
|mountOptions|object|false|none|none|

<h2 id="tocS_UlimitName">UlimitName</h2>
<!-- backwards compatibility -->
<a id="schemaulimitname"></a>
<a id="schema_UlimitName"></a>
<a id="tocSulimitname"></a>
<a id="tocsulimitname"></a>

```json
"core"
```

<h2 id="tocS_Ulimit">Ulimit</h2>
<!-- backwards compatibility -->
<a id="schemaulimit"></a>
<a id="schema_Ulimit"></a>
<a id="tocSulimit"></a>
<a id="tocsulimit"></a>

```json
{
  "name": {},
  "softLimit": {},
  "hardLimit": {}
}
```

<p>The <code>ulimit</code> settings to pass to the container.</p> <p>Amazon ECS tasks hosted on Fargate use the default resource limit values set by the operating system with the exception of the <code>nofile</code> resource limit parameter which Fargate overrides. The <code>nofile</code> resource limit sets a restriction on the number of open files that a container can use. The default <code>nofile</code> soft limit is <code>1024</code> and the default hard limit is <code>4096</code>.</p> <p>You can specify the <code>ulimit</code> settings for a container in a task definition.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|softLimit|object|true|none|none|
|hardLimit|object|true|none|none|

<h2 id="tocS_Volume">Volume</h2>
<!-- backwards compatibility -->
<a id="schemavolume"></a>
<a id="schema_Volume"></a>
<a id="tocSvolume"></a>
<a id="tocsvolume"></a>

```json
{
  "name": {},
  "host": {
    "sourcePath": {}
  },
  "dockerVolumeConfiguration": {
    "scope": {},
    "autoprovision": {},
    "driver": {},
    "driverOpts": {
      "property1": "string",
      "property2": "string"
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    }
  },
  "efsVolumeConfiguration": {
    "fileSystemId": {},
    "rootDirectory": {},
    "transitEncryption": {},
    "transitEncryptionPort": {},
    "authorizationConfig": {
      "accessPointId": {},
      "iam": {}
    }
  },
  "fsxWindowsFileServerVolumeConfiguration": {
    "fileSystemId": {},
    "rootDirectory": {},
    "authorizationConfig": {
      "credentialsParameter": {},
      "domain": {}
    }
  }
}
```

A data volume that's used in a task definition. For tasks that use the Amazon Elastic File System (Amazon EFS), specify an <code>efsVolumeConfiguration</code>. For Windows tasks that use Amazon FSx for Windows File Server file system, specify a <code>fsxWindowsFileServerVolumeConfiguration</code>. For tasks that use a Docker volume, specify a <code>DockerVolumeConfiguration</code>. For tasks that use a bind mount host volume, specify a <code>host</code> and optional <code>sourcePath</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_data_volumes.html">Using Data Volumes in Tasks</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|host|object|false|none|none|
|dockerVolumeConfiguration|object|false|none|none|
|efsVolumeConfiguration|object|false|none|none|
|fsxWindowsFileServerVolumeConfiguration|object|false|none|none|

<h2 id="tocS_VolumeFrom">VolumeFrom</h2>
<!-- backwards compatibility -->
<a id="schemavolumefrom"></a>
<a id="schema_VolumeFrom"></a>
<a id="tocSvolumefrom"></a>
<a id="tocsvolumefrom"></a>

```json
{
  "sourceContainer": {},
  "readOnly": {}
}
```

Details on a data volume from another container in the same task definition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceContainer|object|false|none|none|
|readOnly|object|false|none|none|
