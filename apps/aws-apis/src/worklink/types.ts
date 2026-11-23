type AssociateDomainResponse = { [x: string]: unknown }
type AssociateWebsiteAuthorizationProviderResponse = { AuthorizationProviderId?: {} | undefined }
type AssociateWebsiteCertificateAuthorityResponse = { WebsiteCaId?: {} | undefined }
type TagValue = string
type CreateFleetResponse = { FleetArn?: {} | undefined }
type DeleteFleetResponse = { [x: string]: unknown }
type DescribeAuditStreamConfigurationResponse = { AuditStreamArn?: {} | undefined }
type DescribeCompanyNetworkConfigurationResponse = {
  VpcId?: {} | undefined
  SubnetIds?: {} | undefined
  SecurityGroupIds?: {} | undefined
}
type DescribeDeviceResponse = {
  Status?: {} | undefined
  Model?: {} | undefined
  Manufacturer?: {} | undefined
  OperatingSystem?: {} | undefined
  OperatingSystemVersion?: {} | undefined
  PatchLevel?: {} | undefined
  FirstAccessedTime?: {} | undefined
  LastAccessedTime?: {} | undefined
  Username?: {} | undefined
}
type DescribeDevicePolicyConfigurationResponse = { DeviceCaCertificate?: {} | undefined }
type DescribeDomainResponse = {
  DomainName?: {} | undefined
  DisplayName?: {} | undefined
  CreatedTime?: {} | undefined
  DomainStatus?: {} | undefined
  AcmCertificateArn?: {} | undefined
}
type DescribeFleetMetadataResponse = {
  CreatedTime?: {} | undefined
  LastUpdatedTime?: {} | undefined
  FleetName?: {} | undefined
  DisplayName?: {} | undefined
  OptimizeForEndUserLocation?: {} | undefined
  CompanyCode?: {} | undefined
  FleetStatus?: {} | undefined
  Tags?: {} | undefined
}
type DescribeIdentityProviderConfigurationResponse = {
  IdentityProviderType?: {} | undefined
  ServiceProviderSamlMetadata?: {} | undefined
  IdentityProviderSamlMetadata?: {} | undefined
}
type DescribeWebsiteCertificateAuthorityResponse = {
  Certificate?: {} | undefined
  CreatedTime?: {} | undefined
  DisplayName?: {} | undefined
}
type DisassociateDomainResponse = { [x: string]: unknown }
type DisassociateWebsiteAuthorizationProviderResponse = { [x: string]: unknown }
type DisassociateWebsiteCertificateAuthorityResponse = { [x: string]: unknown }
type ListDevicesResponse = { Devices?: {} | undefined; NextToken?: {} | undefined }
type ListDomainsResponse = { Domains?: {} | undefined; NextToken?: {} | undefined }
type ListFleetsResponse = { FleetSummaryList?: {} | undefined; NextToken?: {} | undefined }
type ListTagsForResourceResponse = { Tags?: {} | undefined }
type TagResourceResponse = { [x: string]: unknown }
type ListWebsiteAuthorizationProvidersResponse = {
  WebsiteAuthorizationProviders?: {} | undefined
  NextToken?: {} | undefined
}
type ListWebsiteCertificateAuthoritiesResponse = {
  WebsiteCertificateAuthorities?: {} | undefined
  NextToken?: {} | undefined
}
type RestoreDomainAccessResponse = { [x: string]: unknown }
type RevokeDomainAccessResponse = { [x: string]: unknown }
type SignOutUserResponse = { [x: string]: unknown }
type TagKey = string
type UntagResourceResponse = { [x: string]: unknown }
type UpdateAuditStreamConfigurationResponse = { [x: string]: unknown }
type SubnetId = string
type SecurityGroupId = string
type UpdateCompanyNetworkConfigurationResponse = { [x: string]: unknown }
type UpdateDevicePolicyConfigurationResponse = { [x: string]: unknown }
type UpdateDomainMetadataResponse = { [x: string]: unknown }
type UpdateFleetMetadataResponse = { [x: string]: unknown }
type UpdateIdentityProviderConfigurationResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/associateDomain': {
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
            FleetArn: string
            DomainName: string
            DisplayName?: string | undefined
            AcmCertificateArn: string
          }
        }
        output: AssociateDomainResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/associateWebsiteAuthorizationProvider': {
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
            FleetArn: string
            AuthorizationProviderType: 'SAML'
            DomainName?: string | undefined
          }
        }
        output: AssociateWebsiteAuthorizationProviderResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/associateWebsiteCertificateAuthority': {
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
        } & { json: { FleetArn: string; Certificate: string; DisplayName?: string | undefined } }
        output: AssociateWebsiteCertificateAuthorityResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/createFleet': {
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
            FleetName: string
            DisplayName?: string | undefined
            OptimizeForEndUserLocation?: boolean | undefined
            Tags?: { [x: string]: TagValue } | undefined
          }
        }
        output: CreateFleetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/deleteFleet': {
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
        } & { json: { FleetArn: string } }
        output: DeleteFleetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/describeAuditStreamConfiguration': {
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
        } & { json: { FleetArn: string } }
        output: DescribeAuditStreamConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/describeCompanyNetworkConfiguration': {
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
        } & { json: { FleetArn: string } }
        output: DescribeCompanyNetworkConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/describeDevice': {
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
        } & { json: { FleetArn: string; DeviceId: string } }
        output: DescribeDeviceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/describeDevicePolicyConfiguration': {
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
        } & { json: { FleetArn: string } }
        output: DescribeDevicePolicyConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/describeDomain': {
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
        } & { json: { FleetArn: string; DomainName: string } }
        output: DescribeDomainResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/describeFleetMetadata': {
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
        } & { json: { FleetArn: string } }
        output: DescribeFleetMetadataResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/describeIdentityProviderConfiguration': {
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
        } & { json: { FleetArn: string } }
        output: DescribeIdentityProviderConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/describeWebsiteCertificateAuthority': {
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
        } & { json: { FleetArn: string; WebsiteCaId: string } }
        output: DescribeWebsiteCertificateAuthorityResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/disassociateDomain': {
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
        } & { json: { FleetArn: string; DomainName: string } }
        output: DisassociateDomainResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/disassociateWebsiteAuthorizationProvider': {
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
        } & { json: { FleetArn: string; AuthorizationProviderId: string } }
        output: DisassociateWebsiteAuthorizationProviderResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/disassociateWebsiteCertificateAuthority': {
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
        } & { json: { FleetArn: string; WebsiteCaId: string } }
        output: DisassociateWebsiteCertificateAuthorityResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/listDevices': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
            FleetArn: string
            NextToken?: string | undefined
            MaxResults?: number | undefined
          }
        }
        output: ListDevicesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/listDomains': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
            FleetArn: string
            NextToken?: string | undefined
            MaxResults?: number | undefined
          }
        }
        output: ListDomainsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/listFleets': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { NextToken?: string | undefined; MaxResults?: number | undefined } }
        output: ListFleetsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:ResourceArn': {
      $get: {
        input: { param: { ResourceArn: string } } & {
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
        input: { param: { ResourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Tags: { [x: string]: TagValue } } }
        output: TagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/listWebsiteAuthorizationProviders': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
            FleetArn: string
            NextToken?: string | undefined
            MaxResults?: number | undefined
          }
        }
        output: ListWebsiteAuthorizationProvidersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/listWebsiteCertificateAuthorities': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
            FleetArn: string
            MaxResults?: number | undefined
            NextToken?: string | undefined
          }
        }
        output: ListWebsiteCertificateAuthoritiesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/restoreDomainAccess': {
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
        } & { json: { FleetArn: string; DomainName: string } }
        output: RestoreDomainAccessResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/revokeDomainAccess': {
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
        } & { json: { FleetArn: string; DomainName: string } }
        output: RevokeDomainAccessResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/signOutUser': {
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
        } & { json: { FleetArn: string; Username: string } }
        output: SignOutUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:ResourceArn#tagKeys': {
      $delete: {
        input: { param: { ResourceArn: string } } & { query: { tagKeys: TagKey[] } } & {
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
    '/updateAuditStreamConfiguration': {
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
        } & { json: { FleetArn: string; AuditStreamArn?: string | undefined } }
        output: UpdateAuditStreamConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/updateCompanyNetworkConfiguration': {
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
            FleetArn: string
            VpcId: string
            SubnetIds: SubnetId[]
            SecurityGroupIds: SecurityGroupId[]
          }
        }
        output: UpdateCompanyNetworkConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/updateDevicePolicyConfiguration': {
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
        } & { json: { FleetArn: string; DeviceCaCertificate?: string | undefined } }
        output: UpdateDevicePolicyConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/updateDomainMetadata': {
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
        } & { json: { FleetArn: string; DomainName: string; DisplayName?: string | undefined } }
        output: UpdateDomainMetadataResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/UpdateFleetMetadata': {
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
            FleetArn: string
            DisplayName?: string | undefined
            OptimizeForEndUserLocation?: boolean | undefined
          }
        }
        output: UpdateFleetMetadataResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/updateIdentityProviderConfiguration': {
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
            FleetArn: string
            IdentityProviderType: 'SAML'
            IdentityProviderSamlMetadata?: string | undefined
          }
        }
        output: UpdateIdentityProviderConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
