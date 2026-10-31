import { createRoute, z } from '@hono/zod-openapi'

const PolicyArnSchema = z
  .string()
  .regex(
    /^arn:(aws|aws-cn|aws-us-gov|us-iso-east-1|us-isob-east-1):iam::(\d{12}|aws):policy(\u002F[\u0021-\u007F]+\u002F|\u002F)[\w+=,.@-]+$/,
  )
  .min(25)
  .max(684)
  .openapi('PolicyArn')

const RoleSchema = z
  .string()
  .regex(/^([\u0021-\u007F]+\u002F)?[\w+=,.@-]+$/)
  .min(1)
  .max(576)
  .openapi('Role')

const RolesSchema = z.array(RoleSchema).min(1).max(100).openapi('Roles')

const GroupSchema = z
  .string()
  .regex(/^([\u0021-\u007F]+\u002F)?[\w+=,.@-]+$/)
  .min(1)
  .max(640)
  .openapi('Group')

const GroupsSchema = z.array(GroupSchema).min(1).max(100).openapi('Groups')

const UserSchema = z
  .string()
  .regex(/^([\u0021-\u007F]+\u002F)?[\w+=,.@-]+$/)
  .min(1)
  .max(576)
  .openapi('User')

const UsersSchema = z.array(UserSchema).min(1).max(100).openapi('Users')

const IamActionDefinitionSchema = z
  .object({
    PolicyArn: PolicyArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the policy to be attached. ' }),
    ),
    Roles: RolesSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of roles to be attached. There must be at least one role. ',
        }),
    ).exactOptional(),
    Groups: GroupsSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of groups to be attached. There must be at least one group. ',
        }),
    ).exactOptional(),
    Users: UsersSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of users to be attached. There must be at least one user. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['PolicyArn'],
    description: 'The Identity and Access Management (IAM) action definition details. ',
  })
  .openapi('IamActionDefinition')

const PolicyIdSchema = z
  .string()
  .regex(/^p-[0-9a-zA-Z_]{8,128}$/)
  .min(10)
  .max(130)
  .openapi('PolicyId')

const TargetIdSchema = z
  .string()
  .regex(/^(ou-[0-9a-z]{4,32}-[a-z0-9]{8,32}$)|(\d{12})/)
  .min(12)
  .max(68)
  .openapi('TargetId')

const TargetIdsSchema = z.array(TargetIdSchema).min(1).max(100).openapi('TargetIds')

const ScpActionDefinitionSchema = z
  .object({
    PolicyId: PolicyIdSchema.and(z.any().openapi({ description: 'The policy ID attached. ' })),
    TargetIds: TargetIdsSchema.and(z.any().openapi({ description: 'A list of target IDs. ' })),
  })
  .openapi({
    required: ['PolicyId', 'TargetIds'],
    description: 'The service control policies (SCP) action definition details. ',
  })
  .openapi('ScpActionDefinition')

const ActionSubTypeSchema = z
  .enum(['STOP_EC2_INSTANCES', 'STOP_RDS_INSTANCES'])
  .openapi('ActionSubType')

const RegionSchema = z
  .string()
  .regex(/^\w{2}-\w+(-\w+)?-\d$/)
  .min(9)
  .max(20)
  .openapi('Region')

const InstanceIdSchema = z
  .string()
  .regex(/^i-(\w{8}|\w{17})$|^[a-zA-Z]([\w-]{0,61}\w)?$/)
  .min(1)
  .max(63)
  .openapi('InstanceId')

const InstanceIdsSchema = z.array(InstanceIdSchema).min(1).max(100).openapi('InstanceIds')

const SsmActionDefinitionSchema = z
  .object({
    ActionSubType: ActionSubTypeSchema.and(
      z.any().openapi({ description: 'The action subType. ' }),
    ),
    Region: RegionSchema.and(
      z.any().openapi({ description: 'The Region to run the SSM document. ' }),
    ),
    InstanceIds: InstanceIdsSchema.and(
      z.any().openapi({ description: 'The EC2 and RDS instance IDs. ' }),
    ),
  })
  .openapi({
    required: ['ActionSubType', 'Region', 'InstanceIds'],
    description: 'The Amazon Web Services Systems Manager (SSM) action definition details. ',
  })
  .openapi('SsmActionDefinition')

type DefinitionType = {
  IamActionDefinition?: z.infer<typeof IamActionDefinitionSchema> & { [key: string]: unknown }
  ScpActionDefinition?: z.infer<typeof ScpActionDefinitionSchema> & { [key: string]: unknown }
  SsmActionDefinition?: z.infer<typeof SsmActionDefinitionSchema> & { [key: string]: unknown }
}

const CreateBudgetResponseSchema = z
  .object({})
  .openapi({ description: ' Response of CreateBudget ' })
  .openapi('CreateBudgetResponse')

const AccountIdSchema = z
  .string()
  .regex(/\d{12}/)
  .length(12)
  .openapi({ description: "The account ID of the user. It's a 12-digit number." })
  .openapi('AccountId')

const BudgetNameSchema = z
  .string()
  .regex(/[^:\\]+/)
  .min(1)
  .max(100)
  .openapi({
    description:
      ' A string that represents the budget name. The ":" and "\\" characters aren\'t allowed.',
  })
  .openapi('BudgetName')

const NumericValueSchema = z
  .string()
  .regex(/([0-9]*\.)?[0-9]+/)
  .min(1)
  .max(2147483647)
  .openapi({ description: ' A string that represents a numeric value.' })
  .openapi('NumericValue')

const UnitValueSchema = z
  .string()
  .regex(/.*/)
  .min(1)
  .max(2147483647)
  .openapi({
    description: " A string that represents the spend unit of a budget. It can't be null or empty.",
  })
  .openapi('UnitValue')

const SpendSchema = z
  .object({
    Amount: NumericValueSchema.and(
      z
        .any()
        .openapi({
          description:
            "The cost or usage amount that's associated with a budget forecast, actual spend, or budget threshold.",
        }),
    ),
    Unit: UnitValueSchema.and(
      z
        .any()
        .openapi({
          description:
            "The unit of measurement that's used for the budget forecast, actual spend, or budget threshold, such as USD or GBP.",
        }),
    ),
  })
  .openapi({
    required: ['Amount', 'Unit'],
    description:
      "<p>The amount of cost or usage that's measured for a budget.</p> <p>For example, a <code>Spend</code> for <code>3 GB</code> of S3 usage has the following parameters:</p> <ul> <li> <p>An <code>Amount</code> of <code>3</code> </p> </li> <li> <p>A <code>unit</code> of <code>GB</code> </p> </li> </ul>",
  })
  .openapi('Spend')

const PlannedBudgetLimitsSchema = z.record(z.string(), SpendSchema).openapi('PlannedBudgetLimits')

const DimensionValueSchema = z
  .string()
  .regex(/[\S\s]*/)
  .min(0)
  .max(2147483647)
  .openapi('DimensionValue')

const DimensionValuesSchema = z.array(DimensionValueSchema).openapi('DimensionValues')

const CostFiltersSchema = z
  .record(z.string(), DimensionValuesSchema)
  .openapi({
    description: ' A map that represents the cost filters that are applied to the budget.',
  })
  .openapi('CostFilters')

const NullableBooleanSchema = z.boolean().openapi('NullableBoolean')

const CostTypesSchema = z
  .object({
    IncludeTax: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether a budget includes taxes.</p> <p>The default value is <code>true</code>.</p>',
        }),
    ).exactOptional(),
    IncludeSubscription: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether a budget includes subscriptions.</p> <p>The default value is <code>true</code>.</p>',
        }),
    ).exactOptional(),
    UseBlended: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether a budget uses a blended rate.</p> <p>The default value is <code>false</code>.</p>',
        }),
    ).exactOptional(),
    IncludeRefund: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether a budget includes refunds.</p> <p>The default value is <code>true</code>.</p>',
        }),
    ).exactOptional(),
    IncludeCredit: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether a budget includes credits.</p> <p>The default value is <code>true</code>.</p>',
        }),
    ).exactOptional(),
    IncludeUpfront: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether a budget includes upfront RI costs.</p> <p>The default value is <code>true</code>.</p>',
        }),
    ).exactOptional(),
    IncludeRecurring: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether a budget includes recurring fees such as monthly RI fees.</p> <p>The default value is <code>true</code>.</p>',
        }),
    ).exactOptional(),
    IncludeOtherSubscription: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether a budget includes non-RI subscription costs.</p> <p>The default value is <code>true</code>.</p>',
        }),
    ).exactOptional(),
    IncludeSupport: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether a budget includes support subscription fees.</p> <p>The default value is <code>true</code>.</p>',
        }),
    ).exactOptional(),
    IncludeDiscount: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether a budget includes discounts.</p> <p>The default value is <code>true</code>.</p>',
        }),
    ).exactOptional(),
    UseAmortized: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether a budget uses the amortized rate.</p> <p>The default value is <code>false</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>The types of cost that are included in a <code>COST</code> budget, such as tax and subscriptions.</p> <p> <code>USAGE</code>, <code>RI_UTILIZATION</code>, <code>RI_COVERAGE</code>, <code>SAVINGS_PLANS_UTILIZATION</code>, and <code>SAVINGS_PLANS_COVERAGE</code> budgets don't have <code>CostTypes</code>.</p>",
    required: [],
  })
  .openapi('CostTypes')

