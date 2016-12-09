FROM kenjiskywalker/dockerfile-angular-cli-with-phantomjs
# Ref: https://hub.docker.com/r/kenjiskywalker/dockerfile-angular-cli-with-phantomjs/~/dockerfile/

ARG APP_HOME

RUN mkdir -p $APP_HOME

# TODO: https://github.com/npm/npm/issues/8836#issuecomment-234305443
#       npm install の時間を減らす hack

# 依存モジュールのバージョンの差異の影響を受けたくないために
# 新しいパッケージを追加した場合は必ず`npm shrinkwrap`を実行する

COPY package.json npm-shrinkwrap.json $APP_HOME/
WORKDIR $APP_HOME

RUN npm install .
