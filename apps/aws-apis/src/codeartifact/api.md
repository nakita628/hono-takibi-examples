<h1 id="codeartifact">CodeArtifact v2018-09-22</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p> CodeArtifact is a fully managed artifact repository compatible with language-native package managers and build tools such as npm, Apache Maven, pip, and dotnet. You can use CodeArtifact to share packages with development teams and pull packages. Packages can be pulled from both public and CodeArtifact repositories. You can also create an upstream relationship between a CodeArtifact repository and another repository, which effectively merges their contents from the point of view of a package manager client. </p> <p> <b>CodeArtifact Components</b> </p> <p>Use the information in this guide to help you work with the following CodeArtifact components:</p> <ul> <li> <p> <b>Repository</b>: A CodeArtifact repository contains a set of <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/welcome.html#welcome-concepts-package-version">package versions</a>, each of which maps to a set of assets, or files. Repositories are polyglot, so a single repository can contain packages of any supported type. Each repository exposes endpoints for fetching and publishing packages using tools like the <b> <code>npm</code> </b> CLI, the Maven CLI (<b> <code>mvn</code> </b>), Python CLIs (<b> <code>pip</code> </b> and <code>twine</code>), and NuGet CLIs (<code>nuget</code> and <code>dotnet</code>).</p> </li> <li> <p> <b>Domain</b>: Repositories are aggregated into a higher-level entity known as a <i>domain</i>. All package assets and metadata are stored in the domain, but are consumed through repositories. A given package asset, such as a Maven JAR file, is stored once per domain, no matter how many repositories it's present in. All of the assets and metadata in a domain are encrypted with the same customer master key (CMK) stored in Key Management Service (KMS).</p> <p>Each repository is a member of a single domain and can't be moved to a different domain.</p> <p>The domain allows organizational policy to be applied across multiple repositories, such as which accounts can access repositories in the domain, and which public repositories can be used as sources of packages.</p> <p>Although an organization can have multiple domains, we recommend a single production domain that contains all published artifacts so that teams can find and share packages across their organization.</p> </li> <li> <p> <b>Package</b>: A <i>package</i> is a bundle of software and the metadata required to resolve dependencies and install the software. CodeArtifact supports <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/using-npm.html">npm</a>, <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/using-python.html">PyPI</a>, <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/using-maven">Maven</a>, and <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/using-nuget">NuGet</a> package formats.</p> <p>In CodeArtifact, a package consists of:</p> <ul> <li> <p>A <i>name</i> (for example, <code>webpack</code> is the name of a popular npm package)</p> </li> <li> <p>An optional namespace (for example, <code>@types</code> in <code>@types/node</code>)</p> </li> <li> <p>A set of versions (for example, <code>1.0.0</code>, <code>1.0.1</code>, <code>1.0.2</code>, etc.)</p> </li> <li> <p> Package-level metadata (for example, npm tags)</p> </li> </ul> </li> <li> <p> <b>Package version</b>: A version of a package, such as <code>@types/node 12.6.9</code>. The version number format and semantics vary for different package formats. For example, npm package versions must conform to the <a href="https://semver.org/">Semantic Versioning specification</a>. In CodeArtifact, a package version consists of the version identifier, metadata at the package version level, and a set of assets.</p> </li> <li> <p> <b>Upstream repository</b>: One repository is <i>upstream</i> of another when the package versions in it can be accessed from the repository endpoint of the downstream repository, effectively merging the contents of the two repositories from the point of view of a client. CodeArtifact allows creating an upstream relationship between two repositories.</p> </li> <li> <p> <b>Asset</b>: An individual file stored in CodeArtifact associated with a package version, such as an npm <code>.tgz</code> file or Maven POM and JAR files.</p> </li> </ul> <p>CodeArtifact supports these operations:</p> <ul> <li> <p> <code>AssociateExternalConnection</code>: Adds an existing external connection to a repository. </p> </li> <li> <p> <code>CopyPackageVersions</code>: Copies package versions from one repository to another repository in the same domain.</p> </li> <li> <p> <code>CreateDomain</code>: Creates a domain</p> </li> <li> <p> <code>CreateRepository</code>: Creates a CodeArtifact repository in a domain. </p> </li> <li> <p> <code>DeleteDomain</code>: Deletes a domain. You cannot delete a domain that contains repositories. </p> </li> <li> <p> <code>DeleteDomainPermissionsPolicy</code>: Deletes the resource policy that is set on a domain.</p> </li> <li> <p> <code>DeletePackage</code>: Deletes a package and all associated package versions.</p> </li> <li> <p> <code>DeletePackageVersions</code>: Deletes versions of a package. After a package has been deleted, it can be republished, but its assets and metadata cannot be restored because they have been permanently removed from storage.</p> </li> <li> <p> <code>DeleteRepository</code>: Deletes a repository. </p> </li> <li> <p> <code>DeleteRepositoryPermissionsPolicy</code>: Deletes the resource policy that is set on a repository.</p> </li> <li> <p> <code>DescribeDomain</code>: Returns a <code>DomainDescription</code> object that contains information about the requested domain.</p> </li> <li> <p> <code>DescribePackage</code>: Returns a <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageDescription.html">PackageDescription</a> object that contains details about a package. </p> </li> <li> <p> <code>DescribePackageVersion</code>: Returns a <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionDescription.html">PackageVersionDescription</a> object that contains details about a package version. </p> </li> <li> <p> <code>DescribeRepository</code>: Returns a <code>RepositoryDescription</code> object that contains detailed information about the requested repository. </p> </li> <li> <p> <code>DisposePackageVersions</code>: Disposes versions of a package. A package version with the status <code>Disposed</code> cannot be restored because they have been permanently removed from storage.</p> </li> <li> <p> <code>DisassociateExternalConnection</code>: Removes an existing external connection from a repository. </p> </li> <li> <p> <code>GetAuthorizationToken</code>: Generates a temporary authorization token for accessing repositories in the domain. The token expires the authorization period has passed. The default authorization period is 12 hours and can be customized to any length with a maximum of 12 hours.</p> </li> <li> <p> <code>GetDomainPermissionsPolicy</code>: Returns the policy of a resource that is attached to the specified domain. </p> </li> <li> <p> <code>GetPackageVersionAsset</code>: Returns the contents of an asset that is in a package version. </p> </li> <li> <p> <code>GetPackageVersionReadme</code>: Gets the readme file or descriptive text for a package version.</p> </li> <li> <p> <code>GetRepositoryEndpoint</code>: Returns the endpoint of a repository for a specific package format. A repository has one endpoint for each package format: </p> <ul> <li> <p> <code>maven</code> </p> </li> <li> <p> <code>npm</code> </p> </li> <li> <p> <code>nuget</code> </p> </li> <li> <p> <code>pypi</code> </p> </li> </ul> </li> <li> <p> <code>GetRepositoryPermissionsPolicy</code>: Returns the resource policy that is set on a repository. </p> </li> <li> <p> <code>ListDomains</code>: Returns a list of <code>DomainSummary</code> objects. Each returned <code>DomainSummary</code> object contains information about a domain.</p> </li> <li> <p> <code>ListPackages</code>: Lists the packages in a repository.</p> </li> <li> <p> <code>ListPackageVersionAssets</code>: Lists the assets for a given package version.</p> </li> <li> <p> <code>ListPackageVersionDependencies</code>: Returns a list of the direct dependencies for a package version. </p> </li> <li> <p> <code>ListPackageVersions</code>: Returns a list of package versions for a specified package in a repository.</p> </li> <li> <p> <code>ListRepositories</code>: Returns a list of repositories owned by the Amazon Web Services account that called this method.</p> </li> <li> <p> <code>ListRepositoriesInDomain</code>: Returns a list of the repositories in a domain.</p> </li> <li> <p> <code>PublishPackageVersion</code>: Creates a new package version containing one or more assets.</p> </li> <li> <p> <code>PutDomainPermissionsPolicy</code>: Attaches a resource policy to a domain.</p> </li> <li> <p> <code>PutPackageOriginConfiguration</code>: Sets the package origin configuration for a package, which determine how new versions of the package can be added to a specific repository.</p> </li> <li> <p> <code>PutRepositoryPermissionsPolicy</code>: Sets the resource policy on a repository that specifies permissions to access it. </p> </li> <li> <p> <code>UpdatePackageVersionsStatus</code>: Updates the status of one or more versions of a package.</p> </li> <li> <p> <code>UpdateRepository</code>: Updates the properties of a repository.</p> </li> </ul>

Base URLs:

* <a href="http://codeartifact.us-east-1.amazonaws.com">http://codeartifact.us-east-1.amazonaws.com</a> - The CodeArtifact multi-region endpoint

* <a href="https://codeartifact.us-east-1.amazonaws.com">https://codeartifact.us-east-1.amazonaws.com</a> - The CodeArtifact multi-region endpoint

* <a href="http://codeartifact.cn-north-1.amazonaws.com.cn">http://codeartifact.cn-north-1.amazonaws.com.cn</a> - The CodeArtifact endpoint for China (Beijing) and China (Ningxia)

* <a href="https://codeartifact.cn-north-1.amazonaws.com.cn">https://codeartifact.cn-north-1.amazonaws.com.cn</a> - The CodeArtifact endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/codeartifact/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="codeartifact-default">Default</h1>

## AssociateExternalConnection

<a id="opIdAssociateExternalConnection"></a>

> Code samples

```bash
curl 'https://codeartifact.us-east-1.amazonaws.com/v1/repository/external-connection#domain&repository&external-connection?domain=string&repository=string&external-connection=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /v1/repository/external-connection#domain&repository&external-connection`

<p>Adds an existing external connection to a repository. One external connection is allowed per repository.</p> <note> <p>A repository can have one or more upstream repositories, or an external connection.</p> </note>