const TimeUnitSchema = z
  .enum(['DAILY', 'MONTHLY', 'QUARTERLY', 'ANNUALLY'])
  .openapi({ description: ' The time unit of the budget, such as MONTHLY or QUARTERLY.' })
  .openapi('TimeUnit')

const GenericTimestampSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description: " A generic time stamp. In Java, it's transformed to a <code>Date</code> object.",
  })
  .openapi('GenericTimestamp')

const TimePeriodSchema = z
  .object({
    Start: GenericTimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The start date for a budget. If you created your budget and didn't specify a start date, Amazon Web Services defaults to the start of your chosen time period (DAILY, MONTHLY, QUARTERLY, or ANNUALLY). For example, if you created your budget on January 24, 2018, chose <code>DAILY</code>, and didn't set a start date, Amazon Web Services set your start date to <code>01/24/18 00:00 UTC</code>. If you chose <code>MONTHLY</code>, Amazon Web Services set your start date to <code>01/01/18 00:00 UTC</code>. The defaults are the same for the Billing and Cost Management console and the API.</p> <p>You can change your start date with the <code>UpdateBudget</code> operation.</p>",
        }),
    ).exactOptional(),
    End: GenericTimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The end date for a budget. If you didn't specify an end date, Amazon Web Services set your end date to <code>06/15/87 00:00 UTC</code>. The defaults are the same for the Billing and Cost Management console and the API.</p> <p>After the end date, Amazon Web Services deletes the budget and all the associated notifications and subscribers. You can change your end date with the <code>UpdateBudget</code> operation.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "The period of time that's covered by a budget. The period has a start date and an end date. The start date must come before the end date. There are no restrictions on the end date. ",
    required: [],
  })
  .openapi('TimePeriod')

const CalculatedSpendSchema = z
  .object({
    ActualSpend: SpendSchema.and(
      z
        .any()
        .openapi({
          description: 'The amount of cost, usage, RI units, or Savings Plans units that you used.',
        }),
    ),
    ForecastedSpend: SpendSchema.and(
      z
        .any()
        .openapi({
          description:
            "The amount of cost, usage, RI units, or Savings Plans units that you're forecasted to use.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ActualSpend'],
    description:
      "<p>The spend objects that are associated with this budget. The <code>actualSpend</code> tracks how much you've used, cost, usage, RI units, or Savings Plans units and the <code>forecastedSpend</code> tracks how much that you're predicted to spend based on your historical usage profile.</p> <p>For example, if it's the 20th of the month and you have spent <code>50</code> dollars on Amazon EC2, your <code>actualSpend</code> is <code>50 USD</code>, and your <code>forecastedSpend</code> is <code>75 USD</code>.</p>",
  })
  .openapi('CalculatedSpend')

const BudgetTypeSchema = z
  .enum([
    'USAGE',
    'COST',
    'RI_UTILIZATION',
    'RI_COVERAGE',
    'SAVINGS_PLANS_UTILIZATION',
    'SAVINGS_PLANS_COVERAGE',
  ])
  .openapi({
    description:
      '<p> The type of a budget. It must be one of the following types: </p> <p> <code>COST</code>, <code>USAGE</code>, <code>RI_UTILIZATION</code>, <code>RI_COVERAGE</code>, <code>SAVINGS_PLANS_UTILIZATION</code>, or <code>SAVINGS_PLANS_COVERAGE</code>.</p>',
  })
  .openapi('BudgetType')

const AutoAdjustTypeSchema = z.enum(['HISTORICAL', 'FORECAST']).openapi('AutoAdjustType')

const AdjustmentPeriodSchema = z.int().min(1).max(60).openapi('AdjustmentPeriod')

const HistoricalOptionsSchema = z
  .object({
    BudgetAdjustmentPeriod: AdjustmentPeriodSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of budget periods included in the moving-average calculation that determines your auto-adjusted budget amount. The maximum value depends on the <code>TimeUnit</code> granularity of the budget:</p> <ul> <li> <p>For the <code>DAILY</code> granularity, the maximum value is <code>60</code>.</p> </li> <li> <p>For the <code>MONTHLY</code> granularity, the maximum value is <code>12</code>.</p> </li> <li> <p>For the <code>QUARTERLY</code> granularity, the maximum value is <code>4</code>.</p> </li> <li> <p>For the <code>ANNUALLY</code> granularity, the maximum value is <code>1</code>.</p> </li> </ul>',
        }),
    ),
    LookBackAvailablePeriods: AdjustmentPeriodSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The integer that describes how many budget periods in your <code>BudgetAdjustmentPeriod</code> are included in the calculation of your current <code>BudgetLimit</code>. If the first budget period in your <code>BudgetAdjustmentPeriod</code> has no cost data, then that budget period isn’t included in the average that determines your budget limit. </p> <p>For example, if you set <code>BudgetAdjustmentPeriod</code> as <code>4</code> quarters, but your account had no cost data in the first quarter, then only the last three quarters are included in the calculation. In this scenario, <code>LookBackAvailablePeriods</code> returns <code>3</code>. </p> <p>You can’t set your own <code>LookBackAvailablePeriods</code>. The value is automatically calculated from the <code>BudgetAdjustmentPeriod</code> and your historical cost data.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['BudgetAdjustmentPeriod'],
    description:
      'The parameters that define or describe the historical data that your auto-adjusting budget is based on.',
  })
  .openapi('HistoricalOptions')

const AutoAdjustDataSchema = z
  .object({
    AutoAdjustType: AutoAdjustTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string that defines whether your budget auto-adjusts based on historical or forecasted data.',
        }),
    ),
    HistoricalOptions: HistoricalOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The parameters that define or describe the historical data that your auto-adjusting budget is based on.',
        }),
    ).exactOptional(),
    LastAutoAdjustTime: GenericTimestampSchema.and(
      z.any().openapi({ description: 'The last time that your budget was auto-adjusted.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['AutoAdjustType'],
    description: 'The parameters that determine the budget amount for an auto-adjusting budget.',
  })
  .openapi('AutoAdjustData')

const BudgetSchema = z
  .object({
    BudgetName: BudgetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The name of a budget. The name must be unique within an account. The <code>:</code> and <code>\\</code> characters aren't allowed in <code>BudgetName</code>.",
        }),
    ),
    BudgetLimit: SpendSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The total amount of cost, usage, RI utilization, RI coverage, Savings Plans utilization, or Savings Plans coverage that you want to track with your budget.</p> <p> <code>BudgetLimit</code> is required for cost or usage budgets, but optional for RI or Savings Plans utilization or coverage budgets. RI and Savings Plans utilization or coverage budgets default to <code>100</code>. This is the only valid value for RI or Savings Plans utilization or coverage budgets. You can't use <code>BudgetLimit</code> with <code>PlannedBudgetLimits</code> for <code>CreateBudget</code> and <code>UpdateBudget</code> actions. </p>",
        }),
    ).exactOptional(),
    PlannedBudgetLimits: PlannedBudgetLimitsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A map containing multiple <code>BudgetLimit</code>, including current or future limits.</p> <p> <code>PlannedBudgetLimits</code> is available for cost or usage budget and supports both monthly and quarterly <code>TimeUnit</code>. </p> <p>For monthly budgets, provide 12 months of <code>PlannedBudgetLimits</code> values. This must start from the current month and include the next 11 months. The <code>key</code> is the start of the month, <code>UTC</code> in epoch seconds. </p> <p>For quarterly budgets, provide four quarters of <code>PlannedBudgetLimits</code> value entries in standard calendar quarter increments. This must start from the current quarter and include the next three quarters. The <code>key</code> is the start of the quarter, <code>UTC</code> in epoch seconds. </p> <p>If the planned budget expires before 12 months for monthly or four quarters for quarterly, provide the <code>PlannedBudgetLimits</code> values only for the remaining periods.</p> <p>If the budget begins at a date in the future, provide <code>PlannedBudgetLimits</code> values from the start date of the budget. </p> <p>After all of the <code>BudgetLimit</code> values in <code>PlannedBudgetLimits</code> are used, the budget continues to use the last limit as the <code>BudgetLimit</code>. At that point, the planned budget provides the same experience as a fixed budget. </p> <p> <code>DescribeBudget</code> and <code>DescribeBudgets</code> response along with <code>PlannedBudgetLimits</code> also contain <code>BudgetLimit</code> representing the current month or quarter limit present in <code>PlannedBudgetLimits</code>. This only applies to budgets that are created with <code>PlannedBudgetLimits</code>. Budgets that are created without <code>PlannedBudgetLimits</code> only contain <code>BudgetLimit</code>. They don't contain <code>PlannedBudgetLimits</code>.</p>",
        }),
    ).exactOptional(),
    CostFilters: CostFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The cost filters, such as <code>Region</code>, <code>Service</code>, <code>member account</code>, <code>Tag</code>, or <code>Cost Category</code>, that are applied to a budget.</p> <p>Amazon Web Services Budgets supports the following services as a <code>Service</code> filter for RI budgets:</p> <ul> <li> <p>Amazon EC2</p> </li> <li> <p>Amazon Redshift</p> </li> <li> <p>Amazon Relational Database Service</p> </li> <li> <p>Amazon ElastiCache</p> </li> <li> <p>Amazon OpenSearch Service</p> </li> </ul>',
        }),
    ).exactOptional(),
    CostTypes: CostTypesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The types of costs that are included in this <code>COST</code> budget.</p> <p> <code>USAGE</code>, <code>RI_UTILIZATION</code>, <code>RI_COVERAGE</code>, <code>SAVINGS_PLANS_UTILIZATION</code>, and <code>SAVINGS_PLANS_COVERAGE</code> budgets do not have <code>CostTypes</code>.</p>',
        }),
    ).exactOptional(),
    TimeUnit: TimeUnitSchema.and(
      z
        .any()
        .openapi({
          description: 'The length of time until a budget resets the actual and forecasted spend.',
        }),
    ),
    TimePeriod: TimePeriodSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The period of time that's covered by a budget. You setthe start date and end date. The start date must come before the end date. The end date must come before <code>06/15/87 00:00 UTC</code>. </p> <p>If you create your budget and don't specify a start date, Amazon Web Services defaults to the start of your chosen time period (DAILY, MONTHLY, QUARTERLY, or ANNUALLY). For example, if you created your budget on January 24, 2018, chose <code>DAILY</code>, and didn't set a start date, Amazon Web Services set your start date to <code>01/24/18 00:00 UTC</code>. If you chose <code>MONTHLY</code>, Amazon Web Services set your start date to <code>01/01/18 00:00 UTC</code>. If you didn't specify an end date, Amazon Web Services set your end date to <code>06/15/87 00:00 UTC</code>. The defaults are the same for the Billing and Cost Management console and the API. </p> <p>You can change either date with the <code>UpdateBudget</code> operation.</p> <p>After the end date, Amazon Web Services deletes the budget and all the associated notifications and subscribers.</p>",
        }),
    ).exactOptional(),
    CalculatedSpend: CalculatedSpendSchema.and(
      z
        .any()
        .openapi({
          description: 'The actual and forecasted cost or usage that the budget tracks.',
        }),
    ).exactOptional(),
    BudgetType: BudgetTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether this budget tracks costs, usage, RI utilization, RI coverage, Savings Plans utilization, or Savings Plans coverage.',
        }),
    ),
    LastUpdatedTime: GenericTimestampSchema.and(
      z.any().openapi({ description: 'The last time that you updated this budget.' }),
    ).exactOptional(),
    AutoAdjustData: AutoAdjustDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'The parameters that determine the budget amount for an auto-adjusting budget.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['BudgetName', 'TimeUnit', 'BudgetType'],
    description:
      '<p>Represents the output of the <code>CreateBudget</code> operation. The content consists of the detailed metadata and data file information, and the current status of the <code>budget</code> object.</p> <p>This is the Amazon Resource Name (ARN) pattern for a budget: </p> <p> <code>arn:aws:budgets::AccountId:budget/budgetName</code> </p>',
  })
  .openapi('Budget')

