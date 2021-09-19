##### Separation of Concern (SoC) method
The method is very simple. We have User, then we create User folder inside this folder (app/module).
We keep everything related to user in that folder (app/module/User). We may have UserController, UserService, UserModel, and etc. inside a single folder.

With this approach, it's expected that the codes are reusable also easy to find or manage.