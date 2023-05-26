<?php   
    usleep(400000);

    $getPost = filter_input_array(INPUT_POST, FILTER_DEFAULT);
    $getFile = $_FILES;

    $response['post'] = $getPost;
    $response['image'] = $getFile;

    if ($getFile) {
        if (!file_exists('uploads')) {
            mkdir("uploads", 0755, true);
        }

        move_uploaded_file($getFile['photo']['tmp_name'], "uploads/{$getFile['photo']['name']}");
    }

    echo json_encode($response);