const NotificationTypeSchema = z
  .enum(['ACTUAL', 'FORECASTED'])
  .openapi({ description: ' The type of a notification. It must be ACTUAL or FORECASTED.' })
  .openapi('NotificationType')

const ComparisonOperatorSchema = z
  .enum(['GREATER_THAN', 'LESS_THAN', 'EQUAL_TO'])
  .openapi({
    description:
      '<p> The comparison operator of a notification. Currently, the service supports the following operators:</p> <p> <code>GREATER_THAN</code>, <code>LESS_THAN</code>, <code>EQUAL_TO</code> </p>',
  })
  .openapi('ComparisonOperator')

const NotificationThresholdSchema = z
  .float64()
  .min(0)
  .max(15000000000000)
  .openapi({ description: ' The threshold of a notification.' })
  .openapi('NotificationThreshold')

const ThresholdTypeSchema = z
  .enum(['PERCENTAGE', 'ABSOLUTE_VALUE'])
  .openapi({ description: ' The type of threshold for a notification.' })
  .openapi('ThresholdType')

const NotificationStateSchema = z.enum(['OK', 'ALARM']).openapi('NotificationState')

const NotificationSchema = z
  .object({
    NotificationType: NotificationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether the notification is for how much you have spent (<code>ACTUAL</code>) or for how much that you're forecasted to spend (<code>FORECASTED</code>).",
        }),
    ),
    ComparisonOperator: ComparisonOperatorSchema.and(
      z.any().openapi({ description: "The comparison that's used for this notification." }),
    ),
    Threshold: NotificationThresholdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The threshold that's associated with a notification. Thresholds are always a percentage, and many customers find value being alerted between 50% - 200% of the budgeted amount. The maximum limit for your threshold is 1,000,000% above the budgeted amount.",
        }),
    ),
    ThresholdType: ThresholdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of threshold for a notification. For <code>ABSOLUTE_VALUE</code> thresholds, Amazon Web Services notifies you when you go over or are forecasted to go over your total cost threshold. For <code>PERCENTAGE</code> thresholds, Amazon Web Services notifies you when you go over or are forecasted to go over a certain percentage of your forecasted spend. For example, if you have a budget for 200 dollars and you have a <code>PERCENTAGE</code> threshold of 80%, Amazon Web Services notifies you when you go over 160 dollars.',
        }),
    ).exactOptional(),
    NotificationState: NotificationStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether this notification is in alarm. If a budget notification is in the <code>ALARM</code> state, you passed the set threshold for the budget.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['NotificationType', 'ComparisonOperator', 'Threshold'],
    description:
      "<p>A notification that's associated with a budget. A budget can have up to ten notifications. </p> <p>Each notification must have at least one subscriber. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers.</p> <p>For example, if you have a budget for 200 dollars and you want to be notified when you go over 160 dollars, create a notification with the following parameters:</p> <ul> <li> <p>A notificationType of <code>ACTUAL</code> </p> </li> <li> <p>A <code>thresholdType</code> of <code>PERCENTAGE</code> </p> </li> <li> <p>A <code>comparisonOperator</code> of <code>GREATER_THAN</code> </p> </li> <li> <p>A notification <code>threshold</code> of <code>80</code> </p> </li> </ul>",
  })
  .openapi('Notification')

const SubscriptionTypeSchema = z
  .enum(['SNS', 'EMAIL'])
  .openapi({ description: ' The subscription type of the subscriber. It can be SMS or EMAIL.' })
  .openapi('SubscriptionType')

const SubscriberAddressSchema = z
  .string()
  .regex(/(.*[\n\r\t\f\ ]?)*/)
  .min(1)
  .max(2147483647)
  .openapi({
    description:
      " A string that contains an email address or SNS topic for the subscriber's address.",
  })
  .openapi('SubscriberAddress')

const SubscriberSchema = z
  .object({
    SubscriptionType: SubscriptionTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of notification that Amazon Web Services sends to a subscriber.',
        }),
    ),
    Address: SubscriberAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The address that Amazon Web Services sends budget notifications to, either an SNS topic or an email.</p> <p>When you create a subscriber, the value of <code>Address</code> can't contain line breaks.</p>",
        }),
    ),
  })
  .openapi({
    required: ['SubscriptionType', 'Address'],
    description:
      '<p>The subscriber to a budget notification. The subscriber consists of a subscription type and either an Amazon SNS topic or an email address.</p> <p>For example, an email subscriber has the following parameters:</p> <ul> <li> <p>A <code>subscriptionType</code> of <code>EMAIL</code> </p> </li> <li> <p>An <code>address</code> of <code>example@example.com</code> </p> </li> </ul>',
  })
  .openapi('Subscriber')

const SubscribersSchema = z
  .array(SubscriberSchema)
  .min(1)
  .max(11)
  .openapi({ description: ' A list of subscribers.' })
  .openapi('Subscribers')

const NotificationWithSubscribersSchema = z
  .object({
    Notification: NotificationSchema.and(
      z.any().openapi({ description: "The notification that's associated with a budget." }),
    ),
    Subscribers: SubscribersSchema.and(
      z
        .any()
        .openapi({ description: 'A list of subscribers who are subscribed to this notification.' }),
    ),
  })
  .openapi({
    required: ['Notification', 'Subscribers'],
    description:
      'A notification with subscribers. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers.',
  })
  .openapi('NotificationWithSubscribers')

const NotificationWithSubscribersListSchema = z
  .array(NotificationWithSubscribersSchema)
  .max(10)
  .openapi({ description: ' A list of notifications, each with a list of subscribers.' })
  .openapi('NotificationWithSubscribersList')

const CreateBudgetRequestSchema = z
  .object({
    AccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({ description: 'The <code>accountId</code> that is associated with the budget.' }),
    ),
    Budget: BudgetSchema.and(
      z.any().openapi({ description: 'The budget object that you want to create.' }),
    ),
    NotificationsWithSubscribers: NotificationWithSubscribersListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A notification that you want to associate with a budget. A budget can have up to five notifications, and each notification can have one SNS subscriber and up to 10 email subscribers. If you include notifications and subscribers in your <code>CreateBudget</code> call, Amazon Web Services creates the notifications and subscribers for you.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['AccountId', 'Budget'],
    title: 'CreateBudgetRequest',
    description: ' Request of CreateBudget ',
  })
  .openapi('CreateBudgetRequest')

