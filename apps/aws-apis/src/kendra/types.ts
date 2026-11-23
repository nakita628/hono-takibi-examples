type AssociateEntitiesToExperienceRequest = { Id: {}; IndexId: {}; EntityList: {} }
type AssociateEntitiesToExperienceResponse = { FailedEntityList?: {} | undefined }
type AssociatePersonasToEntitiesRequest = { Id: {}; IndexId: {}; Personas: {} }
type AssociatePersonasToEntitiesResponse = { FailedEntityList?: {} | undefined }
type DataSourceSyncJobMetricTarget = { DataSourceId: {}; DataSourceSyncJobId?: {} | undefined }
type BatchDeleteDocumentRequest = {
  IndexId: {}
  DocumentIdList: {}
  DataSourceSyncJobMetricTarget?: DataSourceSyncJobMetricTarget | undefined
}
type BatchDeleteDocumentResponse = { FailedDocuments?: {} | undefined }
type BatchDeleteFeaturedResultsSetRequest = { IndexId: {}; FeaturedResultsSetIds: {} }
type BatchDeleteFeaturedResultsSetResponse = { Errors: {} }
type BatchGetDocumentStatusRequest = { IndexId: {}; DocumentInfoList: {} }
type BatchGetDocumentStatusResponse = {
  Errors?: {} | undefined
  DocumentStatusList?: {} | undefined
}
type BatchPutDocumentRequest = {
  IndexId: {}
  RoleArn?: {} | undefined
  Documents: {}
  CustomDocumentEnrichmentConfiguration?:
    | {
        InlineConfigurations?: {} | undefined
        PreExtractionHookConfiguration?:
          | {
              InvocationCondition?:
                | {
                    ConditionDocumentAttributeKey: {}
                    Operator: {}
                    ConditionOnValue?:
                      | {
                          StringValue?: {} | undefined
                          StringListValue?: {} | undefined
                          LongValue?: {} | undefined
                          DateValue?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
              LambdaArn: {}
              S3Bucket: {}
            }
          | undefined
        PostExtractionHookConfiguration?:
          | {
              InvocationCondition?:
                | {
                    ConditionDocumentAttributeKey: {}
                    Operator: {}
                    ConditionOnValue?:
                      | {
                          StringValue?: {} | undefined
                          StringListValue?: {} | undefined
                          LongValue?: {} | undefined
                          DateValue?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
              LambdaArn: {}
              S3Bucket: {}
            }
          | undefined
        RoleArn?: {} | undefined
      }
    | undefined
}
type BatchPutDocumentResponse = { FailedDocuments?: {} | undefined }
type ClearQuerySuggestionsRequest = { IndexId: {} }
type CreateAccessControlConfigurationRequest = {
  IndexId: {}
  Name: {}
  Description?: {} | undefined
  AccessControlList?: {} | undefined
  HierarchicalAccessControlList?: {} | undefined
  ClientToken?: {} | undefined
}
type CreateAccessControlConfigurationResponse = { Id: {} }
type DocumentsMetadataConfiguration = { S3Prefix?: {} | undefined }
type DataSourceVpcConfiguration = { SubnetIds: {}; SecurityGroupIds: {} }
type WebCrawlerConfiguration = {
  Urls: {
    SeedUrlConfiguration?: { SeedUrls: {}; WebCrawlerMode?: {} | undefined } | undefined
    SiteMapsConfiguration?: { SiteMaps: {} } | undefined
  }
  CrawlDepth?: {} | undefined
  MaxLinksPerPage?: {} | undefined
  MaxContentSizePerPageInMegaBytes?: {} | undefined
  MaxUrlsPerMinuteCrawlRate?: {} | undefined
  UrlInclusionPatterns?: {} | undefined
  UrlExclusionPatterns?: {} | undefined
  ProxyConfiguration?: { Host: {}; Port: {}; Credentials?: {} | undefined } | undefined
  AuthenticationConfiguration?: { BasicAuthentication?: {} | undefined } | undefined
}
type CreateDataSourceRequest = {
  Name: {}
  IndexId: {}
  Type: {}
  Configuration?:
    | {
        S3Configuration?:
          | {
              BucketName: {}
              InclusionPrefixes?: {} | undefined
              InclusionPatterns?: {} | undefined
              ExclusionPatterns?: {} | undefined
              DocumentsMetadataConfiguration?: DocumentsMetadataConfiguration | undefined
              AccessControlListConfiguration?: { KeyPath?: {} | undefined } | undefined
            }
          | undefined
        SharePointConfiguration?:
          | {
              SharePointVersion: {}
              Urls: {}
              SecretArn: {}
              CrawlAttachments?: {} | undefined
              UseChangeLog?: {} | undefined
              InclusionPatterns?: {} | undefined
              ExclusionPatterns?: {} | undefined
              VpcConfiguration?: { SubnetIds: {}; SecurityGroupIds: {} } | undefined
              FieldMappings?: {} | undefined
              DocumentTitleFieldName?: {} | undefined
              DisableLocalGroups?: {} | undefined
              SslCertificateS3Path?: { Bucket: {}; Key: {} } | undefined
              AuthenticationType?: {} | undefined
              ProxyConfiguration?: { Host: {}; Port: {}; Credentials?: {} | undefined } | undefined
            }
          | undefined
        DatabaseConfiguration?:
          | {
              DatabaseEngineType: {}
              ConnectionConfiguration: {
                DatabaseHost: {}
                DatabasePort: {}
                DatabaseName: {}
                TableName: {}
                SecretArn: {}
              }
              VpcConfiguration?: DataSourceVpcConfiguration | undefined
              ColumnConfiguration: {
                DocumentIdColumnName: {}
                DocumentDataColumnName: {}
                DocumentTitleColumnName?: {} | undefined
                FieldMappings?: {} | undefined
                ChangeDetectingColumns: {}
              }
              AclConfiguration?: { AllowedGroupsColumnName: {} } | undefined
              SqlConfiguration?: { QueryIdentifiersEnclosingOption?: {} | undefined } | undefined
            }
          | undefined
        SalesforceConfiguration?:
          | {
              ServerUrl: {}
              SecretArn: {}
              StandardObjectConfigurations?: {} | undefined
              KnowledgeArticleConfiguration?:
                | {
                    IncludedStates: {}
                    StandardKnowledgeArticleTypeConfiguration?:
                      | {
                          DocumentDataFieldName: {}
                          DocumentTitleFieldName?: {} | undefined
                          FieldMappings?: {} | undefined
                        }
                      | undefined
                    CustomKnowledgeArticleTypeConfigurations?: {} | undefined
                  }
                | undefined
              ChatterFeedConfiguration?:
                | {
                    DocumentDataFieldName: {}
                    DocumentTitleFieldName?: {} | undefined
                    FieldMappings?: {} | undefined
                    IncludeFilterTypes?: {} | undefined
                  }
                | undefined
              CrawlAttachments?: {} | undefined
              StandardObjectAttachmentConfiguration?:
                | { DocumentTitleFieldName?: {} | undefined; FieldMappings?: {} | undefined }
                | undefined
              IncludeAttachmentFilePatterns?: {} | undefined
              ExcludeAttachmentFilePatterns?: {} | undefined
            }
          | undefined
        OneDriveConfiguration?:
          | {
              TenantDomain: {}
              SecretArn: {}
              OneDriveUsers: {
                OneDriveUserList?: {} | undefined
                OneDriveUserS3Path?: { Bucket: {}; Key: {} } | undefined
              }
              InclusionPatterns?: {} | undefined
              ExclusionPatterns?: {} | undefined
              FieldMappings?: {} | undefined
              DisableLocalGroups?: {} | undefined
            }
          | undefined
        ServiceNowConfiguration?:
          | {
              HostUrl: {}
              SecretArn: {}
              ServiceNowBuildVersion: {}
              KnowledgeArticleConfiguration?:
                | {
                    CrawlAttachments?: {} | undefined
                    IncludeAttachmentFilePatterns?: {} | undefined
                    ExcludeAttachmentFilePatterns?: {} | undefined
                    DocumentDataFieldName: {}
                    DocumentTitleFieldName?: {} | undefined
                    FieldMappings?: {} | undefined
                    FilterQuery?: {} | undefined
                  }
                | undefined
              ServiceCatalogConfiguration?:
                | {
                    CrawlAttachments?: {} | undefined
                    IncludeAttachmentFilePatterns?: {} | undefined
                    ExcludeAttachmentFilePatterns?: {} | undefined
                    DocumentDataFieldName: {}
                    DocumentTitleFieldName?: {} | undefined
                    FieldMappings?: {} | undefined
                  }
                | undefined
              AuthenticationType?: {} | undefined
            }
          | undefined
        ConfluenceConfiguration?:
          | {
              ServerUrl: {}
              SecretArn: {}
              Version: {}
              SpaceConfiguration?:
                | {
                    CrawlPersonalSpaces?: {} | undefined
                    CrawlArchivedSpaces?: {} | undefined
                    IncludeSpaces?: {} | undefined
                    ExcludeSpaces?: {} | undefined
                    SpaceFieldMappings?: {} | undefined
                  }
                | undefined
              PageConfiguration?: { PageFieldMappings?: {} | undefined } | undefined
              BlogConfiguration?: { BlogFieldMappings?: {} | undefined } | undefined
              AttachmentConfiguration?:
                | { CrawlAttachments?: {} | undefined; AttachmentFieldMappings?: {} | undefined }
                | undefined
              VpcConfiguration?: { SubnetIds: {}; SecurityGroupIds: {} } | undefined
              InclusionPatterns?: {} | undefined
              ExclusionPatterns?: {} | undefined
              ProxyConfiguration?: { Host: {}; Port: {}; Credentials?: {} | undefined } | undefined
              AuthenticationType?: {} | undefined
            }
          | undefined
        GoogleDriveConfiguration?:
          | {
              SecretArn: {}
              InclusionPatterns?: {} | undefined
              ExclusionPatterns?: {} | undefined
              FieldMappings?: {} | undefined
              ExcludeMimeTypes?: {} | undefined
              ExcludeUserAccounts?: {} | undefined
              ExcludeSharedDrives?: {} | undefined
            }
          | undefined
        WebCrawlerConfiguration?: WebCrawlerConfiguration | undefined
        WorkDocsConfiguration?:
          | {
              OrganizationId: {}
              CrawlComments?: {} | undefined
              UseChangeLog?: {} | undefined
              InclusionPatterns?: {} | undefined
              ExclusionPatterns?: {} | undefined
              FieldMappings?: {} | undefined
            }
          | undefined
        FsxConfiguration?:
          | {
              FileSystemId: {}
              FileSystemType: {}
              VpcConfiguration: { SubnetIds: {}; SecurityGroupIds: {} }
              SecretArn?: {} | undefined
              InclusionPatterns?: {} | undefined
              ExclusionPatterns?: {} | undefined
              FieldMappings?: {} | undefined
            }
          | undefined
        SlackConfiguration?:
          | {
              TeamId: {}
              SecretArn: {}
              VpcConfiguration?: { SubnetIds: {}; SecurityGroupIds: {} } | undefined
              SlackEntityList: {}
              UseChangeLog?: {} | undefined
              CrawlBotMessage?: {} | undefined
              ExcludeArchived?: {} | undefined
              SinceCrawlDate: {}
              LookBackPeriod?: {} | undefined
              PrivateChannelFilter?: {} | undefined
              PublicChannelFilter?: {} | undefined
              InclusionPatterns?: {} | undefined
              ExclusionPatterns?: {} | undefined
              FieldMappings?: {} | undefined
            }
          | undefined
        BoxConfiguration?:
          | {
              EnterpriseId: {}
              SecretArn: {}
              UseChangeLog?: {} | undefined
              CrawlComments?: {} | undefined
              CrawlTasks?: {} | undefined
              CrawlWebLinks?: {} | undefined
              FileFieldMappings?: {} | undefined
              TaskFieldMappings?: {} | undefined
              CommentFieldMappings?: {} | undefined
              WebLinkFieldMappings?: {} | undefined
              InclusionPatterns?: {} | undefined
              ExclusionPatterns?: {} | undefined
              VpcConfiguration?: { SubnetIds: {}; SecurityGroupIds: {} } | undefined
            }
          | undefined
        QuipConfiguration?:
          | {
              Domain: {}
              SecretArn: {}
              CrawlFileComments?: {} | undefined
              CrawlChatRooms?: {} | undefined
              CrawlAttachments?: {} | undefined
              FolderIds?: {} | undefined
              ThreadFieldMappings?: {} | undefined
              MessageFieldMappings?: {} | undefined
              AttachmentFieldMappings?: {} | undefined
              InclusionPatterns?: {} | undefined
              ExclusionPatterns?: {} | undefined
              VpcConfiguration?: { SubnetIds: {}; SecurityGroupIds: {} } | undefined
            }
          | undefined
        JiraConfiguration?:
          | {
              JiraAccountUrl: {}
              SecretArn: {}
              UseChangeLog?: {} | undefined
              Project?: {} | undefined
              IssueType?: {} | undefined
              Status?: {} | undefined
              IssueSubEntityFilter?: {} | undefined
              AttachmentFieldMappings?: {} | undefined
              CommentFieldMappings?: {} | undefined
              IssueFieldMappings?: {} | undefined
              ProjectFieldMappings?: {} | undefined
              WorkLogFieldMappings?: {} | undefined
              InclusionPatterns?: {} | undefined
              ExclusionPatterns?: {} | undefined
              VpcConfiguration?: { SubnetIds: {}; SecurityGroupIds: {} } | undefined
            }
          | undefined
        GitHubConfiguration?:
          | {
              SaaSConfiguration?: { OrganizationName: {}; HostUrl: {} } | undefined
              OnPremiseConfiguration?:
                | {
                    HostUrl: {}
                    OrganizationName: {}
                    SslCertificateS3Path: { Bucket: {}; Key: {} }
                  }
                | undefined
              Type?: {} | undefined
              SecretArn: {}
              UseChangeLog?: {} | undefined
              GitHubDocumentCrawlProperties?:
                | {
                    CrawlRepositoryDocuments?: {} | undefined
                    CrawlIssue?: {} | undefined
                    CrawlIssueComment?: {} | undefined
                    CrawlIssueCommentAttachment?: {} | undefined
                    CrawlPullRequest?: {} | undefined
                    CrawlPullRequestComment?: {} | undefined
                    CrawlPullRequestCommentAttachment?: {} | undefined
                  }
                | undefined
              RepositoryFilter?: {} | undefined
              InclusionFolderNamePatterns?: {} | undefined
              InclusionFileTypePatterns?: {} | undefined
              InclusionFileNamePatterns?: {} | undefined
              ExclusionFolderNamePatterns?: {} | undefined
              ExclusionFileTypePatterns?: {} | undefined
              ExclusionFileNamePatterns?: {} | undefined
              VpcConfiguration?: { SubnetIds: {}; SecurityGroupIds: {} } | undefined
              GitHubRepositoryConfigurationFieldMappings?: {} | undefined
              GitHubCommitConfigurationFieldMappings?: {} | undefined
              GitHubIssueDocumentConfigurationFieldMappings?: {} | undefined
              GitHubIssueCommentConfigurationFieldMappings?: {} | undefined
              GitHubIssueAttachmentConfigurationFieldMappings?: {} | undefined
              GitHubPullRequestCommentConfigurationFieldMappings?: {} | undefined
              GitHubPullRequestDocumentConfigurationFieldMappings?: {} | undefined
              GitHubPullRequestDocumentAttachmentConfigurationFieldMappings?: {} | undefined
            }
          | undefined
        AlfrescoConfiguration?:
          | {
              SiteUrl: {}
              SiteId: {}
              SecretArn: {}
              SslCertificateS3Path: { Bucket: {}; Key: {} }
              CrawlSystemFolders?: {} | undefined
              CrawlComments?: {} | undefined
              EntityFilter?: {} | undefined
              DocumentLibraryFieldMappings?: {} | undefined
              BlogFieldMappings?: {} | undefined
              WikiFieldMappings?: {} | undefined
              InclusionPatterns?: {} | undefined
              ExclusionPatterns?: {} | undefined
              VpcConfiguration?: { SubnetIds: {}; SecurityGroupIds: {} } | undefined
            }
          | undefined
        TemplateConfiguration?: { Template?: {} | undefined } | undefined
      }
    | undefined
  VpcConfiguration?: { SubnetIds: {}; SecurityGroupIds: {} } | undefined
  Description?: {} | undefined
  Schedule?: {} | undefined
  RoleArn?: {} | undefined
  Tags?: {} | undefined
  ClientToken?: {} | undefined
  LanguageCode?: {} | undefined
  CustomDocumentEnrichmentConfiguration?:
    | {
        InlineConfigurations?: {} | undefined
        PreExtractionHookConfiguration?:
          | {
              InvocationCondition?:
                | {
                    ConditionDocumentAttributeKey: {}
                    Operator: {}
                    ConditionOnValue?:
                      | {
                          StringValue?: {} | undefined
                          StringListValue?: {} | undefined
                          LongValue?: {} | undefined
                          DateValue?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
              LambdaArn: {}
              S3Bucket: {}
            }
          | undefined
        PostExtractionHookConfiguration?:
          | {
              InvocationCondition?:
                | {
                    ConditionDocumentAttributeKey: {}
                    Operator: {}
                    ConditionOnValue?:
                      | {
                          StringValue?: {} | undefined
                          StringListValue?: {} | undefined
                          LongValue?: {} | undefined
                          DateValue?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
              LambdaArn: {}
              S3Bucket: {}
            }
          | undefined
        RoleArn?: {} | undefined
      }
    | undefined
}
type CreateDataSourceResponse = { Id: {} }
type CreateExperienceRequest = {
  Name: {}
  IndexId: {}
  RoleArn?: {} | undefined
  Configuration?:
    | {
        ContentSourceConfiguration?:
          | {
              DataSourceIds?: {} | undefined
              FaqIds?: {} | undefined
              DirectPutContent?: {} | undefined
            }
          | undefined
        UserIdentityConfiguration?: { IdentityAttributeName?: {} | undefined } | undefined
      }
    | undefined
  Description?: {} | undefined
  ClientToken?: {} | undefined
}
type CreateExperienceResponse = { Id: {} }
type CreateFaqRequest = {
  IndexId: {}
  Name: {}
  Description?: {} | undefined
  S3Path: { Bucket: {}; Key: {} }
  RoleArn: {}
  Tags?: {} | undefined
  FileFormat?: {} | undefined
  ClientToken?: {} | undefined
  LanguageCode?: {} | undefined
}
type CreateFaqResponse = { Id?: {} | undefined }
type CreateFeaturedResultsSetRequest = {
  IndexId: {}
  FeaturedResultsSetName: {}
  Description?: {} | undefined
  ClientToken?: {} | undefined
  Status?: {} | undefined
  QueryTexts?: {} | undefined
  FeaturedDocuments?: {} | undefined
  Tags?: {} | undefined
}
type CreateFeaturedResultsSetResponse = {
  FeaturedResultsSet?:
    | {
        FeaturedResultsSetId?: {} | undefined
        FeaturedResultsSetName?: {} | undefined
        Description?: {} | undefined
        Status?: {} | undefined
        QueryTexts?: {} | undefined
        FeaturedDocuments?: {} | undefined
        LastUpdatedTimestamp?: {} | undefined
        CreationTimestamp?: {} | undefined
      }
    | undefined
}
type CreateIndexRequest = {
  Name: {}
  Edition?: {} | undefined
  RoleArn: {}
  ServerSideEncryptionConfiguration?: { KmsKeyId?: {} | undefined } | undefined
  Description?: {} | undefined
  ClientToken?: {} | undefined
  Tags?: {} | undefined
  UserTokenConfigurations?: {} | undefined
  UserContextPolicy?: {} | undefined
  UserGroupResolutionConfiguration?: { UserGroupResolutionMode: {} } | undefined
}
type CreateIndexResponse = { Id?: {} | undefined }
type CreateQuerySuggestionsBlockListRequest = {
  IndexId: {}
  Name: {}
  Description?: {} | undefined
  SourceS3Path: { Bucket: {}; Key: {} }
  ClientToken?: {} | undefined
  RoleArn: {}
  Tags?: {} | undefined
}
type CreateQuerySuggestionsBlockListResponse = { Id?: {} | undefined }
type CreateThesaurusRequest = {
  IndexId: {}
  Name: {}
  Description?: {} | undefined
  RoleArn: {}
  Tags?: {} | undefined
  SourceS3Path: { Bucket: {}; Key: {} }
  ClientToken?: {} | undefined
}
type CreateThesaurusResponse = { Id?: {} | undefined }
type DeleteAccessControlConfigurationRequest = { IndexId: {}; Id: {} }
type DeleteAccessControlConfigurationResponse = { [x: string]: unknown }
type DeleteDataSourceRequest = { Id: {}; IndexId: {} }
type DeleteExperienceRequest = { Id: {}; IndexId: {} }
type DeleteExperienceResponse = { [x: string]: unknown }
type DeleteFaqRequest = { Id: {}; IndexId: {} }
type DeleteIndexRequest = { Id: {} }
type DeletePrincipalMappingRequest = {
  IndexId: {}
  DataSourceId?: {} | undefined
  GroupId: {}
  OrderingId?: {} | undefined
}
type DeleteQuerySuggestionsBlockListRequest = { IndexId: {}; Id: {} }
type DeleteThesaurusRequest = { Id: {}; IndexId: {} }
type DescribeAccessControlConfigurationRequest = { IndexId: {}; Id: {} }
type DescribeAccessControlConfigurationResponse = {
  Name: {}
  Description?: {} | undefined
  ErrorMessage?: {} | undefined
  AccessControlList?: {} | undefined
  HierarchicalAccessControlList?: {} | undefined
}
type DescribeDataSourceRequest = { Id: {}; IndexId: {} }
type DescribeDataSourceResponse = {
  Id?: {} | undefined
  IndexId?: {} | undefined
  Name?: {} | undefined
  Type?: {} | undefined
  Configuration?:
    | {
        S3Configuration?:
          | {
              BucketName: {}
              InclusionPrefixes?: {} | undefined
              InclusionPatterns?: {} | undefined
              ExclusionPatterns?: {} | undefined
              DocumentsMetadataConfiguration?: DocumentsMetadataConfiguration | undefined
              AccessControlListConfiguration?: { KeyPath?: {} | undefined } | undefined
            }
          | undefined
        SharePointConfiguration?:
          | {
              SharePointVersion: {}
              Urls: {}
              SecretArn: {}
              CrawlAttachments?: {} | undefined
              UseChangeLog?: {} | undefined
              InclusionPatterns?: {} | undefined
              ExclusionPatterns?: {} | undefined
              VpcConfiguration?: { SubnetIds: {}; SecurityGroupIds: {} } | undefined
              FieldMappings?: {} | undefined
              DocumentTitleFieldName?: {} | undefined
              DisableLocalGroups?: {} | undefined
              SslCertificateS3Path?: { Bucket: {}; Key: {} } | undefined
              AuthenticationType?: {} | undefined
              ProxyConfiguration?: { Host: {}; Port: {}; Credentials?: {} | undefined } | undefined
            }
          | undefined
        DatabaseConfiguration?:
          | {
              DatabaseEngineType: {}
              ConnectionConfiguration: {
                DatabaseHost: {}
                DatabasePort: {}
                DatabaseName: {}
                TableName: {}
                SecretArn: {}
              }
              VpcConfiguration?: DataSourceVpcConfiguration | undefined
              ColumnConfiguration: {
                DocumentIdColumnName: {}
                DocumentDataColumnName: {}
                DocumentTitleColumnName?: {} | undefined
                FieldMappings?: {} | undefined
                ChangeDetectingColumns: {}
              }
              AclConfiguration?: { AllowedGroupsColumnName: {} } | undefined
              SqlConfiguration?: { QueryIdentifiersEnclosingOption?: {} | undefined } | undefined
            }
          | undefined
        SalesforceConfiguration?:
          | {
              ServerUrl: {}
              SecretArn: {}
              StandardObjectConfigurations?: {} | undefined
              KnowledgeArticleConfiguration?:
                | {
                    IncludedStates: {}
                    StandardKnowledgeArticleTypeConfiguration?:
                      | {
                          DocumentDataFieldName: {}
                          DocumentTitleFieldName?: {} | undefined
                          FieldMappings?: {} | undefined
                        }
                      | undefined
                    CustomKnowledgeArticleTypeConfigurations?: {} | undefined
                  }
                | undefined
              ChatterFeedConfiguration?:
                | {
                    DocumentDataFieldName: {}
                    DocumentTitleFieldName?: {} | undefined
                    FieldMappings?: {} | undefined
                    IncludeFilterTypes?: {} | undefined
                  }
                | undefined
              CrawlAttachments?: {} | undefined
              StandardObjectAttachmentConfiguration?:
                | { DocumentTitleFieldName?: {} | undefined; FieldMappings?: {} | undefined }
                | undefined
              IncludeAttachmentFilePatterns?: {} | undefined
              ExcludeAttachmentFilePatterns?: {} | undefined
            }
          | undefined
        OneDriveConfiguration?:
          | {
              TenantDomain: {}
              SecretArn: {}
              OneDriveUsers: {
                OneDriveUserList?: {} | undefined
                OneDriveUserS3Path?: { Bucket: {}; Key: {} } | undefined
              }
              InclusionPatterns?: {} | undefined
              ExclusionPatterns?: {} | undefined
              FieldMappings?: {} | undefined
              DisableLocalGroups?: {} | undefined
            }
          | undefined
        ServiceNowConfiguration?:
          | {
              HostUrl: {}
              SecretArn: {}
              ServiceNowBuildVersion: {}
              KnowledgeArticleConfiguration?:
                | {
                    CrawlAttachments?: {} | undefined
                    IncludeAttachmentFilePatterns?: {} | undefined
                    ExcludeAttachmentFilePatterns?: {} | undefined
                    DocumentDataFieldName: {}
                    DocumentTitleFieldName?: {} | undefined
                    FieldMappings?: {} | undefined
                    FilterQuery?: {} | undefined
                  }
                | undefined
              ServiceCatalogConfiguration?:
                | {
                    CrawlAttachments?: {} | undefined
                    IncludeAttachmentFilePatterns?: {} | undefined
                    ExcludeAttachmentFilePatterns?: {} | undefined
                    DocumentDataFieldName: {}
                    DocumentTitleFieldName?: {} | undefined
                    FieldMappings?: {} | undefined
                  }
                | undefined
              AuthenticationType?: {} | undefined
            }
          | undefined
        ConfluenceConfiguration?:
          | {
              ServerUrl: {}
              SecretArn: {}
              Version: {}
              SpaceConfiguration?:
                | {
                    CrawlPersonalSpaces?: {} | undefined
                    CrawlArchivedSpaces?: {} | undefined
                    IncludeSpaces?: {} | undefined
                    ExcludeSpaces?: {} | undefined
                    SpaceFieldMappings?: {} | undefined
                  }
                | undefined
              PageConfiguration?: { PageFieldMappings?: {} | undefined } | undefined
              BlogConfiguration?: { BlogFieldMappings?: {} | undefined } | undefined
              AttachmentConfiguration?:
                | { CrawlAttachments?: {} | undefined; AttachmentFieldMappings?: {} | undefined }
                | undefined
              VpcConfiguration?: { SubnetIds: {}; SecurityGroupIds: {} } | undefined
              InclusionPatterns?: {} | undefined
              ExclusionPatterns?: {} | undefined
              ProxyConfiguration?: { Host: {}; Port: {}; Credentials?: {} | undefined } | undefined
              AuthenticationType?: {} | undefined
            }
          | undefined
        GoogleDriveConfiguration?:
          | {
              SecretArn: {}
              InclusionPatterns?: {} | undefined
              ExclusionPatterns?: {} | undefined
              FieldMappings?: {} | undefined
              ExcludeMimeTypes?: {} | undefined
              ExcludeUserAccounts?: {} | undefined
              ExcludeSharedDrives?: {} | undefined
            }
          | undefined
        WebCrawlerConfiguration?: WebCrawlerConfiguration | undefined
        WorkDocsConfiguration?:
          | {
              OrganizationId: {}
              CrawlComments?: {} | undefined
              UseChangeLog?: {} | undefined
              InclusionPatterns?: {} | undefined
              ExclusionPatterns?: {} | undefined
              FieldMappings?: {} | undefined
            }
          | undefined
        FsxConfiguration?:
          | {
              FileSystemId: {}
              FileSystemType: {}
              VpcConfiguration: { SubnetIds: {}; SecurityGroupIds: {} }
              SecretArn?: {} | undefined
              InclusionPatterns?: {} | undefined
              ExclusionPatterns?: {} | undefined
              FieldMappings?: {} | undefined
            }
          | undefined
        SlackConfiguration?:
          | {
              TeamId: {}
              SecretArn: {}
              VpcConfiguration?: { SubnetIds: {}; SecurityGroupIds: {} } | undefined
              SlackEntityList: {}
              UseChangeLog?: {} | undefined
              CrawlBotMessage?: {} | undefined
              ExcludeArchived?: {} | undefined
              SinceCrawlDate: {}
              LookBackPeriod?: {} | undefined
              PrivateChannelFilter?: {} | undefined
              PublicChannelFilter?: {} | undefined
              InclusionPatterns?: {} | undefined
              ExclusionPatterns?: {} | undefined
              FieldMappings?: {} | undefined
            }
          | undefined
        BoxConfiguration?:
          | {
              EnterpriseId: {}
              SecretArn: {}
              UseChangeLog?: {} | undefined
              CrawlComments?: {} | undefined
              CrawlTasks?: {} | undefined
              CrawlWebLinks?: {} | undefined
              FileFieldMappings?: {} | undefined
              TaskFieldMappings?: {} | undefined
              CommentFieldMappings?: {} | undefined
              WebLinkFieldMappings?: {} | undefined
              InclusionPatterns?: {} | undefined
              ExclusionPatterns?: {} | undefined
              VpcConfiguration?: { SubnetIds: {}; SecurityGroupIds: {} } | undefined
            }
          | undefined
        QuipConfiguration?:
          | {
              Domain: {}
              SecretArn: {}
              CrawlFileComments?: {} | undefined
              CrawlChatRooms?: {} | undefined
              CrawlAttachments?: {} | undefined
              FolderIds?: {} | undefined
              ThreadFieldMappings?: {} | undefined
              MessageFieldMappings?: {} | undefined
              AttachmentFieldMappings?: {} | undefined
              InclusionPatterns?: {} | undefined
              ExclusionPatterns?: {} | undefined
              VpcConfiguration?: { SubnetIds: {}; SecurityGroupIds: {} } | undefined
            }
          | undefined
        JiraConfiguration?:
          | {
              JiraAccountUrl: {}
              SecretArn: {}
              UseChangeLog?: {} | undefined
              Project?: {} | undefined
              IssueType?: {} | undefined
              Status?: {} | undefined
              IssueSubEntityFilter?: {} | undefined
              AttachmentFieldMappings?: {} | undefined
              CommentFieldMappings?: {} | undefined
              IssueFieldMappings?: {} | undefined
              ProjectFieldMappings?: {} | undefined
              WorkLogFieldMappings?: {} | undefined
              InclusionPatterns?: {} | undefined
              ExclusionPatterns?: {} | undefined
              VpcConfiguration?: { SubnetIds: {}; SecurityGroupIds: {} } | undefined
            }
          | undefined
        GitHubConfiguration?:
          | {
              SaaSConfiguration?: { OrganizationName: {}; HostUrl: {} } | undefined
              OnPremiseConfiguration?:
                | {
                    HostUrl: {}
                    OrganizationName: {}
                    SslCertificateS3Path: { Bucket: {}; Key: {} }
                  }
                | undefined
              Type?: {} | undefined
              SecretArn: {}
              UseChangeLog?: {} | undefined
              GitHubDocumentCrawlProperties?:
                | {
                    CrawlRepositoryDocuments?: {} | undefined
                    CrawlIssue?: {} | undefined
                    CrawlIssueComment?: {} | undefined
                    CrawlIssueCommentAttachment?: {} | undefined
                    CrawlPullRequest?: {} | undefined
                    CrawlPullRequestComment?: {} | undefined
                    CrawlPullRequestCommentAttachment?: {} | undefined
                  }
                | undefined
              RepositoryFilter?: {} | undefined
              InclusionFolderNamePatterns?: {} | undefined
              InclusionFileTypePatterns?: {} | undefined
              InclusionFileNamePatterns?: {} | undefined
              ExclusionFolderNamePatterns?: {} | undefined
              ExclusionFileTypePatterns?: {} | undefined
              ExclusionFileNamePatterns?: {} | undefined
              VpcConfiguration?: { SubnetIds: {}; SecurityGroupIds: {} } | undefined
              GitHubRepositoryConfigurationFieldMappings?: {} | undefined
              GitHubCommitConfigurationFieldMappings?: {} | undefined
              GitHubIssueDocumentConfigurationFieldMappings?: {} | undefined
              GitHubIssueCommentConfigurationFieldMappings?: {} | undefined
              GitHubIssueAttachmentConfigurationFieldMappings?: {} | undefined
              GitHubPullRequestCommentConfigurationFieldMappings?: {} | undefined
              GitHubPullRequestDocumentConfigurationFieldMappings?: {} | undefined
              GitHubPullRequestDocumentAttachmentConfigurationFieldMappings?: {} | undefined
            }
          | undefined
        AlfrescoConfiguration?:
          | {
              SiteUrl: {}
              SiteId: {}
              SecretArn: {}
              SslCertificateS3Path: { Bucket: {}; Key: {} }
              CrawlSystemFolders?: {} | undefined
              CrawlComments?: {} | undefined
              EntityFilter?: {} | undefined
              DocumentLibraryFieldMappings?: {} | undefined
              BlogFieldMappings?: {} | undefined
              WikiFieldMappings?: {} | undefined
              InclusionPatterns?: {} | undefined
              ExclusionPatterns?: {} | undefined
              VpcConfiguration?: { SubnetIds: {}; SecurityGroupIds: {} } | undefined
            }
          | undefined
        TemplateConfiguration?: { Template?: {} | undefined } | undefined
      }
    | undefined
  VpcConfiguration?: { SubnetIds: {}; SecurityGroupIds: {} } | undefined
  CreatedAt?: {} | undefined
  UpdatedAt?: {} | undefined
  Description?: {} | undefined
  Status?: {} | undefined
  Schedule?: {} | undefined
  RoleArn?: {} | undefined
  ErrorMessage?: {} | undefined
  LanguageCode?: {} | undefined
  CustomDocumentEnrichmentConfiguration?:
    | {
        InlineConfigurations?: {} | undefined
        PreExtractionHookConfiguration?:
          | {
              InvocationCondition?:
                | {
                    ConditionDocumentAttributeKey: {}
                    Operator: {}
                    ConditionOnValue?:
                      | {
                          StringValue?: {} | undefined
                          StringListValue?: {} | undefined
                          LongValue?: {} | undefined
                          DateValue?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
              LambdaArn: {}
              S3Bucket: {}
            }
          | undefined
        PostExtractionHookConfiguration?:
          | {
              InvocationCondition?:
                | {
                    ConditionDocumentAttributeKey: {}
                    Operator: {}
                    ConditionOnValue?:
                      | {
                          StringValue?: {} | undefined
                          StringListValue?: {} | undefined
                          LongValue?: {} | undefined
                          DateValue?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
              LambdaArn: {}
              S3Bucket: {}
            }
          | undefined
        RoleArn?: {} | undefined
      }
    | undefined
}
type DescribeExperienceRequest = { Id: {}; IndexId: {} }
type DescribeExperienceResponse = {
  Id?: {} | undefined
  IndexId?: {} | undefined
  Name?: {} | undefined
  Endpoints?: {} | undefined
  Configuration?:
    | {
        ContentSourceConfiguration?:
          | {
              DataSourceIds?: {} | undefined
              FaqIds?: {} | undefined
              DirectPutContent?: {} | undefined
            }
          | undefined
        UserIdentityConfiguration?: { IdentityAttributeName?: {} | undefined } | undefined
      }
    | undefined
  CreatedAt?: {} | undefined
  UpdatedAt?: {} | undefined
  Description?: {} | undefined
  Status?: {} | undefined
  RoleArn?: {} | undefined
  ErrorMessage?: {} | undefined
}
type DescribeFaqRequest = { Id: {}; IndexId: {} }
type S3Path = { Bucket: {}; Key: {} }
type DescribeFaqResponse = {
  Id?: {} | undefined
  IndexId?: {} | undefined
  Name?: {} | undefined
  Description?: {} | undefined
  CreatedAt?: {} | undefined
  UpdatedAt?: {} | undefined
  S3Path?: S3Path | undefined
  Status?: {} | undefined
  RoleArn?: {} | undefined
  ErrorMessage?: {} | undefined
  FileFormat?: {} | undefined
  LanguageCode?: {} | undefined
}
type DescribeFeaturedResultsSetRequest = { IndexId: {}; FeaturedResultsSetId: {} }
type DescribeFeaturedResultsSetResponse = {
  FeaturedResultsSetId?: {} | undefined
  FeaturedResultsSetName?: {} | undefined
  Description?: {} | undefined
  Status?: {} | undefined
  QueryTexts?: {} | undefined
  FeaturedDocumentsWithMetadata?: {} | undefined
  FeaturedDocumentsMissing?: {} | undefined
  LastUpdatedTimestamp?: {} | undefined
  CreationTimestamp?: {} | undefined
}
type DescribeIndexRequest = { Id: {} }
type DescribeIndexResponse = {
  Name?: {} | undefined
  Id?: {} | undefined
  Edition?: {} | undefined
  RoleArn?: {} | undefined
  ServerSideEncryptionConfiguration?: { KmsKeyId?: {} | undefined } | undefined
  Status?: {} | undefined
  Description?: {} | undefined
  CreatedAt?: {} | undefined
  UpdatedAt?: {} | undefined
  DocumentMetadataConfigurations?: {} | undefined
  IndexStatistics?:
    | {
        FaqStatistics: { IndexedQuestionAnswersCount: {} }
        TextDocumentStatistics: { IndexedTextDocumentsCount: {}; IndexedTextBytes: {} }
      }
    | undefined
  ErrorMessage?: {} | undefined
  CapacityUnits?: { StorageCapacityUnits: {}; QueryCapacityUnits: {} } | undefined
  UserTokenConfigurations?: {} | undefined
  UserContextPolicy?: {} | undefined
  UserGroupResolutionConfiguration?: { UserGroupResolutionMode: {} } | undefined
}
type DescribePrincipalMappingRequest = { IndexId: {}; DataSourceId?: {} | undefined; GroupId: {} }
type DescribePrincipalMappingResponse = {
  IndexId?: {} | undefined
  DataSourceId?: {} | undefined
  GroupId?: {} | undefined
  GroupOrderingIdSummaries?: {} | undefined
}
type DescribeQuerySuggestionsBlockListRequest = { IndexId: {}; Id: {} }
type DescribeQuerySuggestionsBlockListResponse = {
  IndexId?: {} | undefined
  Id?: {} | undefined
  Name?: {} | undefined
  Description?: {} | undefined
  Status?: {} | undefined
  ErrorMessage?: {} | undefined
  CreatedAt?: {} | undefined
  UpdatedAt?: {} | undefined
  SourceS3Path?: { Bucket: {}; Key: {} } | undefined
  ItemCount?: {} | undefined
  FileSizeBytes?: {} | undefined
  RoleArn?: {} | undefined
}
type DescribeQuerySuggestionsConfigRequest = { IndexId: {} }
type DescribeQuerySuggestionsConfigResponse = {
  Mode?: {} | undefined
  Status?: {} | undefined
  QueryLogLookBackWindowInDays?: {} | undefined
  IncludeQueriesWithoutUserInformation?: {} | undefined
  MinimumNumberOfQueryingUsers?: {} | undefined
  MinimumQueryCount?: {} | undefined
  LastSuggestionsBuildTime?: {} | undefined
  LastClearTime?: {} | undefined
  TotalSuggestionsCount?: {} | undefined
}
type DescribeThesaurusRequest = { Id: {}; IndexId: {} }
type DescribeThesaurusResponse = {
  Id?: {} | undefined
  IndexId?: {} | undefined
  Name?: {} | undefined
  Description?: {} | undefined
  Status?: {} | undefined
  ErrorMessage?: {} | undefined
  CreatedAt?: {} | undefined
  UpdatedAt?: {} | undefined
  RoleArn?: {} | undefined
  SourceS3Path?: S3Path | undefined
  FileSizeBytes?: {} | undefined
  TermCount?: {} | undefined
  SynonymRuleCount?: {} | undefined
}
type DisassociateEntitiesFromExperienceRequest = { Id: {}; IndexId: {}; EntityList: {} }
type DisassociateEntitiesFromExperienceResponse = { FailedEntityList?: {} | undefined }
type DisassociatePersonasFromEntitiesRequest = { Id: {}; IndexId: {}; EntityIds: {} }
type DisassociatePersonasFromEntitiesResponse = { FailedEntityList?: {} | undefined }
type GetQuerySuggestionsRequest = {
  IndexId: {}
  QueryText: {}
  MaxSuggestionsCount?: {} | undefined
}
type GetQuerySuggestionsResponse = {
  QuerySuggestionsId?: {} | undefined
  Suggestions?: {} | undefined
}
type GetSnapshotsRequest = {
  IndexId: {}
  Interval: {}
  MetricType: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type GetSnapshotsResponse = {
  SnapShotTimeFilter?: { StartTime?: {} | undefined; EndTime?: {} | undefined } | undefined
  SnapshotsDataHeader?: {} | undefined
  SnapshotsData?: {} | undefined
  NextToken?: {} | undefined
}
type ListAccessControlConfigurationsRequest = {
  IndexId: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListAccessControlConfigurationsResponse = {
  NextToken?: {} | undefined
  AccessControlConfigurations: {}
}
type ListDataSourceSyncJobsRequest = {
  Id: {}
  IndexId: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  StartTimeFilter?: { StartTime?: {} | undefined; EndTime?: {} | undefined } | undefined
  StatusFilter?: {} | undefined
}
type ListDataSourceSyncJobsResponse = { History?: {} | undefined; NextToken?: {} | undefined }
type ListDataSourcesRequest = {
  IndexId: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListDataSourcesResponse = { SummaryItems?: {} | undefined; NextToken?: {} | undefined }
type ListEntityPersonasRequest = {
  Id: {}
  IndexId: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListEntityPersonasResponse = { SummaryItems?: {} | undefined; NextToken?: {} | undefined }
type ListExperienceEntitiesRequest = { Id: {}; IndexId: {}; NextToken?: {} | undefined }
type ListExperienceEntitiesResponse = { SummaryItems?: {} | undefined; NextToken?: {} | undefined }
type ListExperiencesRequest = {
  IndexId: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListExperiencesResponse = { SummaryItems?: {} | undefined; NextToken?: {} | undefined }
type ListFaqsRequest = { IndexId: {}; NextToken?: {} | undefined; MaxResults?: {} | undefined }
type ListFaqsResponse = { NextToken?: {} | undefined; FaqSummaryItems?: {} | undefined }
type ListFeaturedResultsSetsRequest = {
  IndexId: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListFeaturedResultsSetsResponse = {
  FeaturedResultsSetSummaryItems?: {} | undefined
  NextToken?: {} | undefined
}
type ListGroupsOlderThanOrderingIdRequest = {
  IndexId: {}
  DataSourceId?: {} | undefined
  OrderingId: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListGroupsOlderThanOrderingIdResponse = {
  GroupsSummaries?: {} | undefined
  NextToken?: {} | undefined
}
type ListIndicesRequest = { NextToken?: {} | undefined; MaxResults?: {} | undefined }
type ListIndicesResponse = {
  IndexConfigurationSummaryItems?: {} | undefined
  NextToken?: {} | undefined
}
type ListQuerySuggestionsBlockListsRequest = {
  IndexId: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListQuerySuggestionsBlockListsResponse = {
  BlockListSummaryItems?: {} | undefined
  NextToken?: {} | undefined
}
type ListTagsForResourceRequest = { ResourceARN: {} }
type ListTagsForResourceResponse = { Tags?: {} | undefined }
type ListThesauriRequest = { IndexId: {}; NextToken?: {} | undefined; MaxResults?: {} | undefined }
type ListThesauriResponse = { NextToken?: {} | undefined; ThesaurusSummaryItems?: {} | undefined }
type PutPrincipalMappingRequest = {
  IndexId: {}
  DataSourceId?: {} | undefined
  GroupId: {}
  GroupMembers: {
    MemberGroups?: {} | undefined
    MemberUsers?: {} | undefined
    S3PathforGroupMembers?: { Bucket: {}; Key: {} } | undefined
  }
  OrderingId?: {} | undefined
  RoleArn?: {} | undefined
}
type QueryRequest = {
  IndexId: {}
  QueryText?: {} | undefined
  AttributeFilter?:
    | {
        AndAllFilters?: {} | undefined
        OrAllFilters?: {} | undefined
        NotFilter?: {} | undefined
        EqualsTo?:
          | {
              Key: {}
              Value: {
                StringValue?: {} | undefined
                StringListValue?: {} | undefined
                LongValue?: {} | undefined
                DateValue?: {} | undefined
              }
            }
          | undefined
        ContainsAll?:
          | {
              Key: {}
              Value: {
                StringValue?: {} | undefined
                StringListValue?: {} | undefined
                LongValue?: {} | undefined
                DateValue?: {} | undefined
              }
            }
          | undefined
        ContainsAny?:
          | {
              Key: {}
              Value: {
                StringValue?: {} | undefined
                StringListValue?: {} | undefined
                LongValue?: {} | undefined
                DateValue?: {} | undefined
              }
            }
          | undefined
        GreaterThan?:
          | {
              Key: {}
              Value: {
                StringValue?: {} | undefined
                StringListValue?: {} | undefined
                LongValue?: {} | undefined
                DateValue?: {} | undefined
              }
            }
          | undefined
        GreaterThanOrEquals?:
          | {
              Key: {}
              Value: {
                StringValue?: {} | undefined
                StringListValue?: {} | undefined
                LongValue?: {} | undefined
                DateValue?: {} | undefined
              }
            }
          | undefined
        LessThan?:
          | {
              Key: {}
              Value: {
                StringValue?: {} | undefined
                StringListValue?: {} | undefined
                LongValue?: {} | undefined
                DateValue?: {} | undefined
              }
            }
          | undefined
        LessThanOrEquals?:
          | {
              Key: {}
              Value: {
                StringValue?: {} | undefined
                StringListValue?: {} | undefined
                LongValue?: {} | undefined
                DateValue?: {} | undefined
              }
            }
          | undefined
      }
    | undefined
  Facets?: {} | undefined
  RequestedDocumentAttributes?: {} | undefined
  QueryResultTypeFilter?: {} | undefined
  DocumentRelevanceOverrideConfigurations?: {} | undefined
  PageNumber?: {} | undefined
  PageSize?: {} | undefined
  SortingConfiguration?: { DocumentAttributeKey: {}; SortOrder: {} } | undefined
  UserContext?:
    | {
        Token?: {} | undefined
        UserId?: {} | undefined
        Groups?: {} | undefined
        DataSourceGroups?: {} | undefined
      }
    | undefined
  VisitorId?: {} | undefined
  SpellCorrectionConfiguration?: { IncludeQuerySpellCheckSuggestions: {} } | undefined
}
type QueryResult = {
  QueryId?: {} | undefined
  ResultItems?: {} | undefined
  FacetResults?: {} | undefined
  TotalNumberOfResults?: {} | undefined
  Warnings?: {} | undefined
  SpellCorrectedQueries?: {} | undefined
  FeaturedResultsItems?: {} | undefined
}
type StartDataSourceSyncJobRequest = { Id: {}; IndexId: {} }
type StartDataSourceSyncJobResponse = { ExecutionId?: {} | undefined }
type StopDataSourceSyncJobRequest = { Id: {}; IndexId: {} }
type SubmitFeedbackRequest = {
  IndexId: {}
  QueryId: {}
  ClickFeedbackItems?: {} | undefined
  RelevanceFeedbackItems?: {} | undefined
}
type TagResourceRequest = { ResourceARN: {}; Tags: {} }
type TagResourceResponse = { [x: string]: unknown }
type UntagResourceRequest = { ResourceARN: {}; TagKeys: {} }
type UntagResourceResponse = { [x: string]: unknown }
type UpdateAccessControlConfigurationRequest = {
  IndexId: {}
  Id: {}
  Name?: {} | undefined
  Description?: {} | undefined
  AccessControlList?: {} | undefined
  HierarchicalAccessControlList?: {} | undefined
}
type UpdateAccessControlConfigurationResponse = { [x: string]: unknown }
type UpdateDataSourceRequest = {
  Id: {}
  Name?: {} | undefined
  IndexId: {}
  Configuration?:
    | {
        S3Configuration?:
          | {
              BucketName: {}
              InclusionPrefixes?: {} | undefined
              InclusionPatterns?: {} | undefined
              ExclusionPatterns?: {} | undefined
              DocumentsMetadataConfiguration?: DocumentsMetadataConfiguration | undefined
              AccessControlListConfiguration?: { KeyPath?: {} | undefined } | undefined
            }
          | undefined
        SharePointConfiguration?:
          | {
              SharePointVersion: {}
              Urls: {}
              SecretArn: {}
              CrawlAttachments?: {} | undefined
              UseChangeLog?: {} | undefined
              InclusionPatterns?: {} | undefined
              ExclusionPatterns?: {} | undefined
              VpcConfiguration?: { SubnetIds: {}; SecurityGroupIds: {} } | undefined
              FieldMappings?: {} | undefined
              DocumentTitleFieldName?: {} | undefined
              DisableLocalGroups?: {} | undefined
              SslCertificateS3Path?: { Bucket: {}; Key: {} } | undefined
              AuthenticationType?: {} | undefined
              ProxyConfiguration?: { Host: {}; Port: {}; Credentials?: {} | undefined } | undefined
            }
          | undefined
        DatabaseConfiguration?:
          | {
              DatabaseEngineType: {}
              ConnectionConfiguration: {
                DatabaseHost: {}
                DatabasePort: {}
                DatabaseName: {}
                TableName: {}
                SecretArn: {}
              }
              VpcConfiguration?: DataSourceVpcConfiguration | undefined
              ColumnConfiguration: {
                DocumentIdColumnName: {}
                DocumentDataColumnName: {}
                DocumentTitleColumnName?: {} | undefined
                FieldMappings?: {} | undefined
                ChangeDetectingColumns: {}
              }
              AclConfiguration?: { AllowedGroupsColumnName: {} } | undefined
              SqlConfiguration?: { QueryIdentifiersEnclosingOption?: {} | undefined } | undefined
            }
          | undefined
        SalesforceConfiguration?:
          | {
              ServerUrl: {}
              SecretArn: {}
              StandardObjectConfigurations?: {} | undefined
              KnowledgeArticleConfiguration?:
                | {
                    IncludedStates: {}
                    StandardKnowledgeArticleTypeConfiguration?:
                      | {
                          DocumentDataFieldName: {}
                          DocumentTitleFieldName?: {} | undefined
                          FieldMappings?: {} | undefined
                        }
                      | undefined
                    CustomKnowledgeArticleTypeConfigurations?: {} | undefined
                  }
                | undefined
              ChatterFeedConfiguration?:
                | {
                    DocumentDataFieldName: {}
                    DocumentTitleFieldName?: {} | undefined
                    FieldMappings?: {} | undefined
                    IncludeFilterTypes?: {} | undefined
                  }
                | undefined
              CrawlAttachments?: {} | undefined
              StandardObjectAttachmentConfiguration?:
                | { DocumentTitleFieldName?: {} | undefined; FieldMappings?: {} | undefined }
                | undefined
              IncludeAttachmentFilePatterns?: {} | undefined
              ExcludeAttachmentFilePatterns?: {} | undefined
            }
          | undefined
        OneDriveConfiguration?:
          | {
              TenantDomain: {}
              SecretArn: {}
              OneDriveUsers: {
                OneDriveUserList?: {} | undefined
                OneDriveUserS3Path?: { Bucket: {}; Key: {} } | undefined
              }
              InclusionPatterns?: {} | undefined
              ExclusionPatterns?: {} | undefined
              FieldMappings?: {} | undefined
              DisableLocalGroups?: {} | undefined
            }
          | undefined
        ServiceNowConfiguration?:
          | {
              HostUrl: {}
              SecretArn: {}
              ServiceNowBuildVersion: {}
              KnowledgeArticleConfiguration?:
                | {
                    CrawlAttachments?: {} | undefined
                    IncludeAttachmentFilePatterns?: {} | undefined
                    ExcludeAttachmentFilePatterns?: {} | undefined
                    DocumentDataFieldName: {}
                    DocumentTitleFieldName?: {} | undefined
                    FieldMappings?: {} | undefined
                    FilterQuery?: {} | undefined
                  }
                | undefined
              ServiceCatalogConfiguration?:
                | {
                    CrawlAttachments?: {} | undefined
                    IncludeAttachmentFilePatterns?: {} | undefined
                    ExcludeAttachmentFilePatterns?: {} | undefined
                    DocumentDataFieldName: {}
                    DocumentTitleFieldName?: {} | undefined
                    FieldMappings?: {} | undefined
                  }
                | undefined
              AuthenticationType?: {} | undefined
            }
          | undefined
        ConfluenceConfiguration?:
          | {
              ServerUrl: {}
              SecretArn: {}
              Version: {}
              SpaceConfiguration?:
                | {
                    CrawlPersonalSpaces?: {} | undefined
                    CrawlArchivedSpaces?: {} | undefined
                    IncludeSpaces?: {} | undefined
                    ExcludeSpaces?: {} | undefined
                    SpaceFieldMappings?: {} | undefined
                  }
                | undefined
              PageConfiguration?: { PageFieldMappings?: {} | undefined } | undefined
              BlogConfiguration?: { BlogFieldMappings?: {} | undefined } | undefined
              AttachmentConfiguration?:
                | { CrawlAttachments?: {} | undefined; AttachmentFieldMappings?: {} | undefined }
                | undefined
              VpcConfiguration?: { SubnetIds: {}; SecurityGroupIds: {} } | undefined
              InclusionPatterns?: {} | undefined
              ExclusionPatterns?: {} | undefined
              ProxyConfiguration?: { Host: {}; Port: {}; Credentials?: {} | undefined } | undefined
              AuthenticationType?: {} | undefined
            }
          | undefined
        GoogleDriveConfiguration?:
          | {
              SecretArn: {}
              InclusionPatterns?: {} | undefined
              ExclusionPatterns?: {} | undefined
              FieldMappings?: {} | undefined
              ExcludeMimeTypes?: {} | undefined
              ExcludeUserAccounts?: {} | undefined
              ExcludeSharedDrives?: {} | undefined
            }
          | undefined
        WebCrawlerConfiguration?: WebCrawlerConfiguration | undefined
        WorkDocsConfiguration?:
          | {
              OrganizationId: {}
              CrawlComments?: {} | undefined
              UseChangeLog?: {} | undefined
              InclusionPatterns?: {} | undefined
              ExclusionPatterns?: {} | undefined
              FieldMappings?: {} | undefined
            }
          | undefined
        FsxConfiguration?:
          | {
              FileSystemId: {}
              FileSystemType: {}
              VpcConfiguration: { SubnetIds: {}; SecurityGroupIds: {} }
              SecretArn?: {} | undefined
              InclusionPatterns?: {} | undefined
              ExclusionPatterns?: {} | undefined
              FieldMappings?: {} | undefined
            }
          | undefined
        SlackConfiguration?:
          | {
              TeamId: {}
              SecretArn: {}
              VpcConfiguration?: { SubnetIds: {}; SecurityGroupIds: {} } | undefined
              SlackEntityList: {}
              UseChangeLog?: {} | undefined
              CrawlBotMessage?: {} | undefined
              ExcludeArchived?: {} | undefined
              SinceCrawlDate: {}
              LookBackPeriod?: {} | undefined
              PrivateChannelFilter?: {} | undefined
              PublicChannelFilter?: {} | undefined
              InclusionPatterns?: {} | undefined
              ExclusionPatterns?: {} | undefined
              FieldMappings?: {} | undefined
            }
          | undefined
        BoxConfiguration?:
          | {
              EnterpriseId: {}
              SecretArn: {}
              UseChangeLog?: {} | undefined
              CrawlComments?: {} | undefined
              CrawlTasks?: {} | undefined
              CrawlWebLinks?: {} | undefined
              FileFieldMappings?: {} | undefined
              TaskFieldMappings?: {} | undefined
              CommentFieldMappings?: {} | undefined
              WebLinkFieldMappings?: {} | undefined
              InclusionPatterns?: {} | undefined
              ExclusionPatterns?: {} | undefined
              VpcConfiguration?: { SubnetIds: {}; SecurityGroupIds: {} } | undefined
            }
          | undefined
        QuipConfiguration?:
          | {
              Domain: {}
              SecretArn: {}
              CrawlFileComments?: {} | undefined
              CrawlChatRooms?: {} | undefined
              CrawlAttachments?: {} | undefined
              FolderIds?: {} | undefined
              ThreadFieldMappings?: {} | undefined
              MessageFieldMappings?: {} | undefined
              AttachmentFieldMappings?: {} | undefined
              InclusionPatterns?: {} | undefined
              ExclusionPatterns?: {} | undefined
              VpcConfiguration?: { SubnetIds: {}; SecurityGroupIds: {} } | undefined
            }
          | undefined
        JiraConfiguration?:
          | {
              JiraAccountUrl: {}
              SecretArn: {}
              UseChangeLog?: {} | undefined
              Project?: {} | undefined
              IssueType?: {} | undefined
              Status?: {} | undefined
              IssueSubEntityFilter?: {} | undefined
              AttachmentFieldMappings?: {} | undefined
              CommentFieldMappings?: {} | undefined
              IssueFieldMappings?: {} | undefined
              ProjectFieldMappings?: {} | undefined
              WorkLogFieldMappings?: {} | undefined
              InclusionPatterns?: {} | undefined
              ExclusionPatterns?: {} | undefined
              VpcConfiguration?: { SubnetIds: {}; SecurityGroupIds: {} } | undefined
            }
          | undefined
        GitHubConfiguration?:
          | {
              SaaSConfiguration?: { OrganizationName: {}; HostUrl: {} } | undefined
              OnPremiseConfiguration?:
                | {
                    HostUrl: {}
                    OrganizationName: {}
                    SslCertificateS3Path: { Bucket: {}; Key: {} }
                  }
                | undefined
              Type?: {} | undefined
              SecretArn: {}
              UseChangeLog?: {} | undefined
              GitHubDocumentCrawlProperties?:
                | {
                    CrawlRepositoryDocuments?: {} | undefined
                    CrawlIssue?: {} | undefined
                    CrawlIssueComment?: {} | undefined
                    CrawlIssueCommentAttachment?: {} | undefined
                    CrawlPullRequest?: {} | undefined
                    CrawlPullRequestComment?: {} | undefined
                    CrawlPullRequestCommentAttachment?: {} | undefined
                  }
                | undefined
              RepositoryFilter?: {} | undefined
              InclusionFolderNamePatterns?: {} | undefined
              InclusionFileTypePatterns?: {} | undefined
              InclusionFileNamePatterns?: {} | undefined
              ExclusionFolderNamePatterns?: {} | undefined
              ExclusionFileTypePatterns?: {} | undefined
              ExclusionFileNamePatterns?: {} | undefined
              VpcConfiguration?: { SubnetIds: {}; SecurityGroupIds: {} } | undefined
              GitHubRepositoryConfigurationFieldMappings?: {} | undefined
              GitHubCommitConfigurationFieldMappings?: {} | undefined
              GitHubIssueDocumentConfigurationFieldMappings?: {} | undefined
              GitHubIssueCommentConfigurationFieldMappings?: {} | undefined
              GitHubIssueAttachmentConfigurationFieldMappings?: {} | undefined
              GitHubPullRequestCommentConfigurationFieldMappings?: {} | undefined
              GitHubPullRequestDocumentConfigurationFieldMappings?: {} | undefined
              GitHubPullRequestDocumentAttachmentConfigurationFieldMappings?: {} | undefined
            }
          | undefined
        AlfrescoConfiguration?:
          | {
              SiteUrl: {}
              SiteId: {}
              SecretArn: {}
              SslCertificateS3Path: { Bucket: {}; Key: {} }
              CrawlSystemFolders?: {} | undefined
              CrawlComments?: {} | undefined
              EntityFilter?: {} | undefined
              DocumentLibraryFieldMappings?: {} | undefined
              BlogFieldMappings?: {} | undefined
              WikiFieldMappings?: {} | undefined
              InclusionPatterns?: {} | undefined
              ExclusionPatterns?: {} | undefined
              VpcConfiguration?: { SubnetIds: {}; SecurityGroupIds: {} } | undefined
            }
          | undefined
        TemplateConfiguration?: { Template?: {} | undefined } | undefined
      }
    | undefined
  VpcConfiguration?: { SubnetIds: {}; SecurityGroupIds: {} } | undefined
  Description?: {} | undefined
  Schedule?: {} | undefined
  RoleArn?: {} | undefined
  LanguageCode?: {} | undefined
  CustomDocumentEnrichmentConfiguration?:
    | {
        InlineConfigurations?: {} | undefined
        PreExtractionHookConfiguration?:
          | {
              InvocationCondition?:
                | {
                    ConditionDocumentAttributeKey: {}
                    Operator: {}
                    ConditionOnValue?:
                      | {
                          StringValue?: {} | undefined
                          StringListValue?: {} | undefined
                          LongValue?: {} | undefined
                          DateValue?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
              LambdaArn: {}
              S3Bucket: {}
            }
          | undefined
        PostExtractionHookConfiguration?:
          | {
              InvocationCondition?:
                | {
                    ConditionDocumentAttributeKey: {}
                    Operator: {}
                    ConditionOnValue?:
                      | {
                          StringValue?: {} | undefined
                          StringListValue?: {} | undefined
                          LongValue?: {} | undefined
                          DateValue?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
              LambdaArn: {}
              S3Bucket: {}
            }
          | undefined
        RoleArn?: {} | undefined
      }
    | undefined
}
type UpdateExperienceRequest = {
  Id: {}
  Name?: {} | undefined
  IndexId: {}
  RoleArn?: {} | undefined
  Configuration?:
    | {
        ContentSourceConfiguration?:
          | {
              DataSourceIds?: {} | undefined
              FaqIds?: {} | undefined
              DirectPutContent?: {} | undefined
            }
          | undefined
        UserIdentityConfiguration?: { IdentityAttributeName?: {} | undefined } | undefined
      }
    | undefined
  Description?: {} | undefined
}
type UpdateFeaturedResultsSetRequest = {
  IndexId: {}
  FeaturedResultsSetId: {}
  FeaturedResultsSetName?: {} | undefined
  Description?: {} | undefined
  Status?: {} | undefined
  QueryTexts?: {} | undefined
  FeaturedDocuments?: {} | undefined
}
type UpdateFeaturedResultsSetResponse = {
  FeaturedResultsSet?:
    | {
        FeaturedResultsSetId?: {} | undefined
        FeaturedResultsSetName?: {} | undefined
        Description?: {} | undefined
        Status?: {} | undefined
        QueryTexts?: {} | undefined
        FeaturedDocuments?: {} | undefined
        LastUpdatedTimestamp?: {} | undefined
        CreationTimestamp?: {} | undefined
      }
    | undefined
}
type UpdateIndexRequest = {
  Id: {}
  Name?: {} | undefined
  RoleArn?: {} | undefined
  Description?: {} | undefined
  DocumentMetadataConfigurationUpdates?: {} | undefined
  CapacityUnits?: { StorageCapacityUnits: {}; QueryCapacityUnits: {} } | undefined
  UserTokenConfigurations?: {} | undefined
  UserContextPolicy?: {} | undefined
  UserGroupResolutionConfiguration?: { UserGroupResolutionMode: {} } | undefined
}
type UpdateQuerySuggestionsBlockListRequest = {
  IndexId: {}
  Id: {}
  Name?: {} | undefined
  Description?: {} | undefined
  SourceS3Path?: { Bucket: {}; Key: {} } | undefined
  RoleArn?: {} | undefined
}
type UpdateQuerySuggestionsConfigRequest = {
  IndexId: {}
  Mode?: {} | undefined
  QueryLogLookBackWindowInDays?: {} | undefined
  IncludeQueriesWithoutUserInformation?: {} | undefined
  MinimumNumberOfQueryingUsers?: {} | undefined
  MinimumQueryCount?: {} | undefined
}
type UpdateThesaurusRequest = {
  Id: {}
  Name?: {} | undefined
  IndexId: {}
  Description?: {} | undefined
  RoleArn?: {} | undefined
  SourceS3Path?: S3Path | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=AWSKendraFrontendService.AssociateEntitiesToExperience': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.AssociateEntitiesToExperience'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AssociateEntitiesToExperienceRequest }
        output: AssociateEntitiesToExperienceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.AssociatePersonasToEntities': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.AssociatePersonasToEntities'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AssociatePersonasToEntitiesRequest }
        output: AssociatePersonasToEntitiesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.BatchDeleteDocument': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.BatchDeleteDocument'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchDeleteDocumentRequest }
        output: BatchDeleteDocumentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.BatchDeleteFeaturedResultsSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.BatchDeleteFeaturedResultsSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchDeleteFeaturedResultsSetRequest }
        output: BatchDeleteFeaturedResultsSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.BatchGetDocumentStatus': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.BatchGetDocumentStatus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchGetDocumentStatusRequest }
        output: BatchGetDocumentStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.BatchPutDocument': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.BatchPutDocument'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchPutDocumentRequest }
        output: BatchPutDocumentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.ClearQuerySuggestions': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.ClearQuerySuggestions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ClearQuerySuggestionsRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.CreateAccessControlConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.CreateAccessControlConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateAccessControlConfigurationRequest }
        output: CreateAccessControlConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.CreateDataSource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.CreateDataSource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateDataSourceRequest }
        output: CreateDataSourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.CreateExperience': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.CreateExperience'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateExperienceRequest }
        output: CreateExperienceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.CreateFaq': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.CreateFaq'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateFaqRequest }
        output: CreateFaqResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.CreateFeaturedResultsSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.CreateFeaturedResultsSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateFeaturedResultsSetRequest }
        output: CreateFeaturedResultsSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.CreateIndex': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.CreateIndex'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateIndexRequest }
        output: CreateIndexResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.CreateQuerySuggestionsBlockList': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.CreateQuerySuggestionsBlockList'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateQuerySuggestionsBlockListRequest }
        output: CreateQuerySuggestionsBlockListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.CreateThesaurus': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.CreateThesaurus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateThesaurusRequest }
        output: CreateThesaurusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.DeleteAccessControlConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.DeleteAccessControlConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteAccessControlConfigurationRequest }
        output: DeleteAccessControlConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.DeleteDataSource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.DeleteDataSource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteDataSourceRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.DeleteExperience': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.DeleteExperience'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteExperienceRequest }
        output: DeleteExperienceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.DeleteFaq': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.DeleteFaq'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteFaqRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.DeleteIndex': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.DeleteIndex'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteIndexRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.DeletePrincipalMapping': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.DeletePrincipalMapping'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeletePrincipalMappingRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.DeleteQuerySuggestionsBlockList': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.DeleteQuerySuggestionsBlockList'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteQuerySuggestionsBlockListRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.DeleteThesaurus': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.DeleteThesaurus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteThesaurusRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.DescribeAccessControlConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.DescribeAccessControlConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeAccessControlConfigurationRequest }
        output: DescribeAccessControlConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.DescribeDataSource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.DescribeDataSource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeDataSourceRequest }
        output: DescribeDataSourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.DescribeExperience': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.DescribeExperience'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeExperienceRequest }
        output: DescribeExperienceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.DescribeFaq': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.DescribeFaq'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeFaqRequest }
        output: DescribeFaqResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.DescribeFeaturedResultsSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.DescribeFeaturedResultsSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeFeaturedResultsSetRequest }
        output: DescribeFeaturedResultsSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.DescribeIndex': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.DescribeIndex'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeIndexRequest }
        output: DescribeIndexResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.DescribePrincipalMapping': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.DescribePrincipalMapping'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribePrincipalMappingRequest }
        output: DescribePrincipalMappingResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.DescribeQuerySuggestionsBlockList': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.DescribeQuerySuggestionsBlockList'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeQuerySuggestionsBlockListRequest }
        output: DescribeQuerySuggestionsBlockListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.DescribeQuerySuggestionsConfig': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.DescribeQuerySuggestionsConfig'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeQuerySuggestionsConfigRequest }
        output: DescribeQuerySuggestionsConfigResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.DescribeThesaurus': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.DescribeThesaurus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeThesaurusRequest }
        output: DescribeThesaurusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.DisassociateEntitiesFromExperience': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.DisassociateEntitiesFromExperience'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisassociateEntitiesFromExperienceRequest }
        output: DisassociateEntitiesFromExperienceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.DisassociatePersonasFromEntities': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.DisassociatePersonasFromEntities'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisassociatePersonasFromEntitiesRequest }
        output: DisassociatePersonasFromEntitiesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.GetQuerySuggestions': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.GetQuerySuggestions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetQuerySuggestionsRequest }
        output: GetQuerySuggestionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.GetSnapshots': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.GetSnapshots'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetSnapshotsRequest }
        output: GetSnapshotsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.ListAccessControlConfigurations': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.ListAccessControlConfigurations'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListAccessControlConfigurationsRequest }
        output: ListAccessControlConfigurationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.ListDataSourceSyncJobs': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.ListDataSourceSyncJobs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListDataSourceSyncJobsRequest }
        output: ListDataSourceSyncJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.ListDataSources': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.ListDataSources'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListDataSourcesRequest }
        output: ListDataSourcesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.ListEntityPersonas': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.ListEntityPersonas'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListEntityPersonasRequest }
        output: ListEntityPersonasResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.ListExperienceEntities': {
      $post: {
        input: { query: { NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.ListExperienceEntities'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListExperienceEntitiesRequest }
        output: ListExperienceEntitiesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.ListExperiences': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.ListExperiences'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListExperiencesRequest }
        output: ListExperiencesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.ListFaqs': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.ListFaqs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListFaqsRequest }
        output: ListFaqsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.ListFeaturedResultsSets': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.ListFeaturedResultsSets'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListFeaturedResultsSetsRequest }
        output: ListFeaturedResultsSetsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.ListGroupsOlderThanOrderingId': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.ListGroupsOlderThanOrderingId'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListGroupsOlderThanOrderingIdRequest }
        output: ListGroupsOlderThanOrderingIdResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.ListIndices': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.ListIndices'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListIndicesRequest }
        output: ListIndicesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.ListQuerySuggestionsBlockLists': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.ListQuerySuggestionsBlockLists'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListQuerySuggestionsBlockListsRequest }
        output: ListQuerySuggestionsBlockListsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.ListTagsForResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.ListTagsForResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTagsForResourceRequest }
        output: ListTagsForResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.ListThesauri': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.ListThesauri'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListThesauriRequest }
        output: ListThesauriResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.PutPrincipalMapping': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.PutPrincipalMapping'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutPrincipalMappingRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.Query': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.Query'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: QueryRequest }
        output: QueryResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.StartDataSourceSyncJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.StartDataSourceSyncJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartDataSourceSyncJobRequest }
        output: StartDataSourceSyncJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.StopDataSourceSyncJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.StopDataSourceSyncJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopDataSourceSyncJobRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.SubmitFeedback': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.SubmitFeedback'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SubmitFeedbackRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.TagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TagResourceRequest }
        output: TagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.UntagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UntagResourceRequest }
        output: UntagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.UpdateAccessControlConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.UpdateAccessControlConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateAccessControlConfigurationRequest }
        output: UpdateAccessControlConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.UpdateDataSource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.UpdateDataSource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateDataSourceRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.UpdateExperience': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.UpdateExperience'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateExperienceRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.UpdateFeaturedResultsSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.UpdateFeaturedResultsSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateFeaturedResultsSetRequest }
        output: UpdateFeaturedResultsSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.UpdateIndex': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.UpdateIndex'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateIndexRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.UpdateQuerySuggestionsBlockList': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.UpdateQuerySuggestionsBlockList'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateQuerySuggestionsBlockListRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.UpdateQuerySuggestionsConfig': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.UpdateQuerySuggestionsConfig'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateQuerySuggestionsConfigRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSKendraFrontendService.UpdateThesaurus': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSKendraFrontendService.UpdateThesaurus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateThesaurusRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
