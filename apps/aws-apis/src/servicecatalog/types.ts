type AcceptPortfolioShareInput = {
  AcceptLanguage?: {} | undefined
  PortfolioId: {}
  PortfolioShareType?: {} | undefined
}
type AcceptPortfolioShareOutput = { [x: string]: unknown }
type AssociateBudgetWithResourceInput = { BudgetName: {}; ResourceId: {} }
type AssociateBudgetWithResourceOutput = { [x: string]: unknown }
type AssociatePrincipalWithPortfolioInput = {
  AcceptLanguage?: {} | undefined
  PortfolioId: {}
  PrincipalARN: {}
  PrincipalType: {}
}
type AssociatePrincipalWithPortfolioOutput = { [x: string]: unknown }
type AssociateProductWithPortfolioInput = {
  AcceptLanguage?: {} | undefined
  ProductId: {}
  PortfolioId: {}
  SourcePortfolioId?: {} | undefined
}
type AssociateProductWithPortfolioOutput = { [x: string]: unknown }
type AssociateServiceActionWithProvisioningArtifactInput = {
  ProductId: {}
  ProvisioningArtifactId: {}
  ServiceActionId: {}
  AcceptLanguage?: {} | undefined
}
type AssociateServiceActionWithProvisioningArtifactOutput = { [x: string]: unknown }
type AssociateTagOptionWithResourceInput = { ResourceId: {}; TagOptionId: {} }
type AssociateTagOptionWithResourceOutput = { [x: string]: unknown }
type BatchAssociateServiceActionWithProvisioningArtifactInput = {
  ServiceActionAssociations: {}
  AcceptLanguage?: {} | undefined
}
type BatchAssociateServiceActionWithProvisioningArtifactOutput = {
  FailedServiceActionAssociations?: {} | undefined
}
type BatchDisassociateServiceActionFromProvisioningArtifactInput = {
  ServiceActionAssociations: {}
  AcceptLanguage?: {} | undefined
}
type BatchDisassociateServiceActionFromProvisioningArtifactOutput = {
  FailedServiceActionAssociations?: {} | undefined
}
type CopyProductInput = {
  AcceptLanguage?: {} | undefined
  SourceProductArn: {}
  TargetProductId?: {} | undefined
  TargetProductName?: {} | undefined
  SourceProvisioningArtifactIdentifiers?: {} | undefined
  CopyOptions?: {} | undefined
  IdempotencyToken: {}
}
type CopyProductOutput = { CopyProductToken?: {} | undefined }
type CreateConstraintInput = {
  AcceptLanguage?: {} | undefined
  PortfolioId: {}
  ProductId: {}
  Parameters: {}
  Type: {}
  Description?: {} | undefined
  IdempotencyToken: {}
}
type CreateConstraintOutput = {
  ConstraintDetail?:
    | {
        ConstraintId?: {} | undefined
        Type?: {} | undefined
        Description?: {} | undefined
        Owner?: {} | undefined
        ProductId?: {} | undefined
        PortfolioId?: {} | undefined
      }
    | undefined
  ConstraintParameters?: {} | undefined
  Status?: {} | undefined
}
type CreatePortfolioInput = {
  AcceptLanguage?: {} | undefined
  DisplayName: {}
  Description?: {} | undefined
  ProviderName: {}
  Tags?: {} | undefined
  IdempotencyToken: {}
}
type CreatePortfolioOutput = {
  PortfolioDetail?:
    | {
        Id?: {} | undefined
        ARN?: {} | undefined
        DisplayName?: {} | undefined
        Description?: {} | undefined
        CreatedTime?: {} | undefined
        ProviderName?: {} | undefined
      }
    | undefined
  Tags?: {} | undefined
}
type CreatePortfolioShareInput = {
  AcceptLanguage?: {} | undefined
  PortfolioId: {}
  AccountId?: {} | undefined
  OrganizationNode?: { Type?: {} | undefined; Value?: {} | undefined } | undefined
  ShareTagOptions?: {} | undefined
  SharePrincipals?: {} | undefined
}
type CreatePortfolioShareOutput = { PortfolioShareToken?: {} | undefined }
type CreateProductInput = {
  AcceptLanguage?: {} | undefined
  Name: {}
  Owner: {}
  Description?: {} | undefined
  Distributor?: {} | undefined
  SupportDescription?: {} | undefined
  SupportEmail?: {} | undefined
  SupportUrl?: {} | undefined
  ProductType: {}
  Tags?: {} | undefined
  ProvisioningArtifactParameters?:
    | {
        Name?: {} | undefined
        Description?: {} | undefined
        Info?: {} | undefined
        Type?: {} | undefined
        DisableTemplateValidation?: {} | undefined
      }
    | undefined
  IdempotencyToken: {}
  SourceConnection?:
    | {
        Type?: {} | undefined
        ConnectionParameters: {
          CodeStar?: { ConnectionArn: {}; Repository: {}; Branch: {}; ArtifactPath: {} } | undefined
        }
      }
    | undefined
}
type CreateProductOutput = {
  ProductViewDetail?:
    | {
        ProductViewSummary?:
          | {
              Id?: {} | undefined
              ProductId?: {} | undefined
              Name?: {} | undefined
              Owner?: {} | undefined
              ShortDescription?: {} | undefined
              Type?: {} | undefined
              Distributor?: {} | undefined
              HasDefaultPath?: {} | undefined
              SupportEmail?: {} | undefined
              SupportDescription?: {} | undefined
              SupportUrl?: {} | undefined
            }
          | undefined
        Status?: {} | undefined
        ProductARN?: {} | undefined
        CreatedTime?: {} | undefined
        SourceConnection?:
          | {
              Type?: {} | undefined
              ConnectionParameters?:
                | {
                    CodeStar?:
                      | { ConnectionArn: {}; Repository: {}; Branch: {}; ArtifactPath: {} }
                      | undefined
                  }
                | undefined
              LastSync?:
                | {
                    LastSyncTime?: {} | undefined
                    LastSyncStatus?: {} | undefined
                    LastSyncStatusMessage?: {} | undefined
                    LastSuccessfulSyncTime?: {} | undefined
                    LastSuccessfulSyncProvisioningArtifactId?: {} | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
  ProvisioningArtifactDetail?:
    | {
        Id?: {} | undefined
        Name?: {} | undefined
        Description?: {} | undefined
        Type?: {} | undefined
        CreatedTime?: {} | undefined
        Active?: {} | undefined
        Guidance?: {} | undefined
        SourceRevision?: {} | undefined
      }
    | undefined
  Tags?: {} | undefined
}
type CreateProvisionedProductPlanInput = {
  AcceptLanguage?: {} | undefined
  PlanName: {}
  PlanType: {}
  NotificationArns?: {} | undefined
  PathId?: {} | undefined
  ProductId: {}
  ProvisionedProductName: {}
  ProvisioningArtifactId: {}
  ProvisioningParameters?: {} | undefined
  IdempotencyToken: {}
  Tags?: {} | undefined
}
type CreateProvisionedProductPlanOutput = {
  PlanName?: {} | undefined
  PlanId?: {} | undefined
  ProvisionProductId?: {} | undefined
  ProvisionedProductName?: {} | undefined
  ProvisioningArtifactId?: {} | undefined
}
type CreateProvisioningArtifactInput = {
  AcceptLanguage?: {} | undefined
  ProductId: {}
  Parameters: {
    Name?: {} | undefined
    Description?: {} | undefined
    Info?: {} | undefined
    Type?: {} | undefined
    DisableTemplateValidation?: {} | undefined
  }
  IdempotencyToken: {}
}
type CreateProvisioningArtifactOutput = {
  ProvisioningArtifactDetail?:
    | {
        Id?: {} | undefined
        Name?: {} | undefined
        Description?: {} | undefined
        Type?: {} | undefined
        CreatedTime?: {} | undefined
        Active?: {} | undefined
        Guidance?: {} | undefined
        SourceRevision?: {} | undefined
      }
    | undefined
  Info?: {} | undefined
  Status?: {} | undefined
}
type CreateServiceActionInput = {
  Name: {}
  DefinitionType: {}
  Definition: {}
  Description?: {} | undefined
  AcceptLanguage?: {} | undefined
  IdempotencyToken: {}
}
type CreateServiceActionOutput = {
  ServiceActionDetail?:
    | {
        ServiceActionSummary?:
          | {
              Id?: {} | undefined
              Name?: {} | undefined
              Description?: {} | undefined
              DefinitionType?: {} | undefined
            }
          | undefined
        Definition?: {} | undefined
      }
    | undefined
}
type CreateTagOptionInput = { Key: {}; Value: {} }
type CreateTagOptionOutput = {
  TagOptionDetail?:
    | {
        Key?: {} | undefined
        Value?: {} | undefined
        Active?: {} | undefined
        Id?: {} | undefined
        Owner?: {} | undefined
      }
    | undefined
}
type DeleteConstraintInput = { AcceptLanguage?: {} | undefined; Id: {} }
type DeleteConstraintOutput = { [x: string]: unknown }
type DeletePortfolioInput = { AcceptLanguage?: {} | undefined; Id: {} }
type DeletePortfolioOutput = { [x: string]: unknown }
type DeletePortfolioShareInput = {
  AcceptLanguage?: {} | undefined
  PortfolioId: {}
  AccountId?: {} | undefined
  OrganizationNode?: { Type?: {} | undefined; Value?: {} | undefined } | undefined
}
type DeletePortfolioShareOutput = { PortfolioShareToken?: {} | undefined }
type DeleteProductInput = { AcceptLanguage?: {} | undefined; Id: {} }
type DeleteProductOutput = { [x: string]: unknown }
type DeleteProvisionedProductPlanInput = {
  AcceptLanguage?: {} | undefined
  PlanId: {}
  IgnoreErrors?: {} | undefined
}
type DeleteProvisionedProductPlanOutput = { [x: string]: unknown }
type DeleteProvisioningArtifactInput = {
  AcceptLanguage?: {} | undefined
  ProductId: {}
  ProvisioningArtifactId: {}
}
type DeleteProvisioningArtifactOutput = { [x: string]: unknown }
type DeleteServiceActionInput = { Id: {}; AcceptLanguage?: {} | undefined }
type DeleteServiceActionOutput = { [x: string]: unknown }
type DeleteTagOptionInput = { Id: {} }
type DeleteTagOptionOutput = { [x: string]: unknown }
type DescribeConstraintInput = { AcceptLanguage?: {} | undefined; Id: {} }
type DescribeConstraintOutput = {
  ConstraintDetail?:
    | {
        ConstraintId?: {} | undefined
        Type?: {} | undefined
        Description?: {} | undefined
        Owner?: {} | undefined
        ProductId?: {} | undefined
        PortfolioId?: {} | undefined
      }
    | undefined
  ConstraintParameters?: {} | undefined
  Status?: {} | undefined
}
type DescribeCopyProductStatusInput = { AcceptLanguage?: {} | undefined; CopyProductToken: {} }
type DescribeCopyProductStatusOutput = {
  CopyProductStatus?: {} | undefined
  TargetProductId?: {} | undefined
  StatusDetail?: {} | undefined
}
type DescribePortfolioInput = { AcceptLanguage?: {} | undefined; Id: {} }
type DescribePortfolioOutput = {
  PortfolioDetail?:
    | {
        Id?: {} | undefined
        ARN?: {} | undefined
        DisplayName?: {} | undefined
        Description?: {} | undefined
        CreatedTime?: {} | undefined
        ProviderName?: {} | undefined
      }
    | undefined
  Tags?: {} | undefined
  TagOptions?: {} | undefined
  Budgets?: {} | undefined
}
type DescribePortfolioShareStatusInput = { PortfolioShareToken: {} }
type DescribePortfolioShareStatusOutput = {
  PortfolioShareToken?: {} | undefined
  PortfolioId?: {} | undefined
  OrganizationNodeValue?: {} | undefined
  Status?: {} | undefined
  ShareDetails?: { SuccessfulShares?: {} | undefined; ShareErrors?: {} | undefined } | undefined
}
type DescribePortfolioSharesInput = {
  PortfolioId: {}
  Type: {}
  PageToken?: {} | undefined
  PageSize?: {} | undefined
}
type DescribePortfolioSharesOutput = {
  NextPageToken?: {} | undefined
  PortfolioShareDetails?: {} | undefined
}
type DescribeProductInput = {
  AcceptLanguage?: {} | undefined
  Id?: {} | undefined
  Name?: {} | undefined
}
type DescribeProductOutput = {
  ProductViewSummary?:
    | {
        Id?: {} | undefined
        ProductId?: {} | undefined
        Name?: {} | undefined
        Owner?: {} | undefined
        ShortDescription?: {} | undefined
        Type?: {} | undefined
        Distributor?: {} | undefined
        HasDefaultPath?: {} | undefined
        SupportEmail?: {} | undefined
        SupportDescription?: {} | undefined
        SupportUrl?: {} | undefined
      }
    | undefined
  ProvisioningArtifacts?: {} | undefined
  Budgets?: {} | undefined
  LaunchPaths?: {} | undefined
}
type DescribeProductAsAdminInput = {
  AcceptLanguage?: {} | undefined
  Id?: {} | undefined
  Name?: {} | undefined
  SourcePortfolioId?: {} | undefined
}
type DescribeProductAsAdminOutput = {
  ProductViewDetail?:
    | {
        ProductViewSummary?:
          | {
              Id?: {} | undefined
              ProductId?: {} | undefined
              Name?: {} | undefined
              Owner?: {} | undefined
              ShortDescription?: {} | undefined
              Type?: {} | undefined
              Distributor?: {} | undefined
              HasDefaultPath?: {} | undefined
              SupportEmail?: {} | undefined
              SupportDescription?: {} | undefined
              SupportUrl?: {} | undefined
            }
          | undefined
        Status?: {} | undefined
        ProductARN?: {} | undefined
        CreatedTime?: {} | undefined
        SourceConnection?:
          | {
              Type?: {} | undefined
              ConnectionParameters?:
                | {
                    CodeStar?:
                      | { ConnectionArn: {}; Repository: {}; Branch: {}; ArtifactPath: {} }
                      | undefined
                  }
                | undefined
              LastSync?:
                | {
                    LastSyncTime?: {} | undefined
                    LastSyncStatus?: {} | undefined
                    LastSyncStatusMessage?: {} | undefined
                    LastSuccessfulSyncTime?: {} | undefined
                    LastSuccessfulSyncProvisioningArtifactId?: {} | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
  ProvisioningArtifactSummaries?: {} | undefined
  Tags?: {} | undefined
  TagOptions?: {} | undefined
  Budgets?: {} | undefined
}
type DescribeProductViewInput = { AcceptLanguage?: {} | undefined; Id: {} }
type DescribeProductViewOutput = {
  ProductViewSummary?:
    | {
        Id?: {} | undefined
        ProductId?: {} | undefined
        Name?: {} | undefined
        Owner?: {} | undefined
        ShortDescription?: {} | undefined
        Type?: {} | undefined
        Distributor?: {} | undefined
        HasDefaultPath?: {} | undefined
        SupportEmail?: {} | undefined
        SupportDescription?: {} | undefined
        SupportUrl?: {} | undefined
      }
    | undefined
  ProvisioningArtifacts?: {} | undefined
}
type DescribeProvisionedProductInput = {
  AcceptLanguage?: {} | undefined
  Id?: {} | undefined
  Name?: {} | undefined
}
type DescribeProvisionedProductOutput = {
  ProvisionedProductDetail?:
    | {
        Name?: {} | undefined
        Arn?: {} | undefined
        Type?: {} | undefined
        Id?: {} | undefined
        Status?: {} | undefined
        StatusMessage?: {} | undefined
        CreatedTime?: {} | undefined
        IdempotencyToken?: {} | undefined
        LastRecordId?: {} | undefined
        LastProvisioningRecordId?: {} | undefined
        LastSuccessfulProvisioningRecordId?: {} | undefined
        ProductId?: {} | undefined
        ProvisioningArtifactId?: {} | undefined
        LaunchRoleArn?: {} | undefined
      }
    | undefined
  CloudWatchDashboards?: {} | undefined
}
type DescribeProvisionedProductPlanInput = {
  AcceptLanguage?: {} | undefined
  PlanId: {}
  PageSize?: {} | undefined
  PageToken?: {} | undefined
}
type DescribeProvisionedProductPlanOutput = {
  ProvisionedProductPlanDetails?:
    | {
        CreatedTime?: {} | undefined
        PathId?: {} | undefined
        ProductId?: {} | undefined
        PlanName?: {} | undefined
        PlanId?: {} | undefined
        ProvisionProductId?: {} | undefined
        ProvisionProductName?: {} | undefined
        PlanType?: {} | undefined
        ProvisioningArtifactId?: {} | undefined
        Status?: {} | undefined
        UpdatedTime?: {} | undefined
        NotificationArns?: {} | undefined
        ProvisioningParameters?: {} | undefined
        Tags?: {} | undefined
        StatusMessage?: {} | undefined
      }
    | undefined
  ResourceChanges?: {} | undefined
  NextPageToken?: {} | undefined
}
type DescribeProvisioningArtifactInput = {
  AcceptLanguage?: {} | undefined
  ProvisioningArtifactId?: {} | undefined
  ProductId?: {} | undefined
  ProvisioningArtifactName?: {} | undefined
  ProductName?: {} | undefined
  Verbose?: {} | undefined
}
type DescribeProvisioningArtifactOutput = {
  ProvisioningArtifactDetail?:
    | {
        Id?: {} | undefined
        Name?: {} | undefined
        Description?: {} | undefined
        Type?: {} | undefined
        CreatedTime?: {} | undefined
        Active?: {} | undefined
        Guidance?: {} | undefined
        SourceRevision?: {} | undefined
      }
    | undefined
  Info?: {} | undefined
  Status?: {} | undefined
}
type DescribeProvisioningParametersInput = {
  AcceptLanguage?: {} | undefined
  ProductId?: {} | undefined
  ProductName?: {} | undefined
  ProvisioningArtifactId?: {} | undefined
  ProvisioningArtifactName?: {} | undefined
  PathId?: {} | undefined
  PathName?: {} | undefined
}
type DescribeProvisioningParametersOutput = {
  ProvisioningArtifactParameters?: {} | undefined
  ConstraintSummaries?: {} | undefined
  UsageInstructions?: {} | undefined
  TagOptions?: {} | undefined
  ProvisioningArtifactPreferences?:
    | { StackSetAccounts?: {} | undefined; StackSetRegions?: {} | undefined }
    | undefined
  ProvisioningArtifactOutputs?: {} | undefined
  ProvisioningArtifactOutputKeys?: {} | undefined
}
type DescribeRecordInput = {
  AcceptLanguage?: {} | undefined
  Id: {}
  PageToken?: {} | undefined
  PageSize?: {} | undefined
}
type DescribeRecordOutput = {
  RecordDetail?:
    | {
        RecordId?: {} | undefined
        ProvisionedProductName?: {} | undefined
        Status?: {} | undefined
        CreatedTime?: {} | undefined
        UpdatedTime?: {} | undefined
        ProvisionedProductType?: {} | undefined
        RecordType?: {} | undefined
        ProvisionedProductId?: {} | undefined
        ProductId?: {} | undefined
        ProvisioningArtifactId?: {} | undefined
        PathId?: {} | undefined
        RecordErrors?: {} | undefined
        RecordTags?: {} | undefined
        LaunchRoleArn?: {} | undefined
      }
    | undefined
  RecordOutputs?: {} | undefined
  NextPageToken?: {} | undefined
}
type DescribeServiceActionInput = { Id: {}; AcceptLanguage?: {} | undefined }
type DescribeServiceActionOutput = {
  ServiceActionDetail?:
    | {
        ServiceActionSummary?:
          | {
              Id?: {} | undefined
              Name?: {} | undefined
              Description?: {} | undefined
              DefinitionType?: {} | undefined
            }
          | undefined
        Definition?: {} | undefined
      }
    | undefined
}
type DescribeServiceActionExecutionParametersInput = {
  ProvisionedProductId: {}
  ServiceActionId: {}
  AcceptLanguage?: {} | undefined
}
type DescribeServiceActionExecutionParametersOutput = { ServiceActionParameters?: {} | undefined }
type DescribeTagOptionInput = { Id: {} }
type DescribeTagOptionOutput = {
  TagOptionDetail?:
    | {
        Key?: {} | undefined
        Value?: {} | undefined
        Active?: {} | undefined
        Id?: {} | undefined
        Owner?: {} | undefined
      }
    | undefined
}
type DisableAWSOrganizationsAccessInput = { [x: string]: unknown }
type DisableAWSOrganizationsAccessOutput = { [x: string]: unknown }
type DisassociateBudgetFromResourceInput = { BudgetName: {}; ResourceId: {} }
type DisassociateBudgetFromResourceOutput = { [x: string]: unknown }
type DisassociatePrincipalFromPortfolioInput = {
  AcceptLanguage?: {} | undefined
  PortfolioId: {}
  PrincipalARN: {}
  PrincipalType?: {} | undefined
}
type DisassociatePrincipalFromPortfolioOutput = { [x: string]: unknown }
type DisassociateProductFromPortfolioInput = {
  AcceptLanguage?: {} | undefined
  ProductId: {}
  PortfolioId: {}
}
type DisassociateProductFromPortfolioOutput = { [x: string]: unknown }
type DisassociateServiceActionFromProvisioningArtifactInput = {
  ProductId: {}
  ProvisioningArtifactId: {}
  ServiceActionId: {}
  AcceptLanguage?: {} | undefined
}
type DisassociateServiceActionFromProvisioningArtifactOutput = { [x: string]: unknown }
type DisassociateTagOptionFromResourceInput = { ResourceId: {}; TagOptionId: {} }
type DisassociateTagOptionFromResourceOutput = { [x: string]: unknown }
type EnableAWSOrganizationsAccessInput = { [x: string]: unknown }
type EnableAWSOrganizationsAccessOutput = { [x: string]: unknown }
type ExecuteProvisionedProductPlanInput = {
  AcceptLanguage?: {} | undefined
  PlanId: {}
  IdempotencyToken: {}
}
type ExecuteProvisionedProductPlanOutput = {
  RecordDetail?:
    | {
        RecordId?: {} | undefined
        ProvisionedProductName?: {} | undefined
        Status?: {} | undefined
        CreatedTime?: {} | undefined
        UpdatedTime?: {} | undefined
        ProvisionedProductType?: {} | undefined
        RecordType?: {} | undefined
        ProvisionedProductId?: {} | undefined
        ProductId?: {} | undefined
        ProvisioningArtifactId?: {} | undefined
        PathId?: {} | undefined
        RecordErrors?: {} | undefined
        RecordTags?: {} | undefined
        LaunchRoleArn?: {} | undefined
      }
    | undefined
}
type ExecuteProvisionedProductServiceActionInput = {
  ProvisionedProductId: {}
  ServiceActionId: {}
  ExecuteToken: {}
  AcceptLanguage?: {} | undefined
  Parameters?: {} | undefined
}
type ExecuteProvisionedProductServiceActionOutput = {
  RecordDetail?:
    | {
        RecordId?: {} | undefined
        ProvisionedProductName?: {} | undefined
        Status?: {} | undefined
        CreatedTime?: {} | undefined
        UpdatedTime?: {} | undefined
        ProvisionedProductType?: {} | undefined
        RecordType?: {} | undefined
        ProvisionedProductId?: {} | undefined
        ProductId?: {} | undefined
        ProvisioningArtifactId?: {} | undefined
        PathId?: {} | undefined
        RecordErrors?: {} | undefined
        RecordTags?: {} | undefined
        LaunchRoleArn?: {} | undefined
      }
    | undefined
}
type GetAWSOrganizationsAccessStatusInput = { [x: string]: unknown }
type GetAWSOrganizationsAccessStatusOutput = { AccessStatus?: {} | undefined }
type GetProvisionedProductOutputsInput = {
  AcceptLanguage?: {} | undefined
  ProvisionedProductId?: {} | undefined
  ProvisionedProductName?: {} | undefined
  OutputKeys?: {} | undefined
  PageSize?: {} | undefined
  PageToken?: {} | undefined
}
type GetProvisionedProductOutputsOutput = {
  Outputs?: {} | undefined
  NextPageToken?: {} | undefined
}
type ImportAsProvisionedProductInput = {
  AcceptLanguage?: {} | undefined
  ProductId: {}
  ProvisioningArtifactId: {}
  ProvisionedProductName: {}
  PhysicalId: {}
  IdempotencyToken: {}
}
type RecordDetail = {
  RecordId?: {} | undefined
  ProvisionedProductName?: {} | undefined
  Status?: {} | undefined
  CreatedTime?: {} | undefined
  UpdatedTime?: {} | undefined
  ProvisionedProductType?: {} | undefined
  RecordType?: {} | undefined
  ProvisionedProductId?: {} | undefined
  ProductId?: {} | undefined
  ProvisioningArtifactId?: {} | undefined
  PathId?: {} | undefined
  RecordErrors?: {} | undefined
  RecordTags?: {} | undefined
  LaunchRoleArn?: {} | undefined
}
type ImportAsProvisionedProductOutput = { RecordDetail?: RecordDetail | undefined }
type ListAcceptedPortfolioSharesInput = {
  AcceptLanguage?: {} | undefined
  PageToken?: {} | undefined
  PageSize?: {} | undefined
  PortfolioShareType?: {} | undefined
}
type ListAcceptedPortfolioSharesOutput = {
  PortfolioDetails?: {} | undefined
  NextPageToken?: {} | undefined
}
type ListBudgetsForResourceInput = {
  AcceptLanguage?: {} | undefined
  ResourceId: {}
  PageSize?: {} | undefined
  PageToken?: {} | undefined
}
type ListBudgetsForResourceOutput = { Budgets?: {} | undefined; NextPageToken?: {} | undefined }
type ListConstraintsForPortfolioInput = {
  AcceptLanguage?: {} | undefined
  PortfolioId: {}
  ProductId?: {} | undefined
  PageSize?: {} | undefined
  PageToken?: {} | undefined
}
type ListConstraintsForPortfolioOutput = {
  ConstraintDetails?: {} | undefined
  NextPageToken?: {} | undefined
}
type ListLaunchPathsInput = {
  AcceptLanguage?: {} | undefined
  ProductId: {}
  PageSize?: {} | undefined
  PageToken?: {} | undefined
}
type ListLaunchPathsOutput = {
  LaunchPathSummaries?: {} | undefined
  NextPageToken?: {} | undefined
}
type ListOrganizationPortfolioAccessInput = {
  AcceptLanguage?: {} | undefined
  PortfolioId: {}
  OrganizationNodeType: {}
  PageToken?: {} | undefined
  PageSize?: {} | undefined
}
type ListOrganizationPortfolioAccessOutput = {
  OrganizationNodes?: {} | undefined
  NextPageToken?: {} | undefined
}
type ListPortfolioAccessInput = {
  AcceptLanguage?: {} | undefined
  PortfolioId: {}
  OrganizationParentId?: {} | undefined
  PageToken?: {} | undefined
  PageSize?: {} | undefined
}
type ListPortfolioAccessOutput = { AccountIds?: {} | undefined; NextPageToken?: {} | undefined }
type ListPortfoliosInput = {
  AcceptLanguage?: {} | undefined
  PageToken?: {} | undefined
  PageSize?: {} | undefined
}
type ListPortfoliosOutput = { PortfolioDetails?: {} | undefined; NextPageToken?: {} | undefined }
type ListPortfoliosForProductInput = {
  AcceptLanguage?: {} | undefined
  ProductId: {}
  PageToken?: {} | undefined
  PageSize?: {} | undefined
}
type ListPortfoliosForProductOutput = {
  PortfolioDetails?: {} | undefined
  NextPageToken?: {} | undefined
}
type ListPrincipalsForPortfolioInput = {
  AcceptLanguage?: {} | undefined
  PortfolioId: {}
  PageSize?: {} | undefined
  PageToken?: {} | undefined
}
type ListPrincipalsForPortfolioOutput = {
  Principals?: {} | undefined
  NextPageToken?: {} | undefined
}
type ListProvisionedProductPlansInput = {
  AcceptLanguage?: {} | undefined
  ProvisionProductId?: {} | undefined
  PageSize?: {} | undefined
  PageToken?: {} | undefined
  AccessLevelFilter?: { Key?: {} | undefined; Value?: {} | undefined } | undefined
}
type ListProvisionedProductPlansOutput = {
  ProvisionedProductPlans?: {} | undefined
  NextPageToken?: {} | undefined
}
type ListProvisioningArtifactsInput = { AcceptLanguage?: {} | undefined; ProductId: {} }
type ListProvisioningArtifactsOutput = {
  ProvisioningArtifactDetails?: {} | undefined
  NextPageToken?: {} | undefined
}
type ListProvisioningArtifactsForServiceActionInput = {
  ServiceActionId: {}
  PageSize?: {} | undefined
  PageToken?: {} | undefined
  AcceptLanguage?: {} | undefined
}
type ListProvisioningArtifactsForServiceActionOutput = {
  ProvisioningArtifactViews?: {} | undefined
  NextPageToken?: {} | undefined
}
type ListRecordHistoryInput = {
  AcceptLanguage?: {} | undefined
  AccessLevelFilter?: { Key?: {} | undefined; Value?: {} | undefined } | undefined
  SearchFilter?: { Key?: {} | undefined; Value?: {} | undefined } | undefined
  PageSize?: {} | undefined
  PageToken?: {} | undefined
}
type ListRecordHistoryOutput = { RecordDetails?: {} | undefined; NextPageToken?: {} | undefined }
type ListResourcesForTagOptionInput = {
  TagOptionId: {}
  ResourceType?: {} | undefined
  PageSize?: {} | undefined
  PageToken?: {} | undefined
}
type ListResourcesForTagOptionOutput = {
  ResourceDetails?: {} | undefined
  PageToken?: {} | undefined
}
type ListServiceActionsInput = {
  AcceptLanguage?: {} | undefined
  PageSize?: {} | undefined
  PageToken?: {} | undefined
}
type ListServiceActionsOutput = {
  ServiceActionSummaries?: {} | undefined
  NextPageToken?: {} | undefined
}
type ListServiceActionsForProvisioningArtifactInput = {
  ProductId: {}
  ProvisioningArtifactId: {}
  PageSize?: {} | undefined
  PageToken?: {} | undefined
  AcceptLanguage?: {} | undefined
}
type ListServiceActionsForProvisioningArtifactOutput = {
  ServiceActionSummaries?: {} | undefined
  NextPageToken?: {} | undefined
}
type ListStackInstancesForProvisionedProductInput = {
  AcceptLanguage?: {} | undefined
  ProvisionedProductId: {}
  PageToken?: {} | undefined
  PageSize?: {} | undefined
}
type ListStackInstancesForProvisionedProductOutput = {
  StackInstances?: {} | undefined
  NextPageToken?: {} | undefined
}
type ListTagOptionsInput = {
  Filters?: { Key?: {} | undefined; Value?: {} | undefined; Active?: {} | undefined } | undefined
  PageSize?: {} | undefined
  PageToken?: {} | undefined
}
type ListTagOptionsOutput = { TagOptionDetails?: {} | undefined; PageToken?: {} | undefined }
type NotifyProvisionProductEngineWorkflowResultInput = {
  WorkflowToken: {}
  RecordId: {}
  Status: {}
  FailureReason?: {} | undefined
  ResourceIdentifier?:
    | { UniqueTag?: { Key?: {} | undefined; Value?: {} | undefined } | undefined }
    | undefined
  Outputs?: {} | undefined
  IdempotencyToken: {}
}
type NotifyProvisionProductEngineWorkflowResultOutput = { [x: string]: unknown }
type NotifyTerminateProvisionedProductEngineWorkflowResultInput = {
  WorkflowToken: {}
  RecordId: {}
  Status: {}
  FailureReason?: {} | undefined
  IdempotencyToken: {}
}
type NotifyTerminateProvisionedProductEngineWorkflowResultOutput = { [x: string]: unknown }
type NotifyUpdateProvisionedProductEngineWorkflowResultInput = {
  WorkflowToken: {}
  RecordId: {}
  Status: {}
  FailureReason?: {} | undefined
  Outputs?: {} | undefined
  IdempotencyToken: {}
}
type NotifyUpdateProvisionedProductEngineWorkflowResultOutput = { [x: string]: unknown }
type ProvisionProductInput = {
  AcceptLanguage?: {} | undefined
  ProductId?: {} | undefined
  ProductName?: {} | undefined
  ProvisioningArtifactId?: {} | undefined
  ProvisioningArtifactName?: {} | undefined
  PathId?: {} | undefined
  PathName?: {} | undefined
  ProvisionedProductName: {}
  ProvisioningParameters?: {} | undefined
  ProvisioningPreferences?:
    | {
        StackSetAccounts?: {} | undefined
        StackSetRegions?: {} | undefined
        StackSetFailureToleranceCount?: {} | undefined
        StackSetFailureTolerancePercentage?: {} | undefined
        StackSetMaxConcurrencyCount?: {} | undefined
        StackSetMaxConcurrencyPercentage?: {} | undefined
      }
    | undefined
  Tags?: {} | undefined
  NotificationArns?: {} | undefined
  ProvisionToken: {}
}
type ProvisionProductOutput = {
  RecordDetail?:
    | {
        RecordId?: {} | undefined
        ProvisionedProductName?: {} | undefined
        Status?: {} | undefined
        CreatedTime?: {} | undefined
        UpdatedTime?: {} | undefined
        ProvisionedProductType?: {} | undefined
        RecordType?: {} | undefined
        ProvisionedProductId?: {} | undefined
        ProductId?: {} | undefined
        ProvisioningArtifactId?: {} | undefined
        PathId?: {} | undefined
        RecordErrors?: {} | undefined
        RecordTags?: {} | undefined
        LaunchRoleArn?: {} | undefined
      }
    | undefined
}
type RejectPortfolioShareInput = {
  AcceptLanguage?: {} | undefined
  PortfolioId: {}
  PortfolioShareType?: {} | undefined
}
type RejectPortfolioShareOutput = { [x: string]: unknown }
type ScanProvisionedProductsInput = {
  AcceptLanguage?: {} | undefined
  AccessLevelFilter?: { Key?: {} | undefined; Value?: {} | undefined } | undefined
  PageSize?: {} | undefined
  PageToken?: {} | undefined
}
type ScanProvisionedProductsOutput = {
  ProvisionedProducts?: {} | undefined
  NextPageToken?: {} | undefined
}
type SearchProductsInput = {
  AcceptLanguage?: {} | undefined
  Filters?: {} | undefined
  PageSize?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
  PageToken?: {} | undefined
}
type SearchProductsOutput = {
  ProductViewSummaries?: {} | undefined
  ProductViewAggregations?: {} | undefined
  NextPageToken?: {} | undefined
}
type SearchProductsAsAdminInput = {
  AcceptLanguage?: {} | undefined
  PortfolioId?: {} | undefined
  Filters?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
  PageToken?: {} | undefined
  PageSize?: {} | undefined
  ProductSource?: {} | undefined
}
type SearchProductsAsAdminOutput = {
  ProductViewDetails?: {} | undefined
  NextPageToken?: {} | undefined
}
type SearchProvisionedProductsInput = {
  AcceptLanguage?: {} | undefined
  AccessLevelFilter?: { Key?: {} | undefined; Value?: {} | undefined } | undefined
  Filters?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
  PageSize?: {} | undefined
  PageToken?: {} | undefined
}
type SearchProvisionedProductsOutput = {
  ProvisionedProducts?: {} | undefined
  TotalResultsCount?: {} | undefined
  NextPageToken?: {} | undefined
}
type TerminateProvisionedProductInput = {
  ProvisionedProductName?: {} | undefined
  ProvisionedProductId?: {} | undefined
  TerminateToken: {}
  IgnoreErrors?: {} | undefined
  AcceptLanguage?: {} | undefined
  RetainPhysicalResources?: {} | undefined
}
type TerminateProvisionedProductOutput = {
  RecordDetail?:
    | {
        RecordId?: {} | undefined
        ProvisionedProductName?: {} | undefined
        Status?: {} | undefined
        CreatedTime?: {} | undefined
        UpdatedTime?: {} | undefined
        ProvisionedProductType?: {} | undefined
        RecordType?: {} | undefined
        ProvisionedProductId?: {} | undefined
        ProductId?: {} | undefined
        ProvisioningArtifactId?: {} | undefined
        PathId?: {} | undefined
        RecordErrors?: {} | undefined
        RecordTags?: {} | undefined
        LaunchRoleArn?: {} | undefined
      }
    | undefined
}
type UpdateConstraintInput = {
  AcceptLanguage?: {} | undefined
  Id: {}
  Description?: {} | undefined
  Parameters?: {} | undefined
}
type UpdateConstraintOutput = {
  ConstraintDetail?:
    | {
        ConstraintId?: {} | undefined
        Type?: {} | undefined
        Description?: {} | undefined
        Owner?: {} | undefined
        ProductId?: {} | undefined
        PortfolioId?: {} | undefined
      }
    | undefined
  ConstraintParameters?: {} | undefined
  Status?: {} | undefined
}
type UpdatePortfolioInput = {
  AcceptLanguage?: {} | undefined
  Id: {}
  DisplayName?: {} | undefined
  Description?: {} | undefined
  ProviderName?: {} | undefined
  AddTags?: {} | undefined
  RemoveTags?: {} | undefined
}
type UpdatePortfolioOutput = {
  PortfolioDetail?:
    | {
        Id?: {} | undefined
        ARN?: {} | undefined
        DisplayName?: {} | undefined
        Description?: {} | undefined
        CreatedTime?: {} | undefined
        ProviderName?: {} | undefined
      }
    | undefined
  Tags?: {} | undefined
}
type OrganizationNode = { Type?: {} | undefined; Value?: {} | undefined }
type UpdatePortfolioShareInput = {
  AcceptLanguage?: {} | undefined
  PortfolioId: {}
  AccountId?: {} | undefined
  OrganizationNode?: OrganizationNode | undefined
  ShareTagOptions?: {} | undefined
  SharePrincipals?: {} | undefined
}
type UpdatePortfolioShareOutput = { PortfolioShareToken?: {} | undefined; Status?: {} | undefined }
type UpdateProductInput = {
  AcceptLanguage?: {} | undefined
  Id: {}
  Name?: {} | undefined
  Owner?: {} | undefined
  Description?: {} | undefined
  Distributor?: {} | undefined
  SupportDescription?: {} | undefined
  SupportEmail?: {} | undefined
  SupportUrl?: {} | undefined
  AddTags?: {} | undefined
  RemoveTags?: {} | undefined
  SourceConnection?:
    | {
        Type?: {} | undefined
        ConnectionParameters: {
          CodeStar?: { ConnectionArn: {}; Repository: {}; Branch: {}; ArtifactPath: {} } | undefined
        }
      }
    | undefined
}
type UpdateProductOutput = {
  ProductViewDetail?:
    | {
        ProductViewSummary?:
          | {
              Id?: {} | undefined
              ProductId?: {} | undefined
              Name?: {} | undefined
              Owner?: {} | undefined
              ShortDescription?: {} | undefined
              Type?: {} | undefined
              Distributor?: {} | undefined
              HasDefaultPath?: {} | undefined
              SupportEmail?: {} | undefined
              SupportDescription?: {} | undefined
              SupportUrl?: {} | undefined
            }
          | undefined
        Status?: {} | undefined
        ProductARN?: {} | undefined
        CreatedTime?: {} | undefined
        SourceConnection?:
          | {
              Type?: {} | undefined
              ConnectionParameters?:
                | {
                    CodeStar?:
                      | { ConnectionArn: {}; Repository: {}; Branch: {}; ArtifactPath: {} }
                      | undefined
                  }
                | undefined
              LastSync?:
                | {
                    LastSyncTime?: {} | undefined
                    LastSyncStatus?: {} | undefined
                    LastSyncStatusMessage?: {} | undefined
                    LastSuccessfulSyncTime?: {} | undefined
                    LastSuccessfulSyncProvisioningArtifactId?: {} | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
  Tags?: {} | undefined
}
type UpdateProvisionedProductInput = {
  AcceptLanguage?: {} | undefined
  ProvisionedProductName?: {} | undefined
  ProvisionedProductId?: {} | undefined
  ProductId?: {} | undefined
  ProductName?: {} | undefined
  ProvisioningArtifactId?: {} | undefined
  ProvisioningArtifactName?: {} | undefined
  PathId?: {} | undefined
  PathName?: {} | undefined
  ProvisioningParameters?: {} | undefined
  ProvisioningPreferences?:
    | {
        StackSetAccounts?: {} | undefined
        StackSetRegions?: {} | undefined
        StackSetFailureToleranceCount?: {} | undefined
        StackSetFailureTolerancePercentage?: {} | undefined
        StackSetMaxConcurrencyCount?: {} | undefined
        StackSetMaxConcurrencyPercentage?: {} | undefined
        StackSetOperationType?: {} | undefined
      }
    | undefined
  Tags?: {} | undefined
  UpdateToken: {}
}
type UpdateProvisionedProductOutput = {
  RecordDetail?:
    | {
        RecordId?: {} | undefined
        ProvisionedProductName?: {} | undefined
        Status?: {} | undefined
        CreatedTime?: {} | undefined
        UpdatedTime?: {} | undefined
        ProvisionedProductType?: {} | undefined
        RecordType?: {} | undefined
        ProvisionedProductId?: {} | undefined
        ProductId?: {} | undefined
        ProvisioningArtifactId?: {} | undefined
        PathId?: {} | undefined
        RecordErrors?: {} | undefined
        RecordTags?: {} | undefined
        LaunchRoleArn?: {} | undefined
      }
    | undefined
}
type UpdateProvisionedProductPropertiesInput = {
  AcceptLanguage?: {} | undefined
  ProvisionedProductId: {}
  ProvisionedProductProperties: {}
  IdempotencyToken: {}
}
type UpdateProvisionedProductPropertiesOutput = {
  ProvisionedProductId?: {} | undefined
  ProvisionedProductProperties?: {} | undefined
  RecordId?: {} | undefined
  Status?: {} | undefined
}
type UpdateProvisioningArtifactInput = {
  AcceptLanguage?: {} | undefined
  ProductId: {}
  ProvisioningArtifactId: {}
  Name?: {} | undefined
  Description?: {} | undefined
  Active?: {} | undefined
  Guidance?: {} | undefined
}
type UpdateProvisioningArtifactOutput = {
  ProvisioningArtifactDetail?:
    | {
        Id?: {} | undefined
        Name?: {} | undefined
        Description?: {} | undefined
        Type?: {} | undefined
        CreatedTime?: {} | undefined
        Active?: {} | undefined
        Guidance?: {} | undefined
        SourceRevision?: {} | undefined
      }
    | undefined
  Info?: {} | undefined
  Status?: {} | undefined
}
type UpdateServiceActionInput = {
  Id: {}
  Name?: {} | undefined
  Definition?: {} | undefined
  Description?: {} | undefined
  AcceptLanguage?: {} | undefined
}
type UpdateServiceActionOutput = {
  ServiceActionDetail?:
    | {
        ServiceActionSummary?:
          | {
              Id?: {} | undefined
              Name?: {} | undefined
              Description?: {} | undefined
              DefinitionType?: {} | undefined
            }
          | undefined
        Definition?: {} | undefined
      }
    | undefined
}
type UpdateTagOptionInput = { Id: {}; Value?: {} | undefined; Active?: {} | undefined }
type UpdateTagOptionOutput = {
  TagOptionDetail?:
    | {
        Key?: {} | undefined
        Value?: {} | undefined
        Active?: {} | undefined
        Id?: {} | undefined
        Owner?: {} | undefined
      }
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=AWS242ServiceCatalogService.AcceptPortfolioShare': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.AcceptPortfolioShare'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AcceptPortfolioShareInput }
        output: AcceptPortfolioShareOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.AssociateBudgetWithResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.AssociateBudgetWithResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AssociateBudgetWithResourceInput }
        output: AssociateBudgetWithResourceOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.AssociatePrincipalWithPortfolio': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.AssociatePrincipalWithPortfolio'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AssociatePrincipalWithPortfolioInput }
        output: AssociatePrincipalWithPortfolioOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.AssociateProductWithPortfolio': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.AssociateProductWithPortfolio'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AssociateProductWithPortfolioInput }
        output: AssociateProductWithPortfolioOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.AssociateServiceActionWithProvisioningArtifact': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.AssociateServiceActionWithProvisioningArtifact'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AssociateServiceActionWithProvisioningArtifactInput }
        output: AssociateServiceActionWithProvisioningArtifactOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.AssociateTagOptionWithResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.AssociateTagOptionWithResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AssociateTagOptionWithResourceInput }
        output: AssociateTagOptionWithResourceOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.BatchAssociateServiceActionWithProvisioningArtifact': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.BatchAssociateServiceActionWithProvisioningArtifact'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchAssociateServiceActionWithProvisioningArtifactInput }
        output: BatchAssociateServiceActionWithProvisioningArtifactOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.BatchDisassociateServiceActionFromProvisioningArtifact': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.BatchDisassociateServiceActionFromProvisioningArtifact'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchDisassociateServiceActionFromProvisioningArtifactInput }
        output: BatchDisassociateServiceActionFromProvisioningArtifactOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.CopyProduct': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.CopyProduct'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CopyProductInput }
        output: CopyProductOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.CreateConstraint': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.CreateConstraint'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateConstraintInput }
        output: CreateConstraintOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolio': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.CreatePortfolio'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreatePortfolioInput }
        output: CreatePortfolioOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolioShare': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.CreatePortfolioShare'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreatePortfolioShareInput }
        output: CreatePortfolioShareOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.CreateProduct': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.CreateProduct'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateProductInput }
        output: CreateProductOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.CreateProvisionedProductPlan': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.CreateProvisionedProductPlan'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateProvisionedProductPlanInput }
        output: CreateProvisionedProductPlanOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.CreateProvisioningArtifact': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.CreateProvisioningArtifact'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateProvisioningArtifactInput }
        output: CreateProvisioningArtifactOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.CreateServiceAction': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.CreateServiceAction'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateServiceActionInput }
        output: CreateServiceActionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.CreateTagOption': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.CreateTagOption'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateTagOptionInput }
        output: CreateTagOptionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.DeleteConstraint': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.DeleteConstraint'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteConstraintInput }
        output: DeleteConstraintOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolio': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.DeletePortfolio'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeletePortfolioInput }
        output: DeletePortfolioOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolioShare': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.DeletePortfolioShare'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeletePortfolioShareInput }
        output: DeletePortfolioShareOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.DeleteProduct': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.DeleteProduct'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteProductInput }
        output: DeleteProductOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisionedProductPlan': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.DeleteProvisionedProductPlan'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteProvisionedProductPlanInput }
        output: DeleteProvisionedProductPlanOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisioningArtifact': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.DeleteProvisioningArtifact'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteProvisioningArtifactInput }
        output: DeleteProvisioningArtifactOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.DeleteServiceAction': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.DeleteServiceAction'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteServiceActionInput }
        output: DeleteServiceActionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.DeleteTagOption': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.DeleteTagOption'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteTagOptionInput }
        output: DeleteTagOptionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeConstraint': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.DescribeConstraint'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeConstraintInput }
        output: DescribeConstraintOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeCopyProductStatus': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.DescribeCopyProductStatus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeCopyProductStatusInput }
        output: DescribeCopyProductStatusOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolio': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.DescribePortfolio'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribePortfolioInput }
        output: DescribePortfolioOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolioShareStatus': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.DescribePortfolioShareStatus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribePortfolioShareStatusInput }
        output: DescribePortfolioShareStatusOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolioShares': {
      $post: {
        input: { query: { PageSize?: string | undefined; PageToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.DescribePortfolioShares'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribePortfolioSharesInput }
        output: DescribePortfolioSharesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProduct': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.DescribeProduct'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeProductInput }
        output: DescribeProductOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProductAsAdmin': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.DescribeProductAsAdmin'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeProductAsAdminInput }
        output: DescribeProductAsAdminOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProductView': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.DescribeProductView'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeProductViewInput }
        output: DescribeProductViewOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProduct': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.DescribeProvisionedProduct'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeProvisionedProductInput }
        output: DescribeProvisionedProductOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProductPlan': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.DescribeProvisionedProductPlan'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeProvisionedProductPlanInput }
        output: DescribeProvisionedProductPlanOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningArtifact': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.DescribeProvisioningArtifact'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeProvisioningArtifactInput }
        output: DescribeProvisioningArtifactOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningParameters': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.DescribeProvisioningParameters'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeProvisioningParametersInput }
        output: DescribeProvisioningParametersOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeRecord': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.DescribeRecord'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeRecordInput }
        output: DescribeRecordOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceAction': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.DescribeServiceAction'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeServiceActionInput }
        output: DescribeServiceActionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceActionExecutionParameters': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.DescribeServiceActionExecutionParameters'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeServiceActionExecutionParametersInput }
        output: DescribeServiceActionExecutionParametersOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.DescribeTagOption': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.DescribeTagOption'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeTagOptionInput }
        output: DescribeTagOptionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.DisableAWSOrganizationsAccess': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.DisableAWSOrganizationsAccess'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisableAWSOrganizationsAccessInput }
        output: DisableAWSOrganizationsAccessOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.DisassociateBudgetFromResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.DisassociateBudgetFromResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisassociateBudgetFromResourceInput }
        output: DisassociateBudgetFromResourceOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.DisassociatePrincipalFromPortfolio': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.DisassociatePrincipalFromPortfolio'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisassociatePrincipalFromPortfolioInput }
        output: DisassociatePrincipalFromPortfolioOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.DisassociateProductFromPortfolio': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.DisassociateProductFromPortfolio'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisassociateProductFromPortfolioInput }
        output: DisassociateProductFromPortfolioOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.DisassociateServiceActionFromProvisioningArtifact': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.DisassociateServiceActionFromProvisioningArtifact'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisassociateServiceActionFromProvisioningArtifactInput }
        output: DisassociateServiceActionFromProvisioningArtifactOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.DisassociateTagOptionFromResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.DisassociateTagOptionFromResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisassociateTagOptionFromResourceInput }
        output: DisassociateTagOptionFromResourceOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.EnableAWSOrganizationsAccess': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.EnableAWSOrganizationsAccess'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: EnableAWSOrganizationsAccessInput }
        output: EnableAWSOrganizationsAccessOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductPlan': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.ExecuteProvisionedProductPlan'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ExecuteProvisionedProductPlanInput }
        output: ExecuteProvisionedProductPlanOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductServiceAction': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.ExecuteProvisionedProductServiceAction'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ExecuteProvisionedProductServiceActionInput }
        output: ExecuteProvisionedProductServiceActionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.GetAWSOrganizationsAccessStatus': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.GetAWSOrganizationsAccessStatus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetAWSOrganizationsAccessStatusInput }
        output: GetAWSOrganizationsAccessStatusOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.GetProvisionedProductOutputs': {
      $post: {
        input: { query: { PageSize?: string | undefined; PageToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.GetProvisionedProductOutputs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetProvisionedProductOutputsInput }
        output: GetProvisionedProductOutputsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.ImportAsProvisionedProduct': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.ImportAsProvisionedProduct'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ImportAsProvisionedProductInput }
        output: ImportAsProvisionedProductOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListAcceptedPortfolioShares': {
      $post: {
        input: { query: { PageSize?: string | undefined; PageToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.ListAcceptedPortfolioShares'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListAcceptedPortfolioSharesInput }
        output: ListAcceptedPortfolioSharesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListBudgetsForResource': {
      $post: {
        input: { query: { PageSize?: string | undefined; PageToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.ListBudgetsForResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListBudgetsForResourceInput }
        output: ListBudgetsForResourceOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListConstraintsForPortfolio': {
      $post: {
        input: { query: { PageSize?: string | undefined; PageToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.ListConstraintsForPortfolio'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListConstraintsForPortfolioInput }
        output: ListConstraintsForPortfolioOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListLaunchPaths': {
      $post: {
        input: { query: { PageSize?: string | undefined; PageToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.ListLaunchPaths'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListLaunchPathsInput }
        output: ListLaunchPathsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListOrganizationPortfolioAccess': {
      $post: {
        input: { query: { PageSize?: string | undefined; PageToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.ListOrganizationPortfolioAccess'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListOrganizationPortfolioAccessInput }
        output: ListOrganizationPortfolioAccessOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListPortfolioAccess': {
      $post: {
        input: { query: { PageSize?: string | undefined; PageToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.ListPortfolioAccess'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListPortfolioAccessInput }
        output: ListPortfolioAccessOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListPortfolios': {
      $post: {
        input: { query: { PageSize?: string | undefined; PageToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.ListPortfolios'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListPortfoliosInput }
        output: ListPortfoliosOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListPortfoliosForProduct': {
      $post: {
        input: { query: { PageSize?: string | undefined; PageToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.ListPortfoliosForProduct'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListPortfoliosForProductInput }
        output: ListPortfoliosForProductOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListPrincipalsForPortfolio': {
      $post: {
        input: { query: { PageSize?: string | undefined; PageToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.ListPrincipalsForPortfolio'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListPrincipalsForPortfolioInput }
        output: ListPrincipalsForPortfolioOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListProvisionedProductPlans': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.ListProvisionedProductPlans'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListProvisionedProductPlansInput }
        output: ListProvisionedProductPlansOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifacts': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.ListProvisioningArtifacts'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListProvisioningArtifactsInput }
        output: ListProvisioningArtifactsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifactsForServiceAction': {
      $post: {
        input: { query: { PageSize?: string | undefined; PageToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.ListProvisioningArtifactsForServiceAction'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListProvisioningArtifactsForServiceActionInput }
        output: ListProvisioningArtifactsForServiceActionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListRecordHistory': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.ListRecordHistory'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListRecordHistoryInput }
        output: ListRecordHistoryOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListResourcesForTagOption': {
      $post: {
        input: { query: { PageSize?: string | undefined; PageToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.ListResourcesForTagOption'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListResourcesForTagOptionInput }
        output: ListResourcesForTagOptionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListServiceActions': {
      $post: {
        input: { query: { PageSize?: string | undefined; PageToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.ListServiceActions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListServiceActionsInput }
        output: ListServiceActionsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListServiceActionsForProvisioningArtifact': {
      $post: {
        input: { query: { PageSize?: string | undefined; PageToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.ListServiceActionsForProvisioningArtifact'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListServiceActionsForProvisioningArtifactInput }
        output: ListServiceActionsForProvisioningArtifactOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListStackInstancesForProvisionedProduct': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.ListStackInstancesForProvisionedProduct'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListStackInstancesForProvisionedProductInput }
        output: ListStackInstancesForProvisionedProductOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.ListTagOptions': {
      $post: {
        input: { query: { PageSize?: string | undefined; PageToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.ListTagOptions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTagOptionsInput }
        output: ListTagOptionsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.NotifyProvisionProductEngineWorkflowResult': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.NotifyProvisionProductEngineWorkflowResult'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: NotifyProvisionProductEngineWorkflowResultInput }
        output: NotifyProvisionProductEngineWorkflowResultOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.NotifyTerminateProvisionedProductEngineWorkflowResult': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.NotifyTerminateProvisionedProductEngineWorkflowResult'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: NotifyTerminateProvisionedProductEngineWorkflowResultInput }
        output: NotifyTerminateProvisionedProductEngineWorkflowResultOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.NotifyUpdateProvisionedProductEngineWorkflowResult': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.NotifyUpdateProvisionedProductEngineWorkflowResult'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: NotifyUpdateProvisionedProductEngineWorkflowResultInput }
        output: NotifyUpdateProvisionedProductEngineWorkflowResultOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.ProvisionProduct': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.ProvisionProduct'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ProvisionProductInput }
        output: ProvisionProductOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.RejectPortfolioShare': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.RejectPortfolioShare'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RejectPortfolioShareInput }
        output: RejectPortfolioShareOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.ScanProvisionedProducts': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.ScanProvisionedProducts'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ScanProvisionedProductsInput }
        output: ScanProvisionedProductsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.SearchProducts': {
      $post: {
        input: { query: { PageSize?: string | undefined; PageToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.SearchProducts'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SearchProductsInput }
        output: SearchProductsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.SearchProductsAsAdmin': {
      $post: {
        input: { query: { PageSize?: string | undefined; PageToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.SearchProductsAsAdmin'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SearchProductsAsAdminInput }
        output: SearchProductsAsAdminOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.SearchProvisionedProducts': {
      $post: {
        input: { query: { PageSize?: string | undefined; PageToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.SearchProvisionedProducts'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SearchProvisionedProductsInput }
        output: SearchProvisionedProductsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.TerminateProvisionedProduct': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.TerminateProvisionedProduct'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TerminateProvisionedProductInput }
        output: TerminateProvisionedProductOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.UpdateConstraint': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.UpdateConstraint'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateConstraintInput }
        output: UpdateConstraintOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.UpdatePortfolio': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.UpdatePortfolio'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdatePortfolioInput }
        output: UpdatePortfolioOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.UpdatePortfolioShare': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.UpdatePortfolioShare'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdatePortfolioShareInput }
        output: UpdatePortfolioShareOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.UpdateProduct': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.UpdateProduct'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateProductInput }
        output: UpdateProductOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProduct': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.UpdateProvisionedProduct'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateProvisionedProductInput }
        output: UpdateProvisionedProductOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProductProperties': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.UpdateProvisionedProductProperties'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateProvisionedProductPropertiesInput }
        output: UpdateProvisionedProductPropertiesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisioningArtifact': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.UpdateProvisioningArtifact'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateProvisioningArtifactInput }
        output: UpdateProvisioningArtifactOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.UpdateServiceAction': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.UpdateServiceAction'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateServiceActionInput }
        output: UpdateServiceActionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWS242ServiceCatalogService.UpdateTagOption': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWS242ServiceCatalogService.UpdateTagOption'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateTagOptionInput }
        output: UpdateTagOptionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
