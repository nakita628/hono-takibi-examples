type CancelIngestionResponse = {
  Arn?: {} | undefined
  IngestionId?: {} | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type CreateIngestionResponse = {
  Arn?: {} | undefined
  IngestionId?: {} | undefined
  IngestionStatus?: {} | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type RowInfo = {
  RowsIngested?: {} | undefined
  RowsDropped?: {} | undefined
  TotalRowsInDataset?: {} | undefined
}
type QueueInfo = { WaitingOnIngestion: {}; QueuedIngestion: {} }
type DescribeIngestionResponse = {
  Ingestion?:
    | {
        Arn: {}
        IngestionId?: {} | undefined
        IngestionStatus: {}
        ErrorInfo?: { Type?: {} | undefined; Message?: {} | undefined } | undefined
        RowInfo?: RowInfo | undefined
        QueueInfo?: QueueInfo | undefined
        CreatedTime: {}
        IngestionTimeInSeconds?: {} | undefined
        IngestionSizeInBytes?: {} | undefined
        RequestSource?: {} | undefined
        RequestType?: {} | undefined
      }
    | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type Tag = { Key: {}; Value: {} }
type CreateAccountCustomizationResponse = {
  Arn?: {} | undefined
  AwsAccountId?: {} | undefined
  Namespace?: {} | undefined
  AccountCustomization?:
    | { DefaultTheme?: {} | undefined; DefaultEmailCustomizationTemplate?: {} | undefined }
    | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type DeleteAccountCustomizationResponse = { RequestId?: {} | undefined; Status?: {} | undefined }
type DescribeAccountCustomizationResponse = {
  Arn?: {} | undefined
  AwsAccountId?: {} | undefined
  Namespace?: {} | undefined
  AccountCustomization?:
    | { DefaultTheme?: {} | undefined; DefaultEmailCustomizationTemplate?: {} | undefined }
    | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type UpdateAccountCustomizationResponse = {
  Arn?: {} | undefined
  AwsAccountId?: {} | undefined
  Namespace?: {} | undefined
  AccountCustomization?:
    | { DefaultTheme?: {} | undefined; DefaultEmailCustomizationTemplate?: {} | undefined }
    | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type String = string
type CreateAccountSubscriptionResponse = {
  SignupResponse?:
    | {
        IAMUser?: {} | undefined
        userLoginName?: {} | undefined
        accountName?: {} | undefined
        directoryType?: {} | undefined
      }
    | undefined
  Status?: {} | undefined
  RequestId?: {} | undefined
}
type DeleteAccountSubscriptionResponse = { RequestId?: {} | undefined; Status?: {} | undefined }
type DescribeAccountSubscriptionResponse = {
  AccountInfo?:
    | {
        AccountName?: {} | undefined
        Edition?: {} | undefined
        NotificationEmail?: {} | undefined
        AuthenticationType?: {} | undefined
        AccountSubscriptionStatus?: {} | undefined
      }
    | undefined
  Status?: {} | undefined
  RequestId?: {} | undefined
}
type ResourcePermission = { Principal: {}; Actions: {} }
type AnalysisDefaults = {
  DefaultNewSheetConfiguration: {
    InteractiveLayoutConfiguration?:
      | {
          Grid?:
            | {
                CanvasSizeOptions: {
                  ScreenCanvasSizeOptions?:
                    | { ResizeOption: {}; OptimizedViewPortWidth?: {} | undefined }
                    | undefined
                }
              }
            | undefined
          FreeForm?:
            | {
                CanvasSizeOptions: {
                  ScreenCanvasSizeOptions?: { OptimizedViewPortWidth: {} } | undefined
                }
              }
            | undefined
        }
      | undefined
    PaginatedLayoutConfiguration?:
      | {
          SectionBased?:
            | {
                CanvasSizeOptions: {
                  PaperCanvasSizeOptions?:
                    | {
                        PaperSize?: {} | undefined
                        PaperOrientation?: {} | undefined
                        PaperMargin?:
                          | {
                              Top?: {} | undefined
                              Bottom?: {} | undefined
                              Left?: {} | undefined
                              Right?: {} | undefined
                            }
                          | undefined
                      }
                    | undefined
                }
              }
            | undefined
        }
      | undefined
    SheetContentType?: {} | undefined
  }
}
type CreateAnalysisResponse = {
  Arn?: {} | undefined
  AnalysisId?: {} | undefined
  CreationStatus?: {} | undefined
  Status?: {} | undefined
  RequestId?: {} | undefined
}
type DeleteAnalysisResponse = {
  Status?: {} | undefined
  Arn?: {} | undefined
  AnalysisId?: {} | undefined
  DeletionTime?: {} | undefined
  RequestId?: {} | undefined
}
type DescribeAnalysisResponse = {
  Analysis?:
    | {
        AnalysisId?: {} | undefined
        Arn?: {} | undefined
        Name?: {} | undefined
        Status?: {} | undefined
        Errors?: {} | undefined
        DataSetArns?: {} | undefined
        ThemeArn?: {} | undefined
        CreatedTime?: {} | undefined
        LastUpdatedTime?: {} | undefined
        Sheets?: {} | undefined
      }
    | undefined
  Status?: {} | undefined
  RequestId?: {} | undefined
}
type UpdateAnalysisResponse = {
  Arn?: {} | undefined
  AnalysisId?: {} | undefined
  UpdateStatus?: {} | undefined
  Status?: {} | undefined
  RequestId?: {} | undefined
}
type CreateDashboardResponse = {
  Arn?: {} | undefined
  VersionArn?: {} | undefined
  DashboardId?: {} | undefined
  CreationStatus?: {} | undefined
  Status?: {} | undefined
  RequestId?: {} | undefined
}
type DeleteDashboardResponse = {
  Status?: {} | undefined
  Arn?: {} | undefined
  DashboardId?: {} | undefined
  RequestId?: {} | undefined
}
type DescribeDashboardResponse = {
  Dashboard?:
    | {
        DashboardId?: {} | undefined
        Arn?: {} | undefined
        Name?: {} | undefined
        Version?:
          | {
              CreatedTime?: {} | undefined
              Errors?: {} | undefined
              VersionNumber?: {} | undefined
              Status?: {} | undefined
              Arn?: {} | undefined
              SourceEntityArn?: {} | undefined
              DataSetArns?: {} | undefined
              Description?: {} | undefined
              ThemeArn?: {} | undefined
              Sheets?: {} | undefined
            }
          | undefined
        CreatedTime?: {} | undefined
        LastPublishedTime?: {} | undefined
        LastUpdatedTime?: {} | undefined
      }
    | undefined
  Status?: {} | undefined
  RequestId?: {} | undefined
}
type UpdateDashboardResponse = {
  Arn?: {} | undefined
  VersionArn?: {} | undefined
  DashboardId?: {} | undefined
  CreationStatus?: {} | undefined
  Status?: {} | undefined
  RequestId?: {} | undefined
}
type PhysicalTable = {
  RelationalTable?:
    | {
        DataSourceArn: {}
        Catalog?: {} | undefined
        Schema?: {} | undefined
        Name: {}
        InputColumns: {}
      }
    | undefined
  CustomSql?: { DataSourceArn: {}; Name: {}; SqlQuery: {}; Columns?: {} | undefined } | undefined
  S3Source?:
    | {
        DataSourceArn: {}
        UploadSettings?:
          | {
              Format?: {} | undefined
              StartFromRow?: {} | undefined
              ContainsHeader?: {} | undefined
              TextQualifier?: {} | undefined
              Delimiter?: {} | undefined
            }
          | undefined
        InputColumns: {}
      }
    | undefined
}
type LogicalTable = {
  Alias: {}
  DataTransforms?: {} | undefined
  Source: {
    JoinInstruction?:
      | {
          LeftOperand: {}
          RightOperand: {}
          LeftJoinKeyProperties?: { UniqueKey?: {} | undefined } | undefined
          RightJoinKeyProperties?: { UniqueKey?: {} | undefined } | undefined
          Type: {}
          OnClause: {}
        }
      | undefined
    PhysicalTableId?: {} | undefined
    DataSetArn?: {} | undefined
  }
}
type ColumnGroup = {
  GeoSpatialColumnGroup?: { Name: {}; CountryCode?: {} | undefined; Columns: {} } | undefined
}
type FieldFolder = { description?: {} | undefined; columns?: {} | undefined }
type ColumnLevelPermissionRule = { Principals?: {} | undefined; ColumnNames?: {} | undefined }
type CreateDataSetResponse = {
  Arn?: {} | undefined
  DataSetId?: {} | undefined
  IngestionArn?: {} | undefined
  IngestionId?: {} | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type ListDataSetsResponse = {
  DataSetSummaries?: {} | undefined
  NextToken?: {} | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type CreateDataSourceResponse = {
  Arn?: {} | undefined
  DataSourceId?: {} | undefined
  CreationStatus?: {} | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type ListDataSourcesResponse = {
  DataSources?: {} | undefined
  NextToken?: {} | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type CreateFolderResponse = {
  Status?: {} | undefined
  Arn?: {} | undefined
  FolderId?: {} | undefined
  RequestId?: {} | undefined
}
type DeleteFolderResponse = {
  Status?: {} | undefined
  Arn?: {} | undefined
  FolderId?: {} | undefined
  RequestId?: {} | undefined
}
type DescribeFolderResponse = {
  Status?: {} | undefined
  Folder?:
    | {
        FolderId?: {} | undefined
        Arn?: {} | undefined
        Name?: {} | undefined
        FolderType?: {} | undefined
        FolderPath?: {} | undefined
        CreatedTime?: {} | undefined
        LastUpdatedTime?: {} | undefined
      }
    | undefined
  RequestId?: {} | undefined
}
type UpdateFolderResponse = {
  Status?: {} | undefined
  Arn?: {} | undefined
  FolderId?: {} | undefined
  RequestId?: {} | undefined
}
type CreateFolderMembershipResponse = {
  Status?: {} | undefined
  FolderMember?: { MemberId?: {} | undefined; MemberType?: {} | undefined } | undefined
  RequestId?: {} | undefined
}
type DeleteFolderMembershipResponse = { Status?: {} | undefined; RequestId?: {} | undefined }
type CreateGroupResponse = {
  Group?:
    | {
        Arn?: {} | undefined
        GroupName?: {} | undefined
        Description?: {} | undefined
        PrincipalId?: {} | undefined
      }
    | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type ListGroupsResponse = {
  GroupList?: {} | undefined
  NextToken?: {} | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type CreateGroupMembershipResponse = {
  GroupMember?: { Arn?: {} | undefined; MemberName?: {} | undefined } | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type DeleteGroupMembershipResponse = { RequestId?: {} | undefined; Status?: {} | undefined }
type GroupMember = { Arn?: {} | undefined; MemberName?: {} | undefined }
type DescribeGroupMembershipResponse = {
  GroupMember?: GroupMember | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type IdentityName = string
type IdentityNameList = IdentityName[]
type CreateIAMPolicyAssignmentResponse = {
  AssignmentName?: {} | undefined
  AssignmentId?: {} | undefined
  AssignmentStatus?: {} | undefined
  PolicyArn?: {} | undefined
  Identities?: {} | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type CreateNamespaceResponse = {
  Arn?: {} | undefined
  Name?: {} | undefined
  CapacityRegion?: {} | undefined
  CreationStatus?: {} | undefined
  IdentityStore?: {} | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type CreateRefreshScheduleResponse = {
  Status?: {} | undefined
  RequestId?: {} | undefined
  ScheduleId?: {} | undefined
  Arn?: {} | undefined
}
type ListRefreshSchedulesResponse = {
  RefreshSchedules?: {} | undefined
  Status?: {} | undefined
  RequestId?: {} | undefined
}
type UpdateRefreshScheduleResponse = {
  Status?: {} | undefined
  RequestId?: {} | undefined
  ScheduleId?: {} | undefined
  Arn?: {} | undefined
}
type CreateTemplateResponse = {
  Arn?: {} | undefined
  VersionArn?: {} | undefined
  TemplateId?: {} | undefined
  CreationStatus?: {} | undefined
  Status?: {} | undefined
  RequestId?: {} | undefined
}
type DeleteTemplateResponse = {
  RequestId?: {} | undefined
  Arn?: {} | undefined
  TemplateId?: {} | undefined
  Status?: {} | undefined
}
type DescribeTemplateResponse = {
  Template?:
    | {
        Arn?: {} | undefined
        Name?: {} | undefined
        Version?:
          | {
              CreatedTime?: {} | undefined
              Errors?: {} | undefined
              VersionNumber?: {} | undefined
              Status?: {} | undefined
              DataSetConfigurations?: {} | undefined
              Description?: {} | undefined
              SourceEntityArn?: {} | undefined
              ThemeArn?: {} | undefined
              Sheets?: {} | undefined
            }
          | undefined
        TemplateId?: {} | undefined
        LastUpdatedTime?: {} | undefined
        CreatedTime?: {} | undefined
      }
    | undefined
  Status?: {} | undefined
  RequestId?: {} | undefined
}
type UpdateTemplateResponse = {
  TemplateId?: {} | undefined
  Arn?: {} | undefined
  VersionArn?: {} | undefined
  CreationStatus?: {} | undefined
  Status?: {} | undefined
  RequestId?: {} | undefined
}
type CreateTemplateAliasResponse = {
  TemplateAlias?:
    | { AliasName?: {} | undefined; Arn?: {} | undefined; TemplateVersionNumber?: {} | undefined }
    | undefined
  Status?: {} | undefined
  RequestId?: {} | undefined
}
type DeleteTemplateAliasResponse = {
  Status?: {} | undefined
  TemplateId?: {} | undefined
  AliasName?: {} | undefined
  Arn?: {} | undefined
  RequestId?: {} | undefined
}
type DescribeTemplateAliasResponse = {
  TemplateAlias?:
    | { AliasName?: {} | undefined; Arn?: {} | undefined; TemplateVersionNumber?: {} | undefined }
    | undefined
  Status?: {} | undefined
  RequestId?: {} | undefined
}
type UpdateTemplateAliasResponse = {
  TemplateAlias?:
    | { AliasName?: {} | undefined; Arn?: {} | undefined; TemplateVersionNumber?: {} | undefined }
    | undefined
  Status?: {} | undefined
  RequestId?: {} | undefined
}
type Typography = { FontFamilies?: {} | undefined }
type CreateThemeResponse = {
  Arn?: {} | undefined
  VersionArn?: {} | undefined
  ThemeId?: {} | undefined
  CreationStatus?: {} | undefined
  Status?: {} | undefined
  RequestId?: {} | undefined
}
type DeleteThemeResponse = {
  Arn?: {} | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
  ThemeId?: {} | undefined
}
type ThemeVersion = {
  VersionNumber?: {} | undefined
  Arn?: {} | undefined
  Description?: {} | undefined
  BaseThemeId?: {} | undefined
  CreatedTime?: {} | undefined
  Configuration?:
    | {
        DataColorPalette?:
          | {
              Colors?: {} | undefined
              MinMaxGradient?: {} | undefined
              EmptyFillColor?: {} | undefined
            }
          | undefined
        UIColorPalette?:
          | {
              PrimaryForeground?: {} | undefined
              PrimaryBackground?: {} | undefined
              SecondaryForeground?: {} | undefined
              SecondaryBackground?: {} | undefined
              Accent?: {} | undefined
              AccentForeground?: {} | undefined
              Danger?: {} | undefined
              DangerForeground?: {} | undefined
              Warning?: {} | undefined
              WarningForeground?: {} | undefined
              Success?: {} | undefined
              SuccessForeground?: {} | undefined
              Dimension?: {} | undefined
              DimensionForeground?: {} | undefined
              Measure?: {} | undefined
              MeasureForeground?: {} | undefined
            }
          | undefined
        Sheet?:
          | {
              Tile?: { Border?: { Show?: {} | undefined } | undefined } | undefined
              TileLayout?:
                | {
                    Gutter?: { Show?: {} | undefined } | undefined
                    Margin?: { Show?: {} | undefined } | undefined
                  }
                | undefined
            }
          | undefined
        Typography?: Typography | undefined
      }
    | undefined
  Errors?: {} | undefined
  Status?: {} | undefined
}
type DescribeThemeResponse = {
  Theme?:
    | {
        Arn?: {} | undefined
        Name?: {} | undefined
        ThemeId?: {} | undefined
        Version?: ThemeVersion | undefined
        CreatedTime?: {} | undefined
        LastUpdatedTime?: {} | undefined
        Type?: {} | undefined
      }
    | undefined
  Status?: {} | undefined
  RequestId?: {} | undefined
}
type UpdateThemeResponse = {
  ThemeId?: {} | undefined
  Arn?: {} | undefined
  VersionArn?: {} | undefined
  CreationStatus?: {} | undefined
  Status?: {} | undefined
  RequestId?: {} | undefined
}
type CreateThemeAliasResponse = {
  ThemeAlias?:
    | { Arn?: {} | undefined; AliasName?: {} | undefined; ThemeVersionNumber?: {} | undefined }
    | undefined
  Status?: {} | undefined
  RequestId?: {} | undefined
}
type DeleteThemeAliasResponse = {
  AliasName?: {} | undefined
  Arn?: {} | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
  ThemeId?: {} | undefined
}
type DescribeThemeAliasResponse = {
  ThemeAlias?:
    | { Arn?: {} | undefined; AliasName?: {} | undefined; ThemeVersionNumber?: {} | undefined }
    | undefined
  Status?: {} | undefined
  RequestId?: {} | undefined
}
type UpdateThemeAliasResponse = {
  ThemeAlias?:
    | { Arn?: {} | undefined; AliasName?: {} | undefined; ThemeVersionNumber?: {} | undefined }
    | undefined
  Status?: {} | undefined
  RequestId?: {} | undefined
}
type DeleteDataSetResponse = {
  Arn?: {} | undefined
  DataSetId?: {} | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type DescribeDataSetResponse = {
  DataSet?:
    | {
        Arn?: {} | undefined
        DataSetId?: {} | undefined
        Name?: {} | undefined
        CreatedTime?: {} | undefined
        LastUpdatedTime?: {} | undefined
        PhysicalTableMap?: {} | undefined
        LogicalTableMap?: {} | undefined
        OutputColumns?: {} | undefined
        ImportMode?: {} | undefined
        ConsumedSpiceCapacityInBytes?: {} | undefined
        ColumnGroups?: {} | undefined
        FieldFolders?: {} | undefined
        RowLevelPermissionDataSet?:
          | {
              Namespace?: {} | undefined
              Arn: {}
              PermissionPolicy: {}
              FormatVersion?: {} | undefined
              Status?: {} | undefined
            }
          | undefined
        RowLevelPermissionTagConfiguration?:
          | { Status?: {} | undefined; TagRules: {}; TagRuleConfigurations?: {} | undefined }
          | undefined
        ColumnLevelPermissionRules?: {} | undefined
        DataSetUsageConfiguration?:
          | {
              DisableUseAsDirectQuerySource?: {} | undefined
              DisableUseAsImportedSource?: {} | undefined
            }
          | undefined
      }
    | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type UpdateDataSetResponse = {
  Arn?: {} | undefined
  DataSetId?: {} | undefined
  IngestionArn?: {} | undefined
  IngestionId?: {} | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type DeleteDataSetRefreshPropertiesResponse = {
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type DescribeDataSetRefreshPropertiesResponse = {
  RequestId?: {} | undefined
  Status?: {} | undefined
  DataSetRefreshProperties?:
    | {
        RefreshConfiguration: {
          IncrementalRefresh: { LookbackWindow: { ColumnName: {}; Size: {}; SizeUnit: {} } }
        }
      }
    | undefined
}
type PutDataSetRefreshPropertiesResponse = { RequestId?: {} | undefined; Status?: {} | undefined }
type DeleteDataSourceResponse = {
  Arn?: {} | undefined
  DataSourceId?: {} | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type DescribeDataSourceResponse = {
  DataSource?:
    | {
        Arn?: {} | undefined
        DataSourceId?: {} | undefined
        Name?: {} | undefined
        Type?: {} | undefined
        Status?: {} | undefined
        CreatedTime?: {} | undefined
        LastUpdatedTime?: {} | undefined
        DataSourceParameters?:
          | {
              AmazonElasticsearchParameters?: { Domain: {} } | undefined
              AthenaParameters?:
                | { WorkGroup?: {} | undefined; RoleArn?: {} | undefined }
                | undefined
              AuroraParameters?: { Host: {}; Port: {}; Database: {} } | undefined
              AuroraPostgreSqlParameters?: { Host: {}; Port: {}; Database: {} } | undefined
              AwsIotAnalyticsParameters?: { DataSetName: {} } | undefined
              JiraParameters?: { SiteBaseUrl: {} } | undefined
              MariaDbParameters?: { Host: {}; Port: {}; Database: {} } | undefined
              MySqlParameters?: { Host: {}; Port: {}; Database: {} } | undefined
              OracleParameters?: { Host: {}; Port: {}; Database: {} } | undefined
              PostgreSqlParameters?: { Host: {}; Port: {}; Database: {} } | undefined
              PrestoParameters?: { Host: {}; Port: {}; Catalog: {} } | undefined
              RdsParameters?: { InstanceId: {}; Database: {} } | undefined
              RedshiftParameters?:
                | {
                    Host?: {} | undefined
                    Port?: {} | undefined
                    Database: {}
                    ClusterId?: {} | undefined
                  }
                | undefined
              S3Parameters?:
                | { ManifestFileLocation: { Bucket: {}; Key: {} }; RoleArn?: {} | undefined }
                | undefined
              ServiceNowParameters?: { SiteBaseUrl: {} } | undefined
              SnowflakeParameters?: { Host: {}; Database: {}; Warehouse: {} } | undefined
              SparkParameters?: { Host: {}; Port: {} } | undefined
              SqlServerParameters?: { Host: {}; Port: {}; Database: {} } | undefined
              TeradataParameters?: { Host: {}; Port: {}; Database: {} } | undefined
              TwitterParameters?: { Query: {}; MaxRows: {} } | undefined
              AmazonOpenSearchParameters?: { Domain: {} } | undefined
              ExasolParameters?: { Host: {}; Port: {} } | undefined
              DatabricksParameters?: { Host: {}; Port: {}; SqlEndpointPath: {} } | undefined
            }
          | undefined
        AlternateDataSourceParameters?: {} | undefined
        VpcConnectionProperties?: { VpcConnectionArn: {} } | undefined
        SslProperties?: { DisableSsl?: {} | undefined } | undefined
        ErrorInfo?: { Type?: {} | undefined; Message?: {} | undefined } | undefined
        SecretArn?: {} | undefined
      }
    | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type UpdateDataSourceResponse = {
  Arn?: {} | undefined
  DataSourceId?: {} | undefined
  UpdateStatus?: {} | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type DeleteGroupResponse = { RequestId?: {} | undefined; Status?: {} | undefined }
type DescribeGroupResponse = {
  Group?:
    | {
        Arn?: {} | undefined
        GroupName?: {} | undefined
        Description?: {} | undefined
        PrincipalId?: {} | undefined
      }
    | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type UpdateGroupResponse = {
  Group?:
    | {
        Arn?: {} | undefined
        GroupName?: {} | undefined
        Description?: {} | undefined
        PrincipalId?: {} | undefined
      }
    | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type DeleteIAMPolicyAssignmentResponse = {
  AssignmentName?: {} | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type DeleteNamespaceResponse = { RequestId?: {} | undefined; Status?: {} | undefined }
type DescribeNamespaceResponse = {
  Namespace?:
    | {
        Name?: {} | undefined
        Arn?: {} | undefined
        CapacityRegion?: {} | undefined
        CreationStatus?: {} | undefined
        IdentityStore?: {} | undefined
        NamespaceError?: { Type?: {} | undefined; Message?: {} | undefined } | undefined
      }
    | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type DeleteRefreshScheduleResponse = {
  Status?: {} | undefined
  RequestId?: {} | undefined
  ScheduleId?: {} | undefined
  Arn?: {} | undefined
}
type DescribeRefreshScheduleResponse = {
  RefreshSchedule?:
    | {
        ScheduleId: {}
        ScheduleFrequency: {
          Interval: {}
          RefreshOnDay?: { DayOfWeek?: {} | undefined; DayOfMonth?: {} | undefined } | undefined
          Timezone?: {} | undefined
          TimeOfTheDay?: {} | undefined
        }
        StartAfterDateTime?: {} | undefined
        RefreshType: {}
        Arn?: {} | undefined
      }
    | undefined
  Status?: {} | undefined
  RequestId?: {} | undefined
  Arn?: {} | undefined
}
type DeleteUserResponse = { RequestId?: {} | undefined; Status?: {} | undefined }
type DescribeUserResponse = {
  User?:
    | {
        Arn?: {} | undefined
        UserName?: {} | undefined
        Email?: {} | undefined
        Role?: {} | undefined
        IdentityType?: {} | undefined
        Active?: {} | undefined
        PrincipalId?: {} | undefined
        CustomPermissionsName?: {} | undefined
        ExternalLoginFederationProviderType?: {} | undefined
        ExternalLoginFederationProviderUrl?: {} | undefined
        ExternalLoginId?: {} | undefined
      }
    | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type UpdateUserResponse = {
  User?:
    | {
        Arn?: {} | undefined
        UserName?: {} | undefined
        Email?: {} | undefined
        Role?: {} | undefined
        IdentityType?: {} | undefined
        Active?: {} | undefined
        PrincipalId?: {} | undefined
        CustomPermissionsName?: {} | undefined
        ExternalLoginFederationProviderType?: {} | undefined
        ExternalLoginFederationProviderUrl?: {} | undefined
        ExternalLoginId?: {} | undefined
      }
    | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type DeleteUserByPrincipalIdResponse = { RequestId?: {} | undefined; Status?: {} | undefined }
type DescribeAccountSettingsResponse = {
  AccountSettings?:
    | {
        AccountName?: {} | undefined
        Edition?: {} | undefined
        DefaultNamespace?: {} | undefined
        NotificationEmail?: {} | undefined
        PublicSharingEnabled?: {} | undefined
        TerminationProtectionEnabled?: {} | undefined
      }
    | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type UpdateAccountSettingsResponse = { RequestId?: {} | undefined; Status?: {} | undefined }
type DescribeAnalysisDefinitionResponse = {
  AnalysisId?: {} | undefined
  Name?: {} | undefined
  Errors?: {} | undefined
  ResourceStatus?: {} | undefined
  ThemeArn?: {} | undefined
  Definition?:
    | {
        DataSetIdentifierDeclarations: {}
        Sheets?: {} | undefined
        CalculatedFields?: {} | undefined
        ParameterDeclarations?: {} | undefined
        FilterGroups?: {} | undefined
        ColumnConfigurations?: {} | undefined
        AnalysisDefaults?: AnalysisDefaults | undefined
      }
    | undefined
  Status?: {} | undefined
  RequestId?: {} | undefined
}
type DescribeAnalysisPermissionsResponse = {
  AnalysisId?: {} | undefined
  AnalysisArn?: {} | undefined
  Permissions?: {} | undefined
  Status?: {} | undefined
  RequestId?: {} | undefined
}
type UpdateAnalysisPermissionsResponse = {
  AnalysisArn?: {} | undefined
  AnalysisId?: {} | undefined
  Permissions?: {} | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type DescribeDashboardDefinitionResponse = {
  DashboardId?: {} | undefined
  Errors?: {} | undefined
  Name?: {} | undefined
  ResourceStatus?: {} | undefined
  ThemeArn?: {} | undefined
  Definition?:
    | {
        DataSetIdentifierDeclarations: {}
        Sheets?: {} | undefined
        CalculatedFields?: {} | undefined
        ParameterDeclarations?: {} | undefined
        FilterGroups?: {} | undefined
        ColumnConfigurations?: {} | undefined
        AnalysisDefaults?: AnalysisDefaults | undefined
      }
    | undefined
  Status?: {} | undefined
  RequestId?: {} | undefined
  DashboardPublishOptions?:
    | {
        AdHocFilteringOption?: { AvailabilityStatus?: {} | undefined } | undefined
        ExportToCSVOption?: { AvailabilityStatus?: {} | undefined } | undefined
        SheetControlsOption?: { VisibilityState?: {} | undefined } | undefined
        VisualPublishOptions?:
          | { ExportHiddenFieldsOption?: { AvailabilityStatus?: {} | undefined } | undefined }
          | undefined
        SheetLayoutElementMaximizationOption?: { AvailabilityStatus?: {} | undefined } | undefined
        VisualMenuOption?: { AvailabilityStatus?: {} | undefined } | undefined
        VisualAxisSortOption?: { AvailabilityStatus?: {} | undefined } | undefined
        ExportWithHiddenFieldsOption?: { AvailabilityStatus?: {} | undefined } | undefined
        DataPointDrillUpDownOption?: { AvailabilityStatus?: {} | undefined } | undefined
        DataPointMenuLabelOption?: { AvailabilityStatus?: {} | undefined } | undefined
        DataPointTooltipOption?: { AvailabilityStatus?: {} | undefined } | undefined
      }
    | undefined
}
type DescribeDashboardPermissionsResponse = {
  DashboardId?: {} | undefined
  DashboardArn?: {} | undefined
  Permissions?: {} | undefined
  Status?: {} | undefined
  RequestId?: {} | undefined
  LinkSharingConfiguration?: { Permissions?: {} | undefined } | undefined
}
type UpdateDashboardPermissionsResponse = {
  DashboardArn?: {} | undefined
  DashboardId?: {} | undefined
  Permissions?: {} | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
  LinkSharingConfiguration?: { Permissions?: {} | undefined } | undefined
}
type DescribeDataSetPermissionsResponse = {
  DataSetArn?: {} | undefined
  DataSetId?: {} | undefined
  Permissions?: {} | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type UpdateDataSetPermissionsResponse = {
  DataSetArn?: {} | undefined
  DataSetId?: {} | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type DescribeDataSourcePermissionsResponse = {
  DataSourceArn?: {} | undefined
  DataSourceId?: {} | undefined
  Permissions?: {} | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type UpdateDataSourcePermissionsResponse = {
  DataSourceArn?: {} | undefined
  DataSourceId?: {} | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type DescribeFolderPermissionsResponse = {
  Status?: {} | undefined
  FolderId?: {} | undefined
  Arn?: {} | undefined
  Permissions?: {} | undefined
  RequestId?: {} | undefined
}
type UpdateFolderPermissionsResponse = {
  Status?: {} | undefined
  Arn?: {} | undefined
  FolderId?: {} | undefined
  Permissions?: {} | undefined
  RequestId?: {} | undefined
}
type DescribeFolderResolvedPermissionsResponse = {
  Status?: {} | undefined
  FolderId?: {} | undefined
  Arn?: {} | undefined
  Permissions?: {} | undefined
  RequestId?: {} | undefined
}
type DescribeIAMPolicyAssignmentResponse = {
  IAMPolicyAssignment?:
    | {
        AwsAccountId?: {} | undefined
        AssignmentId?: {} | undefined
        AssignmentName?: {} | undefined
        PolicyArn?: {} | undefined
        Identities?: {} | undefined
        AssignmentStatus?: {} | undefined
      }
    | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type UpdateIAMPolicyAssignmentResponse = {
  AssignmentName?: {} | undefined
  AssignmentId?: {} | undefined
  PolicyArn?: {} | undefined
  Identities?: {} | undefined
  AssignmentStatus?: {} | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type DescribeIpRestrictionResponse = {
  AwsAccountId?: {} | undefined
  IpRestrictionRuleMap?: {} | undefined
  Enabled?: {} | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type IpRestrictionRuleDescription = string
type UpdateIpRestrictionResponse = {
  AwsAccountId?: {} | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type DescribeTemplateDefinitionResponse = {
  Name?: {} | undefined
  TemplateId?: {} | undefined
  Errors?: {} | undefined
  ResourceStatus?: {} | undefined
  ThemeArn?: {} | undefined
  Definition?:
    | {
        DataSetConfigurations: {}
        Sheets?: {} | undefined
        CalculatedFields?: {} | undefined
        ParameterDeclarations?: {} | undefined
        FilterGroups?: {} | undefined
        ColumnConfigurations?: {} | undefined
        AnalysisDefaults?: AnalysisDefaults | undefined
      }
    | undefined
  Status?: {} | undefined
  RequestId?: {} | undefined
}
type DescribeTemplatePermissionsResponse = {
  TemplateId?: {} | undefined
  TemplateArn?: {} | undefined
  Permissions?: {} | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type UpdateTemplatePermissionsResponse = {
  TemplateId?: {} | undefined
  TemplateArn?: {} | undefined
  Permissions?: {} | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type DescribeThemePermissionsResponse = {
  ThemeId?: {} | undefined
  ThemeArn?: {} | undefined
  Permissions?: {} | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type UpdateThemePermissionsResponse = {
  ThemeId?: {} | undefined
  ThemeArn?: {} | undefined
  Permissions?: {} | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type SessionTag = { Key: {}; Value: {} }
type Arn = string
type GenerateEmbedUrlForAnonymousUserResponse = {
  EmbedUrl: {}
  Status: {}
  RequestId: {}
  AnonymousUserArn: {}
}
type GenerateEmbedUrlForRegisteredUserResponse = { EmbedUrl: {}; Status: {}; RequestId: {} }
type ShortRestrictiveResourceId = string
type GetDashboardEmbedUrlResponse = {
  EmbedUrl?: {} | undefined
  Status?: {} | undefined
  RequestId?: {} | undefined
}
type GetSessionEmbedUrlResponse = {
  EmbedUrl?: {} | undefined
  Status?: {} | undefined
  RequestId?: {} | undefined
}
type ListAnalysesResponse = {
  AnalysisSummaryList?: {} | undefined
  NextToken?: {} | undefined
  Status?: {} | undefined
  RequestId?: {} | undefined
}
type ListDashboardVersionsResponse = {
  DashboardVersionSummaryList?: {} | undefined
  NextToken?: {} | undefined
  Status?: {} | undefined
  RequestId?: {} | undefined
}
type ListDashboardsResponse = {
  DashboardSummaryList?: {} | undefined
  NextToken?: {} | undefined
  Status?: {} | undefined
  RequestId?: {} | undefined
}
type ListFolderMembersResponse = {
  Status?: {} | undefined
  FolderMemberList?: {} | undefined
  NextToken?: {} | undefined
  RequestId?: {} | undefined
}
type ListFoldersResponse = {
  Status?: {} | undefined
  FolderSummaryList?: {} | undefined
  NextToken?: {} | undefined
  RequestId?: {} | undefined
}
type ListGroupMembershipsResponse = {
  GroupMemberList?: {} | undefined
  NextToken?: {} | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type ListIAMPolicyAssignmentsResponse = {
  IAMPolicyAssignments?: {} | undefined
  NextToken?: {} | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type ListIAMPolicyAssignmentsForUserResponse = {
  ActiveAssignments?: {} | undefined
  RequestId?: {} | undefined
  NextToken?: {} | undefined
  Status?: {} | undefined
}
type ListIngestionsResponse = {
  Ingestions?: {} | undefined
  NextToken?: {} | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type ListNamespacesResponse = {
  Namespaces?: {} | undefined
  NextToken?: {} | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type ListTagsForResourceResponse = {
  Tags?: {} | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type TagResourceResponse = { RequestId?: {} | undefined; Status?: {} | undefined }
type ListTemplateAliasesResponse = {
  TemplateAliasList?: {} | undefined
  Status?: {} | undefined
  RequestId?: {} | undefined
  NextToken?: {} | undefined
}
type ListTemplateVersionsResponse = {
  TemplateVersionSummaryList?: {} | undefined
  NextToken?: {} | undefined
  Status?: {} | undefined
  RequestId?: {} | undefined
}
type ListTemplatesResponse = {
  TemplateSummaryList?: {} | undefined
  NextToken?: {} | undefined
  Status?: {} | undefined
  RequestId?: {} | undefined
}
type ListThemeAliasesResponse = {
  ThemeAliasList?: {} | undefined
  Status?: {} | undefined
  RequestId?: {} | undefined
  NextToken?: {} | undefined
}
type ListThemeVersionsResponse = {
  ThemeVersionSummaryList?: {} | undefined
  NextToken?: {} | undefined
  Status?: {} | undefined
  RequestId?: {} | undefined
}
type ListThemesResponse = {
  ThemeSummaryList?: {} | undefined
  NextToken?: {} | undefined
  Status?: {} | undefined
  RequestId?: {} | undefined
}
type ListUserGroupsResponse = {
  GroupList?: {} | undefined
  NextToken?: {} | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type ListUsersResponse = {
  UserList?: {} | undefined
  NextToken?: {} | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type RegisterUserResponse = {
  User?:
    | {
        Arn?: {} | undefined
        UserName?: {} | undefined
        Email?: {} | undefined
        Role?: {} | undefined
        IdentityType?: {} | undefined
        Active?: {} | undefined
        PrincipalId?: {} | undefined
        CustomPermissionsName?: {} | undefined
        ExternalLoginFederationProviderType?: {} | undefined
        ExternalLoginFederationProviderUrl?: {} | undefined
        ExternalLoginId?: {} | undefined
      }
    | undefined
  UserInvitationUrl?: {} | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type RestoreAnalysisResponse = {
  Status?: {} | undefined
  Arn?: {} | undefined
  AnalysisId?: {} | undefined
  RequestId?: {} | undefined
}
type AnalysisSearchFilter = {
  Operator?: {} | undefined
  Name?: {} | undefined
  Value?: {} | undefined
}
type SearchAnalysesResponse = {
  AnalysisSummaryList?: {} | undefined
  NextToken?: {} | undefined
  Status?: {} | undefined
  RequestId?: {} | undefined
}
type DashboardSearchFilter = { Operator: {}; Name?: {} | undefined; Value?: {} | undefined }
type SearchDashboardsResponse = {
  DashboardSummaryList?: {} | undefined
  NextToken?: {} | undefined
  Status?: {} | undefined
  RequestId?: {} | undefined
}
type DataSetSearchFilter = { Operator: {}; Name: {}; Value: {} }
type SearchDataSetsResponse = {
  DataSetSummaries?: {} | undefined
  NextToken?: {} | undefined
  Status?: {} | undefined
  RequestId?: {} | undefined
}
type DataSourceSearchFilter = { Operator: {}; Name: {}; Value: {} }
type SearchDataSourcesResponse = {
  DataSourceSummaries?: {} | undefined
  NextToken?: {} | undefined
  Status?: {} | undefined
  RequestId?: {} | undefined
}
type FolderSearchFilter = {
  Operator?: {} | undefined
  Name?: {} | undefined
  Value?: {} | undefined
}
type SearchFoldersResponse = {
  Status?: {} | undefined
  FolderSummaryList?: {} | undefined
  NextToken?: {} | undefined
  RequestId?: {} | undefined
}
type GroupSearchFilter = { Operator: {}; Name: {}; Value: {} }
type SearchGroupsResponse = {
  GroupList?: {} | undefined
  NextToken?: {} | undefined
  RequestId?: {} | undefined
  Status?: {} | undefined
}
type TagKey = string
type UntagResourceResponse = { RequestId?: {} | undefined; Status?: {} | undefined }
type UpdateDashboardPublishedVersionResponse = {
  DashboardId?: {} | undefined
  DashboardArn?: {} | undefined
  Status?: {} | undefined
  RequestId?: {} | undefined
}
type UpdatePublicSharingSettingsResponse = { RequestId?: {} | undefined; Status?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/accounts/:AwsAccountId/data-sets/:DataSetId/ingestions/:IngestionId': {
      $delete: {
        input: { param: { AwsAccountId: string; DataSetId: string; IngestionId: string } } & {
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
        output: CancelIngestionResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { DataSetId: string; IngestionId: string; AwsAccountId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { IngestionType?: 'INCREMENTAL_REFRESH' | 'FULL_REFRESH' | undefined } }
        output: CreateIngestionResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { AwsAccountId: string; DataSetId: string; IngestionId: string } } & {
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
        output: DescribeIngestionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/customizations': {
      $post: {
        input: { param: { AwsAccountId: string } } & {
          query: { namespace?: string | undefined }
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
        } & {
          json: {
            AccountCustomization: {
              DefaultTheme?: {} | undefined
              DefaultEmailCustomizationTemplate?: {} | undefined
            }
            Tags?: Tag[] | undefined
          }
        }
        output: CreateAccountCustomizationResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { AwsAccountId: string } } & {
          query: { namespace?: string | undefined }
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
        output: DeleteAccountCustomizationResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { AwsAccountId: string } } & {
          query: { namespace?: string | undefined; resolved?: boolean | undefined }
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
        output: DescribeAccountCustomizationResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { AwsAccountId: string } } & {
          query: { namespace?: string | undefined }
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
        } & {
          json: {
            AccountCustomization: {
              DefaultTheme?: {} | undefined
              DefaultEmailCustomizationTemplate?: {} | undefined
            }
          }
        }
        output: UpdateAccountCustomizationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/account/:AwsAccountId': {
      $post: {
        input: { param: { AwsAccountId: string } } & {
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
            Edition: 'STANDARD' | 'ENTERPRISE' | 'ENTERPRISE_AND_Q'
            AuthenticationMethod: 'IAM_AND_QUICKSIGHT' | 'IAM_ONLY' | 'ACTIVE_DIRECTORY'
            AccountName: string
            NotificationEmail: string
            ActiveDirectoryName?: string | undefined
            Realm?: string | undefined
            DirectoryId?: string | undefined
            AdminGroup?: String[] | undefined
            AuthorGroup?: String[] | undefined
            ReaderGroup?: String[] | undefined
            FirstName?: string | undefined
            LastName?: string | undefined
            EmailAddress?: string | undefined
            ContactNumber?: string | undefined
          }
        }
        output: CreateAccountSubscriptionResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { AwsAccountId: string } } & {
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
        output: DeleteAccountSubscriptionResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { AwsAccountId: string } } & {
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
        output: DescribeAccountSubscriptionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/analyses/:AnalysisId': {
      $post: {
        input: { param: { AwsAccountId: string; AnalysisId: string } } & {
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
            Name: string
            Parameters?:
              | {
                  StringParameters?: {} | undefined
                  IntegerParameters?: {} | undefined
                  DecimalParameters?: {} | undefined
                  DateTimeParameters?: {} | undefined
                }
              | undefined
            Permissions?: ResourcePermission[] | undefined
            SourceEntity?:
              | { SourceTemplate?: { DataSetReferences: {}; Arn: {} } | undefined }
              | undefined
            ThemeArn?: string | undefined
            Tags?: Tag[] | undefined
            Definition?:
              | {
                  DataSetIdentifierDeclarations?: {} | undefined
                  Sheets?: {} | undefined
                  CalculatedFields?: {} | undefined
                  ParameterDeclarations?: {} | undefined
                  FilterGroups?: {} | undefined
                  ColumnConfigurations?: {} | undefined
                  AnalysisDefaults?: AnalysisDefaults | undefined
                }
              | undefined
          }
        }
        output: CreateAnalysisResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { AwsAccountId: string; AnalysisId: string } } & {
          query: {
            'recovery-window-in-days'?: number | undefined
            'force-delete-without-recovery'?: boolean | undefined
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
        output: DeleteAnalysisResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { AwsAccountId: string; AnalysisId: string } } & {
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
        output: DescribeAnalysisResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { AwsAccountId: string; AnalysisId: string } } & {
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
            Name: string
            Parameters?:
              | {
                  StringParameters?: {} | undefined
                  IntegerParameters?: {} | undefined
                  DecimalParameters?: {} | undefined
                  DateTimeParameters?: {} | undefined
                }
              | undefined
            SourceEntity?:
              | { SourceTemplate?: { DataSetReferences: {}; Arn: {} } | undefined }
              | undefined
            ThemeArn?: string | undefined
            Definition?:
              | {
                  DataSetIdentifierDeclarations?: {} | undefined
                  Sheets?: {} | undefined
                  CalculatedFields?: {} | undefined
                  ParameterDeclarations?: {} | undefined
                  FilterGroups?: {} | undefined
                  ColumnConfigurations?: {} | undefined
                  AnalysisDefaults?: AnalysisDefaults | undefined
                }
              | undefined
          }
        }
        output: UpdateAnalysisResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/dashboards/:DashboardId': {
      $post: {
        input: { param: { AwsAccountId: string; DashboardId: string } } & {
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
            Name: string
            Parameters?:
              | {
                  StringParameters?: {} | undefined
                  IntegerParameters?: {} | undefined
                  DecimalParameters?: {} | undefined
                  DateTimeParameters?: {} | undefined
                }
              | undefined
            Permissions?: ResourcePermission[] | undefined
            SourceEntity?:
              | { SourceTemplate?: { DataSetReferences: {}; Arn: {} } | undefined }
              | undefined
            Tags?: Tag[] | undefined
            VersionDescription?: string | undefined
            DashboardPublishOptions?:
              | {
                  AdHocFilteringOption?: { AvailabilityStatus?: {} | undefined } | undefined
                  ExportToCSVOption?: { AvailabilityStatus?: {} | undefined } | undefined
                  SheetControlsOption?: { VisibilityState?: {} | undefined } | undefined
                  VisualPublishOptions?:
                    | {
                        ExportHiddenFieldsOption?:
                          | { AvailabilityStatus?: {} | undefined }
                          | undefined
                      }
                    | undefined
                  SheetLayoutElementMaximizationOption?:
                    | { AvailabilityStatus?: {} | undefined }
                    | undefined
                  VisualMenuOption?: { AvailabilityStatus?: {} | undefined } | undefined
                  VisualAxisSortOption?: { AvailabilityStatus?: {} | undefined } | undefined
                  ExportWithHiddenFieldsOption?: { AvailabilityStatus?: {} | undefined } | undefined
                  DataPointDrillUpDownOption?: { AvailabilityStatus?: {} | undefined } | undefined
                  DataPointMenuLabelOption?: { AvailabilityStatus?: {} | undefined } | undefined
                  DataPointTooltipOption?: { AvailabilityStatus?: {} | undefined } | undefined
                }
              | undefined
            ThemeArn?: string | undefined
            Definition?:
              | {
                  DataSetIdentifierDeclarations?: {} | undefined
                  Sheets?: {} | undefined
                  CalculatedFields?: {} | undefined
                  ParameterDeclarations?: {} | undefined
                  FilterGroups?: {} | undefined
                  ColumnConfigurations?: {} | undefined
                  AnalysisDefaults?: AnalysisDefaults | undefined
                }
              | undefined
          }
        }
        output: CreateDashboardResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { AwsAccountId: string; DashboardId: string } } & {
          query: { 'version-number'?: number | undefined }
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
        output: DeleteDashboardResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { AwsAccountId: string; DashboardId: string } } & {
          query: { 'version-number'?: number | undefined; 'alias-name'?: string | undefined }
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
        output: DescribeDashboardResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { AwsAccountId: string; DashboardId: string } } & {
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
            Name: string
            SourceEntity?:
              | { SourceTemplate?: { DataSetReferences: {}; Arn: {} } | undefined }
              | undefined
            Parameters?:
              | {
                  StringParameters?: {} | undefined
                  IntegerParameters?: {} | undefined
                  DecimalParameters?: {} | undefined
                  DateTimeParameters?: {} | undefined
                }
              | undefined
            VersionDescription?: string | undefined
            DashboardPublishOptions?:
              | {
                  AdHocFilteringOption?: { AvailabilityStatus?: {} | undefined } | undefined
                  ExportToCSVOption?: { AvailabilityStatus?: {} | undefined } | undefined
                  SheetControlsOption?: { VisibilityState?: {} | undefined } | undefined
                  VisualPublishOptions?:
                    | {
                        ExportHiddenFieldsOption?:
                          | { AvailabilityStatus?: {} | undefined }
                          | undefined
                      }
                    | undefined
                  SheetLayoutElementMaximizationOption?:
                    | { AvailabilityStatus?: {} | undefined }
                    | undefined
                  VisualMenuOption?: { AvailabilityStatus?: {} | undefined } | undefined
                  VisualAxisSortOption?: { AvailabilityStatus?: {} | undefined } | undefined
                  ExportWithHiddenFieldsOption?: { AvailabilityStatus?: {} | undefined } | undefined
                  DataPointDrillUpDownOption?: { AvailabilityStatus?: {} | undefined } | undefined
                  DataPointMenuLabelOption?: { AvailabilityStatus?: {} | undefined } | undefined
                  DataPointTooltipOption?: { AvailabilityStatus?: {} | undefined } | undefined
                }
              | undefined
            ThemeArn?: string | undefined
            Definition?:
              | {
                  DataSetIdentifierDeclarations?: {} | undefined
                  Sheets?: {} | undefined
                  CalculatedFields?: {} | undefined
                  ParameterDeclarations?: {} | undefined
                  FilterGroups?: {} | undefined
                  ColumnConfigurations?: {} | undefined
                  AnalysisDefaults?: AnalysisDefaults | undefined
                }
              | undefined
          }
        }
        output: UpdateDashboardResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/data-sets': {
      $post: {
        input: { param: { AwsAccountId: string } } & {
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
            DataSetId: string
            Name: string
            PhysicalTableMap: { [x: string]: PhysicalTable }
            LogicalTableMap?: { [x: string]: LogicalTable } | undefined
            ImportMode: 'SPICE' | 'DIRECT_QUERY'
            ColumnGroups?: ColumnGroup[] | undefined
            FieldFolders?: { [x: string]: FieldFolder } | undefined
            Permissions?: ResourcePermission[] | undefined
            RowLevelPermissionDataSet?:
              | {
                  Namespace?: {} | undefined
                  Arn?: {} | undefined
                  PermissionPolicy?: {} | undefined
                  FormatVersion?: {} | undefined
                  Status?: {} | undefined
                }
              | undefined
            RowLevelPermissionTagConfiguration?:
              | {
                  Status?: {} | undefined
                  TagRules?: {} | undefined
                  TagRuleConfigurations?: {} | undefined
                }
              | undefined
            ColumnLevelPermissionRules?: ColumnLevelPermissionRule[] | undefined
            Tags?: Tag[] | undefined
            DataSetUsageConfiguration?:
              | {
                  DisableUseAsDirectQuerySource?: {} | undefined
                  DisableUseAsImportedSource?: {} | undefined
                }
              | undefined
          }
        }
        output: CreateDataSetResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { AwsAccountId: string } } & {
          query: {
            'next-token'?: string | undefined
            'max-results'?: number | undefined
            MaxResults?: string | undefined
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
        output: ListDataSetsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/data-sources': {
      $post: {
        input: { param: { AwsAccountId: string } } & {
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
            DataSourceId: string
            Name: string
            Type:
              | 'ADOBE_ANALYTICS'
              | 'AMAZON_ELASTICSEARCH'
              | 'ATHENA'
              | 'AURORA'
              | 'AURORA_POSTGRESQL'
              | 'AWS_IOT_ANALYTICS'
              | 'GITHUB'
              | 'JIRA'
              | 'MARIADB'
              | 'MYSQL'
              | 'ORACLE'
              | 'POSTGRESQL'
              | 'PRESTO'
              | 'REDSHIFT'
              | 'S3'
              | 'SALESFORCE'
              | 'SERVICENOW'
              | 'SNOWFLAKE'
              | 'SPARK'
              | 'SQLSERVER'
              | 'TERADATA'
              | 'TWITTER'
              | 'TIMESTREAM'
              | 'AMAZON_OPENSEARCH'
              | 'EXASOL'
              | 'DATABRICKS'
            DataSourceParameters?:
              | {
                  AmazonElasticsearchParameters?: { Domain: {} } | undefined
                  AthenaParameters?:
                    | { WorkGroup?: {} | undefined; RoleArn?: {} | undefined }
                    | undefined
                  AuroraParameters?: { Host: {}; Port: {}; Database: {} } | undefined
                  AuroraPostgreSqlParameters?: { Host: {}; Port: {}; Database: {} } | undefined
                  AwsIotAnalyticsParameters?: { DataSetName: {} } | undefined
                  JiraParameters?: { SiteBaseUrl: {} } | undefined
                  MariaDbParameters?: { Host: {}; Port: {}; Database: {} } | undefined
                  MySqlParameters?: { Host: {}; Port: {}; Database: {} } | undefined
                  OracleParameters?: { Host: {}; Port: {}; Database: {} } | undefined
                  PostgreSqlParameters?: { Host: {}; Port: {}; Database: {} } | undefined
                  PrestoParameters?: { Host: {}; Port: {}; Catalog: {} } | undefined
                  RdsParameters?: { InstanceId: {}; Database: {} } | undefined
                  RedshiftParameters?:
                    | {
                        Host?: {} | undefined
                        Port?: {} | undefined
                        Database: {}
                        ClusterId?: {} | undefined
                      }
                    | undefined
                  S3Parameters?:
                    | { ManifestFileLocation: { Bucket: {}; Key: {} }; RoleArn?: {} | undefined }
                    | undefined
                  ServiceNowParameters?: { SiteBaseUrl: {} } | undefined
                  SnowflakeParameters?: { Host: {}; Database: {}; Warehouse: {} } | undefined
                  SparkParameters?: { Host: {}; Port: {} } | undefined
                  SqlServerParameters?: { Host: {}; Port: {}; Database: {} } | undefined
                  TeradataParameters?: { Host: {}; Port: {}; Database: {} } | undefined
                  TwitterParameters?: { Query: {}; MaxRows: {} } | undefined
                  AmazonOpenSearchParameters?: { Domain: {} } | undefined
                  ExasolParameters?: { Host: {}; Port: {} } | undefined
                  DatabricksParameters?: { Host: {}; Port: {}; SqlEndpointPath: {} } | undefined
                }
              | undefined
            Credentials?:
              | {
                  CredentialPair?:
                    | { Username: {}; Password: {}; AlternateDataSourceParameters?: {} | undefined }
                    | undefined
                  CopySourceArn?: {} | undefined
                  SecretArn?: {} | undefined
                }
              | undefined
            Permissions?: ResourcePermission[] | undefined
            VpcConnectionProperties?: { VpcConnectionArn?: {} | undefined } | undefined
            SslProperties?: { DisableSsl?: {} | undefined } | undefined
            Tags?: Tag[] | undefined
          }
        }
        output: CreateDataSourceResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { AwsAccountId: string } } & {
          query: {
            'next-token'?: string | undefined
            'max-results'?: number | undefined
            MaxResults?: string | undefined
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
        output: ListDataSourcesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/folders/:FolderId': {
      $post: {
        input: { param: { AwsAccountId: string; FolderId: string } } & {
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
            Name?: string | undefined
            FolderType?: 'SHARED' | undefined
            ParentFolderArn?: string | undefined
            Permissions?: ResourcePermission[] | undefined
            Tags?: Tag[] | undefined
          }
        }
        output: CreateFolderResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { AwsAccountId: string; FolderId: string } } & {
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
        output: DeleteFolderResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { AwsAccountId: string; FolderId: string } } & {
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
        output: DescribeFolderResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { AwsAccountId: string; FolderId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Name: string } }
        output: UpdateFolderResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/folders/:FolderId/members/:MemberType/:MemberId': {
      $put: {
        input: {
          param: {
            AwsAccountId: string
            FolderId: string
            MemberId: string
            MemberType: 'DASHBOARD' | 'ANALYSIS' | 'DATASET'
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
        output: CreateFolderMembershipResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: {
          param: {
            AwsAccountId: string
            FolderId: string
            MemberId: string
            MemberType: 'DASHBOARD' | 'ANALYSIS' | 'DATASET'
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
        output: DeleteFolderMembershipResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/namespaces/:Namespace/groups': {
      $post: {
        input: { param: { AwsAccountId: string; Namespace: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { GroupName: string; Description?: string | undefined } }
        output: CreateGroupResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { AwsAccountId: string; Namespace: string } } & {
          query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
        output: ListGroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/namespaces/:Namespace/groups/:GroupName/members/:MemberName': {
      $put: {
        input: {
          param: { MemberName: string; GroupName: string; AwsAccountId: string; Namespace: string }
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
        output: CreateGroupMembershipResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: {
          param: { MemberName: string; GroupName: string; AwsAccountId: string; Namespace: string }
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
        output: DeleteGroupMembershipResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          param: { MemberName: string; GroupName: string; AwsAccountId: string; Namespace: string }
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
        output: DescribeGroupMembershipResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/namespaces/:Namespace/iam-policy-assignments/': {
      $post: {
        input: { param: { AwsAccountId: string; Namespace: string } } & {
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
            AssignmentName: string
            AssignmentStatus: 'ENABLED' | 'DRAFT' | 'DISABLED'
            PolicyArn?: string | undefined
            Identities?: { [x: string]: IdentityNameList } | undefined
          }
        }
        output: CreateIAMPolicyAssignmentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId': {
      $post: {
        input: { param: { AwsAccountId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Namespace: string; IdentityStore: 'QUICKSIGHT'; Tags?: Tag[] | undefined } }
        output: CreateNamespaceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/data-sets/:DataSetId/refresh-schedules': {
      $post: {
        input: { param: { DataSetId: string; AwsAccountId: string } } & {
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
            Schedule: {
              ScheduleId?: {} | undefined
              ScheduleFrequency?:
                | {
                    Interval: {}
                    RefreshOnDay?:
                      | { DayOfWeek?: {} | undefined; DayOfMonth?: {} | undefined }
                      | undefined
                    Timezone?: {} | undefined
                    TimeOfTheDay?: {} | undefined
                  }
                | undefined
              StartAfterDateTime?: {} | undefined
              RefreshType?: {} | undefined
              Arn?: {} | undefined
            }
          }
        }
        output: CreateRefreshScheduleResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { AwsAccountId: string; DataSetId: string } } & {
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
        output: ListRefreshSchedulesResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { DataSetId: string; AwsAccountId: string } } & {
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
            Schedule: {
              ScheduleId?: {} | undefined
              ScheduleFrequency?:
                | {
                    Interval: {}
                    RefreshOnDay?:
                      | { DayOfWeek?: {} | undefined; DayOfMonth?: {} | undefined }
                      | undefined
                    Timezone?: {} | undefined
                    TimeOfTheDay?: {} | undefined
                  }
                | undefined
              StartAfterDateTime?: {} | undefined
              RefreshType?: {} | undefined
              Arn?: {} | undefined
            }
          }
        }
        output: UpdateRefreshScheduleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/templates/:TemplateId': {
      $post: {
        input: { param: { AwsAccountId: string; TemplateId: string } } & {
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
            Name?: string | undefined
            Permissions?: ResourcePermission[] | undefined
            SourceEntity?:
              | {
                  SourceAnalysis?: { Arn: {}; DataSetReferences: {} } | undefined
                  SourceTemplate?: { Arn: {} } | undefined
                }
              | undefined
            Tags?: Tag[] | undefined
            VersionDescription?: string | undefined
            Definition?:
              | {
                  DataSetConfigurations?: {} | undefined
                  Sheets?: {} | undefined
                  CalculatedFields?: {} | undefined
                  ParameterDeclarations?: {} | undefined
                  FilterGroups?: {} | undefined
                  ColumnConfigurations?: {} | undefined
                  AnalysisDefaults?: AnalysisDefaults | undefined
                }
              | undefined
          }
        }
        output: CreateTemplateResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { AwsAccountId: string; TemplateId: string } } & {
          query: { 'version-number'?: number | undefined }
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
        output: DeleteTemplateResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { AwsAccountId: string; TemplateId: string } } & {
          query: { 'version-number'?: number | undefined; 'alias-name'?: string | undefined }
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
        output: DescribeTemplateResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { AwsAccountId: string; TemplateId: string } } & {
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
            SourceEntity?:
              | {
                  SourceAnalysis?: { Arn: {}; DataSetReferences: {} } | undefined
                  SourceTemplate?: { Arn: {} } | undefined
                }
              | undefined
            VersionDescription?: string | undefined
            Name?: string | undefined
            Definition?:
              | {
                  DataSetConfigurations?: {} | undefined
                  Sheets?: {} | undefined
                  CalculatedFields?: {} | undefined
                  ParameterDeclarations?: {} | undefined
                  FilterGroups?: {} | undefined
                  ColumnConfigurations?: {} | undefined
                  AnalysisDefaults?: AnalysisDefaults | undefined
                }
              | undefined
          }
        }
        output: UpdateTemplateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/templates/:TemplateId/aliases/:AliasName': {
      $post: {
        input: { param: { AwsAccountId: string; TemplateId: string; AliasName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { TemplateVersionNumber: number } }
        output: CreateTemplateAliasResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { AwsAccountId: string; TemplateId: string; AliasName: string } } & {
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
        output: DeleteTemplateAliasResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { AwsAccountId: string; TemplateId: string; AliasName: string } } & {
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
        output: DescribeTemplateAliasResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { AwsAccountId: string; TemplateId: string; AliasName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { TemplateVersionNumber: number } }
        output: UpdateTemplateAliasResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/themes/:ThemeId': {
      $post: {
        input: { param: { AwsAccountId: string; ThemeId: string } } & {
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
            Name: string
            BaseThemeId: string
            VersionDescription?: string | undefined
            Configuration: {
              DataColorPalette?:
                | {
                    Colors?: {} | undefined
                    MinMaxGradient?: {} | undefined
                    EmptyFillColor?: {} | undefined
                  }
                | undefined
              UIColorPalette?:
                | {
                    PrimaryForeground?: {} | undefined
                    PrimaryBackground?: {} | undefined
                    SecondaryForeground?: {} | undefined
                    SecondaryBackground?: {} | undefined
                    Accent?: {} | undefined
                    AccentForeground?: {} | undefined
                    Danger?: {} | undefined
                    DangerForeground?: {} | undefined
                    Warning?: {} | undefined
                    WarningForeground?: {} | undefined
                    Success?: {} | undefined
                    SuccessForeground?: {} | undefined
                    Dimension?: {} | undefined
                    DimensionForeground?: {} | undefined
                    Measure?: {} | undefined
                    MeasureForeground?: {} | undefined
                  }
                | undefined
              Sheet?:
                | {
                    Tile?: { Border?: { Show?: {} | undefined } | undefined } | undefined
                    TileLayout?:
                      | {
                          Gutter?: { Show?: {} | undefined } | undefined
                          Margin?: { Show?: {} | undefined } | undefined
                        }
                      | undefined
                  }
                | undefined
              Typography?: Typography | undefined
            }
            Permissions?: ResourcePermission[] | undefined
            Tags?: Tag[] | undefined
          }
        }
        output: CreateThemeResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { AwsAccountId: string; ThemeId: string } } & {
          query: { 'version-number'?: number | undefined }
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
        output: DeleteThemeResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { AwsAccountId: string; ThemeId: string } } & {
          query: { 'version-number'?: number | undefined; 'alias-name'?: string | undefined }
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
        output: DescribeThemeResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { AwsAccountId: string; ThemeId: string } } & {
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
            Name?: string | undefined
            BaseThemeId: string
            VersionDescription?: string | undefined
            Configuration?:
              | {
                  DataColorPalette?:
                    | {
                        Colors?: {} | undefined
                        MinMaxGradient?: {} | undefined
                        EmptyFillColor?: {} | undefined
                      }
                    | undefined
                  UIColorPalette?:
                    | {
                        PrimaryForeground?: {} | undefined
                        PrimaryBackground?: {} | undefined
                        SecondaryForeground?: {} | undefined
                        SecondaryBackground?: {} | undefined
                        Accent?: {} | undefined
                        AccentForeground?: {} | undefined
                        Danger?: {} | undefined
                        DangerForeground?: {} | undefined
                        Warning?: {} | undefined
                        WarningForeground?: {} | undefined
                        Success?: {} | undefined
                        SuccessForeground?: {} | undefined
                        Dimension?: {} | undefined
                        DimensionForeground?: {} | undefined
                        Measure?: {} | undefined
                        MeasureForeground?: {} | undefined
                      }
                    | undefined
                  Sheet?:
                    | {
                        Tile?: { Border?: { Show?: {} | undefined } | undefined } | undefined
                        TileLayout?:
                          | {
                              Gutter?: { Show?: {} | undefined } | undefined
                              Margin?: { Show?: {} | undefined } | undefined
                            }
                          | undefined
                      }
                    | undefined
                  Typography?: Typography | undefined
                }
              | undefined
          }
        }
        output: UpdateThemeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/themes/:ThemeId/aliases/:AliasName': {
      $post: {
        input: { param: { AwsAccountId: string; ThemeId: string; AliasName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { ThemeVersionNumber: number } }
        output: CreateThemeAliasResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { AwsAccountId: string; ThemeId: string; AliasName: string } } & {
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
        output: DeleteThemeAliasResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { AwsAccountId: string; ThemeId: string; AliasName: string } } & {
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
        output: DescribeThemeAliasResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { AwsAccountId: string; ThemeId: string; AliasName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { ThemeVersionNumber: number } }
        output: UpdateThemeAliasResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/data-sets/:DataSetId': {
      $delete: {
        input: { param: { AwsAccountId: string; DataSetId: string } } & {
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
        output: DeleteDataSetResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { AwsAccountId: string; DataSetId: string } } & {
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
        output: DescribeDataSetResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { AwsAccountId: string; DataSetId: string } } & {
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
            Name: string
            PhysicalTableMap: { [x: string]: PhysicalTable }
            LogicalTableMap?: { [x: string]: LogicalTable } | undefined
            ImportMode: 'SPICE' | 'DIRECT_QUERY'
            ColumnGroups?: ColumnGroup[] | undefined
            FieldFolders?: { [x: string]: FieldFolder } | undefined
            RowLevelPermissionDataSet?:
              | {
                  Namespace?: {} | undefined
                  Arn?: {} | undefined
                  PermissionPolicy?: {} | undefined
                  FormatVersion?: {} | undefined
                  Status?: {} | undefined
                }
              | undefined
            RowLevelPermissionTagConfiguration?:
              | {
                  Status?: {} | undefined
                  TagRules?: {} | undefined
                  TagRuleConfigurations?: {} | undefined
                }
              | undefined
            ColumnLevelPermissionRules?: ColumnLevelPermissionRule[] | undefined
            DataSetUsageConfiguration?:
              | {
                  DisableUseAsDirectQuerySource?: {} | undefined
                  DisableUseAsImportedSource?: {} | undefined
                }
              | undefined
          }
        }
        output: UpdateDataSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/data-sets/:DataSetId/refresh-properties': {
      $delete: {
        input: { param: { AwsAccountId: string; DataSetId: string } } & {
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
        output: DeleteDataSetRefreshPropertiesResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { AwsAccountId: string; DataSetId: string } } & {
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
        output: DescribeDataSetRefreshPropertiesResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { AwsAccountId: string; DataSetId: string } } & {
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
            DataSetRefreshProperties: {
              RefreshConfiguration?:
                | {
                    IncrementalRefresh: {
                      LookbackWindow: { ColumnName: {}; Size: {}; SizeUnit: {} }
                    }
                  }
                | undefined
            }
          }
        }
        output: PutDataSetRefreshPropertiesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/data-sources/:DataSourceId': {
      $delete: {
        input: { param: { AwsAccountId: string; DataSourceId: string } } & {
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
        output: DeleteDataSourceResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { AwsAccountId: string; DataSourceId: string } } & {
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
        output: DescribeDataSourceResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { AwsAccountId: string; DataSourceId: string } } & {
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
            Name: string
            DataSourceParameters?:
              | {
                  AmazonElasticsearchParameters?: { Domain: {} } | undefined
                  AthenaParameters?:
                    | { WorkGroup?: {} | undefined; RoleArn?: {} | undefined }
                    | undefined
                  AuroraParameters?: { Host: {}; Port: {}; Database: {} } | undefined
                  AuroraPostgreSqlParameters?: { Host: {}; Port: {}; Database: {} } | undefined
                  AwsIotAnalyticsParameters?: { DataSetName: {} } | undefined
                  JiraParameters?: { SiteBaseUrl: {} } | undefined
                  MariaDbParameters?: { Host: {}; Port: {}; Database: {} } | undefined
                  MySqlParameters?: { Host: {}; Port: {}; Database: {} } | undefined
                  OracleParameters?: { Host: {}; Port: {}; Database: {} } | undefined
                  PostgreSqlParameters?: { Host: {}; Port: {}; Database: {} } | undefined
                  PrestoParameters?: { Host: {}; Port: {}; Catalog: {} } | undefined
                  RdsParameters?: { InstanceId: {}; Database: {} } | undefined
                  RedshiftParameters?:
                    | {
                        Host?: {} | undefined
                        Port?: {} | undefined
                        Database: {}
                        ClusterId?: {} | undefined
                      }
                    | undefined
                  S3Parameters?:
                    | { ManifestFileLocation: { Bucket: {}; Key: {} }; RoleArn?: {} | undefined }
                    | undefined
                  ServiceNowParameters?: { SiteBaseUrl: {} } | undefined
                  SnowflakeParameters?: { Host: {}; Database: {}; Warehouse: {} } | undefined
                  SparkParameters?: { Host: {}; Port: {} } | undefined
                  SqlServerParameters?: { Host: {}; Port: {}; Database: {} } | undefined
                  TeradataParameters?: { Host: {}; Port: {}; Database: {} } | undefined
                  TwitterParameters?: { Query: {}; MaxRows: {} } | undefined
                  AmazonOpenSearchParameters?: { Domain: {} } | undefined
                  ExasolParameters?: { Host: {}; Port: {} } | undefined
                  DatabricksParameters?: { Host: {}; Port: {}; SqlEndpointPath: {} } | undefined
                }
              | undefined
            Credentials?:
              | {
                  CredentialPair?:
                    | { Username: {}; Password: {}; AlternateDataSourceParameters?: {} | undefined }
                    | undefined
                  CopySourceArn?: {} | undefined
                  SecretArn?: {} | undefined
                }
              | undefined
            VpcConnectionProperties?: { VpcConnectionArn?: {} | undefined } | undefined
            SslProperties?: { DisableSsl?: {} | undefined } | undefined
          }
        }
        output: UpdateDataSourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/namespaces/:Namespace/groups/:GroupName': {
      $delete: {
        input: { param: { GroupName: string; AwsAccountId: string; Namespace: string } } & {
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
        output: DeleteGroupResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { GroupName: string; AwsAccountId: string; Namespace: string } } & {
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
        output: DescribeGroupResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { GroupName: string; AwsAccountId: string; Namespace: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Description?: string | undefined } }
        output: UpdateGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/namespace/:Namespace/iam-policy-assignments/:AssignmentName': {
      $delete: {
        input: { param: { AwsAccountId: string; AssignmentName: string; Namespace: string } } & {
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
        output: DeleteIAMPolicyAssignmentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/namespaces/:Namespace': {
      $delete: {
        input: { param: { AwsAccountId: string; Namespace: string } } & {
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
        output: DeleteNamespaceResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { AwsAccountId: string; Namespace: string } } & {
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
        output: DescribeNamespaceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/data-sets/:DataSetId/refresh-schedules/:ScheduleId': {
      $delete: {
        input: { param: { DataSetId: string; AwsAccountId: string; ScheduleId: string } } & {
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
        output: DeleteRefreshScheduleResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { AwsAccountId: string; DataSetId: string; ScheduleId: string } } & {
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
        output: DescribeRefreshScheduleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/namespaces/:Namespace/users/:UserName': {
      $delete: {
        input: { param: { UserName: string; AwsAccountId: string; Namespace: string } } & {
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
        output: DeleteUserResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { UserName: string; AwsAccountId: string; Namespace: string } } & {
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
        output: DescribeUserResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { UserName: string; AwsAccountId: string; Namespace: string } } & {
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
            Email: string
            Role: 'ADMIN' | 'AUTHOR' | 'READER' | 'RESTRICTED_AUTHOR' | 'RESTRICTED_READER'
            CustomPermissionsName?: string | undefined
            UnapplyCustomPermissions?: boolean | undefined
            ExternalLoginFederationProviderType?: string | undefined
            CustomFederationProviderUrl?: string | undefined
            ExternalLoginId?: string | undefined
          }
        }
        output: UpdateUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/namespaces/:Namespace/user-principals/:PrincipalId': {
      $delete: {
        input: { param: { PrincipalId: string; AwsAccountId: string; Namespace: string } } & {
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
        output: DeleteUserByPrincipalIdResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/settings': {
      $get: {
        input: { param: { AwsAccountId: string } } & {
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
        output: DescribeAccountSettingsResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { AwsAccountId: string } } & {
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
            DefaultNamespace: string
            NotificationEmail?: string | undefined
            TerminationProtectionEnabled?: boolean | undefined
          }
        }
        output: UpdateAccountSettingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/analyses/:AnalysisId/definition': {
      $get: {
        input: { param: { AwsAccountId: string; AnalysisId: string } } & {
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
        output: DescribeAnalysisDefinitionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/analyses/:AnalysisId/permissions': {
      $get: {
        input: { param: { AwsAccountId: string; AnalysisId: string } } & {
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
        output: DescribeAnalysisPermissionsResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { AwsAccountId: string; AnalysisId: string } } & {
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
            GrantPermissions?: ResourcePermission[] | undefined
            RevokePermissions?: ResourcePermission[] | undefined
          }
        }
        output: UpdateAnalysisPermissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/dashboards/:DashboardId/definition': {
      $get: {
        input: { param: { AwsAccountId: string; DashboardId: string } } & {
          query: { 'version-number'?: number | undefined; 'alias-name'?: string | undefined }
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
        output: DescribeDashboardDefinitionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/dashboards/:DashboardId/permissions': {
      $get: {
        input: { param: { AwsAccountId: string; DashboardId: string } } & {
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
        output: DescribeDashboardPermissionsResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { AwsAccountId: string; DashboardId: string } } & {
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
            GrantPermissions?: ResourcePermission[] | undefined
            RevokePermissions?: ResourcePermission[] | undefined
            GrantLinkPermissions?: ResourcePermission[] | undefined
            RevokeLinkPermissions?: ResourcePermission[] | undefined
          }
        }
        output: UpdateDashboardPermissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/data-sets/:DataSetId/permissions': {
      $get: {
        input: { param: { AwsAccountId: string; DataSetId: string } } & {
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
        output: DescribeDataSetPermissionsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { AwsAccountId: string; DataSetId: string } } & {
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
            GrantPermissions?: ResourcePermission[] | undefined
            RevokePermissions?: ResourcePermission[] | undefined
          }
        }
        output: UpdateDataSetPermissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/data-sources/:DataSourceId/permissions': {
      $get: {
        input: { param: { AwsAccountId: string; DataSourceId: string } } & {
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
        output: DescribeDataSourcePermissionsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { AwsAccountId: string; DataSourceId: string } } & {
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
            GrantPermissions?: ResourcePermission[] | undefined
            RevokePermissions?: ResourcePermission[] | undefined
          }
        }
        output: UpdateDataSourcePermissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/folders/:FolderId/permissions': {
      $get: {
        input: { param: { AwsAccountId: string; FolderId: string } } & {
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
        output: DescribeFolderPermissionsResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { AwsAccountId: string; FolderId: string } } & {
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
            GrantPermissions?: ResourcePermission[] | undefined
            RevokePermissions?: ResourcePermission[] | undefined
          }
        }
        output: UpdateFolderPermissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/folders/:FolderId/resolved-permissions': {
      $get: {
        input: { param: { AwsAccountId: string; FolderId: string } } & {
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
        output: DescribeFolderResolvedPermissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/namespaces/:Namespace/iam-policy-assignments/:AssignmentName': {
      $get: {
        input: { param: { AwsAccountId: string; AssignmentName: string; Namespace: string } } & {
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
        output: DescribeIAMPolicyAssignmentResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { AwsAccountId: string; AssignmentName: string; Namespace: string } } & {
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
            AssignmentStatus?: 'ENABLED' | 'DRAFT' | 'DISABLED' | undefined
            PolicyArn?: string | undefined
            Identities?: { [x: string]: IdentityNameList } | undefined
          }
        }
        output: UpdateIAMPolicyAssignmentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/ip-restriction': {
      $get: {
        input: { param: { AwsAccountId: string } } & {
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
        output: DescribeIpRestrictionResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { AwsAccountId: string } } & {
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
            IpRestrictionRuleMap?: { [x: string]: IpRestrictionRuleDescription } | undefined
            Enabled?: boolean | undefined
          }
        }
        output: UpdateIpRestrictionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/templates/:TemplateId/definition': {
      $get: {
        input: { param: { AwsAccountId: string; TemplateId: string } } & {
          query: { 'version-number'?: number | undefined; 'alias-name'?: string | undefined }
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
        output: DescribeTemplateDefinitionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/templates/:TemplateId/permissions': {
      $get: {
        input: { param: { AwsAccountId: string; TemplateId: string } } & {
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
        output: DescribeTemplatePermissionsResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { AwsAccountId: string; TemplateId: string } } & {
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
            GrantPermissions?: ResourcePermission[] | undefined
            RevokePermissions?: ResourcePermission[] | undefined
          }
        }
        output: UpdateTemplatePermissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/themes/:ThemeId/permissions': {
      $get: {
        input: { param: { AwsAccountId: string; ThemeId: string } } & {
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
        output: DescribeThemePermissionsResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { AwsAccountId: string; ThemeId: string } } & {
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
            GrantPermissions?: ResourcePermission[] | undefined
            RevokePermissions?: ResourcePermission[] | undefined
          }
        }
        output: UpdateThemePermissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/embed-url/anonymous-user': {
      $post: {
        input: { param: { AwsAccountId: string } } & {
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
            SessionLifetimeInMinutes?: number | undefined
            Namespace: string
            SessionTags?: SessionTag[] | undefined
            AuthorizedResourceArns: Arn[]
            ExperienceConfiguration: {
              Dashboard?: { InitialDashboardId: {} } | undefined
              DashboardVisual?:
                | { InitialDashboardVisualId: { DashboardId: {}; SheetId: {}; VisualId: {} } }
                | undefined
              QSearchBar?: { InitialTopicId: {} } | undefined
            }
            AllowedDomains?: String[] | undefined
          }
        }
        output: GenerateEmbedUrlForAnonymousUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/embed-url/registered-user': {
      $post: {
        input: { param: { AwsAccountId: string } } & {
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
            SessionLifetimeInMinutes?: number | undefined
            UserArn: string
            ExperienceConfiguration: {
              Dashboard?:
                | {
                    InitialDashboardId: {}
                    FeatureConfigurations?:
                      | { StatePersistence?: { Enabled: {} } | undefined }
                      | undefined
                  }
                | undefined
              QuickSightConsole?:
                | {
                    InitialPath?: {} | undefined
                    FeatureConfigurations?:
                      | { StatePersistence?: { Enabled: {} } | undefined }
                      | undefined
                  }
                | undefined
              QSearchBar?: { InitialTopicId?: {} | undefined } | undefined
              DashboardVisual?:
                | { InitialDashboardVisualId: { DashboardId: {}; SheetId: {}; VisualId: {} } }
                | undefined
            }
            AllowedDomains?: String[] | undefined
          }
        }
        output: GenerateEmbedUrlForRegisteredUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/dashboards/:DashboardId/embed-url#creds-type': {
      $get: {
        input: { param: { AwsAccountId: string; DashboardId: string } } & {
          query: {
            'creds-type': 'IAM' | 'QUICKSIGHT' | 'ANONYMOUS'
            'session-lifetime'?: number | undefined
            'undo-redo-disabled'?: boolean | undefined
            'reset-disabled'?: boolean | undefined
            'state-persistence-enabled'?: boolean | undefined
            'user-arn'?: string | undefined
            namespace?: string | undefined
            'additional-dashboard-ids'?: ShortRestrictiveResourceId[] | undefined
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
        output: GetDashboardEmbedUrlResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/session-embed-url': {
      $get: {
        input: { param: { AwsAccountId: string } } & {
          query: {
            'entry-point'?: string | undefined
            'session-lifetime'?: number | undefined
            'user-arn'?: string | undefined
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
        output: GetSessionEmbedUrlResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/analyses': {
      $get: {
        input: { param: { AwsAccountId: string } } & {
          query: {
            'next-token'?: string | undefined
            'max-results'?: number | undefined
            MaxResults?: string | undefined
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
        output: ListAnalysesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/dashboards/:DashboardId/versions': {
      $get: {
        input: { param: { AwsAccountId: string; DashboardId: string } } & {
          query: {
            'next-token'?: string | undefined
            'max-results'?: number | undefined
            MaxResults?: string | undefined
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
        output: ListDashboardVersionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/dashboards': {
      $get: {
        input: { param: { AwsAccountId: string } } & {
          query: {
            'next-token'?: string | undefined
            'max-results'?: number | undefined
            MaxResults?: string | undefined
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
        output: ListDashboardsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/folders/:FolderId/members': {
      $get: {
        input: { param: { AwsAccountId: string; FolderId: string } } & {
          query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
        output: ListFolderMembersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/folders': {
      $get: {
        input: { param: { AwsAccountId: string } } & {
          query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
        output: ListFoldersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/namespaces/:Namespace/groups/:GroupName/members': {
      $get: {
        input: { param: { GroupName: string; AwsAccountId: string; Namespace: string } } & {
          query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
        output: ListGroupMembershipsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/namespaces/:Namespace/iam-policy-assignments': {
      $get: {
        input: { param: { AwsAccountId: string; Namespace: string } } & {
          query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
        } & { json: { AssignmentStatus?: 'ENABLED' | 'DRAFT' | 'DISABLED' | undefined } }
        output: ListIAMPolicyAssignmentsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/namespaces/:Namespace/users/:UserName/iam-policy-assignments': {
      $get: {
        input: { param: { AwsAccountId: string; UserName: string; Namespace: string } } & {
          query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
        output: ListIAMPolicyAssignmentsForUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/data-sets/:DataSetId/ingestions': {
      $get: {
        input: { param: { DataSetId: string; AwsAccountId: string } } & {
          query: {
            'next-token'?: string | undefined
            'max-results'?: number | undefined
            MaxResults?: string | undefined
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
        output: ListIngestionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/namespaces': {
      $get: {
        input: { param: { AwsAccountId: string } } & {
          query: {
            'next-token'?: string | undefined
            'max-results'?: number | undefined
            MaxResults?: string | undefined
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
        output: ListNamespacesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/resources/:ResourceArn/tags': {
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
        } & { json: { Tags: Tag[] } }
        output: TagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/templates/:TemplateId/aliases': {
      $get: {
        input: { param: { AwsAccountId: string; TemplateId: string } } & {
          query: {
            'next-token'?: string | undefined
            'max-result'?: number | undefined
            MaxResults?: string | undefined
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
        output: ListTemplateAliasesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/templates/:TemplateId/versions': {
      $get: {
        input: { param: { AwsAccountId: string; TemplateId: string } } & {
          query: {
            'next-token'?: string | undefined
            'max-results'?: number | undefined
            MaxResults?: string | undefined
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
        output: ListTemplateVersionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/templates': {
      $get: {
        input: { param: { AwsAccountId: string } } & {
          query: {
            'next-token'?: string | undefined
            'max-result'?: number | undefined
            MaxResults?: string | undefined
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
        output: ListTemplatesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/themes/:ThemeId/aliases': {
      $get: {
        input: { param: { AwsAccountId: string; ThemeId: string } } & {
          query: { 'next-token'?: string | undefined; 'max-result'?: number | undefined }
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
        output: ListThemeAliasesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/themes/:ThemeId/versions': {
      $get: {
        input: { param: { AwsAccountId: string; ThemeId: string } } & {
          query: {
            'next-token'?: string | undefined
            'max-results'?: number | undefined
            MaxResults?: string | undefined
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
        output: ListThemeVersionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/themes': {
      $get: {
        input: { param: { AwsAccountId: string } } & {
          query: {
            'next-token'?: string | undefined
            'max-results'?: number | undefined
            type?: 'QUICKSIGHT' | 'CUSTOM' | 'ALL' | undefined
            MaxResults?: string | undefined
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
        output: ListThemesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/namespaces/:Namespace/users/:UserName/groups': {
      $get: {
        input: { param: { UserName: string; AwsAccountId: string; Namespace: string } } & {
          query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
        output: ListUserGroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/namespaces/:Namespace/users': {
      $get: {
        input: { param: { AwsAccountId: string; Namespace: string } } & {
          query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
        output: ListUsersResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { AwsAccountId: string; Namespace: string } } & {
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
            IdentityType: 'IAM' | 'QUICKSIGHT'
            Email: string
            UserRole: 'ADMIN' | 'AUTHOR' | 'READER' | 'RESTRICTED_AUTHOR' | 'RESTRICTED_READER'
            IamArn?: string | undefined
            SessionName?: string | undefined
            UserName?: string | undefined
            CustomPermissionsName?: string | undefined
            ExternalLoginFederationProviderType?: string | undefined
            CustomFederationProviderUrl?: string | undefined
            ExternalLoginId?: string | undefined
          }
        }
        output: RegisterUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/restore/analyses/:AnalysisId': {
      $post: {
        input: { param: { AwsAccountId: string; AnalysisId: string } } & {
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
        output: RestoreAnalysisResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/search/analyses': {
      $post: {
        input: { param: { AwsAccountId: string } } & {
          query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
        } & {
          json: {
            Filters: AnalysisSearchFilter[]
            NextToken?: string | undefined
            MaxResults?: number | undefined
          }
        }
        output: SearchAnalysesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/search/dashboards': {
      $post: {
        input: { param: { AwsAccountId: string } } & {
          query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
        } & {
          json: {
            Filters: DashboardSearchFilter[]
            NextToken?: string | undefined
            MaxResults?: number | undefined
          }
        }
        output: SearchDashboardsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/search/data-sets': {
      $post: {
        input: { param: { AwsAccountId: string } } & {
          query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
        } & {
          json: {
            Filters: DataSetSearchFilter[]
            NextToken?: string | undefined
            MaxResults?: number | undefined
          }
        }
        output: SearchDataSetsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/search/data-sources': {
      $post: {
        input: { param: { AwsAccountId: string } } & {
          query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
        } & {
          json: {
            Filters: DataSourceSearchFilter[]
            NextToken?: string | undefined
            MaxResults?: number | undefined
          }
        }
        output: SearchDataSourcesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/search/folders': {
      $post: {
        input: { param: { AwsAccountId: string } } & {
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
            Filters: FolderSearchFilter[]
            NextToken?: string | undefined
            MaxResults?: number | undefined
          }
        }
        output: SearchFoldersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/namespaces/:Namespace/groups-search': {
      $post: {
        input: { param: { AwsAccountId: string; Namespace: string } } & {
          query: { 'next-token'?: string | undefined; 'max-results'?: number | undefined }
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
        } & { json: { Filters: GroupSearchFilter[] } }
        output: SearchGroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/resources/:ResourceArn/tags#keys': {
      $delete: {
        input: { param: { ResourceArn: string } } & { query: { keys: TagKey[] } } & {
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
    '/accounts/:AwsAccountId/dashboards/:DashboardId/versions/:VersionNumber': {
      $put: {
        input: { param: { AwsAccountId: string; DashboardId: string; VersionNumber: number } } & {
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
        output: UpdateDashboardPublishedVersionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:AwsAccountId/public-sharing-settings': {
      $put: {
        input: { param: { AwsAccountId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { PublicSharingEnabled?: boolean | undefined } }
        output: UpdatePublicSharingSettingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
