type EncryptionConfig = {
  resources?: {} | undefined
  provider?: { keyArn?: {} | undefined } | undefined
}
type Update = {
  id?: {} | undefined
  status?: {} | undefined
  type?: {} | undefined
  params?: {} | undefined
  createdAt?: {} | undefined
  errors?: {} | undefined
}
type AssociateEncryptionConfigResponse = { update?: Update | undefined }
type TagValue = string
type AssociateIdentityProviderConfigResponse = {
  update?: Update | undefined
  tags?: {} | undefined
}
type Addon = {
  addonName?: {} | undefined
  clusterName?: {} | undefined
  status?: {} | undefined
  addonVersion?: {} | undefined
  health?: { issues?: {} | undefined } | undefined
  addonArn?: {} | undefined
  createdAt?: {} | undefined
  modifiedAt?: {} | undefined
  serviceAccountRoleArn?: {} | undefined
  tags?: {} | undefined
  publisher?: {} | undefined
  owner?: {} | undefined
  marketplaceInformation?: { productId?: {} | undefined; productUrl?: {} | undefined } | undefined
  configurationValues?: {} | undefined
}
type CreateAddonResponse = { addon?: Addon | undefined }
type ListAddonsResponse = { addons?: {} | undefined; nextToken?: {} | undefined }
type CreateClusterResponse = {
  cluster?:
    | {
        name?: {} | undefined
        arn?: {} | undefined
        createdAt?: {} | undefined
        version?: {} | undefined
        endpoint?: {} | undefined
        roleArn?: {} | undefined
        resourcesVpcConfig?:
          | {
              subnetIds?: {} | undefined
              securityGroupIds?: {} | undefined
              clusterSecurityGroupId?: {} | undefined
              vpcId?: {} | undefined
              endpointPublicAccess?: {} | undefined
              endpointPrivateAccess?: {} | undefined
              publicAccessCidrs?: {} | undefined
            }
          | undefined
        kubernetesNetworkConfig?:
          | {
              serviceIpv4Cidr?: {} | undefined
              serviceIpv6Cidr?: {} | undefined
              ipFamily?: {} | undefined
            }
          | undefined
        logging?: { clusterLogging?: {} | undefined } | undefined
        identity?: { oidc?: { issuer?: {} | undefined } | undefined } | undefined
        status?: {} | undefined
        certificateAuthority?: { data?: {} | undefined } | undefined
        clientRequestToken?: {} | undefined
        platformVersion?: {} | undefined
        tags?: {} | undefined
        encryptionConfig?: {} | undefined
        connectorConfig?:
          | {
              activationId?: {} | undefined
              activationCode?: {} | undefined
              activationExpiry?: {} | undefined
              provider?: {} | undefined
              roleArn?: {} | undefined
            }
          | undefined
        id?: {} | undefined
        health?: { issues?: {} | undefined } | undefined
        outpostConfig?:
          | {
              outpostArns: {}
              controlPlaneInstanceType: {}
              controlPlanePlacement?: { groupName?: {} | undefined } | undefined
            }
          | undefined
      }
    | undefined
}
type String = string
type ListClustersResponse = { clusters?: {} | undefined; nextToken?: {} | undefined }
type FargateProfileSelector = { namespace?: {} | undefined; labels?: {} | undefined }
type CreateFargateProfileResponse = {
  fargateProfile?:
    | {
        fargateProfileName?: {} | undefined
        fargateProfileArn?: {} | undefined
        clusterName?: {} | undefined
        createdAt?: {} | undefined
        podExecutionRoleArn?: {} | undefined
        subnets?: {} | undefined
        selectors?: {} | undefined
        status?: {} | undefined
        tags?: {} | undefined
      }
    | undefined
}
type ListFargateProfilesResponse = {
  fargateProfileNames?: {} | undefined
  nextToken?: {} | undefined
}
type LabelValue = string
type Taint = { key?: {} | undefined; value?: {} | undefined; effect?: {} | undefined }
type CreateNodegroupResponse = {
  nodegroup?:
    | {
        nodegroupName?: {} | undefined
        nodegroupArn?: {} | undefined
        clusterName?: {} | undefined
        version?: {} | undefined
        releaseVersion?: {} | undefined
        createdAt?: {} | undefined
        modifiedAt?: {} | undefined
        status?: {} | undefined
        capacityType?: {} | undefined
        scalingConfig?:
          | { minSize?: {} | undefined; maxSize?: {} | undefined; desiredSize?: {} | undefined }
          | undefined
        instanceTypes?: {} | undefined
        subnets?: {} | undefined
        remoteAccess?:
          | { ec2SshKey?: {} | undefined; sourceSecurityGroups?: {} | undefined }
          | undefined
        amiType?: {} | undefined
        nodeRole?: {} | undefined
        labels?: {} | undefined
        taints?: {} | undefined
        resources?:
          | { autoScalingGroups?: {} | undefined; remoteAccessSecurityGroup?: {} | undefined }
          | undefined
        diskSize?: {} | undefined
        health?: { issues?: {} | undefined } | undefined
        updateConfig?:
          | { maxUnavailable?: {} | undefined; maxUnavailablePercentage?: {} | undefined }
          | undefined
        launchTemplate?:
          | { name?: {} | undefined; version?: {} | undefined; id?: {} | undefined }
          | undefined
        tags?: {} | undefined
      }
    | undefined
}
type ListNodegroupsResponse = { nodegroups?: {} | undefined; nextToken?: {} | undefined }
type DeleteAddonResponse = { addon?: Addon | undefined }
type DescribeAddonResponse = { addon?: Addon | undefined }
type DeleteClusterResponse = {
  cluster?:
    | {
        name?: {} | undefined
        arn?: {} | undefined
        createdAt?: {} | undefined
        version?: {} | undefined
        endpoint?: {} | undefined
        roleArn?: {} | undefined
        resourcesVpcConfig?:
          | {
              subnetIds?: {} | undefined
              securityGroupIds?: {} | undefined
              clusterSecurityGroupId?: {} | undefined
              vpcId?: {} | undefined
              endpointPublicAccess?: {} | undefined
              endpointPrivateAccess?: {} | undefined
              publicAccessCidrs?: {} | undefined
            }
          | undefined
        kubernetesNetworkConfig?:
          | {
              serviceIpv4Cidr?: {} | undefined
              serviceIpv6Cidr?: {} | undefined
              ipFamily?: {} | undefined
            }
          | undefined
        logging?: { clusterLogging?: {} | undefined } | undefined
        identity?: { oidc?: { issuer?: {} | undefined } | undefined } | undefined
        status?: {} | undefined
        certificateAuthority?: { data?: {} | undefined } | undefined
        clientRequestToken?: {} | undefined
        platformVersion?: {} | undefined
        tags?: {} | undefined
        encryptionConfig?: {} | undefined
        connectorConfig?:
          | {
              activationId?: {} | undefined
              activationCode?: {} | undefined
              activationExpiry?: {} | undefined
              provider?: {} | undefined
              roleArn?: {} | undefined
            }
          | undefined
        id?: {} | undefined
        health?: { issues?: {} | undefined } | undefined
        outpostConfig?:
          | {
              outpostArns: {}
              controlPlaneInstanceType: {}
              controlPlanePlacement?: { groupName?: {} | undefined } | undefined
            }
          | undefined
      }
    | undefined
}
type DescribeClusterResponse = {
  cluster?:
    | {
        name?: {} | undefined
        arn?: {} | undefined
        createdAt?: {} | undefined
        version?: {} | undefined
        endpoint?: {} | undefined
        roleArn?: {} | undefined
        resourcesVpcConfig?:
          | {
              subnetIds?: {} | undefined
              securityGroupIds?: {} | undefined
              clusterSecurityGroupId?: {} | undefined
              vpcId?: {} | undefined
              endpointPublicAccess?: {} | undefined
              endpointPrivateAccess?: {} | undefined
              publicAccessCidrs?: {} | undefined
            }
          | undefined
        kubernetesNetworkConfig?:
          | {
              serviceIpv4Cidr?: {} | undefined
              serviceIpv6Cidr?: {} | undefined
              ipFamily?: {} | undefined
            }
          | undefined
        logging?: { clusterLogging?: {} | undefined } | undefined
        identity?: { oidc?: { issuer?: {} | undefined } | undefined } | undefined
        status?: {} | undefined
        certificateAuthority?: { data?: {} | undefined } | undefined
        clientRequestToken?: {} | undefined
        platformVersion?: {} | undefined
        tags?: {} | undefined
        encryptionConfig?: {} | undefined
        connectorConfig?:
          | {
              activationId?: {} | undefined
              activationCode?: {} | undefined
              activationExpiry?: {} | undefined
              provider?: {} | undefined
              roleArn?: {} | undefined
            }
          | undefined
        id?: {} | undefined
        health?: { issues?: {} | undefined } | undefined
        outpostConfig?:
          | {
              outpostArns: {}
              controlPlaneInstanceType: {}
              controlPlanePlacement?: { groupName?: {} | undefined } | undefined
            }
          | undefined
      }
    | undefined
}
type DeleteFargateProfileResponse = {
  fargateProfile?:
    | {
        fargateProfileName?: {} | undefined
        fargateProfileArn?: {} | undefined
        clusterName?: {} | undefined
        createdAt?: {} | undefined
        podExecutionRoleArn?: {} | undefined
        subnets?: {} | undefined
        selectors?: {} | undefined
        status?: {} | undefined
        tags?: {} | undefined
      }
    | undefined
}
type DescribeFargateProfileResponse = {
  fargateProfile?:
    | {
        fargateProfileName?: {} | undefined
        fargateProfileArn?: {} | undefined
        clusterName?: {} | undefined
        createdAt?: {} | undefined
        podExecutionRoleArn?: {} | undefined
        subnets?: {} | undefined
        selectors?: {} | undefined
        status?: {} | undefined
        tags?: {} | undefined
      }
    | undefined
}
type DeleteNodegroupResponse = {
  nodegroup?:
    | {
        nodegroupName?: {} | undefined
        nodegroupArn?: {} | undefined
        clusterName?: {} | undefined
        version?: {} | undefined
        releaseVersion?: {} | undefined
        createdAt?: {} | undefined
        modifiedAt?: {} | undefined
        status?: {} | undefined
        capacityType?: {} | undefined
        scalingConfig?:
          | { minSize?: {} | undefined; maxSize?: {} | undefined; desiredSize?: {} | undefined }
          | undefined
        instanceTypes?: {} | undefined
        subnets?: {} | undefined
        remoteAccess?:
          | { ec2SshKey?: {} | undefined; sourceSecurityGroups?: {} | undefined }
          | undefined
        amiType?: {} | undefined
        nodeRole?: {} | undefined
        labels?: {} | undefined
        taints?: {} | undefined
        resources?:
          | { autoScalingGroups?: {} | undefined; remoteAccessSecurityGroup?: {} | undefined }
          | undefined
        diskSize?: {} | undefined
        health?: { issues?: {} | undefined } | undefined
        updateConfig?:
          | { maxUnavailable?: {} | undefined; maxUnavailablePercentage?: {} | undefined }
          | undefined
        launchTemplate?:
          | { name?: {} | undefined; version?: {} | undefined; id?: {} | undefined }
          | undefined
        tags?: {} | undefined
      }
    | undefined
}
type DescribeNodegroupResponse = {
  nodegroup?:
    | {
        nodegroupName?: {} | undefined
        nodegroupArn?: {} | undefined
        clusterName?: {} | undefined
        version?: {} | undefined
        releaseVersion?: {} | undefined
        createdAt?: {} | undefined
        modifiedAt?: {} | undefined
        status?: {} | undefined
        capacityType?: {} | undefined
        scalingConfig?:
          | { minSize?: {} | undefined; maxSize?: {} | undefined; desiredSize?: {} | undefined }
          | undefined
        instanceTypes?: {} | undefined
        subnets?: {} | undefined
        remoteAccess?:
          | { ec2SshKey?: {} | undefined; sourceSecurityGroups?: {} | undefined }
          | undefined
        amiType?: {} | undefined
        nodeRole?: {} | undefined
        labels?: {} | undefined
        taints?: {} | undefined
        resources?:
          | { autoScalingGroups?: {} | undefined; remoteAccessSecurityGroup?: {} | undefined }
          | undefined
        diskSize?: {} | undefined
        health?: { issues?: {} | undefined } | undefined
        updateConfig?:
          | { maxUnavailable?: {} | undefined; maxUnavailablePercentage?: {} | undefined }
          | undefined
        launchTemplate?:
          | { name?: {} | undefined; version?: {} | undefined; id?: {} | undefined }
          | undefined
        tags?: {} | undefined
      }
    | undefined
}
type Cluster = {
  name?: {} | undefined
  arn?: {} | undefined
  createdAt?: {} | undefined
  version?: {} | undefined
  endpoint?: {} | undefined
  roleArn?: {} | undefined
  resourcesVpcConfig?:
    | {
        subnetIds?: {} | undefined
        securityGroupIds?: {} | undefined
        clusterSecurityGroupId?: {} | undefined
        vpcId?: {} | undefined
        endpointPublicAccess?: {} | undefined
        endpointPrivateAccess?: {} | undefined
        publicAccessCidrs?: {} | undefined
      }
    | undefined
  kubernetesNetworkConfig?:
    | {
        serviceIpv4Cidr?: {} | undefined
        serviceIpv6Cidr?: {} | undefined
        ipFamily?: {} | undefined
      }
    | undefined
  logging?: { clusterLogging?: {} | undefined } | undefined
  identity?: { oidc?: { issuer?: {} | undefined } | undefined } | undefined
  status?: {} | undefined
  certificateAuthority?: { data?: {} | undefined } | undefined
  clientRequestToken?: {} | undefined
  platformVersion?: {} | undefined
  tags?: {} | undefined
  encryptionConfig?: {} | undefined
  connectorConfig?:
    | {
        activationId?: {} | undefined
        activationCode?: {} | undefined
        activationExpiry?: {} | undefined
        provider?: {} | undefined
        roleArn?: {} | undefined
      }
    | undefined
  id?: {} | undefined
  health?: { issues?: {} | undefined } | undefined
  outpostConfig?:
    | {
        outpostArns: {}
        controlPlaneInstanceType: {}
        controlPlanePlacement?: { groupName?: {} | undefined } | undefined
      }
    | undefined
}
type DeregisterClusterResponse = { cluster?: Cluster | undefined }
type DescribeAddonConfigurationResponse = {
  addonName?: {} | undefined
  addonVersion?: {} | undefined
  configurationSchema?: {} | undefined
}
type DescribeAddonVersionsResponse = { addons?: {} | undefined; nextToken?: {} | undefined }
type DescribeIdentityProviderConfigResponse = {
  identityProviderConfig?:
    | {
        oidc?:
          | {
              identityProviderConfigName?: {} | undefined
              identityProviderConfigArn?: {} | undefined
              clusterName?: {} | undefined
              issuerUrl?: {} | undefined
              clientId?: {} | undefined
              usernameClaim?: {} | undefined
              usernamePrefix?: {} | undefined
              groupsClaim?: {} | undefined
              groupsPrefix?: {} | undefined
              requiredClaims?: {} | undefined
              tags?: {} | undefined
              status?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type DescribeUpdateResponse = {
  update?:
    | {
        id?: {} | undefined
        status?: {} | undefined
        type?: {} | undefined
        params?: {} | undefined
        createdAt?: {} | undefined
        errors?: {} | undefined
      }
    | undefined
}
type DisassociateIdentityProviderConfigResponse = { update?: Update | undefined }
type ListIdentityProviderConfigsResponse = {
  identityProviderConfigs?: {} | undefined
  nextToken?: {} | undefined
}
type ListTagsForResourceResponse = { tags?: {} | undefined }
type TagResourceResponse = { [x: string]: unknown }
type ListUpdatesResponse = { updateIds?: {} | undefined; nextToken?: {} | undefined }
type UpdateClusterVersionResponse = {
  update?:
    | {
        id?: {} | undefined
        status?: {} | undefined
        type?: {} | undefined
        params?: {} | undefined
        createdAt?: {} | undefined
        errors?: {} | undefined
      }
    | undefined
}
type RegisterClusterResponse = { cluster?: Cluster | undefined }
type TagKey = string
type UntagResourceResponse = { [x: string]: unknown }
type UpdateAddonResponse = { update?: Update | undefined }
type UpdateClusterConfigResponse = { update?: Update | undefined }
type UpdateNodegroupConfigResponse = { update?: Update | undefined }
type UpdateNodegroupVersionResponse = { update?: Update | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/clusters/:name/encryption-config/associate': {
      $post: {
        input: { param: { name: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: { encryptionConfig: EncryptionConfig[]; clientRequestToken?: string | undefined }
        }
        output: AssociateEncryptionConfigResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/clusters/:name/identity-provider-configs/associate': {
      $post: {
        input: { param: { name: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            oidc: {
              identityProviderConfigName?: {} | undefined
              issuerUrl?: {} | undefined
              clientId?: {} | undefined
              usernameClaim?: {} | undefined
              usernamePrefix?: {} | undefined
              groupsClaim?: {} | undefined
              groupsPrefix?: {} | undefined
              requiredClaims?: {} | undefined
            }
            tags?: { [x: string]: TagValue } | undefined
            clientRequestToken?: string | undefined
          }
        }
        output: AssociateIdentityProviderConfigResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/clusters/:name/addons': {
      $post: {
        input: { param: { name: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            addonName: string
            addonVersion?: string | undefined
            serviceAccountRoleArn?: string | undefined
            resolveConflicts?: 'OVERWRITE' | 'NONE' | 'PRESERVE' | undefined
            clientRequestToken?: string | undefined
            tags?: { [x: string]: TagValue } | undefined
            configurationValues?: string | undefined
          }
        }
        output: CreateAddonResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          query: { maxResults?: number | undefined; nextToken?: string | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListAddonsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/clusters': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            name: string
            version?: string | undefined
            roleArn: string
            resourcesVpcConfig: {
              subnetIds?: {} | undefined
              securityGroupIds?: {} | undefined
              endpointPublicAccess?: {} | undefined
              endpointPrivateAccess?: {} | undefined
              publicAccessCidrs?: {} | undefined
            }
            kubernetesNetworkConfig?:
              | { serviceIpv4Cidr?: {} | undefined; ipFamily?: {} | undefined }
              | undefined
            logging?: { clusterLogging?: {} | undefined } | undefined
            clientRequestToken?: string | undefined
            tags?: { [x: string]: TagValue } | undefined
            encryptionConfig?: EncryptionConfig[] | undefined
            outpostConfig?:
              | {
                  outpostArns?: {} | undefined
                  controlPlaneInstanceType?: {} | undefined
                  controlPlanePlacement?: { groupName?: {} | undefined } | undefined
                }
              | undefined
          }
        }
        output: CreateClusterResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          query: {
            maxResults?: number | undefined
            nextToken?: string | undefined
            include?: String[] | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListClustersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/clusters/:name/fargate-profiles': {
      $post: {
        input: { param: { name: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            fargateProfileName: string
            podExecutionRoleArn: string
            subnets?: String[] | undefined
            selectors?: FargateProfileSelector[] | undefined
            clientRequestToken?: string | undefined
            tags?: { [x: string]: TagValue } | undefined
          }
        }
        output: CreateFargateProfileResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          query: { maxResults?: number | undefined; nextToken?: string | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListFargateProfilesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/clusters/:name/node-groups': {
      $post: {
        input: { param: { name: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            nodegroupName: string
            scalingConfig?:
              | { minSize?: {} | undefined; maxSize?: {} | undefined; desiredSize?: {} | undefined }
              | undefined
            diskSize?: number | undefined
            subnets: String[]
            instanceTypes?: String[] | undefined
            amiType?:
              | 'AL2_x86_64'
              | 'AL2_x86_64_GPU'
              | 'AL2_ARM_64'
              | 'CUSTOM'
              | 'BOTTLEROCKET_ARM_64'
              | 'BOTTLEROCKET_x86_64'
              | 'BOTTLEROCKET_ARM_64_NVIDIA'
              | 'BOTTLEROCKET_x86_64_NVIDIA'
              | 'WINDOWS_CORE_2019_x86_64'
              | 'WINDOWS_FULL_2019_x86_64'
              | 'WINDOWS_CORE_2022_x86_64'
              | 'WINDOWS_FULL_2022_x86_64'
              | undefined
            remoteAccess?:
              | { ec2SshKey?: {} | undefined; sourceSecurityGroups?: {} | undefined }
              | undefined
            nodeRole: string
            labels?: { [x: string]: LabelValue } | undefined
            taints?: Taint[] | undefined
            tags?: { [x: string]: TagValue } | undefined
            clientRequestToken?: string | undefined
            launchTemplate?:
              | { name?: {} | undefined; version?: {} | undefined; id?: {} | undefined }
              | undefined
            updateConfig?:
              | { maxUnavailable?: {} | undefined; maxUnavailablePercentage?: {} | undefined }
              | undefined
            capacityType?: 'ON_DEMAND' | 'SPOT' | undefined
            version?: string | undefined
            releaseVersion?: string | undefined
          }
        }
        output: CreateNodegroupResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          query: { maxResults?: number | undefined; nextToken?: string | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListNodegroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/clusters/:name/addons/:addonName': {
      $delete: {
        input: { param: { name: string; addonName: string } } & {
          query: { preserve?: boolean | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteAddonResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string; addonName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeAddonResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/clusters/:name': {
      $delete: {
        input: { param: { name: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteClusterResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeClusterResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/clusters/:name/fargate-profiles/:fargateProfileName': {
      $delete: {
        input: { param: { name: string; fargateProfileName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteFargateProfileResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string; fargateProfileName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeFargateProfileResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/clusters/:name/node-groups/:nodegroupName': {
      $delete: {
        input: { param: { name: string; nodegroupName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteNodegroupResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string; nodegroupName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeNodegroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cluster-registrations/:name': {
      $delete: {
        input: { param: { name: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeregisterClusterResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/addons/configuration-schemas#addonName&addonVersion': {
      $get: {
        input: { query: { addonName: string; addonVersion: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeAddonConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/addons/supported-versions': {
      $get: {
        input: {
          query: {
            kubernetesVersion?: string | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
            addonName?: string | undefined
            types?: String[] | undefined
            publishers?: String[] | undefined
            owners?: String[] | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeAddonVersionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/clusters/:name/identity-provider-configs/describe': {
      $post: {
        input: { param: { name: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { identityProviderConfig: { type?: {} | undefined; name?: {} | undefined } } }
        output: DescribeIdentityProviderConfigResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/clusters/:name/updates/:updateId': {
      $get: {
        input: { param: { name: string; updateId: string } } & {
          query: { nodegroupName?: string | undefined; addonName?: string | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeUpdateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/clusters/:name/identity-provider-configs/disassociate': {
      $post: {
        input: { param: { name: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            identityProviderConfig: { type?: {} | undefined; name?: {} | undefined }
            clientRequestToken?: string | undefined
          }
        }
        output: DisassociateIdentityProviderConfigResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/clusters/:name/identity-provider-configs': {
      $get: {
        input: { param: { name: string } } & {
          query: { maxResults?: number | undefined; nextToken?: string | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListIdentityProviderConfigsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:resourceArn': {
      $get: {
        input: { param: { resourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListTagsForResourceResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { resourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { tags: { [x: string]: TagValue } } }
        output: TagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/clusters/:name/updates': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            nodegroupName?: string | undefined
            addonName?: string | undefined
            nextToken?: string | undefined
            maxResults?: number | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListUpdatesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { name: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { version: string; clientRequestToken?: string | undefined } }
        output: UpdateClusterVersionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cluster-registrations': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            name: string
            connectorConfig: { roleArn?: {} | undefined; provider?: {} | undefined }
            clientRequestToken?: string | undefined
            tags?: { [x: string]: TagValue } | undefined
          }
        }
        output: RegisterClusterResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:resourceArn#tagKeys': {
      $delete: {
        input: { param: { resourceArn: string } } & { query: { tagKeys: TagKey[] } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: UntagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/clusters/:name/addons/:addonName/update': {
      $post: {
        input: { param: { name: string; addonName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            addonVersion?: string | undefined
            serviceAccountRoleArn?: string | undefined
            resolveConflicts?: 'OVERWRITE' | 'NONE' | 'PRESERVE' | undefined
            clientRequestToken?: string | undefined
            configurationValues?: string | undefined
          }
        }
        output: UpdateAddonResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/clusters/:name/update-config': {
      $post: {
        input: { param: { name: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            resourcesVpcConfig?:
              | {
                  subnetIds?: {} | undefined
                  securityGroupIds?: {} | undefined
                  endpointPublicAccess?: {} | undefined
                  endpointPrivateAccess?: {} | undefined
                  publicAccessCidrs?: {} | undefined
                }
              | undefined
            logging?: { clusterLogging?: {} | undefined } | undefined
            clientRequestToken?: string | undefined
          }
        }
        output: UpdateClusterConfigResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/clusters/:name/node-groups/:nodegroupName/update-config': {
      $post: {
        input: { param: { name: string; nodegroupName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            labels?:
              | { addOrUpdateLabels?: {} | undefined; removeLabels?: {} | undefined }
              | undefined
            taints?:
              | { addOrUpdateTaints?: {} | undefined; removeTaints?: {} | undefined }
              | undefined
            scalingConfig?:
              | { minSize?: {} | undefined; maxSize?: {} | undefined; desiredSize?: {} | undefined }
              | undefined
            updateConfig?:
              | { maxUnavailable?: {} | undefined; maxUnavailablePercentage?: {} | undefined }
              | undefined
            clientRequestToken?: string | undefined
          }
        }
        output: UpdateNodegroupConfigResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/clusters/:name/node-groups/:nodegroupName/update-version': {
      $post: {
        input: { param: { name: string; nodegroupName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            version?: string | undefined
            releaseVersion?: string | undefined
            launchTemplate?:
              | { name?: {} | undefined; version?: {} | undefined; id?: {} | undefined }
              | undefined
            force?: boolean | undefined
            clientRequestToken?: string | undefined
          }
        }
        output: UpdateNodegroupVersionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