const InvalidParameterExceptionSchema = z.any().openapi('InvalidParameterException')

const InternalErrorExceptionSchema = z.any().openapi('InternalErrorException')

const CreationLimitExceededExceptionSchema = z.any().openapi('CreationLimitExceededException')

const DuplicateRecordExceptionSchema = z.any().openapi('DuplicateRecordException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const ActionIdSchema = z
  .string()
  .regex(/^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/)
  .length(36)
  .openapi('ActionId')

const CreateBudgetActionResponseSchema = z
  .object({
    AccountId: AccountIdSchema,
    BudgetName: BudgetNameSchema,
    ActionId: ActionIdSchema.and(
      z
        .any()
        .openapi({
          description: ' A system-generated universally unique identifier (UUID) for the action. ',
        }),
    ),
  })
  .openapi({ required: ['AccountId', 'BudgetName', 'ActionId'] })
  .openapi('CreateBudgetActionResponse')

const ActionTypeSchema = z
  .enum(['APPLY_IAM_POLICY', 'APPLY_SCP_POLICY', 'RUN_SSM_DOCUMENTS'])
  .openapi('ActionType')

const ActionThresholdSchema = z
  .object({
    ActionThresholdValue: NotificationThresholdSchema,
    ActionThresholdType: ThresholdTypeSchema,
  })
  .openapi({
    required: ['ActionThresholdValue', 'ActionThresholdType'],
    description: 'The trigger threshold of the action. ',
  })
  .openapi('ActionThreshold')

const DefinitionSchema: z.ZodType<DefinitionType> = z
  .lazy(() =>
    z
      .object({
        IamActionDefinition: IamActionDefinitionSchema.and(
          z
            .any()
            .openapi({
              description: 'The Identity and Access Management (IAM) action definition details. ',
            }),
        ).exactOptional(),
        ScpActionDefinition: ScpActionDefinitionSchema.and(
          z
            .any()
            .openapi({
              description: 'The service control policies (SCPs) action definition details. ',
            }),
        ).exactOptional(),
        SsmActionDefinition: SsmActionDefinitionSchema.and(
          z
            .any()
            .openapi({
              description:
                'The Amazon Web Services Systems Manager (SSM) action definition details. ',
            }),
        ).exactOptional(),
      })
      .openapi({ description: 'Specifies all of the type-specific parameters. ', required: [] }),
  )
  .openapi('Definition')

const RoleArnSchema = z
  .string()
  .regex(
    /^arn:(aws|aws-cn|aws-us-gov|us-iso-east-1|us-isob-east-1):iam::\d{12}:role(\u002F[\u0021-\u007F]+\u002F|\u002F)[\w+=,.@-]+$/,
  )
  .min(32)
  .max(618)
  .openapi('RoleArn')

const ApprovalModelSchema = z.enum(['AUTOMATIC', 'MANUAL']).openapi('ApprovalModel')

const CreateBudgetActionRequestSchema = z
  .object({
    AccountId: AccountIdSchema,
    BudgetName: BudgetNameSchema,
    NotificationType: NotificationTypeSchema,
    ActionType: ActionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The type of action. This defines the type of tasks that can be carried out by this action. This field also determines the format for definition. ',
        }),
    ),
    ActionThreshold: ActionThresholdSchema,
    Definition: DefinitionSchema,
    ExecutionRoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The role passed for action execution and reversion. Roles and actions must be in the same account. ',
        }),
    ),
    ApprovalModel: ApprovalModelSchema.and(
      z
        .any()
        .openapi({
          description: ' This specifies if the action needs manual or automatic approval. ',
        }),
    ),
    Subscribers: SubscribersSchema,
  })
  .openapi({
    required: [
      'AccountId',
      'BudgetName',
      'NotificationType',
      'ActionType',
      'ActionThreshold',
      'Definition',
      'ExecutionRoleArn',
      'ApprovalModel',
      'Subscribers',
    ],
    title: 'CreateBudgetActionRequest',
  })
  .openapi('CreateBudgetActionRequest')

const NotFoundExceptionSchema = z.any().openapi('NotFoundException')

const CreateNotificationResponseSchema = z
  .object({})
  .openapi({ description: ' Response of CreateNotification ' })
  .openapi('CreateNotificationResponse')

const CreateNotificationRequestSchema = z
  .object({
    AccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>accountId</code> that is associated with the budget that you want to create a notification for.',
        }),
    ),
    BudgetName: BudgetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the budget that you want Amazon Web Services to notify you about. Budget names must be unique within an account.',
        }),
    ),
    Notification: NotificationSchema.and(
      z.any().openapi({ description: 'The notification that you want to create.' }),
    ),
    Subscribers: SubscribersSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of subscribers that you want to associate with the notification. Each notification can have one SNS subscriber and up to 10 email subscribers.',
        }),
    ),
  })
  .openapi({
    required: ['AccountId', 'BudgetName', 'Notification', 'Subscribers'],
    title: 'CreateNotificationRequest',
    description: ' Request of CreateNotification ',
  })
  .openapi('CreateNotificationRequest')

const CreateSubscriberResponseSchema = z
  .object({})
  .openapi({ description: ' Response of CreateSubscriber ' })
  .openapi('CreateSubscriberResponse')

const CreateSubscriberRequestSchema = z
  .object({
    AccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>accountId</code> that is associated with the budget that you want to create a subscriber for.',
        }),
    ),
    BudgetName: BudgetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the budget that you want to subscribe to. Budget names must be unique within an account.',
        }),
    ),
    Notification: NotificationSchema.and(
      z
        .any()
        .openapi({ description: 'The notification that you want to create a subscriber for.' }),
    ),
    Subscriber: SubscriberSchema.and(
      z
        .any()
        .openapi({
          description: 'The subscriber that you want to associate with a budget notification.',
        }),
    ),
  })
  .openapi({
    required: ['AccountId', 'BudgetName', 'Notification', 'Subscriber'],
    title: 'CreateSubscriberRequest',
    description: ' Request of CreateSubscriber ',
  })
  .openapi('CreateSubscriberRequest')

const DeleteBudgetResponseSchema = z
  .object({})
  .openapi({ description: ' Response of DeleteBudget ' })
  .openapi('DeleteBudgetResponse')

const DeleteBudgetRequestSchema = z
  .object({
    AccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>accountId</code> that is associated with the budget that you want to delete.',
        }),
    ),
    BudgetName: BudgetNameSchema.and(
      z.any().openapi({ description: 'The name of the budget that you want to delete.' }),
    ),
  })
  .openapi({
    required: ['AccountId', 'BudgetName'],
    title: 'DeleteBudgetRequest',
    description: ' Request of DeleteBudget ',
  })
  .openapi('DeleteBudgetRequest')

const ActionStatusSchema = z
  .enum([
    'STANDBY',
    'PENDING',
    'EXECUTION_IN_PROGRESS',
    'EXECUTION_SUCCESS',
    'EXECUTION_FAILURE',
    'REVERSE_IN_PROGRESS',
    'REVERSE_SUCCESS',
    'REVERSE_FAILURE',
    'RESET_IN_PROGRESS',
    'RESET_FAILURE',
  ])
  .openapi('ActionStatus')

const ActionSchema = z
  .object({
    ActionId: ActionIdSchema.and(
      z
        .any()
        .openapi({
          description: 'A system-generated universally unique identifier (UUID) for the action. ',
        }),
    ),
    BudgetName: BudgetNameSchema,
    NotificationType: NotificationTypeSchema,
    ActionType: ActionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of action. This defines the type of tasks that can be carried out by this action. This field also determines the format for definition. ',
        }),
    ),
    ActionThreshold: ActionThresholdSchema.and(
      z.any().openapi({ description: 'The trigger threshold of the action. ' }),
    ),
    Definition: DefinitionSchema.and(
      z.any().openapi({ description: 'Where you specify all of the type-specific parameters. ' }),
    ),
    ExecutionRoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The role passed for action execution and reversion. Roles and actions must be in the same account. ',
        }),
    ),
    ApprovalModel: ApprovalModelSchema.and(
      z
        .any()
        .openapi({
          description: 'This specifies if the action needs manual or automatic approval. ',
        }),
    ),
    Status: ActionStatusSchema.and(z.any().openapi({ description: 'The status of the action. ' })),
    Subscribers: SubscribersSchema,
  })
  .openapi({
    required: [
      'ActionId',
      'BudgetName',
      'NotificationType',
      'ActionType',
      'ActionThreshold',
      'Definition',
      'ExecutionRoleArn',
      'ApprovalModel',
      'Status',
      'Subscribers',
    ],
    description: 'A budget action resource. ',
  })
  .openapi('Action')

const DeleteBudgetActionResponseSchema = z
  .object({ AccountId: AccountIdSchema, BudgetName: BudgetNameSchema, Action: ActionSchema })
  .openapi({ required: ['AccountId', 'BudgetName', 'Action'] })
  .openapi('DeleteBudgetActionResponse')

