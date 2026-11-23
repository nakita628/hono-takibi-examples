type String = string
type CreateApplicationResponse = {
  ApplicationId?: {} | undefined
  Author?: {} | undefined
  CreationTime?: {} | undefined
  Description?: {} | undefined
  HomePageUrl?: {} | undefined
  IsVerifiedAuthor?: {} | undefined
  Labels?: {} | undefined
  LicenseUrl?: {} | undefined
  Name?: {} | undefined
  ReadmeUrl?: {} | undefined
  SpdxLicenseId?: {} | undefined
  VerifiedAuthorUrl?: {} | undefined
  Version?:
    | {
        ApplicationId: {}
        CreationTime: {}
        ParameterDefinitions: {}
        RequiredCapabilities: {}
        ResourcesSupported: {}
        SemanticVersion: {}
        SourceCodeArchiveUrl?: {} | undefined
        SourceCodeUrl?: {} | undefined
        TemplateUrl: {}
      }
    | undefined
}
type ListApplicationsResponse = { Applications?: {} | undefined; NextToken?: {} | undefined }
type CreateApplicationVersionResponse = {
  ApplicationId?: {} | undefined
  CreationTime?: {} | undefined
  ParameterDefinitions?: {} | undefined
  RequiredCapabilities?: {} | undefined
  ResourcesSupported?: {} | undefined
  SemanticVersion?: {} | undefined
  SourceCodeArchiveUrl?: {} | undefined
  SourceCodeUrl?: {} | undefined
  TemplateUrl?: {} | undefined
}
type ParameterValue = { Name: {}; Value: {} }
type Tag = { Key: {}; Value: {} }
type CreateCloudFormationChangeSetResponse = {
  ApplicationId?: {} | undefined
  ChangeSetId?: {} | undefined
  SemanticVersion?: {} | undefined
  StackId?: {} | undefined
}
type CreateCloudFormationTemplateResponse = {
  ApplicationId?: {} | undefined
  CreationTime?: {} | undefined
  ExpirationTime?: {} | undefined
  SemanticVersion?: {} | undefined
  Status?: {} | undefined
  TemplateId?: {} | undefined
  TemplateUrl?: {} | undefined
}
type GetApplicationResponse = {
  ApplicationId?: {} | undefined
  Author?: {} | undefined
  CreationTime?: {} | undefined
  Description?: {} | undefined
  HomePageUrl?: {} | undefined
  IsVerifiedAuthor?: {} | undefined
  Labels?: {} | undefined
  LicenseUrl?: {} | undefined
  Name?: {} | undefined
  ReadmeUrl?: {} | undefined
  SpdxLicenseId?: {} | undefined
  VerifiedAuthorUrl?: {} | undefined
  Version?:
    | {
        ApplicationId: {}
        CreationTime: {}
        ParameterDefinitions: {}
        RequiredCapabilities: {}
        ResourcesSupported: {}
        SemanticVersion: {}
        SourceCodeArchiveUrl?: {} | undefined
        SourceCodeUrl?: {} | undefined
        TemplateUrl: {}
      }
    | undefined
}
type UpdateApplicationResponse = {
  ApplicationId?: {} | undefined
  Author?: {} | undefined
  CreationTime?: {} | undefined
  Description?: {} | undefined
  HomePageUrl?: {} | undefined
  IsVerifiedAuthor?: {} | undefined
  Labels?: {} | undefined
  LicenseUrl?: {} | undefined
  Name?: {} | undefined
  ReadmeUrl?: {} | undefined
  SpdxLicenseId?: {} | undefined
  VerifiedAuthorUrl?: {} | undefined
  Version?:
    | {
        ApplicationId: {}
        CreationTime: {}
        ParameterDefinitions: {}
        RequiredCapabilities: {}
        ResourcesSupported: {}
        SemanticVersion: {}
        SourceCodeArchiveUrl?: {} | undefined
        SourceCodeUrl?: {} | undefined
        TemplateUrl: {}
      }
    | undefined
}
type GetApplicationPolicyResponse = { Statements?: {} | undefined }
type ApplicationPolicyStatement = {
  Actions: {}
  PrincipalOrgIDs?: {} | undefined
  Principals: {}
  StatementId?: {} | undefined
}
type PutApplicationPolicyResponse = { Statements?: {} | undefined }
type GetCloudFormationTemplateResponse = {
  ApplicationId?: {} | undefined
  CreationTime?: {} | undefined
  ExpirationTime?: {} | undefined
  SemanticVersion?: {} | undefined
  Status?: {} | undefined
  TemplateId?: {} | undefined
  TemplateUrl?: {} | undefined
}
type ListApplicationDependenciesResponse = {
  Dependencies?: {} | undefined
  NextToken?: {} | undefined
}
type ListApplicationVersionsResponse = { NextToken?: {} | undefined; Versions?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/applications': {
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
            author: string
            description: string
            homePageUrl?: string | undefined
            labels?: String[] | undefined
            licenseBody?: string | undefined
            licenseUrl?: string | undefined
            name: string
            readmeBody?: string | undefined
            readmeUrl?: string | undefined
            semanticVersion?: string | undefined
            sourceCodeArchiveUrl?: string | undefined
            sourceCodeUrl?: string | undefined
            spdxLicenseId?: string | undefined
            templateBody?: string | undefined
            templateUrl?: string | undefined
          }
        }
        output: CreateApplicationResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            maxItems?: number | undefined
            nextToken?: string | undefined
            MaxItems?: string | undefined
            NextToken?: string | undefined
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
        output: ListApplicationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/applications/:applicationId/versions/:semanticVersion': {
      $put: {
        input: { param: { applicationId: string; semanticVersion: string } } & {
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
            sourceCodeArchiveUrl?: string | undefined
            sourceCodeUrl?: string | undefined
            templateBody?: string | undefined
            templateUrl?: string | undefined
          }
        }
        output: CreateApplicationVersionResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/applications/:applicationId/changesets': {
      $post: {
        input: { param: { applicationId: string } } & {
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
            capabilities?: String[] | undefined
            changeSetName?: string | undefined
            clientToken?: string | undefined
            description?: string | undefined
            notificationArns?: String[] | undefined
            parameterOverrides?: ParameterValue[] | undefined
            resourceTypes?: String[] | undefined
            rollbackConfiguration?:
              | { MonitoringTimeInMinutes?: {} | undefined; RollbackTriggers?: {} | undefined }
              | undefined
            semanticVersion?: string | undefined
            stackName: string
            tags?: Tag[] | undefined
            templateId?: string | undefined
          }
        }
        output: CreateCloudFormationChangeSetResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/applications/:applicationId/templates': {
      $post: {
        input: { param: { applicationId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { semanticVersion?: string | undefined } }
        output: CreateCloudFormationTemplateResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/applications/:applicationId': {
      $delete: {
        input: { param: { applicationId: string } } & {
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
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { applicationId: string } } & {
          query: { semanticVersion?: string | undefined }
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
        output: GetApplicationResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { applicationId: string } } & {
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
            author?: string | undefined
            description?: string | undefined
            homePageUrl?: string | undefined
            labels?: String[] | undefined
            readmeBody?: string | undefined
            readmeUrl?: string | undefined
          }
        }
        output: UpdateApplicationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/applications/:applicationId/policy': {
      $get: {
        input: { param: { applicationId: string } } & {
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
        output: GetApplicationPolicyResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { applicationId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { statements: ApplicationPolicyStatement[] } }
        output: PutApplicationPolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/applications/:applicationId/templates/:templateId': {
      $get: {
        input: { param: { applicationId: string; templateId: string } } & {
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
        output: GetCloudFormationTemplateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/applications/:applicationId/dependencies': {
      $get: {
        input: { param: { applicationId: string } } & {
          query: {
            maxItems?: number | undefined
            nextToken?: string | undefined
            semanticVersion?: string | undefined
            MaxItems?: string | undefined
            NextToken?: string | undefined
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
        output: ListApplicationDependenciesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/applications/:applicationId/versions': {
      $get: {
        input: { param: { applicationId: string } } & {
          query: {
            maxItems?: number | undefined
            nextToken?: string | undefined
            MaxItems?: string | undefined
            NextToken?: string | undefined
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
        output: ListApplicationVersionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/applications/:applicationId/unshare': {
      $post: {
        input: { param: { applicationId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { organizationId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  },
  '/'
>
export default routes
