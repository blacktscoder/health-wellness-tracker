import { DynamoDB } from 'aws-sdk';
const dynamoDb = new DynamoDB.DocumentClient();

export const resolvers = {
  Query: {
    getHealthData: async (_: any, { userId }: { userId: string }) => {
      const params = {
        TableName: process.env.DYNAMODB_TABLE!,
        Key: { userId }
      };

      const result = await dynamoDb.get(params).promise();
      return result.Item;
    }
  },

  Mutation: {
    addHealthData: async (_: any, { userId, steps, calories, waterIntake }: any) => {
      const params = {
        TableName: process.env.DYNAMODB_TABLE!,
        Item: { userId, steps, calories, waterIntake }
      };

      await dynamoDb.put(params).promise();
      return { userId, steps, calories, waterIntake };
    }
  }
};