const DeleteBudgetActionRequestSchema = z
  .object({
    AccountId: AccountIdSchema,
    BudgetName: BudgetNameSchema,
    ActionId: ActionIdSchema.and(
      z
        .any()
        .openapi({
          description: ' A system-generated universally unique identifier (UUID) for the action. ',
        }),
    ),
  })
  .openapi({
    required: ['AccountId', 'BudgetName', 'ActionId'],
    title: 'DeleteBudgetActionRequest',
  })
  .openapi('DeleteBudgetActionRequest')

const ResourceLockedExceptionSchema = z.any().openapi('ResourceLockedException')

const DeleteNotificationResponseSchema = z
  .object({})
  .openapi({ description: ' Response of DeleteNotification ' })
  .openapi('DeleteNotificationResponse')

const DeleteNotificationRequestSchema = z
  .object({
    AccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>accountId</code> that is associated with the budget whose notification you want to delete.',
        }),
    ),
    BudgetName: BudgetNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the budget whose notification you want to delete.' }),
    ),
    Notification: NotificationSchema.and(
      z.any().openapi({ description: 'The notification that you want to delete.' }),
    ),
  })
  .openapi({
    required: ['AccountId', 'BudgetName', 'Notification'],
    title: 'DeleteNotificationRequest',
    description: ' Request of DeleteNotification ',
  })
  .openapi('DeleteNotificationRequest')

const DeleteSubscriberResponseSchema = z
  .object({})
  .openapi({ description: ' Response of DeleteSubscriber ' })
  .openapi('DeleteSubscriberResponse')

const DeleteSubscriberRequestSchema = z
  .object({
    AccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>accountId</code> that is associated with the budget whose subscriber you want to delete.',
        }),
    ),
    BudgetName: BudgetNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the budget whose subscriber you want to delete.' }),
    ),
    Notification: NotificationSchema.and(
      z.any().openapi({ description: 'The notification whose subscriber you want to delete.' }),
    ),
    Subscriber: SubscriberSchema.and(
      z.any().openapi({ description: 'The subscriber that you want to delete.' }),
    ),
  })
  .openapi({
    required: ['AccountId', 'BudgetName', 'Notification', 'Subscriber'],
    title: 'DeleteSubscriberRequest',
    description: ' Request of DeleteSubscriber ',
  })
  .openapi('DeleteSubscriberRequest')

const DescribeBudgetResponseSchema = z
  .object({
    Budget: BudgetSchema.and(
      z.any().openapi({ description: 'The description of the budget.' }),
    ).exactOptional(),
  })
  .openapi({ description: ' Response of DescribeBudget ', required: [] })
  .openapi('DescribeBudgetResponse')

const DescribeBudgetRequestSchema = z
  .object({
    AccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>accountId</code> that is associated with the budget that you want a description of.',
        }),
    ),
    BudgetName: BudgetNameSchema.and(
      z.any().openapi({ description: 'The name of the budget that you want a description of.' }),
    ),
  })
  .openapi({
    required: ['AccountId', 'BudgetName'],
    title: 'DescribeBudgetRequest',
    description: ' Request of DescribeBudget ',
  })
  .openapi('DescribeBudgetRequest')

const DescribeBudgetActionResponseSchema = z
  .object({
    AccountId: AccountIdSchema,
    BudgetName: BudgetNameSchema,
    Action: ActionSchema.and(z.any().openapi({ description: ' A budget action resource. ' })),
  })
  .openapi({ required: ['AccountId', 'BudgetName', 'Action'] })
  .openapi('DescribeBudgetActionResponse')

const DescribeBudgetActionRequestSchema = z
  .object({
    AccountId: AccountIdSchema,
    BudgetName: BudgetNameSchema,
    ActionId: ActionIdSchema.and(
      z
        .any()
        .openapi({
          description: ' A system-generated universally unique identifier (UUID) for the action. ',
        }),
    ),
  })
  .openapi({
    required: ['AccountId', 'BudgetName', 'ActionId'],
    title: 'DescribeBudgetActionRequest',
  })
  .openapi('DescribeBudgetActionRequest')

const EventTypeSchema = z
  .enum(['SYSTEM', 'CREATE_ACTION', 'DELETE_ACTION', 'UPDATE_ACTION', 'EXECUTE_ACTION'])
  .openapi('EventType')

const GenericStringSchema = z
  .string()
  .regex(/.*/)
  .min(0)
  .max(2147483647)
  .openapi({ description: ' A generic string.' })
  .openapi('GenericString')

const ActionHistoryDetailsSchema = z
  .object({
    Message: GenericStringSchema,
    Action: ActionSchema.and(z.any().openapi({ description: 'The budget action resource. ' })),
  })
  .openapi({
    required: ['Message', 'Action'],
    description: 'The description of the details for the event. ',
  })
  .openapi('ActionHistoryDetails')

const ActionHistorySchema = z
  .object({
    Timestamp: GenericTimestampSchema,
    Status: ActionStatusSchema.and(
      z.any().openapi({ description: 'The status of action at the time of the event. ' }),
    ),
    EventType: EventTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'This distinguishes between whether the events are triggered by the user or are generated by the system. ',
        }),
    ),
    ActionHistoryDetails: ActionHistoryDetailsSchema.and(
      z.any().openapi({ description: 'The description of the details for the event. ' }),
    ),
  })
  .openapi({
    required: ['Timestamp', 'Status', 'EventType', 'ActionHistoryDetails'],
    description: 'The historical records for a budget action. ',
  })
  .openapi('ActionHistory')

const ActionHistoriesSchema = z
  .array(ActionHistorySchema)
  .min(0)
  .max(100)
  .openapi('ActionHistories')

const DescribeBudgetActionHistoriesResponseSchema = z
  .object({
    ActionHistories: ActionHistoriesSchema.and(
      z.any().openapi({ description: ' The historical record of the budget action resource. ' }),
    ),
    NextToken: GenericStringSchema.exactOptional(),
  })
  .openapi({ required: ['ActionHistories'] })
  .openapi('DescribeBudgetActionHistoriesResponse')

const MaxResultsSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi({
    description:
      ' An integer that represents how many entries a paginated response contains. The maximum is 100.',
  })
  .openapi('MaxResults')

const DescribeBudgetActionHistoriesRequestSchema = z
  .object({
    AccountId: AccountIdSchema,
    BudgetName: BudgetNameSchema,
    ActionId: ActionIdSchema.and(
      z
        .any()
        .openapi({
          description: ' A system-generated universally unique identifier (UUID) for the action. ',
        }),
    ),
    TimePeriod: TimePeriodSchema.exactOptional(),
    MaxResults: MaxResultsSchema.exactOptional(),
    NextToken: GenericStringSchema.exactOptional(),
  })
  .openapi({
    required: ['AccountId', 'BudgetName', 'ActionId'],
    title: 'DescribeBudgetActionHistoriesRequest',
  })
  .openapi('DescribeBudgetActionHistoriesRequest')

const InvalidNextTokenExceptionSchema = z.any().openapi('InvalidNextTokenException')

const ActionsSchema = z.array(ActionSchema).min(0).max(100).openapi('Actions')

const DescribeBudgetActionsForAccountResponseSchema = z
  .object({
    Actions: ActionsSchema.and(
      z.any().openapi({ description: ' A list of the budget action resources information. ' }),
    ),
    NextToken: GenericStringSchema.exactOptional(),
  })
  .openapi({ required: ['Actions'] })
  .openapi('DescribeBudgetActionsForAccountResponse')

const DescribeBudgetActionsForAccountRequestSchema = z
  .object({
    AccountId: AccountIdSchema,
    MaxResults: MaxResultsSchema.exactOptional(),
    NextToken: GenericStringSchema.exactOptional(),
  })
  .openapi({ required: ['AccountId'], title: 'DescribeBudgetActionsForAccountRequest' })
  .openapi('DescribeBudgetActionsForAccountRequest')

const DescribeBudgetActionsForBudgetResponseSchema = z
  .object({
    Actions: ActionsSchema.and(
      z.any().openapi({ description: ' A list of the budget action resources information. ' }),
    ),
    NextToken: GenericStringSchema.exactOptional(),
  })
  .openapi({ required: ['Actions'] })
  .openapi('DescribeBudgetActionsForBudgetResponse')

const DescribeBudgetActionsForBudgetRequestSchema = z
  .object({
    AccountId: AccountIdSchema,
    BudgetName: BudgetNameSchema,
    MaxResults: MaxResultsSchema.exactOptional(),
    NextToken: GenericStringSchema.exactOptional(),
  })
  .openapi({
    required: ['AccountId', 'BudgetName'],
    title: 'DescribeBudgetActionsForBudgetRequest',
  })
  .openapi('DescribeBudgetActionsForBudgetRequest')

const NotificationsSchema = z
  .array(NotificationSchema)
  .openapi({ description: ' A list of notifications.' })
  .openapi('Notifications')

const BudgetNotificationsForAccountSchema = z
  .object({
    Notifications: NotificationsSchema.exactOptional(),
    BudgetName: BudgetNameSchema.exactOptional(),
  })
  .openapi({
    description: ' The budget name and associated notifications for an account. ',
    required: [],
  })
  .openapi('BudgetNotificationsForAccount')

