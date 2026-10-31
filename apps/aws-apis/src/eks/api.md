<h1 id="amazon-elastic-kubernetes-service">Amazon Elastic Kubernetes Service v2017-11-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>Amazon Elastic Kubernetes Service (Amazon EKS) is a managed service that makes it easy for you to run Kubernetes on Amazon Web Services without needing to stand up or maintain your own Kubernetes control plane. Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications. </p> <p>Amazon EKS runs up-to-date versions of the open-source Kubernetes software, so you can use all the existing plugins and tooling from the Kubernetes community. Applications running on Amazon EKS are fully compatible with applications running on any standard Kubernetes environment, whether running in on-premises data centers or public clouds. This means that you can easily migrate any standard Kubernetes application to Amazon EKS without any code modification required.</p>

Base URLs:

* <a href="http://eks.us-east-1.amazonaws.com">http://eks.us-east-1.amazonaws.com</a> - The Amazon EKS multi-region endpoint

* <a href="https://eks.us-east-1.amazonaws.com">https://eks.us-east-1.amazonaws.com</a> - The Amazon EKS multi-region endpoint

* <a href="http://eks.cn-north-1.amazonaws.com.cn">http://eks.cn-north-1.amazonaws.com.cn</a> - The Amazon EKS endpoint for China (Beijing) and China (Ningxia)

* <a href="https://eks.cn-north-1.amazonaws.com.cn">https://eks.cn-north-1.amazonaws.com.cn</a> - The Amazon EKS endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/eks/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-elastic-kubernetes-service-default">Default</h1>

## AssociateEncryptionConfig

<a id="opIdAssociateEncryptionConfig"></a>

> Code samples

```bash
curl https://eks.us-east-1.amazonaws.com/clusters/string/encryption-config/associate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "encryptionConfig": [
      {
        "resources": {},
        "provider": {
          "keyArn": {}
        }
      }
    ],
    "clientRequestToken": "string"
  }'
```

`POST /clusters/{name}/encryption-config/associate`

<p>Associate encryption configuration to an existing cluster.</p> <p>You can use this API to enable encryption on existing clusters which do not have encryption already enabled. This allows you to implement a defense-in-depth security strategy without migrating applications to new Amazon EKS clusters.</p>

> Body parameter

```json
{
  "encryptionConfig": [
    {
      "resources": {},
      "provider": {
        "keyArn": {}
      }
    }
  ],
  "clientRequestToken": "string"
}
```

<h3 id="associateencryptionconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the cluster that you are associating with encryption configuration.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» encryptionConfig|body|[[EncryptionConfig](#schemaencryptionconfig)]|true|The configuration you are using for encryption.|
|» clientRequestToken|body|string|false|The client request token you are using with the encryption configuration.|

> Example responses

> 200 Response

```json
{
  "update": {
    "id": {},
    "status": {},
    "type": {},
    "params": {},
    "createdAt": {},
    "errors": {}
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

<h3 id="associateencryptionconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateEncryptionConfigResponse](#schemaassociateencryptionconfigresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServerException|[ServerException](#schemaserverexception)|
|483|483|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateIdentityProviderConfig

<a id="opIdAssociateIdentityProviderConfig"></a>

> Code samples

```bash
curl https://eks.us-east-1.amazonaws.com/clusters/string/identity-provider-configs/associate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "oidc": {
      "identityProviderConfigName": {},
      "issuerUrl": {},
      "clientId": {},
      "usernameClaim": {},
      "usernamePrefix": {},
      "groupsClaim": {},
      "groupsPrefix": {},
      "requiredClaims": {
        "property1": "string",
        "property2": "string"
      }
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "clientRequestToken": "string"
  }'
