type CreateBudgetRequest = {
  AccountId: {}
  Budget: {
    BudgetName: {}
    BudgetLimit?: { Amount: {}; Unit: {} } | undefined
    PlannedBudgetLimits?: {} | undefined
    CostFilters?: {} | undefined
    CostTypes?:
      | {
          IncludeTax?: {} | undefined
          IncludeSubscription?: {} | undefined
          UseBlended?: {} | undefined
          IncludeRefund?: {} | undefined
          IncludeCredit?: {} | undefined
          IncludeUpfront?: {} | undefined
          IncludeRecurring?: {} | undefined
          IncludeOtherSubscription?: {} | undefined
          IncludeSupport?: {} | undefined
          IncludeDiscount?: {} | undefined
          UseAmortized?: {} | undefined
        }
      | undefined
    TimeUnit: {}
    TimePeriod?: { Start?: {} | undefined; End?: {} | undefined } | undefined
    CalculatedSpend?:
      | {
          ActualSpend: { Amount: {}; Unit: {} }
          ForecastedSpend?: { Amount: {}; Unit: {} } | undefined
        }
      | undefined
    BudgetType: {}
    LastUpdatedTime?: {} | undefined
    AutoAdjustData?:
      | {
          AutoAdjustType: {}
          HistoricalOptions?:
            | { BudgetAdjustmentPeriod: {}; LookBackAvailablePeriods?: {} | undefined }
            | undefined
          LastAutoAdjustTime?: {} | undefined
        }
      | undefined
  }
  NotificationsWithSubscribers?: {} | undefined
}
type CreateBudgetResponse = { [x: string]: unknown }
type AccountId = string
type BudgetName = string
type NotificationType = 'ACTUAL' | 'FORECASTED'
type NotificationThreshold = number
type ThresholdType = 'PERCENTAGE' | 'ABSOLUTE_VALUE'
type ActionThreshold = {
  ActionThresholdValue: NotificationThreshold
  ActionThresholdType: ThresholdType
}
type Definition = {
  IamActionDefinition?:
    | { PolicyArn: {}; Roles?: {} | undefined; Groups?: {} | undefined; Users?: {} | undefined }
    | undefined
  ScpActionDefinition?: { PolicyId: {}; TargetIds: {} } | undefined
  SsmActionDefinition?: { ActionSubType: {}; Region: {}; InstanceIds: {} } | undefined
}
type Subscriber = { SubscriptionType: {}; Address: {} }
type Subscribers = Subscriber[]
type CreateBudgetActionRequest = {
  AccountId: AccountId
  BudgetName: BudgetName
  NotificationType: NotificationType
  ActionType: {}
  ActionThreshold: ActionThreshold
  Definition: Definition
  ExecutionRoleArn: {}
  ApprovalModel: {}
  Subscribers: Subscribers
}
type CreateBudgetActionResponse = { AccountId: AccountId; BudgetName: BudgetName; ActionId: {} }
type CreateNotificationRequest = {
  AccountId: {}
  BudgetName: {}
  Notification: {
    NotificationType: {}
    ComparisonOperator: {}
    Threshold: {}
    ThresholdType?: {} | undefined
    NotificationState?: {} | undefined
  }
  Subscribers: {}
}
type CreateNotificationResponse = { [x: string]: unknown }
type CreateSubscriberRequest = {
  AccountId: {}
  BudgetName: {}
  Notification: {
    NotificationType: {}
    ComparisonOperator: {}
    Threshold: {}
    ThresholdType?: {} | undefined
    NotificationState?: {} | undefined
  }
  Subscriber: { SubscriptionType: {}; Address: {} }
}
type CreateSubscriberResponse = { [x: string]: unknown }
type DeleteBudgetRequest = { AccountId: {}; BudgetName: {} }
type DeleteBudgetResponse = { [x: string]: unknown }
type DeleteBudgetActionRequest = { AccountId: AccountId; BudgetName: BudgetName; ActionId: {} }
type Action = {
  ActionId: {}
  BudgetName: BudgetName
  NotificationType: NotificationType
  ActionType: {}
  ActionThreshold: {
    ActionThresholdValue: NotificationThreshold
    ActionThresholdType: ThresholdType
  }
  Definition: {
    IamActionDefinition?:
      | { PolicyArn: {}; Roles?: {} | undefined; Groups?: {} | undefined; Users?: {} | undefined }
      | undefined
    ScpActionDefinition?: { PolicyId: {}; TargetIds: {} } | undefined
    SsmActionDefinition?: { ActionSubType: {}; Region: {}; InstanceIds: {} } | undefined
  }
  ExecutionRoleArn: {}
  ApprovalModel: {}
  Status: {}
  Subscribers: Subscribers
}
type DeleteBudgetActionResponse = { AccountId: AccountId; BudgetName: BudgetName; Action: Action }
type DeleteNotificationRequest = {
  AccountId: {}
  BudgetName: {}
  Notification: {
    NotificationType: {}
    ComparisonOperator: {}
    Threshold: {}
    ThresholdType?: {} | undefined
    NotificationState?: {} | undefined
  }
}
type DeleteNotificationResponse = { [x: string]: unknown }
type DeleteSubscriberRequest = {
  AccountId: {}
  BudgetName: {}
  Notification: {
    NotificationType: {}
    ComparisonOperator: {}
    Threshold: {}
    ThresholdType?: {} | undefined
    NotificationState?: {} | undefined
  }
  Subscriber: { SubscriptionType: {}; Address: {} }
}
type DeleteSubscriberResponse = { [x: string]: unknown }
type DescribeBudgetRequest = { AccountId: {}; BudgetName: {} }
type DescribeBudgetResponse = {
  Budget?:
    | {
        BudgetName: {}
        BudgetLimit?: { Amount: {}; Unit: {} } | undefined
        PlannedBudgetLimits?: {} | undefined
        CostFilters?: {} | undefined
        CostTypes?:
          | {
              IncludeTax?: {} | undefined
              IncludeSubscription?: {} | undefined
              UseBlended?: {} | undefined
              IncludeRefund?: {} | undefined
              IncludeCredit?: {} | undefined
              IncludeUpfront?: {} | undefined
              IncludeRecurring?: {} | undefined
              IncludeOtherSubscription?: {} | undefined
              IncludeSupport?: {} | undefined
              IncludeDiscount?: {} | undefined
              UseAmortized?: {} | undefined
            }
          | undefined
        TimeUnit: {}
        TimePeriod?: { Start?: {} | undefined; End?: {} | undefined } | undefined
        CalculatedSpend?:
          | {
              ActualSpend: { Amount: {}; Unit: {} }
              ForecastedSpend?: { Amount: {}; Unit: {} } | undefined
            }
          | undefined
        BudgetType: {}
        LastUpdatedTime?: {} | undefined
        AutoAdjustData?:
          | {
              AutoAdjustType: {}
              HistoricalOptions?:
                | { BudgetAdjustmentPeriod: {}; LookBackAvailablePeriods?: {} | undefined }
                | undefined
              LastAutoAdjustTime?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type DescribeBudgetActionRequest = { AccountId: AccountId; BudgetName: BudgetName; ActionId: {} }
type DescribeBudgetActionResponse = {
  AccountId: AccountId
  BudgetName: BudgetName
  Action: {
    ActionId: {}
    BudgetName: BudgetName
    NotificationType: NotificationType
    ActionType: {}
    ActionThreshold: {
      ActionThresholdValue: NotificationThreshold
      ActionThresholdType: ThresholdType
    }
    Definition: {
      IamActionDefinition?:
        | { PolicyArn: {}; Roles?: {} | undefined; Groups?: {} | undefined; Users?: {} | undefined }
        | undefined
      ScpActionDefinition?: { PolicyId: {}; TargetIds: {} } | undefined
      SsmActionDefinition?: { ActionSubType: {}; Region: {}; InstanceIds: {} } | undefined
    }
    ExecutionRoleArn: {}
    ApprovalModel: {}
    Status: {}
    Subscribers: Subscribers
  }
}
type TimePeriod = { Start?: {} | undefined; End?: {} | undefined }
type MaxResults = number
type GenericString = string
type DescribeBudgetActionHistoriesRequest = {
  AccountId: AccountId
  BudgetName: BudgetName
  ActionId: {}
  TimePeriod?: TimePeriod | undefined
  MaxResults?: MaxResults | undefined
  NextToken?: GenericString | undefined
}
type DescribeBudgetActionHistoriesResponse = {
  ActionHistories: {}
  NextToken?: GenericString | undefined
}
type DescribeBudgetActionsForAccountRequest = {
  AccountId: AccountId
  MaxResults?: MaxResults | undefined
  NextToken?: GenericString | undefined
}
type DescribeBudgetActionsForAccountResponse = {
  Actions: {}
  NextToken?: GenericString | undefined
}
type DescribeBudgetActionsForBudgetRequest = {
  AccountId: AccountId
  BudgetName: BudgetName
  MaxResults?: MaxResults | undefined
  NextToken?: GenericString | undefined
}
type DescribeBudgetActionsForBudgetResponse = { Actions: {}; NextToken?: GenericString | undefined }
type DescribeBudgetNotificationsForAccountRequest = {
  AccountId: AccountId
  MaxResults?: {} | undefined
  NextToken?: GenericString | undefined
}
type DescribeBudgetNotificationsForAccountResponse = {
  BudgetNotificationsForAccount?: {} | undefined
  NextToken?: GenericString | undefined
}
type DescribeBudgetPerformanceHistoryRequest = {
  AccountId: AccountId
  BudgetName: BudgetName
  TimePeriod?: { Start?: {} | undefined; End?: {} | undefined } | undefined
  MaxResults?: MaxResults | undefined
  NextToken?: GenericString | undefined
}
type BudgetType =
  | 'USAGE'
  | 'COST'
  | 'RI_UTILIZATION'
  | 'RI_COVERAGE'
  | 'SAVINGS_PLANS_UTILIZATION'
  | 'SAVINGS_PLANS_COVERAGE'
type TimeUnit = 'DAILY' | 'MONTHLY' | 'QUARTERLY' | 'ANNUALLY'
type DescribeBudgetPerformanceHistoryResponse = {
  BudgetPerformanceHistory?:
    | {
        BudgetName?: BudgetName | undefined
        BudgetType?: BudgetType | undefined
        CostFilters?: {} | undefined
        CostTypes?:
          | {
              IncludeTax?: {} | undefined
              IncludeSubscription?: {} | undefined
              UseBlended?: {} | undefined
              IncludeRefund?: {} | undefined
              IncludeCredit?: {} | undefined
              IncludeUpfront?: {} | undefined
              IncludeRecurring?: {} | undefined
              IncludeOtherSubscription?: {} | undefined
              IncludeSupport?: {} | undefined
              IncludeDiscount?: {} | undefined
              UseAmortized?: {} | undefined
            }
          | undefined
        TimeUnit?: TimeUnit | undefined
        BudgetedAndActualAmountsList?: {} | undefined
      }
    | undefined
  NextToken?: GenericString | undefined
}
type DescribeBudgetsRequest = {
  AccountId: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeBudgetsResponse = { Budgets?: {} | undefined; NextToken?: {} | undefined }
type DescribeNotificationsForBudgetRequest = {
  AccountId: {}
  BudgetName: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeNotificationsForBudgetResponse = {
  Notifications?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeSubscribersForNotificationRequest = {
  AccountId: {}
  BudgetName: {}
  Notification: {
    NotificationType: {}
    ComparisonOperator: {}
    Threshold: {}
    ThresholdType?: {} | undefined
    NotificationState?: {} | undefined
  }
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeSubscribersForNotificationResponse = {
  Subscribers?: {} | undefined
  NextToken?: {} | undefined
}
type ExecuteBudgetActionRequest = {
  AccountId: AccountId
  BudgetName: BudgetName
  ActionId: {}
  ExecutionType: {}
}
type ExecuteBudgetActionResponse = {
  AccountId: AccountId
  BudgetName: BudgetName
  ActionId: {}
  ExecutionType: {}
}
type UpdateBudgetRequest = {
  AccountId: {}
  NewBudget: {
    BudgetName: {}
    BudgetLimit?: { Amount: {}; Unit: {} } | undefined
    PlannedBudgetLimits?: {} | undefined
    CostFilters?: {} | undefined
    CostTypes?:
      | {
          IncludeTax?: {} | undefined
          IncludeSubscription?: {} | undefined
          UseBlended?: {} | undefined
          IncludeRefund?: {} | undefined
          IncludeCredit?: {} | undefined
          IncludeUpfront?: {} | undefined
          IncludeRecurring?: {} | undefined
          IncludeOtherSubscription?: {} | undefined
          IncludeSupport?: {} | undefined
          IncludeDiscount?: {} | undefined
          UseAmortized?: {} | undefined
        }
      | undefined
    TimeUnit: {}
    TimePeriod?: { Start?: {} | undefined; End?: {} | undefined } | undefined
    CalculatedSpend?:
      | {
          ActualSpend: { Amount: {}; Unit: {} }
          ForecastedSpend?: { Amount: {}; Unit: {} } | undefined
        }
      | undefined
    BudgetType: {}
    LastUpdatedTime?: {} | undefined
    AutoAdjustData?:
      | {
          AutoAdjustType: {}
          HistoricalOptions?:
            | { BudgetAdjustmentPeriod: {}; LookBackAvailablePeriods?: {} | undefined }
            | undefined
          LastAutoAdjustTime?: {} | undefined
        }
      | undefined
  }
}
type UpdateBudgetResponse = { [x: string]: unknown }
type UpdateBudgetActionRequest = {
  AccountId: AccountId
  BudgetName: BudgetName
  ActionId: {}
  NotificationType?: NotificationType | undefined
  ActionThreshold?: ActionThreshold | undefined
  Definition?: Definition | undefined
  ExecutionRoleArn?: {} | undefined
  ApprovalModel?: {} | undefined
  Subscribers?: Subscribers | undefined
}
type UpdateBudgetActionResponse = {
  AccountId: AccountId
  BudgetName: BudgetName
  OldAction: {
    ActionId: {}
    BudgetName: BudgetName
    NotificationType: NotificationType
    ActionType: {}
    ActionThreshold: {
      ActionThresholdValue: NotificationThreshold
      ActionThresholdType: ThresholdType
    }
    Definition: {
      IamActionDefinition?:
        | { PolicyArn: {}; Roles?: {} | undefined; Groups?: {} | undefined; Users?: {} | undefined }
        | undefined
      ScpActionDefinition?: { PolicyId: {}; TargetIds: {} } | undefined
      SsmActionDefinition?: { ActionSubType: {}; Region: {}; InstanceIds: {} } | undefined
    }
    ExecutionRoleArn: {}
    ApprovalModel: {}
    Status: {}
    Subscribers: Subscribers
  }
  NewAction: {
    ActionId: {}
    BudgetName: BudgetName
    NotificationType: NotificationType
    ActionType: {}
    ActionThreshold: {
      ActionThresholdValue: NotificationThreshold
      ActionThresholdType: ThresholdType
    }
    Definition: {
      IamActionDefinition?:
        | { PolicyArn: {}; Roles?: {} | undefined; Groups?: {} | undefined; Users?: {} | undefined }
        | undefined
      ScpActionDefinition?: { PolicyId: {}; TargetIds: {} } | undefined
      SsmActionDefinition?: { ActionSubType: {}; Region: {}; InstanceIds: {} } | undefined
    }
    ExecutionRoleArn: {}
    ApprovalModel: {}
    Status: {}
    Subscribers: Subscribers
  }
}
type UpdateNotificationRequest = {
  AccountId: {}
  BudgetName: {}
  OldNotification: {
    NotificationType: {}
    ComparisonOperator: {}
    Threshold: {}
    ThresholdType?: {} | undefined
    NotificationState?: {} | undefined
  }
  NewNotification: {
    NotificationType: {}
    ComparisonOperator: {}
    Threshold: {}
    ThresholdType?: {} | undefined
    NotificationState?: {} | undefined
  }
}
type UpdateNotificationResponse = { [x: string]: unknown }
type UpdateSubscriberRequest = {
  AccountId: {}
  BudgetName: {}
  Notification: {
    NotificationType: {}
    ComparisonOperator: {}
    Threshold: {}
    ThresholdType?: {} | undefined
    NotificationState?: {} | undefined
  }
  OldSubscriber: { SubscriptionType: {}; Address: {} }
  NewSubscriber: { SubscriptionType: {}; Address: {} }
}
type UpdateSubscriberResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=AWSBudgetServiceGateway.CreateBudget': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSBudgetServiceGateway.CreateBudget'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateBudgetRequest }
        output: CreateBudgetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSBudgetServiceGateway.CreateBudgetAction': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSBudgetServiceGateway.CreateBudgetAction'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateBudgetActionRequest }
        output: CreateBudgetActionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSBudgetServiceGateway.CreateNotification': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSBudgetServiceGateway.CreateNotification'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateNotificationRequest }
        output: CreateNotificationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSBudgetServiceGateway.CreateSubscriber': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSBudgetServiceGateway.CreateSubscriber'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateSubscriberRequest }
        output: CreateSubscriberResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudget': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSBudgetServiceGateway.DeleteBudget'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteBudgetRequest }
        output: DeleteBudgetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudgetAction': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSBudgetServiceGateway.DeleteBudgetAction'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteBudgetActionRequest }
        output: DeleteBudgetActionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSBudgetServiceGateway.DeleteNotification': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSBudgetServiceGateway.DeleteNotification'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteNotificationRequest }
        output: DeleteNotificationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSBudgetServiceGateway.DeleteSubscriber': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSBudgetServiceGateway.DeleteSubscriber'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteSubscriberRequest }
        output: DeleteSubscriberResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudget': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSBudgetServiceGateway.DescribeBudget'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeBudgetRequest }
        output: DescribeBudgetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetAction': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSBudgetServiceGateway.DescribeBudgetAction'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeBudgetActionRequest }
        output: DescribeBudgetActionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionHistories': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSBudgetServiceGateway.DescribeBudgetActionHistories'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeBudgetActionHistoriesRequest }
        output: DescribeBudgetActionHistoriesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForAccount': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSBudgetServiceGateway.DescribeBudgetActionsForAccount'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeBudgetActionsForAccountRequest }
        output: DescribeBudgetActionsForAccountResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForBudget': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSBudgetServiceGateway.DescribeBudgetActionsForBudget'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeBudgetActionsForBudgetRequest }
        output: DescribeBudgetActionsForBudgetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetNotificationsForAccount': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSBudgetServiceGateway.DescribeBudgetNotificationsForAccount'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeBudgetNotificationsForAccountRequest }
        output: DescribeBudgetNotificationsForAccountResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeBudgetPerformanceHistoryRequest }
        output: DescribeBudgetPerformanceHistoryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgets': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSBudgetServiceGateway.DescribeBudgets'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeBudgetsRequest }
        output: DescribeBudgetsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSBudgetServiceGateway.DescribeNotificationsForBudget': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSBudgetServiceGateway.DescribeNotificationsForBudget'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeNotificationsForBudgetRequest }
        output: DescribeNotificationsForBudgetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSBudgetServiceGateway.DescribeSubscribersForNotification': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSBudgetServiceGateway.DescribeSubscribersForNotification'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeSubscribersForNotificationRequest }
        output: DescribeSubscribersForNotificationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSBudgetServiceGateway.ExecuteBudgetAction': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSBudgetServiceGateway.ExecuteBudgetAction'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ExecuteBudgetActionRequest }
        output: ExecuteBudgetActionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudget': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSBudgetServiceGateway.UpdateBudget'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateBudgetRequest }
        output: UpdateBudgetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudgetAction': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSBudgetServiceGateway.UpdateBudgetAction'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateBudgetActionRequest }
        output: UpdateBudgetActionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSBudgetServiceGateway.UpdateNotification': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSBudgetServiceGateway.UpdateNotification'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateNotificationRequest }
        output: UpdateNotificationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSBudgetServiceGateway.UpdateSubscriber': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSBudgetServiceGateway.UpdateSubscriber'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateSubscriberRequest }
        output: UpdateSubscriberResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