const BudgetNotificationsForAccountListSchema = z
  .array(BudgetNotificationsForAccountSchema)
  .max(50)
  .openapi('BudgetNotificationsForAccountList')

const DescribeBudgetNotificationsForAccountResponseSchema = z
  .object({
    BudgetNotificationsForAccount: BudgetNotificationsForAccountListSchema.and(
      z
        .any()
        .openapi({
          description: ' A list of budget names and associated notifications for an account. ',
        }),
    ).exactOptional(),
    NextToken: GenericStringSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeBudgetNotificationsForAccountResponse')

const MaxResultsBudgetNotificationsSchema = z
  .int()
  .min(1)
  .max(50)
  .openapi('MaxResultsBudgetNotifications')

const DescribeBudgetNotificationsForAccountRequestSchema = z
  .object({
    AccountId: AccountIdSchema,
    MaxResults: MaxResultsBudgetNotificationsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An integer that shows how many budget name entries a paginated response contains. ',
        }),
    ).exactOptional(),
    NextToken: GenericStringSchema.exactOptional(),
  })
  .openapi({ required: ['AccountId'], title: 'DescribeBudgetNotificationsForAccountRequest' })
  .openapi('DescribeBudgetNotificationsForAccountRequest')

const ExpiredNextTokenExceptionSchema = z.any().openapi('ExpiredNextTokenException')

const BudgetedAndActualAmountsSchema = z
  .object({
    BudgetedAmount: SpendSchema.and(
      z
        .any()
        .openapi({ description: 'The amount of cost or usage that you created the budget for.' }),
    ).exactOptional(),
    ActualAmount: SpendSchema.and(
      z.any().openapi({ description: 'Your actual costs or usage for a budget period.' }),
    ).exactOptional(),
    TimePeriod: TimePeriodSchema.and(
      z.any().openapi({ description: "The time period that's covered by this budget comparison." }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The amount of cost or usage that you created the budget for, compared to your actual costs or usage.',
    required: [],
  })
  .openapi('BudgetedAndActualAmounts')

const BudgetedAndActualAmountsListSchema = z
  .array(BudgetedAndActualAmountsSchema)
  .openapi('BudgetedAndActualAmountsList')

const BudgetPerformanceHistorySchema = z
  .object({
    BudgetName: BudgetNameSchema.exactOptional(),
    BudgetType: BudgetTypeSchema.exactOptional(),
    CostFilters: CostFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'The history of the cost filters for a budget during the specified time period.',
        }),
    ).exactOptional(),
    CostTypes: CostTypesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The history of the cost types for a budget during the specified time period.',
        }),
    ).exactOptional(),
    TimeUnit: TimeUnitSchema.exactOptional(),
    BudgetedAndActualAmountsList: BudgetedAndActualAmountsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of amounts of cost or usage that you created budgets for, which are compared to your actual costs or usage.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "A history of the state of a budget at the end of the budget's specified time period.",
    required: [],
  })
  .openapi('BudgetPerformanceHistory')

const DescribeBudgetPerformanceHistoryResponseSchema = z
  .object({
    BudgetPerformanceHistory: BudgetPerformanceHistorySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The history of how often the budget has gone into an <code>ALARM</code> state.</p> <p>For <code>DAILY</code> budgets, the history saves the state of the budget for the last 60 days. For <code>MONTHLY</code> budgets, the history saves the state of the budget for the current month plus the last 12 months. For <code>QUARTERLY</code> budgets, the history saves the state of the budget for the last four quarters.</p>',
        }),
    ).exactOptional(),
    NextToken: GenericStringSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeBudgetPerformanceHistoryResponse')

const DescribeBudgetPerformanceHistoryRequestSchema = z
  .object({
    AccountId: AccountIdSchema,
    BudgetName: BudgetNameSchema,
    TimePeriod: TimePeriodSchema.and(
      z
        .any()
        .openapi({
          description:
            'Retrieves how often the budget went into an <code>ALARM</code> state for the specified time period.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.exactOptional(),
    NextToken: GenericStringSchema.exactOptional(),
  })
  .openapi({
    required: ['AccountId', 'BudgetName'],
    title: 'DescribeBudgetPerformanceHistoryRequest',
  })
  .openapi('DescribeBudgetPerformanceHistoryRequest')

const BudgetsSchema = z
  .array(BudgetSchema)
  .openapi({ description: ' A list of budgets.' })
  .openapi('Budgets')

const DescribeBudgetsResponseSchema = z
  .object({
    Budgets: BudgetsSchema.and(
      z.any().openapi({ description: 'A list of budgets.' }),
    ).exactOptional(),
    NextToken: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token in the service response that indicates the next set of results that you can retrieve.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: ' Response of DescribeBudgets ', required: [] })
  .openapi('DescribeBudgetsResponse')

const DescribeBudgetsRequestSchema = z
  .object({
    AccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>accountId</code> that is associated with the budgets that you want descriptions of.',
        }),
    ),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional integer that represents how many entries a paginated response contains. The maximum is 100.',
        }),
    ).exactOptional(),
    NextToken: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token that you include in your request to indicate the next set of results that you want to retrieve.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['AccountId'],
    title: 'DescribeBudgetsRequest',
    description: ' Request of DescribeBudgets ',
  })
  .openapi('DescribeBudgetsRequest')

const DescribeNotificationsForBudgetResponseSchema = z
  .object({
    Notifications: NotificationsSchema.and(
      z
        .any()
        .openapi({ description: 'A list of notifications that are associated with a budget.' }),
    ).exactOptional(),
    NextToken: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token in the service response that indicates the next set of results that you can retrieve.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: ' Response of GetNotificationsForBudget ', required: [] })
  .openapi('DescribeNotificationsForBudgetResponse')

const DescribeNotificationsForBudgetRequestSchema = z
  .object({
    AccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>accountId</code> that is associated with the budget whose notifications you want descriptions of.',
        }),
    ),
    BudgetName: BudgetNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the budget whose notifications you want descriptions of.',
        }),
    ),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional integer that represents how many entries a paginated response contains. The maximum is 100.',
        }),
    ).exactOptional(),
    NextToken: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token that you include in your request to indicate the next set of results that you want to retrieve.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['AccountId', 'BudgetName'],
    title: 'DescribeNotificationsForBudgetRequest',
    description: ' Request of DescribeNotificationsForBudget ',
  })
  .openapi('DescribeNotificationsForBudgetRequest')

const DescribeSubscribersForNotificationResponseSchema = z
  .object({
    Subscribers: SubscribersSchema.and(
      z
        .any()
        .openapi({ description: 'A list of subscribers that are associated with a notification.' }),
    ).exactOptional(),
    NextToken: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token in the service response that indicates the next set of results that you can retrieve.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: ' Response of DescribeSubscribersForNotification ', required: [] })
  .openapi('DescribeSubscribersForNotificationResponse')

const DescribeSubscribersForNotificationRequestSchema = z
  .object({
    AccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>accountId</code> that is associated with the budget whose subscribers you want descriptions of.',
        }),
    ),
    BudgetName: BudgetNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the budget whose subscribers you want descriptions of.',
        }),
    ),
    Notification: NotificationSchema.and(
      z.any().openapi({ description: 'The notification whose subscribers you want to list.' }),
    ),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional integer that represents how many entries a paginated response contains. The maximum is 100.',
        }),
    ).exactOptional(),
    NextToken: GenericStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token that you include in your request to indicate the next set of results that you want to retrieve.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['AccountId', 'BudgetName', 'Notification'],
    title: 'DescribeSubscribersForNotificationRequest',
    description: ' Request of DescribeSubscribersForNotification ',
  })
  .openapi('DescribeSubscribersForNotificationRequest')

const ExecutionTypeSchema = z
  .enum([
    'APPROVE_BUDGET_ACTION',
    'RETRY_BUDGET_ACTION',
    'REVERSE_BUDGET_ACTION',
    'RESET_BUDGET_ACTION',
  ])
  .openapi('ExecutionType')

const ExecuteBudgetActionResponseSchema = z
  .object({
    AccountId: AccountIdSchema,
    BudgetName: BudgetNameSchema,
    ActionId: ActionIdSchema.and(
      z
        .any()
        .openapi({
          description: ' A system-generated universally unique identifier (UUID) for the action. ',
        }),
    ),
    ExecutionType: ExecutionTypeSchema.and(
      z.any().openapi({ description: ' The type of execution. ' }),
    ),
  })
  .openapi({ required: ['AccountId', 'BudgetName', 'ActionId', 'ExecutionType'] })
  .openapi('ExecuteBudgetActionResponse')

const ExecuteBudgetActionRequestSchema = z
  .object({
    AccountId: AccountIdSchema,
    BudgetName: BudgetNameSchema,
    ActionId: ActionIdSchema.and(
      z
        .any()
        .openapi({
          description: ' A system-generated universally unique identifier (UUID) for the action. ',
        }),
    ),
    ExecutionType: ExecutionTypeSchema.and(
      z.any().openapi({ description: ' The type of execution. ' }),
    ),
  })
  .openapi({
    required: ['AccountId', 'BudgetName', 'ActionId', 'ExecutionType'],
    title: 'ExecuteBudgetActionRequest',
  })
  .openapi('ExecuteBudgetActionRequest')