```

`POST /clusters/{name}/identity-provider-configs/associate`

<p>Associate an identity provider configuration to a cluster.</p> <p>If you want to authenticate identities using an identity provider, you can create an identity provider configuration and associate it to your cluster. After configuring authentication to your cluster you can create Kubernetes <code>roles</code> and <code>clusterroles</code> to assign permissions to the roles, and then bind the roles to the identities using Kubernetes <code>rolebindings</code> and <code>clusterrolebindings</code>. For more information see <a href="https://kubernetes.io/docs/reference/access-authn-authz/rbac/">Using RBAC Authorization</a> in the Kubernetes documentation.</p>

> Body parameter

```json
{
  "oidc": {
    "identityProviderConfigName": {},
    "issuerUrl": {},
    "clientId": {},
    "usernameClaim": {},
    "usernamePrefix": {},
    "groupsClaim": {},
    "groupsPrefix": {},
    "requiredClaims": {
      "property1": "string",
      "property2": "string"
    }
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "clientRequestToken": "string"
}
```

<h3 id="associateidentityproviderconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the cluster to associate the configuration to.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» oidc|body|object|true|An object representing an OpenID Connect (OIDC) configuration. Before associating an OIDC identity provider to your cluster, review the considerations in <a href="https://docs.aws.amazon.com/eks/latest/userguide/authenticate-oidc-identity-provider.html">Authenticating users for your cluster from an OpenID Connect identity provider</a> in the <i>Amazon EKS User Guide</i>.|
|» » identityProviderConfigName|body|object|false|none|
|» » issuerUrl|body|object|false|none|
|» » clientId|body|object|false|none|
|» » usernameClaim|body|object|false|none|
|» » usernamePrefix|body|object|false|none|
|» » groupsClaim|body|object|false|none|
|» » groupsPrefix|body|object|false|none|
|» » requiredClaims|body|object|false|none|
|» » » **additionalProperties**|body|[requiredClaimsValue](#schemarequiredclaimsvalue)|false|none|
|» tags|body|object|false|The metadata to apply to the configuration to assist with categorization and organization. Each tag consists of a key and an optional value. You define both.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» clientRequestToken|body|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.|

> Example responses

> 200 Response

```json
{
  "update": {
    "id": {},
    "status": {},
    "type": {},
    "params": {},
    "createdAt": {},
    "errors": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
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

<h3 id="associateidentityproviderconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateIdentityProviderConfigResponse](#schemaassociateidentityproviderconfigresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServerException|[ServerException](#schemaserverexception)|
|483|483|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAddons

<a id="opIdListAddons"></a>

> Code samples

```bash
curl https://eks.us-east-1.amazonaws.com/clusters/string/addons \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /clusters/{name}/addons`

Lists the available add-ons.

<h3 id="listaddons-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the cluster.|
|maxResults|query|integer|false|The maximum number of add-on results returned by <code>ListAddonsRequest</code> in paginated output. When you use this parameter, <code>ListAddonsRequest</code> returns only <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListAddonsRequest</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListAddonsRequest</code> returns up to 100 results and a <code>nextToken</code> value, if applicable.|
|nextToken|query|string|false|<p>The <code>nextToken</code> value returned from a previous paginated <code>ListAddonsRequest</code> where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.</p> <note> <p>This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.</p> </note>|
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
  "addons": {},
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

> 484 Response

```json
null
```

<h3 id="listaddons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAddonsResponse](#schemalistaddonsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ClientException|[ClientException](#schemaclientexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ServerException|[ServerException](#schemaserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAddon

<a id="opIdCreateAddon"></a>

> Code samples

```bash
curl https://eks.us-east-1.amazonaws.com/clusters/string/addons \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "addonName": "string",
    "addonVersion": "string",
    "serviceAccountRoleArn": "string",
    "resolveConflicts": "OVERWRITE",
    "clientRequestToken": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "configurationValues": "string"
  }'
```

`POST /clusters/{name}/addons`

<p>Creates an Amazon EKS add-on.</p> <p>Amazon EKS add-ons help to automate the provisioning and lifecycle management of common operational software for Amazon EKS clusters. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-add-ons.html">Amazon EKS add-ons</a> in the <i>Amazon EKS User Guide</i>.</p>

> Body parameter

```json
{
  "addonName": "string",
  "addonVersion": "string",
  "serviceAccountRoleArn": "string",
  "resolveConflicts": "OVERWRITE",
  "clientRequestToken": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "configurationValues": "string"
}
```

<h3 id="createaddon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the cluster to create the add-on for.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» addonName|body|string|true|The name of the add-on. The name must match one of the names that <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonVersions.html"> <code>DescribeAddonVersions</code> </a> returns.|
|» addonVersion|body|string|false|The version of the add-on. The version must match one of the versions returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonVersions.html"> <code>DescribeAddonVersions</code> </a>.|
|» serviceAccountRoleArn|body|string|false|<p>The Amazon Resource Name (ARN) of an existing IAM role to bind to the add-on's service account. The role must be assigned the IAM permissions required by the add-on. If you don't specify an existing IAM role, then the add-on uses the permissions assigned to the node IAM role. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html">Amazon EKS node IAM role</a> in the <i>Amazon EKS User Guide</i>.</p> <note> <p>To specify an existing IAM role, you must have an IAM OpenID Connect (OIDC) provider created for your cluster. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html">Enabling IAM roles for service accounts on your cluster</a> in the <i>Amazon EKS User Guide</i>.</p> </note>|
|» resolveConflicts|body|string|false|<p>How to resolve field value conflicts for an Amazon EKS add-on. Conflicts are handled based on the value you choose:</p> <ul> <li> <p> <b>None</b> – If the self-managed version of the add-on is installed on your cluster, Amazon EKS doesn't change the value. Creation of the add-on might fail.</p> </li> <li> <p> <b>Overwrite</b> – If the self-managed version of the add-on is installed on your cluster and the Amazon EKS default value is different than the existing value, Amazon EKS changes the value to the Amazon EKS default value.</p> </li> <li> <p> <b>Preserve</b> – Not supported. You can set this value when updating an add-on though. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateAddon.html">UpdateAddon</a>.</p> </li> </ul> <p>If you don't currently have the self-managed version of the add-on installed on your cluster, the Amazon EKS add-on is installed. Amazon EKS sets all values to default values, regardless of the option that you specify.</p>|
|» clientRequestToken|body|string|false|A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.|
|» tags|body|object|false|The metadata to apply to the cluster to assist with categorization and organization. Each tag consists of a key and an optional value. You define both.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» configurationValues|body|string|false|The set of configuration values for the add-on that's created. The values that you provide are validated against the schema in <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonConfiguration.html"> <code>DescribeAddonConfiguration</code> </a>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» resolveConflicts|OVERWRITE|
|» resolveConflicts|NONE|
|» resolveConflicts|PRESERVE|

> Example responses

> 200 Response

```json
{
  "addon": {
    "addonName": {},
    "clusterName": {},
    "status": {},
    "addonVersion": {},
    "health": {
      "issues": {}
    },
    "addonArn": {},
    "createdAt": {},
    "modifiedAt": {},
    "serviceAccountRoleArn": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "publisher": {},
    "owner": {},
    "marketplaceInformation": {
      "productId": {},
      "productUrl": {}
    },
    "configurationValues": {}
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

<h3 id="createaddon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateAddonResponse](#schemacreateaddonresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|484|484|ClientException|[ClientException](#schemaclientexception)|
|485|485|ServerException|[ServerException](#schemaserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListClusters

<a id="opIdListClusters"></a>

> Code samples

```bash
curl https://eks.us-east-1.amazonaws.com/clusters \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /clusters`

Lists the Amazon EKS clusters in your Amazon Web Services account in the specified Region.

<h3 id="listclusters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|The maximum number of cluster results returned by <code>ListClusters</code> in paginated output. When you use this parameter, <code>ListClusters</code> returns only <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListClusters</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListClusters</code> returns up to 100 results and a <code>nextToken</code> value if applicable.|
|nextToken|query|string|false|<p>The <code>nextToken</code> value returned from a previous paginated <code>ListClusters</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.</p> <note> <p>This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.</p> </note>|
|include|query|[[String](#schemastring)]|false|Indicates whether external clusters are included in the returned list. Use '<code>all</code>' to return connected clusters, or blank to return only Amazon EKS clusters. '<code>all</code>' must be in lowercase otherwise an error occurs.|
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
  "clusters": [
    "devel",
    "prod"
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

<h3 id="listclusters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListClustersResponse](#schemalistclustersresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServerException|[ServerException](#schemaserverexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateCluster

<a id="opIdCreateCluster"></a>

> Code samples

```bash
curl https://eks.us-east-1.amazonaws.com/clusters \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "version": "string",
    "roleArn": "string",
    "resourcesVpcConfig": {
      "subnetIds": {},
      "securityGroupIds": {},
      "endpointPublicAccess": {},
      "endpointPrivateAccess": {},
      "publicAccessCidrs": {}
    },
    "kubernetesNetworkConfig": {
      "serviceIpv4Cidr": {},
      "ipFamily": {}
    },
    "logging": {
      "clusterLogging": {}
    },
    "clientRequestToken": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "encryptionConfig": [
      {
        "resources": {},
        "provider": {
          "keyArn": {}
        }
      }
    ],
    "outpostConfig": {
      "outpostArns": {},
      "controlPlaneInstanceType": {},
      "controlPlanePlacement": {
        "groupName": {}
      }
    }
  }'
```

`POST /clusters`

<p>Creates an Amazon EKS control plane. </p> <p>The Amazon EKS control plane consists of control plane instances that run the Kubernetes software, such as <code>etcd</code> and the API server. The control plane runs in an account managed by Amazon Web Services, and the Kubernetes API is exposed by the Amazon EKS API server endpoint. Each Amazon EKS cluster control plane is single tenant and unique. It runs on its own set of Amazon EC2 instances.</p> <p>The cluster control plane is provisioned across multiple Availability Zones and fronted by an Elastic Load Balancing Network Load Balancer. Amazon EKS also provisions elastic network interfaces in your VPC subnets to provide connectivity from the control plane instances to the nodes (for example, to support <code>kubectl exec</code>, <code>logs</code>, and <code>proxy</code> data flows).</p> <p>Amazon EKS nodes run in your Amazon Web Services account and connect to your cluster's control plane over the Kubernetes API server endpoint and a certificate file that is created for your cluster.</p> <p>In most cases, it takes several minutes to create a cluster. After you create an Amazon EKS cluster, you must configure your Kubernetes tooling to communicate with the API server and launch nodes into your cluster. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/managing-auth.html">Managing Cluster Authentication</a> and <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-workers.html">Launching Amazon EKS nodes</a> in the <i>Amazon EKS User Guide</i>.</p>

> Body parameter

```json
{
  "name": "string",
  "version": "string",
  "roleArn": "string",
  "resourcesVpcConfig": {
    "subnetIds": {},
    "securityGroupIds": {},
    "endpointPublicAccess": {},
    "endpointPrivateAccess": {},
    "publicAccessCidrs": {}
  },
  "kubernetesNetworkConfig": {
    "serviceIpv4Cidr": {},
    "ipFamily": {}
  },
  "logging": {
    "clusterLogging": {}
  },
  "clientRequestToken": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "encryptionConfig": [
    {
      "resources": {},
      "provider": {
        "keyArn": {}
      }
    }
  ],
  "outpostConfig": {
    "outpostArns": {},
    "controlPlaneInstanceType": {},
    "controlPlanePlacement": {
      "groupName": {}
    }
  }
}
```

<h3 id="createcluster-parameters">Parameters</h3>

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
|» name|body|string|true|The unique name to give to your cluster.|
|» version|body|string|false|<p>The desired Kubernetes version for your cluster. If you don't specify a value here, the default version available in Amazon EKS is used.</p> <note> <p>The default version might not be the latest version available.</p> </note>|
|» roleArn|body|string|true|The Amazon Resource Name (ARN) of the IAM role that provides permissions for the Kubernetes control plane to make calls to Amazon Web Services API operations on your behalf. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/service_IAM_role.html">Amazon EKS Service IAM Role</a> in the <i> <i>Amazon EKS User Guide</i> </i>.|
|» resourcesVpcConfig|body|object|true|An object representing the VPC configuration to use for an Amazon EKS cluster.|
|» » subnetIds|body|object|false|none|
|» » securityGroupIds|body|object|false|none|
|» » endpointPublicAccess|body|object|false|none|
|» » endpointPrivateAccess|body|object|false|none|
|» » publicAccessCidrs|body|object|false|none|
|» kubernetesNetworkConfig|body|object|false|The Kubernetes network configuration for the cluster.|
|» » serviceIpv4Cidr|body|object|false|none|
|» » ipFamily|body|object|false|none|
|» logging|body|object|false|An object representing the logging configuration for resources in your cluster.|
|» » clusterLogging|body|object|false|none|
|» clientRequestToken|body|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.|
|» tags|body|object|false|The metadata to apply to the cluster to assist with categorization and organization. Each tag consists of a key and an optional value. You define both.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» encryptionConfig|body|[[EncryptionConfig](#schemaencryptionconfig)]|false|The encryption configuration for the cluster.|
|» outpostConfig|body|object|false|The configuration of your local Amazon EKS cluster on an Amazon Web Services Outpost. Before creating a cluster on an Outpost, review <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-local-cluster-create.html">Creating a local cluster on an Outpost</a> in the <i>Amazon EKS User Guide</i>. This API isn't available for Amazon EKS clusters on the Amazon Web Services cloud.|
|» » outpostArns|body|object|false|none|
|» » controlPlaneInstanceType|body|object|false|none|
|» » controlPlanePlacement|body|object|false|none|
|» » » groupName|body|object|false|none|

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

<h3 id="createcluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateClusterResponse](#schemacreateclusterresponse)|
|480|480|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|481|481|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ClientException|[ClientException](#schemaclientexception)|
|484|484|ServerException|[ServerException](#schemaserverexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|UnsupportedAvailabilityZoneException|[UnsupportedAvailabilityZoneException](#schemaunsupportedavailabilityzoneexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFargateProfiles

<a id="opIdListFargateProfiles"></a>

> Code samples

```bash
curl https://eks.us-east-1.amazonaws.com/clusters/string/fargate-profiles \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /clusters/{name}/fargate-profiles`

Lists the Fargate profiles associated with the specified cluster in your Amazon Web Services account in the specified Region.

<h3 id="listfargateprofiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the Amazon EKS cluster that you would like to list Fargate profiles in.|
|maxResults|query|integer|false|The maximum number of Fargate profile results returned by <code>ListFargateProfiles</code> in paginated output. When you use this parameter, <code>ListFargateProfiles</code> returns only <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListFargateProfiles</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListFargateProfiles</code> returns up to 100 results and a <code>nextToken</code> value if applicable.|
|nextToken|query|string|false|The <code>nextToken</code> value returned from a previous paginated <code>ListFargateProfiles</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.|
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
  "fargateProfileNames": {},
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

<h3 id="listfargateprofiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFargateProfilesResponse](#schemalistfargateprofilesresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ClientException|[ClientException](#schemaclientexception)|
|483|483|ServerException|[ServerException](#schemaserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateFargateProfile

<a id="opIdCreateFargateProfile"></a>

> Code samples

```bash
curl https://eks.us-east-1.amazonaws.com/clusters/string/fargate-profiles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "fargateProfileName": "string",
    "podExecutionRoleArn": "string",
    "subnets": [
      "string"
    ],
    "selectors": [
      {
        "namespace": {},
        "labels": {
          "property1": "string",
          "property2": "string"
        }
      }
    ],
    "clientRequestToken": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /clusters/{name}/fargate-profiles`

<p>Creates an Fargate profile for your Amazon EKS cluster. You must have at least one Fargate profile in a cluster to be able to run pods on Fargate.</p> <p>The Fargate profile allows an administrator to declare which pods run on Fargate and specify which pods run on which Fargate profile. This declaration is done through the profile’s selectors. Each profile can have up to five selectors that contain a namespace and labels. A namespace is required for every selector. The label field consists of multiple optional key-value pairs. Pods that match the selectors are scheduled on Fargate. If a to-be-scheduled pod matches any of the selectors in the Fargate profile, then that pod is run on Fargate.</p> <p>When you create a Fargate profile, you must specify a pod execution role to use with the pods that are scheduled with the profile. This role is added to the cluster's Kubernetes <a href="https://kubernetes.io/docs/admin/authorization/rbac/">Role Based Access Control</a> (RBAC) for authorization so that the <code>kubelet</code> that is running on the Fargate infrastructure can register with your Amazon EKS cluster so that it can appear in your cluster as a node. The pod execution role also provides IAM permissions to the Fargate infrastructure to allow read access to Amazon ECR image repositories. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/pod-execution-role.html">Pod Execution Role</a> in the <i>Amazon EKS User Guide</i>.</p> <p>Fargate profiles are immutable. However, you can create a new updated profile to replace an existing profile and then delete the original after the updated profile has finished creating.</p> <p>If any Fargate profiles in a cluster are in the <code>DELETING</code> status, you must wait for that Fargate profile to finish deleting before you can create any other profiles in that cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/fargate-profile.html">Fargate Profile</a> in the <i>Amazon EKS User Guide</i>.</p>

> Body parameter

```json
{
  "fargateProfileName": "string",
  "podExecutionRoleArn": "string",
  "subnets": [
    "string"
  ],
  "selectors": [
    {
      "namespace": {},
      "labels": {
        "property1": "string",
        "property2": "string"
      }
    }
  ],
  "clientRequestToken": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createfargateprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the Amazon EKS cluster to apply the Fargate profile to.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» fargateProfileName|body|string|true|The name of the Fargate profile.|
|» podExecutionRoleArn|body|string|true|The Amazon Resource Name (ARN) of the pod execution role to use for pods that match the selectors in the Fargate profile. The pod execution role allows Fargate infrastructure to register with your cluster as a node, and it provides read access to Amazon ECR image repositories. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/pod-execution-role.html">Pod Execution Role</a> in the <i>Amazon EKS User Guide</i>.|
|» subnets|body|[[String](#schemastring)]|false|The IDs of subnets to launch your pods into. At this time, pods running on Fargate are not assigned public IP addresses, so only private subnets (with no direct route to an Internet Gateway) are accepted for this parameter.|
|» selectors|body|[[FargateProfileSelector](#schemafargateprofileselector)]|false|The selectors to match for pods to use this Fargate profile. Each selector must have an associated namespace. Optionally, you can also specify labels for a namespace. You may specify up to five selectors in a Fargate profile.|
|» clientRequestToken|body|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.|
|» tags|body|object|false|The metadata to apply to the Fargate profile to assist with categorization and organization. Each tag consists of a key and an optional value. You define both. Fargate profile tags do not propagate to any other resources associated with the Fargate profile, such as the pods that are scheduled with it.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{
  "fargateProfile": {
    "fargateProfileName": {},
    "fargateProfileArn": {},
    "clusterName": {},
    "createdAt": {},
    "podExecutionRoleArn": {},
    "subnets": {},
    "selectors": {},
    "status": {},
    "tags": {
      "property1": "string",
      "property2": "string"
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

<h3 id="createfargateprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateFargateProfileResponse](#schemacreatefargateprofileresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ClientException|[ClientException](#schemaclientexception)|
|483|483|ServerException|[ServerException](#schemaserverexception)|
|484|484|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|485|485|UnsupportedAvailabilityZoneException|[UnsupportedAvailabilityZoneException](#schemaunsupportedavailabilityzoneexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListNodegroups

<a id="opIdListNodegroups"></a>

> Code samples

```bash
curl https://eks.us-east-1.amazonaws.com/clusters/string/node-groups \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /clusters/{name}/node-groups`

Lists the Amazon EKS managed node groups associated with the specified cluster in your Amazon Web Services account in the specified Region. Self-managed node groups are not listed.

<h3 id="listnodegroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the Amazon EKS cluster that you would like to list node groups in.|
|maxResults|query|integer|false|The maximum number of node group results returned by <code>ListNodegroups</code> in paginated output. When you use this parameter, <code>ListNodegroups</code> returns only <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListNodegroups</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListNodegroups</code> returns up to 100 results and a <code>nextToken</code> value if applicable.|
|nextToken|query|string|false|The <code>nextToken</code> value returned from a previous paginated <code>ListNodegroups</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.|
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
  "nodegroups": {},
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

> 484 Response

```json
null
```

<h3 id="listnodegroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListNodegroupsResponse](#schemalistnodegroupsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServerException|[ServerException](#schemaserverexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateNodegroup

<a id="opIdCreateNodegroup"></a>

> Code samples

```bash
curl https://eks.us-east-1.amazonaws.com/clusters/string/node-groups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "nodegroupName": "string",
    "scalingConfig": {
      "minSize": {},
      "maxSize": {},
      "desiredSize": {}
    },
    "diskSize": 0,
    "subnets": [
      "string"
    ],
    "instanceTypes": [
      "string"
    ],
    "amiType": "AL2_x86_64",
    "remoteAccess": {
      "ec2SshKey": {},
      "sourceSecurityGroups": {}
    },
    "nodeRole": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "taints": [
      {
        "key": {},
        "value": {},
        "effect": {}
      }
    ],
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "clientRequestToken": "string",
    "launchTemplate": {
      "name": {},
      "version": {},
      "id": {}
    },
    "updateConfig": {
      "maxUnavailable": {},
      "maxUnavailablePercentage": {}
    },
    "capacityType": "ON_DEMAND",
    "version": "string",
    "releaseVersion": "string"
  }'
```

`POST /clusters/{name}/node-groups`

<p>Creates a managed node group for an Amazon EKS cluster. You can only create a node group for your cluster that is equal to the current Kubernetes version for the cluster. All node groups are created with the latest AMI release version for the respective minor Kubernetes version of the cluster, unless you deploy a custom AMI using a launch template. For more information about using launch templates, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a>.</p> <p>An Amazon EKS managed node group is an Amazon EC2 Auto Scaling group and associated Amazon EC2 instances that are managed by Amazon Web Services for an Amazon EKS cluster. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html">Managed node groups</a> in the <i>Amazon EKS User Guide</i>.</p> <note> <p>Windows AMI types are only supported for commercial Regions that support Windows Amazon EKS.</p> </note>

> Body parameter

```json
{
  "nodegroupName": "string",
  "scalingConfig": {
    "minSize": {},
    "maxSize": {},
    "desiredSize": {}
  },
  "diskSize": 0,
  "subnets": [
    "string"
  ],
  "instanceTypes": [
    "string"
  ],
  "amiType": "AL2_x86_64",
  "remoteAccess": {
    "ec2SshKey": {},
    "sourceSecurityGroups": {}
  },
  "nodeRole": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "taints": [
    {
      "key": {},
      "value": {},
      "effect": {}
    }
  ],
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "clientRequestToken": "string",
  "launchTemplate": {
    "name": {},
    "version": {},
    "id": {}
  },
  "updateConfig": {
    "maxUnavailable": {},
    "maxUnavailablePercentage": {}
  },
  "capacityType": "ON_DEMAND",
  "version": "string",
  "releaseVersion": "string"
}
```

<h3 id="createnodegroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the cluster to create the node group in.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» nodegroupName|body|string|true|The unique name to give your node group.|
|» scalingConfig|body|object|false|An object representing the scaling configuration details for the Auto Scaling group that is associated with your node group. When creating a node group, you must specify all or none of the properties. When updating a node group, you can specify any or none of the properties.|
|» » minSize|body|object|false|none|
|» » maxSize|body|object|false|none|
|» » desiredSize|body|object|false|none|
|» diskSize|body|integer|false|The root device disk size (in GiB) for your node group instances. The default disk size is 20 GiB for Linux and Bottlerocket. The default disk size is 50 GiB for Windows. If you specify <code>launchTemplate</code>, then don't specify <code>diskSize</code>, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.|
|» subnets|body|[[String](#schemastring)]|true|The subnets to use for the Auto Scaling group that is created for your node group. If you specify <code>launchTemplate</code>, then don't specify <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html"> <code>SubnetId</code> </a> in your launch template, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.|
|» instanceTypes|body|[[String](#schemastring)]|false|Specify the instance types for a node group. If you specify a GPU instance type, make sure to also specify an applicable GPU AMI type with the <code>amiType</code> parameter. If you specify <code>launchTemplate</code>, then you can specify zero or one instance type in your launch template <i>or</i> you can specify 0-20 instance types for <code>instanceTypes</code>. If however, you specify an instance type in your launch template <i>and</i> specify any <code>instanceTypes</code>, the node group deployment will fail. If you don't specify an instance type in a launch template or for <code>instanceTypes</code>, then <code>t3.medium</code> is used, by default. If you specify <code>Spot</code> for <code>capacityType</code>, then we recommend specifying multiple values for <code>instanceTypes</code>. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html#managed-node-group-capacity-types">Managed node group capacity types</a> and <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.|
|» amiType|body|string|false|The AMI type for your node group. If you specify <code>launchTemplate</code>, and your launch template uses a custom AMI, then don't specify <code>amiType</code>, or the node group deployment will fail. If your launch template uses a Windows custom AMI, then add <code>eks:kube-proxy-windows</code> to your Windows nodes <code>rolearn</code> in the <code>aws-auth</code> <code>ConfigMap</code>. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.|
|» remoteAccess|body|object|false|An object representing the remote access configuration for the managed node group.|
|» » ec2SshKey|body|object|false|none|
|» » sourceSecurityGroups|body|object|false|none|
|» nodeRole|body|string|true|The Amazon Resource Name (ARN) of the IAM role to associate with your node group. The Amazon EKS worker node <code>kubelet</code> daemon makes calls to Amazon Web Services APIs on your behalf. Nodes receive permissions for these API calls through an IAM instance profile and associated policies. Before you can launch nodes and register them into a cluster, you must create an IAM role for those nodes to use when they are launched. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html">Amazon EKS node IAM role</a> in the <i> <i>Amazon EKS User Guide</i> </i>. If you specify <code>launchTemplate</code>, then don't specify <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IamInstanceProfile.html"> <code>IamInstanceProfile</code> </a> in your launch template, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.|
|» labels|body|object|false|The Kubernetes labels to be applied to the nodes in the node group when they are created.|
|» » **additionalProperties**|body|[labelValue](#schemalabelvalue)|false|none|
|» taints|body|[[Taint](#schemataint)]|false|The Kubernetes taints to be applied to the nodes in the node group. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/node-taints-managed-node-groups.html">Node taints on managed node groups</a>.|
|» tags|body|object|false|The metadata to apply to the node group to assist with categorization and organization. Each tag consists of a key and an optional value. You define both. Node group tags do not propagate to any other resources associated with the node group, such as the Amazon EC2 instances or subnets.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» clientRequestToken|body|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.|
|» launchTemplate|body|object|false|<p>An object representing a node group launch template specification. The launch template can't include <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html"> <code>SubnetId</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IamInstanceProfile.html"> <code>IamInstanceProfile</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html"> <code>RequestSpotInstances</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_HibernationOptionsRequest.html"> <code>HibernationOptions</code> </a>, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TerminateInstances.html"> <code>TerminateInstances</code> </a>, or the node group deployment or update will fail. For more information about launch templates, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLaunchTemplate.html"> <code>CreateLaunchTemplate</code> </a> in the Amazon EC2 API Reference. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.</p> <p>You must specify either the launch template ID or the launch template name in the request, but not both.</p>|
|» » name|body|object|false|none|
|» » version|body|object|false|none|
|» » id|body|object|false|none|
|» updateConfig|body|object|false|The node group update configuration.|
|» » maxUnavailable|body|object|false|none|
|» » maxUnavailablePercentage|body|object|false|none|
|» capacityType|body|string|false|The capacity type for your node group.|
|» version|body|string|false|The Kubernetes version to use for your managed nodes. By default, the Kubernetes version of the cluster is used, and this is the only accepted specified value. If you specify <code>launchTemplate</code>, and your launch template uses a custom AMI, then don't specify <code>version</code>, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.|
|» releaseVersion|body|string|false|<p>The AMI version of the Amazon EKS optimized AMI to use with your node group. By default, the latest available AMI version for the node group's current Kubernetes version is used. For information about Linux versions, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-linux-ami-versions.html">Amazon EKS optimized Amazon Linux AMI versions</a> in the <i>Amazon EKS User Guide</i>. Amazon EKS managed node groups support the November 2022 and later releases of the Windows AMIs. For information about Windows versions, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-ami-versions-windows.html">Amazon EKS optimized Windows AMI versions</a> in the <i>Amazon EKS User Guide</i>.</p> <p>If you specify <code>launchTemplate</code>, and your launch template uses a custom AMI, then don't specify <code>releaseVersion</code>, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.</p>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» amiType|AL2_x86_64|
|» amiType|AL2_x86_64_GPU|
|» amiType|AL2_ARM_64|
|» amiType|CUSTOM|
|» amiType|BOTTLEROCKET_ARM_64|
|» amiType|BOTTLEROCKET_x86_64|
|» amiType|BOTTLEROCKET_ARM_64_NVIDIA|
|» amiType|BOTTLEROCKET_x86_64_NVIDIA|
|» amiType|WINDOWS_CORE_2019_x86_64|
|» amiType|WINDOWS_FULL_2019_x86_64|
|» amiType|WINDOWS_CORE_2022_x86_64|
|» amiType|WINDOWS_FULL_2022_x86_64|
|» capacityType|ON_DEMAND|
|» capacityType|SPOT|

> Example responses

> 200 Response

```json
{
  "nodegroup": {
    "nodegroupName": {},
    "nodegroupArn": {},
    "clusterName": {},
    "version": {},
    "releaseVersion": {},
    "createdAt": {},
    "modifiedAt": {},
    "status": {},
    "capacityType": {},
    "scalingConfig": {
      "minSize": {},
      "maxSize": {},
      "desiredSize": {}
    },
    "instanceTypes": {},
    "subnets": {},
    "remoteAccess": {
      "ec2SshKey": {},
      "sourceSecurityGroups": {}
    },
    "amiType": {},
    "nodeRole": {},
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "taints": {},
    "resources": {
      "autoScalingGroups": {},
      "remoteAccessSecurityGroup": {}
    },
    "diskSize": {},
    "health": {
      "issues": {}
    },
    "updateConfig": {
      "maxUnavailable": {},
      "maxUnavailablePercentage": {}
    },
    "launchTemplate": {
      "name": {},
      "version": {},
      "id": {}
    },
    "tags": {
      "property1": "string",
      "property2": "string"
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

<h3 id="createnodegroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateNodegroupResponse](#schemacreatenodegroupresponse)|
|480|480|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|481|481|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|484|484|ClientException|[ClientException](#schemaclientexception)|
|485|485|ServerException|[ServerException](#schemaserverexception)|
|486|486|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAddon

<a id="opIdDescribeAddon"></a>

> Code samples

```bash
curl https://eks.us-east-1.amazonaws.com/clusters/string/addons/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /clusters/{name}/addons/{addonName}`

Describes an Amazon EKS add-on.

<h3 id="describeaddon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the cluster.|
|addonName|path|string|true|The name of the add-on. The name must match one of the names returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAddons.html"> <code>ListAddons</code> </a>.|
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
  "addon": {
    "addonName": {},
    "clusterName": {},
    "status": {},
    "addonVersion": {},
    "health": {
      "issues": {}
    },
    "addonArn": {},
    "createdAt": {},
    "modifiedAt": {},
    "serviceAccountRoleArn": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "publisher": {},
    "owner": {},
    "marketplaceInformation": {
      "productId": {},
      "productUrl": {}
    },
    "configurationValues": {}
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

<h3 id="describeaddon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAddonResponse](#schemadescribeaddonresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ClientException|[ClientException](#schemaclientexception)|
|484|484|ServerException|[ServerException](#schemaserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAddon

<a id="opIdDeleteAddon"></a>

> Code samples

```bash
curl https://eks.us-east-1.amazonaws.com/clusters/string/addons/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /clusters/{name}/addons/{addonName}`

<p>Delete an Amazon EKS add-on.</p> <p>When you remove the add-on, it will also be deleted from the cluster. You can always manually start an add-on on the cluster using the Kubernetes API.</p>

<h3 id="deleteaddon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the cluster to delete the add-on from.|
|addonName|path|string|true|The name of the add-on. The name must match one of the names returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAddons.html"> <code>ListAddons</code> </a>.|
|preserve|query|boolean|false|Specifying this option preserves the add-on software on your cluster but Amazon EKS stops managing any settings for the add-on. If an IAM account is associated with the add-on, it isn't removed.|
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
  "addon": {
    "addonName": {},
    "clusterName": {},
    "status": {},
    "addonVersion": {},
    "health": {
      "issues": {}
    },
    "addonArn": {},
    "createdAt": {},
    "modifiedAt": {},
    "serviceAccountRoleArn": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "publisher": {},
    "owner": {},
    "marketplaceInformation": {
      "productId": {},
      "productUrl": {}
    },
    "configurationValues": {}
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

<h3 id="deleteaddon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteAddonResponse](#schemadeleteaddonresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ClientException|[ClientException](#schemaclientexception)|
|484|484|ServerException|[ServerException](#schemaserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeCluster

<a id="opIdDescribeCluster"></a>

> Code samples

```bash
curl https://eks.us-east-1.amazonaws.com/clusters/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /clusters/{name}`

<p>Returns descriptive information about an Amazon EKS cluster.</p> <p>The API server endpoint and certificate authority data returned by this operation are required for <code>kubelet</code> and <code>kubectl</code> to communicate with your Kubernetes API server. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html">Create a kubeconfig for Amazon EKS</a>.</p> <note> <p>The API server endpoint and certificate authority data aren't available until the cluster reaches the <code>ACTIVE</code> state.</p> </note>

<h3 id="describecluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the cluster to describe.|
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
  "cluster": {
    "version": "1.10",
    "name": "devel",
    "arn": "arn:aws:eks:us-west-2:012345678910:cluster/devel",
    "certificateAuthority": {
      "data": "LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUN5RENDQWJDZ0F3SUJBZ0lCQURBTkJna3Foa2lHOXcwQkFRc0ZBREFWTVJNd0VRWURWUVFERXdwcmRXSmwKY201bGRHVnpNQjRYRFRFNE1EVXpNVEl6TVRFek1Wb1hEVEk0TURVeU9ESXpNVEV6TVZvd0ZURVRNQkVHQTFVRQpBeE1LYTNWaVpYSnVaWFJsY3pDQ0FTSXdEUVlKS29aSWh2Y05BUUVCQlFBRGdnRVBBRENDQVFvQ2dnRUJBTTZWCjVUaG4rdFcySm9Xa2hQMzRlVUZMNitaRXJOZGIvWVdrTmtDdWNGS2RaaXl2TjlMVmdvUmV2MjlFVFZlN1ZGbSsKUTJ3ZURyRXJiQyt0dVlibkFuN1ZLYmE3ay9hb1BHekZMdmVnb0t6b0M1N2NUdGVwZzRIazRlK2tIWHNaME10MApyb3NzcjhFM1ROeExETnNJTThGL1cwdjhsTGNCbWRPcjQyV2VuTjFHZXJnaDNSZ2wzR3JIazBnNTU0SjFWenJZCm9hTi8zODFUczlOTFF2QTBXb0xIcjBFRlZpTFdSZEoyZ3lXaC9ybDVyOFNDOHZaQXg1YW1BU0hVd01aTFpWRC8KTDBpOW4wRVM0MkpVdzQyQmxHOEdpd3NhTkJWV3lUTHZKclNhRXlDSHFtVVZaUTFDZkFXUjl0L3JleVVOVXM3TApWV1FqM3BFbk9RMitMSWJrc0RzQ0F3RUFBYU1qTUNFd0RnWURWUjBQQVFIL0JBUURBZ0trTUE4R0ExVWRFd0VCCi93UUZNQU1CQWY4d0RRWUpLb1pJaHZjTkFRRUxCUUFEZ2dFQkFNZ3RsQ1dIQ2U2YzVHMXl2YlFTS0Q4K2hUalkKSm1NSG56L2EvRGt0WG9YUjFVQzIrZUgzT1BZWmVjRVZZZHVaSlZCckNNQ2VWR0ZkeWdBYlNLc1FxWDg0S2RXbAp1MU5QaERDSmEyRHliN2pVMUV6VThTQjFGZUZ5ZFE3a0hNS1E1blpBRVFQOTY4S01hSGUrSm0yQ2x1UFJWbEJVCjF4WlhTS1gzTVZ0K1Q0SU1EV2d6c3JRSjVuQkRjdEtLcUZtM3pKdVVubHo5ZEpVckdscEltMjVJWXJDckxYUFgKWkUwRUtRNWEzMHhkVWNrTHRGQkQrOEtBdFdqSS9yZUZPNzM1YnBMdVoyOTBaNm42QlF3elRrS0p4cnhVc3QvOAppNGsxcnlsaUdWMm5SSjBUYjNORkczNHgrYWdzYTRoSTFPbU90TFM0TmgvRXJxT3lIUXNDc2hEQUtKUT0KLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQo="
    },
    "createdAt": 1527807879.988,
    "endpoint": "https://A0DCCD80A04F01705DD065655C30CC3D.yl4.us-west-2.eks.amazonaws.com",
    "resourcesVpcConfig": {
      "securityGroupIds": [
        "sg-6979fe18"
      ],
      "subnetIds": [
        "subnet-6782e71e",
        "subnet-e7e761ac"
      ],
      "vpcId": "vpc-950809ec"
    },
    "roleArn": "arn:aws:iam::012345678910:role/eks-service-role-AWSServiceRoleForAmazonEKS-J7ONKE3BQ4PI",
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

<h3 id="describecluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeClusterResponse](#schemadescribeclusterresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServerException|[ServerException](#schemaserverexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteCluster

<a id="opIdDeleteCluster"></a>

> Code samples

```bash
curl https://eks.us-east-1.amazonaws.com/clusters/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /clusters/{name}`

<p>Deletes the Amazon EKS cluster control plane.</p> <p>If you have active services in your cluster that are associated with a load balancer, you must delete those services before deleting the cluster so that the load balancers are deleted properly. Otherwise, you can have orphaned resources in your VPC that prevent you from being able to delete the VPC. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/delete-cluster.html">Deleting a Cluster</a> in the <i>Amazon EKS User Guide</i>.</p> <p>If you have managed node groups or Fargate profiles attached to the cluster, you must delete them first. For more information, see <a>DeleteNodegroup</a> and <a>DeleteFargateProfile</a>.</p>

<h3 id="deletecluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the cluster to delete.|
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

<h3 id="deletecluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteClusterResponse](#schemadeleteclusterresponse)|
|480|480|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ClientException|[ClientException](#schemaclientexception)|
|483|483|ServerException|[ServerException](#schemaserverexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeFargateProfile

<a id="opIdDescribeFargateProfile"></a>

> Code samples

```bash
curl https://eks.us-east-1.amazonaws.com/clusters/string/fargate-profiles/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /clusters/{name}/fargate-profiles/{fargateProfileName}`

Returns descriptive information about an Fargate profile.

<h3 id="describefargateprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the Amazon EKS cluster associated with the Fargate profile.|
|fargateProfileName|path|string|true|The name of the Fargate profile to describe.|
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
  "fargateProfile": {
    "fargateProfileName": {},
    "fargateProfileArn": {},
    "clusterName": {},
    "createdAt": {},
    "podExecutionRoleArn": {},
    "subnets": {},
    "selectors": {},
    "status": {},
    "tags": {
      "property1": "string",
      "property2": "string"
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

<h3 id="describefargateprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeFargateProfileResponse](#schemadescribefargateprofileresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServerException|[ServerException](#schemaserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteFargateProfile

<a id="opIdDeleteFargateProfile"></a>

> Code samples

```bash
curl https://eks.us-east-1.amazonaws.com/clusters/string/fargate-profiles/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /clusters/{name}/fargate-profiles/{fargateProfileName}`

<p>Deletes an Fargate profile.</p> <p>When you delete a Fargate profile, any pods running on Fargate that were created with the profile are deleted. If those pods match another Fargate profile, then they are scheduled on Fargate with that profile. If they no longer match any Fargate profiles, then they are not scheduled on Fargate and they may remain in a pending state.</p> <p>Only one Fargate profile in a cluster can be in the <code>DELETING</code> status at a time. You must wait for a Fargate profile to finish deleting before you can delete any other profiles in that cluster.</p>

<h3 id="deletefargateprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the Amazon EKS cluster associated with the Fargate profile to delete.|
|fargateProfileName|path|string|true|The name of the Fargate profile to delete.|
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
  "fargateProfile": {
    "fargateProfileName": {},
    "fargateProfileArn": {},
    "clusterName": {},
    "createdAt": {},
    "podExecutionRoleArn": {},
    "subnets": {},
    "selectors": {},
    "status": {},
    "tags": {
      "property1": "string",
      "property2": "string"
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

<h3 id="deletefargateprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteFargateProfileResponse](#schemadeletefargateprofileresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServerException|[ServerException](#schemaserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeNodegroup

<a id="opIdDescribeNodegroup"></a>

> Code samples

```bash
curl https://eks.us-east-1.amazonaws.com/clusters/string/node-groups/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /clusters/{name}/node-groups/{nodegroupName}`

Returns descriptive information about an Amazon EKS node group.

<h3 id="describenodegroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the Amazon EKS cluster associated with the node group.|
|nodegroupName|path|string|true|The name of the node group to describe.|
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
  "nodegroup": {
    "nodegroupName": {},
    "nodegroupArn": {},
    "clusterName": {},
    "version": {},
    "releaseVersion": {},
    "createdAt": {},
    "modifiedAt": {},
    "status": {},
    "capacityType": {},
    "scalingConfig": {
      "minSize": {},
      "maxSize": {},
      "desiredSize": {}
    },
    "instanceTypes": {},
    "subnets": {},
    "remoteAccess": {
      "ec2SshKey": {},
      "sourceSecurityGroups": {}
    },
    "amiType": {},
    "nodeRole": {},
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "taints": {},
    "resources": {
      "autoScalingGroups": {},
      "remoteAccessSecurityGroup": {}
    },
    "diskSize": {},
    "health": {
      "issues": {}
    },
    "updateConfig": {
      "maxUnavailable": {},
      "maxUnavailablePercentage": {}
    },
    "launchTemplate": {
      "name": {},
      "version": {},
      "id": {}
    },
    "tags": {
      "property1": "string",
      "property2": "string"
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

<h3 id="describenodegroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeNodegroupResponse](#schemadescribenodegroupresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ClientException|[ClientException](#schemaclientexception)|
|483|483|ServerException|[ServerException](#schemaserverexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteNodegroup

<a id="opIdDeleteNodegroup"></a>

> Code samples

```bash
curl https://eks.us-east-1.amazonaws.com/clusters/string/node-groups/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /clusters/{name}/node-groups/{nodegroupName}`

Deletes an Amazon EKS node group for a cluster.

<h3 id="deletenodegroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the Amazon EKS cluster that is associated with your node group.|
|nodegroupName|path|string|true|The name of the node group to delete.|
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
  "nodegroup": {
    "nodegroupName": {},
    "nodegroupArn": {},
    "clusterName": {},
    "version": {},
    "releaseVersion": {},
    "createdAt": {},
    "modifiedAt": {},
    "status": {},
    "capacityType": {},
    "scalingConfig": {
      "minSize": {},
      "maxSize": {},
      "desiredSize": {}
    },
    "instanceTypes": {},
    "subnets": {},
    "remoteAccess": {
      "ec2SshKey": {},
      "sourceSecurityGroups": {}
    },
    "amiType": {},
    "nodeRole": {},
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "taints": {},
    "resources": {
      "autoScalingGroups": {},
      "remoteAccessSecurityGroup": {}
    },
    "diskSize": {},
    "health": {
      "issues": {}
    },
    "updateConfig": {
      "maxUnavailable": {},
      "maxUnavailablePercentage": {}
    },
    "launchTemplate": {
      "name": {},
      "version": {},
      "id": {}
    },
    "tags": {
      "property1": "string",
      "property2": "string"
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

<h3 id="deletenodegroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteNodegroupResponse](#schemadeletenodegroupresponse)|
|480|480|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|483|483|ClientException|[ClientException](#schemaclientexception)|
|484|484|ServerException|[ServerException](#schemaserverexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeregisterCluster

<a id="opIdDeregisterCluster"></a>

> Code samples

```bash
curl https://eks.us-east-1.amazonaws.com/cluster-registrations/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /cluster-registrations/{name}`

Deregisters a connected cluster to remove it from the Amazon EKS control plane.

<h3 id="deregistercluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the connected cluster to deregister.|
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
  "cluster": {
    "name": {},
    "arn": {},
    "createdAt": {},
    "version": {},
    "endpoint": {},
    "roleArn": {},
    "resourcesVpcConfig": {
      "subnetIds": {},
      "securityGroupIds": {},
      "clusterSecurityGroupId": {},
      "vpcId": {},
      "endpointPublicAccess": {},
      "endpointPrivateAccess": {},
      "publicAccessCidrs": {}
    },
    "kubernetesNetworkConfig": {
      "serviceIpv4Cidr": {},
      "serviceIpv6Cidr": {},
      "ipFamily": {}
    },
    "logging": {
      "clusterLogging": {}
    },
    "identity": {
      "oidc": {
        "issuer": {}
      }
    },
    "status": {},
    "certificateAuthority": {
      "data": {}
    },
    "clientRequestToken": {},
    "platformVersion": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "encryptionConfig": {},
    "connectorConfig": {
      "activationId": {},
      "activationCode": {},
      "activationExpiry": {},
      "provider": {},
      "roleArn": {}
    },
    "id": {},
    "health": {
      "issues": {}
    },
    "outpostConfig": {
      "outpostArns": {},
      "controlPlaneInstanceType": {},
      "controlPlanePlacement": {
        "groupName": {}
      }
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

<h3 id="deregistercluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeregisterClusterResponse](#schemaderegisterclusterresponse)|
|480|480|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ClientException|[ClientException](#schemaclientexception)|
|483|483|ServerException|[ServerException](#schemaserverexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAddonConfiguration

<a id="opIdDescribeAddonConfiguration"></a>

> Code samples

```bash
curl 'https://eks.us-east-1.amazonaws.com/addons/configuration-schemas#addonName&addonVersion?addonName=string&addonVersion=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /addons/configuration-schemas#addonName&addonVersion`

Returns configuration options.

<h3 id="describeaddonconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|addonName|query|string|true|The name of the add-on. The name must match one of the names that <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonVersions.html"> <code>DescribeAddonVersions</code> </a> returns.|
|addonVersion|query|string|true|The version of the add-on. The version must match one of the versions returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonVersions.html"> <code>DescribeAddonVersions</code> </a>.|
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
  "addonName": {},
  "addonVersion": {},
  "configurationSchema": {}
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

<h3 id="describeaddonconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAddonConfigurationResponse](#schemadescribeaddonconfigurationresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAddonVersions

<a id="opIdDescribeAddonVersions"></a>

> Code samples

```bash
curl https://eks.us-east-1.amazonaws.com/addons/supported-versions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /addons/supported-versions`

Describes the versions for an add-on. Information such as the Kubernetes versions that you can use the add-on with, the <code>owner</code>, <code>publisher</code>, and the <code>type</code> of the add-on are returned. 

<h3 id="describeaddonversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|kubernetesVersion|query|string|false|The Kubernetes versions that you can use the add-on with.|
|maxResults|query|integer|false|The maximum number of results to return.|
|nextToken|query|string|false|<p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeAddonVersionsRequest</code> where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.</p> <note> <p>This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.</p> </note>|
|addonName|query|string|false|The name of the add-on. The name must match one of the names returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAddons.html"> <code>ListAddons</code> </a>.|
|types|query|[[String](#schemastring)]|false|The type of the add-on. For valid <code>types</code>, don't specify a value for this property.|
|publishers|query|[[String](#schemastring)]|false|The publisher of the add-on. For valid <code>publishers</code>, don't specify a value for this property.|
|owners|query|[[String](#schemastring)]|false|The owner of the add-on. For valid <code>owners</code>, don't specify a value for this property.|
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
  "addons": {},
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

<h3 id="describeaddonversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAddonVersionsResponse](#schemadescribeaddonversionsresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeIdentityProviderConfig

<a id="opIdDescribeIdentityProviderConfig"></a>

> Code samples

```bash
curl https://eks.us-east-1.amazonaws.com/clusters/string/identity-provider-configs/describe \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "identityProviderConfig": {
      "type": {},
      "name": {}
    }
  }'
```

`POST /clusters/{name}/identity-provider-configs/describe`

Returns descriptive information about an identity provider configuration.

> Body parameter

```json
{
  "identityProviderConfig": {
    "type": {},
    "name": {}
  }
}
```

<h3 id="describeidentityproviderconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The cluster name that the identity provider configuration is associated to.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» identityProviderConfig|body|object|true|An object representing an identity provider configuration.|
|» » type|body|object|false|none|
|» » name|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "identityProviderConfig": {
    "oidc": {
      "identityProviderConfigName": {},
      "identityProviderConfigArn": {},
      "clusterName": {},
      "issuerUrl": {},
      "clientId": {},
      "usernameClaim": {},
      "usernamePrefix": {},
      "groupsClaim": {},
      "groupsPrefix": {},
      "requiredClaims": {
        "property1": "string",
        "property2": "string"
      },
      "tags": {
        "property1": "string",
        "property2": "string"
      },
      "status": {}
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

<h3 id="describeidentityproviderconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeIdentityProviderConfigResponse](#schemadescribeidentityproviderconfigresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ClientException|[ClientException](#schemaclientexception)|
|483|483|ServerException|[ServerException](#schemaserverexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeUpdate

<a id="opIdDescribeUpdate"></a>

> Code samples

```bash
curl https://eks.us-east-1.amazonaws.com/clusters/string/updates/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /clusters/{name}/updates/{updateId}`

<p>Returns descriptive information about an update against your Amazon EKS cluster or associated managed node group or Amazon EKS add-on.</p> <p>When the status of the update is <code>Succeeded</code>, the update is complete. If an update fails, the status is <code>Failed</code>, and an error detail explains the reason for the failure.</p>

<h3 id="describeupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the Amazon EKS cluster associated with the update.|
|updateId|path|string|true|The ID of the update to describe.|
|nodegroupName|query|string|false|The name of the Amazon EKS node group associated with the update. This parameter is required if the update is a node group update.|
|addonName|query|string|false|The name of the add-on. The name must match one of the names returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAddons.html"> <code>ListAddons</code> </a>. This parameter is required if the update is an add-on update.|
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
  "update": {
    "id": {},
    "status": {},
    "type": {},
    "params": {},
    "createdAt": {},
    "errors": {}
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

<h3 id="describeupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeUpdateResponse](#schemadescribeupdateresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServerException|[ServerException](#schemaserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateIdentityProviderConfig

<a id="opIdDisassociateIdentityProviderConfig"></a>

> Code samples

```bash
curl https://eks.us-east-1.amazonaws.com/clusters/string/identity-provider-configs/disassociate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "identityProviderConfig": {
      "type": {},
      "name": {}
    },
    "clientRequestToken": "string"
  }'
```

`POST /clusters/{name}/identity-provider-configs/disassociate`

Disassociates an identity provider configuration from a cluster. If you disassociate an identity provider from your cluster, users included in the provider can no longer access the cluster. However, you can still access the cluster with Amazon Web Services IAM users.

> Body parameter

```json
{
  "identityProviderConfig": {
    "type": {},
    "name": {}
  },
  "clientRequestToken": "string"
}
```

<h3 id="disassociateidentityproviderconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the cluster to disassociate an identity provider from.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» identityProviderConfig|body|object|true|An object representing an identity provider configuration.|
|» » type|body|object|false|none|
|» » name|body|object|false|none|
|» clientRequestToken|body|string|false|A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.|

> Example responses

> 200 Response

```json
{
  "update": {
    "id": {},
    "status": {},
    "type": {},
    "params": {},
    "createdAt": {},
    "errors": {}
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

<h3 id="disassociateidentityproviderconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateIdentityProviderConfigResponse](#schemadisassociateidentityproviderconfigresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServerException|[ServerException](#schemaserverexception)|
|483|483|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListIdentityProviderConfigs

<a id="opIdListIdentityProviderConfigs"></a>

> Code samples

```bash
curl https://eks.us-east-1.amazonaws.com/clusters/string/identity-provider-configs \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /clusters/{name}/identity-provider-configs`

A list of identity provider configurations.

<h3 id="listidentityproviderconfigs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The cluster name that you want to list identity provider configurations for.|
|maxResults|query|integer|false|The maximum number of identity provider configurations returned by <code>ListIdentityProviderConfigs</code> in paginated output. When you use this parameter, <code>ListIdentityProviderConfigs</code> returns only <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListIdentityProviderConfigs</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListIdentityProviderConfigs</code> returns up to 100 results and a <code>nextToken</code> value, if applicable.|
|nextToken|query|string|false|The <code>nextToken</code> value returned from a previous paginated <code>IdentityProviderConfigsRequest</code> where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.|
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
  "identityProviderConfigs": {},
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

> 484 Response

```json
null
```

<h3 id="listidentityproviderconfigs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListIdentityProviderConfigsResponse](#schemalistidentityproviderconfigsresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServerException|[ServerException](#schemaserverexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://eks.us-east-1.amazonaws.com/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{resourceArn}`

List the tags for an Amazon EKS resource.

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. Currently, the supported resources are Amazon EKS clusters and managed node groups.|
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
    "aws:tag:domain": "beta"
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
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://eks.us-east-1.amazonaws.com/tags/string \
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

`POST /tags/{resourceArn}`

Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are deleted as well. Tags that you create for Amazon EKS resources do not propagate to any other resources associated with the cluster. For example, if you tag a cluster with this operation, that tag does not automatically propagate to the subnets and nodes associated with the cluster.

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
|resourceArn|path|string|true|The Amazon Resource Name (ARN) of the resource to which to add tags. Currently, the supported resources are Amazon EKS clusters and managed node groups.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|true|The tags to add to the resource. A tag is an array of key-value pairs.|
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
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListUpdates

<a id="opIdListUpdates"></a>

> Code samples

```bash
curl https://eks.us-east-1.amazonaws.com/clusters/string/updates \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /clusters/{name}/updates`

Lists the updates associated with an Amazon EKS cluster or managed node group in your Amazon Web Services account, in the specified Region.

<h3 id="listupdates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the Amazon EKS cluster to list updates for.|
|nodegroupName|query|string|false|The name of the Amazon EKS managed node group to list updates for.|
|addonName|query|string|false|The names of the installed add-ons that have available updates.|
|nextToken|query|string|false|The <code>nextToken</code> value returned from a previous paginated <code>ListUpdates</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.|
|maxResults|query|integer|false|The maximum number of update results returned by <code>ListUpdates</code> in paginated output. When you use this parameter, <code>ListUpdates</code> returns only <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListUpdates</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListUpdates</code> returns up to 100 results and a <code>nextToken</code> value if applicable.|
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
  "updateIds": {},
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

<h3 id="listupdates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListUpdatesResponse](#schemalistupdatesresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServerException|[ServerException](#schemaserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateClusterVersion

<a id="opIdUpdateClusterVersion"></a>

> Code samples

```bash
curl https://eks.us-east-1.amazonaws.com/clusters/string/updates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "version": "string",
    "clientRequestToken": "string"
  }'
```

`POST /clusters/{name}/updates`

<p>Updates an Amazon EKS cluster to the specified Kubernetes version. Your cluster continues to function during the update. The response output includes an update ID that you can use to track the status of your cluster update with the <a>DescribeUpdate</a> API operation.</p> <p>Cluster updates are asynchronous, and they should finish within a few minutes. During an update, the cluster status moves to <code>UPDATING</code> (this status transition is eventually consistent). When the update is complete (either <code>Failed</code> or <code>Successful</code>), the cluster status moves to <code>Active</code>.</p> <p>If your cluster has managed node groups attached to it, all of your node groups’ Kubernetes versions must match the cluster’s Kubernetes version in order to update the cluster to a new Kubernetes version.</p>

> Body parameter

```json
{
  "version": "string",
  "clientRequestToken": "string"
}
```

<h3 id="updateclusterversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the Amazon EKS cluster to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» version|body|string|true|The desired Kubernetes version following a successful update.|
|» clientRequestToken|body|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.|

> Example responses

> 200 Response

```json
{
  "update": {
    "id": {},
    "status": {},
    "type": {},
    "params": {},
    "createdAt": {},
    "errors": {}
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

<h3 id="updateclusterversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateClusterVersionResponse](#schemaupdateclusterversionresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServerException|[ServerException](#schemaserverexception)|
|483|483|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RegisterCluster

<a id="opIdRegisterCluster"></a>

> Code samples

```bash
curl https://eks.us-east-1.amazonaws.com/cluster-registrations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "connectorConfig": {
      "roleArn": {},
      "provider": {}
    },
    "clientRequestToken": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /cluster-registrations`

<p>Connects a Kubernetes cluster to the Amazon EKS control plane. </p> <p>Any Kubernetes cluster can be connected to the Amazon EKS control plane to view current information about the cluster and its nodes. </p> <p>Cluster connection requires two steps. First, send a <code> <a>RegisterClusterRequest</a> </code> to add it to the Amazon EKS control plane.</p> <p>Second, a <a href="https://amazon-eks.s3.us-west-2.amazonaws.com/eks-connector/manifests/eks-connector/latest/eks-connector.yaml">Manifest</a> containing the <code>activationID</code> and <code>activationCode</code> must be applied to the Kubernetes cluster through it's native provider to provide visibility.</p> <p>After the Manifest is updated and applied, then the connected cluster is visible to the Amazon EKS control plane. If the Manifest is not applied within three days, then the connected cluster will no longer be visible and must be deregistered. See <a>DeregisterCluster</a>.</p>

> Body parameter

```json
{
  "name": "string",
  "connectorConfig": {
    "roleArn": {},
    "provider": {}
  },
  "clientRequestToken": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="registercluster-parameters">Parameters</h3>

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
|» name|body|string|true|Define a unique name for this cluster for your Region.|
|» connectorConfig|body|object|true|The configuration sent to a cluster for configuration.|
|» » roleArn|body|object|false|none|
|» » provider|body|object|false|none|
|» clientRequestToken|body|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.|
|» tags|body|object|false|The metadata that you apply to the cluster to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Cluster tags do not propagate to any other resources associated with the cluster.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{
  "cluster": {
    "name": {},
    "arn": {},
    "createdAt": {},
    "version": {},
    "endpoint": {},
    "roleArn": {},
    "resourcesVpcConfig": {
      "subnetIds": {},
      "securityGroupIds": {},
      "clusterSecurityGroupId": {},
      "vpcId": {},
      "endpointPublicAccess": {},
      "endpointPrivateAccess": {},
      "publicAccessCidrs": {}
    },
    "kubernetesNetworkConfig": {
      "serviceIpv4Cidr": {},
      "serviceIpv6Cidr": {},
      "ipFamily": {}
    },
    "logging": {
      "clusterLogging": {}
    },
    "identity": {
      "oidc": {
        "issuer": {}
      }
    },
    "status": {},
    "certificateAuthority": {
      "data": {}
    },
    "clientRequestToken": {},
    "platformVersion": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "encryptionConfig": {},
    "connectorConfig": {
      "activationId": {},
      "activationCode": {},
      "activationExpiry": {},
      "provider": {},
      "roleArn": {}
    },
    "id": {},
    "health": {
      "issues": {}
    },
    "outpostConfig": {
      "outpostArns": {},
      "controlPlaneInstanceType": {},
      "controlPlanePlacement": {
        "groupName": {}
      }
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

> 487 Response

```json
null
```

<h3 id="registercluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegisterClusterResponse](#schemaregisterclusterresponse)|
|480|480|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ClientException|[ClientException](#schemaclientexception)|
|483|483|ServerException|[ServerException](#schemaserverexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|487|487|ResourcePropagationDelayException|[ResourcePropagationDelayException](#schemaresourcepropagationdelayexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://eks.us-east-1.amazonaws.com/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{resourceArn}#tagKeys`

Deletes specified tags from a resource.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon Resource Name (ARN) of the resource from which to delete tags. Currently, the supported resources are Amazon EKS clusters and managed node groups.|
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
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAddon

<a id="opIdUpdateAddon"></a>

> Code samples

```bash
curl https://eks.us-east-1.amazonaws.com/clusters/string/addons/string/update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "addonVersion": "string",
    "serviceAccountRoleArn": "string",
    "resolveConflicts": "OVERWRITE",
    "clientRequestToken": "string",
    "configurationValues": "string"
  }'
```

`POST /clusters/{name}/addons/{addonName}/update`

Updates an Amazon EKS add-on.

> Body parameter

```json
{
  "addonVersion": "string",
  "serviceAccountRoleArn": "string",
  "resolveConflicts": "OVERWRITE",
  "clientRequestToken": "string",
  "configurationValues": "string"
}
```

<h3 id="updateaddon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the cluster.|
|addonName|path|string|true|The name of the add-on. The name must match one of the names returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAddons.html"> <code>ListAddons</code> </a>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» addonVersion|body|string|false|The version of the add-on. The version must match one of the versions returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonVersions.html"> <code>DescribeAddonVersions</code> </a>.|
|» serviceAccountRoleArn|body|string|false|<p>The Amazon Resource Name (ARN) of an existing IAM role to bind to the add-on's service account. The role must be assigned the IAM permissions required by the add-on. If you don't specify an existing IAM role, then the add-on uses the permissions assigned to the node IAM role. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html">Amazon EKS node IAM role</a> in the <i>Amazon EKS User Guide</i>.</p> <note> <p>To specify an existing IAM role, you must have an IAM OpenID Connect (OIDC) provider created for your cluster. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html">Enabling IAM roles for service accounts on your cluster</a> in the <i>Amazon EKS User Guide</i>.</p> </note>|
|» resolveConflicts|body|string|false|<p>How to resolve field value conflicts for an Amazon EKS add-on if you've changed a value from the Amazon EKS default value. Conflicts are handled based on the option you choose:</p> <ul> <li> <p> <b>None</b> – Amazon EKS doesn't change the value. The update might fail.</p> </li> <li> <p> <b>Overwrite</b> – Amazon EKS overwrites the changed value back to the Amazon EKS default value.</p> </li> <li> <p> <b>Preserve</b> – Amazon EKS preserves the value. If you choose this option, we recommend that you test any field and value changes on a non-production cluster before updating the add-on on your production cluster.</p> </li> </ul>|
|» clientRequestToken|body|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.|
|» configurationValues|body|string|false|The set of configuration values for the add-on that's created. The values that you provide are validated against the schema in <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonConfiguration.html">DescribeAddonConfiguration</a>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» resolveConflicts|OVERWRITE|
|» resolveConflicts|NONE|
|» resolveConflicts|PRESERVE|

> Example responses

> 200 Response

```json
{
  "update": {
    "id": {},
    "status": {},
    "type": {},
    "params": {},
    "createdAt": {},
    "errors": {}
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

<h3 id="updateaddon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateAddonResponse](#schemaupdateaddonresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|484|484|ClientException|[ClientException](#schemaclientexception)|
|485|485|ServerException|[ServerException](#schemaserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateClusterConfig

<a id="opIdUpdateClusterConfig"></a>

> Code samples

```bash
curl https://eks.us-east-1.amazonaws.com/clusters/string/update-config \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "resourcesVpcConfig": {
      "subnetIds": {},
      "securityGroupIds": {},
      "endpointPublicAccess": {},
      "endpointPrivateAccess": {},
      "publicAccessCidrs": {}
    },
    "logging": {
      "clusterLogging": {}
    },
    "clientRequestToken": "string"
  }'
```

`POST /clusters/{name}/update-config`

<p>Updates an Amazon EKS cluster configuration. Your cluster continues to function during the update. The response output includes an update ID that you can use to track the status of your cluster update with the <a>DescribeUpdate</a> API operation.</p> <p>You can use this API operation to enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html">Amazon EKS Cluster Control Plane Logs</a> in the <i> <i>Amazon EKS User Guide</i> </i>.</p> <note> <p>CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see <a href="http://aws.amazon.com/cloudwatch/pricing/">CloudWatch Pricing</a>.</p> </note> <p>You can also use this API operation to enable or disable public and private access to your cluster's Kubernetes API server endpoint. By default, public access is enabled, and private access is disabled. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html">Amazon EKS cluster endpoint access control</a> in the <i> <i>Amazon EKS User Guide</i> </i>. </p> <important> <p>You can't update the subnets or security group IDs for an existing cluster.</p> </important> <p>Cluster updates are asynchronous, and they should finish within a few minutes. During an update, the cluster status moves to <code>UPDATING</code> (this status transition is eventually consistent). When the update is complete (either <code>Failed</code> or <code>Successful</code>), the cluster status moves to <code>Active</code>.</p>

> Body parameter

```json
{
  "resourcesVpcConfig": {
    "subnetIds": {},
    "securityGroupIds": {},
    "endpointPublicAccess": {},
    "endpointPrivateAccess": {},
    "publicAccessCidrs": {}
  },
  "logging": {
    "clusterLogging": {}
  },
  "clientRequestToken": "string"
}
```

<h3 id="updateclusterconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the Amazon EKS cluster to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» resourcesVpcConfig|body|object|false|An object representing the VPC configuration to use for an Amazon EKS cluster.|
|» » subnetIds|body|object|false|none|
|» » securityGroupIds|body|object|false|none|
|» » endpointPublicAccess|body|object|false|none|
|» » endpointPrivateAccess|body|object|false|none|
|» » publicAccessCidrs|body|object|false|none|
|» logging|body|object|false|An object representing the logging configuration for resources in your cluster.|
|» » clusterLogging|body|object|false|none|
|» clientRequestToken|body|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.|

> Example responses

> 200 Response

```json
{
  "update": {
    "id": {},
    "status": {},
    "type": {},
    "params": {},
    "createdAt": {},
    "errors": {}
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

<h3 id="updateclusterconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateClusterConfigResponse](#schemaupdateclusterconfigresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServerException|[ServerException](#schemaserverexception)|
|483|483|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateNodegroupConfig

<a id="opIdUpdateNodegroupConfig"></a>

> Code samples

```bash
curl https://eks.us-east-1.amazonaws.com/clusters/string/node-groups/string/update-config \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "labels": {
      "addOrUpdateLabels": {
        "property1": "string",
        "property2": "string"
      },
      "removeLabels": {}
    },
    "taints": {
      "addOrUpdateTaints": {},
      "removeTaints": {}
    },
    "scalingConfig": {
      "minSize": {},
      "maxSize": {},
      "desiredSize": {}
    },
    "updateConfig": {
      "maxUnavailable": {},
      "maxUnavailablePercentage": {}
    },
    "clientRequestToken": "string"
  }'
```

`POST /clusters/{name}/node-groups/{nodegroupName}/update-config`

Updates an Amazon EKS managed node group configuration. Your node group continues to function during the update. The response output includes an update ID that you can use to track the status of your node group update with the <a>DescribeUpdate</a> API operation. Currently you can update the Kubernetes labels for a node group or the scaling configuration.

> Body parameter

```json
{
  "labels": {
    "addOrUpdateLabels": {
      "property1": "string",
      "property2": "string"
    },
    "removeLabels": {}
  },
  "taints": {
    "addOrUpdateTaints": {},
    "removeTaints": {}
  },
  "scalingConfig": {
    "minSize": {},
    "maxSize": {},
    "desiredSize": {}
  },
  "updateConfig": {
    "maxUnavailable": {},
    "maxUnavailablePercentage": {}
  },
  "clientRequestToken": "string"
}
```

<h3 id="updatenodegroupconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the Amazon EKS cluster that the managed node group resides in.|
|nodegroupName|path|string|true|The name of the managed node group to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» labels|body|object|false|An object representing a Kubernetes label change for a managed node group.|
|» » addOrUpdateLabels|body|object|false|none|
|» » » **additionalProperties**|body|[labelValue](#schemalabelvalue)|false|none|
|» » removeLabels|body|object|false|none|
|» taints|body|object|false|An object representing the details of an update to a taints payload. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/node-taints-managed-node-groups.html">Node taints on managed node groups</a>.|
|» » addOrUpdateTaints|body|object|false|none|
|» » removeTaints|body|object|false|none|
|» scalingConfig|body|object|false|An object representing the scaling configuration details for the Auto Scaling group that is associated with your node group. When creating a node group, you must specify all or none of the properties. When updating a node group, you can specify any or none of the properties.|
|» » minSize|body|object|false|none|
|» » maxSize|body|object|false|none|
|» » desiredSize|body|object|false|none|
|» updateConfig|body|object|false|The node group update configuration.|
|» » maxUnavailable|body|object|false|none|
|» » maxUnavailablePercentage|body|object|false|none|
|» clientRequestToken|body|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.|

> Example responses

> 200 Response

```json
{
  "update": {
    "id": {},
    "status": {},
    "type": {},
    "params": {},
    "createdAt": {},
    "errors": {}
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

<h3 id="updatenodegroupconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateNodegroupConfigResponse](#schemaupdatenodegroupconfigresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServerException|[ServerException](#schemaserverexception)|
|483|483|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateNodegroupVersion

<a id="opIdUpdateNodegroupVersion"></a>

> Code samples

```bash
curl https://eks.us-east-1.amazonaws.com/clusters/string/node-groups/string/update-version \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "version": "string",
    "releaseVersion": "string",
    "launchTemplate": {
      "name": {},
      "version": {},
      "id": {}
    },
    "force": true,
    "clientRequestToken": "string"
  }'
```

`POST /clusters/{name}/node-groups/{nodegroupName}/update-version`

<p>Updates the Kubernetes version or AMI version of an Amazon EKS managed node group.</p> <p>You can update a node group using a launch template only if the node group was originally deployed with a launch template. If you need to update a custom AMI in a node group that was deployed with a launch template, then update your custom AMI, specify the new ID in a new version of the launch template, and then update the node group to the new version of the launch template.</p> <p>If you update without a launch template, then you can update to the latest available AMI version of a node group's current Kubernetes version by not specifying a Kubernetes version in the request. You can update to the latest AMI version of your cluster's current Kubernetes version by specifying your cluster's Kubernetes version in the request. For information about Linux versions, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-linux-ami-versions.html">Amazon EKS optimized Amazon Linux AMI versions</a> in the <i>Amazon EKS User Guide</i>. For information about Windows versions, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-ami-versions-windows.html">Amazon EKS optimized Windows AMI versions</a> in the <i>Amazon EKS User Guide</i>. </p> <p>You cannot roll back a node group to an earlier Kubernetes version or AMI version.</p> <p>When a node in a managed node group is terminated due to a scaling action or update, the pods in that node are drained first. Amazon EKS attempts to drain the nodes gracefully and will fail if it is unable to do so. You can <code>force</code> the update if Amazon EKS is unable to drain the nodes as a result of a pod disruption budget issue.</p>

> Body parameter

```json
{
  "version": "string",
  "releaseVersion": "string",
  "launchTemplate": {
    "name": {},
    "version": {},
    "id": {}
  },
  "force": true,
  "clientRequestToken": "string"
}
```

<h3 id="updatenodegroupversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the Amazon EKS cluster that is associated with the managed node group to update.|
|nodegroupName|path|string|true|The name of the managed node group to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» version|body|string|false|The Kubernetes version to update to. If no version is specified, then the Kubernetes version of the node group does not change. You can specify the Kubernetes version of the cluster to update the node group to the latest AMI version of the cluster's Kubernetes version. If you specify <code>launchTemplate</code>, and your launch template uses a custom AMI, then don't specify <code>version</code>, or the node group update will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.|
|» releaseVersion|body|string|false|<p>The AMI version of the Amazon EKS optimized AMI to use for the update. By default, the latest available AMI version for the node group's Kubernetes version is used. For information about Linux versions, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-linux-ami-versions.html">Amazon EKS optimized Amazon Linux AMI versions</a> in the <i>Amazon EKS User Guide</i>. Amazon EKS managed node groups support the November 2022 and later releases of the Windows AMIs. For information about Windows versions, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-ami-versions-windows.html">Amazon EKS optimized Windows AMI versions</a> in the <i>Amazon EKS User Guide</i>.</p> <p>If you specify <code>launchTemplate</code>, and your launch template uses a custom AMI, then don't specify <code>releaseVersion</code>, or the node group update will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.</p>|
|» launchTemplate|body|object|false|<p>An object representing a node group launch template specification. The launch template can't include <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html"> <code>SubnetId</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IamInstanceProfile.html"> <code>IamInstanceProfile</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html"> <code>RequestSpotInstances</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_HibernationOptionsRequest.html"> <code>HibernationOptions</code> </a>, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TerminateInstances.html"> <code>TerminateInstances</code> </a>, or the node group deployment or update will fail. For more information about launch templates, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLaunchTemplate.html"> <code>CreateLaunchTemplate</code> </a> in the Amazon EC2 API Reference. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.</p> <p>You must specify either the launch template ID or the launch template name in the request, but not both.</p>|
|» » name|body|object|false|none|
|» » version|body|object|false|none|
|» » id|body|object|false|none|
|» force|body|boolean|false|Force the update if the existing node group's pods are unable to be drained due to a pod disruption budget issue. If an update fails because pods could not be drained, you can force the update after it fails to terminate the old node whether or not any pods are running on the node.|
|» clientRequestToken|body|string|false|Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.|

> Example responses

> 200 Response

```json
{
  "update": {
    "id": {},
    "status": {},
    "type": {},
    "params": {},
    "createdAt": {},
    "errors": {}
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

<h3 id="updatenodegroupversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateNodegroupVersionResponse](#schemaupdatenodegroupversionresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServerException|[ServerException](#schemaserverexception)|
|483|483|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AssociateEncryptionConfigResponse">AssociateEncryptionConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociateencryptionconfigresponse"></a>
<a id="schema_AssociateEncryptionConfigResponse"></a>
<a id="tocSassociateencryptionconfigresponse"></a>
<a id="tocsassociateencryptionconfigresponse"></a>

```json
{
  "update": {
    "id": {},
    "status": {},
    "type": {},
    "params": {},
    "createdAt": {},
    "errors": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|update|[Update](#schemaupdate)|false|none|An object representing an asynchronous update.|

<h2 id="tocS_EncryptionConfig">EncryptionConfig</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionconfig"></a>
<a id="schema_EncryptionConfig"></a>
<a id="tocSencryptionconfig"></a>
<a id="tocsencryptionconfig"></a>

```json
{
  "resources": {},
  "provider": {
    "keyArn": {}
  }
}
```

The encryption configuration for the cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resources|object|false|none|none|
|provider|object|false|none|none|

<h2 id="tocS_InvalidParameterException">InvalidParameterException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidparameterexception"></a>
<a id="schema_InvalidParameterException"></a>
<a id="tocSinvalidparameterexception"></a>
<a id="tocsinvalidparameterexception"></a>

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

<h2 id="tocS_ServerException">ServerException</h2>
<!-- backwards compatibility -->
<a id="schemaserverexception"></a>
<a id="schema_ServerException"></a>
<a id="tocSserverexception"></a>
<a id="tocsserverexception"></a>

```json
null
```

<h2 id="tocS_ResourceInUseException">ResourceInUseException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceinuseexception"></a>
<a id="schema_ResourceInUseException"></a>
<a id="tocSresourceinuseexception"></a>
<a id="tocsresourceinuseexception"></a>

```json
null
```

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_InvalidRequestException">InvalidRequestException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrequestexception"></a>
<a id="schema_InvalidRequestException"></a>
<a id="tocSinvalidrequestexception"></a>
<a id="tocsinvalidrequestexception"></a>

```json
null
```

<h2 id="tocS_AssociateIdentityProviderConfigResponse">AssociateIdentityProviderConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociateidentityproviderconfigresponse"></a>
<a id="schema_AssociateIdentityProviderConfigResponse"></a>
<a id="tocSassociateidentityproviderconfigresponse"></a>
<a id="tocsassociateidentityproviderconfigresponse"></a>

```json
{
  "update": {
    "id": {},
    "status": {},
    "type": {},
    "params": {},
    "createdAt": {},
    "errors": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|update|[Update](#schemaupdate)|false|none|An object representing an asynchronous update.|
|tags|object|false|none|none|

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_requiredClaimsMap">requiredClaimsMap</h2>
<!-- backwards compatibility -->
<a id="schemarequiredclaimsmap"></a>
<a id="schema_requiredClaimsMap"></a>
<a id="tocSrequiredclaimsmap"></a>
<a id="tocsrequiredclaimsmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[requiredClaimsValue](#schemarequiredclaimsvalue)|false|none|none|

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_CreateAddonResponse">CreateAddonResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateaddonresponse"></a>
<a id="schema_CreateAddonResponse"></a>
<a id="tocScreateaddonresponse"></a>
<a id="tocscreateaddonresponse"></a>

```json
{
  "addon": {
    "addonName": {},
    "clusterName": {},
    "status": {},
    "addonVersion": {},
    "health": {
      "issues": {}
    },
    "addonArn": {},
    "createdAt": {},
    "modifiedAt": {},
    "serviceAccountRoleArn": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "publisher": {},
    "owner": {},
    "marketplaceInformation": {
      "productId": {},
      "productUrl": {}
    },
    "configurationValues": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addon|[Addon](#schemaaddon)|false|none|An Amazon EKS add-on. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-add-ons.html">Amazon EKS add-ons</a> in the <i>Amazon EKS User Guide</i>.|

<h2 id="tocS_CreateClusterResponse">CreateClusterResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateclusterresponse"></a>
<a id="schema_CreateClusterResponse"></a>
<a id="tocScreateclusterresponse"></a>
<a id="tocscreateclusterresponse"></a>

```json
{}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|object|false|none|none|

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

<h2 id="tocS_BoxedBoolean">BoxedBoolean</h2>
<!-- backwards compatibility -->
<a id="schemaboxedboolean"></a>
<a id="schema_BoxedBoolean"></a>
<a id="tocSboxedboolean"></a>
<a id="tocsboxedboolean"></a>

```json
true
```

<h2 id="tocS_IpFamily">IpFamily</h2>
<!-- backwards compatibility -->
<a id="schemaipfamily"></a>
<a id="schema_IpFamily"></a>
<a id="tocSipfamily"></a>
<a id="tocsipfamily"></a>

```json
"ipv4"
```

<h2 id="tocS_LogSetups">LogSetups</h2>
<!-- backwards compatibility -->
<a id="schemalogsetups"></a>
<a id="schema_LogSetups"></a>
<a id="tocSlogsetups"></a>
<a id="tocslogsetups"></a>

```json
[
  {
    "types": {},
    "enabled": {}
  }
]
```

<h2 id="tocS_ControlPlanePlacementRequest">ControlPlanePlacementRequest</h2>
<!-- backwards compatibility -->
<a id="schemacontrolplaneplacementrequest"></a>
<a id="schema_ControlPlanePlacementRequest"></a>
<a id="tocScontrolplaneplacementrequest"></a>
<a id="tocscontrolplaneplacementrequest"></a>

```json
{
  "groupName": {}
}
```

The placement configuration for all the control plane instances of your local Amazon EKS cluster on an Amazon Web Services Outpost. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-capacity-considerations.html">Capacity considerations</a> in the <i>Amazon EKS User Guide</i>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groupName|object|false|none|none|

<h2 id="tocS_ResourceLimitExceededException">ResourceLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcelimitexceededexception"></a>
<a id="schema_ResourceLimitExceededException"></a>
<a id="tocSresourcelimitexceededexception"></a>
<a id="tocsresourcelimitexceededexception"></a>

```json
null
```

<h2 id="tocS_ServiceUnavailableException">ServiceUnavailableException</h2>
<!-- backwards compatibility -->
<a id="schemaserviceunavailableexception"></a>
<a id="schema_ServiceUnavailableException"></a>
<a id="tocSserviceunavailableexception"></a>
<a id="tocsserviceunavailableexception"></a>

```json
null
```

<h2 id="tocS_UnsupportedAvailabilityZoneException">UnsupportedAvailabilityZoneException</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedavailabilityzoneexception"></a>
<a id="schema_UnsupportedAvailabilityZoneException"></a>
<a id="tocSunsupportedavailabilityzoneexception"></a>
<a id="tocsunsupportedavailabilityzoneexception"></a>

```json
null
```

<h2 id="tocS_CreateFargateProfileResponse">CreateFargateProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatefargateprofileresponse"></a>
<a id="schema_CreateFargateProfileResponse"></a>
<a id="tocScreatefargateprofileresponse"></a>
<a id="tocscreatefargateprofileresponse"></a>

```json
{
  "fargateProfile": {
    "fargateProfileName": {},
    "fargateProfileArn": {},
    "clusterName": {},
    "createdAt": {},
    "podExecutionRoleArn": {},
    "subnets": {},
    "selectors": {},
    "status": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fargateProfile|object|false|none|none|

<h2 id="tocS_FargateProfileSelector">FargateProfileSelector</h2>
<!-- backwards compatibility -->
<a id="schemafargateprofileselector"></a>
<a id="schema_FargateProfileSelector"></a>
<a id="tocSfargateprofileselector"></a>
<a id="tocsfargateprofileselector"></a>

```json
{
  "namespace": {},
  "labels": {
    "property1": "string",
    "property2": "string"
  }
}
```

An object representing an Fargate profile selector.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|namespace|object|false|none|none|
|labels|object|false|none|none|

<h2 id="tocS_CreateNodegroupResponse">CreateNodegroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatenodegroupresponse"></a>
<a id="schema_CreateNodegroupResponse"></a>
<a id="tocScreatenodegroupresponse"></a>
<a id="tocscreatenodegroupresponse"></a>

```json
{
  "nodegroup": {
    "nodegroupName": {},
    "nodegroupArn": {},
    "clusterName": {},
    "version": {},
    "releaseVersion": {},
    "createdAt": {},
    "modifiedAt": {},
    "status": {},
    "capacityType": {},
    "scalingConfig": {
      "minSize": {},
      "maxSize": {},
      "desiredSize": {}
    },
    "instanceTypes": {},
    "subnets": {},
    "remoteAccess": {
      "ec2SshKey": {},
      "sourceSecurityGroups": {}
    },
    "amiType": {},
    "nodeRole": {},
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "taints": {},
    "resources": {
      "autoScalingGroups": {},
      "remoteAccessSecurityGroup": {}
    },
    "diskSize": {},
    "health": {
      "issues": {}
    },
    "updateConfig": {
      "maxUnavailable": {},
      "maxUnavailablePercentage": {}
    },
    "launchTemplate": {
      "name": {},
      "version": {},
      "id": {}
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nodegroup|object|false|none|none|

<h2 id="tocS_ZeroCapacity">ZeroCapacity</h2>
<!-- backwards compatibility -->
<a id="schemazerocapacity"></a>
<a id="schema_ZeroCapacity"></a>
<a id="tocSzerocapacity"></a>
<a id="tocszerocapacity"></a>

```json
0
```

<h2 id="tocS_Capacity">Capacity</h2>
<!-- backwards compatibility -->
<a id="schemacapacity"></a>
<a id="schema_Capacity"></a>
<a id="tocScapacity"></a>
<a id="tocscapacity"></a>

```json
1
```

<h2 id="tocS_labelValue">labelValue</h2>
<!-- backwards compatibility -->
<a id="schemalabelvalue"></a>
<a id="schema_labelValue"></a>
<a id="tocSlabelvalue"></a>
<a id="tocslabelvalue"></a>

```json
"string"
```

<h2 id="tocS_Taint">Taint</h2>
<!-- backwards compatibility -->
<a id="schemataint"></a>
<a id="schema_Taint"></a>
<a id="tocStaint"></a>
<a id="tocstaint"></a>

```json
{
  "key": {},
  "value": {},
  "effect": {}
}
```

A property that allows a node to repel a set of pods. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/node-taints-managed-node-groups.html">Node taints on managed node groups</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|object|false|none|none|
|value|object|false|none|none|
|effect|object|false|none|none|

<h2 id="tocS_NonZeroInteger">NonZeroInteger</h2>
<!-- backwards compatibility -->
<a id="schemanonzerointeger"></a>
<a id="schema_NonZeroInteger"></a>
<a id="tocSnonzerointeger"></a>
<a id="tocsnonzerointeger"></a>

```json
1
```

<h2 id="tocS_PercentCapacity">PercentCapacity</h2>
<!-- backwards compatibility -->
<a id="schemapercentcapacity"></a>
<a id="schema_PercentCapacity"></a>
<a id="tocSpercentcapacity"></a>
<a id="tocspercentcapacity"></a>

```json
1
```

<h2 id="tocS_DeleteAddonResponse">DeleteAddonResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteaddonresponse"></a>
<a id="schema_DeleteAddonResponse"></a>
<a id="tocSdeleteaddonresponse"></a>
<a id="tocsdeleteaddonresponse"></a>

```json
{
  "addon": {
    "addonName": {},
    "clusterName": {},
    "status": {},
    "addonVersion": {},
    "health": {
      "issues": {}
    },
    "addonArn": {},
    "createdAt": {},
    "modifiedAt": {},
    "serviceAccountRoleArn": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "publisher": {},
    "owner": {},
    "marketplaceInformation": {
      "productId": {},
      "productUrl": {}
    },
    "configurationValues": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addon|[Addon](#schemaaddon)|false|none|An Amazon EKS add-on. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-add-ons.html">Amazon EKS add-ons</a> in the <i>Amazon EKS User Guide</i>.|

<h2 id="tocS_DeleteClusterResponse">DeleteClusterResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteclusterresponse"></a>
<a id="schema_DeleteClusterResponse"></a>
<a id="tocSdeleteclusterresponse"></a>
<a id="tocsdeleteclusterresponse"></a>

```json
{}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|object|false|none|none|

<h2 id="tocS_DeleteFargateProfileResponse">DeleteFargateProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletefargateprofileresponse"></a>
<a id="schema_DeleteFargateProfileResponse"></a>
<a id="tocSdeletefargateprofileresponse"></a>
<a id="tocsdeletefargateprofileresponse"></a>

```json
{
  "fargateProfile": {
    "fargateProfileName": {},
    "fargateProfileArn": {},
    "clusterName": {},
    "createdAt": {},
    "podExecutionRoleArn": {},
    "subnets": {},
    "selectors": {},
    "status": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fargateProfile|object|false|none|none|

<h2 id="tocS_DeleteNodegroupResponse">DeleteNodegroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletenodegroupresponse"></a>
<a id="schema_DeleteNodegroupResponse"></a>
<a id="tocSdeletenodegroupresponse"></a>
<a id="tocsdeletenodegroupresponse"></a>

```json
{
  "nodegroup": {
    "nodegroupName": {},
    "nodegroupArn": {},
    "clusterName": {},
    "version": {},
    "releaseVersion": {},
    "createdAt": {},
    "modifiedAt": {},
    "status": {},
    "capacityType": {},
    "scalingConfig": {
      "minSize": {},
      "maxSize": {},
      "desiredSize": {}
    },
    "instanceTypes": {},
    "subnets": {},
    "remoteAccess": {
      "ec2SshKey": {},
      "sourceSecurityGroups": {}
    },
    "amiType": {},
    "nodeRole": {},
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "taints": {},
    "resources": {
      "autoScalingGroups": {},
      "remoteAccessSecurityGroup": {}
    },
    "diskSize": {},
    "health": {
      "issues": {}
    },
    "updateConfig": {
      "maxUnavailable": {},
      "maxUnavailablePercentage": {}
    },
    "launchTemplate": {
      "name": {},
      "version": {},
      "id": {}
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nodegroup|object|false|none|none|

<h2 id="tocS_DeregisterClusterResponse">DeregisterClusterResponse</h2>
<!-- backwards compatibility -->
<a id="schemaderegisterclusterresponse"></a>
<a id="schema_DeregisterClusterResponse"></a>
<a id="tocSderegisterclusterresponse"></a>
<a id="tocsderegisterclusterresponse"></a>

```json
{
  "cluster": {
    "name": {},
    "arn": {},
    "createdAt": {},
    "version": {},
    "endpoint": {},
    "roleArn": {},
    "resourcesVpcConfig": {
      "subnetIds": {},
      "securityGroupIds": {},
      "clusterSecurityGroupId": {},
      "vpcId": {},
      "endpointPublicAccess": {},
      "endpointPrivateAccess": {},
      "publicAccessCidrs": {}
    },
    "kubernetesNetworkConfig": {
      "serviceIpv4Cidr": {},
      "serviceIpv6Cidr": {},
      "ipFamily": {}
    },
    "logging": {
      "clusterLogging": {}
    },
    "identity": {
      "oidc": {
        "issuer": {}
      }
    },
    "status": {},
    "certificateAuthority": {
      "data": {}
    },
    "clientRequestToken": {},
    "platformVersion": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "encryptionConfig": {},
    "connectorConfig": {
      "activationId": {},
      "activationCode": {},
      "activationExpiry": {},
      "provider": {},
      "roleArn": {}
    },
    "id": {},
    "health": {
      "issues": {}
    },
    "outpostConfig": {
      "outpostArns": {},
      "controlPlaneInstanceType": {},
      "controlPlanePlacement": {
        "groupName": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|[Cluster](#schemacluster)|false|none|An object representing an Amazon EKS cluster.|

<h2 id="tocS_AccessDeniedException">AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedexception"></a>
<a id="schema_AccessDeniedException"></a>
<a id="tocSaccessdeniedexception"></a>
<a id="tocsaccessdeniedexception"></a>

```json
null
```

<h2 id="tocS_DescribeAddonResponse">DescribeAddonResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaddonresponse"></a>
<a id="schema_DescribeAddonResponse"></a>
<a id="tocSdescribeaddonresponse"></a>
<a id="tocsdescribeaddonresponse"></a>

```json
{
  "addon": {
    "addonName": {},
    "clusterName": {},
    "status": {},
    "addonVersion": {},
    "health": {
      "issues": {}
    },
    "addonArn": {},
    "createdAt": {},
    "modifiedAt": {},
    "serviceAccountRoleArn": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "publisher": {},
    "owner": {},
    "marketplaceInformation": {
      "productId": {},
      "productUrl": {}
    },
    "configurationValues": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addon|[Addon](#schemaaddon)|false|none|An Amazon EKS add-on. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-add-ons.html">Amazon EKS add-ons</a> in the <i>Amazon EKS User Guide</i>.|

<h2 id="tocS_DescribeAddonConfigurationResponse">DescribeAddonConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaddonconfigurationresponse"></a>
<a id="schema_DescribeAddonConfigurationResponse"></a>
<a id="tocSdescribeaddonconfigurationresponse"></a>
<a id="tocsdescribeaddonconfigurationresponse"></a>

```json
{
  "addonName": {},
  "addonVersion": {},
  "configurationSchema": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addonName|object|false|none|none|
|addonVersion|object|false|none|none|
|configurationSchema|object|false|none|none|

<h2 id="tocS_DescribeAddonVersionsResponse">DescribeAddonVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaddonversionsresponse"></a>
<a id="schema_DescribeAddonVersionsResponse"></a>
<a id="tocSdescribeaddonversionsresponse"></a>
<a id="tocsdescribeaddonversionsresponse"></a>

```json
{
  "addons": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addons|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribeClusterResponse">DescribeClusterResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeclusterresponse"></a>
<a id="schema_DescribeClusterResponse"></a>
<a id="tocSdescribeclusterresponse"></a>
<a id="tocsdescribeclusterresponse"></a>

```json
{
  "cluster": {
    "version": "1.10",
    "name": "devel",
    "arn": "arn:aws:eks:us-west-2:012345678910:cluster/devel",
    "certificateAuthority": {
      "data": "LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUN5RENDQWJDZ0F3SUJBZ0lCQURBTkJna3Foa2lHOXcwQkFRc0ZBREFWTVJNd0VRWURWUVFERXdwcmRXSmwKY201bGRHVnpNQjRYRFRFNE1EVXpNVEl6TVRFek1Wb1hEVEk0TURVeU9ESXpNVEV6TVZvd0ZURVRNQkVHQTFVRQpBeE1LYTNWaVpYSnVaWFJsY3pDQ0FTSXdEUVlKS29aSWh2Y05BUUVCQlFBRGdnRVBBRENDQVFvQ2dnRUJBTTZWCjVUaG4rdFcySm9Xa2hQMzRlVUZMNitaRXJOZGIvWVdrTmtDdWNGS2RaaXl2TjlMVmdvUmV2MjlFVFZlN1ZGbSsKUTJ3ZURyRXJiQyt0dVlibkFuN1ZLYmE3ay9hb1BHekZMdmVnb0t6b0M1N2NUdGVwZzRIazRlK2tIWHNaME10MApyb3NzcjhFM1ROeExETnNJTThGL1cwdjhsTGNCbWRPcjQyV2VuTjFHZXJnaDNSZ2wzR3JIazBnNTU0SjFWenJZCm9hTi8zODFUczlOTFF2QTBXb0xIcjBFRlZpTFdSZEoyZ3lXaC9ybDVyOFNDOHZaQXg1YW1BU0hVd01aTFpWRC8KTDBpOW4wRVM0MkpVdzQyQmxHOEdpd3NhTkJWV3lUTHZKclNhRXlDSHFtVVZaUTFDZkFXUjl0L3JleVVOVXM3TApWV1FqM3BFbk9RMitMSWJrc0RzQ0F3RUFBYU1qTUNFd0RnWURWUjBQQVFIL0JBUURBZ0trTUE4R0ExVWRFd0VCCi93UUZNQU1CQWY4d0RRWUpLb1pJaHZjTkFRRUxCUUFEZ2dFQkFNZ3RsQ1dIQ2U2YzVHMXl2YlFTS0Q4K2hUalkKSm1NSG56L2EvRGt0WG9YUjFVQzIrZUgzT1BZWmVjRVZZZHVaSlZCckNNQ2VWR0ZkeWdBYlNLc1FxWDg0S2RXbAp1MU5QaERDSmEyRHliN2pVMUV6VThTQjFGZUZ5ZFE3a0hNS1E1blpBRVFQOTY4S01hSGUrSm0yQ2x1UFJWbEJVCjF4WlhTS1gzTVZ0K1Q0SU1EV2d6c3JRSjVuQkRjdEtLcUZtM3pKdVVubHo5ZEpVckdscEltMjVJWXJDckxYUFgKWkUwRUtRNWEzMHhkVWNrTHRGQkQrOEtBdFdqSS9yZUZPNzM1YnBMdVoyOTBaNm42QlF3elRrS0p4cnhVc3QvOAppNGsxcnlsaUdWMm5SSjBUYjNORkczNHgrYWdzYTRoSTFPbU90TFM0TmgvRXJxT3lIUXNDc2hEQUtKUT0KLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQo="
    },
    "createdAt": 1527807879.988,
    "endpoint": "https://A0DCCD80A04F01705DD065655C30CC3D.yl4.us-west-2.eks.amazonaws.com",
    "resourcesVpcConfig": {
      "securityGroupIds": [
        "sg-6979fe18"
      ],
      "subnetIds": [
        "subnet-6782e71e",
        "subnet-e7e761ac"
      ],
      "vpcId": "vpc-950809ec"
    },
    "roleArn": "arn:aws:iam::012345678910:role/eks-service-role-AWSServiceRoleForAmazonEKS-J7ONKE3BQ4PI",
    "status": "ACTIVE"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|object|false|none|none|

<h2 id="tocS_DescribeFargateProfileResponse">DescribeFargateProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribefargateprofileresponse"></a>
<a id="schema_DescribeFargateProfileResponse"></a>
<a id="tocSdescribefargateprofileresponse"></a>
<a id="tocsdescribefargateprofileresponse"></a>

```json
{
  "fargateProfile": {
    "fargateProfileName": {},
    "fargateProfileArn": {},
    "clusterName": {},
    "createdAt": {},
    "podExecutionRoleArn": {},
    "subnets": {},
    "selectors": {},
    "status": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fargateProfile|object|false|none|none|

<h2 id="tocS_DescribeIdentityProviderConfigResponse">DescribeIdentityProviderConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeidentityproviderconfigresponse"></a>
<a id="schema_DescribeIdentityProviderConfigResponse"></a>
<a id="tocSdescribeidentityproviderconfigresponse"></a>
<a id="tocsdescribeidentityproviderconfigresponse"></a>

```json
{
  "identityProviderConfig": {
    "oidc": {
      "identityProviderConfigName": {},
      "identityProviderConfigArn": {},
      "clusterName": {},
      "issuerUrl": {},
      "clientId": {},
      "usernameClaim": {},
      "usernamePrefix": {},
      "groupsClaim": {},
      "groupsPrefix": {},
      "requiredClaims": {
        "property1": "string",
        "property2": "string"
      },
      "tags": {
        "property1": "string",
        "property2": "string"
      },
      "status": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identityProviderConfig|object|false|none|none|

<h2 id="tocS_DescribeNodegroupResponse">DescribeNodegroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribenodegroupresponse"></a>
<a id="schema_DescribeNodegroupResponse"></a>
<a id="tocSdescribenodegroupresponse"></a>
<a id="tocsdescribenodegroupresponse"></a>

```json
{
  "nodegroup": {
    "nodegroupName": {},
    "nodegroupArn": {},
    "clusterName": {},
    "version": {},
    "releaseVersion": {},
    "createdAt": {},
    "modifiedAt": {},
    "status": {},
    "capacityType": {},
    "scalingConfig": {
      "minSize": {},
      "maxSize": {},
      "desiredSize": {}
    },
    "instanceTypes": {},
    "subnets": {},
    "remoteAccess": {
      "ec2SshKey": {},
      "sourceSecurityGroups": {}
    },
    "amiType": {},
    "nodeRole": {},
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "taints": {},
    "resources": {
      "autoScalingGroups": {},
      "remoteAccessSecurityGroup": {}
    },
    "diskSize": {},
    "health": {
      "issues": {}
    },
    "updateConfig": {
      "maxUnavailable": {},
      "maxUnavailablePercentage": {}
    },
    "launchTemplate": {
      "name": {},
      "version": {},
      "id": {}
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nodegroup|object|false|none|none|

<h2 id="tocS_DescribeUpdateResponse">DescribeUpdateResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeupdateresponse"></a>
<a id="schema_DescribeUpdateResponse"></a>
<a id="tocSdescribeupdateresponse"></a>
<a id="tocsdescribeupdateresponse"></a>

```json
{
  "update": {
    "id": {},
    "status": {},
    "type": {},
    "params": {},
    "createdAt": {},
    "errors": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|update|object|false|none|none|

<h2 id="tocS_DisassociateIdentityProviderConfigResponse">DisassociateIdentityProviderConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateidentityproviderconfigresponse"></a>
<a id="schema_DisassociateIdentityProviderConfigResponse"></a>
<a id="tocSdisassociateidentityproviderconfigresponse"></a>
<a id="tocsdisassociateidentityproviderconfigresponse"></a>

```json
{
  "update": {
    "id": {},
    "status": {},
    "type": {},
    "params": {},
    "createdAt": {},
    "errors": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|update|[Update](#schemaupdate)|false|none|An object representing an asynchronous update.|

<h2 id="tocS_ListAddonsResponse">ListAddonsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistaddonsresponse"></a>
<a id="schema_ListAddonsResponse"></a>
<a id="tocSlistaddonsresponse"></a>
<a id="tocslistaddonsresponse"></a>

```json
{
  "addons": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addons|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListClustersResponse">ListClustersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistclustersresponse"></a>
<a id="schema_ListClustersResponse"></a>
<a id="tocSlistclustersresponse"></a>
<a id="tocslistclustersresponse"></a>

```json
{
  "clusters": [
    "devel",
    "prod"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusters|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListFargateProfilesResponse">ListFargateProfilesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfargateprofilesresponse"></a>
<a id="schema_ListFargateProfilesResponse"></a>
<a id="tocSlistfargateprofilesresponse"></a>
<a id="tocslistfargateprofilesresponse"></a>

```json
{
  "fargateProfileNames": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fargateProfileNames|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListIdentityProviderConfigsResponse">ListIdentityProviderConfigsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistidentityproviderconfigsresponse"></a>
<a id="schema_ListIdentityProviderConfigsResponse"></a>
<a id="tocSlistidentityproviderconfigsresponse"></a>
<a id="tocslistidentityproviderconfigsresponse"></a>

```json
{
  "identityProviderConfigs": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identityProviderConfigs|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListNodegroupsResponse">ListNodegroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistnodegroupsresponse"></a>
<a id="schema_ListNodegroupsResponse"></a>
<a id="tocSlistnodegroupsresponse"></a>
<a id="tocslistnodegroupsresponse"></a>

```json
{
  "nodegroups": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nodegroups|object|false|none|none|
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
    "aws:tag:domain": "beta"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|false|none|none|

<h2 id="tocS_BadRequestException">BadRequestException</h2>
<!-- backwards compatibility -->
<a id="schemabadrequestexception"></a>
<a id="schema_BadRequestException"></a>
<a id="tocSbadrequestexception"></a>
<a id="tocsbadrequestexception"></a>

```json
null
```

<h2 id="tocS_NotFoundException">NotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemanotfoundexception"></a>
<a id="schema_NotFoundException"></a>
<a id="tocSnotfoundexception"></a>
<a id="tocsnotfoundexception"></a>

```json
null
```

<h2 id="tocS_ListUpdatesResponse">ListUpdatesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistupdatesresponse"></a>
<a id="schema_ListUpdatesResponse"></a>
<a id="tocSlistupdatesresponse"></a>
<a id="tocslistupdatesresponse"></a>

```json
{
  "updateIds": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|updateIds|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_RegisterClusterResponse">RegisterClusterResponse</h2>
<!-- backwards compatibility -->
<a id="schemaregisterclusterresponse"></a>
<a id="schema_RegisterClusterResponse"></a>
<a id="tocSregisterclusterresponse"></a>
<a id="tocsregisterclusterresponse"></a>

```json
{
  "cluster": {
    "name": {},
    "arn": {},
    "createdAt": {},
    "version": {},
    "endpoint": {},
    "roleArn": {},
    "resourcesVpcConfig": {
      "subnetIds": {},
      "securityGroupIds": {},
      "clusterSecurityGroupId": {},
      "vpcId": {},
      "endpointPublicAccess": {},
      "endpointPrivateAccess": {},
      "publicAccessCidrs": {}
    },
    "kubernetesNetworkConfig": {
      "serviceIpv4Cidr": {},
      "serviceIpv6Cidr": {},
      "ipFamily": {}
    },
    "logging": {
      "clusterLogging": {}
    },
    "identity": {
      "oidc": {
        "issuer": {}
      }
    },
    "status": {},
    "certificateAuthority": {
      "data": {}
    },
    "clientRequestToken": {},
    "platformVersion": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "encryptionConfig": {},
    "connectorConfig": {
      "activationId": {},
      "activationCode": {},
      "activationExpiry": {},
      "provider": {},
      "roleArn": {}
    },
    "id": {},
    "health": {
      "issues": {}
    },
    "outpostConfig": {
      "outpostArns": {},
      "controlPlaneInstanceType": {},
      "controlPlanePlacement": {
        "groupName": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|[Cluster](#schemacluster)|false|none|An object representing an Amazon EKS cluster.|

<h2 id="tocS_ConnectorConfigProvider">ConnectorConfigProvider</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorconfigprovider"></a>
<a id="schema_ConnectorConfigProvider"></a>
<a id="tocSconnectorconfigprovider"></a>
<a id="tocsconnectorconfigprovider"></a>

```json
"EKS_ANYWHERE"
```

<h2 id="tocS_ResourcePropagationDelayException">ResourcePropagationDelayException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcepropagationdelayexception"></a>
<a id="schema_ResourcePropagationDelayException"></a>
<a id="tocSresourcepropagationdelayexception"></a>
<a id="tocsresourcepropagationdelayexception"></a>

```json
null
```

<h2 id="tocS_TagResourceResponse">TagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schematagresourceresponse"></a>
<a id="schema_TagResourceResponse"></a>
<a id="tocStagresourceresponse"></a>
<a id="tocstagresourceresponse"></a>

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

<h2 id="tocS_UpdateAddonResponse">UpdateAddonResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateaddonresponse"></a>
<a id="schema_UpdateAddonResponse"></a>
<a id="tocSupdateaddonresponse"></a>
<a id="tocsupdateaddonresponse"></a>

```json
{
  "update": {
    "id": {},
    "status": {},
    "type": {},
    "params": {},
    "createdAt": {},
    "errors": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|update|[Update](#schemaupdate)|false|none|An object representing an asynchronous update.|

<h2 id="tocS_UpdateClusterConfigResponse">UpdateClusterConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateclusterconfigresponse"></a>
<a id="schema_UpdateClusterConfigResponse"></a>
<a id="tocSupdateclusterconfigresponse"></a>
<a id="tocsupdateclusterconfigresponse"></a>

```json
{
  "update": {
    "id": {},
    "status": {},
    "type": {},
    "params": {},
    "createdAt": {},
    "errors": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|update|[Update](#schemaupdate)|false|none|An object representing an asynchronous update.|

<h2 id="tocS_UpdateClusterVersionResponse">UpdateClusterVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateclusterversionresponse"></a>
<a id="schema_UpdateClusterVersionResponse"></a>
<a id="tocSupdateclusterversionresponse"></a>
<a id="tocsupdateclusterversionresponse"></a>

```json
{
  "update": {
    "id": {},
    "status": {},
    "type": {},
    "params": {},
    "createdAt": {},
    "errors": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|update|object|false|none|none|

<h2 id="tocS_UpdateNodegroupConfigResponse">UpdateNodegroupConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatenodegroupconfigresponse"></a>
<a id="schema_UpdateNodegroupConfigResponse"></a>
<a id="tocSupdatenodegroupconfigresponse"></a>
<a id="tocsupdatenodegroupconfigresponse"></a>

```json
{
  "update": {
    "id": {},
    "status": {},
    "type": {},
    "params": {},
    "createdAt": {},
    "errors": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|update|[Update](#schemaupdate)|false|none|An object representing an asynchronous update.|

<h2 id="tocS_labelsMap">labelsMap</h2>
<!-- backwards compatibility -->
<a id="schemalabelsmap"></a>
<a id="schema_labelsMap"></a>
<a id="tocSlabelsmap"></a>
<a id="tocslabelsmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[labelValue](#schemalabelvalue)|false|none|none|

<h2 id="tocS_labelsKeyList">labelsKeyList</h2>
<!-- backwards compatibility -->
<a id="schemalabelskeylist"></a>
<a id="schema_labelsKeyList"></a>
<a id="tocSlabelskeylist"></a>
<a id="tocslabelskeylist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_taintsList">taintsList</h2>
<!-- backwards compatibility -->
<a id="schemataintslist"></a>
<a id="schema_taintsList"></a>
<a id="tocStaintslist"></a>
<a id="tocstaintslist"></a>

```json
[
  {
    "key": {},
    "value": {},
    "effect": {}
  }
]
```

<h2 id="tocS_UpdateNodegroupVersionResponse">UpdateNodegroupVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatenodegroupversionresponse"></a>
<a id="schema_UpdateNodegroupVersionResponse"></a>
<a id="tocSupdatenodegroupversionresponse"></a>
<a id="tocsupdatenodegroupversionresponse"></a>

```json
{
  "update": {
    "id": {},
    "status": {},
    "type": {},
    "params": {},
    "createdAt": {},
    "errors": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|update|[Update](#schemaupdate)|false|none|An object representing an asynchronous update.|

<h2 id="tocS_AMITypes">AMITypes</h2>
<!-- backwards compatibility -->
<a id="schemaamitypes"></a>
<a id="schema_AMITypes"></a>
<a id="tocSamitypes"></a>
<a id="tocsamitypes"></a>

```json
"AL2_x86_64"
```

<h2 id="tocS_ClusterName">ClusterName</h2>
<!-- backwards compatibility -->
<a id="schemaclustername"></a>
<a id="schema_ClusterName"></a>
<a id="tocSclustername"></a>
<a id="tocsclustername"></a>

```json
"string"
```

<h2 id="tocS_AddonStatus">AddonStatus</h2>
<!-- backwards compatibility -->
<a id="schemaaddonstatus"></a>
<a id="schema_AddonStatus"></a>
<a id="tocSaddonstatus"></a>
<a id="tocsaddonstatus"></a>

```json
"CREATING"
```

<h2 id="tocS_AddonHealth">AddonHealth</h2>
<!-- backwards compatibility -->
<a id="schemaaddonhealth"></a>
<a id="schema_AddonHealth"></a>
<a id="tocSaddonhealth"></a>
<a id="tocsaddonhealth"></a>

```json
{
  "issues": {}
}
```

The health of the add-on.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issues|object|false|none|none|

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_TagMap">TagMap</h2>
<!-- backwards compatibility -->
<a id="schematagmap"></a>
<a id="schema_TagMap"></a>
<a id="tocStagmap"></a>
<a id="tocstagmap"></a>

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

<h2 id="tocS_MarketplaceInformation">MarketplaceInformation</h2>
<!-- backwards compatibility -->
<a id="schemamarketplaceinformation"></a>
<a id="schema_MarketplaceInformation"></a>
<a id="tocSmarketplaceinformation"></a>
<a id="tocsmarketplaceinformation"></a>

```json
{
  "productId": {},
  "productUrl": {}
}
```

Information about an Amazon EKS add-on from the Amazon Web Services Marketplace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|productId|object|false|none|none|
|productUrl|object|false|none|none|

<h2 id="tocS_Addon">Addon</h2>
<!-- backwards compatibility -->
<a id="schemaaddon"></a>
<a id="schema_Addon"></a>
<a id="tocSaddon"></a>
<a id="tocsaddon"></a>

```json
{
  "addonName": {},
  "clusterName": {},
  "status": {},
  "addonVersion": {},
  "health": {
    "issues": {}
  },
  "addonArn": {},
  "createdAt": {},
  "modifiedAt": {},
  "serviceAccountRoleArn": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "publisher": {},
  "owner": {},
  "marketplaceInformation": {
    "productId": {},
    "productUrl": {}
  },
  "configurationValues": {}
}
```

An Amazon EKS add-on. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-add-ons.html">Amazon EKS add-ons</a> in the <i>Amazon EKS User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addonName|object|false|none|none|
|clusterName|object|false|none|none|
|status|object|false|none|none|
|addonVersion|object|false|none|none|
|health|object|false|none|none|
|addonArn|object|false|none|none|
|createdAt|object|false|none|none|
|modifiedAt|object|false|none|none|
|serviceAccountRoleArn|object|false|none|none|
|tags|object|false|none|none|
|publisher|object|false|none|none|
|owner|object|false|none|none|
|marketplaceInformation|object|false|none|none|
|configurationValues|object|false|none|none|

<h2 id="tocS_AddonIssueList">AddonIssueList</h2>
<!-- backwards compatibility -->
<a id="schemaaddonissuelist"></a>
<a id="schema_AddonIssueList"></a>
<a id="tocSaddonissuelist"></a>
<a id="tocsaddonissuelist"></a>

```json
[
  {
    "code": {},
    "message": {},
    "resourceIds": {}
  }
]
```

<h2 id="tocS_AddonVersionInfoList">AddonVersionInfoList</h2>
<!-- backwards compatibility -->
<a id="schemaaddonversioninfolist"></a>
<a id="schema_AddonVersionInfoList"></a>
<a id="tocSaddonversioninfolist"></a>
<a id="tocsaddonversioninfolist"></a>

```json
[
  {
    "addonVersion": {},
    "architecture": {},
    "compatibilities": {},
    "requiresConfiguration": {}
  }
]
```

<h2 id="tocS_AddonInfo">AddonInfo</h2>
<!-- backwards compatibility -->
<a id="schemaaddoninfo"></a>
<a id="schema_AddonInfo"></a>
<a id="tocSaddoninfo"></a>
<a id="tocsaddoninfo"></a>

```json
{
  "addonName": {},
  "type": {},
  "addonVersions": {},
  "publisher": {},
  "owner": {},
  "marketplaceInformation": {
    "productId": {},
    "productUrl": {}
  }
}
```

Information about an add-on.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addonName|object|false|none|none|
|type|object|false|none|none|
|addonVersions|object|false|none|none|
|publisher|object|false|none|none|
|owner|object|false|none|none|
|marketplaceInformation|object|false|none|none|

<h2 id="tocS_AddonIssueCode">AddonIssueCode</h2>
<!-- backwards compatibility -->
<a id="schemaaddonissuecode"></a>
<a id="schema_AddonIssueCode"></a>
<a id="tocSaddonissuecode"></a>
<a id="tocsaddonissuecode"></a>

```json
"AccessDenied"
```

<h2 id="tocS_AddonIssue">AddonIssue</h2>
<!-- backwards compatibility -->
<a id="schemaaddonissue"></a>
<a id="schema_AddonIssue"></a>
<a id="tocSaddonissue"></a>
<a id="tocsaddonissue"></a>

```json
{
  "code": {},
  "message": {},
  "resourceIds": {}
}
```

An issue related to an add-on.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|object|false|none|none|
|message|object|false|none|none|
|resourceIds|object|false|none|none|

<h2 id="tocS_Compatibilities">Compatibilities</h2>
<!-- backwards compatibility -->
<a id="schemacompatibilities"></a>
<a id="schema_Compatibilities"></a>
<a id="tocScompatibilities"></a>
<a id="tocscompatibilities"></a>

```json
[
  {
    "clusterVersion": {},
    "platformVersions": {},
    "defaultVersion": {}
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

<h2 id="tocS_AddonVersionInfo">AddonVersionInfo</h2>
<!-- backwards compatibility -->
<a id="schemaaddonversioninfo"></a>
<a id="schema_AddonVersionInfo"></a>
<a id="tocSaddonversioninfo"></a>
<a id="tocsaddonversioninfo"></a>

```json
{
  "addonVersion": {},
  "architecture": {},
  "compatibilities": {},
  "requiresConfiguration": {}
}
```

Information about an add-on version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addonVersion|object|false|none|none|
|architecture|object|false|none|none|
|compatibilities|object|false|none|none|
|requiresConfiguration|object|false|none|none|

<h2 id="tocS_Addons">Addons</h2>
<!-- backwards compatibility -->
<a id="schemaaddons"></a>
<a id="schema_Addons"></a>
<a id="tocSaddons"></a>
<a id="tocsaddons"></a>

```json
[
  {
    "addonName": {},
    "type": {},
    "addonVersions": {},
    "publisher": {},
    "owner": {},
    "marketplaceInformation": {
      "productId": {},
      "productUrl": {}
    }
  }
]
```

<h2 id="tocS_EncryptionConfigList">EncryptionConfigList</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionconfiglist"></a>
<a id="schema_EncryptionConfigList"></a>
<a id="tocSencryptionconfiglist"></a>
<a id="tocsencryptionconfiglist"></a>

```json
[
  {
    "resources": {},
    "provider": {
      "keyArn": {}
    }
  }
]
```

<h2 id="tocS_AssociateEncryptionConfigRequest">AssociateEncryptionConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociateencryptionconfigrequest"></a>
<a id="schema_AssociateEncryptionConfigRequest"></a>
<a id="tocSassociateencryptionconfigrequest"></a>
<a id="tocsassociateencryptionconfigrequest"></a>

```json
{
  "encryptionConfig": {},
  "clientRequestToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encryptionConfig|object|true|none|none|
|clientRequestToken|object|false|none|none|

<h2 id="tocS_Update">Update</h2>
<!-- backwards compatibility -->
<a id="schemaupdate"></a>
<a id="schema_Update"></a>
<a id="tocSupdate"></a>
<a id="tocsupdate"></a>

```json
{
  "id": {},
  "status": {},
  "type": {},
  "params": {},
  "createdAt": {},
  "errors": {}
}
```

An object representing an asynchronous update.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|status|object|false|none|none|
|type|object|false|none|none|
|params|object|false|none|none|
|createdAt|object|false|none|none|
|errors|object|false|none|none|

<h2 id="tocS_OidcIdentityProviderConfigRequest">OidcIdentityProviderConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemaoidcidentityproviderconfigrequest"></a>
<a id="schema_OidcIdentityProviderConfigRequest"></a>
<a id="tocSoidcidentityproviderconfigrequest"></a>
<a id="tocsoidcidentityproviderconfigrequest"></a>

```json
{
  "identityProviderConfigName": {},
  "issuerUrl": {},
  "clientId": {},
  "usernameClaim": {},
  "usernamePrefix": {},
  "groupsClaim": {},
  "groupsPrefix": {},
  "requiredClaims": {
    "property1": "string",
    "property2": "string"
  }
}
```

An object representing an OpenID Connect (OIDC) configuration. Before associating an OIDC identity provider to your cluster, review the considerations in <a href="https://docs.aws.amazon.com/eks/latest/userguide/authenticate-oidc-identity-provider.html">Authenticating users for your cluster from an OpenID Connect identity provider</a> in the <i>Amazon EKS User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identityProviderConfigName|object|true|none|none|
|issuerUrl|object|true|none|none|
|clientId|object|true|none|none|
|usernameClaim|object|false|none|none|
|usernamePrefix|object|false|none|none|
|groupsClaim|object|false|none|none|
|groupsPrefix|object|false|none|none|
|requiredClaims|object|false|none|none|

<h2 id="tocS_AssociateIdentityProviderConfigRequest">AssociateIdentityProviderConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociateidentityproviderconfigrequest"></a>
<a id="schema_AssociateIdentityProviderConfigRequest"></a>
<a id="tocSassociateidentityproviderconfigrequest"></a>
<a id="tocsassociateidentityproviderconfigrequest"></a>

```json
{
  "oidc": {
    "identityProviderConfigName": {},
    "issuerUrl": {},
    "clientId": {},
    "usernameClaim": {},
    "usernamePrefix": {},
    "groupsClaim": {},
    "groupsPrefix": {},
    "requiredClaims": {
      "property1": "string",
      "property2": "string"
    }
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "clientRequestToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|oidc|object|true|none|none|
|tags|object|false|none|none|
|clientRequestToken|object|false|none|none|

<h2 id="tocS_AutoScalingGroup">AutoScalingGroup</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalinggroup"></a>
<a id="schema_AutoScalingGroup"></a>
<a id="tocSautoscalinggroup"></a>
<a id="tocsautoscalinggroup"></a>

```json
{
  "name": {}
}
```

An Auto Scaling group that is associated with an Amazon EKS managed node group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|

<h2 id="tocS_AutoScalingGroupList">AutoScalingGroupList</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalinggrouplist"></a>
<a id="schema_AutoScalingGroupList"></a>
<a id="tocSautoscalinggrouplist"></a>
<a id="tocsautoscalinggrouplist"></a>

```json
[
  {
    "name": {}
  }
]
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

<h2 id="tocS_CapacityTypes">CapacityTypes</h2>
<!-- backwards compatibility -->
<a id="schemacapacitytypes"></a>
<a id="schema_CapacityTypes"></a>
<a id="tocScapacitytypes"></a>
<a id="tocscapacitytypes"></a>

```json
"ON_DEMAND"
```

<h2 id="tocS_Certificate">Certificate</h2>
<!-- backwards compatibility -->
<a id="schemacertificate"></a>
<a id="schema_Certificate"></a>
<a id="tocScertificate"></a>
<a id="tocscertificate"></a>

```json
{
  "data": {}
}
```

An object representing the <code>certificate-authority-data</code> for your cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|

<h2 id="tocS_VpcConfigResponse">VpcConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemavpcconfigresponse"></a>
<a id="schema_VpcConfigResponse"></a>
<a id="tocSvpcconfigresponse"></a>
<a id="tocsvpcconfigresponse"></a>

```json
{
  "subnetIds": {},
  "securityGroupIds": {},
  "clusterSecurityGroupId": {},
  "vpcId": {},
  "endpointPublicAccess": {},
  "endpointPrivateAccess": {},
  "publicAccessCidrs": {}
}
```

An object representing an Amazon EKS cluster VPC configuration response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subnetIds|object|false|none|none|
|securityGroupIds|object|false|none|none|
|clusterSecurityGroupId|object|false|none|none|
|vpcId|object|false|none|none|
|endpointPublicAccess|object|false|none|none|
|endpointPrivateAccess|object|false|none|none|
|publicAccessCidrs|object|false|none|none|

<h2 id="tocS_KubernetesNetworkConfigResponse">KubernetesNetworkConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemakubernetesnetworkconfigresponse"></a>
<a id="schema_KubernetesNetworkConfigResponse"></a>
<a id="tocSkubernetesnetworkconfigresponse"></a>
<a id="tocskubernetesnetworkconfigresponse"></a>

```json
{
  "serviceIpv4Cidr": {},
  "serviceIpv6Cidr": {},
  "ipFamily": {}
}
```

The Kubernetes network configuration for the cluster. The response contains a value for <b>serviceIpv6Cidr</b> or <b>serviceIpv4Cidr</b>, but not both.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceIpv4Cidr|object|false|none|none|
|serviceIpv6Cidr|object|false|none|none|
|ipFamily|object|false|none|none|

<h2 id="tocS_Logging">Logging</h2>
<!-- backwards compatibility -->
<a id="schemalogging"></a>
<a id="schema_Logging"></a>
<a id="tocSlogging"></a>
<a id="tocslogging"></a>

```json
{
  "clusterLogging": {}
}
```

An object representing the logging configuration for resources in your cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterLogging|object|false|none|none|

<h2 id="tocS_Identity">Identity</h2>
<!-- backwards compatibility -->
<a id="schemaidentity"></a>
<a id="schema_Identity"></a>
<a id="tocSidentity"></a>
<a id="tocsidentity"></a>

```json
{
  "oidc": {
    "issuer": {}
  }
}
```

An object representing an identity provider.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|oidc|object|false|none|none|

<h2 id="tocS_ClusterStatus">ClusterStatus</h2>
<!-- backwards compatibility -->
<a id="schemaclusterstatus"></a>
<a id="schema_ClusterStatus"></a>
<a id="tocSclusterstatus"></a>
<a id="tocsclusterstatus"></a>

```json
"CREATING"
```

<h2 id="tocS_ConnectorConfigResponse">ConnectorConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorconfigresponse"></a>
<a id="schema_ConnectorConfigResponse"></a>
<a id="tocSconnectorconfigresponse"></a>
<a id="tocsconnectorconfigresponse"></a>

```json
{
  "activationId": {},
  "activationCode": {},
  "activationExpiry": {},
  "provider": {},
  "roleArn": {}
}
```

The full description of your connected cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activationId|object|false|none|none|
|activationCode|object|false|none|none|
|activationExpiry|object|false|none|none|
|provider|object|false|none|none|
|roleArn|object|false|none|none|

<h2 id="tocS_ClusterHealth">ClusterHealth</h2>
<!-- backwards compatibility -->
<a id="schemaclusterhealth"></a>
<a id="schema_ClusterHealth"></a>
<a id="tocSclusterhealth"></a>
<a id="tocsclusterhealth"></a>

```json
{
  "issues": {}
}
```

An object representing the health of your local Amazon EKS cluster on an Amazon Web Services Outpost. You can't use this API with an Amazon EKS cluster on the Amazon Web Services cloud.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issues|object|false|none|none|

<h2 id="tocS_OutpostConfigResponse">OutpostConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemaoutpostconfigresponse"></a>
<a id="schema_OutpostConfigResponse"></a>
<a id="tocSoutpostconfigresponse"></a>
<a id="tocsoutpostconfigresponse"></a>

```json
{
  "outpostArns": {},
  "controlPlaneInstanceType": {},
  "controlPlanePlacement": {
    "groupName": {}
  }
}
```

An object representing the configuration of your local Amazon EKS cluster on an Amazon Web Services Outpost. This API isn't available for Amazon EKS clusters on the Amazon Web Services cloud.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outpostArns|object|true|none|none|
|controlPlaneInstanceType|object|true|none|none|
|controlPlanePlacement|object|false|none|none|

<h2 id="tocS_Cluster">Cluster</h2>
<!-- backwards compatibility -->
<a id="schemacluster"></a>
<a id="schema_Cluster"></a>
<a id="tocScluster"></a>
<a id="tocscluster"></a>

```json
{
  "name": {},
  "arn": {},
  "createdAt": {},
  "version": {},
  "endpoint": {},
  "roleArn": {},
  "resourcesVpcConfig": {
    "subnetIds": {},
    "securityGroupIds": {},
    "clusterSecurityGroupId": {},
    "vpcId": {},
    "endpointPublicAccess": {},
    "endpointPrivateAccess": {},
    "publicAccessCidrs": {}
  },
  "kubernetesNetworkConfig": {
    "serviceIpv4Cidr": {},
    "serviceIpv6Cidr": {},
    "ipFamily": {}
  },
  "logging": {
    "clusterLogging": {}
  },
  "identity": {
    "oidc": {
      "issuer": {}
    }
  },
  "status": {},
  "certificateAuthority": {
    "data": {}
  },
  "clientRequestToken": {},
  "platformVersion": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "encryptionConfig": {},
  "connectorConfig": {
    "activationId": {},
    "activationCode": {},
    "activationExpiry": {},
    "provider": {},
    "roleArn": {}
  },
  "id": {},
  "health": {
    "issues": {}
  },
  "outpostConfig": {
    "outpostArns": {},
    "controlPlaneInstanceType": {},
    "controlPlanePlacement": {
      "groupName": {}
    }
  }
}
```

An object representing an Amazon EKS cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|arn|object|false|none|none|
|createdAt|object|false|none|none|
|version|object|false|none|none|
|endpoint|object|false|none|none|
|roleArn|object|false|none|none|
|resourcesVpcConfig|object|false|none|none|
|kubernetesNetworkConfig|object|false|none|none|
|logging|object|false|none|none|
|identity|object|false|none|none|
|status|object|false|none|none|
|certificateAuthority|object|false|none|none|
|clientRequestToken|object|false|none|none|
|platformVersion|object|false|none|none|
|tags|object|false|none|none|
|encryptionConfig|object|false|none|none|
|connectorConfig|object|false|none|none|
|id|object|false|none|none|
|health|object|false|none|none|
|outpostConfig|object|false|none|none|

<h2 id="tocS_ClusterIssueList">ClusterIssueList</h2>
<!-- backwards compatibility -->
<a id="schemaclusterissuelist"></a>
<a id="schema_ClusterIssueList"></a>
<a id="tocSclusterissuelist"></a>
<a id="tocsclusterissuelist"></a>

```json
[
  {
    "code": {},
    "message": {},
    "resourceIds": {}
  }
]
```

<h2 id="tocS_ClusterIssueCode">ClusterIssueCode</h2>
<!-- backwards compatibility -->
<a id="schemaclusterissuecode"></a>
<a id="schema_ClusterIssueCode"></a>
<a id="tocSclusterissuecode"></a>
<a id="tocsclusterissuecode"></a>

```json
"AccessDenied"
```

<h2 id="tocS_ClusterIssue">ClusterIssue</h2>
<!-- backwards compatibility -->
<a id="schemaclusterissue"></a>
<a id="schema_ClusterIssue"></a>
<a id="tocSclusterissue"></a>
<a id="tocsclusterissue"></a>

```json
{
  "code": {},
  "message": {},
  "resourceIds": {}
}
```

An issue with your local Amazon EKS cluster on an Amazon Web Services Outpost. You can't use this API with an Amazon EKS cluster on the Amazon Web Services cloud.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|object|false|none|none|
|message|object|false|none|none|
|resourceIds|object|false|none|none|

<h2 id="tocS_Compatibility">Compatibility</h2>
<!-- backwards compatibility -->
<a id="schemacompatibility"></a>
<a id="schema_Compatibility"></a>
<a id="tocScompatibility"></a>
<a id="tocscompatibility"></a>

```json
{
  "clusterVersion": {},
  "platformVersions": {},
  "defaultVersion": {}
}
```

Compatibility information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterVersion|object|false|none|none|
|platformVersions|object|false|none|none|
|defaultVersion|object|false|none|none|

<h2 id="tocS_ConnectorConfigRequest">ConnectorConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorconfigrequest"></a>
<a id="schema_ConnectorConfigRequest"></a>
<a id="tocSconnectorconfigrequest"></a>
<a id="tocsconnectorconfigrequest"></a>

```json
{
  "roleArn": {},
  "provider": {}
}
```

The configuration sent to a cluster for configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|roleArn|object|true|none|none|
|provider|object|true|none|none|

<h2 id="tocS_ControlPlanePlacementResponse">ControlPlanePlacementResponse</h2>
<!-- backwards compatibility -->
<a id="schemacontrolplaneplacementresponse"></a>
<a id="schema_ControlPlanePlacementResponse"></a>
<a id="tocScontrolplaneplacementresponse"></a>
<a id="tocscontrolplaneplacementresponse"></a>

```json
{
  "groupName": {}
}
```

The placement configuration for all the control plane instances of your local Amazon EKS cluster on an Amazon Web Services Outpost. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-capacity-considerations.html">Capacity considerations</a> in the <i>Amazon EKS User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groupName|object|false|none|none|

<h2 id="tocS_RoleArn">RoleArn</h2>
<!-- backwards compatibility -->
<a id="schemarolearn"></a>
<a id="schema_RoleArn"></a>
<a id="tocSrolearn"></a>
<a id="tocsrolearn"></a>

```json
"string"
```

<h2 id="tocS_ResolveConflicts">ResolveConflicts</h2>
<!-- backwards compatibility -->
<a id="schemaresolveconflicts"></a>
<a id="schema_ResolveConflicts"></a>
<a id="tocSresolveconflicts"></a>
<a id="tocsresolveconflicts"></a>

```json
"OVERWRITE"
```

<h2 id="tocS_CreateAddonRequest">CreateAddonRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateaddonrequest"></a>
<a id="schema_CreateAddonRequest"></a>
<a id="tocScreateaddonrequest"></a>
<a id="tocscreateaddonrequest"></a>

```json
{
  "addonName": {},
  "addonVersion": {},
  "serviceAccountRoleArn": {},
  "resolveConflicts": {},
  "clientRequestToken": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "configurationValues": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addonName|object|true|none|none|
|addonVersion|object|false|none|none|
|serviceAccountRoleArn|object|false|none|none|
|resolveConflicts|object|false|none|none|
|clientRequestToken|object|false|none|none|
|tags|object|false|none|none|
|configurationValues|object|false|none|none|

<h2 id="tocS_VpcConfigRequest">VpcConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemavpcconfigrequest"></a>
<a id="schema_VpcConfigRequest"></a>
<a id="tocSvpcconfigrequest"></a>
<a id="tocsvpcconfigrequest"></a>

```json
{
  "subnetIds": {},
  "securityGroupIds": {},
  "endpointPublicAccess": {},
  "endpointPrivateAccess": {},
  "publicAccessCidrs": {}
}
```

An object representing the VPC configuration to use for an Amazon EKS cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subnetIds|object|false|none|none|
|securityGroupIds|object|false|none|none|
|endpointPublicAccess|object|false|none|none|
|endpointPrivateAccess|object|false|none|none|
|publicAccessCidrs|object|false|none|none|

<h2 id="tocS_KubernetesNetworkConfigRequest">KubernetesNetworkConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemakubernetesnetworkconfigrequest"></a>
<a id="schema_KubernetesNetworkConfigRequest"></a>
<a id="tocSkubernetesnetworkconfigrequest"></a>
<a id="tocskubernetesnetworkconfigrequest"></a>

```json
{
  "serviceIpv4Cidr": {},
  "ipFamily": {}
}
```

The Kubernetes network configuration for the cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceIpv4Cidr|object|false|none|none|
|ipFamily|object|false|none|none|

<h2 id="tocS_OutpostConfigRequest">OutpostConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemaoutpostconfigrequest"></a>
<a id="schema_OutpostConfigRequest"></a>
<a id="tocSoutpostconfigrequest"></a>
<a id="tocsoutpostconfigrequest"></a>

```json
{
  "outpostArns": {},
  "controlPlaneInstanceType": {},
  "controlPlanePlacement": {
    "groupName": {}
  }
}
```

The configuration of your local Amazon EKS cluster on an Amazon Web Services Outpost. Before creating a cluster on an Outpost, review <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-local-cluster-create.html">Creating a local cluster on an Outpost</a> in the <i>Amazon EKS User Guide</i>. This API isn't available for Amazon EKS clusters on the Amazon Web Services cloud.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outpostArns|object|true|none|none|
|controlPlaneInstanceType|object|true|none|none|
|controlPlanePlacement|object|false|none|none|

<h2 id="tocS_CreateClusterRequest">CreateClusterRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateclusterrequest"></a>
<a id="schema_CreateClusterRequest"></a>
<a id="tocScreateclusterrequest"></a>
<a id="tocscreateclusterrequest"></a>

```json
{
  "name": {},
  "version": {},
  "roleArn": {},
  "resourcesVpcConfig": {
    "subnetIds": {},
    "securityGroupIds": {},
    "endpointPublicAccess": {},
    "endpointPrivateAccess": {},
    "publicAccessCidrs": {}
  },
  "kubernetesNetworkConfig": {
    "serviceIpv4Cidr": {},
    "ipFamily": {}
  },
  "logging": {
    "clusterLogging": {}
  },
  "clientRequestToken": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "encryptionConfig": {},
  "outpostConfig": {
    "outpostArns": {},
    "controlPlaneInstanceType": {},
    "controlPlanePlacement": {
      "groupName": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|version|object|false|none|none|
|roleArn|object|true|none|none|
|resourcesVpcConfig|object|true|none|none|
|kubernetesNetworkConfig|object|false|none|none|
|logging|object|false|none|none|
|clientRequestToken|object|false|none|none|
|tags|object|false|none|none|
|encryptionConfig|object|false|none|none|
|outpostConfig|object|false|none|none|

<h2 id="tocS_FargateProfileSelectors">FargateProfileSelectors</h2>
<!-- backwards compatibility -->
<a id="schemafargateprofileselectors"></a>
<a id="schema_FargateProfileSelectors"></a>
<a id="tocSfargateprofileselectors"></a>
<a id="tocsfargateprofileselectors"></a>

```json
[
  {
    "namespace": {},
    "labels": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_CreateFargateProfileRequest">CreateFargateProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatefargateprofilerequest"></a>
<a id="schema_CreateFargateProfileRequest"></a>
<a id="tocScreatefargateprofilerequest"></a>
<a id="tocscreatefargateprofilerequest"></a>

```json
{
  "fargateProfileName": {},
  "podExecutionRoleArn": {},
  "subnets": {},
  "selectors": {},
  "clientRequestToken": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fargateProfileName|object|true|none|none|
|podExecutionRoleArn|object|true|none|none|
|subnets|object|false|none|none|
|selectors|object|false|none|none|
|clientRequestToken|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_FargateProfile">FargateProfile</h2>
<!-- backwards compatibility -->
<a id="schemafargateprofile"></a>
<a id="schema_FargateProfile"></a>
<a id="tocSfargateprofile"></a>
<a id="tocsfargateprofile"></a>

```json
{
  "fargateProfileName": {},
  "fargateProfileArn": {},
  "clusterName": {},
  "createdAt": {},
  "podExecutionRoleArn": {},
  "subnets": {},
  "selectors": {},
  "status": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

An object representing an Fargate profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fargateProfileName|object|false|none|none|
|fargateProfileArn|object|false|none|none|
|clusterName|object|false|none|none|
|createdAt|object|false|none|none|
|podExecutionRoleArn|object|false|none|none|
|subnets|object|false|none|none|
|selectors|object|false|none|none|
|status|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_NodegroupScalingConfig">NodegroupScalingConfig</h2>
<!-- backwards compatibility -->
<a id="schemanodegroupscalingconfig"></a>
<a id="schema_NodegroupScalingConfig"></a>
<a id="tocSnodegroupscalingconfig"></a>
<a id="tocsnodegroupscalingconfig"></a>

```json
{
  "minSize": {},
  "maxSize": {},
  "desiredSize": {}
}
```

An object representing the scaling configuration details for the Auto Scaling group that is associated with your node group. When creating a node group, you must specify all or none of the properties. When updating a node group, you can specify any or none of the properties.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|minSize|object|false|none|none|
|maxSize|object|false|none|none|
|desiredSize|object|false|none|none|

<h2 id="tocS_RemoteAccessConfig">RemoteAccessConfig</h2>
<!-- backwards compatibility -->
<a id="schemaremoteaccessconfig"></a>
<a id="schema_RemoteAccessConfig"></a>
<a id="tocSremoteaccessconfig"></a>
<a id="tocsremoteaccessconfig"></a>

```json
{
  "ec2SshKey": {},
  "sourceSecurityGroups": {}
}
```

An object representing the remote access configuration for the managed node group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ec2SshKey|object|false|none|none|
|sourceSecurityGroups|object|false|none|none|

<h2 id="tocS_LaunchTemplateSpecification">LaunchTemplateSpecification</h2>
<!-- backwards compatibility -->
<a id="schemalaunchtemplatespecification"></a>
<a id="schema_LaunchTemplateSpecification"></a>
<a id="tocSlaunchtemplatespecification"></a>
<a id="tocslaunchtemplatespecification"></a>

```json
{
  "name": {},
  "version": {},
  "id": {}
}
```

<p>An object representing a node group launch template specification. The launch template can't include <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html"> <code>SubnetId</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IamInstanceProfile.html"> <code>IamInstanceProfile</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html"> <code>RequestSpotInstances</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_HibernationOptionsRequest.html"> <code>HibernationOptions</code> </a>, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TerminateInstances.html"> <code>TerminateInstances</code> </a>, or the node group deployment or update will fail. For more information about launch templates, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLaunchTemplate.html"> <code>CreateLaunchTemplate</code> </a> in the Amazon EC2 API Reference. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.</p> <p>You must specify either the launch template ID or the launch template name in the request, but not both.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|version|object|false|none|none|
|id|object|false|none|none|

<h2 id="tocS_NodegroupUpdateConfig">NodegroupUpdateConfig</h2>
<!-- backwards compatibility -->
<a id="schemanodegroupupdateconfig"></a>
<a id="schema_NodegroupUpdateConfig"></a>
<a id="tocSnodegroupupdateconfig"></a>
<a id="tocsnodegroupupdateconfig"></a>

```json
{
  "maxUnavailable": {},
  "maxUnavailablePercentage": {}
}
```

The node group update configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxUnavailable|object|false|none|none|
|maxUnavailablePercentage|object|false|none|none|

<h2 id="tocS_CreateNodegroupRequest">CreateNodegroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatenodegrouprequest"></a>
<a id="schema_CreateNodegroupRequest"></a>
<a id="tocScreatenodegrouprequest"></a>
<a id="tocscreatenodegrouprequest"></a>

```json
{
  "nodegroupName": {},
  "scalingConfig": {
    "minSize": {},
    "maxSize": {},
    "desiredSize": {}
  },
  "diskSize": {},
  "subnets": {},
  "instanceTypes": {},
  "amiType": {},
  "remoteAccess": {
    "ec2SshKey": {},
    "sourceSecurityGroups": {}
  },
  "nodeRole": {},
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "taints": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "clientRequestToken": {},
  "launchTemplate": {
    "name": {},
    "version": {},
    "id": {}
  },
  "updateConfig": {
    "maxUnavailable": {},
    "maxUnavailablePercentage": {}
  },
  "capacityType": {},
  "version": {},
  "releaseVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nodegroupName|object|true|none|none|
|scalingConfig|object|false|none|none|
|diskSize|object|false|none|none|
|subnets|object|true|none|none|
|instanceTypes|object|false|none|none|
|amiType|object|false|none|none|
|remoteAccess|object|false|none|none|
|nodeRole|object|true|none|none|
|labels|object|false|none|none|
|taints|object|false|none|none|
|tags|object|false|none|none|
|clientRequestToken|object|false|none|none|
|launchTemplate|object|false|none|none|
|updateConfig|object|false|none|none|
|capacityType|object|false|none|none|
|version|object|false|none|none|
|releaseVersion|object|false|none|none|

<h2 id="tocS_Nodegroup">Nodegroup</h2>
<!-- backwards compatibility -->
<a id="schemanodegroup"></a>
<a id="schema_Nodegroup"></a>
<a id="tocSnodegroup"></a>
<a id="tocsnodegroup"></a>

```json
{
  "nodegroupName": {},
  "nodegroupArn": {},
  "clusterName": {},
  "version": {},
  "releaseVersion": {},
  "createdAt": {},
  "modifiedAt": {},
  "status": {},
  "capacityType": {},
  "scalingConfig": {
    "minSize": {},
    "maxSize": {},
    "desiredSize": {}
  },
  "instanceTypes": {},
  "subnets": {},
  "remoteAccess": {
    "ec2SshKey": {},
    "sourceSecurityGroups": {}
  },
  "amiType": {},
  "nodeRole": {},
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "taints": {},
  "resources": {
    "autoScalingGroups": {},
    "remoteAccessSecurityGroup": {}
  },
  "diskSize": {},
  "health": {
    "issues": {}
  },
  "updateConfig": {
    "maxUnavailable": {},
    "maxUnavailablePercentage": {}
  },
  "launchTemplate": {
    "name": {},
    "version": {},
    "id": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

An object representing an Amazon EKS managed node group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nodegroupName|object|false|none|none|
|nodegroupArn|object|false|none|none|
|clusterName|object|false|none|none|
|version|object|false|none|none|
|releaseVersion|object|false|none|none|
|createdAt|object|false|none|none|
|modifiedAt|object|false|none|none|
|status|object|false|none|none|
|capacityType|object|false|none|none|
|scalingConfig|object|false|none|none|
|instanceTypes|object|false|none|none|
|subnets|object|false|none|none|
|remoteAccess|object|false|none|none|
|amiType|object|false|none|none|
|nodeRole|object|false|none|none|
|labels|object|false|none|none|
|taints|object|false|none|none|
|resources|object|false|none|none|
|diskSize|object|false|none|none|
|health|object|false|none|none|
|updateConfig|object|false|none|none|
|launchTemplate|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_DeleteAddonRequest">DeleteAddonRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteaddonrequest"></a>
<a id="schema_DeleteAddonRequest"></a>
<a id="tocSdeleteaddonrequest"></a>
<a id="tocsdeleteaddonrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteClusterRequest">DeleteClusterRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteclusterrequest"></a>
<a id="schema_DeleteClusterRequest"></a>
<a id="tocSdeleteclusterrequest"></a>
<a id="tocsdeleteclusterrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteFargateProfileRequest">DeleteFargateProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletefargateprofilerequest"></a>
<a id="schema_DeleteFargateProfileRequest"></a>
<a id="tocSdeletefargateprofilerequest"></a>
<a id="tocsdeletefargateprofilerequest"></a>

```json
{}
```

<h2 id="tocS_DeleteNodegroupRequest">DeleteNodegroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletenodegrouprequest"></a>
<a id="schema_DeleteNodegroupRequest"></a>
<a id="tocSdeletenodegrouprequest"></a>
<a id="tocsdeletenodegrouprequest"></a>

```json
{}
```

<h2 id="tocS_DeregisterClusterRequest">DeregisterClusterRequest</h2>
<!-- backwards compatibility -->
<a id="schemaderegisterclusterrequest"></a>
<a id="schema_DeregisterClusterRequest"></a>
<a id="tocSderegisterclusterrequest"></a>
<a id="tocsderegisterclusterrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeAddonConfigurationRequest">DescribeAddonConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaddonconfigurationrequest"></a>
<a id="schema_DescribeAddonConfigurationRequest"></a>
<a id="tocSdescribeaddonconfigurationrequest"></a>
<a id="tocsdescribeaddonconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeAddonRequest">DescribeAddonRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaddonrequest"></a>
<a id="schema_DescribeAddonRequest"></a>
<a id="tocSdescribeaddonrequest"></a>
<a id="tocsdescribeaddonrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeAddonVersionsRequestMaxResults">DescribeAddonVersionsRequestMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaddonversionsrequestmaxresults"></a>
<a id="schema_DescribeAddonVersionsRequestMaxResults"></a>
<a id="tocSdescribeaddonversionsrequestmaxresults"></a>
<a id="tocsdescribeaddonversionsrequestmaxresults"></a>

```json
1
```

<h2 id="tocS_DescribeAddonVersionsRequest">DescribeAddonVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaddonversionsrequest"></a>
<a id="schema_DescribeAddonVersionsRequest"></a>
<a id="tocSdescribeaddonversionsrequest"></a>
<a id="tocsdescribeaddonversionsrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeClusterRequest">DescribeClusterRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeclusterrequest"></a>
<a id="schema_DescribeClusterRequest"></a>
<a id="tocSdescribeclusterrequest"></a>
<a id="tocsdescribeclusterrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeFargateProfileRequest">DescribeFargateProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribefargateprofilerequest"></a>
<a id="schema_DescribeFargateProfileRequest"></a>
<a id="tocSdescribefargateprofilerequest"></a>
<a id="tocsdescribefargateprofilerequest"></a>

```json
{}
```

<h2 id="tocS_IdentityProviderConfig">IdentityProviderConfig</h2>
<!-- backwards compatibility -->
<a id="schemaidentityproviderconfig"></a>
<a id="schema_IdentityProviderConfig"></a>
<a id="tocSidentityproviderconfig"></a>
<a id="tocsidentityproviderconfig"></a>

```json
{
  "type": {},
  "name": {}
}
```

An object representing an identity provider configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|true|none|none|
|name|object|true|none|none|

<h2 id="tocS_DescribeIdentityProviderConfigRequest">DescribeIdentityProviderConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeidentityproviderconfigrequest"></a>
<a id="schema_DescribeIdentityProviderConfigRequest"></a>
<a id="tocSdescribeidentityproviderconfigrequest"></a>
<a id="tocsdescribeidentityproviderconfigrequest"></a>

```json
{
  "identityProviderConfig": {
    "type": {},
    "name": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identityProviderConfig|object|true|none|none|

<h2 id="tocS_IdentityProviderConfigResponse">IdentityProviderConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemaidentityproviderconfigresponse"></a>
<a id="schema_IdentityProviderConfigResponse"></a>
<a id="tocSidentityproviderconfigresponse"></a>
<a id="tocsidentityproviderconfigresponse"></a>

```json
{
  "oidc": {
    "identityProviderConfigName": {},
    "identityProviderConfigArn": {},
    "clusterName": {},
    "issuerUrl": {},
    "clientId": {},
    "usernameClaim": {},
    "usernamePrefix": {},
    "groupsClaim": {},
    "groupsPrefix": {},
    "requiredClaims": {
      "property1": "string",
      "property2": "string"
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "status": {}
  }
}
```

The full description of your identity configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|oidc|object|false|none|none|

<h2 id="tocS_DescribeNodegroupRequest">DescribeNodegroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribenodegrouprequest"></a>
<a id="schema_DescribeNodegroupRequest"></a>
<a id="tocSdescribenodegrouprequest"></a>
<a id="tocsdescribenodegrouprequest"></a>

```json
{}
```

<h2 id="tocS_DescribeUpdateRequest">DescribeUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeupdaterequest"></a>
<a id="schema_DescribeUpdateRequest"></a>
<a id="tocSdescribeupdaterequest"></a>
<a id="tocsdescribeupdaterequest"></a>

```json
{}
```

<h2 id="tocS_DisassociateIdentityProviderConfigRequest">DisassociateIdentityProviderConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateidentityproviderconfigrequest"></a>
<a id="schema_DisassociateIdentityProviderConfigRequest"></a>
<a id="tocSdisassociateidentityproviderconfigrequest"></a>
<a id="tocsdisassociateidentityproviderconfigrequest"></a>

```json
{
  "identityProviderConfig": {
    "type": {},
    "name": {}
  },
  "clientRequestToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identityProviderConfig|object|true|none|none|
|clientRequestToken|object|false|none|none|

<h2 id="tocS_Provider">Provider</h2>
<!-- backwards compatibility -->
<a id="schemaprovider"></a>
<a id="schema_Provider"></a>
<a id="tocSprovider"></a>
<a id="tocsprovider"></a>

```json
{
  "keyArn": {}
}
```

Identifies the Key Management Service (KMS) key used to encrypt the secrets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keyArn|object|false|none|none|

<h2 id="tocS_ErrorCode">ErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaerrorcode"></a>
<a id="schema_ErrorCode"></a>
<a id="tocSerrorcode"></a>
<a id="tocserrorcode"></a>

```json
"SubnetNotFound"
```

<h2 id="tocS_ErrorDetail">ErrorDetail</h2>
<!-- backwards compatibility -->
<a id="schemaerrordetail"></a>
<a id="schema_ErrorDetail"></a>
<a id="tocSerrordetail"></a>
<a id="tocserrordetail"></a>

```json
{
  "errorCode": {},
  "errorMessage": {},
  "resourceIds": {}
}
```

An object representing an error when an asynchronous operation fails.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorCode|object|false|none|none|
|errorMessage|object|false|none|none|
|resourceIds|object|false|none|none|

<h2 id="tocS_ErrorDetails">ErrorDetails</h2>
<!-- backwards compatibility -->
<a id="schemaerrordetails"></a>
<a id="schema_ErrorDetails"></a>
<a id="tocSerrordetails"></a>
<a id="tocserrordetails"></a>

```json
[
  {
    "errorCode": {},
    "errorMessage": {},
    "resourceIds": {}
  }
]
```

<h2 id="tocS_FargateProfileStatus">FargateProfileStatus</h2>
<!-- backwards compatibility -->
<a id="schemafargateprofilestatus"></a>
<a id="schema_FargateProfileStatus"></a>
<a id="tocSfargateprofilestatus"></a>
<a id="tocsfargateprofilestatus"></a>

```json
"CREATING"
```

<h2 id="tocS_FargateProfileLabel">FargateProfileLabel</h2>
<!-- backwards compatibility -->
<a id="schemafargateprofilelabel"></a>
<a id="schema_FargateProfileLabel"></a>
<a id="tocSfargateprofilelabel"></a>
<a id="tocsfargateprofilelabel"></a>

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

<h2 id="tocS_FargateProfilesRequestMaxResults">FargateProfilesRequestMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemafargateprofilesrequestmaxresults"></a>
<a id="schema_FargateProfilesRequestMaxResults"></a>
<a id="tocSfargateprofilesrequestmaxresults"></a>
<a id="tocsfargateprofilesrequestmaxresults"></a>

```json
1
```

<h2 id="tocS_OIDC">OIDC</h2>
<!-- backwards compatibility -->
<a id="schemaoidc"></a>
<a id="schema_OIDC"></a>
<a id="tocSoidc"></a>
<a id="tocsoidc"></a>

```json
{
  "issuer": {}
}
```

An object representing the <a href="https://openid.net/connect/">OpenID Connect</a> (OIDC) identity provider information for the cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issuer|object|false|none|none|

<h2 id="tocS_OidcIdentityProviderConfig">OidcIdentityProviderConfig</h2>
<!-- backwards compatibility -->
<a id="schemaoidcidentityproviderconfig"></a>
<a id="schema_OidcIdentityProviderConfig"></a>
<a id="tocSoidcidentityproviderconfig"></a>
<a id="tocsoidcidentityproviderconfig"></a>

```json
{
  "identityProviderConfigName": {},
  "identityProviderConfigArn": {},
  "clusterName": {},
  "issuerUrl": {},
  "clientId": {},
  "usernameClaim": {},
  "usernamePrefix": {},
  "groupsClaim": {},
  "groupsPrefix": {},
  "requiredClaims": {
    "property1": "string",
    "property2": "string"
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "status": {}
}
```

An object representing the configuration for an OpenID Connect (OIDC) identity provider.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identityProviderConfigName|object|false|none|none|
|identityProviderConfigArn|object|false|none|none|
|clusterName|object|false|none|none|
|issuerUrl|object|false|none|none|
|clientId|object|false|none|none|
|usernameClaim|object|false|none|none|
|usernamePrefix|object|false|none|none|
|groupsClaim|object|false|none|none|
|groupsPrefix|object|false|none|none|
|requiredClaims|object|false|none|none|
|tags|object|false|none|none|
|status|object|false|none|none|

<h2 id="tocS_IdentityProviderConfigs">IdentityProviderConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaidentityproviderconfigs"></a>
<a id="schema_IdentityProviderConfigs"></a>
<a id="tocSidentityproviderconfigs"></a>
<a id="tocsidentityproviderconfigs"></a>

```json
[
  {
    "type": {},
    "name": {}
  }
]
```

<h2 id="tocS_IncludeClustersList">IncludeClustersList</h2>
<!-- backwards compatibility -->
<a id="schemaincludeclusterslist"></a>
<a id="schema_IncludeClustersList"></a>
<a id="tocSincludeclusterslist"></a>
<a id="tocsincludeclusterslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_NodegroupIssueCode">NodegroupIssueCode</h2>
<!-- backwards compatibility -->
<a id="schemanodegroupissuecode"></a>
<a id="schema_NodegroupIssueCode"></a>
<a id="tocSnodegroupissuecode"></a>
<a id="tocsnodegroupissuecode"></a>

```json
"AutoScalingGroupNotFound"
```

<h2 id="tocS_Issue">Issue</h2>
<!-- backwards compatibility -->
<a id="schemaissue"></a>
<a id="schema_Issue"></a>
<a id="tocSissue"></a>
<a id="tocsissue"></a>

```json
{
  "code": {},
  "message": {},
  "resourceIds": {}
}
```

An object representing an issue with an Amazon EKS resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|object|false|none|none|
|message|object|false|none|none|
|resourceIds|object|false|none|none|

<h2 id="tocS_IssueList">IssueList</h2>
<!-- backwards compatibility -->
<a id="schemaissuelist"></a>
<a id="schema_IssueList"></a>
<a id="tocSissuelist"></a>
<a id="tocsissuelist"></a>

```json
[
  {
    "code": {},
    "message": {},
    "resourceIds": {}
  }
]
```

<h2 id="tocS_ListAddonsRequestMaxResults">ListAddonsRequestMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemalistaddonsrequestmaxresults"></a>
<a id="schema_ListAddonsRequestMaxResults"></a>
<a id="tocSlistaddonsrequestmaxresults"></a>
<a id="tocslistaddonsrequestmaxresults"></a>

```json
1
```

<h2 id="tocS_ListAddonsRequest">ListAddonsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistaddonsrequest"></a>
<a id="schema_ListAddonsRequest"></a>
<a id="tocSlistaddonsrequest"></a>
<a id="tocslistaddonsrequest"></a>

```json
{}
```

<h2 id="tocS_ListClustersRequestMaxResults">ListClustersRequestMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemalistclustersrequestmaxresults"></a>
<a id="schema_ListClustersRequestMaxResults"></a>
<a id="tocSlistclustersrequestmaxresults"></a>
<a id="tocslistclustersrequestmaxresults"></a>

```json
1
```

<h2 id="tocS_ListClustersRequest">ListClustersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistclustersrequest"></a>
<a id="schema_ListClustersRequest"></a>
<a id="tocSlistclustersrequest"></a>
<a id="tocslistclustersrequest"></a>

```json
{}
```

<h2 id="tocS_ListFargateProfilesRequest">ListFargateProfilesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistfargateprofilesrequest"></a>
<a id="schema_ListFargateProfilesRequest"></a>
<a id="tocSlistfargateprofilesrequest"></a>
<a id="tocslistfargateprofilesrequest"></a>

```json
{}
```

<h2 id="tocS_ListIdentityProviderConfigsRequestMaxResults">ListIdentityProviderConfigsRequestMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemalistidentityproviderconfigsrequestmaxresults"></a>
<a id="schema_ListIdentityProviderConfigsRequestMaxResults"></a>
<a id="tocSlistidentityproviderconfigsrequestmaxresults"></a>
<a id="tocslistidentityproviderconfigsrequestmaxresults"></a>

```json
1
```

<h2 id="tocS_ListIdentityProviderConfigsRequest">ListIdentityProviderConfigsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistidentityproviderconfigsrequest"></a>
<a id="schema_ListIdentityProviderConfigsRequest"></a>
<a id="tocSlistidentityproviderconfigsrequest"></a>
<a id="tocslistidentityproviderconfigsrequest"></a>

```json
{}
```

<h2 id="tocS_ListNodegroupsRequestMaxResults">ListNodegroupsRequestMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemalistnodegroupsrequestmaxresults"></a>
<a id="schema_ListNodegroupsRequestMaxResults"></a>
<a id="tocSlistnodegroupsrequestmaxresults"></a>
<a id="tocslistnodegroupsrequestmaxresults"></a>

```json
1
```

<h2 id="tocS_ListNodegroupsRequest">ListNodegroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistnodegroupsrequest"></a>
<a id="schema_ListNodegroupsRequest"></a>
<a id="tocSlistnodegroupsrequest"></a>
<a id="tocslistnodegroupsrequest"></a>

```json
{}
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

<h2 id="tocS_ListUpdatesRequestMaxResults">ListUpdatesRequestMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemalistupdatesrequestmaxresults"></a>
<a id="schema_ListUpdatesRequestMaxResults"></a>
<a id="tocSlistupdatesrequestmaxresults"></a>
<a id="tocslistupdatesrequestmaxresults"></a>

```json
1
```

<h2 id="tocS_ListUpdatesRequest">ListUpdatesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistupdatesrequest"></a>
<a id="schema_ListUpdatesRequest"></a>
<a id="tocSlistupdatesrequest"></a>
<a id="tocslistupdatesrequest"></a>

```json
{}
```

<h2 id="tocS_LogTypes">LogTypes</h2>
<!-- backwards compatibility -->
<a id="schemalogtypes"></a>
<a id="schema_LogTypes"></a>
<a id="tocSlogtypes"></a>
<a id="tocslogtypes"></a>

```json
[
  "api"
]
```

<h2 id="tocS_LogSetup">LogSetup</h2>
<!-- backwards compatibility -->
<a id="schemalogsetup"></a>
<a id="schema_LogSetup"></a>
<a id="tocSlogsetup"></a>
<a id="tocslogsetup"></a>

```json
{
  "types": {},
  "enabled": {}
}
```

An object representing the enabled or disabled Kubernetes control plane logs for your cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|types|object|false|none|none|
|enabled|object|false|none|none|

<h2 id="tocS_LogType">LogType</h2>
<!-- backwards compatibility -->
<a id="schemalogtype"></a>
<a id="schema_LogType"></a>
<a id="tocSlogtype"></a>
<a id="tocslogtype"></a>

```json
"api"
```

<h2 id="tocS_NodegroupStatus">NodegroupStatus</h2>
<!-- backwards compatibility -->
<a id="schemanodegroupstatus"></a>
<a id="schema_NodegroupStatus"></a>
<a id="tocSnodegroupstatus"></a>
<a id="tocsnodegroupstatus"></a>

```json
"CREATING"
```

<h2 id="tocS_NodegroupResources">NodegroupResources</h2>
<!-- backwards compatibility -->
<a id="schemanodegroupresources"></a>
<a id="schema_NodegroupResources"></a>
<a id="tocSnodegroupresources"></a>
<a id="tocsnodegroupresources"></a>

```json
{
  "autoScalingGroups": {},
  "remoteAccessSecurityGroup": {}
}
```

An object representing the resources associated with the node group, such as Auto Scaling groups and security groups for remote access.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoScalingGroups|object|false|none|none|
|remoteAccessSecurityGroup|object|false|none|none|

<h2 id="tocS_NodegroupHealth">NodegroupHealth</h2>
<!-- backwards compatibility -->
<a id="schemanodegrouphealth"></a>
<a id="schema_NodegroupHealth"></a>
<a id="tocSnodegrouphealth"></a>
<a id="tocsnodegrouphealth"></a>

```json
{
  "issues": {}
}
```

An object representing the health status of the node group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issues|object|false|none|none|

<h2 id="tocS_configStatus">configStatus</h2>
<!-- backwards compatibility -->
<a id="schemaconfigstatus"></a>
<a id="schema_configStatus"></a>
<a id="tocSconfigstatus"></a>
<a id="tocsconfigstatus"></a>

```json
"CREATING"
```

<h2 id="tocS_RegisterClusterRequest">RegisterClusterRequest</h2>
<!-- backwards compatibility -->
<a id="schemaregisterclusterrequest"></a>
<a id="schema_RegisterClusterRequest"></a>
<a id="tocSregisterclusterrequest"></a>
<a id="tocsregisterclusterrequest"></a>

```json
{
  "name": {},
  "connectorConfig": {
    "roleArn": {},
    "provider": {}
  },
  "clientRequestToken": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|connectorConfig|object|true|none|none|
|clientRequestToken|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_TagKeyList">TagKeyList</h2>
<!-- backwards compatibility -->
<a id="schematagkeylist"></a>
<a id="schema_TagKeyList"></a>
<a id="tocStagkeylist"></a>
<a id="tocstagkeylist"></a>

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|true|none|none|

<h2 id="tocS_taintKey">taintKey</h2>
<!-- backwards compatibility -->
<a id="schemataintkey"></a>
<a id="schema_taintKey"></a>
<a id="tocStaintkey"></a>
<a id="tocstaintkey"></a>

```json
"string"
```

<h2 id="tocS_taintValue">taintValue</h2>
<!-- backwards compatibility -->
<a id="schemataintvalue"></a>
<a id="schema_taintValue"></a>
<a id="tocStaintvalue"></a>
<a id="tocstaintvalue"></a>

```json
"string"
```

<h2 id="tocS_TaintEffect">TaintEffect</h2>
<!-- backwards compatibility -->
<a id="schematainteffect"></a>
<a id="schema_TaintEffect"></a>
<a id="tocStainteffect"></a>
<a id="tocstainteffect"></a>

```json
"NO_SCHEDULE"
```

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

<h2 id="tocS_UpdateStatus">UpdateStatus</h2>
<!-- backwards compatibility -->
<a id="schemaupdatestatus"></a>
<a id="schema_UpdateStatus"></a>
<a id="tocSupdatestatus"></a>
<a id="tocsupdatestatus"></a>

```json
"InProgress"
```

<h2 id="tocS_UpdateType">UpdateType</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetype"></a>
<a id="schema_UpdateType"></a>
<a id="tocSupdatetype"></a>
<a id="tocsupdatetype"></a>

```json
"VersionUpdate"
```

<h2 id="tocS_UpdateParams">UpdateParams</h2>
<!-- backwards compatibility -->
<a id="schemaupdateparams"></a>
<a id="schema_UpdateParams"></a>
<a id="tocSupdateparams"></a>
<a id="tocsupdateparams"></a>

```json
[
  {
    "type": {},
    "value": {}
  }
]
```

<h2 id="tocS_UpdateAddonRequest">UpdateAddonRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateaddonrequest"></a>
<a id="schema_UpdateAddonRequest"></a>
<a id="tocSupdateaddonrequest"></a>
<a id="tocsupdateaddonrequest"></a>

```json
{
  "addonVersion": {},
  "serviceAccountRoleArn": {},
  "resolveConflicts": {},
  "clientRequestToken": {},
  "configurationValues": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addonVersion|object|false|none|none|
|serviceAccountRoleArn|object|false|none|none|
|resolveConflicts|object|false|none|none|
|clientRequestToken|object|false|none|none|
|configurationValues|object|false|none|none|

<h2 id="tocS_UpdateClusterConfigRequest">UpdateClusterConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateclusterconfigrequest"></a>
<a id="schema_UpdateClusterConfigRequest"></a>
<a id="tocSupdateclusterconfigrequest"></a>
<a id="tocsupdateclusterconfigrequest"></a>

```json
{
  "resourcesVpcConfig": {
    "subnetIds": {},
    "securityGroupIds": {},
    "endpointPublicAccess": {},
    "endpointPrivateAccess": {},
    "publicAccessCidrs": {}
  },
  "logging": {
    "clusterLogging": {}
  },
  "clientRequestToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourcesVpcConfig|[VpcConfigRequest](#schemavpcconfigrequest)|false|none|An object representing the VPC configuration to use for an Amazon EKS cluster.|
|logging|object|false|none|none|
|clientRequestToken|object|false|none|none|

<h2 id="tocS_UpdateClusterVersionRequest">UpdateClusterVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateclusterversionrequest"></a>
<a id="schema_UpdateClusterVersionRequest"></a>
<a id="tocSupdateclusterversionrequest"></a>
<a id="tocsupdateclusterversionrequest"></a>

```json
{
  "version": {},
  "clientRequestToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|object|true|none|none|
|clientRequestToken|object|false|none|none|

<h2 id="tocS_UpdateLabelsPayload">UpdateLabelsPayload</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelabelspayload"></a>
<a id="schema_UpdateLabelsPayload"></a>
<a id="tocSupdatelabelspayload"></a>
<a id="tocsupdatelabelspayload"></a>

```json
{
  "addOrUpdateLabels": {
    "property1": "string",
    "property2": "string"
  },
  "removeLabels": {}
}
```

An object representing a Kubernetes label change for a managed node group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addOrUpdateLabels|object|false|none|none|
|removeLabels|object|false|none|none|

<h2 id="tocS_UpdateTaintsPayload">UpdateTaintsPayload</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetaintspayload"></a>
<a id="schema_UpdateTaintsPayload"></a>
<a id="tocSupdatetaintspayload"></a>
<a id="tocsupdatetaintspayload"></a>

```json
{
  "addOrUpdateTaints": {},
  "removeTaints": {}
}
```

An object representing the details of an update to a taints payload. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/node-taints-managed-node-groups.html">Node taints on managed node groups</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addOrUpdateTaints|object|false|none|none|
|removeTaints|object|false|none|none|

<h2 id="tocS_UpdateNodegroupConfigRequest">UpdateNodegroupConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatenodegroupconfigrequest"></a>
<a id="schema_UpdateNodegroupConfigRequest"></a>
<a id="tocSupdatenodegroupconfigrequest"></a>
<a id="tocsupdatenodegroupconfigrequest"></a>

```json
{
  "labels": {
    "addOrUpdateLabels": {
      "property1": "string",
      "property2": "string"
    },
    "removeLabels": {}
  },
  "taints": {
    "addOrUpdateTaints": {},
    "removeTaints": {}
  },
  "scalingConfig": {
    "minSize": {},
    "maxSize": {},
    "desiredSize": {}
  },
  "updateConfig": {
    "maxUnavailable": {},
    "maxUnavailablePercentage": {}
  },
  "clientRequestToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labels|object|false|none|none|
|taints|object|false|none|none|
|scalingConfig|object|false|none|none|
|updateConfig|object|false|none|none|
|clientRequestToken|object|false|none|none|

<h2 id="tocS_UpdateNodegroupVersionRequest">UpdateNodegroupVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatenodegroupversionrequest"></a>
<a id="schema_UpdateNodegroupVersionRequest"></a>
<a id="tocSupdatenodegroupversionrequest"></a>
<a id="tocsupdatenodegroupversionrequest"></a>

```json
{
  "version": {},
  "releaseVersion": {},
  "launchTemplate": {
    "name": {},
    "version": {},
    "id": {}
  },
  "force": {},
  "clientRequestToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|object|false|none|none|
|releaseVersion|object|false|none|none|
|launchTemplate|object|false|none|none|
|force|object|false|none|none|
|clientRequestToken|object|false|none|none|

<h2 id="tocS_UpdateParamType">UpdateParamType</h2>
<!-- backwards compatibility -->
<a id="schemaupdateparamtype"></a>
<a id="schema_UpdateParamType"></a>
<a id="tocSupdateparamtype"></a>
<a id="tocsupdateparamtype"></a>

```json
"Version"
```

<h2 id="tocS_UpdateParam">UpdateParam</h2>
<!-- backwards compatibility -->
<a id="schemaupdateparam"></a>
<a id="schema_UpdateParam"></a>
<a id="tocSupdateparam"></a>
<a id="tocsupdateparam"></a>

```json
{
  "type": {},
  "value": {}
}
```

An object representing the details of an update request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|false|none|none|
|value|object|false|none|none|

<h2 id="tocS_labelKey">labelKey</h2>
<!-- backwards compatibility -->
<a id="schemalabelkey"></a>
<a id="schema_labelKey"></a>
<a id="tocSlabelkey"></a>
<a id="tocslabelkey"></a>

```json
"string"
```

<h2 id="tocS_requiredClaimsKey">requiredClaimsKey</h2>
<!-- backwards compatibility -->
<a id="schemarequiredclaimskey"></a>
<a id="schema_requiredClaimsKey"></a>
<a id="tocSrequiredclaimskey"></a>
<a id="tocsrequiredclaimskey"></a>

```json
"string"
```

<h2 id="tocS_requiredClaimsValue">requiredClaimsValue</h2>
<!-- backwards compatibility -->
<a id="schemarequiredclaimsvalue"></a>
<a id="schema_requiredClaimsValue"></a>
<a id="tocSrequiredclaimsvalue"></a>
<a id="tocsrequiredclaimsvalue"></a>

```json
"string"
```
