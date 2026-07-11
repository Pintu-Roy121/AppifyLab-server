import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";
import { JwtPayload } from "jsonwebtoken";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { ReplyLikeServices } from "./replyLike.service";

const createReplyLike = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await ReplyLikeServices.createReplyLike(
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

export const ReplyLikeController = { createReplyLike };