const UpdateBudgetResponseSchema = z
  .object({})
  .openapi({ description: ' Response of UpdateBudget ' })
  .openapi('UpdateBudgetResponse')

const UpdateBudgetRequestSchema = z
  .object({
    AccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>accountId</code> that is associated with the budget that you want to update.',
        }),
    ),
    NewBudget: BudgetSchema.and(
      z.any().openapi({ description: 'The budget that you want to update your budget to.' }),
    ),
  })
  .openapi({
    required: ['AccountId', 'NewBudget'],
    title: 'UpdateBudgetRequest',
    description: ' Request of UpdateBudget ',
  })
  .openapi('UpdateBudgetRequest')

const UpdateBudgetActionResponseSchema = z
  .object({
    AccountId: AccountIdSchema,
    BudgetName: BudgetNameSchema,
    OldAction: ActionSchema.and(
      z.any().openapi({ description: ' The previous action resource information. ' }),
    ),
    NewAction: ActionSchema.and(
      z.any().openapi({ description: ' The updated action resource information. ' }),
    ),
  })
  .openapi({ required: ['AccountId', 'BudgetName', 'OldAction', 'NewAction'] })
  .openapi('UpdateBudgetActionResponse')

const UpdateBudgetActionRequestSchema = z
  .object({
    AccountId: AccountIdSchema,
    BudgetName: BudgetNameSchema,
    ActionId: ActionIdSchema.and(
      z
        .any()
        .openapi({
          description: ' A system-generated universally unique identifier (UUID) for the action. ',
        }),
    ),
    NotificationType: NotificationTypeSchema.exactOptional(),
    ActionThreshold: ActionThresholdSchema.exactOptional(),
    Definition: DefinitionSchema.exactOptional(),
    ExecutionRoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The role passed for action execution and reversion. Roles and actions must be in the same account. ',
        }),
    ).exactOptional(),
    ApprovalModel: ApprovalModelSchema.and(
      z
        .any()
        .openapi({
          description: ' This specifies if the action needs manual or automatic approval. ',
        }),
    ).exactOptional(),
    Subscribers: SubscribersSchema.exactOptional(),
  })
  .openapi({
    required: ['AccountId', 'BudgetName', 'ActionId'],
    title: 'UpdateBudgetActionRequest',
  })
  .openapi('UpdateBudgetActionRequest')

const UpdateNotificationResponseSchema = z
  .object({})
  .openapi({ description: ' Response of UpdateNotification ' })
  .openapi('UpdateNotificationResponse')

const UpdateNotificationRequestSchema = z
  .object({
    AccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>accountId</code> that is associated with the budget whose notification you want to update.',
        }),
    ),
    BudgetName: BudgetNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the budget whose notification you want to update.' }),
    ),
    OldNotification: NotificationSchema.and(
      z
        .any()
        .openapi({ description: 'The previous notification that is associated with a budget.' }),
    ),
    NewNotification: NotificationSchema.and(
      z.any().openapi({ description: 'The updated notification to be associated with a budget.' }),
    ),
  })
  .openapi({
    required: ['AccountId', 'BudgetName', 'OldNotification', 'NewNotification'],
    title: 'UpdateNotificationRequest',
    description: ' Request of UpdateNotification ',
  })
  .openapi('UpdateNotificationRequest')

const UpdateSubscriberResponseSchema = z
  .object({})
  .openapi({ description: ' Response of UpdateSubscriber ' })
  .openapi('UpdateSubscriberResponse')

const UpdateSubscriberRequestSchema = z
  .object({
    AccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>accountId</code> that is associated with the budget whose subscriber you want to update.',
        }),
    ),
    BudgetName: BudgetNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the budget whose subscriber you want to update.' }),
    ),
    Notification: NotificationSchema.and(
      z.any().openapi({ description: 'The notification whose subscriber you want to update.' }),
    ),
    OldSubscriber: SubscriberSchema.and(
      z
        .any()
        .openapi({
          description: 'The previous subscriber that is associated with a budget notification.',
        }),
    ),
    NewSubscriber: SubscriberSchema.and(
      z
        .any()
        .openapi({
          description: 'The updated subscriber that is associated with a budget notification.',
        }),
    ),
  })
  .openapi({
    required: ['AccountId', 'BudgetName', 'Notification', 'OldSubscriber', 'NewSubscriber'],
    title: 'UpdateSubscriberRequest',
    description: ' Request of UpdateSubscriber ',
  })
  .openapi('UpdateSubscriberRequest')

const XAmzContentSha256ParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Content-Sha256',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzDateParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Date', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzAlgorithmParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Algorithm', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzCredentialParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Credential', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSecurityTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Security-Token',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzSignatureParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Signature', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSignedHeadersParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-SignedHeaders',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const HmacSecurityScheme = {
  type: 'apiKey',
  name: 'Authorization',
  in: 'header',
  description: 'Amazon Signature authorization v4',
  'x-amazon-apigateway-authtype': 'awsSigv4',
}

