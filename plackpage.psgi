my $content_types = {
    '.js'     => 'text/javascript',
    '.ico'    => 'image/x-icon',
    '.json'   => 'application/json',
    '.css'    => 'text/css',
    '.htm'    => 'text/html',
    '.html'   => 'text/html',
    '.jpg'    => 'image/jpeg',
    '.jpeg'   => 'image/jpeg',
    '.png'    => 'image/png',
    '.woff'   => 'application/x-font-woff',
    '.ttf'    => 'application/x-font-ttf',
    '.gif'    => 'image/gif',
};

my $app = sub {
    my $env = shift;
    foreach my $key ( keys %$content_types ) {
        my $filepath = "." . $env->{PATH_INFO};
        if ( $filepath =~ /($key)$/ && -e $filepath ) {
            open my $fh, "<:raw", $filepath or die $!;
            return [ 200, ['Content-Type' =>  $content_types->{ $key } ], $fh ];
        } 
    }
    DEFAULT_404: {
        return [ 404, ['Content-Type' => 'text/html'], [ '404 Not Found' ] ]
    }
};