<h3 id="associateexternalconnection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|query|string|true|The name of the domain that contains the repository.|
|domain-owner|query|string|false| The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. |
|repository|query|string|true| The name of the repository to which the external connection is added. |
|external-connection|query|string|true|<p> The name of the external connection to add to the repository. The following values are supported: </p> <ul> <li> <p> <code>public:npmjs</code> - for the npm public repository. </p> </li> <li> <p> <code>public:nuget-org</code> - for the NuGet Gallery. </p> </li> <li> <p> <code>public:pypi</code> - for the Python Package Index. </p> </li> <li> <p> <code>public:maven-central</code> - for Maven Central. </p> </li> <li> <p> <code>public:maven-googleandroid</code> - for the Google Android repository. </p> </li> <li> <p> <code>public:maven-gradleplugins</code> - for the Gradle plugins repository. </p> </li> <li> <p> <code>public:maven-commonsware</code> - for the CommonsWare Android repository. </p> </li> <li> <p> <code>public:maven-clojars</code> - for the Clojars repository. </p> </li> </ul>|
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
  "repository": {
    "name": {},
    "administratorAccount": {},
    "domainName": {},
    "domainOwner": {},
    "arn": {},
    "description": {},
    "upstreams": {},
    "externalConnections": {},
    "createdTime": {}
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

<h3 id="associateexternalconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateExternalConnectionResult](#schemaassociateexternalconnectionresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateExternalConnection

<a id="opIdDisassociateExternalConnection"></a>

> Code samples

```bash
curl 'https://codeartifact.us-east-1.amazonaws.com/v1/repository/external-connection#domain&repository&external-connection?domain=string&repository=string&external-connection=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/repository/external-connection#domain&repository&external-connection`

 Removes an existing external connection from a repository. 

<h3 id="disassociateexternalconnection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|query|string|true|The name of the domain that contains the repository from which to remove the external repository. |
|domain-owner|query|string|false| The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. |
|repository|query|string|true|The name of the repository from which the external connection will be removed. |
|external-connection|query|string|true|The name of the external connection to be removed from the repository. |
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
  "repository": {
    "name": {},
    "administratorAccount": {},
    "domainName": {},
    "domainOwner": {},
    "arn": {},
    "description": {},
    "upstreams": {},
    "externalConnections": {},
    "createdTime": {}
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

<h3 id="disassociateexternalconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateExternalConnectionResult](#schemadisassociateexternalconnectionresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CopyPackageVersions

<a id="opIdCopyPackageVersions"></a>

> Code samples

```bash
curl 'https://codeartifact.us-east-1.amazonaws.com/v1/package/versions/copy#domain&source-repository&destination-repository&format&package?domain=string&source-repository=string&destination-repository=string&format=npm&package=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "versions": [
      "string"
    ],
    "versionRevisions": {
      "property1": "string",
      "property2": "string"
    },
    "allowOverwrite": true,
    "includeFromUpstream": true
  }'
```

`POST /v1/package/versions/copy#domain&source-repository&destination-repository&format&package`

<p> Copies package versions from one repository to another repository in the same domain. </p> <note> <p> You must specify <code>versions</code> or <code>versionRevisions</code>. You cannot specify both. </p> </note>

> Body parameter

```json
{
  "versions": [
    "string"
  ],
  "versionRevisions": {
    "property1": "string",
    "property2": "string"
  },
  "allowOverwrite": true,
  "includeFromUpstream": true
}
```

<h3 id="copypackageversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|query|string|true| The name of the domain that contains the source and destination repositories. |
|domain-owner|query|string|false| The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. |
|source-repository|query|string|true| The name of the repository that contains the package versions to be copied. |
|destination-repository|query|string|true| The name of the repository into which package versions are copied. |
|format|query|string|true| The format of the package versions to be copied. |
|namespace|query|string|false|<p>The namespace of the package versions to be copied. The package version component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package version is its <code>groupId</code>. The namespace is required when copying Maven package versions. </p> </li> <li> <p> The namespace of an npm package version is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet package versions do not contain a corresponding component, package versions of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>|
|package|query|string|true| The name of the package that contains the versions to be copied. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» versions|body|[[PackageVersion](#schemapackageversion)]|false|<p> The versions of the package to be copied. </p> <note> <p> You must specify <code>versions</code> or <code>versionRevisions</code>. You cannot specify both. </p> </note>|
|» versionRevisions|body|object|false|<p> A list of key-value pairs. The keys are package versions and the values are package version revisions. A <code>CopyPackageVersion</code> operation succeeds if the specified versions in the source repository match the specified package version revision. </p> <note> <p> You must specify <code>versions</code> or <code>versionRevisions</code>. You cannot specify both. </p> </note>|
|» » **additionalProperties**|body|[PackageVersionRevision](#schemapackageversionrevision)|false|none|
|» allowOverwrite|body|boolean|false| Set to true to overwrite a package version that already exists in the destination repository. If set to false and the package version already exists in the destination repository, the package version is returned in the <code>failedVersions</code> field of the response with an <code>ALREADY_EXISTS</code> error code. |
|» includeFromUpstream|body|boolean|false| Set to true to copy packages from repositories that are upstream from the source repository to the destination repository. The default setting is false. For more information, see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html">Working with upstream repositories</a>. |

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|npm|
|format|pypi|
|format|maven|
|format|nuget|
|format|generic|

> Example responses

> 200 Response

```json
{
  "successfulVersions": {
    "property1": {
      "revision": {},
      "status": {}
    },
    "property2": {
      "revision": {},
      "status": {}
    }
  },
  "failedVersions": {
    "property1": {
      "errorCode": {},
      "errorMessage": {}
    },
    "property2": {
      "errorCode": {},
      "errorMessage": {}
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

<h3 id="copypackageversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CopyPackageVersionsResult](#schemacopypackageversionsresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDomain

<a id="opIdDescribeDomain"></a>

> Code samples

```bash
curl 'https://codeartifact.us-east-1.amazonaws.com/v1/domain#domain?domain=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/domain#domain`

 Returns a <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DomainDescription.html">DomainDescription</a> object that contains information about the requested domain. 

<h3 id="describedomain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|query|string|true| A string that specifies the name of the requested domain. |
|domain-owner|query|string|false| The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. |
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
  "domain": {
    "name": {},
    "owner": {},
    "arn": {},
    "status": {},
    "createdTime": {},
    "encryptionKey": {},
    "repositoryCount": {},
    "assetSizeBytes": {},
    "s3BucketArn": {}
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

<h3 id="describedomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDomainResult](#schemadescribedomainresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDomain

<a id="opIdCreateDomain"></a>

> Code samples

```bash
curl 'https://codeartifact.us-east-1.amazonaws.com/v1/domain#domain?domain=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "encryptionKey": "string",
    "tags": [
      {
        "key": {},
        "value": {}
      }
    ]
  }'
```

`POST /v1/domain#domain`

<p> Creates a domain. CodeArtifact <i>domains</i> make it easier to manage multiple repositories across an organization. You can use a domain to apply permissions across many repositories owned by different Amazon Web Services accounts. An asset is stored only once in a domain, even if it's in multiple repositories. </p> <p>Although you can have multiple domains, we recommend a single production domain that contains all published artifacts so that your development teams can find and share packages. You can use a second pre-production domain to test changes to the production domain configuration. </p>

> Body parameter

```json
{
  "encryptionKey": "string",
  "tags": [
    {
      "key": {},
      "value": {}
    }
  ]
}
```

<h3 id="createdomain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|query|string|true| The name of the domain to create. All domain names in an Amazon Web Services Region that are in the same Amazon Web Services account must be unique. The domain name is used as the prefix in DNS hostnames. Do not use sensitive information in a domain name because it is publicly discoverable. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» encryptionKey|body|string|false|<p> The encryption key for the domain. This is used to encrypt content stored in a domain. An encryption key can be a key ID, a key Amazon Resource Name (ARN), a key alias, or a key alias ARN. To specify an <code>encryptionKey</code>, your IAM role must have <code>kms:DescribeKey</code> and <code>kms:CreateGrant</code> permissions on the encryption key that is used. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestSyntax">DescribeKey</a> in the <i>Key Management Service API Reference</i> and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">Key Management Service API Permissions Reference</a> in the <i>Key Management Service Developer Guide</i>. </p> <important> <p> CodeArtifact supports only symmetric CMKs. Do not associate an asymmetric CMK with your domain. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using symmetric and asymmetric keys</a> in the <i>Key Management Service Developer Guide</i>. </p> </important>|
|» tags|body|[[Tag](#schematag)]|false|One or more tag key-value pairs for the domain.|

> Example responses

> 200 Response

```json
{
  "domain": {
    "name": {},
    "owner": {},
    "arn": {},
    "status": {},
    "createdTime": {},
    "encryptionKey": {},
    "repositoryCount": {},
    "assetSizeBytes": {},
    "s3BucketArn": {}
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

<h3 id="createdomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDomainResult](#schemacreatedomainresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDomain

<a id="opIdDeleteDomain"></a>

> Code samples

```bash
curl 'https://codeartifact.us-east-1.amazonaws.com/v1/domain#domain?domain=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/domain#domain`

 Deletes a domain. You cannot delete a domain that contains repositories. If you want to delete a domain with repositories, first delete its repositories. 

<h3 id="deletedomain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|query|string|true| The name of the domain to delete. |
|domain-owner|query|string|false| The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. |
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
  "domain": {
    "name": {},
    "owner": {},
    "arn": {},
    "status": {},
    "createdTime": {},
    "encryptionKey": {},
    "repositoryCount": {},
    "assetSizeBytes": {},
    "s3BucketArn": {}
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

<h3 id="deletedomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDomainResult](#schemadeletedomainresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeRepository

<a id="opIdDescribeRepository"></a>

> Code samples

```bash
curl 'https://codeartifact.us-east-1.amazonaws.com/v1/repository#domain&repository?domain=string&repository=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/repository#domain&repository`

 Returns a <code>RepositoryDescription</code> object that contains detailed information about the requested repository. 

<h3 id="describerepository-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|query|string|true| The name of the domain that contains the repository to describe. |
|domain-owner|query|string|false| The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. |
|repository|query|string|true| A string that specifies the name of the requested repository. |
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
  "repository": {
    "name": {},
    "administratorAccount": {},
    "domainName": {},
    "domainOwner": {},
    "arn": {},
    "description": {},
    "upstreams": {},
    "externalConnections": {},
    "createdTime": {}
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

<h3 id="describerepository-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeRepositoryResult](#schemadescriberepositoryresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRepository

<a id="opIdUpdateRepository"></a>

> Code samples

```bash
curl 'https://codeartifact.us-east-1.amazonaws.com/v1/repository#domain&repository?domain=string&repository=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "upstreams": [
      {
        "repositoryName": {}
      }
    ]
  }'
```

`PUT /v1/repository#domain&repository`

 Update the properties of a repository. 

> Body parameter

```json
{
  "description": "string",
  "upstreams": [
    {
      "repositoryName": {}
    }
  ]
}
```

<h3 id="updaterepository-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|query|string|true| The name of the domain associated with the repository to update. |
|domain-owner|query|string|false| The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. |
|repository|query|string|true| The name of the repository to update. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» description|body|string|false| An updated repository description. |
|» upstreams|body|[[UpstreamRepository](#schemaupstreamrepository)]|false| A list of upstream repositories to associate with the repository. The order of the upstream repositories in the list determines their priority order when CodeArtifact looks for a requested package version. For more information, see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html">Working with upstream repositories</a>. |

> Example responses

> 200 Response

```json
{
  "repository": {
    "name": {},
    "administratorAccount": {},
    "domainName": {},
    "domainOwner": {},
    "arn": {},
    "description": {},
    "upstreams": {},
    "externalConnections": {},
    "createdTime": {}
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

<h3 id="updaterepository-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateRepositoryResult](#schemaupdaterepositoryresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateRepository

<a id="opIdCreateRepository"></a>

> Code samples

```bash
curl 'https://codeartifact.us-east-1.amazonaws.com/v1/repository#domain&repository?domain=string&repository=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "upstreams": [
      {
        "repositoryName": {}
      }
    ],
    "tags": [
      {
        "key": {},
        "value": {}
      }
    ]
  }'
```

`POST /v1/repository#domain&repository`

 Creates a repository. 

> Body parameter

```json
{
  "description": "string",
  "upstreams": [
    {
      "repositoryName": {}
    }
  ],
  "tags": [
    {
      "key": {},
      "value": {}
    }
  ]
}
```

<h3 id="createrepository-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|query|string|true| The name of the domain that contains the created repository. |
|domain-owner|query|string|false| The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. |
|repository|query|string|true| The name of the repository to create. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» description|body|string|false| A description of the created repository. |
|» upstreams|body|[[UpstreamRepository](#schemaupstreamrepository)]|false| A list of upstream repositories to associate with the repository. The order of the upstream repositories in the list determines their priority order when CodeArtifact looks for a requested package version. For more information, see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html">Working with upstream repositories</a>. |
|» tags|body|[[Tag](#schematag)]|false|One or more tag key-value pairs for the repository.|

> Example responses

> 200 Response

```json
{
  "repository": {
    "name": {},
    "administratorAccount": {},
    "domainName": {},
    "domainOwner": {},
    "arn": {},
    "description": {},
    "upstreams": {},
    "externalConnections": {},
    "createdTime": {}
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

<h3 id="createrepository-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateRepositoryResult](#schemacreaterepositoryresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRepository

<a id="opIdDeleteRepository"></a>

> Code samples

```bash
curl 'https://codeartifact.us-east-1.amazonaws.com/v1/repository#domain&repository?domain=string&repository=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/repository#domain&repository`

 Deletes a repository. 

<h3 id="deleterepository-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|query|string|true| The name of the domain that contains the repository to delete. |
|domain-owner|query|string|false| The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. |
|repository|query|string|true| The name of the repository to delete. |
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
  "repository": {
    "name": {},
    "administratorAccount": {},
    "domainName": {},
    "domainOwner": {},
    "arn": {},
    "description": {},
    "upstreams": {},
    "externalConnections": {},
    "createdTime": {}
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

<h3 id="deleterepository-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteRepositoryResult](#schemadeleterepositoryresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDomainPermissionsPolicy

<a id="opIdGetDomainPermissionsPolicy"></a>

> Code samples

```bash
curl 'https://codeartifact.us-east-1.amazonaws.com/v1/domain/permissions/policy#domain?domain=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/domain/permissions/policy#domain`

<p> Returns the resource policy attached to the specified domain. </p> <note> <p> The policy is a resource-based policy, not an identity-based policy. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html">Identity-based policies and resource-based policies </a> in the <i>IAM User Guide</i>. </p> </note>

<h3 id="getdomainpermissionspolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|query|string|true| The name of the domain to which the resource policy is attached. |
|domain-owner|query|string|false| The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. |
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
  "policy": {
    "resourceArn": {},
    "revision": {},
    "document": {}
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

<h3 id="getdomainpermissionspolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDomainPermissionsPolicyResult](#schemagetdomainpermissionspolicyresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDomainPermissionsPolicy

<a id="opIdDeleteDomainPermissionsPolicy"></a>

> Code samples

```bash
curl 'https://codeartifact.us-east-1.amazonaws.com/v1/domain/permissions/policy#domain?domain=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/domain/permissions/policy#domain`

 Deletes the resource policy set on a domain. 

<h3 id="deletedomainpermissionspolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|query|string|true| The name of the domain associated with the resource policy to be deleted. |
|domain-owner|query|string|false| The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. |
|policy-revision|query|string|false| The current revision of the resource policy to be deleted. This revision is used for optimistic locking, which prevents others from overwriting your changes to the domain's resource policy. |
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
  "policy": {
    "resourceArn": {},
    "revision": {},
    "document": {}
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

<h3 id="deletedomainpermissionspolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDomainPermissionsPolicyResult](#schemadeletedomainpermissionspolicyresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribePackage

<a id="opIdDescribePackage"></a>

> Code samples

```bash
curl 'https://codeartifact.us-east-1.amazonaws.com/v1/package#domain&repository&format&package?domain=string&repository=string&format=npm&package=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/package#domain&repository&format&package`

 Returns a <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageDescription.html">PackageDescription</a> object that contains information about the requested package.

<h3 id="describepackage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|query|string|true|The name of the domain that contains the repository that contains the package.|
|domain-owner|query|string|false| The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. |
|repository|query|string|true|The name of the repository that contains the requested package. |
|format|query|string|true|A format that specifies the type of the requested package.|
|namespace|query|string|false|<p>The namespace of the requested package. The package component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package is its <code>groupId</code>. The namespace is required when requesting Maven packages. </p> </li> <li> <p> The namespace of an npm package is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet packages do not contain a corresponding component, packages of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>|
|package|query|string|true|The name of the requested package.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|npm|
|format|pypi|
|format|maven|
|format|nuget|
|format|generic|

> Example responses

> 200 Response

```json
{
  "package": {
    "format": {},
    "namespace": {},
    "name": {},
    "originConfiguration": {
      "restrictions": {
        "publish": {},
        "upstream": {}
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

<h3 id="describepackage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribePackageResult](#schemadescribepackageresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutPackageOriginConfiguration

<a id="opIdPutPackageOriginConfiguration"></a>

> Code samples

```bash
curl 'https://codeartifact.us-east-1.amazonaws.com/v1/package#domain&repository&format&package?domain=string&repository=string&format=npm&package=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "restrictions": {
      "publish": {},
      "upstream": {}
    }
  }'
```

`POST /v1/package#domain&repository&format&package`

<p>Sets the package origin configuration for a package.</p> <p>The package origin configuration determines how new versions of a package can be added to a repository. You can allow or block direct publishing of new package versions, or ingestion and retaining of new package versions from an external connection or upstream source. For more information about package origin controls and configuration, see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/package-origin-controls.html">Editing package origin controls</a> in the <i>CodeArtifact User Guide</i>.</p> <p> <code>PutPackageOriginConfiguration</code> can be called on a package that doesn't yet exist in the repository. When called on a package that does not exist, a package is created in the repository with no versions and the requested restrictions are set on the package. This can be used to preemptively block ingesting or retaining any versions from external connections or upstream repositories, or to block publishing any versions of the package into the repository before connecting any package managers or publishers to the repository.</p>

> Body parameter

```json
{
  "restrictions": {
    "publish": {},
    "upstream": {}
  }
}
```

<h3 id="putpackageoriginconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|query|string|true|The name of the domain that contains the repository that contains the package.|
|domain-owner|query|string|false| The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. |
|repository|query|string|true|The name of the repository that contains the package.|
|format|query|string|true|A format that specifies the type of the package to be updated.|
|namespace|query|string|false|<p>The namespace of the package to be updated. The package component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package is its <code>groupId</code>. </p> </li> <li> <p> The namespace of an npm package is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet packages do not contain a corresponding component, packages of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>|
|package|query|string|true|The name of the package to be updated.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» restrictions|body|object|true|Details about the origin restrictions set on the package. The package origin restrictions determine how new versions of a package can be added to a specific repository.|
|» » publish|body|object|false|none|
|» » upstream|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|npm|
|format|pypi|
|format|maven|
|format|nuget|
|format|generic|

> Example responses

> 200 Response

```json
{
  "originConfiguration": {
    "restrictions": {
      "publish": {},
      "upstream": {}
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

<h3 id="putpackageoriginconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutPackageOriginConfigurationResult](#schemaputpackageoriginconfigurationresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeletePackage

<a id="opIdDeletePackage"></a>

> Code samples

```bash
curl 'https://codeartifact.us-east-1.amazonaws.com/v1/package#domain&repository&format&package?domain=string&repository=string&format=npm&package=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/package#domain&repository&format&package`

Deletes a package and all associated package versions. A deleted package cannot be restored. To delete one or more package versions, use the <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DeletePackageVersions.html">DeletePackageVersions</a> API.

<h3 id="deletepackage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|query|string|true|The name of the domain that contains the package to delete.|
|domain-owner|query|string|false| The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. |
|repository|query|string|true|The name of the repository that contains the package to delete.|
|format|query|string|true|The format of the requested package to delete.|
|namespace|query|string|false|<p>The namespace of the package to delete. The package component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package is its <code>groupId</code>. The namespace is required when deleting Maven package versions. </p> </li> <li> <p> The namespace of an npm package is its <code>scope</code>.</p> </li> <li> <p> Python and NuGet packages do not contain corresponding components, packages of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>|
|package|query|string|true|The name of the package to delete.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|npm|
|format|pypi|
|format|maven|
|format|nuget|
|format|generic|

> Example responses

> 200 Response

```json
{
  "deletedPackage": {
    "format": {},
    "namespace": {},
    "package": {},
    "originConfiguration": {
      "restrictions": {
        "publish": {},
        "upstream": {}
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

<h3 id="deletepackage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeletePackageResult](#schemadeletepackageresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeletePackageVersions

<a id="opIdDeletePackageVersions"></a>

> Code samples

```bash
curl 'https://codeartifact.us-east-1.amazonaws.com/v1/package/versions/delete#domain&repository&format&package?domain=string&repository=string&format=npm&package=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "versions": [
      "string"
    ],
    "expectedStatus": "Published"
  }'
```

`POST /v1/package/versions/delete#domain&repository&format&package`

 Deletes one or more versions of a package. A deleted package version cannot be restored in your repository. If you want to remove a package version from your repository and be able to restore it later, set its status to <code>Archived</code>. Archived packages cannot be downloaded from a repository and don't show up with list package APIs (for example, <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersions.html">ListPackageVersions</a>), but you can restore them using <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_UpdatePackageVersionsStatus.html">UpdatePackageVersionsStatus</a>. 

> Body parameter

```json
{
  "versions": [
    "string"
  ],
  "expectedStatus": "Published"
}
```

<h3 id="deletepackageversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|query|string|true| The name of the domain that contains the package to delete. |
|domain-owner|query|string|false| The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. |
|repository|query|string|true| The name of the repository that contains the package versions to delete. |
|format|query|string|true| The format of the package versions to delete. |
|namespace|query|string|false|<p>The namespace of the package versions to be deleted. The package version component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package version is its <code>groupId</code>. The namespace is required when deleting Maven package versions. </p> </li> <li> <p> The namespace of an npm package version is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet package versions do not contain a corresponding component, package versions of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>|
|package|query|string|true| The name of the package with the versions to delete. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» versions|body|[[PackageVersion](#schemapackageversion)]|true| An array of strings that specify the versions of the package to delete. |
|» expectedStatus|body|string|false| The expected status of the package version to delete. |

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|npm|
|format|pypi|
|format|maven|
|format|nuget|
|format|generic|
|» expectedStatus|Published|
|» expectedStatus|Unfinished|
|» expectedStatus|Unlisted|
|» expectedStatus|Archived|
|» expectedStatus|Disposed|
|» expectedStatus|Deleted|

> Example responses

> 200 Response

```json
{
  "successfulVersions": {
    "property1": {
      "revision": {},
      "status": {}
    },
    "property2": {
      "revision": {},
      "status": {}
    }
  },
  "failedVersions": {
    "property1": {
      "errorCode": {},
      "errorMessage": {}
    },
    "property2": {
      "errorCode": {},
      "errorMessage": {}
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

<h3 id="deletepackageversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeletePackageVersionsResult](#schemadeletepackageversionsresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRepositoryPermissionsPolicy

<a id="opIdDeleteRepositoryPermissionsPolicy"></a>

> Code samples

```bash
curl 'https://codeartifact.us-east-1.amazonaws.com/v1/repository/permissions/policies#domain&repository?domain=string&repository=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/repository/permissions/policies#domain&repository`

<p> Deletes the resource policy that is set on a repository. After a resource policy is deleted, the permissions allowed and denied by the deleted policy are removed. The effect of deleting a resource policy might not be immediate. </p> <important> <p> Use <code>DeleteRepositoryPermissionsPolicy</code> with caution. After a policy is deleted, Amazon Web Services users, roles, and accounts lose permissions to perform the repository actions granted by the deleted policy. </p> </important>

<h3 id="deleterepositorypermissionspolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|query|string|true| The name of the domain that contains the repository associated with the resource policy to be deleted. |
|domain-owner|query|string|false| The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. |
|repository|query|string|true| The name of the repository that is associated with the resource policy to be deleted |
|policy-revision|query|string|false| The revision of the repository's resource policy to be deleted. This revision is used for optimistic locking, which prevents others from accidentally overwriting your changes to the repository's resource policy. |
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
  "policy": {
    "resourceArn": {},
    "revision": {},
    "document": {}
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

<h3 id="deleterepositorypermissionspolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteRepositoryPermissionsPolicyResult](#schemadeleterepositorypermissionspolicyresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribePackageVersion

<a id="opIdDescribePackageVersion"></a>

> Code samples

```bash
curl 'https://codeartifact.us-east-1.amazonaws.com/v1/package/version#domain&repository&format&package&version?domain=string&repository=string&format=npm&package=string&version=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/package/version#domain&repository&format&package&version`

 Returns a <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionDescription.html">PackageVersionDescription</a> object that contains information about the requested package version. 

<h3 id="describepackageversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|query|string|true| The name of the domain that contains the repository that contains the package version. |
|domain-owner|query|string|false| The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. |
|repository|query|string|true| The name of the repository that contains the package version. |
|format|query|string|true| A format that specifies the type of the requested package version. |
|namespace|query|string|false|<p>The namespace of the requested package version. The package version component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package version is its <code>groupId</code>. </p> </li> <li> <p> The namespace of an npm package version is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet package versions do not contain a corresponding component, package versions of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>|
|package|query|string|true| The name of the requested package version. |
|version|query|string|true| A string that contains the package version (for example, <code>3.5.2</code>). |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|npm|
|format|pypi|
|format|maven|
|format|nuget|
|format|generic|

> Example responses

> 200 Response

```json
{
  "packageVersion": {
    "format": {},
    "namespace": {},
    "packageName": {},
    "displayName": {},
    "version": {},
    "summary": {},
    "homePage": {},
    "sourceCodeRepository": {},
    "publishedTime": {},
    "licenses": {},
    "revision": {},
    "status": {},
    "origin": {
      "domainEntryPoint": {
        "repositoryName": {},
        "externalConnectionName": {}
      },
      "originType": {}
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

<h3 id="describepackageversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribePackageVersionResult](#schemadescribepackageversionresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisposePackageVersions

<a id="opIdDisposePackageVersions"></a>

> Code samples

```bash
curl 'https://codeartifact.us-east-1.amazonaws.com/v1/package/versions/dispose#domain&repository&format&package?domain=string&repository=string&format=npm&package=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "versions": [
      "string"
    ],
    "versionRevisions": {
      "property1": "string",
      "property2": "string"
    },
    "expectedStatus": "Published"
  }'
```

`POST /v1/package/versions/dispose#domain&repository&format&package`

<p> Deletes the assets in package versions and sets the package versions' status to <code>Disposed</code>. A disposed package version cannot be restored in your repository because its assets are deleted. </p> <p> To view all disposed package versions in a repository, use <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersions.html">ListPackageVersions</a> and set the <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersions.html#API_ListPackageVersions_RequestSyntax">status</a> parameter to <code>Disposed</code>. </p> <p> To view information about a disposed package version, use <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DescribePackageVersion.html">DescribePackageVersion</a>. </p>

> Body parameter

```json
{
  "versions": [
    "string"
  ],
  "versionRevisions": {
    "property1": "string",
    "property2": "string"
  },
  "expectedStatus": "Published"
}
```

<h3 id="disposepackageversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|query|string|true| The name of the domain that contains the repository you want to dispose. |
|domain-owner|query|string|false| The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. |
|repository|query|string|true| The name of the repository that contains the package versions you want to dispose. |
|format|query|string|true| A format that specifies the type of package versions you want to dispose. |
|namespace|query|string|false|<p>The namespace of the package versions to be disposed. The package version component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package version is its <code>groupId</code>. </p> </li> <li> <p> The namespace of an npm package version is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet package versions do not contain a corresponding component, package versions of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>|
|package|query|string|true| The name of the package with the versions you want to dispose. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» versions|body|[[PackageVersion](#schemapackageversion)]|true| The versions of the package you want to dispose. |
|» versionRevisions|body|object|false| The revisions of the package versions you want to dispose. |
|» » **additionalProperties**|body|[PackageVersionRevision](#schemapackageversionrevision)|false|none|
|» expectedStatus|body|string|false| The expected status of the package version to dispose. |

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|npm|
|format|pypi|
|format|maven|
|format|nuget|
|format|generic|
|» expectedStatus|Published|
|» expectedStatus|Unfinished|
|» expectedStatus|Unlisted|
|» expectedStatus|Archived|
|» expectedStatus|Disposed|
|» expectedStatus|Deleted|

> Example responses

> 200 Response

```json
{
  "successfulVersions": {
    "property1": {
      "revision": {},
      "status": {}
    },
    "property2": {
      "revision": {},
      "status": {}
    }
  },
  "failedVersions": {
    "property1": {
      "errorCode": {},
      "errorMessage": {}
    },
    "property2": {
      "errorCode": {},
      "errorMessage": {}
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

<h3 id="disposepackageversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisposePackageVersionsResult](#schemadisposepackageversionsresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAuthorizationToken

<a id="opIdGetAuthorizationToken"></a>

> Code samples

```bash
curl 'https://codeartifact.us-east-1.amazonaws.com/v1/authorization-token#domain?domain=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /v1/authorization-token#domain`

<p> Generates a temporary authorization token for accessing repositories in the domain. This API requires the <code>codeartifact:GetAuthorizationToken</code> and <code>sts:GetServiceBearerToken</code> permissions. For more information about authorization tokens, see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/tokens-authentication.html">CodeArtifact authentication and tokens</a>. </p> <note> <p>CodeArtifact authorization tokens are valid for a period of 12 hours when created with the <code>login</code> command. You can call <code>login</code> periodically to refresh the token. When you create an authorization token with the <code>GetAuthorizationToken</code> API, you can set a custom authorization period, up to a maximum of 12 hours, with the <code>durationSeconds</code> parameter.</p> <p>The authorization period begins after <code>login</code> or <code>GetAuthorizationToken</code> is called. If <code>login</code> or <code>GetAuthorizationToken</code> is called while assuming a role, the token lifetime is independent of the maximum session duration of the role. For example, if you call <code>sts assume-role</code> and specify a session duration of 15 minutes, then generate a CodeArtifact authorization token, the token will be valid for the full authorization period even though this is longer than the 15-minute session duration.</p> <p>See <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html">Using IAM Roles</a> for more information on controlling session duration. </p> </note>

<h3 id="getauthorizationtoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|query|string|true| The name of the domain that is in scope for the generated authorization token. |
|domain-owner|query|string|false| The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. |
|duration|query|integer|false|The time, in seconds, that the generated authorization token is valid. Valid values are <code>0</code> and any number between <code>900</code> (15 minutes) and <code>43200</code> (12 hours). A value of <code>0</code> will set the expiration of the authorization token to the same expiration of the user's role's temporary credentials.|
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
  "authorizationToken": {},
  "expiration": {}
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

<h3 id="getauthorizationtoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAuthorizationTokenResult](#schemagetauthorizationtokenresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetPackageVersionAsset

<a id="opIdGetPackageVersionAsset"></a>

> Code samples

```bash
curl 'https://codeartifact.us-east-1.amazonaws.com/v1/package/version/asset#domain&repository&format&package&version&asset?domain=string&repository=string&format=npm&package=string&version=string&asset=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/package/version/asset#domain&repository&format&package&version&asset`

 Returns an asset (or file) that is in a package. For example, for a Maven package version, use <code>GetPackageVersionAsset</code> to download a <code>JAR</code> file, a <code>POM</code> file, or any other assets in the package version. 

<h3 id="getpackageversionasset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|query|string|true| The name of the domain that contains the repository that contains the package version with the requested asset. |
|domain-owner|query|string|false| The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. |
|repository|query|string|true| The repository that contains the package version with the requested asset. |
|format|query|string|true| A format that specifies the type of the package version with the requested asset file. |
|namespace|query|string|false|<p>The namespace of the package version with the requested asset file. The package version component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package version is its <code>groupId</code>. </p> </li> <li> <p> The namespace of an npm package version is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet package versions do not contain a corresponding component, package versions of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>|
|package|query|string|true| The name of the package that contains the requested asset. |
|version|query|string|true| A string that contains the package version (for example, <code>3.5.2</code>). |
|asset|query|string|true| The name of the requested asset. |
|revision|query|string|false| The name of the package version revision that contains the requested asset. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|npm|
|format|pypi|
|format|maven|
|format|nuget|
|format|generic|

> Example responses

> 200 Response

```json
{
  "asset": {}
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

<h3 id="getpackageversionasset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetPackageVersionAssetResult](#schemagetpackageversionassetresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetPackageVersionReadme

<a id="opIdGetPackageVersionReadme"></a>

> Code samples

```bash
curl 'https://codeartifact.us-east-1.amazonaws.com/v1/package/version/readme#domain&repository&format&package&version?domain=string&repository=string&format=npm&package=string&version=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/package/version/readme#domain&repository&format&package&version`

<p> Gets the readme file or descriptive text for a package version. </p> <p> The returned text might contain formatting. For example, it might contain formatting for Markdown or reStructuredText. </p>

<h3 id="getpackageversionreadme-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|query|string|true| The name of the domain that contains the repository that contains the package version with the requested readme file. |
|domain-owner|query|string|false| The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. |
|repository|query|string|true| The repository that contains the package with the requested readme file. |
|format|query|string|true| A format that specifies the type of the package version with the requested readme file. |
|namespace|query|string|false|<p>The namespace of the package version with the requested readme file. The package version component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of an npm package version is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet package versions do not contain a corresponding component, package versions of those formats do not have a namespace. </p> </li> </ul>|
|package|query|string|true| The name of the package version that contains the requested readme file. |
|version|query|string|true| A string that contains the package version (for example, <code>3.5.2</code>). |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|npm|
|format|pypi|
|format|maven|
|format|nuget|
|format|generic|

> Example responses

> 200 Response

```json
{
  "format": {},
  "namespace": {},
  "package": {},
  "version": {},
  "versionRevision": {},
  "readme": {}
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

<h3 id="getpackageversionreadme-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetPackageVersionReadmeResult](#schemagetpackageversionreadmeresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRepositoryEndpoint

<a id="opIdGetRepositoryEndpoint"></a>

> Code samples

```bash
curl 'https://codeartifact.us-east-1.amazonaws.com/v1/repository/endpoint#domain&repository&format?domain=string&repository=string&format=npm' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/repository/endpoint#domain&repository&format`

<p> Returns the endpoint of a repository for a specific package format. A repository has one endpoint for each package format: </p> <ul> <li> <p> <code>maven</code> </p> </li> <li> <p> <code>npm</code> </p> </li> <li> <p> <code>nuget</code> </p> </li> <li> <p> <code>pypi</code> </p> </li> </ul>

<h3 id="getrepositoryendpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|query|string|true| The name of the domain that contains the repository. |
|domain-owner|query|string|false| The 12-digit account number of the Amazon Web Services account that owns the domain that contains the repository. It does not include dashes or spaces. |
|repository|query|string|true| The name of the repository. |
|format|query|string|true| Returns which endpoint of a repository to return. A repository has one endpoint for each package format. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|npm|
|format|pypi|
|format|maven|
|format|nuget|
|format|generic|

> Example responses

> 200 Response

```json
{
  "repositoryEndpoint": {}
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

<h3 id="getrepositoryendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRepositoryEndpointResult](#schemagetrepositoryendpointresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRepositoryPermissionsPolicy

<a id="opIdGetRepositoryPermissionsPolicy"></a>

> Code samples

```bash
curl 'https://codeartifact.us-east-1.amazonaws.com/v1/repository/permissions/policy#domain&repository?domain=string&repository=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/repository/permissions/policy#domain&repository`

 Returns the resource policy that is set on a repository. 

<h3 id="getrepositorypermissionspolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|query|string|true| The name of the domain containing the repository whose associated resource policy is to be retrieved. |
|domain-owner|query|string|false| The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. |
|repository|query|string|true| The name of the repository whose associated resource policy is to be retrieved. |
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
  "policy": {
    "resourceArn": {},
    "revision": {},
    "document": {}
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

<h3 id="getrepositorypermissionspolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRepositoryPermissionsPolicyResult](#schemagetrepositorypermissionspolicyresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutRepositoryPermissionsPolicy

<a id="opIdPutRepositoryPermissionsPolicy"></a>

> Code samples

```bash
curl 'https://codeartifact.us-east-1.amazonaws.com/v1/repository/permissions/policy#domain&repository?domain=string&repository=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "policyRevision": "string",
    "policyDocument": "string"
  }'
```

`PUT /v1/repository/permissions/policy#domain&repository`

<p> Sets the resource policy on a repository that specifies permissions to access it. </p> <p> When you call <code>PutRepositoryPermissionsPolicy</code>, the resource policy on the repository is ignored when evaluting permissions. This ensures that the owner of a repository cannot lock themselves out of the repository, which would prevent them from being able to update the resource policy. </p>

> Body parameter

```json
{
  "policyRevision": "string",
  "policyDocument": "string"
}
```

<h3 id="putrepositorypermissionspolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|query|string|true| The name of the domain containing the repository to set the resource policy on. |
|domain-owner|query|string|false| The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. |
|repository|query|string|true| The name of the repository to set the resource policy on. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» policyRevision|body|string|false| Sets the revision of the resource policy that specifies permissions to access the repository. This revision is used for optimistic locking, which prevents others from overwriting your changes to the repository's resource policy. |
|» policyDocument|body|string|true| A valid displayable JSON Aspen policy string to be set as the access control resource policy on the provided repository. |

> Example responses

> 200 Response

```json
{
  "policy": {
    "resourceArn": {},
    "revision": {},
    "document": {}
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

<h3 id="putrepositorypermissionspolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutRepositoryPermissionsPolicyResult](#schemaputrepositorypermissionspolicyresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDomains

<a id="opIdListDomains"></a>

> Code samples

```bash
curl https://codeartifact.us-east-1.amazonaws.com/v1/domains \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /v1/domains`

 Returns a list of <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionDescription.html">DomainSummary</a> objects for all domains owned by the Amazon Web Services account that makes this call. Each returned <code>DomainSummary</code> object contains information about a domain. 

> Body parameter

```json
{
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="listdomains-parameters">Parameters</h3>

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
|» maxResults|body|integer|false| The maximum number of results to return per page. |
|» nextToken|body|string|false| The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. |

> Example responses

> 200 Response

```json
{
  "domains": {},
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

<h3 id="listdomains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDomainsResult](#schemalistdomainsresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPackageVersionAssets

<a id="opIdListPackageVersionAssets"></a>

> Code samples

```bash
curl 'https://codeartifact.us-east-1.amazonaws.com/v1/package/version/assets#domain&repository&format&package&version?domain=string&repository=string&format=npm&package=string&version=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /v1/package/version/assets#domain&repository&format&package&version`

 Returns a list of <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_AssetSummary.html">AssetSummary</a> objects for assets in a package version. 

<h3 id="listpackageversionassets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|query|string|true| The name of the domain that contains the repository associated with the package version assets. |
|domain-owner|query|string|false| The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. |
|repository|query|string|true| The name of the repository that contains the package that contains the requested package version assets. |
|format|query|string|true| The format of the package that contains the requested package version assets. |
|namespace|query|string|false|<p>The namespace of the package version that contains the requested package version assets. The package version component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package version is its <code>groupId</code>. </p> </li> <li> <p> The namespace of an npm package version is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet package versions do not contain a corresponding component, package versions of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>|
|package|query|string|true| The name of the package that contains the requested package version assets. |
|version|query|string|true| A string that contains the package version (for example, <code>3.5.2</code>). |
|max-results|query|integer|false| The maximum number of results to return per page. |
|next-token|query|string|false| The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. |
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|npm|
|format|pypi|
|format|maven|
|format|nuget|
|format|generic|

> Example responses

> 200 Response

```json
{
  "format": {},
  "namespace": {},
  "package": {},
  "version": {},
  "versionRevision": {},
  "nextToken": {},
  "assets": {}
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

<h3 id="listpackageversionassets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPackageVersionAssetsResult](#schemalistpackageversionassetsresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPackageVersionDependencies

<a id="opIdListPackageVersionDependencies"></a>

> Code samples

```bash
curl 'https://codeartifact.us-east-1.amazonaws.com/v1/package/version/dependencies#domain&repository&format&package&version?domain=string&repository=string&format=npm&package=string&version=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /v1/package/version/dependencies#domain&repository&format&package&version`

 Returns the direct dependencies for a package version. The dependencies are returned as <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageDependency.html">PackageDependency</a> objects. CodeArtifact extracts the dependencies for a package version from the metadata file for the package format (for example, the <code>package.json</code> file for npm packages and the <code>pom.xml</code> file for Maven). Any package version dependencies that are not listed in the configuration file are not returned. 

<h3 id="listpackageversiondependencies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|query|string|true| The name of the domain that contains the repository that contains the requested package version dependencies. |
|domain-owner|query|string|false| The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. |
|repository|query|string|true| The name of the repository that contains the requested package version. |
|format|query|string|true| The format of the package with the requested dependencies. |
|namespace|query|string|false|<p>The namespace of the package version with the requested dependencies. The package version component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package version is its <code>groupId</code>. </p> </li> <li> <p> The namespace of an npm package version is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet package versions do not contain a corresponding component, package versions of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>|
|package|query|string|true| The name of the package versions' package. |
|version|query|string|true| A string that contains the package version (for example, <code>3.5.2</code>). |
|next-token|query|string|false| The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|npm|
|format|pypi|
|format|maven|
|format|nuget|
|format|generic|

> Example responses

> 200 Response

```json
{
  "format": {},
  "namespace": {},
  "package": {},
  "version": {},
  "versionRevision": {},
  "nextToken": {},
  "dependencies": {}
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

<h3 id="listpackageversiondependencies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPackageVersionDependenciesResult](#schemalistpackageversiondependenciesresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPackageVersions

<a id="opIdListPackageVersions"></a>

> Code samples

```bash
curl 'https://codeartifact.us-east-1.amazonaws.com/v1/package/versions#domain&repository&format&package?domain=string&repository=string&format=npm&package=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /v1/package/versions#domain&repository&format&package`

 Returns a list of <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionSummary.html">PackageVersionSummary</a> objects for package versions in a repository that match the request parameters. Package versions of all statuses will be returned by default when calling <code>list-package-versions</code> with no <code>--status</code> parameter. 

<h3 id="listpackageversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|query|string|true| The name of the domain that contains the repository that contains the requested package versions. |
|domain-owner|query|string|false| The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. |
|repository|query|string|true| The name of the repository that contains the requested package versions. |
|format|query|string|true| The format of the package versions you want to list. |
|namespace|query|string|false|<p>The namespace of the package that contains the requested package versions. The package component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package is its <code>groupId</code>. </p> </li> <li> <p> The namespace of an npm package is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet packages do not contain a corresponding component, packages of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>|
|package|query|string|true| The name of the package for which you want to request package versions. |
|status|query|string|false| A string that filters the requested package versions by status. |
|sortBy|query|string|false| How to sort the requested list of package versions. |
|max-results|query|integer|false| The maximum number of results to return per page. |
|next-token|query|string|false| The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. |
|originType|query|string|false|The <code>originType</code> used to filter package versions. Only package versions with the provided <code>originType</code> will be returned.|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|npm|
|format|pypi|
|format|maven|
|format|nuget|
|format|generic|
|status|Published|
|status|Unfinished|
|status|Unlisted|
|status|Archived|
|status|Disposed|
|status|Deleted|
|sortBy|PUBLISHED_TIME|
|originType|INTERNAL|
|originType|EXTERNAL|
|originType|UNKNOWN|

> Example responses

> 200 Response

```json
{
  "defaultDisplayVersion": {},
  "format": {},
  "namespace": {},
  "package": {},
  "versions": {},
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

<h3 id="listpackageversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPackageVersionsResult](#schemalistpackageversionsresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPackages

<a id="opIdListPackages"></a>

> Code samples

```bash
curl 'https://codeartifact.us-east-1.amazonaws.com/v1/packages#domain&repository?domain=string&repository=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /v1/packages#domain&repository`

 Returns a list of <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageSummary.html">PackageSummary</a> objects for packages in a repository that match the request parameters. 

<h3 id="listpackages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|query|string|true| The name of the domain that contains the repository that contains the requested packages. |
|domain-owner|query|string|false| The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. |
|repository|query|string|true| The name of the repository that contains the requested packages. |
|format|query|string|false|The format used to filter requested packages. Only packages from the provided format will be returned.|
|namespace|query|string|false|<p>The namespace prefix used to filter requested packages. Only packages with a namespace that starts with the provided string value are returned. Note that although this option is called <code>--namespace</code> and not <code>--namespace-prefix</code>, it has prefix-matching behavior.</p> <p>Each package format uses namespace as follows:</p> <ul> <li> <p> The namespace of a Maven package is its <code>groupId</code>. </p> </li> <li> <p> The namespace of an npm package is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet packages do not contain a corresponding component, packages of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>|
|package-prefix|query|string|false| A prefix used to filter requested packages. Only packages with names that start with <code>packagePrefix</code> are returned. |
|max-results|query|integer|false| The maximum number of results to return per page. |
|next-token|query|string|false| The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. |
|publish|query|string|false|The value of the <code>Publish</code> package origin control restriction used to filter requested packages. Only packages with the provided restriction are returned. For more information, see <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageOriginRestrictions.html">PackageOriginRestrictions</a>.|
|upstream|query|string|false|The value of the <code>Upstream</code> package origin control restriction used to filter requested packages. Only packages with the provided restriction are returned. For more information, see <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageOriginRestrictions.html">PackageOriginRestrictions</a>.|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|npm|
|format|pypi|
|format|maven|
|format|nuget|
|format|generic|
|publish|ALLOW|
|publish|BLOCK|
|upstream|ALLOW|
|upstream|BLOCK|

> Example responses

> 200 Response

```json
{
  "packages": {},
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

<h3 id="listpackages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPackagesResult](#schemalistpackagesresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRepositories

<a id="opIdListRepositories"></a>

> Code samples

```bash
curl https://codeartifact.us-east-1.amazonaws.com/v1/repositories \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /v1/repositories`

 Returns a list of <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_RepositorySummary.html">RepositorySummary</a> objects. Each <code>RepositorySummary</code> contains information about a repository in the specified Amazon Web Services account and that matches the input parameters. 

<h3 id="listrepositories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repository-prefix|query|string|false| A prefix used to filter returned repositories. Only repositories with names that start with <code>repositoryPrefix</code> are returned.|
|max-results|query|integer|false| The maximum number of results to return per page. |
|next-token|query|string|false| The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. |
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
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
  "repositories": {},
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

<h3 id="listrepositories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRepositoriesResult](#schemalistrepositoriesresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRepositoriesInDomain

<a id="opIdListRepositoriesInDomain"></a>

> Code samples

```bash
curl 'https://codeartifact.us-east-1.amazonaws.com/v1/domain/repositories#domain?domain=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /v1/domain/repositories#domain`

 Returns a list of <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_RepositorySummary.html">RepositorySummary</a> objects. Each <code>RepositorySummary</code> contains information about a repository in the specified domain and that matches the input parameters. 

<h3 id="listrepositoriesindomain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|query|string|true| The name of the domain that contains the returned list of repositories. |
|domain-owner|query|string|false| The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. |
|administrator-account|query|string|false| Filter the list of repositories to only include those that are managed by the Amazon Web Services account ID. |
|repository-prefix|query|string|false| A prefix used to filter returned repositories. Only repositories with names that start with <code>repositoryPrefix</code> are returned. |
|max-results|query|integer|false| The maximum number of results to return per page. |
|next-token|query|string|false| The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. |
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
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
  "repositories": {},
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

<h3 id="listrepositoriesindomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRepositoriesInDomainResult](#schemalistrepositoriesindomainresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://codeartifact.us-east-1.amazonaws.com/v1/tags#resourceArn?resourceArn=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /v1/tags#resourceArn`

Gets information about Amazon Web Services tags for a specified Amazon Resource Name (ARN) in CodeArtifact.

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|query|string|true|The Amazon Resource Name (ARN) of the resource to get tags for.|
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
  "tags": {}
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
|200|OK|Success|[ListTagsForResourceResult](#schemalisttagsforresourceresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PublishPackageVersion

<a id="opIdPublishPackageVersion"></a>

> Code samples

```bash
curl 'https://codeartifact.us-east-1.amazonaws.com/v1/package/version/publish#domain&repository&format&package&version&asset&x-amz-content-sha256?domain=string&repository=string&format=npm&package=string&version=string&asset=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-content-sha256: stringstringstringstringstringstringstringstringstringstringstri' \
  -d '{
    "assetContent": "string"
  }'
```

`POST /v1/package/version/publish#domain&repository&format&package&version&asset&x-amz-content-sha256`

<p>Creates a new package version containing one or more assets (or files).</p> <p>The <code>unfinished</code> flag can be used to keep the package version in the <code>Unfinished</code> state until all of its assets have been uploaded (see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/packages-overview.html#package-version-status.html#package-version-status">Package version status</a> in the <i>CodeArtifact user guide</i>). To set the package version’s status to <code>Published</code>, omit the <code>unfinished</code> flag when uploading the final asset, or set the status using <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_UpdatePackageVersionsStatus.html">UpdatePackageVersionStatus</a>. Once a package version’s status is set to <code>Published</code>, it cannot change back to <code>Unfinished</code>.</p> <note> <p>Only generic packages can be published using this API. For more information, see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/using-generic.html">Using generic packages</a> in the <i>CodeArtifact User Guide</i>.</p> </note>

> Body parameter

```json
{
  "assetContent": "string"
}
```

<h3 id="publishpackageversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|query|string|true|The name of the domain that contains the repository that contains the package version to publish.|
|domain-owner|query|string|false|The 12-digit account number of the AWS account that owns the domain. It does not include dashes or spaces.|
|repository|query|string|true|The name of the repository that the package version will be published to.|
|format|query|string|true|A format that specifies the type of the package version with the requested asset file.|
|namespace|query|string|false|The namespace of the package version to publish.|
|package|query|string|true|The name of the package version to publish.|
|version|query|string|true|The package version to publish (for example, <code>3.5.2</code>).|
|asset|query|string|true|The name of the asset to publish. Asset names can include Unicode letters and numbers, and the following special characters: <code>~ ! @ ^ &amp; ( ) - ` _ + [ ] { } ; , . `</code> |
|x-amz-content-sha256|header|string|true|<p>The SHA256 hash of the <code>assetContent</code> to publish. This value must be calculated by the caller and provided with the request (see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/using-generic.html#publishing-generic-packages">Publishing a generic package</a> in the <i>CodeArtifact User Guide</i>).</p> <p>This value is used as an integrity check to verify that the <code>assetContent</code> has not changed after it was originally sent.</p>|
|unfinished|query|boolean|false|<p>Specifies whether the package version should remain in the <code>unfinished</code> state. If omitted, the package version status will be set to <code>Published</code> (see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/packages-overview.html#package-version-status">Package version status</a> in the <i>CodeArtifact User Guide</i>).</p> <p>Valid values: <code>unfinished</code> </p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» assetContent|body|string|true|The content of the asset to publish.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|npm|
|format|pypi|
|format|maven|
|format|nuget|
|format|generic|

> Example responses

> 200 Response

```json
{
  "format": {},
  "namespace": {},
  "package": {},
  "version": {},
  "versionRevision": {},
  "status": {},
  "asset": {
    "name": {},
    "size": {},
    "hashes": {
      "property1": "stringstringstringstringstringst",
      "property2": "stringstringstringstringstringst"
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

<h3 id="publishpackageversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PublishPackageVersionResult](#schemapublishpackageversionresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutDomainPermissionsPolicy

<a id="opIdPutDomainPermissionsPolicy"></a>

> Code samples

```bash
curl https://codeartifact.us-east-1.amazonaws.com/v1/domain/permissions/policy \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "domain": "string",
    "domainOwner": "stringstring",
    "policyRevision": "string",
    "policyDocument": "string"
  }'
```

`PUT /v1/domain/permissions/policy`

<p> Sets a resource policy on a domain that specifies permissions to access it. </p> <p> When you call <code>PutDomainPermissionsPolicy</code>, the resource policy on the domain is ignored when evaluting permissions. This ensures that the owner of a domain cannot lock themselves out of the domain, which would prevent them from being able to update the resource policy. </p>

> Body parameter

```json
{
  "domain": "string",
  "domainOwner": "stringstring",
  "policyRevision": "string",
  "policyDocument": "string"
}
```

<h3 id="putdomainpermissionspolicy-parameters">Parameters</h3>

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
|» domain|body|string|true| The name of the domain on which to set the resource policy. |
|» domainOwner|body|string|false| The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. |
|» policyRevision|body|string|false| The current revision of the resource policy to be set. This revision is used for optimistic locking, which prevents others from overwriting your changes to the domain's resource policy. |
|» policyDocument|body|string|true| A valid displayable JSON Aspen policy string to be set as the access control resource policy on the provided domain. |

> Example responses

> 200 Response

```json
{
  "policy": {
    "resourceArn": {},
    "revision": {},
    "document": {}
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

<h3 id="putdomainpermissionspolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutDomainPermissionsPolicyResult](#schemaputdomainpermissionspolicyresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://codeartifact.us-east-1.amazonaws.com/v1/tag#resourceArn?resourceArn=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "tags": [
      {
        "key": {},
        "value": {}
      }
    ]
  }'
```

`POST /v1/tag#resourceArn`

Adds or updates tags for a resource in CodeArtifact.

> Body parameter

```json
{
  "tags": [
    {
      "key": {},
      "value": {}
    }
  ]
}
```

<h3 id="tagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|query|string|true|The Amazon Resource Name (ARN) of the resource that you want to add or update tags for.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|[[Tag](#schematag)]|true|The tags you want to modify or add to the resource.|

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
|200|OK|Success|[TagResourceResult](#schematagresourceresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://codeartifact.us-east-1.amazonaws.com/v1/untag#resourceArn?resourceArn=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "tagKeys": [
      "string"
    ]
  }'
```

`POST /v1/untag#resourceArn`

Removes tags from a resource in CodeArtifact.

> Body parameter

```json
{
  "tagKeys": [
    "string"
  ]
}
```

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|query|string|true|The Amazon Resource Name (ARN) of the resource that you want to remove tags from.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tagKeys|body|[[TagKey](#schematagkey)]|true|The tag key for each tag that you want to remove from the resource.|

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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResult](#schemauntagresourceresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdatePackageVersionsStatus

<a id="opIdUpdatePackageVersionsStatus"></a>

> Code samples

```bash
curl 'https://codeartifact.us-east-1.amazonaws.com/v1/package/versions/update_status#domain&repository&format&package?domain=string&repository=string&format=npm&package=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "versions": [
      "string"
    ],
    "versionRevisions": {
      "property1": "string",
      "property2": "string"
    },
    "expectedStatus": "Published",
    "targetStatus": "Published"
  }'
```

`POST /v1/package/versions/update_status#domain&repository&format&package`

 Updates the status of one or more versions of a package. Using <code>UpdatePackageVersionsStatus</code>, you can update the status of package versions to <code>Archived</code>, <code>Published</code>, or <code>Unlisted</code>. To set the status of a package version to <code>Disposed</code>, use <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DisposePackageVersions.html">DisposePackageVersions</a>. 

> Body parameter

```json
{
  "versions": [
    "string"
  ],
  "versionRevisions": {
    "property1": "string",
    "property2": "string"
  },
  "expectedStatus": "Published",
  "targetStatus": "Published"
}
```

<h3 id="updatepackageversionsstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|query|string|true| The name of the domain that contains the repository that contains the package versions with a status to be updated. |
|domain-owner|query|string|false| The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. |
|repository|query|string|true| The repository that contains the package versions with the status you want to update. |
|format|query|string|true| A format that specifies the type of the package with the statuses to update. |
|namespace|query|string|false|<p>The namespace of the package version to be updated. The package version component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package version is its <code>groupId</code>. </p> </li> <li> <p> The namespace of an npm package version is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet package versions do not contain a corresponding component, package versions of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>|
|package|query|string|true| The name of the package with the version statuses to update. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» versions|body|[[PackageVersion](#schemapackageversion)]|true| An array of strings that specify the versions of the package with the statuses to update. |
|» versionRevisions|body|object|false| A map of package versions and package version revisions. The map <code>key</code> is the package version (for example, <code>3.5.2</code>), and the map <code>value</code> is the package version revision. |
|» » **additionalProperties**|body|[PackageVersionRevision](#schemapackageversionrevision)|false|none|
|» expectedStatus|body|string|false| The package version’s expected status before it is updated. If <code>expectedStatus</code> is provided, the package version's status is updated only if its status at the time <code>UpdatePackageVersionsStatus</code> is called matches <code>expectedStatus</code>. |
|» targetStatus|body|string|true| The status you want to change the package version status to. |

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|npm|
|format|pypi|
|format|maven|
|format|nuget|
|format|generic|
|» expectedStatus|Published|
|» expectedStatus|Unfinished|
|» expectedStatus|Unlisted|
|» expectedStatus|Archived|
|» expectedStatus|Disposed|
|» expectedStatus|Deleted|
|» targetStatus|Published|
|» targetStatus|Unfinished|
|» targetStatus|Unlisted|
|» targetStatus|Archived|
|» targetStatus|Disposed|
|» targetStatus|Deleted|

> Example responses

> 200 Response

```json
{
  "successfulVersions": {
    "property1": {
      "revision": {},
      "status": {}
    },
    "property2": {
      "revision": {},
      "status": {}
    }
  },
  "failedVersions": {
    "property1": {
      "errorCode": {},
      "errorMessage": {}
    },
    "property2": {
      "errorCode": {},
      "errorMessage": {}
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

<h3 id="updatepackageversionsstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdatePackageVersionsStatusResult](#schemaupdatepackageversionsstatusresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AssociateExternalConnectionResult">AssociateExternalConnectionResult</h2>
<!-- backwards compatibility -->
<a id="schemaassociateexternalconnectionresult"></a>
<a id="schema_AssociateExternalConnectionResult"></a>
<a id="tocSassociateexternalconnectionresult"></a>
<a id="tocsassociateexternalconnectionresult"></a>

```json
{
  "repository": {
    "name": {},
    "administratorAccount": {},
    "domainName": {},
    "domainOwner": {},
    "arn": {},
    "description": {},
    "upstreams": {},
    "externalConnections": {},
    "createdTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repository|object|false|none|none|

<h2 id="tocS_AccessDeniedException">AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedexception"></a>
<a id="schema_AccessDeniedException"></a>
<a id="tocSaccessdeniedexception"></a>
<a id="tocsaccessdeniedexception"></a>

```json
null
```

<h2 id="tocS_ConflictException">ConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictexception"></a>
<a id="schema_ConflictException"></a>
<a id="tocSconflictexception"></a>
<a id="tocsconflictexception"></a>

```json
null
```

<h2 id="tocS_InternalServerException">InternalServerException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserverexception"></a>
<a id="schema_InternalServerException"></a>
<a id="tocSinternalserverexception"></a>
<a id="tocsinternalserverexception"></a>

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

<h2 id="tocS_ServiceQuotaExceededException">ServiceQuotaExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaservicequotaexceededexception"></a>
<a id="schema_ServiceQuotaExceededException"></a>
<a id="tocSservicequotaexceededexception"></a>
<a id="tocsservicequotaexceededexception"></a>

```json
null
```

<h2 id="tocS_ThrottlingException">ThrottlingException</h2>
<!-- backwards compatibility -->
<a id="schemathrottlingexception"></a>
<a id="schema_ThrottlingException"></a>
<a id="tocSthrottlingexception"></a>
<a id="tocsthrottlingexception"></a>

```json
null
```

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

```json
null
```

<h2 id="tocS_CopyPackageVersionsResult">CopyPackageVersionsResult</h2>
<!-- backwards compatibility -->
<a id="schemacopypackageversionsresult"></a>
<a id="schema_CopyPackageVersionsResult"></a>
<a id="tocScopypackageversionsresult"></a>
<a id="tocscopypackageversionsresult"></a>

```json
{
  "successfulVersions": {
    "property1": {
      "revision": {},
      "status": {}
    },
    "property2": {
      "revision": {},
      "status": {}
    }
  },
  "failedVersions": {
    "property1": {
      "errorCode": {},
      "errorMessage": {}
    },
    "property2": {
      "errorCode": {},
      "errorMessage": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|successfulVersions|object|false|none|none|
|failedVersions|object|false|none|none|

<h2 id="tocS_PackageVersion">PackageVersion</h2>
<!-- backwards compatibility -->
<a id="schemapackageversion"></a>
<a id="schema_PackageVersion"></a>
<a id="tocSpackageversion"></a>
<a id="tocspackageversion"></a>

```json
"string"
```

<h2 id="tocS_PackageVersionRevision">PackageVersionRevision</h2>
<!-- backwards compatibility -->
<a id="schemapackageversionrevision"></a>
<a id="schema_PackageVersionRevision"></a>
<a id="tocSpackageversionrevision"></a>
<a id="tocspackageversionrevision"></a>

```json
"string"
```

<h2 id="tocS_CreateDomainResult">CreateDomainResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatedomainresult"></a>
<a id="schema_CreateDomainResult"></a>
<a id="tocScreatedomainresult"></a>
<a id="tocscreatedomainresult"></a>

```json
{
  "domain": {
    "name": {},
    "owner": {},
    "arn": {},
    "status": {},
    "createdTime": {},
    "encryptionKey": {},
    "repositoryCount": {},
    "assetSizeBytes": {},
    "s3BucketArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|object|false|none|none|

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

A tag is a key-value pair that can be used to manage, search for, or filter resources in CodeArtifact.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|object|true|none|none|
|value|object|true|none|none|

<h2 id="tocS_CreateRepositoryResult">CreateRepositoryResult</h2>
<!-- backwards compatibility -->
<a id="schemacreaterepositoryresult"></a>
<a id="schema_CreateRepositoryResult"></a>
<a id="tocScreaterepositoryresult"></a>
<a id="tocscreaterepositoryresult"></a>

```json
{
  "repository": {
    "name": {},
    "administratorAccount": {},
    "domainName": {},
    "domainOwner": {},
    "arn": {},
    "description": {},
    "upstreams": {},
    "externalConnections": {},
    "createdTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repository|object|false|none|none|

<h2 id="tocS_UpstreamRepository">UpstreamRepository</h2>
<!-- backwards compatibility -->
<a id="schemaupstreamrepository"></a>
<a id="schema_UpstreamRepository"></a>
<a id="tocSupstreamrepository"></a>
<a id="tocsupstreamrepository"></a>

```json
{
  "repositoryName": {}
}
```

 Information about an upstream repository. A list of <code>UpstreamRepository</code> objects is an input parameter to <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_CreateRepository.html">CreateRepository</a> and <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_UpdateRepository.html">UpdateRepository</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|true|none|none|

<h2 id="tocS_DeleteDomainResult">DeleteDomainResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletedomainresult"></a>
<a id="schema_DeleteDomainResult"></a>
<a id="tocSdeletedomainresult"></a>
<a id="tocsdeletedomainresult"></a>

```json
{
  "domain": {
    "name": {},
    "owner": {},
    "arn": {},
    "status": {},
    "createdTime": {},
    "encryptionKey": {},
    "repositoryCount": {},
    "assetSizeBytes": {},
    "s3BucketArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|object|false|none|none|

<h2 id="tocS_DeleteDomainPermissionsPolicyResult">DeleteDomainPermissionsPolicyResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletedomainpermissionspolicyresult"></a>
<a id="schema_DeleteDomainPermissionsPolicyResult"></a>
<a id="tocSdeletedomainpermissionspolicyresult"></a>
<a id="tocsdeletedomainpermissionspolicyresult"></a>

```json
{
  "policy": {
    "resourceArn": {},
    "revision": {},
    "document": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policy|object|false|none|none|

<h2 id="tocS_DeletePackageResult">DeletePackageResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletepackageresult"></a>
<a id="schema_DeletePackageResult"></a>
<a id="tocSdeletepackageresult"></a>
<a id="tocsdeletepackageresult"></a>

```json
{
  "deletedPackage": {
    "format": {},
    "namespace": {},
    "package": {},
    "originConfiguration": {
      "restrictions": {
        "publish": {},
        "upstream": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deletedPackage|[PackageSummary](#schemapackagesummary)|false|none| Details about a package, including its format, namespace, and name. |

<h2 id="tocS_DeletePackageVersionsResult">DeletePackageVersionsResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletepackageversionsresult"></a>
<a id="schema_DeletePackageVersionsResult"></a>
<a id="tocSdeletepackageversionsresult"></a>
<a id="tocsdeletepackageversionsresult"></a>

```json
{
  "successfulVersions": {
    "property1": {
      "revision": {},
      "status": {}
    },
    "property2": {
      "revision": {},
      "status": {}
    }
  },
  "failedVersions": {
    "property1": {
      "errorCode": {},
      "errorMessage": {}
    },
    "property2": {
      "errorCode": {},
      "errorMessage": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|successfulVersions|object|false|none|none|
|failedVersions|object|false|none|none|

<h2 id="tocS_DeleteRepositoryResult">DeleteRepositoryResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleterepositoryresult"></a>
<a id="schema_DeleteRepositoryResult"></a>
<a id="tocSdeleterepositoryresult"></a>
<a id="tocsdeleterepositoryresult"></a>

```json
{
  "repository": {
    "name": {},
    "administratorAccount": {},
    "domainName": {},
    "domainOwner": {},
    "arn": {},
    "description": {},
    "upstreams": {},
    "externalConnections": {},
    "createdTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repository|object|false|none|none|

<h2 id="tocS_DeleteRepositoryPermissionsPolicyResult">DeleteRepositoryPermissionsPolicyResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleterepositorypermissionspolicyresult"></a>
<a id="schema_DeleteRepositoryPermissionsPolicyResult"></a>
<a id="tocSdeleterepositorypermissionspolicyresult"></a>
<a id="tocsdeleterepositorypermissionspolicyresult"></a>

```json
{
  "policy": {
    "resourceArn": {},
    "revision": {},
    "document": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policy|object|false|none|none|

<h2 id="tocS_DescribeDomainResult">DescribeDomainResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribedomainresult"></a>
<a id="schema_DescribeDomainResult"></a>
<a id="tocSdescribedomainresult"></a>
<a id="tocsdescribedomainresult"></a>

```json
{
  "domain": {
    "name": {},
    "owner": {},
    "arn": {},
    "status": {},
    "createdTime": {},
    "encryptionKey": {},
    "repositoryCount": {},
    "assetSizeBytes": {},
    "s3BucketArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|[DomainDescription](#schemadomaindescription)|false|none| Information about a domain. A domain is a container for repositories. When you create a domain, it is empty until you add one or more repositories. |

<h2 id="tocS_DescribePackageResult">DescribePackageResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribepackageresult"></a>
<a id="schema_DescribePackageResult"></a>
<a id="tocSdescribepackageresult"></a>
<a id="tocsdescribepackageresult"></a>

```json
{
  "package": {
    "format": {},
    "namespace": {},
    "name": {},
    "originConfiguration": {
      "restrictions": {
        "publish": {},
        "upstream": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|package|object|true|none|none|

<h2 id="tocS_DescribePackageVersionResult">DescribePackageVersionResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribepackageversionresult"></a>
<a id="schema_DescribePackageVersionResult"></a>
<a id="tocSdescribepackageversionresult"></a>
<a id="tocsdescribepackageversionresult"></a>

```json
{
  "packageVersion": {
    "format": {},
    "namespace": {},
    "packageName": {},
    "displayName": {},
    "version": {},
    "summary": {},
    "homePage": {},
    "sourceCodeRepository": {},
    "publishedTime": {},
    "licenses": {},
    "revision": {},
    "status": {},
    "origin": {
      "domainEntryPoint": {
        "repositoryName": {},
        "externalConnectionName": {}
      },
      "originType": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|packageVersion|object|true|none|none|

<h2 id="tocS_DescribeRepositoryResult">DescribeRepositoryResult</h2>
<!-- backwards compatibility -->
<a id="schemadescriberepositoryresult"></a>
<a id="schema_DescribeRepositoryResult"></a>
<a id="tocSdescriberepositoryresult"></a>
<a id="tocsdescriberepositoryresult"></a>

```json
{
  "repository": {
    "name": {},
    "administratorAccount": {},
    "domainName": {},
    "domainOwner": {},
    "arn": {},
    "description": {},
    "upstreams": {},
    "externalConnections": {},
    "createdTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repository|object|false|none|none|

<h2 id="tocS_DisassociateExternalConnectionResult">DisassociateExternalConnectionResult</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateexternalconnectionresult"></a>
<a id="schema_DisassociateExternalConnectionResult"></a>
<a id="tocSdisassociateexternalconnectionresult"></a>
<a id="tocsdisassociateexternalconnectionresult"></a>

```json
{
  "repository": {
    "name": {},
    "administratorAccount": {},
    "domainName": {},
    "domainOwner": {},
    "arn": {},
    "description": {},
    "upstreams": {},
    "externalConnections": {},
    "createdTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repository|object|false|none|none|

<h2 id="tocS_DisposePackageVersionsResult">DisposePackageVersionsResult</h2>
<!-- backwards compatibility -->
<a id="schemadisposepackageversionsresult"></a>
<a id="schema_DisposePackageVersionsResult"></a>
<a id="tocSdisposepackageversionsresult"></a>
<a id="tocsdisposepackageversionsresult"></a>

```json
{
  "successfulVersions": {
    "property1": {
      "revision": {},
      "status": {}
    },
    "property2": {
      "revision": {},
      "status": {}
    }
  },
  "failedVersions": {
    "property1": {
      "errorCode": {},
      "errorMessage": {}
    },
    "property2": {
      "errorCode": {},
      "errorMessage": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|successfulVersions|object|false|none|none|
|failedVersions|object|false|none|none|

<h2 id="tocS_GetAuthorizationTokenResult">GetAuthorizationTokenResult</h2>
<!-- backwards compatibility -->
<a id="schemagetauthorizationtokenresult"></a>
<a id="schema_GetAuthorizationTokenResult"></a>
<a id="tocSgetauthorizationtokenresult"></a>
<a id="tocsgetauthorizationtokenresult"></a>

```json
{
  "authorizationToken": {},
  "expiration": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorizationToken|object|false|none|none|
|expiration|object|false|none|none|

<h2 id="tocS_GetDomainPermissionsPolicyResult">GetDomainPermissionsPolicyResult</h2>
<!-- backwards compatibility -->
<a id="schemagetdomainpermissionspolicyresult"></a>
<a id="schema_GetDomainPermissionsPolicyResult"></a>
<a id="tocSgetdomainpermissionspolicyresult"></a>
<a id="tocsgetdomainpermissionspolicyresult"></a>

```json
{
  "policy": {
    "resourceArn": {},
    "revision": {},
    "document": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policy|object|false|none|none|

<h2 id="tocS_GetPackageVersionAssetResult">GetPackageVersionAssetResult</h2>
<!-- backwards compatibility -->
<a id="schemagetpackageversionassetresult"></a>
<a id="schema_GetPackageVersionAssetResult"></a>
<a id="tocSgetpackageversionassetresult"></a>
<a id="tocsgetpackageversionassetresult"></a>

```json
{
  "asset": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset|object|false|none|none|

<h2 id="tocS_GetPackageVersionReadmeResult">GetPackageVersionReadmeResult</h2>
<!-- backwards compatibility -->
<a id="schemagetpackageversionreadmeresult"></a>
<a id="schema_GetPackageVersionReadmeResult"></a>
<a id="tocSgetpackageversionreadmeresult"></a>
<a id="tocsgetpackageversionreadmeresult"></a>

```json
{
  "format": {},
  "namespace": {},
  "package": {},
  "version": {},
  "versionRevision": {},
  "readme": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|format|object|false|none|none|
|namespace|object|false|none|none|
|package|object|false|none|none|
|version|object|false|none|none|
|versionRevision|object|false|none|none|
|readme|object|false|none|none|

<h2 id="tocS_GetRepositoryEndpointResult">GetRepositoryEndpointResult</h2>
<!-- backwards compatibility -->
<a id="schemagetrepositoryendpointresult"></a>
<a id="schema_GetRepositoryEndpointResult"></a>
<a id="tocSgetrepositoryendpointresult"></a>
<a id="tocsgetrepositoryendpointresult"></a>

```json
{
  "repositoryEndpoint": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryEndpoint|object|false|none|none|

<h2 id="tocS_GetRepositoryPermissionsPolicyResult">GetRepositoryPermissionsPolicyResult</h2>
<!-- backwards compatibility -->
<a id="schemagetrepositorypermissionspolicyresult"></a>
<a id="schema_GetRepositoryPermissionsPolicyResult"></a>
<a id="tocSgetrepositorypermissionspolicyresult"></a>
<a id="tocsgetrepositorypermissionspolicyresult"></a>

```json
{
  "policy": {
    "resourceArn": {},
    "revision": {},
    "document": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policy|object|false|none|none|

<h2 id="tocS_ListDomainsResult">ListDomainsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistdomainsresult"></a>
<a id="schema_ListDomainsResult"></a>
<a id="tocSlistdomainsresult"></a>
<a id="tocslistdomainsresult"></a>

```json
{
  "domains": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domains|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListPackageVersionAssetsResult">ListPackageVersionAssetsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistpackageversionassetsresult"></a>
<a id="schema_ListPackageVersionAssetsResult"></a>
<a id="tocSlistpackageversionassetsresult"></a>
<a id="tocslistpackageversionassetsresult"></a>

```json
{
  "format": {},
  "namespace": {},
  "package": {},
  "version": {},
  "versionRevision": {},
  "nextToken": {},
  "assets": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|format|object|false|none|none|
|namespace|object|false|none|none|
|package|object|false|none|none|
|version|object|false|none|none|
|versionRevision|object|false|none|none|
|nextToken|object|false|none|none|
|assets|object|false|none|none|

<h2 id="tocS_ListPackageVersionDependenciesResult">ListPackageVersionDependenciesResult</h2>
<!-- backwards compatibility -->
<a id="schemalistpackageversiondependenciesresult"></a>
<a id="schema_ListPackageVersionDependenciesResult"></a>
<a id="tocSlistpackageversiondependenciesresult"></a>
<a id="tocslistpackageversiondependenciesresult"></a>

```json
{
  "format": {},
  "namespace": {},
  "package": {},
  "version": {},
  "versionRevision": {},
  "nextToken": {},
  "dependencies": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|format|object|false|none|none|
|namespace|object|false|none|none|
|package|object|false|none|none|
|version|object|false|none|none|
|versionRevision|object|false|none|none|
|nextToken|object|false|none|none|
|dependencies|object|false|none|none|

<h2 id="tocS_ListPackageVersionsResult">ListPackageVersionsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistpackageversionsresult"></a>
<a id="schema_ListPackageVersionsResult"></a>
<a id="tocSlistpackageversionsresult"></a>
<a id="tocslistpackageversionsresult"></a>

```json
{
  "defaultDisplayVersion": {},
  "format": {},
  "namespace": {},
  "package": {},
  "versions": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultDisplayVersion|object|false|none|none|
|format|object|false|none|none|
|namespace|object|false|none|none|
|package|object|false|none|none|
|versions|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListPackagesResult">ListPackagesResult</h2>
<!-- backwards compatibility -->
<a id="schemalistpackagesresult"></a>
<a id="schema_ListPackagesResult"></a>
<a id="tocSlistpackagesresult"></a>
<a id="tocslistpackagesresult"></a>

```json
{
  "packages": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|packages|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListRepositoriesResult">ListRepositoriesResult</h2>
<!-- backwards compatibility -->
<a id="schemalistrepositoriesresult"></a>
<a id="schema_ListRepositoriesResult"></a>
<a id="tocSlistrepositoriesresult"></a>
<a id="tocslistrepositoriesresult"></a>

```json
{
  "repositories": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositories|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListRepositoriesInDomainResult">ListRepositoriesInDomainResult</h2>
<!-- backwards compatibility -->
<a id="schemalistrepositoriesindomainresult"></a>
<a id="schema_ListRepositoriesInDomainResult"></a>
<a id="tocSlistrepositoriesindomainresult"></a>
<a id="tocslistrepositoriesindomainresult"></a>

```json
{
  "repositories": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositories|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResult">ListTagsForResourceResult</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresult"></a>
<a id="schema_ListTagsForResourceResult"></a>
<a id="tocSlisttagsforresourceresult"></a>
<a id="tocslisttagsforresourceresult"></a>

```json
{
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|false|none|none|

<h2 id="tocS_PublishPackageVersionResult">PublishPackageVersionResult</h2>
<!-- backwards compatibility -->
<a id="schemapublishpackageversionresult"></a>
<a id="schema_PublishPackageVersionResult"></a>
<a id="tocSpublishpackageversionresult"></a>
<a id="tocspublishpackageversionresult"></a>

```json
{
  "format": {},
  "namespace": {},
  "package": {},
  "version": {},
  "versionRevision": {},
  "status": {},
  "asset": {
    "name": {},
    "size": {},
    "hashes": {
      "property1": "stringstringstringstringstringst",
      "property2": "stringstringstringstringstringst"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|format|object|false|none|none|
|namespace|object|false|none|none|
|package|object|false|none|none|
|version|object|false|none|none|
|versionRevision|object|false|none|none|
|status|object|false|none|none|
|asset|object|false|none|none|

<h2 id="tocS_PutDomainPermissionsPolicyResult">PutDomainPermissionsPolicyResult</h2>
<!-- backwards compatibility -->
<a id="schemaputdomainpermissionspolicyresult"></a>
<a id="schema_PutDomainPermissionsPolicyResult"></a>
<a id="tocSputdomainpermissionspolicyresult"></a>
<a id="tocsputdomainpermissionspolicyresult"></a>

```json
{
  "policy": {
    "resourceArn": {},
    "revision": {},
    "document": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policy|object|false|none|none|

<h2 id="tocS_PutPackageOriginConfigurationResult">PutPackageOriginConfigurationResult</h2>
<!-- backwards compatibility -->
<a id="schemaputpackageoriginconfigurationresult"></a>
<a id="schema_PutPackageOriginConfigurationResult"></a>
<a id="tocSputpackageoriginconfigurationresult"></a>
<a id="tocsputpackageoriginconfigurationresult"></a>

```json
{
  "originConfiguration": {
    "restrictions": {
      "publish": {},
      "upstream": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|originConfiguration|object|false|none|none|

<h2 id="tocS_AllowPublish">AllowPublish</h2>
<!-- backwards compatibility -->
<a id="schemaallowpublish"></a>
<a id="schema_AllowPublish"></a>
<a id="tocSallowpublish"></a>
<a id="tocsallowpublish"></a>

```json
"ALLOW"
```

<h2 id="tocS_AllowUpstream">AllowUpstream</h2>
<!-- backwards compatibility -->
<a id="schemaallowupstream"></a>
<a id="schema_AllowUpstream"></a>
<a id="tocSallowupstream"></a>
<a id="tocsallowupstream"></a>

```json
"ALLOW"
```

<h2 id="tocS_PutRepositoryPermissionsPolicyResult">PutRepositoryPermissionsPolicyResult</h2>
<!-- backwards compatibility -->
<a id="schemaputrepositorypermissionspolicyresult"></a>
<a id="schema_PutRepositoryPermissionsPolicyResult"></a>
<a id="tocSputrepositorypermissionspolicyresult"></a>
<a id="tocsputrepositorypermissionspolicyresult"></a>

```json
{
  "policy": {
    "resourceArn": {},
    "revision": {},
    "document": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policy|object|false|none|none|

<h2 id="tocS_TagResourceResult">TagResourceResult</h2>
<!-- backwards compatibility -->
<a id="schematagresourceresult"></a>
<a id="schema_TagResourceResult"></a>
<a id="tocStagresourceresult"></a>
<a id="tocstagresourceresult"></a>

```json
{}
```

<h2 id="tocS_UntagResourceResult">UntagResourceResult</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceresult"></a>
<a id="schema_UntagResourceResult"></a>
<a id="tocSuntagresourceresult"></a>
<a id="tocsuntagresourceresult"></a>

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

<h2 id="tocS_UpdatePackageVersionsStatusResult">UpdatePackageVersionsStatusResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepackageversionsstatusresult"></a>
<a id="schema_UpdatePackageVersionsStatusResult"></a>
<a id="tocSupdatepackageversionsstatusresult"></a>
<a id="tocsupdatepackageversionsstatusresult"></a>

```json
{
  "successfulVersions": {
    "property1": {
      "revision": {},
      "status": {}
    },
    "property2": {
      "revision": {},
      "status": {}
    }
  },
  "failedVersions": {
    "property1": {
      "errorCode": {},
      "errorMessage": {}
    },
    "property2": {
      "errorCode": {},
      "errorMessage": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|successfulVersions|object|false|none|none|
|failedVersions|object|false|none|none|

<h2 id="tocS_UpdateRepositoryResult">UpdateRepositoryResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterepositoryresult"></a>
<a id="schema_UpdateRepositoryResult"></a>
<a id="tocSupdaterepositoryresult"></a>
<a id="tocsupdaterepositoryresult"></a>

```json
{
  "repository": {
    "name": {},
    "administratorAccount": {},
    "domainName": {},
    "domainOwner": {},
    "arn": {},
    "description": {},
    "upstreams": {},
    "externalConnections": {},
    "createdTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repository|object|false|none|none|

<h2 id="tocS_AccountId">AccountId</h2>
<!-- backwards compatibility -->
<a id="schemaaccountid"></a>
<a id="schema_AccountId"></a>
<a id="tocSaccountid"></a>
<a id="tocsaccountid"></a>

```json
"stringstring"
```

<h2 id="tocS_Arn">Arn</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_Arn"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"string"
```

<h2 id="tocS_Asset">Asset</h2>
<!-- backwards compatibility -->
<a id="schemaasset"></a>
<a id="schema_Asset"></a>
<a id="tocSasset"></a>
<a id="tocsasset"></a>

```json
"string"
```

<h2 id="tocS_HashValue">HashValue</h2>
<!-- backwards compatibility -->
<a id="schemahashvalue"></a>
<a id="schema_HashValue"></a>
<a id="tocShashvalue"></a>
<a id="tocshashvalue"></a>

```json
"stringstringstringstringstringst"
```

<h2 id="tocS_AssetHashes">AssetHashes</h2>
<!-- backwards compatibility -->
<a id="schemaassethashes"></a>
<a id="schema_AssetHashes"></a>
<a id="tocSassethashes"></a>
<a id="tocsassethashes"></a>

```json
{
  "property1": "stringstringstringstringstringst",
  "property2": "stringstringstringstringstringst"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[HashValue](#schemahashvalue)|false|none|none|

<h2 id="tocS_AssetName">AssetName</h2>
<!-- backwards compatibility -->
<a id="schemaassetname"></a>
<a id="schema_AssetName"></a>
<a id="tocSassetname"></a>
<a id="tocsassetname"></a>

```json
"string"
```

<h2 id="tocS_LongOptional">LongOptional</h2>
<!-- backwards compatibility -->
<a id="schemalongoptional"></a>
<a id="schema_LongOptional"></a>
<a id="tocSlongoptional"></a>
<a id="tocslongoptional"></a>

```json
0
```

<h2 id="tocS_AssetSummary">AssetSummary</h2>
<!-- backwards compatibility -->
<a id="schemaassetsummary"></a>
<a id="schema_AssetSummary"></a>
<a id="tocSassetsummary"></a>
<a id="tocsassetsummary"></a>

```json
{
  "name": {},
  "size": {},
  "hashes": {
    "property1": "stringstringstringstringstringst",
    "property2": "stringstringstringstringstringst"
  }
}
```

 Contains details about a package version asset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|size|object|false|none|none|
|hashes|object|false|none|none|

<h2 id="tocS_AssetSummaryList">AssetSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaassetsummarylist"></a>
<a id="schema_AssetSummaryList"></a>
<a id="tocSassetsummarylist"></a>
<a id="tocsassetsummarylist"></a>

```json
[
  {
    "name": {},
    "size": {},
    "hashes": {
      "property1": "stringstringstringstringstringst",
      "property2": "stringstringstringstringstringst"
    }
  }
]
```

<h2 id="tocS_DomainName">DomainName</h2>
<!-- backwards compatibility -->
<a id="schemadomainname"></a>
<a id="schema_DomainName"></a>
<a id="tocSdomainname"></a>
<a id="tocsdomainname"></a>

```json
"string"
```

<h2 id="tocS_RepositoryName">RepositoryName</h2>
<!-- backwards compatibility -->
<a id="schemarepositoryname"></a>
<a id="schema_RepositoryName"></a>
<a id="tocSrepositoryname"></a>
<a id="tocsrepositoryname"></a>

```json
"string"
```

<h2 id="tocS_ExternalConnectionName">ExternalConnectionName</h2>
<!-- backwards compatibility -->
<a id="schemaexternalconnectionname"></a>
<a id="schema_ExternalConnectionName"></a>
<a id="tocSexternalconnectionname"></a>
<a id="tocsexternalconnectionname"></a>

```json
"string"
```

<h2 id="tocS_AssociateExternalConnectionRequest">AssociateExternalConnectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociateexternalconnectionrequest"></a>
<a id="schema_AssociateExternalConnectionRequest"></a>
<a id="tocSassociateexternalconnectionrequest"></a>
<a id="tocsassociateexternalconnectionrequest"></a>

```json
{}
```

<h2 id="tocS_RepositoryDescription">RepositoryDescription</h2>
<!-- backwards compatibility -->
<a id="schemarepositorydescription"></a>
<a id="schema_RepositoryDescription"></a>
<a id="tocSrepositorydescription"></a>
<a id="tocsrepositorydescription"></a>

```json
{
  "name": {},
  "administratorAccount": {},
  "domainName": {},
  "domainOwner": {},
  "arn": {},
  "description": {},
  "upstreams": {},
  "externalConnections": {},
  "createdTime": {}
}
```

 The details of a repository stored in CodeArtifact. A CodeArtifact repository contains a set of package versions, each of which maps to a set of assets. Repositories are polyglot—a single repository can contain packages of any supported type. Each repository exposes endpoints for fetching and publishing packages using tools like the <code>npm</code> CLI, the Maven CLI (<code>mvn</code>), and <code>pip</code>. You can create up to 100 repositories per Amazon Web Services account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|administratorAccount|object|false|none|none|
|domainName|object|false|none|none|
|domainOwner|object|false|none|none|
|arn|object|false|none|none|
|description|object|false|none|none|
|upstreams|object|false|none|none|
|externalConnections|object|false|none|none|
|createdTime|object|false|none|none|

<h2 id="tocS_AuthorizationTokenDurationSeconds">AuthorizationTokenDurationSeconds</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizationtokendurationseconds"></a>
<a id="schema_AuthorizationTokenDurationSeconds"></a>
<a id="tocSauthorizationtokendurationseconds"></a>
<a id="tocsauthorizationtokendurationseconds"></a>

```json
0
```

<h2 id="tocS_BooleanOptional">BooleanOptional</h2>
<!-- backwards compatibility -->
<a id="schemabooleanoptional"></a>
<a id="schema_BooleanOptional"></a>
<a id="tocSbooleanoptional"></a>
<a id="tocsbooleanoptional"></a>

```json
true
```

<h2 id="tocS_PackageFormat">PackageFormat</h2>
<!-- backwards compatibility -->
<a id="schemapackageformat"></a>
<a id="schema_PackageFormat"></a>
<a id="tocSpackageformat"></a>
<a id="tocspackageformat"></a>

```json
"npm"
```

<h2 id="tocS_PackageNamespace">PackageNamespace</h2>
<!-- backwards compatibility -->
<a id="schemapackagenamespace"></a>
<a id="schema_PackageNamespace"></a>
<a id="tocSpackagenamespace"></a>
<a id="tocspackagenamespace"></a>

```json
"string"
```

<h2 id="tocS_PackageName">PackageName</h2>
<!-- backwards compatibility -->
<a id="schemapackagename"></a>
<a id="schema_PackageName"></a>
<a id="tocSpackagename"></a>
<a id="tocspackagename"></a>

```json
"string"
```

<h2 id="tocS_PackageVersionList">PackageVersionList</h2>
<!-- backwards compatibility -->
<a id="schemapackageversionlist"></a>
<a id="schema_PackageVersionList"></a>
<a id="tocSpackageversionlist"></a>
<a id="tocspackageversionlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_PackageVersionRevisionMap">PackageVersionRevisionMap</h2>
<!-- backwards compatibility -->
<a id="schemapackageversionrevisionmap"></a>
<a id="schema_PackageVersionRevisionMap"></a>
<a id="tocSpackageversionrevisionmap"></a>
<a id="tocspackageversionrevisionmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[PackageVersionRevision](#schemapackageversionrevision)|false|none|none|

<h2 id="tocS_CopyPackageVersionsRequest">CopyPackageVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemacopypackageversionsrequest"></a>
<a id="schema_CopyPackageVersionsRequest"></a>
<a id="tocScopypackageversionsrequest"></a>
<a id="tocscopypackageversionsrequest"></a>

```json
{
  "versions": {},
  "versionRevisions": {
    "property1": "string",
    "property2": "string"
  },
  "allowOverwrite": {},
  "includeFromUpstream": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|versions|object|false|none|none|
|versionRevisions|object|false|none|none|
|allowOverwrite|object|false|none|none|
|includeFromUpstream|object|false|none|none|

<h2 id="tocS_SuccessfulPackageVersionInfoMap">SuccessfulPackageVersionInfoMap</h2>
<!-- backwards compatibility -->
<a id="schemasuccessfulpackageversioninfomap"></a>
<a id="schema_SuccessfulPackageVersionInfoMap"></a>
<a id="tocSsuccessfulpackageversioninfomap"></a>
<a id="tocssuccessfulpackageversioninfomap"></a>

```json
{
  "property1": {
    "revision": {},
    "status": {}
  },
  "property2": {
    "revision": {},
    "status": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[SuccessfulPackageVersionInfo](#schemasuccessfulpackageversioninfo)|false|none| Contains the revision and status of a package version. |

<h2 id="tocS_PackageVersionErrorMap">PackageVersionErrorMap</h2>
<!-- backwards compatibility -->
<a id="schemapackageversionerrormap"></a>
<a id="schema_PackageVersionErrorMap"></a>
<a id="tocSpackageversionerrormap"></a>
<a id="tocspackageversionerrormap"></a>

```json
{
  "property1": {
    "errorCode": {},
    "errorMessage": {}
  },
  "property2": {
    "errorCode": {},
    "errorMessage": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[PackageVersionError](#schemapackageversionerror)|false|none|l An error associated with package. |

<h2 id="tocS_TagList">TagList</h2>
<!-- backwards compatibility -->
<a id="schemataglist"></a>
<a id="schema_TagList"></a>
<a id="tocStaglist"></a>
<a id="tocstaglist"></a>

```json
[
  {
    "key": {},
    "value": {}
  }
]
```

<h2 id="tocS_CreateDomainRequest">CreateDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedomainrequest"></a>
<a id="schema_CreateDomainRequest"></a>
<a id="tocScreatedomainrequest"></a>
<a id="tocscreatedomainrequest"></a>

```json
{
  "encryptionKey": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encryptionKey|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_DomainDescription">DomainDescription</h2>
<!-- backwards compatibility -->
<a id="schemadomaindescription"></a>
<a id="schema_DomainDescription"></a>
<a id="tocSdomaindescription"></a>
<a id="tocsdomaindescription"></a>

```json
{
  "name": {},
  "owner": {},
  "arn": {},
  "status": {},
  "createdTime": {},
  "encryptionKey": {},
  "repositoryCount": {},
  "assetSizeBytes": {},
  "s3BucketArn": {}
}
```

 Information about a domain. A domain is a container for repositories. When you create a domain, it is empty until you add one or more repositories.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|owner|object|false|none|none|
|arn|object|false|none|none|
|status|object|false|none|none|
|createdTime|object|false|none|none|
|encryptionKey|object|false|none|none|
|repositoryCount|object|false|none|none|
|assetSizeBytes|object|false|none|none|
|s3BucketArn|object|false|none|none|

<h2 id="tocS_Description">Description</h2>
<!-- backwards compatibility -->
<a id="schemadescription"></a>
<a id="schema_Description"></a>
<a id="tocSdescription"></a>
<a id="tocsdescription"></a>

```json
"string"
```

<h2 id="tocS_UpstreamRepositoryList">UpstreamRepositoryList</h2>
<!-- backwards compatibility -->
<a id="schemaupstreamrepositorylist"></a>
<a id="schema_UpstreamRepositoryList"></a>
<a id="tocSupstreamrepositorylist"></a>
<a id="tocsupstreamrepositorylist"></a>

```json
[
  {
    "repositoryName": {}
  }
]
```

<h2 id="tocS_CreateRepositoryRequest">CreateRepositoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreaterepositoryrequest"></a>
<a id="schema_CreateRepositoryRequest"></a>
<a id="tocScreaterepositoryrequest"></a>
<a id="tocscreaterepositoryrequest"></a>

```json
{
  "description": {},
  "upstreams": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|object|false|none|none|
|upstreams|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_PolicyRevision">PolicyRevision</h2>
<!-- backwards compatibility -->
<a id="schemapolicyrevision"></a>
<a id="schema_PolicyRevision"></a>
<a id="tocSpolicyrevision"></a>
<a id="tocspolicyrevision"></a>

```json
"string"
```

<h2 id="tocS_DeleteDomainPermissionsPolicyRequest">DeleteDomainPermissionsPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedomainpermissionspolicyrequest"></a>
<a id="schema_DeleteDomainPermissionsPolicyRequest"></a>
<a id="tocSdeletedomainpermissionspolicyrequest"></a>
<a id="tocsdeletedomainpermissionspolicyrequest"></a>

```json
{}
```

<h2 id="tocS_ResourcePolicy">ResourcePolicy</h2>
<!-- backwards compatibility -->
<a id="schemaresourcepolicy"></a>
<a id="schema_ResourcePolicy"></a>
<a id="tocSresourcepolicy"></a>
<a id="tocsresourcepolicy"></a>

```json
{
  "resourceArn": {},
  "revision": {},
  "document": {}
}
```

 An CodeArtifact resource policy that contains a resource ARN, document details, and a revision.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceArn|object|false|none|none|
|revision|object|false|none|none|
|document|object|false|none|none|

<h2 id="tocS_DeleteDomainRequest">DeleteDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedomainrequest"></a>
<a id="schema_DeleteDomainRequest"></a>
<a id="tocSdeletedomainrequest"></a>
<a id="tocsdeletedomainrequest"></a>

```json
{}
```

<h2 id="tocS_DeletePackageRequest">DeletePackageRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletepackagerequest"></a>
<a id="schema_DeletePackageRequest"></a>
<a id="tocSdeletepackagerequest"></a>
<a id="tocsdeletepackagerequest"></a>

```json
{}
```

<h2 id="tocS_PackageSummary">PackageSummary</h2>
<!-- backwards compatibility -->
<a id="schemapackagesummary"></a>
<a id="schema_PackageSummary"></a>
<a id="tocSpackagesummary"></a>
<a id="tocspackagesummary"></a>

```json
{
  "format": {},
  "namespace": {},
  "package": {},
  "originConfiguration": {
    "restrictions": {
      "publish": {},
      "upstream": {}
    }
  }
}
```

 Details about a package, including its format, namespace, and name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|format|object|false|none|none|
|namespace|object|false|none|none|
|package|object|false|none|none|
|originConfiguration|object|false|none|none|

<h2 id="tocS_PackageVersionStatus">PackageVersionStatus</h2>
<!-- backwards compatibility -->
<a id="schemapackageversionstatus"></a>
<a id="schema_PackageVersionStatus"></a>
<a id="tocSpackageversionstatus"></a>
<a id="tocspackageversionstatus"></a>

```json
"Published"
```

<h2 id="tocS_DeletePackageVersionsRequest">DeletePackageVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletepackageversionsrequest"></a>
<a id="schema_DeletePackageVersionsRequest"></a>
<a id="tocSdeletepackageversionsrequest"></a>
<a id="tocsdeletepackageversionsrequest"></a>

```json
{
  "versions": {},
  "expectedStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|versions|object|true|none|none|
|expectedStatus|object|false|none|none|

<h2 id="tocS_DeleteRepositoryPermissionsPolicyRequest">DeleteRepositoryPermissionsPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleterepositorypermissionspolicyrequest"></a>
<a id="schema_DeleteRepositoryPermissionsPolicyRequest"></a>
<a id="tocSdeleterepositorypermissionspolicyrequest"></a>
<a id="tocsdeleterepositorypermissionspolicyrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteRepositoryRequest">DeleteRepositoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleterepositoryrequest"></a>
<a id="schema_DeleteRepositoryRequest"></a>
<a id="tocSdeleterepositoryrequest"></a>
<a id="tocsdeleterepositoryrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeDomainRequest">DescribeDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedomainrequest"></a>
<a id="schema_DescribeDomainRequest"></a>
<a id="tocSdescribedomainrequest"></a>
<a id="tocsdescribedomainrequest"></a>

```json
{}
```

<h2 id="tocS_DescribePackageRequest">DescribePackageRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribepackagerequest"></a>
<a id="schema_DescribePackageRequest"></a>
<a id="tocSdescribepackagerequest"></a>
<a id="tocsdescribepackagerequest"></a>

```json
{}
```

<h2 id="tocS_PackageDescription">PackageDescription</h2>
<!-- backwards compatibility -->
<a id="schemapackagedescription"></a>
<a id="schema_PackageDescription"></a>
<a id="tocSpackagedescription"></a>
<a id="tocspackagedescription"></a>

```json
{
  "format": {},
  "namespace": {},
  "name": {},
  "originConfiguration": {
    "restrictions": {
      "publish": {},
      "upstream": {}
    }
  }
}
```

Details about a package.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|format|object|false|none|none|
|namespace|object|false|none|none|
|name|object|false|none|none|
|originConfiguration|object|false|none|none|

<h2 id="tocS_DescribePackageVersionRequest">DescribePackageVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribepackageversionrequest"></a>
<a id="schema_DescribePackageVersionRequest"></a>
<a id="tocSdescribepackageversionrequest"></a>
<a id="tocsdescribepackageversionrequest"></a>

```json
{}
```

<h2 id="tocS_PackageVersionDescription">PackageVersionDescription</h2>
<!-- backwards compatibility -->
<a id="schemapackageversiondescription"></a>
<a id="schema_PackageVersionDescription"></a>
<a id="tocSpackageversiondescription"></a>
<a id="tocspackageversiondescription"></a>

```json
{
  "format": {},
  "namespace": {},
  "packageName": {},
  "displayName": {},
  "version": {},
  "summary": {},
  "homePage": {},
  "sourceCodeRepository": {},
  "publishedTime": {},
  "licenses": {},
  "revision": {},
  "status": {},
  "origin": {
    "domainEntryPoint": {
      "repositoryName": {},
      "externalConnectionName": {}
    },
    "originType": {}
  }
}
```

 Details about a package version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|format|object|false|none|none|
|namespace|object|false|none|none|
|packageName|object|false|none|none|
|displayName|object|false|none|none|
|version|object|false|none|none|
|summary|object|false|none|none|
|homePage|object|false|none|none|
|sourceCodeRepository|object|false|none|none|
|publishedTime|object|false|none|none|
|licenses|object|false|none|none|
|revision|object|false|none|none|
|status|object|false|none|none|
|origin|object|false|none|none|

<h2 id="tocS_DescribeRepositoryRequest">DescribeRepositoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescriberepositoryrequest"></a>
<a id="schema_DescribeRepositoryRequest"></a>
<a id="tocSdescriberepositoryrequest"></a>
<a id="tocsdescriberepositoryrequest"></a>

```json
{}
```

<h2 id="tocS_DisassociateExternalConnectionRequest">DisassociateExternalConnectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateexternalconnectionrequest"></a>
<a id="schema_DisassociateExternalConnectionRequest"></a>
<a id="tocSdisassociateexternalconnectionrequest"></a>
<a id="tocsdisassociateexternalconnectionrequest"></a>

```json
{}
```

<h2 id="tocS_DisposePackageVersionsRequest">DisposePackageVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisposepackageversionsrequest"></a>
<a id="schema_DisposePackageVersionsRequest"></a>
<a id="tocSdisposepackageversionsrequest"></a>
<a id="tocsdisposepackageversionsrequest"></a>

```json
{
  "versions": {},
  "versionRevisions": {
    "property1": "string",
    "property2": "string"
  },
  "expectedStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|versions|object|true|none|none|
|versionRevisions|object|false|none|none|
|expectedStatus|object|false|none|none|

<h2 id="tocS_DomainStatus">DomainStatus</h2>
<!-- backwards compatibility -->
<a id="schemadomainstatus"></a>
<a id="schema_DomainStatus"></a>
<a id="tocSdomainstatus"></a>
<a id="tocsdomainstatus"></a>

```json
"Active"
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

<h2 id="tocS_Integer">Integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_Integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
0
```

<h2 id="tocS_Long">Long</h2>
<!-- backwards compatibility -->
<a id="schemalong"></a>
<a id="schema_Long"></a>
<a id="tocSlong"></a>
<a id="tocslong"></a>

```json
0
```

<h2 id="tocS_DomainEntryPoint">DomainEntryPoint</h2>
<!-- backwards compatibility -->
<a id="schemadomainentrypoint"></a>
<a id="schema_DomainEntryPoint"></a>
<a id="tocSdomainentrypoint"></a>
<a id="tocsdomainentrypoint"></a>

```json
{
  "repositoryName": {},
  "externalConnectionName": {}
}
```

Information about how a package originally entered the CodeArtifact domain. For packages published directly to CodeArtifact, the entry point is the repository it was published to. For packages ingested from an external repository, the entry point is the external connection that it was ingested from. An external connection is a CodeArtifact repository that is connected to an external repository such as the npm registry or NuGet gallery.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|false|none|none|
|externalConnectionName|object|false|none|none|

<h2 id="tocS_DomainSummary">DomainSummary</h2>
<!-- backwards compatibility -->
<a id="schemadomainsummary"></a>
<a id="schema_DomainSummary"></a>
<a id="tocSdomainsummary"></a>
<a id="tocsdomainsummary"></a>

```json
{
  "name": {},
  "owner": {},
  "arn": {},
  "status": {},
  "createdTime": {},
  "encryptionKey": {}
}
```

 Information about a domain, including its name, Amazon Resource Name (ARN), and status. The <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListDomains.html">ListDomains</a> operation returns a list of <code>DomainSummary</code> objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|owner|object|false|none|none|
|arn|object|false|none|none|
|status|object|false|none|none|
|createdTime|object|false|none|none|
|encryptionKey|object|false|none|none|

<h2 id="tocS_DomainSummaryList">DomainSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemadomainsummarylist"></a>
<a id="schema_DomainSummaryList"></a>
<a id="tocSdomainsummarylist"></a>
<a id="tocsdomainsummarylist"></a>

```json
[
  {
    "name": {},
    "owner": {},
    "arn": {},
    "status": {},
    "createdTime": {},
    "encryptionKey": {}
  }
]
```

<h2 id="tocS_ErrorMessage">ErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemaerrormessage"></a>
<a id="schema_ErrorMessage"></a>
<a id="tocSerrormessage"></a>
<a id="tocserrormessage"></a>

```json
"string"
```

<h2 id="tocS_ExternalConnectionStatus">ExternalConnectionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaexternalconnectionstatus"></a>
<a id="schema_ExternalConnectionStatus"></a>
<a id="tocSexternalconnectionstatus"></a>
<a id="tocsexternalconnectionstatus"></a>

```json
"Available"
```

<h2 id="tocS_GetAuthorizationTokenRequest">GetAuthorizationTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetauthorizationtokenrequest"></a>
<a id="schema_GetAuthorizationTokenRequest"></a>
<a id="tocSgetauthorizationtokenrequest"></a>
<a id="tocsgetauthorizationtokenrequest"></a>

```json
{}
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

<h2 id="tocS_GetDomainPermissionsPolicyRequest">GetDomainPermissionsPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdomainpermissionspolicyrequest"></a>
<a id="schema_GetDomainPermissionsPolicyRequest"></a>
<a id="tocSgetdomainpermissionspolicyrequest"></a>
<a id="tocsgetdomainpermissionspolicyrequest"></a>

```json
{}
```

<h2 id="tocS_GetPackageVersionAssetRequest">GetPackageVersionAssetRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetpackageversionassetrequest"></a>
<a id="schema_GetPackageVersionAssetRequest"></a>
<a id="tocSgetpackageversionassetrequest"></a>
<a id="tocsgetpackageversionassetrequest"></a>

```json
{}
```

<h2 id="tocS_GetPackageVersionReadmeRequest">GetPackageVersionReadmeRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetpackageversionreadmerequest"></a>
<a id="schema_GetPackageVersionReadmeRequest"></a>
<a id="tocSgetpackageversionreadmerequest"></a>
<a id="tocsgetpackageversionreadmerequest"></a>

```json
{}
```

<h2 id="tocS_GetRepositoryEndpointRequest">GetRepositoryEndpointRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetrepositoryendpointrequest"></a>
<a id="schema_GetRepositoryEndpointRequest"></a>
<a id="tocSgetrepositoryendpointrequest"></a>
<a id="tocsgetrepositoryendpointrequest"></a>

```json
{}
```

<h2 id="tocS_GetRepositoryPermissionsPolicyRequest">GetRepositoryPermissionsPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetrepositorypermissionspolicyrequest"></a>
<a id="schema_GetRepositoryPermissionsPolicyRequest"></a>
<a id="tocSgetrepositorypermissionspolicyrequest"></a>
<a id="tocsgetrepositorypermissionspolicyrequest"></a>

```json
{}
```

<h2 id="tocS_HashAlgorithm">HashAlgorithm</h2>
<!-- backwards compatibility -->
<a id="schemahashalgorithm"></a>
<a id="schema_HashAlgorithm"></a>
<a id="tocShashalgorithm"></a>
<a id="tocshashalgorithm"></a>

```json
"MD5"
```

<h2 id="tocS_LicenseInfo">LicenseInfo</h2>
<!-- backwards compatibility -->
<a id="schemalicenseinfo"></a>
<a id="schema_LicenseInfo"></a>
<a id="tocSlicenseinfo"></a>
<a id="tocslicenseinfo"></a>

```json
{
  "name": {},
  "url": {}
}
```

 Details of the license data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|url|object|false|none|none|

<h2 id="tocS_LicenseInfoList">LicenseInfoList</h2>
<!-- backwards compatibility -->
<a id="schemalicenseinfolist"></a>
<a id="schema_LicenseInfoList"></a>
<a id="tocSlicenseinfolist"></a>
<a id="tocslicenseinfolist"></a>

```json
[
  {
    "name": {},
    "url": {}
  }
]
```

<h2 id="tocS_ListDomainsMaxResults">ListDomainsMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemalistdomainsmaxresults"></a>
<a id="schema_ListDomainsMaxResults"></a>
<a id="tocSlistdomainsmaxresults"></a>
<a id="tocslistdomainsmaxresults"></a>

```json
1
```

<h2 id="tocS_PaginationToken">PaginationToken</h2>
<!-- backwards compatibility -->
<a id="schemapaginationtoken"></a>
<a id="schema_PaginationToken"></a>
<a id="tocSpaginationtoken"></a>
<a id="tocspaginationtoken"></a>

```json
"string"
```

<h2 id="tocS_ListDomainsRequest">ListDomainsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdomainsrequest"></a>
<a id="schema_ListDomainsRequest"></a>
<a id="tocSlistdomainsrequest"></a>
<a id="tocslistdomainsrequest"></a>

```json
{
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListPackageVersionAssetsMaxResults">ListPackageVersionAssetsMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemalistpackageversionassetsmaxresults"></a>
<a id="schema_ListPackageVersionAssetsMaxResults"></a>
<a id="tocSlistpackageversionassetsmaxresults"></a>
<a id="tocslistpackageversionassetsmaxresults"></a>

```json
1
```

<h2 id="tocS_ListPackageVersionAssetsRequest">ListPackageVersionAssetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpackageversionassetsrequest"></a>
<a id="schema_ListPackageVersionAssetsRequest"></a>
<a id="tocSlistpackageversionassetsrequest"></a>
<a id="tocslistpackageversionassetsrequest"></a>

```json
{}
```

<h2 id="tocS_ListPackageVersionDependenciesRequest">ListPackageVersionDependenciesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpackageversiondependenciesrequest"></a>
<a id="schema_ListPackageVersionDependenciesRequest"></a>
<a id="tocSlistpackageversiondependenciesrequest"></a>
<a id="tocslistpackageversiondependenciesrequest"></a>

```json
{}
```

<h2 id="tocS_PackageDependencyList">PackageDependencyList</h2>
<!-- backwards compatibility -->
<a id="schemapackagedependencylist"></a>
<a id="schema_PackageDependencyList"></a>
<a id="tocSpackagedependencylist"></a>
<a id="tocspackagedependencylist"></a>

```json
[
  {
    "namespace": {},
    "package": {},
    "dependencyType": {},
    "versionRequirement": {}
  }
]
```

<h2 id="tocS_ListPackageVersionsMaxResults">ListPackageVersionsMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemalistpackageversionsmaxresults"></a>
<a id="schema_ListPackageVersionsMaxResults"></a>
<a id="tocSlistpackageversionsmaxresults"></a>
<a id="tocslistpackageversionsmaxresults"></a>

```json
1
```

<h2 id="tocS_PackageVersionSortType">PackageVersionSortType</h2>
<!-- backwards compatibility -->
<a id="schemapackageversionsorttype"></a>
<a id="schema_PackageVersionSortType"></a>
<a id="tocSpackageversionsorttype"></a>
<a id="tocspackageversionsorttype"></a>

```json
"PUBLISHED_TIME"
```

<h2 id="tocS_PackageVersionOriginType">PackageVersionOriginType</h2>
<!-- backwards compatibility -->
<a id="schemapackageversionorigintype"></a>
<a id="schema_PackageVersionOriginType"></a>
<a id="tocSpackageversionorigintype"></a>
<a id="tocspackageversionorigintype"></a>

```json
"INTERNAL"
```

<h2 id="tocS_ListPackageVersionsRequest">ListPackageVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpackageversionsrequest"></a>
<a id="schema_ListPackageVersionsRequest"></a>
<a id="tocSlistpackageversionsrequest"></a>
<a id="tocslistpackageversionsrequest"></a>

```json
{}
```

<h2 id="tocS_PackageVersionSummaryList">PackageVersionSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapackageversionsummarylist"></a>
<a id="schema_PackageVersionSummaryList"></a>
<a id="tocSpackageversionsummarylist"></a>
<a id="tocspackageversionsummarylist"></a>

```json
[
  {
    "version": {},
    "revision": {},
    "status": {},
    "origin": {
      "domainEntryPoint": {
        "repositoryName": {},
        "externalConnectionName": {}
      },
      "originType": {}
    }
  }
]
```

<h2 id="tocS_ListPackagesMaxResults">ListPackagesMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemalistpackagesmaxresults"></a>
<a id="schema_ListPackagesMaxResults"></a>
<a id="tocSlistpackagesmaxresults"></a>
<a id="tocslistpackagesmaxresults"></a>

```json
1
```

<h2 id="tocS_ListPackagesRequest">ListPackagesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpackagesrequest"></a>
<a id="schema_ListPackagesRequest"></a>
<a id="tocSlistpackagesrequest"></a>
<a id="tocslistpackagesrequest"></a>

```json
{}
```

<h2 id="tocS_PackageSummaryList">PackageSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapackagesummarylist"></a>
<a id="schema_PackageSummaryList"></a>
<a id="tocSpackagesummarylist"></a>
<a id="tocspackagesummarylist"></a>

```json
[
  {
    "format": {},
    "namespace": {},
    "package": {},
    "originConfiguration": {
      "restrictions": {
        "publish": {},
        "upstream": {}
      }
    }
  }
]
```

<h2 id="tocS_ListRepositoriesInDomainMaxResults">ListRepositoriesInDomainMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemalistrepositoriesindomainmaxresults"></a>
<a id="schema_ListRepositoriesInDomainMaxResults"></a>
<a id="tocSlistrepositoriesindomainmaxresults"></a>
<a id="tocslistrepositoriesindomainmaxresults"></a>

```json
1
```

<h2 id="tocS_ListRepositoriesInDomainRequest">ListRepositoriesInDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistrepositoriesindomainrequest"></a>
<a id="schema_ListRepositoriesInDomainRequest"></a>
<a id="tocSlistrepositoriesindomainrequest"></a>
<a id="tocslistrepositoriesindomainrequest"></a>

```json
{}
```

<h2 id="tocS_RepositorySummaryList">RepositorySummaryList</h2>
<!-- backwards compatibility -->
<a id="schemarepositorysummarylist"></a>
<a id="schema_RepositorySummaryList"></a>
<a id="tocSrepositorysummarylist"></a>
<a id="tocsrepositorysummarylist"></a>

```json
[
  {
    "name": {},
    "administratorAccount": {},
    "domainName": {},
    "domainOwner": {},
    "arn": {},
    "description": {},
    "createdTime": {}
  }
]
```

<h2 id="tocS_ListRepositoriesMaxResults">ListRepositoriesMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemalistrepositoriesmaxresults"></a>
<a id="schema_ListRepositoriesMaxResults"></a>
<a id="tocSlistrepositoriesmaxresults"></a>
<a id="tocslistrepositoriesmaxresults"></a>

```json
1
```

<h2 id="tocS_ListRepositoriesRequest">ListRepositoriesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistrepositoriesrequest"></a>
<a id="schema_ListRepositoriesRequest"></a>
<a id="tocSlistrepositoriesrequest"></a>
<a id="tocslistrepositoriesrequest"></a>

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

<h2 id="tocS_PackageDependency">PackageDependency</h2>
<!-- backwards compatibility -->
<a id="schemapackagedependency"></a>
<a id="schema_PackageDependency"></a>
<a id="tocSpackagedependency"></a>
<a id="tocspackagedependency"></a>

```json
{
  "namespace": {},
  "package": {},
  "dependencyType": {},
  "versionRequirement": {}
}
```

 Details about a package dependency.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|namespace|object|false|none|none|
|package|object|false|none|none|
|dependencyType|object|false|none|none|
|versionRequirement|object|false|none|none|

<h2 id="tocS_PackageOriginConfiguration">PackageOriginConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemapackageoriginconfiguration"></a>
<a id="schema_PackageOriginConfiguration"></a>
<a id="tocSpackageoriginconfiguration"></a>
<a id="tocspackageoriginconfiguration"></a>

```json
{
  "restrictions": {
    "publish": {},
    "upstream": {}
  }
}
```

Details about the package origin configuration of a package.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|restrictions|object|false|none|none|

<h2 id="tocS_PackageOriginRestrictions">PackageOriginRestrictions</h2>
<!-- backwards compatibility -->
<a id="schemapackageoriginrestrictions"></a>
<a id="schema_PackageOriginRestrictions"></a>
<a id="tocSpackageoriginrestrictions"></a>
<a id="tocspackageoriginrestrictions"></a>

```json
{
  "publish": {},
  "upstream": {}
}
```

Details about the origin restrictions set on the package. The package origin restrictions determine how new versions of a package can be added to a specific repository.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|publish|object|true|none|none|
|upstream|object|true|none|none|

<h2 id="tocS_String255">String255</h2>
<!-- backwards compatibility -->
<a id="schemastring255"></a>
<a id="schema_String255"></a>
<a id="tocSstring255"></a>
<a id="tocsstring255"></a>

```json
"string"
```

<h2 id="tocS_PackageVersionOrigin">PackageVersionOrigin</h2>
<!-- backwards compatibility -->
<a id="schemapackageversionorigin"></a>
<a id="schema_PackageVersionOrigin"></a>
<a id="tocSpackageversionorigin"></a>
<a id="tocspackageversionorigin"></a>

```json
{
  "domainEntryPoint": {
    "repositoryName": {},
    "externalConnectionName": {}
  },
  "originType": {}
}
```

Information about how a package version was added to a repository.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainEntryPoint|object|false|none|none|
|originType|object|false|none|none|

<h2 id="tocS_PackageVersionErrorCode">PackageVersionErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemapackageversionerrorcode"></a>
<a id="schema_PackageVersionErrorCode"></a>
<a id="tocSpackageversionerrorcode"></a>
<a id="tocspackageversionerrorcode"></a>

```json
"ALREADY_EXISTS"
```

<h2 id="tocS_PackageVersionError">PackageVersionError</h2>
<!-- backwards compatibility -->
<a id="schemapackageversionerror"></a>
<a id="schema_PackageVersionError"></a>
<a id="tocSpackageversionerror"></a>
<a id="tocspackageversionerror"></a>

```json
{
  "errorCode": {},
  "errorMessage": {}
}
```

l An error associated with package.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorCode|object|false|none|none|
|errorMessage|object|false|none|none|

<h2 id="tocS_PackageVersionSummary">PackageVersionSummary</h2>
<!-- backwards compatibility -->
<a id="schemapackageversionsummary"></a>
<a id="schema_PackageVersionSummary"></a>
<a id="tocSpackageversionsummary"></a>
<a id="tocspackageversionsummary"></a>

```json
{
  "version": {},
  "revision": {},
  "status": {},
  "origin": {
    "domainEntryPoint": {
      "repositoryName": {},
      "externalConnectionName": {}
    },
    "originType": {}
  }
}
```

 Details about a package version, including its status, version, and revision. The <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersions.html">ListPackageVersions</a> operation returns a list of <code>PackageVersionSummary</code> objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|object|true|none|none|
|revision|object|false|none|none|
|status|object|true|none|none|
|origin|object|false|none|none|

<h2 id="tocS_PolicyDocument">PolicyDocument</h2>
<!-- backwards compatibility -->
<a id="schemapolicydocument"></a>
<a id="schema_PolicyDocument"></a>
<a id="tocSpolicydocument"></a>
<a id="tocspolicydocument"></a>

```json
"string"
```

<h2 id="tocS_SHA256">SHA256</h2>
<!-- backwards compatibility -->
<a id="schemasha256"></a>
<a id="schema_SHA256"></a>
<a id="tocSsha256"></a>
<a id="tocssha256"></a>

```json
"stringstringstringstringstringstringstringstringstringstringstri"
```

<h2 id="tocS_PublishPackageVersionRequest">PublishPackageVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemapublishpackageversionrequest"></a>
<a id="schema_PublishPackageVersionRequest"></a>
<a id="tocSpublishpackageversionrequest"></a>
<a id="tocspublishpackageversionrequest"></a>

```json
{
  "assetContent": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetContent|object|true|none|none|

<h2 id="tocS_PutDomainPermissionsPolicyRequest">PutDomainPermissionsPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputdomainpermissionspolicyrequest"></a>
<a id="schema_PutDomainPermissionsPolicyRequest"></a>
<a id="tocSputdomainpermissionspolicyrequest"></a>
<a id="tocsputdomainpermissionspolicyrequest"></a>

```json
{
  "domain": {},
  "domainOwner": {},
  "policyRevision": {},
  "policyDocument": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|object|true|none|none|
|domainOwner|object|false|none|none|
|policyRevision|object|false|none|none|
|policyDocument|object|true|none|none|

<h2 id="tocS_PutPackageOriginConfigurationRequest">PutPackageOriginConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputpackageoriginconfigurationrequest"></a>
<a id="schema_PutPackageOriginConfigurationRequest"></a>
<a id="tocSputpackageoriginconfigurationrequest"></a>
<a id="tocsputpackageoriginconfigurationrequest"></a>

```json
{
  "restrictions": {
    "publish": {},
    "upstream": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|restrictions|object|true|none|none|

<h2 id="tocS_PutRepositoryPermissionsPolicyRequest">PutRepositoryPermissionsPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputrepositorypermissionspolicyrequest"></a>
<a id="schema_PutRepositoryPermissionsPolicyRequest"></a>
<a id="tocSputrepositorypermissionspolicyrequest"></a>
<a id="tocsputrepositorypermissionspolicyrequest"></a>

```json
{
  "policyRevision": {},
  "policyDocument": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policyRevision|object|false|none|none|
|policyDocument|object|true|none|none|

<h2 id="tocS_UpstreamRepositoryInfoList">UpstreamRepositoryInfoList</h2>
<!-- backwards compatibility -->
<a id="schemaupstreamrepositoryinfolist"></a>
<a id="schema_UpstreamRepositoryInfoList"></a>
<a id="tocSupstreamrepositoryinfolist"></a>
<a id="tocsupstreamrepositoryinfolist"></a>

```json
[
  {
    "repositoryName": {}
  }
]
```

<h2 id="tocS_RepositoryExternalConnectionInfoList">RepositoryExternalConnectionInfoList</h2>
<!-- backwards compatibility -->
<a id="schemarepositoryexternalconnectioninfolist"></a>
<a id="schema_RepositoryExternalConnectionInfoList"></a>
<a id="tocSrepositoryexternalconnectioninfolist"></a>
<a id="tocsrepositoryexternalconnectioninfolist"></a>

```json
[
  {
    "externalConnectionName": {},
    "packageFormat": {},
    "status": {}
  }
]
```

<h2 id="tocS_RepositoryExternalConnectionInfo">RepositoryExternalConnectionInfo</h2>
<!-- backwards compatibility -->
<a id="schemarepositoryexternalconnectioninfo"></a>
<a id="schema_RepositoryExternalConnectionInfo"></a>
<a id="tocSrepositoryexternalconnectioninfo"></a>
<a id="tocsrepositoryexternalconnectioninfo"></a>

```json
{
  "externalConnectionName": {},
  "packageFormat": {},
  "status": {}
}
```

 Contains information about the external connection of a repository.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|externalConnectionName|object|false|none|none|
|packageFormat|object|false|none|none|
|status|object|false|none|none|

<h2 id="tocS_RepositorySummary">RepositorySummary</h2>
<!-- backwards compatibility -->
<a id="schemarepositorysummary"></a>
<a id="schema_RepositorySummary"></a>
<a id="tocSrepositorysummary"></a>
<a id="tocsrepositorysummary"></a>

```json
{
  "name": {},
  "administratorAccount": {},
  "domainName": {},
  "domainOwner": {},
  "arn": {},
  "description": {},
  "createdTime": {}
}
```

 Details about a repository, including its Amazon Resource Name (ARN), description, and domain information. The <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListRepositories.html">ListRepositories</a> operation returns a list of <code>RepositorySummary</code> objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|administratorAccount|object|false|none|none|
|domainName|object|false|none|none|
|domainOwner|object|false|none|none|
|arn|object|false|none|none|
|description|object|false|none|none|
|createdTime|object|false|none|none|

<h2 id="tocS_SuccessfulPackageVersionInfo">SuccessfulPackageVersionInfo</h2>
<!-- backwards compatibility -->
<a id="schemasuccessfulpackageversioninfo"></a>
<a id="schema_SuccessfulPackageVersionInfo"></a>
<a id="tocSsuccessfulpackageversioninfo"></a>
<a id="tocssuccessfulpackageversioninfo"></a>

```json
{
  "revision": {},
  "status": {}
}
```

 Contains the revision and status of a package version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|revision|object|false|none|none|
|status|object|false|none|none|

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

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
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|true|none|none|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{
  "tagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tagKeys|object|true|none|none|

<h2 id="tocS_UpdatePackageVersionsStatusRequest">UpdatePackageVersionsStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepackageversionsstatusrequest"></a>
<a id="schema_UpdatePackageVersionsStatusRequest"></a>
<a id="tocSupdatepackageversionsstatusrequest"></a>
<a id="tocsupdatepackageversionsstatusrequest"></a>

```json
{
  "versions": {},
  "versionRevisions": {
    "property1": "string",
    "property2": "string"
  },
  "expectedStatus": {},
  "targetStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|versions|object|true|none|none|
|versionRevisions|object|false|none|none|
|expectedStatus|object|false|none|none|
|targetStatus|object|true|none|none|

<h2 id="tocS_UpdateRepositoryRequest">UpdateRepositoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterepositoryrequest"></a>
<a id="schema_UpdateRepositoryRequest"></a>
<a id="tocSupdaterepositoryrequest"></a>
<a id="tocsupdaterepositoryrequest"></a>

```json
{
  "description": {},
  "upstreams": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|object|false|none|none|
|upstreams|object|false|none|none|

<h2 id="tocS_UpstreamRepositoryInfo">UpstreamRepositoryInfo</h2>
<!-- backwards compatibility -->
<a id="schemaupstreamrepositoryinfo"></a>
<a id="schema_UpstreamRepositoryInfo"></a>
<a id="tocSupstreamrepositoryinfo"></a>
<a id="tocsupstreamrepositoryinfo"></a>

```json
{
  "repositoryName": {}
}
```

 Information about an upstream repository.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|false|none|none|
