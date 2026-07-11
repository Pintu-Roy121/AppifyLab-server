import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";
import { JwtPayload } from "jsonwebtoken";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { CommentLikeServices } from "./commentLike.Service";

const createCommentLike = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await CommentLikeServices.createCommentLike(
      req.body,
      req.user as JwtPayload,
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Successful",
      data: result,
    });
  },
);

export const CommentLikeController = { createCommentLike };