export const postXAmzTargetAWSBudgetServiceGatewayCreateBudgetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSBudgetServiceGateway.CreateBudget',
  description:
    '<p>Creates a budget and, if included, notifications and subscribers. </p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_CreateBudget.html#API_CreateBudget_Examples">Examples</a> section. </p> </important>',
  operationId: 'CreateBudget',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSBudgetServiceGateway.CreateBudget')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSBudgetServiceGateway.CreateBudget'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateBudgetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateBudgetResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'CreationLimitExceededException',
      content: { 'application/json': { schema: CreationLimitExceededExceptionSchema } },
    },
    483: {
      description: 'DuplicateRecordException',
      content: { 'application/json': { schema: DuplicateRecordExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSBudgetServiceGatewayCreateBudgetActionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSBudgetServiceGateway.CreateBudgetAction',
  description: ' Creates a budget action. ',
  operationId: 'CreateBudgetAction',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSBudgetServiceGateway.CreateBudgetAction')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSBudgetServiceGateway.CreateBudgetAction'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateBudgetActionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateBudgetActionResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'CreationLimitExceededException',
      content: { 'application/json': { schema: CreationLimitExceededExceptionSchema } },
    },
    483: {
      description: 'DuplicateRecordException',
      content: { 'application/json': { schema: DuplicateRecordExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSBudgetServiceGatewayCreateNotificationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSBudgetServiceGateway.CreateNotification',
  description:
    'Creates a notification. You must create the budget before you create the associated notification.',
  operationId: 'CreateNotification',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSBudgetServiceGateway.CreateNotification')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSBudgetServiceGateway.CreateNotification'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateNotificationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateNotificationResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'CreationLimitExceededException',
      content: { 'application/json': { schema: CreationLimitExceededExceptionSchema } },
    },
    484: {
      description: 'DuplicateRecordException',
      content: { 'application/json': { schema: DuplicateRecordExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSBudgetServiceGatewayCreateSubscriberRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSBudgetServiceGateway.CreateSubscriber',
  description:
    'Creates a subscriber. You must create the associated budget and notification before you create the subscriber.',
  operationId: 'CreateSubscriber',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSBudgetServiceGateway.CreateSubscriber')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSBudgetServiceGateway.CreateSubscriber'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateSubscriberRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateSubscriberResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'CreationLimitExceededException',
      content: { 'application/json': { schema: CreationLimitExceededExceptionSchema } },
    },
    483: {
      description: 'DuplicateRecordException',
      content: { 'application/json': { schema: DuplicateRecordExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSBudgetServiceGatewayDeleteBudgetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudget',
  description:
    '<p>Deletes a budget. You can delete your budget at any time.</p> <important> <p>Deleting a budget also deletes the notifications and subscribers that are associated with that budget.</p> </important>',
  operationId: 'DeleteBudget',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSBudgetServiceGateway.DeleteBudget')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSBudgetServiceGateway.DeleteBudget'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteBudgetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteBudgetResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSBudgetServiceGatewayDeleteBudgetActionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudgetAction',
  description: ' Deletes a budget action. ',
  operationId: 'DeleteBudgetAction',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSBudgetServiceGateway.DeleteBudgetAction')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSBudgetServiceGateway.DeleteBudgetAction'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteBudgetActionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteBudgetActionResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceLockedException',
      content: { 'application/json': { schema: ResourceLockedExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSBudgetServiceGatewayDeleteNotificationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSBudgetServiceGateway.DeleteNotification',
  description:
    '<p>Deletes a notification.</p> <important> <p>Deleting a notification also deletes the subscribers that are associated with the notification.</p> </important>',
  operationId: 'DeleteNotification',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSBudgetServiceGateway.DeleteNotification')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSBudgetServiceGateway.DeleteNotification'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteNotificationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteNotificationResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSBudgetServiceGatewayDeleteSubscriberRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSBudgetServiceGateway.DeleteSubscriber',
  description:
    '<p>Deletes a subscriber.</p> <important> <p>Deleting the last subscriber to a notification also deletes the notification.</p> </important>',
  operationId: 'DeleteSubscriber',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSBudgetServiceGateway.DeleteSubscriber')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSBudgetServiceGateway.DeleteSubscriber'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteSubscriberRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteSubscriberResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSBudgetServiceGatewayDescribeBudgetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudget',
  description:
    '<p>Describes a budget.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudget.html#API_DescribeBudget_Examples">Examples</a> section. </p> </important>',
  operationId: 'DescribeBudget',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSBudgetServiceGateway.DescribeBudget')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSBudgetServiceGateway.DescribeBudget'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeBudgetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeBudgetResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetAction',
  description: ' Describes a budget action detail. ',
  operationId: 'DescribeBudgetAction',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSBudgetServiceGateway.DescribeBudgetAction')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSBudgetServiceGateway.DescribeBudgetAction'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeBudgetActionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeBudgetActionResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionHistoriesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionHistories',
  description: ' Describes a budget action history detail. ',
  operationId: 'DescribeBudgetActionHistories',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSBudgetServiceGateway.DescribeBudgetActionHistories')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSBudgetServiceGateway.DescribeBudgetActionHistories'],
            },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeBudgetActionHistoriesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeBudgetActionHistoriesResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionsForAccountRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForAccount',
    description: ' Describes all of the budget actions for an account. ',
    operationId: 'DescribeBudgetActionsForAccount',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSBudgetServiceGateway.DescribeBudgetActionsForAccount')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSBudgetServiceGateway.DescribeBudgetActionsForAccount'],
              },
            },
          }),
      }),
      query: z.object({
        MaxResults: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'MaxResults',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination limit',
              required: false,
            },
          }),
        NextToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'NextToken',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DescribeBudgetActionsForAccountRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeBudgetActionsForAccountResponseSchema } },
      },
      480: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      483: {
        description: 'InvalidNextTokenException',
        content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
      },
      484: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSBudgetServiceGatewayDescribeBudgetActionsForBudgetRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForBudget',
    description: ' Describes all of the budget actions for a budget. ',
    operationId: 'DescribeBudgetActionsForBudget',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSBudgetServiceGateway.DescribeBudgetActionsForBudget')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSBudgetServiceGateway.DescribeBudgetActionsForBudget'],
              },
            },
          }),
      }),
      query: z.object({
        MaxResults: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'MaxResults',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination limit',
              required: false,
            },
          }),
        NextToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'NextToken',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DescribeBudgetActionsForBudgetRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeBudgetActionsForBudgetResponseSchema } },
      },
      480: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      483: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      484: {
        description: 'InvalidNextTokenException',
        content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
      },
      485: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetAWSBudgetServiceGatewayDescribeBudgetNotificationsForAccountRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetNotificationsForAccount',
    description: ' Lists the budget names and notifications that are associated with an account. ',
    operationId: 'DescribeBudgetNotificationsForAccount',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSBudgetServiceGateway.DescribeBudgetNotificationsForAccount')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSBudgetServiceGateway.DescribeBudgetNotificationsForAccount'],
              },
            },
          }),
      }),
      query: z.object({
        MaxResults: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'MaxResults',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination limit',
              required: false,
            },
          }),
        NextToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'NextToken',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: DescribeBudgetNotificationsForAccountRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DescribeBudgetNotificationsForAccountResponseSchema },
        },
      },
      480: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      483: {
        description: 'InvalidNextTokenException',
        content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
      },
      484: {
        description: 'ExpiredNextTokenException',
        content: { 'application/json': { schema: ExpiredNextTokenExceptionSchema } },
      },
      485: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      486: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSBudgetServiceGatewayDescribeBudgetPerformanceHistoryRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory',
    description:
      "Describes the history for <code>DAILY</code>, <code>MONTHLY</code>, and <code>QUARTERLY</code> budgets. Budget history isn't available for <code>ANNUAL</code> budgets.",
    operationId: 'DescribeBudgetPerformanceHistory',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory'],
              },
            },
          }),
      }),
      query: z.object({
        MaxResults: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'MaxResults',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination limit',
              required: false,
            },
          }),
        NextToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'NextToken',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DescribeBudgetPerformanceHistoryRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeBudgetPerformanceHistoryResponseSchema } },
      },
      480: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      483: {
        description: 'InvalidNextTokenException',
        content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
      },
      484: {
        description: 'ExpiredNextTokenException',
        content: { 'application/json': { schema: ExpiredNextTokenExceptionSchema } },
      },
      485: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      486: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSBudgetServiceGatewayDescribeBudgetsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgets',
  description:
    '<p>Lists the budgets that are associated with an account.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudgets.html#API_DescribeBudgets_Examples">Examples</a> section. </p> </important>',
  operationId: 'DescribeBudgets',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSBudgetServiceGateway.DescribeBudgets')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSBudgetServiceGateway.DescribeBudgets'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeBudgetsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeBudgetsResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    484: {
      description: 'ExpiredNextTokenException',
      content: { 'application/json': { schema: ExpiredNextTokenExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSBudgetServiceGatewayDescribeNotificationsForBudgetRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=AWSBudgetServiceGateway.DescribeNotificationsForBudget',
    description: 'Lists the notifications that are associated with a budget.',
    operationId: 'DescribeNotificationsForBudget',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSBudgetServiceGateway.DescribeNotificationsForBudget')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSBudgetServiceGateway.DescribeNotificationsForBudget'],
              },
            },
          }),
      }),
      query: z.object({
        MaxResults: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'MaxResults',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination limit',
              required: false,
            },
          }),
        NextToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'NextToken',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DescribeNotificationsForBudgetRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeNotificationsForBudgetResponseSchema } },
      },
      480: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      482: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      483: {
        description: 'InvalidNextTokenException',
        content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
      },
      484: {
        description: 'ExpiredNextTokenException',
        content: { 'application/json': { schema: ExpiredNextTokenExceptionSchema } },
      },
      485: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      486: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetAWSBudgetServiceGatewayDescribeSubscribersForNotificationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSBudgetServiceGateway.DescribeSubscribersForNotification',
    description: 'Lists the subscribers that are associated with a notification.',
    operationId: 'DescribeSubscribersForNotification',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSBudgetServiceGateway.DescribeSubscribersForNotification')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSBudgetServiceGateway.DescribeSubscribersForNotification'],
              },
            },
          }),
      }),
      query: z.object({
        MaxResults: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'MaxResults',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination limit',
              required: false,
            },
          }),
        NextToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'NextToken',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: DescribeSubscribersForNotificationRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DescribeSubscribersForNotificationResponseSchema },
        },
      },
      480: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
      481: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      482: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      483: {
        description: 'InvalidNextTokenException',
        content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
      },
      484: {
        description: 'ExpiredNextTokenException',
        content: { 'application/json': { schema: ExpiredNextTokenExceptionSchema } },
      },
      485: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      486: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSBudgetServiceGatewayExecuteBudgetActionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSBudgetServiceGateway.ExecuteBudgetAction',
  description: ' Executes a budget action. ',
  operationId: 'ExecuteBudgetAction',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSBudgetServiceGateway.ExecuteBudgetAction')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSBudgetServiceGateway.ExecuteBudgetAction'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ExecuteBudgetActionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ExecuteBudgetActionResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceLockedException',
      content: { 'application/json': { schema: ResourceLockedExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSBudgetServiceGatewayUpdateBudgetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudget',
  description:
    '<p>Updates a budget. You can change every part of a budget except for the <code>budgetName</code> and the <code>calculatedSpend</code>. When you modify a budget, the <code>calculatedSpend</code> drops to zero until Amazon Web Services has new usage data to use for forecasting.</p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_UpdateBudget.html#API_UpdateBudget_Examples">Examples</a> section. </p> </important>',
  operationId: 'UpdateBudget',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSBudgetServiceGateway.UpdateBudget')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSBudgetServiceGateway.UpdateBudget'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateBudgetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateBudgetResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSBudgetServiceGatewayUpdateBudgetActionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudgetAction',
  description: ' Updates a budget action. ',
  operationId: 'UpdateBudgetAction',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSBudgetServiceGateway.UpdateBudgetAction')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSBudgetServiceGateway.UpdateBudgetAction'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateBudgetActionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateBudgetActionResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceLockedException',
      content: { 'application/json': { schema: ResourceLockedExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSBudgetServiceGatewayUpdateNotificationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSBudgetServiceGateway.UpdateNotification',
  description: 'Updates a notification.',
  operationId: 'UpdateNotification',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSBudgetServiceGateway.UpdateNotification')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSBudgetServiceGateway.UpdateNotification'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateNotificationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateNotificationResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'DuplicateRecordException',
      content: { 'application/json': { schema: DuplicateRecordExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSBudgetServiceGatewayUpdateSubscriberRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSBudgetServiceGateway.UpdateSubscriber',
  description: 'Updates a subscriber.',
  operationId: 'UpdateSubscriber',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSBudgetServiceGateway.UpdateSubscriber')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSBudgetServiceGateway.UpdateSubscriber'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateSubscriberRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateSubscriberResponseSchema } },
    },
    480: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'DuplicateRecordException',
      content: { 'application/json': { schema: DuplicateRecordExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})
