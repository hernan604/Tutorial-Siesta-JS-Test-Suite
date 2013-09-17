my $app = sub {
    my $env = shift;
    if ($env->{PATH_INFO} eq '/favicon.ico' && -e ".".$env->{PATH_INFO} ) {
        open my $fh, "<:raw", ".".$env->{PATH_INFO} or die $!;
        return [ 200, ['Content-Type' => 'image/x-icon'], $fh ];
    } 
    elsif ( $env->{PATH_INFO} =~ /(\.js)$/ &&
       -e ".".$env->{PATH_INFO} ) {
        open my $fh, "<:raw", ".".$env->{ PATH_INFO } or die $!;
        return [ 200, ['Content-Type' => 'text/javascript'], $fh ];
    } 
    elsif ( $env->{PATH_INFO} =~ /(\.json)$/ &&
       -e ".".$env->{PATH_INFO} ) {
        open my $fh, "<:raw", ".".$env->{ PATH_INFO } or die $!;
        return [ 200, ['Content-Type' => 'application/json'], $fh ];
    } 
    elsif ( $env->{PATH_INFO} =~ /(\.css)$/ &&
       -e ".".$env->{PATH_INFO} ) {
        open my $fh, "<:raw", ".".$env->{ PATH_INFO } or die $!;
        return [ 200, ['Content-Type' => 'text/css'], $fh ];
    } 
    elsif ( $env->{PATH_INFO} =~ /(\.htm|\.html)$/ &&
       -e ".".$env->{PATH_INFO} ) {
        open my $fh, "<:raw", ".".$env->{ PATH_INFO } or die $!;
        return [ 200, ['Content-Type' => 'text/html'], $fh ];
    } 
    elsif ( $env->{PATH_INFO} =~ /(\.jpg|\.jpeg)$/ &&
       -e ".".$env->{PATH_INFO} ) {
        open my $fh, "<:raw", ".".$env->{ PATH_INFO } or die $!;
        return [ 200, ['Content-Type' => 'image/jpeg'], $fh ];
    } 
    elsif ( $env->{PATH_INFO} =~ /(\.png)$/ &&
       -e ".".$env->{PATH_INFO} ) {
        open my $fh, "<:raw", ".".$env->{ PATH_INFO } or die $!;
        return [ 200, ['Content-Type' => 'image/png'], $fh ];
    } 
    elsif ( $env->{PATH_INFO} =~ /(\.woff)$/ &&
       -e ".".$env->{PATH_INFO} ) {
        open my $fh, "<:raw", ".".$env->{ PATH_INFO } or die $!;
        return [ 200, ['Content-Type' => 'application/x-font-woff'], $fh ];
    } 
    elsif ( $env->{PATH_INFO} =~ /(\.ttf)$/ &&
       -e ".".$env->{PATH_INFO} ) {
        open my $fh, "<:raw", ".".$env->{ PATH_INFO } or die $!;
        return [ 200, ['Content-Type' => 'application/x-font-ttf'], $fh ];
    } 
    elsif ( $env->{PATH_INFO} =~ /(\.gif)$/ &&
       -e ".".$env->{PATH_INFO} ) {
        open my $fh, "<:raw", ".".$env->{ PATH_INFO } or die $!;
        return [ 200, ['Content-Type' => 'image/gif'], $fh ];
    } 
    elsif ($env->{PATH_INFO} eq '/') {
        return [ 200, ['Content-Type' => 'text/plain'], [ "Hello again" ] ];
    } 
    else {
        return [ 404, ['Content-Type' => 'text/html'], [ '404 Not Found' ] ];
    }
};
